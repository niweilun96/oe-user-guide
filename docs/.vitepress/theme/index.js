// 引入默认主题
import DefaultTheme from 'vitepress/theme'

// 引入自定义 CSS
import './custom.css'

// 导出增强后的主题
export default {
  ...DefaultTheme,
  // 如果以后要注册全局组件，可以在这里用 enhanceApp
}