// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// GitHub Pages serves under /smmk; local + Cloudflare Workers use site root.
const githubPages = process.env.GITHUB_ACTIONS === 'true';

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
