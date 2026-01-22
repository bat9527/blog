import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // 1. 自定义域名配置
  site: 'https://andywli.cn',

  // 2. 根目录部署
  base: '/',

  integrations: [tailwind()],
});