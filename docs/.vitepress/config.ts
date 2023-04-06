import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sunview town | A1-03.04",
  description: "Tien nha",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '2023', link: '/2023' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Tiền nhà',
        items: [
          { text: '2023', link: '/2023' },
        ]
      },
      {
        text: 'Hóa đơn/hợp đồng',
        items: [
          { text: 'Hợp đồng', link: '/hop-dong' },
          { text: 'Tiền cọc', link: '/coc' },
        ]
      }
    ],

    // socialLinks: []
  }
})
