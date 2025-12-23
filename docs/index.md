---
# docs/zh/index.md
layout: home

title: Owl Eye 枭眼
titleTemplate: 用户操作手册

hero:
  name: "枭眼预警平台"
  text: "用户操作手册"
  tagline: AI 驱动决策，系统助力高效。
  actions:
    - theme: brand
      text: 快速开始
      link: quick-start
    - theme: alt
      text: 产品简介
      link: introduction

features:
  - icon: 📷
    title: 图片 AI 预警类
    details: 针对图片类 AI 监察应用提供指导，例如大现场AI-CTQ，AI-CTS 等。
    link: pic
  - icon: 📁
    title: 文档 AI 预警类
    details: 针对文档类 AI 监察应用提供指导，例如现场文档 AI 检测等。
    link:  doc
  - icon: 📄
    title: APQP AI 预警类
    details: 针对APQP类 AI 监察应用提供指导。
    link:  apqp
  - icon: ❓
    title: 常见问题
    details: 集中解答常见疑问，快速排除使用障碍。
    link: faq
---

<!-- 使用 img 标签，确保可加载、可调试 -->
<img src="/logo-large.png" class="home-hero-logo" alt="Owl Eye Logo" />

<style>
/* 注意：这里去掉 scoped，避免 VitePress 的 CSS 作用域限制 */
.home-hero-logo {
  position: fixed; /* 使用 fixed 确保相对于视口定位 */
  top: calc(var(--vp-nav-height, 60px) + 80px); /* 导航栏下方 + hero 内边距 */
  right: 15%;
  width: 260px;
  height: auto;
  opacity: 0.95;
  pointer-events: none;
  z-index: 100; /* 确保在所有内容之上 */
}

@media (max-width: 768px) {
  .home-hero-logo {
    display: none;
  }
}
</style>

<style>
.VPHomeHero .name {
  background: linear-gradient(135deg, #2563eb, #0ea5e9, #00f2fe);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent; /* 兼容旧版 WebKit */
  font-weight: 700;
}
</style>