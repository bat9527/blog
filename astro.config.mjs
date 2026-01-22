import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // 1. 你的 GitHub Pages 根域名 (现在是自定义域名)
  site: 'https://andywli.cn',

  // 2. 自定义域名通常映射到根目录，所以 base 设为 '/'
  base: '/',

  integrations: [tailwind()],
});