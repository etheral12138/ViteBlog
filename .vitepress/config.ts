import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Etheral's Blog",
  description: "Do What you love",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

  logo:"https://etheral.oss-cn-shanghai.aliyuncs.com/images/5f1ebd6e2bd03d8857ebfe5d56aa7e6caf6859a3.jpg@942w_948h_progressive.png",
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    footer: {
      message: '如有转载或 CV 的请标注本站原文地址',
      copyright: 'Copyright © 2023-present Etheral'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ]
  }
})
