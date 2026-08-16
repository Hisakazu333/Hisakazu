# Hisakazu.dev — 个人博客

你好，我是 Hisakazu。这里记录代码、产品与生活的片段。

## 技术栈

- [Astro 7](https://astro.build) — 静态站点生成
- Astro Content Collections — 内容管理（`articles` / `projects`）
- MDX + Shiki — 文章与代码高亮
- `@astrojs/rss` — RSS 订阅

## 设计

版式参考 [Echo 模板](https://echo-nextjs-template.vercel.app)：

- 840px 窄容器、大留白、黑白灰极简
- 胶囊图标导航（首页 / 项目 / 关于 / 文章 + 主题切换 / X / GitHub）
- 圆角封面卡片、虚线链接、圆角文章列表容器
- 点阵「HISAKAZU」页脚
- 支持暗色模式（跟随系统，可手动切换，localStorage 记忆）

## 开发

```bash
npm install        # 安装依赖
npm run dev        # 本地开发 http://localhost:4321
npm run build      # 构建到 dist/
npm run preview    # 预览构建产物
```

## 写作

在 `src/content/articles/` 新建 `.md` / `.mdx` 文件：

```markdown
---
title: 标题
description: 一句话摘要
pubDate: 2026-08-16
tags: [随想]
draft: false
---

正文……
```

项目在 `src/content/projects/` 中维护（`cover` 封面放在 `public/covers/`，
支持 `status`、`link`、`repo`、`order` 字段）。
