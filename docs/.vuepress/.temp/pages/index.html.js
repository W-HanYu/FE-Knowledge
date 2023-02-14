export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"/images/logo-text.png\",\"actions\":[{\"text\":\"开始学习\",\"link\":\"/notes/datastr/01\",\"type\":\"primary\"},{\"text\":\"开始挑战\",\"link\":\"/notes/dailyquestion/01\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"笔记\",\"details\":\"以Markdown为中心的笔记，简洁高效地记录每一刻\"},{\"title\":\"博客\",\"details\":\"干净整洁的博客，易于归档文件\"},{\"title\":\"文档\",\"details\":\"在线个人文档，制作所需文档\"}],\"footer\":\"MIT Licensed | Copyright © 2022-present Evan You\"},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1676374339000,\"contributors\":[{\"name\":\"wanghanyu\",\"email\":\"1453300745@qq.com\",\"commits\":2},{\"name\":\"W-HanYu\",\"email\":\"1453300745@qq.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")

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
