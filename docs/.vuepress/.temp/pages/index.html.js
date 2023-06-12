export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"/images/logo-text.png\",\"actions\":[{\"text\":\"开始学习\",\"link\":\"/notes/js/01\",\"type\":\"primary\"},{\"text\":\"开始挑战\",\"link\":\"/notes/dailyquestion/01\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"🎉易学易懂\",\"details\":\"🔥🔥🔥对知识点整理，由整体框架学习到每个模块精细化学习，逐渐击破\"},{\"title\":\"💎博客\",\"details\":\"🔥🔥🔥干净整洁的博客，易于归档文件\"},{\"title\":\"🚀文档\",\"details\":\"🔥🔥🔥在线个人文档，制作所需文档\"}],\"footer\":\"MIT Licensed | Copyright © 2022-present Wangtao\"},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1677814151000,\"contributors\":[{\"name\":\"wanghanyu\",\"email\":\"1453300745@qq.com\",\"commits\":2},{\"name\":\"W-HanYu\",\"email\":\"1453300745@qq.com\",\"commits\":1},{\"name\":\"王涛\",\"email\":\"wangtao@aimc.online\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")

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
