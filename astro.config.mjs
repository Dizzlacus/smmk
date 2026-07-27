// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Production URL is the Workers workers.dev host (assets served from site root).
export default defineConfig({
  site: 'https://smmk.mikeydiamond.workers.dev',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/plans'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
