import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // 1. 你的 GitHub Pages 根域名
  site: 'https://bat9527.github.io', 
  
  // 2. 必须与你的新仓库名 "blog" 严格一致，且保留前导斜杠
  base: '/blog', 
  
  integrations: [tailwind()],
});