// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://Ercalvez.github.io',
  base: '/ilke-pazarlama',
  i18n: {
    locales: ["tr", "en"],
    defaultLocale: "tr"
  }
});