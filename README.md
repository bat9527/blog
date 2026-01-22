# AndyWLi.cn Blog

这个项目是基于 Astro 构建的个人博客网站。

## 1. 本地如何更新内容

所有的文章内容都位于 `src/content` 目录下。

- **添加新文章**：在 `src/content/blog` (或相应子目录) 中创建一个新的 `.md` 或 `.mdx` 文件。
- **编辑文章**：直接修改对应的 Markdown 文件即可。
- **文章格式**：文件头部通常包含 Frontmatter 元数据（如标题、日期、标签等），例如：
  ```markdown
  ---
  title: "我的新文章"
  pubDate: 2024-03-20
  description: "这是文章的描述..."
  category: "科技" # 可选值: 科技, 投资, 经济, 人文, 原创, 其他
  ---
  ```

## 2. 本地如何调试代码

确保你的电脑上已经安装了 Node.js。

1. **安装依赖** (首次运行或 `package.json` 变动时执行):
   ```bash
   npm install
   ```

2. **启动本地开发服务器**:
   ```bash
   npm run dev
   ```

3. **预览**:
   打开浏览器访问提示的地址 (通常是 `http://localhost:4321/blog/`，具体取决于配置的 `base` 路径)。

## 3. 如何推送最新代码到 Github

当你在本地完成修改并测试无误后，可以使用以下命令将代码提交并推送到 GitHub 仓库：

```bash
# 1. 添加所有修改的文件到暂存区
git add .

# 2. 提交修改 (请将引号内的内容替换为实际的修改描述)
git commit -m "更新内容: 添加了新文章/修改了样式"

# 3. 推送到远程仓库 (默认推送到 main 分支)
git push origin main
```

推送成功后，GitHub Actions 会自动触发构建并部署到 GitHub Pages。

## 部署说明 (GitHub Pages + 自定义域名)

本项目配置为使用 GitHub Actions 自动部署到 GitHub Pages，并已启用自定义域名 `andywli.cn`。

### 配置状态
- **`astro.config.mjs`**:
  - `site`: 'https://andywli.cn'
  - `base`: '/'
- **`public/CNAME`**: 内容为 `andywli.cn`
- **GitHub 设置**:
  - Settings > Pages > Custom domain 已设置为 `andywli.cn`。
  - DNS 解析已生效 (A记录 + CNAME)。

### 每次推送代码
只需正常 `git push origin main`。
- 如果部署后 404，请检查 Repository Settings 里的 Custom Domain 是否被重置（有时 CNAME 文件丢失会导致重置，但代码库里有 `public/CNAME` 应该没问题）。



