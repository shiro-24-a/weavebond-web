// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@layouts':    '/src/layouts',
      }
    }
  }
});