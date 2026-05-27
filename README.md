# andywli.cn Blog

这是一个基于 [Astro](https://astro.build/) 框架构建的个人博客网站，部署在 GitHub Pages 上，使用自定义域名 `andywli.cn`。

## 项目结构

```
andywli.cn/
├── src/
│   ├── content/
│   │   ├── blog/          # 博客文章 (Markdown)
│   │   └── config.ts      # 内容集合配置
│   ├── components/        # UI 组件
│   │   ├── ArticleCard.astro
│   │   ├── RightPanel.astro
│   │   ├── Sidebar.astro
│   │   └── TableOfContents.astro
│   ├── layouts/
│   │   └── Layout.astro   # 页面布局模板
│   └── pages/             # 页面路由
│       ├── index.astro    # 首页
│       ├── [slug].astro   # 文章详情页
│       ├── category/[slug].astro  # 分类页
│       └── tag/[tag].astro        # 标签页
├── public/
│   └── images/            # 静态图片资源
├── astro.config.mjs       # Astro 配置
├── tailwind.config.mjs    # Tailwind CSS 配置
└── package.json
```

## 博客文章

所有文章位于 `src/content/blog/` 目录，目前共有 **11 篇文章**：

| 文章 | 分类 |
|-----|------|
| cognitive-awakening.md | 人文 |
| solo-ai-company.md | 科技 |
| wealth-information-asymmetry.md | 投资 |
| rewrite-your-destiny.md | 人文 |
| nine-traps-jin-yong.md | 人文 |
| observing-people.md | 人文 |
| seven-steps-career.md | 人文 |
| reset-your-life.md | 人文 |
| english-programmer.md | 英语 |
| english-office.md | 英语 |
| english-home.md | 英语 |

## 文章格式

每篇文章使用 Markdown 格式，包含以下 Frontmatter 元数据：

```markdown
---
title: "文章标题"
subtitle: "副标题"
publishedAt: "2026-02-20"
readTime: "10 min read"
tags: ["标签1", "标签2"]
thumbnailUrl: "https://example.com/image.jpg"
category: "人文"
featured: false
claps: 0
comments: 0
---

> 来源：推特（可选）

文章正文内容...
```

### 分类 (category) 可选值

- 科技
- 投资
- 经济
- 人文
- 英语
- 原创
- 其他

## 本地开发

确保已安装 Node.js (建议 v18+)。

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:4321/` 预览网站。

### 构建生产版本

```bash
npm run build
```

## 部署

项目配置为使用 GitHub Actions 自动部署到 GitHub Pages。

### 配置说明

- **`astro.config.mjs`**:
  - `site`: 'https://andywli.cn'
  - `base`: '/'
- **`public/CNAME`**: 内容为 `andywli.cn`

### 部署流程 (SOP 规范)

为了确保部署到线上网站的稳定性，并防止 GitHub Actions 流水线因类型诊断或编译错误意外中断，请严格遵循以下 SOP 流程进行代码变更与推送：

1. **本地验证构建 (核心防错机制)**：
   在任何推送动作前，必须在本地终端执行一次静态构建测试，确保编译与类型检查 100% 成功：
   ```bash
   npm run build
   ```
   *注：该脚本会自动先运行 `astro check` 进行严格的 TypeScript/Component 类型诊断，诊断无误后执行静态文件编译打包。若此步报错，切勿强行推送，请修复错误后再试。*

2. **提交代码并推送至 GitHub**：
   本地构建验证成功后，方可将代码提交并推送：
   ```bash
   git add .
   git commit -m "feat: 你的具体开发/内容更新说明"
   git push origin main
   ```

3. **GitHub Actions 自动构建与发布**：
   推送代码后，GitHub Actions 容器会自动触发构建并将静态资源分发部署至 GitHub Pages 容器中。

4. **异常排查 (404 故障恢复)**：
   如遇部署完成后线上 `andywli.cn` 报 404 错误，请前往 GitHub 仓库的 **Repository Settings > Pages > Custom Domain** 自定义域名检查是否被 GitHub 意外重置。重新填写并保存 `andywli.cn` 即可恢复正常。

## 技术栈

- [Astro](https://astro.build/) - 静态站点生成器
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- [GitHub Pages](https://pages.github.com/) - 静态托管
- [GitHub Actions](https://github.com/features/actions) - CI/CD
