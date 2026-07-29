# SMMK

Astro + Tailwind CSS marketing site, started from the blank-template brand starter. Section layout (Hero, Services, Portfolio, About, Reviews, Contact) with placeholder content — ready to restyle and rewrite for the brand.

## Develop

```bash
pnpm install
pnpm dev
```

## Customize

1. Edit site copy, contact info, services, plans, and reviews in `src/data/site.ts`
2. Swap design tokens and fonts in `src/styles/global.css` (and the Google Fonts link in `src/layouts/BaseLayout.astro`)
3. Replace favicon / OG image under `public/`
4. Set your Formspree endpoint in `src/data/site.ts` (`formspreeEndpoint`)
5. Optionally set `gtmId` in `site.ts` to enable Google Tag Manager
6. Production URLs: Workers uses `site` in `astro.config.mjs` / `site.url` in `site.ts`; GitHub Pages sets `DEPLOY_TARGET=pages` in CI so `base` and `site` resolve under `username.github.io/smmk/`

## Deploy (Cloudflare Workers)

```bash
pnpm deploy
```

Or `pnpm build` then `npx wrangler deploy`. Set secrets/bindings in the Cloudflare dashboard as needed.

Local and Workers builds use `base: '/'` (site root).

## Deploy (GitHub Pages)

A workflow under `.github/workflows/deploy.yml` deploys on push to `main`. In CI it sets `DEPLOY_TARGET=pages`, and `astro.config.mjs` uses `base: '/smmk'` and `site: 'https://dizzlacus.github.io'` so assets resolve under `username.github.io/smmk/`.

After changing `base` in config, restart `pnpm dev` — a stale server can keep the old base and break images.
