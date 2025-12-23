---
# docs/en/index.md
layout: home

title: Owl Eye
titleTemplate: User Manual

hero:
  name: "Owl Eye Alert Platform"
  text: "User Manual"
  tagline: AI for minds. System for motion.
  actions:
    - theme: brand
      text: Quick Start
      link: /en/quick-start
    - theme: alt
      text: About Owl Eye
      link: /en/introduction

features:
  - icon: 📷
    title: Image AI Detection
    details: Guidance for image-based AI alerting applications, such as on-site AI-CTQ and AI-CTS.
    link: /en/pic
  - icon: 📁
    title: Document AI Detection
    details: Guidance for document-based AI alerting applications, including automated document compliance checks.
    link: /en/doc
  - icon: ❓
    title: Frequently Asked Questions
    details: Centralized answers to common questions to help you resolve usage issues quickly.
    link: /en/faq
---

<!-- Using img tag to ensure loadability and debuggability -->
<img src="/logo-large.png" class="home-hero-logo" alt="Owl Eye Logo" />

<style>
/* Note: Removed scoped to avoid VitePress CSS scoping limitations */
.home-hero-logo {
  position: fixed; /* Using fixed to ensure positioning relative to viewport */
  top: calc(var(--vp-nav-height, 60px) + 80px); /* Below navbar + hero padding */
  right: 15%;
  width: 260px;
  height: auto;
  opacity: 0.95;
  pointer-events: none;
  z-index: 100; /* Ensure above all content */
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
  -webkit-text-fill-color: transparent; /* Compatibility for older WebKit */
  font-weight: 700;
}
</style>
