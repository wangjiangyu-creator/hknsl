import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

const repoName = "hknsl";
const site = process.env.PUBLIC_SITE_URL || `https://wangjiangyu-creator.github.io`;
const base = process.env.PUBLIC_BASE_PATH || `/${repoName}`;

export default defineConfig({
  site,
  base,
  output: "static",
  integrations: [mdx()],
});
