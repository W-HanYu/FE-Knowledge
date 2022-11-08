export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"/images/logo_text.jpg\",\"actions\":[{\"text\":\"快速上手\",\"link\":\"https://github.com/W-HanYu/vuepress.git\",\"type\":\"primary\"},{\"text\":\"博客简介\",\"link\":\"/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"笔记\",\"details\":\"以Markdown为中心的笔记，简洁高效地记录每一刻\"},{\"title\":\"博客\",\"details\":\"干净整洁的博客，易于归档文件\"},{\"title\":\"文档\",\"details\":\"在线个人文档，制作所需文档\"}],\"footer\":\"MIT Licensed | Copyright © 2022-present Evan You\"},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
