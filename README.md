# HK National Security Law Research Portal

A bilingual English and Simplified Chinese static research portal on Hong Kong's national security law framework in comparative context.

## Local Commands

```bash
pnpm install
pnpm validate
pnpm test
pnpm build
pnpm dev
```

The site is configured for GitHub Pages project deployment at `/hknsl/`.

## Content Model

Records live in `src/data/records.js` and are shared by both language routes. Each record carries bilingual title and summary fields, source metadata, tags, related topics, and a `lastVerified` date.

This site is an informational research resource, not legal advice.
