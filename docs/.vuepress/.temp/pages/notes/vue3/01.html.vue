<template><div><h1 id="_01-【创建vue3项目】" tabindex="-1"><a class="header-anchor" href="#_01-【创建vue3项目】" aria-hidden="true">#</a> 01 【创建vue3项目】</h1>
<blockquote>
<p>该笔记是从vue2过渡到vue3的，所以不会特别详细的介绍某些vue2学过的，主要介绍vue3新增的。</p>
</blockquote>
<h2 id="_1-vue3快速上手" tabindex="-1"><a class="header-anchor" href="#_1-vue3快速上手" aria-hidden="true">#</a> 1.Vue3快速上手</h2>
<img src="https://user-images.githubusercontent.com/499550/93624428-53932780-f9ae-11ea-8d16-af949e16a09f.png" style="width:200px" />
<h3 id="_1-1-vue3简介" tabindex="-1"><a class="header-anchor" href="#_1-1-vue3简介" aria-hidden="true">#</a> 1.1 Vue3简介</h3>
<ul>
<li>2020年9月18日，Vue.js发布3.0版本，代号：One Piece（海贼王）</li>
<li>耗时2年多、<a href="https://github.com/vuejs/vue-next/graphs/commit-activity" target="_blank" rel="noopener noreferrer">2600+次提交<ExternalLinkIcon/></a>、<a href="https://github.com/vuejs/rfcs/tree/master/active-rfcs" target="_blank" rel="noopener noreferrer">30+个RFC<ExternalLinkIcon/></a>、<a href="https://github.com/vuejs/vue-next/pulls?q=is%3Apr+is%3Amerged+-author%3Aapp%2Fdependabot-preview+" target="_blank" rel="noopener noreferrer">600+次PR<ExternalLinkIcon/></a>、<a href="https://github.com/vuejs/vue-next/graphs/contributors" target="_blank" rel="noopener noreferrer">99位贡献者<ExternalLinkIcon/></a></li>
<li>github上的tags地址：https://github.com/vuejs/vue-next/releases/tag/v3.0.0</li>
</ul>
<h3 id="_1-2-vue3带来了什么" tabindex="-1"><a class="header-anchor" href="#_1-2-vue3带来了什么" aria-hidden="true">#</a> 1.2 Vue3带来了什么</h3>
<h4 id="_1-2-1-性能的提升" tabindex="-1"><a class="header-anchor" href="#_1-2-1-性能的提升" aria-hidden="true">#</a> 1.2.1 性能的提升</h4>
<ul>
<li>
<p>打包大小减少41%</p>
</li>
<li>
<p>初次渲染快55%, 更新渲染快133%</p>
</li>
<li>
<p>内存减少54%</p>
<p>......</p>
</li>
</ul>
<h4 id="_1-2-2-源码的升级" tabindex="-1"><a class="header-anchor" href="#_1-2-2-源码的升级" aria-hidden="true">#</a> 1.2.2 源码的升级</h4>
<ul>
<li>
<p>使用Proxy代替defineProperty实现响应式</p>
</li>
<li>
<p>重写虚拟DOM的实现和Tree-Shaking</p>
<p>......</p>
</li>
</ul>
<h4 id="_1-2-3-拥抱typescript" tabindex="-1"><a class="header-anchor" href="#_1-2-3-拥抱typescript" aria-hidden="true">#</a> 1.2.3 拥抱TypeScript</h4>
<ul>
<li>Vue3可以更好的支持TypeScript</li>
</ul>
<h4 id="_1-2-4-新的特性" tabindex="-1"><a class="header-anchor" href="#_1-2-4-新的特性" aria-hidden="true">#</a> 1.2.4 新的特性</h4>
<ol>
<li>
<p>Composition API（组合API）</p>
<ul>
<li>setup配置</li>
<li>ref与reactive</li>
<li>watch与watchEffect</li>
<li>provide与inject</li>
<li>......</li>
</ul>
</li>
<li>
<p>新的内置组件</p>
<ul>
<li>Fragment</li>
<li>Teleport</li>
<li>Suspense</li>
</ul>
</li>
<li>
<p>其他改变</p>
<ul>
<li>新的生命周期钩子</li>
<li>data 选项应始终被声明为一个函数</li>
<li>移除keyCode支持作为 v-on 的修饰符</li>
<li>......</li>
</ul>
</li>
</ol>
<h2 id="_2-创建vue3-0工程" tabindex="-1"><a class="header-anchor" href="#_2-创建vue3-0工程" aria-hidden="true">#</a> 2.创建Vue3.0工程</h2>
<h3 id="_2-1-使用-vue-cli-创建" tabindex="-1"><a class="header-anchor" href="#_2-1-使用-vue-cli-创建" aria-hidden="true">#</a> 2.1 使用 vue-cli 创建</h3>
<p>官方文档：https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">### 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上</span>
vue <span class="token parameter variable">--version</span>
<span class="token comment">### 安装或者升级你的@vue/cli</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @vue/cli
<span class="token comment">### 创建</span>
vue create vue_test
<span class="token comment">### 启动</span>
<span class="token builtin class-name">cd</span> vue_test
<span class="token function">npm</span> run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-使用-vite-创建" tabindex="-1"><a class="header-anchor" href="#_2-2-使用-vite-创建" aria-hidden="true">#</a> 2.2 使用 vite 创建</h3>
<p>官方文档：https://v3.cn.vuejs.org/guide/installation.html#vite</p>
<p>vite官网：https://vitejs.cn</p>
<ul>
<li>什么是vite？—— 新一代前端构建工具。</li>
<li>优势如下：
<ul>
<li>开发环境中，无需打包操作，可快速的冷启动。</li>
<li>轻量快速的热重载（HMR）。</li>
<li>真正的按需编译，不再等待整个应用编译完成。</li>
</ul>
</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">### 创建工程</span>

<span class="token comment">## npm 6.x</span>
$ <span class="token function">npm</span> init vite@latest <span class="token operator">&lt;</span>project-name<span class="token operator">></span> <span class="token parameter variable">--template</span> vue  
<span class="token comment">### 如： npm init vite@latest vue3-study --template vue</span>

<span class="token comment">## npm 7+，需要加上额外的双短横线</span>
$ <span class="token function">npm</span> init vite@latest <span class="token operator">&lt;</span>project-name<span class="token operator">></span> -- <span class="token parameter variable">--template</span> vue

<span class="token comment">### 使用 PNPM:</span>
<span class="token function">pnpm</span> create vite <span class="token operator">&lt;</span>project-name<span class="token operator">></span> -- <span class="token parameter variable">--template</span> vue
<span class="token comment">## pnpm create vite vite-app -- --template vue</span>

<span class="token comment">### 进入工程目录</span>
<span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>project-name<span class="token operator">></span>
<span class="token comment">### 安装依赖</span>
<span class="token function">pnpm</span> <span class="token function">install</span>
<span class="token comment">### 运行</span>
<span class="token function">pnpm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>vite里面导入vue模块要加后缀名，不然会报错</strong></p>
<p><code v-pre>import Demo from ‘./components/Demo.vue’</code></p>
</blockquote>
<h3 id="_2-3-命令行界面" tabindex="-1"><a class="header-anchor" href="#_2-3-命令行界面" aria-hidden="true">#</a> 2.3 命令行界面</h3>
<p>在安装了 Vite 的项目中，可以在 npm scripts 中使用 <code v-pre>vite</code> 可执行文件，或者直接使用 <code v-pre>npx vite</code> 运行它。下面是通过脚手架创建的 Vite 项目中默认的 npm scripts：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"vite"</span><span class="token punctuation">,</span> <span class="token comment">// 启动开发服务器，别名：`vite dev`，`vite serve`</span>
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"vite build"</span><span class="token punctuation">,</span> <span class="token comment">// 为生产环境构建产物</span>
    <span class="token property">"preview"</span><span class="token operator">:</span> <span class="token string">"vite preview"</span> <span class="token comment">// 本地预览生产构建产物</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以指定额外的命令行选项，如 <code v-pre>--port</code> 或 <code v-pre>--https</code>。运行 <code v-pre>npx vite --help</code> 获得完整的命令行选项列表。</p>
<h3 id="_2-4-常用-composition-api" tabindex="-1"><a class="header-anchor" href="#_2-4-常用-composition-api" aria-hidden="true">#</a> 2.4 常用 Composition API</h3>
<p>官方文档: https://v3.cn.vuejs.org/guide/composition-api-introduction.html</p>
<h3 id="_2-5-composition-api-的优势" tabindex="-1"><a class="header-anchor" href="#_2-5-composition-api-的优势" aria-hidden="true">#</a> 2.5 Composition API 的优势</h3>
<h4 id="_2-5-1-options-api-存在的问题" tabindex="-1"><a class="header-anchor" href="#_2-5-1-options-api-存在的问题" aria-hidden="true">#</a> 2.5.1 Options API 存在的问题</h4>
<p>使用传统OptionsAPI中，新增或者修改一个需求，就需要分别在data，methods，computed里修改 。</p>
<p><img src="https://img-blog.csdnimg.cn/img_convert/a31f1a45d3f34946df8654d3e2d17b16.gif" alt="img"></p>
<p><img src="https://img-blog.csdnimg.cn/img_convert/c80614d3232b7ea08f2a486d082129e4.gif" alt="img"></p>
<h4 id="_2-5-2-composition-api-的优势" tabindex="-1"><a class="header-anchor" href="#_2-5-2-composition-api-的优势" aria-hidden="true">#</a> 2.5.2 Composition API 的优势</h4>
<p>我们可以更加优雅的组织我们的代码，函数。让相关功能的代码更加有序的组织在一起。</p>
<p><img src="https://img-blog.csdnimg.cn/img_convert/fdad5e01215bf118e0ddf1e9be47d34c.gif" alt="img"></p>
<p><img src="https://img-blog.csdnimg.cn/img_convert/f3f08b5c291a81294adc1571812962b1.gif" alt="img"></p>
<h3 id="_2-6-全局api的转移" tabindex="-1"><a class="header-anchor" href="#_2-6-全局api的转移" aria-hidden="true">#</a> 2.6 全局API的转移</h3>
<ul>
<li>
<p>Vue 2.x 有许多全局 API 和配置。</p>
<ul>
<li>
<p>例如：注册全局组件、注册全局指令等。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//注册全局组件</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'MyButton'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'&lt;button @click="count++">Clicked {{ count }} times.&lt;/button>'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//注册全局指令</span>
Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">'focus'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">inserted</span><span class="token operator">:</span> <span class="token parameter">el</span> <span class="token operator">=></span> el<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>Vue3.0中对这些API做出了调整：</p>
<ul>
<li>
<p>将全局的API，即：<code v-pre>Vue.xxx</code>调整到应用实例（<code v-pre>app</code>）上</p>
<table>
<thead>
<tr>
<th>2.x 全局 API（<code v-pre>Vue</code>）</th>
<th>3.x 实例 API (<code v-pre>app</code>)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Vue.config.xxxx</td>
<td>app.config.xxxx</td>
</tr>
<tr>
<td>Vue.config.productionTip</td>
<td><strong style="color:#DD5145">移除</strong></td>
</tr>
<tr>
<td>Vue.component</td>
<td>app.component</td>
</tr>
<tr>
<td>Vue.directive</td>
<td>app.directive</td>
</tr>
<tr>
<td>Vue.mixin</td>
<td>app.mixin</td>
</tr>
<tr>
<td>Vue.use</td>
<td>app.use</td>
</tr>
<tr>
<td>Vue.prototype</td>
<td>app.config.globalProperties</td>
</tr>
</tbody>
</table>
</li>
</ul>
</li>
</ul>
<h3 id="_2-7-其它改变" tabindex="-1"><a class="header-anchor" href="#_2-7-其它改变" aria-hidden="true">#</a> 2.7 其它改变</h3>
<ul>
<li>
<p>data选项应始终被声明为一个函数。</p>
</li>
<li>
<p>过度类名的更改：</p>
<ul>
<li>
<p>Vue2.x写法</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.v-enter,
.v-leave-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.v-leave,
.v-enter-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Vue3.x写法</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.v-enter-from,
.v-leave-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.v-leave-from,
.v-enter-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong style="color:#DD5145">移除</strong>keyCode作为 v-on 的修饰符，同时也不再支持<code v-pre>config.keyCodes</code></p>
</li>
<li>
<p><strong style="color:#DD5145">移除</strong><code v-pre>v-on.native</code>修饰符</p>
<ul>
<li>
<p>父组件中绑定事件</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-component</span>
  <span class="token attr-name"><span class="token namespace">v-on:</span>close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleComponentEvent<span class="token punctuation">"</span></span>
  <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleNativeClickEvent<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>子组件中声明自定义事件</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'close'</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong style="color:#DD5145">移除</strong>过滤器（filter）</p>
<blockquote>
<p>过滤器虽然这看起来很方便，但它需要一个自定义语法，打破大括号内表达式是 “只是 JavaScript” 的假设，这不仅有学习成本，而且有实现成本！建议用方法调用或计算属性去替换过滤器。</p>
</blockquote>
</li>
<li>
<p>......</p>
</li>
</ul>
<h3 id="_2-8-路径别名" tabindex="-1"><a class="header-anchor" href="#_2-8-路径别名" aria-hidden="true">#</a> 2.8 路径别名</h3>
<p><code v-pre>vite.config.ts</code></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'path'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 配置别名</span>
    alias<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'@'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./src'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token string-property property">'@c'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./src/components'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token string-property property">'@v'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./src/views'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token string-property property">'@h'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./src/hooks'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token string-property property">'@s'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./src/store'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>1.path模块需要 <code v-pre>pnpm i @types/node -D</code></p>
<p>2.<code v-pre>tsconfig.node.json</code>文件配置</p>
<p>&quot;compilerOptions&quot;: {</p>
<p>&quot;allowSyntheticDefaultImports&quot;: true</p>
<p>},</p>
<p>3.<code v-pre>tsconfig.json</code>文件配置</p>
<p>&quot;compilerOptions&quot;: {</p>
<p>&quot;baseUrl&quot;: &quot;./&quot;,</p>
<p>&quot;paths&quot;: {</p>
<p>&quot;@/*&quot;: [&quot;src/*&quot;],</p>
<p>&quot;@h/*&quot;: [&quot;src/hooks/*&quot;],</p>
<p>&quot;@s/*&quot;: [&quot;src/store/*&quot;]</p>
<p>},</p>
<p>},</p>
<p>解决文件路径红线</p>
</blockquote>
<h3 id="_2-9-导入ts文件" tabindex="-1"><a class="header-anchor" href="#_2-9-导入ts文件" aria-hidden="true">#</a> 2.9 导入ts文件</h3>
<p>当在main.ts文件导入别名的时候报错<code v-pre>导入路径不能以“.ts”扩展名结束。考虑改为导入“./utils/Bus.js”。</code></p>
<p><strong>解决方案</strong></p>
<p>既然不允许用扩展名，那么我省略扩展名好了。</p>
<p><code v-pre>vite.config.ts</code></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
    alias<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'@'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'src'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    extensions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'.ts'</span><span class="token punctuation">,</span> <span class="token string">'.js'</span><span class="token punctuation">,</span> <span class="token string">'.mjs'</span><span class="token punctuation">,</span> <span class="token string">'.jsx'</span><span class="token punctuation">,</span> <span class="token string">'.tsx'</span><span class="token punctuation">,</span> <span class="token string">'.json'</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，扩展名就不需要写了。</p>
<h3 id="_2-10-使用scss" tabindex="-1"><a class="header-anchor" href="#_2-10-使用scss" aria-hidden="true">#</a> 2.10 使用Scss</h3>
<p>首先用<code v-pre>pnpm i sass -D </code></p>
<p>在<code v-pre>style</code>标签中使用<code v-pre>lang='scss'就可以了</code></p>
<p><strong>注意</strong></p>
<p>如果像这样，定义了很多<code v-pre>scss</code>文件</p>
<p><img src="https://i0.hdslb.com/bfs/album/9e94a4933af97f7e4e31bcdb9ec4fc71821df212.png" alt="image-20220831214441313"></p>
<p>直接引入是找不到这些文件里面定义的内容的。</p>
<p>会有这样的报错</p>
<p><img src="https://i0.hdslb.com/bfs/album/be86e1aad36c6f27ee51b4c3230177661ca88622.png" alt="image-20220831214522131"></p>
<p><strong>解决方法</strong></p>
<p>在<code v-pre>src</code>目录中定义<code v-pre>sytle.scss</code>文件</p>
<p><img src="https://i0.hdslb.com/bfs/album/c466b03fb99a34a30b1162f96412c4fd049a8ae0.png" alt="image-20220831214629661"></p>
<p><code v-pre>style.scss</code></p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">'@/styles/reset.scss'</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">'@/styles/variables.scss'</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">'@/styles/mixins.scss'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在<code v-pre>vite.config.ts</code>中配置</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">'@vitejs/plugin-vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 使用scss</span>
  css<span class="token operator">:</span> <span class="token punctuation">{</span>
    preprocessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      scss<span class="token operator">:</span> <span class="token punctuation">{</span>
        additionalData<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">@import "./src/style.scss";</span><span class="token template-punctuation string">`</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


