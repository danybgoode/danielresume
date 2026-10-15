// Renders the /print/ sheet to real PDF files that the "Download CV" button
// links to directly — one click, a proper file, extractable text for ATS.
//
//   npm run pdf      (builds the site first, then writes src/files/*.pdf)
//
// Re-run it whenever src/_data/resume.js changes, and commit the PDFs.
// Needs Playwright with a Chromium build available:
//   npm i -D playwright && npx playwright install chromium
import { createServer } from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const SITE = new URL("../_site/", import.meta.url).pathname;
const OUT = new URL("../src/files/", import.meta.url).pathname;
const TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".woff2": "font/woff2", ".png": "image/png", ".js": "text/javascript" };

let chromium;
try {
  ({ chromium } = await import(process.env.PLAYWRIGHT_MODULE || "playwright"));
} catch {
  console.error("Playwright not found. Run: npm i -D playwright && npx playwright install chromium");
  process.exit(1);
}

const server = createServer(async (req, res) => {
  let path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname));
  if (path.endsWith("/")) path += "index.html";
  try {
    const body = await readFile(join(SITE, path));
    res.writeHead(200, { "content-type": TYPES[extname(path)] || "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404); res.end();
  }
}).listen(0);
const port = server.address().port;

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
const jobs = [
  { lang: "en", file: "Daniel-Vasquez-CV.pdf" },
  { lang: "es", file: "Daniel-Vasquez-CV-ES.pdf" },
];
for (const { lang, file } of jobs) {
  const page = await browser.newPage();
  await page.goto(`http://localhost:${port}/print/?lang=${lang}&pdf=1`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.emulateMedia({ media: "print" });
  await page.pdf({ path: join(OUT, file), preferCSSPageSize: true, printBackground: true });
  console.log("wrote", join("src/files", file));
  await page.close();
}
await browser.close();
server.close();
