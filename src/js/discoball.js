// ASCII disco ball: a lit, faceted mirror sphere rendered into a <pre>.
// The same module runs in two places:
//   - Eleventy imports renderFrame() at build time for the static frame (JS off / reduced motion).
//   - The browser loads it as a module and spins every [data-discoball] <pre> on the page.
// Each character cell is supersampled 2x4, so the outline is anti-aliased and stays round.

const RAMP = " .:-=+#%@";
const TAU = Math.PI * 2;
const BANDS = 9;          // latitude rings of mirror tiles
const EQ_TILES = 18;      // tiles around the equator; rings shrink toward the poles like a real ball
const GROUT = 0.14;       // share of each tile taken by the dark gap between mirrors
const L = norm([-0.55, 0.6, 0.6]); // key light: upper left, in front

function norm(v) { const m = Math.hypot(v[0], v[1], v[2]); return [v[0] / m, v[1] / m, v[2] / m]; }
function hash(a, b) {
  let h = (a * 374761393 + b * 668265263) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
}

// cols x rows of characters; aspect = cell height / cell width (2 when line-height is 2x the glyph width).
// rot is the spin angle in radians; tick drives the twinkles.
export function renderFrame({ cols = 24, rows = 12, aspect = 2, rot = 0.6, tick = 0 } = {}) {
  const W = cols, H = rows * aspect;            // canvas in glyph-width units
  const R = Math.min(W, H) / 2 - 0.35, cx = W / 2, cy = H / 2;
  const SX = 2, SY = 4;
  let out = "";
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      let sum = 0, hits = 0, glint = 0;
      for (let a = 0; a < SX; a++) for (let b = 0; b < SY; b++) {
        const x = (i + (a + 0.5) / SX - cx) / R;
        const y = -((j + (b + 0.5) / SY) * aspect - cy) / R; // y up
        const r2 = x * x + y * y;
        if (r2 > 1) continue;
        hits++;
        const z = Math.sqrt(1 - r2);
        // which mirror tile this point sits on
        const lat = Math.asin(y), bv = (lat / Math.PI + 0.5) * BANDS;
        const band = Math.min(BANDS - 1, Math.floor(bv)), fv = bv - band;
        const latC = ((band + 0.5) / BANDS - 0.5) * Math.PI;
        const n = Math.max(4, Math.round(EQ_TILES * Math.cos(latC)));
        const u = ((Math.atan2(x, z) + rot) / TAU) * n, k = ((Math.floor(u) % n) + n) % n, fu = u - Math.floor(u);
        // flat facet: light it with the tile's own normal, not the sphere's
        const lonC = ((k + 0.5) / n) * TAU - rot;
        const nx = Math.cos(latC) * Math.sin(lonC), ny = Math.sin(latC), nz = Math.cos(latC) * Math.cos(lonC);
        const diff = Math.max(0, nx * L[0] + ny * L[1] + nz * L[2]);
        const rz = 2 * nz; // reflect the view ray (0,0,1) about the facet normal
        const spec = Math.pow(Math.max(0, rz * nx * L[0] + rz * ny * L[1] + (rz * nz - 1) * L[2]), 40);
        const v = hash(band, k) * 2 - 1;
        let lum = 0.34 + 0.42 * diff + 0.18 * Math.max(0, -ny) * nz + 0.22 * v + 0.8 * spec; // key + floor bounce
        lum *= 0.62 + 0.38 * z;                                 // limb darkening
        if (fu < GROUT || fv < GROUT) lum *= 0.45;              // grout lines
        else if ((spec > 0.7 || (hash(k + 7 * band, tick >> 2) > 0.99 && diff > 0.3)) && fu > 0.3 && fu < 0.7) glint++;
        sum += lum;
      }
      if (!hits) { out += twinkle(i, j, cols, rows, aspect, R, tick); continue; }
      const lum = (sum / (SX * SY));
      if (glint >= 4) { out += "<b>*</b>"; continue; }
      const idx = Math.round(Math.pow(Math.min(1, Math.max(0, lum)), 0.85) * (RAMP.length - 1));
      out += RAMP[hits < 3 && idx > 1 ? 1 : idx];
    }
    if (j < rows - 1) out += "\n";
  }
  return out;
}

// Sparse sparkles in the air around the ball, each fading in and out on its own phase.
function twinkle(i, j, cols, rows, aspect, R, tick) {
  const x = (i + 0.5 - cols / 2) / R, y = ((j + 0.5) * aspect - (rows * aspect) / 2) / R;
  const r = Math.hypot(x, y);
  if (r < 1.12 || hash(i * 31 + 3, j * 17 + 5) > 0.16) return " ";
  const p = (tick + Math.floor(hash(i, j) * 40)) % 40;
  return p < 2 || p > 7 ? " " : p === 4 || p === 5 ? "<b>+</b>" : "<b>.</b>";
}

// Browser: spin every ball on the page. Hover or focus speeds it up.
export function mount(pre) {
  const box = pre.closest("a, button") || pre;
  const cols = +pre.dataset.cols || 24, rows = +pre.dataset.rows || 12;
  // measure the real cell so the sphere stays round even if a fallback font loads
  const probe = document.createElement("span");
  probe.textContent = "@".repeat(20);
  probe.style.cssText = "position:absolute;visibility:hidden;white-space:pre";
  pre.appendChild(probe);
  const cw = probe.getBoundingClientRect().width / 20;
  probe.remove();
  const lh = parseFloat(getComputedStyle(pre).lineHeight);
  const aspect = cw > 0 && lh > 0 ? lh / cw : 2;
  let rot = 0.6, tick = 0, last = 0, fast = false, visible = true, raf = 0;
  const draw = () => { pre.innerHTML = renderFrame({ cols, rows, aspect, rot, tick }); };
  draw();
  if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const step = (t) => {
    raf = requestAnimationFrame(step);
    if (t - last < 1000 / 15) return;               // 15 fps is plenty for ASCII and cheap
    const dt = last ? Math.min(0.2, (t - last) / 1000) : 0;
    last = t;
    rot += dt * (fast ? 2.4 : 0.7);
    tick++;
    draw();
  };
  const run = () => { if (!raf && visible && !document.hidden) { last = 0; raf = requestAnimationFrame(step); } };
  const halt = () => { cancelAnimationFrame(raf); raf = 0; };
  ["mouseenter", "focus"].forEach((e) => box.addEventListener(e, () => { fast = true; }));
  ["mouseleave", "blur"].forEach((e) => box.addEventListener(e, () => { fast = false; }));
  document.addEventListener("visibilitychange", () => (document.hidden ? halt() : run()));
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; visible ? run() : halt(); }).observe(pre);
  }
  run();
}

if (typeof document !== "undefined") {
  const start = () => document.querySelectorAll("pre[data-discoball]").forEach(mount);
  // wait for Paper Mono so the cell measurement is the real one
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(start);
}
