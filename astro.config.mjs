// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Project Pages URL is https://dizzlacus.github.io/smmk/ — base must be set always.
export default defineConfig({
  site: 'https://dizzlacus.github.io',
  base: '/smmk',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/plans'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
