# 图片使用示例

假设您要添加一张文章缩略图:

## 1. 放置图片

```bash
# 将图片复制到 public/images/thumbnails/
cp ~/Downloads/my-image.jpg public/images/thumbnails/
```

## 2. 在 Markdown 中使用

编辑 `src/content/blog/your-article.md`:

```markdown
---
title: "文章标题"
thumbnailUrl: "/images/thumbnails/my-image.jpg"
---
```

**路径规则:** 以 `/` 开头,不包含 `public/`

## 文件夹结构

```
public/
├── images/
│   ├── blog/        # 文章内图片
│   ├── thumbnails/  # 缩略图
│   └── avatars/     # 头像
```
