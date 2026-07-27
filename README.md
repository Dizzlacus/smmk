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
4. Set your Formspree endpoint in `src/components/Contact.astro`
5. Optionally set `gtmId` in `site.ts` to enable Google Tag Manager
6. Update `site` in `astro.config.mjs` to your production URL

## Deploy (Cloudflare Workers)

```bash
pnpm deploy
```

Or `pnpm build` then `npx wrangler deploy`. Set secrets/bindings in the Cloudflare dashboard as needed.

## Deploy (GitHub Pages)

A workflow is included under `.github/workflows/deploy.yml` if you prefer Pages instead. For a project site (`username.github.io/smmk/`), set `base: '/smmk'` and `site: 'https://username.github.io'` in `astro.config.mjs` before building.
