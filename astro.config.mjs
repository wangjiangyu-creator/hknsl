import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

const site = process.env.PUBLIC_SITE_URL || "https://nsl.eastlaw.wang";
const base = process.env.PUBLIC_BASE_PATH || "/";

export default defineConfig({
  site,
  base,
  output: "static",
  integrations: [mdx()],
});
