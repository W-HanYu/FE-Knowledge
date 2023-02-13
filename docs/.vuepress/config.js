import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { sitemapPlugin } from 'vuepress-plugin-sitemap2'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics' // 做google收录&上报分析用
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { searchPlugin } from '@vuepress/plugin-search'
import { commentPlugin } from 'vuepress-plugin-comment2'

import sidebar from './config/sidebar'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Ustinian',
  description: 'Ustinian的博客站点',
  head: [
    ['meta', { name: 'referrer', content: 'no-referrer' }],
    ['meta', { name: 'baidu-site-verification', content: 'code-iW58SZ4SVS' }],
    ['meta', { name: 'google-site-verification', content: 'XVRUSmXYuJfszJ50uwUc7phaeM7EtTrtaIzFGPROgEA' }],
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    [
      'script',
      {},
      `
    var _hmt = _hmt || [];
    (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?**********************";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);

    // 引入谷歌,不需要可删除这段
    var hm1 = document.createElement("script");
    hm1.src = "https://www.googletagmanager.com/gtag/js?id=UA-00000000-1";
    var s1 = document.getElementsByTagName("script")[0];
    s1.parentNode.insertBefore(hm1, s1);
    })();

    // 谷歌加载,不需要可删除
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-00000000-1');
`,
    ],
    [
      'script',
      {},
      `
      (function() {
         if (location.href.indexOf('github.io') > -1 || location.href.indexOf('gitee.io') > -1) {
             location.href = 'https://ts.yayujs.com'
         }
      })();
      `,
    ],
  ],
  theme: defaultTheme({
    navbar: [
      { text: '主页', link: '/' },
      {
        text: '前端',
        children: [
          { text: 'Sass', link: '/notes/sass/01' },
          { text: 'JavaScript', link: '/notes/js/01' },
          { text: ' ES6', link: '/notes/es6/01' },
          { text: 'Ajax', link: '/notes/ajax/01' },
          { text: 'Echarts', link: '/notes/echarts/01' },
          { text: 'Webpack', link: '/notes/webpack/01' },
          { text: 'Vue2', link: '/notes/vue2/01 ' },
          { text: 'Vue3', link: '/notes/vue3/01' },
          { text: 'React', link: '/notes/react/01' },
          { text: 'Git', link: '/notes/git/01' },
          { text: 'Uniapp', link: '/notes/uniapp/01' },
        ],
      },
      { text: 'Typescript',
        children: [
          { text: '第一卷', link: '/notes/typescript/01' },
          { text: '第二卷', link: '/index' },
        ],
      },
      { text: 'Typescript挑战',
        children: [
          { text: '简单', link: '/index' },
          { text: '中等', link: '/index' },
          { text: '困难', link: '/index' },
        ],
      },
      { text: '算法',
        link: '/'
      },
      { text: '数据结构',
        link: '/notes/datastr/01'
      },
      {
        text:'React中的算法',
        link:'/notes/reactAlgorithm/01'
      },
      { text: '每日一题',
        link: '/notes/dailyquestion/01'
      },
      {
        text: '服务端',
        children: [
          { text: 'Nodejs', link: '/notes/nodejs/01' },
          { text: 'Linux', link: '/notes/linux/01' },
          { text: 'Mysql', link: '/notes/mysql/01' },
          { text: 'Mongodb', link: '/notes/mongodb/01' },
        ],
      },
    ],
    sidebar,
    logo: '/images/logo.png',
    // 默认主题
    colorMode: 'dark',
    // 仓库地址
    repo: 'W-HanYu/Ustinian-Hanyu',
    // 编辑此页的地址设置
    docsRepo: 'https://github.com/W-HanYu/Ustinian-Hanyu',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    // 404页面文字设置
    notFound: ['你搞错了吧'],
    backToHome: '去主页看看吧',
    editLinkText: '编辑此页',
    lastUpdatedText: '最近更新时间',
    contributorsText: '贡献者列表',
  }),
  plugins: [
    // 做google收录&上报分析用
    googleAnalyticsPlugin({
      id: 'google-analytics生成的',
    }),
    sitemapPlugin({
      hostname: '#',
    }),
    nprogressPlugin(),
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索文档',
        },
      },
      searchMaxSuggestions: 10,
    }),
    commentPlugin({
      // 插件选项
      provider: 'Giscus', //评论服务提供者。
      repo: '',
      repoId: 'R_kgDOIU8mcA',
      category: 'Announcements',
      categoryId: 'DIC_kwDOIU8mcM4CSWWp',
    }),
  ],
})
