// Funk mode widgets backend: visitor counter, who's online, the cauldron and the poll. Host-neutral (a web
// Request in, a Response out): Cloudflare Pages calls it through functions/api/funk.js with its env bindings;
// any Node host that passes process.env works the same.
// Storage is Upstash Redis over its REST API, so there is no dependency to install. Add an Upstash
// Redis store to the Vercel project (Storage tab, or `vercel integration add upstash`); it sets
// KV_REST_API_URL and KV_REST_API_TOKEN. Without them every call answers 503 and the page says the
// counter is offline instead of making numbers up.
//
//   GET  /api/funk                       -> current stats, read-only
//   POST /api/funk {op:"visit", id}      -> counts a new visitor once per browser id, marks it online
//   POST /api/funk {op:"ping", id}       -> heartbeat; keeps the visitor in "browsing right now"
//   POST /api/funk {op:"bye", id}        -> leaves "browsing right now" (sent with sendBeacon)
//   POST /api/funk {op:"stir", id, n}    -> adds n (1-25) stirs to the shared cauldron
//   POST /api/funk {op:"vote", id, choice} -> one vote per browser id in the poll

let URL_ = "";
let TOKEN = "";
// Read per request: on Cloudflare the env arrives with the request, not as process.env.
const configure = (env) => {
  const e = env || (typeof process !== "undefined" ? process.env : {}) || {};
  URL_ = e.KV_REST_API_URL || e.UPSTASH_REDIS_REST_URL || "";
  TOKEN = e.KV_REST_API_TOKEN || e.UPSTASH_REDIS_REST_TOKEN || "";
};
const K = "funk:";
const ONLINE_MS = 75_000;         // a visitor counts as online for 75 s after their last heartbeat
const POLL_OPTIONS = 3;
const RATE_PER_MIN = 120;         // per IP, across all ops
const YEAR = 60 * 60 * 24 * 365;

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });

async function redis(commands) {
  const r = await fetch(URL_ + "/pipeline", {
    method: "POST",
    headers: { authorization: "Bearer " + TOKEN, "content-type": "application/json" },
    body: JSON.stringify(commands),
  });
  if (!r.ok) throw new Error("redis " + r.status);
  return (await r.json()).map((x) => {
    if (x.error) throw new Error(x.error);
    return x.result;
  });
}

const num = (v) => Number(v) || 0;
const statsCommands = (now) => [
  ["ZREMRANGEBYSCORE", K + "online", "-inf", String(now - ONLINE_MS)],
  ["ZCARD", K + "online"],
  ["GET", K + "visitors"],
  ["GET", K + "stirs"],
  ["HMGET", K + "poll", ...Array.from({ length: POLL_OPTIONS }, (_, i) => String(i))],
  ["GET", K + "since"],
];
const stats = (r) => ({
  online: Math.max(1, num(r[1])),
  visitors: num(r[2]),
  stirs: num(r[3]),
  poll: r[4].map(num),
  since: r[5],
});

export async function GET(_request, env) {
  configure(env);
  if (!URL_ || !TOKEN) return json({ error: "not-configured" }, 503);
  try {
    return json(stats(await redis(statsCommands(Date.now()))));
  } catch {
    return json({ error: "storage" }, 502);
  }
}

export async function POST(request, env) {
  configure(env);
  if (!URL_ || !TOKEN) return json({ error: "not-configured" }, 503);
  let body;
  try {
    body = JSON.parse(await request.text()); // sendBeacon posts text/plain, so parse by hand
  } catch {
    return json({ error: "bad-json" }, 400);
  }
  const { op, id } = body || {};
  if (typeof id !== "string" || !/^[a-z0-9-]{8,64}$/i.test(id)) return json({ error: "bad-id" }, 400);

  const now = Date.now();
  const ip =
    request.headers.get("cf-connecting-ip") ||
    (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() ||
    "unknown";
  const rl = K + "rl:" + ip + ":" + Math.floor(now / 60_000);

  try {
    const [hits] = await redis([["INCR", rl], ["EXPIRE", rl, "120"]]);
    if (hits > RATE_PER_MIN) return json({ error: "slow-down" }, 429);

    if (op === "visit") {
      const [isNew, , vote] = await redis([
        ["SET", K + "seen:" + id, "1", "NX", "EX", String(YEAR)],
        ["SET", K + "since", new Date(now).toISOString(), "NX"],
        ["GET", K + "vote:" + id],
      ]);
      const r = await redis([
        ["ZADD", K + "online", String(now), id],
        isNew === "OK" ? ["INCR", K + "visitors"] : ["GET", K + "visitors"],
        ...statsCommands(now),
      ]);
      return json({ ...stats(r.slice(2)), visitors: num(r[1]), vote: vote === null ? null : num(vote), firstVisit: isNew === "OK" });
    }

    if (op === "ping") {
      const r = await redis([["ZADD", K + "online", String(now), id], ...statsCommands(now)]);
      return json(stats(r.slice(1)));
    }

    if (op === "bye") {
      await redis([["ZREM", K + "online", id]]);
      return json({ ok: true });
    }

    if (op === "stir") {
      const n = Math.min(25, Math.max(1, Math.floor(Number(body.n)) || 1));
      const [stirs] = await redis([["INCRBY", K + "stirs", String(n)]]);
      return json({ stirs: num(stirs) });
    }

    if (op === "vote") {
      const choice = Number(body.choice);
      if (!Number.isInteger(choice) || choice < 0 || choice >= POLL_OPTIONS) return json({ error: "bad-choice" }, 400);
      const [fresh, prior] = await redis([
        ["SET", K + "vote:" + id, String(choice), "NX", "EX", String(YEAR)],
        ["GET", K + "vote:" + id],
      ]);
      if (fresh === "OK") await redis([["HINCRBY", K + "poll", String(choice), "1"]]);
      const [poll] = await redis([["HMGET", K + "poll", ...Array.from({ length: POLL_OPTIONS }, (_, i) => String(i))]]);
      return json({ poll: poll.map(num), vote: num(prior) });
    }

    return json({ error: "bad-op" }, 400);
  } catch {
    return json({ error: "storage" }, 502);
  }
}
