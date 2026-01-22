import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // 1. 临时回退到 GitHub Pages (等待新域名审核)
  site: 'https://bat9527.github.io',

  // 2. 恢复子路径配置
  base: '/blog',

  integrations: [tailwind()],
});