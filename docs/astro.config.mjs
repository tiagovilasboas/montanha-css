import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://tiagoboas.github.io',
  base: '/montanha-css',
  integrations: [
    mdx(),
    tailwind()
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "../dist/montanha.css";`
        }
      }
    }
  }
}); 