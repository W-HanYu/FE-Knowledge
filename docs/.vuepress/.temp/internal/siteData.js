export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"Ustinian-Hanyu\",\"description\":\"Ustinian-Hanyu的博客站点\",\"head\":[[\"meta\",{\"name\":\"referrer\",\"content\":\"no-referrer\"}],[\"meta\",{\"name\":\"baidu-site-verification\",\"content\":\"code-iW58SZ4SVS\"}],[\"meta\",{\"name\":\"google-site-verification\",\"content\":\"XVRUSmXYuJfszJ50uwUc7phaeM7EtTrtaIzFGPROgEA\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/favicon.ico\"}],[\"script\",{},\"\\n    var _hmt = _hmt || [];\\n    (function() {\\n    var hm = document.createElement(\\\"script\\\");\\n    hm.src = \\\"https://hm.baidu.com/hm.js?**********************\\\";\\n    var s = document.getElementsByTagName(\\\"script\\\")[0];\\n    s.parentNode.insertBefore(hm, s);\\n\\n    // 引入谷歌,不需要可删除这段\\n    var hm1 = document.createElement(\\\"script\\\");\\n    hm1.src = \\\"https://www.googletagmanager.com/gtag/js?id=UA-00000000-1\\\";\\n    var s1 = document.getElementsByTagName(\\\"script\\\")[0];\\n    s1.parentNode.insertBefore(hm1, s1);\\n    })();\\n\\n    // 谷歌加载,不需要可删除\\n    window.dataLayer = window.dataLayer || [];\\n    function gtag(){dataLayer.push(arguments);}\\n    gtag('js', new Date());\\n\\n    gtag('config', 'UA-00000000-1');\\n\"],[\"script\",{},\"\\n      (function() {\\n         if (location.href.indexOf('github.io') > -1 || location.href.indexOf('gitee.io') > -1) {\\n             location.href = 'https://ts.yayujs.com'\\n         }\\n      })();\\n      \"]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
