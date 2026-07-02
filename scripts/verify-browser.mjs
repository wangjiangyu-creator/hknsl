import { createServer } from "node:http";
import { existsSync, createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { extname, join, resolve } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require("playwright"));
} catch {
  ({ chromium } = require("/Users/wangjiangyu/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright"));
}

const root = resolve("dist");
const base = "";
const chromeCandidates = [
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
];
const executablePath = chromeCandidates.find((candidate) => existsSync(candidate));
const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

function serveFile(path, res) {
  const type = contentTypes[extname(path)] || "application/octet-stream";
  res.writeHead(200, { "content-type": type });
  createReadStream(path).pipe(res);
}

const server = createServer(async (req, res) => {
  const requestUrl = new URL(req.url || "/", "http://127.0.0.1");
  let pathname = decodeURIComponent(requestUrl.pathname);
  if (pathname === "/") pathname = "/";
  let filePath = join(root, pathname);
  if (pathname.endsWith("/")) filePath = join(root, pathname, "index.html");
  if (existsSync(filePath) && (await stat(filePath)).isFile()) {
    serveFile(filePath, res);
    return;
  }
  const htmlPath = `${filePath}.html`;
  if (existsSync(htmlPath)) {
    serveFile(htmlPath, res);
    return;
  }
  res.writeHead(404);
  res.end("Not found");
});

await new Promise((resolveListen) => server.listen(4174, "127.0.0.1", resolveListen));

const browser = await chromium.launch(executablePath ? { executablePath } : {});
try {
  const contexts = [
    { name: "desktop", viewport: { width: 1440, height: 1000 } },
    { name: "mobile", viewport: { width: 390, height: 844 } },
  ];
  const paths = [
    "/en/",
    "/zh-cn/",
    "/en/legislation/",
    "/en/cases/",
    "/en/comparative/",
    "/en/archive/",
  ];

  for (const config of contexts) {
    const page = await browser.newPage({ viewport: config.viewport });
    for (const path of paths) {
      const url = `http://127.0.0.1:4174${base}${path}`;
      await page.goto(url, { waitUntil: "networkidle" });
      const h1 = await page.locator("h1").first().textContent();
      if (!h1?.trim()) throw new Error(`Missing h1 at ${url}`);
      const bodyBox = await page.locator("body").boundingBox();
      if (!bodyBox || bodyBox.width < 300 || bodyBox.height < 500) throw new Error(`Invalid layout at ${url}`);
      const overlap = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2);
      if (overlap) throw new Error(`Horizontal overflow at ${url}`);
    }
    await page.goto(`http://127.0.0.1:4174${base}/en/`, { waitUntil: "networkidle" });
    const imageOk = await page.locator(".hero-visual img").evaluate((img) => img.complete && img.naturalWidth > 1000);
    if (!imageOk) throw new Error("Hero visual did not load");
    await page.close();
  }
  console.log("Browser verification passed.");
} finally {
  await browser.close();
  server.close();
}
