import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

process.env.PUBLIC_BASE_PATH ||= "/hknsl/";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const { buildSearchIndex } = await import("../src/lib/content.js");

const outputPath = join(root, "public", "search-index.json");
await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(buildSearchIndex(), null, 2)}\n`);
console.log(`Wrote ${outputPath}`);
