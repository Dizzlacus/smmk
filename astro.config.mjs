// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// GitHub Pages: set DEPLOY_TARGET=pages (see .github/workflows/deploy.yml).
// Local + Cloudflare Workers default to site root.
const githubPages = process.env.DEPLOY_TARGET === 'pages';

// https://astro.build/config
export default defineConfig({
  site: githubPages
    ? 'https://dizzlacus.github.io'
    : 'https://smmk.mikeydiamond.workers.dev',
  base: githubPages ? '/smmk' : '/',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/plans'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
