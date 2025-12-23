// .vitepress/config.js
export default {
  title: 'Owl Eye 枭眼 / OwlEye Alert Platform',
  description: '用户操作手册 / User Manual',
  lastUpdated: true,
  cleanUrls: true,

  locales: {
    // 中文（默认语言，路径为 /）
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
      title: 'Owl Eye 枭眼',
      description: '软件用户操作手册',
      themeConfig: {
        logo: '/logo-small.png',
        footer: {
          message: '质量合规委员会｜数字化合规 ©2026',
          copyright: '推荐使用 Google Chrome 浏览器, 如需技术支持请联系产品团队: 倪炜伦 (weilun.ni1)'
        },
        search: {
          provider: 'local',
          options: {
            placeholder: '搜索文档...'
          }
        }
      }
    },

    // 英文（路径为 /en/）
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'OwlEye Alert Platform',
      description: 'User Manual',
      link: '/en/', // 确保带斜杠
      themeConfig: {
        logo: '/logo-small.png',
        footer: {
          message: 'Quality & Compliance Committee | Envision Digital Compliance (EDC) ©2025',
          copyright: 'Recommended browser: Chrome. For support, contact: Warren Ni (weilun.ni1)'
        },
        search: {
          provider: 'local',
          options: {
            placeholder: 'Search...'
          }
        }
      }
    }
  }
}