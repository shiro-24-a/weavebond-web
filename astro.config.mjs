// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // ★ここにサイトのURLを追加しました！
  site: 'https://weavebond.com',
  integrations: [mdx(), sitemap()],
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@layouts':    '/src/layouts',
      }
    }
  }
});