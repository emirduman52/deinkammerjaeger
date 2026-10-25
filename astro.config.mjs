// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// [DOMAIN] – endgültige Domain eintragen. Wird für Canonical, Open Graph und Sitemap genutzt.
const SITE_URL = 'https://www.deinkammerjaeger.de';
// Preview auf GitHub Pages: SITE_URL/BASE_PATH kommen aus dem Workflow (.github/workflows/pages.yml)
const site = process.env.SITE_URL || SITE_URL;
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  image: { responsiveStyles: false },
});
