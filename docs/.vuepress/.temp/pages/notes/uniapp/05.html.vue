<template><div><h1 id="_05-【uni-app的api】" tabindex="-1"><a class="header-anchor" href="#_05-【uni-app的api】" aria-hidden="true">#</a> 05 【uni-app的API】</h1>
<h2 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> 1.概述</h2>
<p><code v-pre>uni-app</code>的 js API 由标准 ECMAScript 的 js API 和 uni 扩展 API 这两部分组成。</p>
<p>标准 ECMAScript 的 js 仅是最基础的 js。浏览器基于它扩展了 window、document、navigator 等对象。小程序也基于标准 js 扩展了各种 wx.xx、my.xx、swan.xx 的 API。node 也扩展了 fs 等模块。</p>
<p>uni-app 基于 ECMAScript 扩展了 uni 对象，并且 API 命名与小程序保持兼容。</p>
<h3 id="_1-1-标准-js-和浏览器-js-的区别" tabindex="-1"><a class="header-anchor" href="#_1-1-标准-js-和浏览器-js-的区别" aria-hidden="true">#</a> 1.1 标准 js 和浏览器 js 的区别</h3>
<p><code v-pre>uni-app</code>的 js 代码，web端运行于浏览器中。非web端（包含小程序和 App），Android 平台运行在 v8 引擎中，iOS 平台运行在 iOS 自带的 jscore 引擎中，都没有运行在浏览器或 webview 里。</p>
<p>非web端，虽然不支持 window、document、navigator 等浏览器的 js API，但也支持标准 ECMAScript。</p>
<p>请注意不要把浏览器里的 js 等价于标准 js。</p>
<p>所以 uni-app 的web端，一样支持标准 js，支持 if、for 等语法，支持字符串、数字、时间、布尔值、数组、自定义对象等变量类型及各种处理方法。仅仅是不支持 window、document、navigator 等浏览器专用对象。</p>
<h3 id="_1-2-各端特色-api-调用" tabindex="-1"><a class="header-anchor" href="#_1-2-各端特色-api-调用" aria-hidden="true">#</a> 1.2 各端特色 API 调用</h3>
<p>除了 uni-app 框架内置的跨端 API，各端自己的特色 API 也可通过<a href="https://uniapp.dcloud.io/platform" target="_blank" rel="noopener noreferrer">条件编译 (opens new window)<ExternalLinkIcon/></a>自由使用。</p>
<p>各端特色 API 规范参考各端的开发文档。其中 App 端的 JS API 参考<a href="https://www.html5plus.org/doc/h5p.html" target="_blank" rel="noopener noreferrer">html5plus.org (opens new window)<ExternalLinkIcon/></a>；uni-app 也支持通过扩展原生插件来丰富 App 端的开发能力，具体参考<a href="http://ask.dcloud.net.cn/article/35408" target="_blank" rel="noopener noreferrer">插件开发文档(opens new window)<ExternalLinkIcon/></a></p>
<p>各平台的 API 新增，不需要 uni-app 升级，开发者就可以直接使用。</p>
<h3 id="_1-3-说明" tabindex="-1"><a class="header-anchor" href="#_1-3-说明" aria-hidden="true">#</a> 1.3 说明</h3>
<ul>
<li>uni.on 开头的 API 是监听某个事件发生的 API 接口，接受一个 CALLBACK 函数作为参数。当该事件触发时，会调用 CALLBACK 函数。</li>
<li>如未特殊约定，其他 API 接口都接受一个 OBJECT 作为参数。</li>
<li>OBJECT 中可以指定 success，fail，complete 来接收接口调用结果。</li>
<li><strong>平台差异说明</strong>若无特殊说明，则表示所有平台均支持。</li>
<li>异步 API 会返回 <code v-pre>errMsg</code> 字段，同步 API 则不会。比如：<code v-pre>getSystemInfoSync</code> 在返回结果中不会有 <code v-pre>errMsg</code>。</li>
</ul>
<h3 id="_1-4-api-promise-化" tabindex="-1"><a class="header-anchor" href="#_1-4-api-promise-化" aria-hidden="true">#</a> 1.4 API Promise 化</h3>
<ol>
<li>
<p>具体 API <code v-pre>Promise 化</code> 的策略：</p>
<ul>
<li>
<p>异步的方法，如果不传入 success、fail、complete 等 callback 参数，将以 Promise 返回数据。例如：<code v-pre>uni.getImageInfo()</code></p>
</li>
<li>
<p>异步的方法，且有返回对象，如果希望获取返回对象，必须至少传入一项 success、fail、complete 等 callback 参数。例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token comment">// 正常使用</span>
 <span class="token keyword">const</span> task <span class="token operator">=</span> uni<span class="token punctuation">.</span><span class="token function">connectSocket</span><span class="token punctuation">(</span>
  <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">)</span>

 <span class="token comment">// Promise 化</span>
 uni<span class="token punctuation">.</span><span class="token function">connectSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token comment">// 此处即为正常使用时 success 回调的 res</span>
   <span class="token comment">// uni.connectSocket() 正常使用时是会返回 task 对象的，如果想获取 task ，则不要使用 Promise 化</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>不进行 <code v-pre>Promise 化</code> 的 API：</p>
<ul>
<li>同步的方法（即以 sync 结束）。例如：<code v-pre>uni.getSystemInfoSync()</code></li>
<li>以 create 开头的方法。例如：<code v-pre>uni.createMapContext()</code></li>
<li>以 manager 结束的方法。例如：<code v-pre>uni.getBackgroundAudioManager()</code></li>
</ul>
</li>
</ol>
<h3 id="_1-5-vue-2-和-vue-3-的-api-promise化" tabindex="-1"><a class="header-anchor" href="#_1-5-vue-2-和-vue-3-的-api-promise化" aria-hidden="true">#</a> 1.5 Vue 2 和 Vue 3 的 API Promise化</h3>
<p><a href="https://uniapp.dcloud.net.cn/api/#vue-2-%E5%92%8C-vue-3-%E7%9A%84-api-promise-%E5%8C%96" target="_blank" rel="noopener noreferrer">uni-app官网 (dcloud.net.cn)<ExternalLinkIcon/></a></p>
<blockquote>
<p>Vue 2 和 Vue 3 项目中 <code v-pre>API Promise 化</code> 返回格式不一致，以下为 <code v-pre>不同点</code> 和 <code v-pre>返回格式互相转换</code></p>
</blockquote>
<ul>
<li>
<p>不同点</p>
<ul>
<li>Vue2 对部分 API 进行了 Promise 封装，返回数据的第一个参数是错误对象，第二个参数是返回数据。此时使用 <code v-pre>catch</code> 是拿不到报错信息的，因为内部对错误进行了拦截。</li>
<li>Vue3 对部分 API 进行了 Promise 封装，调用成功会进入 <code v-pre>then 方法</code> 回调。调用失败会进入 <code v-pre>catch 方法</code> 回调</li>
</ul>
<p><strong>使用示例：</strong></p>
</li>
</ul>
<p><code v-pre>vue2</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 默认方式</span>
uni<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://www.example.com/request"</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Promise</span>
uni
  <span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://www.example.com/request"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// data为一个数组</span>
    <span class="token comment">// 数组第一项为错误信息 即为 fail 回调</span>
    <span class="token comment">// 第二项为返回数据</span>
    <span class="token keyword">var</span> <span class="token punctuation">[</span>err<span class="token punctuation">,</span> res<span class="token punctuation">]</span> <span class="token operator">=</span> data<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Await</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> <span class="token punctuation">[</span>err<span class="token punctuation">,</span> res<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> uni<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://www.example.com/request"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>vue3</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 默认方式</span>
uni<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://www.example.com/request"</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用 Promise then/catch 方式调用</span>
uni
  <span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://www.example.com/request"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 此处的 res 参数，与使用默认方式调用时 success 回调中的 res 参数一致</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 此处的 err 参数，与使用默认方式调用时 fail 回调中的 err 参数一致</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用 Async/Await 方式调用</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token keyword">await</span> uni<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://www.example.com/request"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 此处的 res 参数，与使用默认方式调用时 success 回调中的 res 参数一致</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 此处的 err 参数，与使用默认方式调用时 fail 回调中的 err 参数一致</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-网络" tabindex="-1"><a class="header-anchor" href="#_2-网络" aria-hidden="true">#</a> 2.网络</h2>
<h3 id="_2-1-发起请求" tabindex="-1"><a class="header-anchor" href="#_2-1-发起请求" aria-hidden="true">#</a> 2.1 发起请求</h3>
<h4 id="_2-1-1-uni-request-object" tabindex="-1"><a class="header-anchor" href="#_2-1-1-uni-request-object" aria-hidden="true">#</a> 2.1.1 uni.request(OBJECT)</h4>
<p><a href="https://uniapp.dcloud.net.cn/api/request/request.html#configmtls" target="_blank" rel="noopener noreferrer">uni.request(OBJECT) | uni-app官网 (dcloud.net.cn)<ExternalLinkIcon/></a></p>
<p>发起网络请求。</p>
<blockquote>
<p>在各个小程序平台运行时，网络相关的 API 在使用前需要配置域名白名单。</p>
</blockquote>
<blockquote>
<p><strong>success等等函数最好都要用箭头函数，不然拿不到this指定的data数据！</strong></p>
</blockquote>
<p><strong>OBJECT 参数说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">默认值</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">平台差异说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">url</td>
<td style="text-align:left">String</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">开发者服务器接口地址</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">data</td>
<td style="text-align:left">Object/String/ArrayBuffer</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">请求的参数</td>
<td style="text-align:left">App 3.3.7 以下不支持 ArrayBuffer 类型</td>
</tr>
<tr>
<td style="text-align:left">header</td>
<td style="text-align:left">Object</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">设置请求的 header，header 中不能设置 Referer。</td>
<td style="text-align:left">App、H5端会自动带上cookie，且H5端不可手动修改</td>
</tr>
<tr>
<td style="text-align:left">method</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">GET</td>
<td style="text-align:left">有效值详见下方说明</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">timeout</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">否</td>
<td style="text-align:left">60000</td>
<td style="text-align:left">超时时间，单位 ms</td>
<td style="text-align:left">H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序</td>
</tr>
<tr>
<td style="text-align:left">success</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">收到开发者服务器成功返回的回调函数</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">fail</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">接口调用失败的回调函数</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">complete</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">接口调用结束的回调函数（调用成功、失败都会执行）</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<p><strong>success 返回参数说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">data</td>
<td style="text-align:left">Object/String/ArrayBuffer</td>
<td style="text-align:left">开发者服务器返回的数据</td>
</tr>
<tr>
<td style="text-align:left">statusCode</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">开发者服务器返回的 HTTP 状态码</td>
</tr>
<tr>
<td style="text-align:left">header</td>
<td style="text-align:left">Object</td>
<td style="text-align:left">开发者服务器返回的 HTTP Response Header</td>
</tr>
<tr>
<td style="text-align:left">cookies</td>
<td style="text-align:left"><code v-pre>Array.&lt;string&gt;</code></td>
<td style="text-align:left">开发者服务器返回的 cookies，格式为字符串数组</td>
</tr>
</tbody>
</table>
<p><strong>data 数据说明</strong></p>
<p>最终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String。转换规则如下：</p>
<ul>
<li>对于 <code v-pre>GET</code> 方法，会将数据转换为 query string。例如 <code v-pre>{ name: 'name', age: 18 }</code> 转换后的结果是 <code v-pre>name=name&amp;age=18</code>。</li>
<li>对于 <code v-pre>POST</code> 方法且 <code v-pre>header['content-type']</code> 为 <code v-pre>application/json</code> 的数据，会进行 JSON 序列化。</li>
<li>对于 <code v-pre>POST</code> 方法且 <code v-pre>header['content-type']</code> 为 <code v-pre>application/x-www-form-urlencoded</code> 的数据，会将数据转换为 query string。</li>
</ul>
<p><strong>示例</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://www.example.com/request'</span><span class="token punctuation">,</span> <span class="token comment">//仅为示例，并非真实接口地址。</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'uni.request'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'custom-header'</span><span class="token operator">:</span> <span class="token string">'hello'</span> <span class="token comment">//自定义请求头信息</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">'request success'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在页面刚加载的时候就请求数据
需要在页面的<code v-pre>onLoad</code>事件中调用获取数据的函数</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token doc-comment comment">/**
   * 生命周期函数--监听页面加载
   */</span>
  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>返回值</strong></p>
<p>如果希望返回一个 <code v-pre>requestTask</code> 对象，需要至少传入 success / fail / complete 参数中的一个。例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> requestTask <span class="token operator">=</span> uni<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://www.example.com/request'</span><span class="token punctuation">,</span> <span class="token comment">//仅为示例，并非真实接口地址。</span>
	<span class="token function-variable function">complete</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
requestTask<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果没有传入 success / fail / complete 参数，则会返回封装后的 Promise 对象：<a href="https://uniapp.dcloud.net.cn/api/#promise-%E5%B0%81%E8%A3%85" target="_blank" rel="noopener noreferrer">Promise 封装<ExternalLinkIcon/></a></p>
<p>通过 <code v-pre>requestTask</code>，可中断请求任务。</p>
<p><strong>requestTask 对象的方法列表</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">方法</th>
<th style="text-align:left">参数</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">abort</td>
<td style="text-align:left"></td>
<td style="text-align:left">中断请求任务</td>
</tr>
<tr>
<td style="text-align:left">offHeadersReceived</td>
<td style="text-align:left"></td>
<td style="text-align:left">取消监听 HTTP Response Header 事件，仅<code v-pre>微信小程序平台</code>支持，<a href="https://developers.weixin.qq.com/miniprogram/dev/api/RequestTask.offHeadersReceived.html" target="_blank" rel="noopener noreferrer">文档详情(opens new window)<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:left">onHeadersReceived</td>
<td style="text-align:left"></td>
<td style="text-align:left">监听 HTTP Response Header 事件。会比请求完成事件更早，仅<code v-pre>微信小程序平台</code>支持，<a href="https://developers.weixin.qq.com/miniprogram/dev/api/RequestTask.onHeadersReceived.html" target="_blank" rel="noopener noreferrer">文档详情(opens new window)<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<p><strong>示例</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> requestTask <span class="token operator">=</span> uni<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://www.example.com/request'</span><span class="token punctuation">,</span> <span class="token comment">//仅为示例，并非真实接口地址。</span>
	<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 中断请求任务</span>
requestTask<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Tips</strong></p>
<ul>
<li>
<p>请求的 <code v-pre>header</code> 中 <code v-pre>content-type</code> 默认为 <code v-pre>application/json</code>。</p>
</li>
<li>
<p>避免在 <code v-pre>header</code> 中使用中文，或者使用 encodeURIComponent 进行编码，否则在百度小程序报错。（来自：<a href="https://juejin.im/user/2612095359650712" target="_blank" rel="noopener noreferrer">快狗打车前端团队 (opens new window)<ExternalLinkIcon/></a>）</p>
</li>
<li>
<p>网络请求的 <code v-pre>超时时间</code> 可以统一在 <code v-pre>manifest.json</code> 中配置 <a href="https://uniapp.dcloud.net.cn/collocation/manifest#networktimeout" target="_blank" rel="noopener noreferrer">networkTimeout<ExternalLinkIcon/></a>。</p>
</li>
<li>
<p>H5 端本地调试需注意跨域问题，参考：<a href="https://ask.dcloud.net.cn/article/35267" target="_blank" rel="noopener noreferrer">调试跨域问题解决方案<ExternalLinkIcon/></a></p>
</li>
<li>
<p>注意小程序端不支持自动保持 cookie，服务器应避免验证 cookie。如果服务器无法修改，也可以使用一些模拟手段，比如这样的工具<a href="https://github.com/charleslo1/weapp-cookie" target="_blank" rel="noopener noreferrer">https://github.com/charleslo1/weapp-cookie (opens new window)<ExternalLinkIcon/></a>可以请求时带上 cookie 并将响应的 cookie 保存在本地。</p>
</li>
<li>
<p>H5端 cookie 受跨域限制（和平时开发网站时一样），旧版的 uni.request 未支持 withCredentials 配置，可以直接使用 xhr 对象或者其他类库。</p>
</li>
</ul>
<h2 id="_3-路由和页面跳转" tabindex="-1"><a class="header-anchor" href="#_3-路由和页面跳转" aria-hidden="true">#</a> 3.路由和页面跳转</h2>
<h3 id="_3-1-uni-navigateto-object" tabindex="-1"><a class="header-anchor" href="#_3-1-uni-navigateto-object" aria-hidden="true">#</a> 3.1 uni.navigateTo(OBJECT)</h3>
<p><a href="https://uniapp.dcloud.net.cn/api/router.html#navigateto" target="_blank" rel="noopener noreferrer">uni.navigateTo(OBJECT) | uni-app官网 (dcloud.net.cn)<ExternalLinkIcon/></a></p>
<p>保留当前页面，跳转到应用内的某个页面，使用<code v-pre>uni.navigateBack</code>可以返回到原页面。</p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">默认值</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">平台差异说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">url</td>
<td style="text-align:left">String</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&amp;分隔；如 'path?key=value&amp;key2=value2'，path为下一个页面的路径，下一个页面的onLoad函数可得到传递的参数</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">animationType</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">pop-in</td>
<td style="text-align:left">窗口显示的动画效果，详见：<a href="https://uniapp.dcloud.net.cn/api/router#animation" target="_blank" rel="noopener noreferrer">窗口动画<ExternalLinkIcon/></a></td>
<td style="text-align:left">App</td>
</tr>
<tr>
<td style="text-align:left">animationDuration</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">否</td>
<td style="text-align:left">300</td>
<td style="text-align:left">窗口动画持续时间，单位为 ms</td>
<td style="text-align:left">App</td>
</tr>
<tr>
<td style="text-align:left">events</td>
<td style="text-align:left">Object</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">页面间通信接口，用于监听被打开页面发送到当前页面的数据。2.8.9+ 开始支持。</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">success</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">接口调用成功的回调函数</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">fail</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">接口调用失败的回调函数</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">complete</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">接口调用结束的回调函数（调用成功、失败都会执行）</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<p><strong>示例</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//在起始页面跳转到test.vue页面并传递参数</span>
uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'pages/test?id=1&amp;name=uniapp'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 在test.vue页面接受参数</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token function-variable function">onLoad</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//option为object类型，会序列化上个页面传递的参数</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>option<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//打印出上个页面传递的参数。</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>option<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//打印出上个页面传递的参数。</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 在起始页面跳转到test.vue页面，并监听test.vue发送过来的事件数据</span>
uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'pages/test?id=1'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">events</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据</span>
    <span class="token function-variable function">acceptDataFromOpenedPage</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">someEvent</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 通过eventChannel向被打开页面传送数据</span>
    res<span class="token punctuation">.</span>eventChannel<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'acceptDataFromOpenerPage'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">'data from starter page'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 在test.vue页面，向起始页通过事件传递数据</span>
<span class="token function-variable function">onLoad</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> eventChannel <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getOpenerEventChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  eventChannel<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'acceptDataFromOpenedPage'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">'data from test page'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  eventChannel<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'someEvent'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">'data from test page for someEvent'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据</span>
  eventChannel<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'acceptDataFromOpenerPage'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong></p>
<ul>
<li>页面跳转路径有层级限制，不能无限制跳转新页面</li>
<li>跳转到 tabBar 页面只能使用 switchTab 跳转</li>
<li>路由API的目标页面必须是在pages.json里注册的vue页面。如果想打开web url，在App平台可以使用 <a href="http://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.openURL" target="_blank" rel="noopener noreferrer">plus.runtime.openURL (opens new window)<ExternalLinkIcon/></a>或web-view组件；H5平台使用 window.open；小程序平台使用web-view组件（url需在小程序的联网白名单中）。在hello uni-app中有个组件ulink.vue已对多端进行封装，可参考。</li>
</ul>
<h3 id="_3-2-uni-redirectto-object" tabindex="-1"><a class="header-anchor" href="#_3-2-uni-redirectto-object" aria-hidden="true">#</a> 3.2 uni.redirectTo(OBJECT)</h3>
<p>关闭当前页面，跳转到应用内的某个页面。</p>
<p><strong>OBJECT参数说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">url</td>
<td style="text-align:left">String</td>
<td style="text-align:left">是</td>
<td style="text-align:left">需要跳转的应用内非 tabBar 的页面的路径，路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&amp;分隔；如 'path?key=value&amp;key2=value2'</td>
</tr>
<tr>
<td style="text-align:left">success</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用成功的回调函数</td>
</tr>
<tr>
<td style="text-align:left">fail</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用失败的回调函数</td>
</tr>
<tr>
<td style="text-align:left">complete</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用结束的回调函数（调用成功、失败都会执行）</td>
</tr>
</tbody>
</table>
<p><strong>示例</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">redirectTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'test?id=1'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制代码</p>
<p><strong>注意：</strong></p>
<ul>
<li>跳转到 tabBar 页面只能使用 switchTab 跳转</li>
</ul>
<h3 id="_3-3-uni-relaunch-object" tabindex="-1"><a class="header-anchor" href="#_3-3-uni-relaunch-object" aria-hidden="true">#</a> 3.3 uni.reLaunch(OBJECT)</h3>
<p>关闭所有页面，打开到应用内的某个页面。</p>
<p><strong>注意：</strong> 如果调用了 <a href="https://uniapp.dcloud.net.cn/api/preload-page" target="_blank" rel="noopener noreferrer">uni.preloadPage(OBJECT) (opens new window)<ExternalLinkIcon/></a>不会关闭，仅触发生命周期 <code v-pre>onHide</code></p>
<p><strong>OBJECT参数说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">url</td>
<td style="text-align:left">String</td>
<td style="text-align:left">是</td>
<td style="text-align:left">需要跳转的应用内页面路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&amp;分隔；如 'path?key=value&amp;key2=value2'，如果跳转的页面路径是 tabBar 页面则不能带参数</td>
</tr>
<tr>
<td style="text-align:left">success</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用成功的回调函数</td>
</tr>
<tr>
<td style="text-align:left">fail</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用失败的回调函数</td>
</tr>
<tr>
<td style="text-align:left">complete</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用结束的回调函数（调用成功、失败都会执行）</td>
</tr>
</tbody>
</table>
<p><strong>示例</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">reLaunch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'test?id=1'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token function-variable function">onLoad</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>option<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Tips：</p>
<ul>
<li>H5端调用<code v-pre>uni.reLaunch</code>之后之前页面栈会销毁，但是无法清空浏览器之前的历史记录，此时<code v-pre>navigateBack</code>不能返回，如果存在历史记录的话点击浏览器的返回按钮或者调用<code v-pre>history.back()</code>仍然可以导航到浏览器的其他历史记录。</li>
</ul>
<h3 id="_3-4-uni-switchtab-object" tabindex="-1"><a class="header-anchor" href="#_3-4-uni-switchtab-object" aria-hidden="true">#</a> 3.4 uni.switchTab(OBJECT)</h3>
<p>跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。</p>
<p><strong>注意：</strong> 如果调用了 <a href="https://uniapp.dcloud.net.cn/api/preload-page" target="_blank" rel="noopener noreferrer">uni.preloadPage(OBJECT) (opens new window)<ExternalLinkIcon/></a>不会关闭，仅触发生命周期 <code v-pre>onHide</code></p>
<p><strong>OBJECT参数说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">url</td>
<td style="text-align:left">String</td>
<td style="text-align:left">是</td>
<td style="text-align:left">需要跳转的 tabBar 页面的路径（需在 pages.json 的 tabBar 字段定义的页面），路径后不能带参数</td>
</tr>
<tr>
<td style="text-align:left">success</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用成功的回调函数</td>
</tr>
<tr>
<td style="text-align:left">fail</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用失败的回调函数</td>
</tr>
<tr>
<td style="text-align:left">complete</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用结束的回调函数（调用成功、失败都会执行）</td>
</tr>
</tbody>
</table>
<p><strong>示例</strong></p>
<p>pages.json</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"tabBar"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"list"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      <span class="token string-property property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/index/index"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"text"</span><span class="token operator">:</span> <span class="token string">"首页"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
      <span class="token string-property property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/other/other"</span><span class="token punctuation">,</span>
      <span class="token string-property property">"text"</span><span class="token operator">:</span> <span class="token string">"其他"</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>other.vue</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">switchTab</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/pages/index/index'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-uni-navigateback-object" tabindex="-1"><a class="header-anchor" href="#_3-5-uni-navigateback-object" aria-hidden="true">#</a> 3.5 uni.navigateBack(OBJECT)</h3>
<p>关闭当前页面，返回上一页面或多级页面。可通过 <code v-pre>getCurrentPages()</code> 获取当前的页面栈，决定需要返回几层。</p>
<p><strong>OBJECT参数说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">默认值</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">平台差异说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">delta</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">否</td>
<td style="text-align:left">1</td>
<td style="text-align:left">返回的页面数，如果 delta 大于现有页面数，则返回到首页。</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">animationType</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">pop-out</td>
<td style="text-align:left">窗口关闭的动画效果，详见：<a href="https://uniapp.dcloud.net.cn/api/router#animation" target="_blank" rel="noopener noreferrer">窗口动画<ExternalLinkIcon/></a></td>
<td style="text-align:left">App</td>
</tr>
<tr>
<td style="text-align:left">animationDuration</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">否</td>
<td style="text-align:left">300</td>
<td style="text-align:left">窗口关闭动画的持续时间，单位为 ms</td>
<td style="text-align:left">App</td>
</tr>
<tr>
<td style="text-align:left">success</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用成功的回调函数</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">fail</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用失败的回调函数</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">complete</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用结束的回调函数（调用成功、失败都会执行）</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<p><strong>示例</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 注意：调用 navigateTo 跳转时，调用该方法的页面会被加入堆栈，而 redirectTo 方法则不会。见下方示例代码</span>

<span class="token comment">// 此处是A页面</span>
uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'B?id=1'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 此处是B页面</span>
uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'C?id=1'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 在C页面内 navigateBack，将返回A页面</span>
uni<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">delta</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-eventchannel" tabindex="-1"><a class="header-anchor" href="#_3-6-eventchannel" aria-hidden="true">#</a> 3.6 EventChannel</h3>
<p>2.8.9+ 支持 页面间事件通信通道</p>
<p><strong>方法</strong></p>
<h4 id="eventchannel-emit-string-eventname-any-args" tabindex="-1"><a class="header-anchor" href="#eventchannel-emit-string-eventname-any-args" aria-hidden="true">#</a> <a href="https://uniapp.dcloud.net.cn/api/router.html#eventchannel-emit" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>EventChannel.emit(string eventName, any args)</h4>
<p>触发一个事件</p>
<p>string eventName 事件名称</p>
<p>any args 事件参数</p>
<h4 id="eventchannel-off-string-eventname-function-fn" tabindex="-1"><a class="header-anchor" href="#eventchannel-off-string-eventname-function-fn" aria-hidden="true">#</a> <a href="https://uniapp.dcloud.net.cn/api/router.html#eventchannel-off" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>EventChannel.off(string eventName, function fn)</h4>
<p>取消监听一个事件。给出第二个参数时，只取消给出的监听函数，否则取消所有监听函数</p>
<p>string eventName 事件名称</p>
<p>function fn 事件监听函数</p>
<p>参数 any args 触发事件参数</p>
<h4 id="eventchannel-on-string-eventname-function-fn" tabindex="-1"><a class="header-anchor" href="#eventchannel-on-string-eventname-function-fn" aria-hidden="true">#</a> <a href="https://uniapp.dcloud.net.cn/api/router.html#eventchannel-on" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>EventChannel.on(string eventName, function fn)</h4>
<p>持续监听一个事件</p>
<p>string eventName 事件名称</p>
<p>function fn 事件监听函数</p>
<p>参数 any args 触发事件参数</p>
<h4 id="eventchannel-once-string-eventname-function-fn" tabindex="-1"><a class="header-anchor" href="#eventchannel-once-string-eventname-function-fn" aria-hidden="true">#</a> <a href="https://uniapp.dcloud.net.cn/api/router.html#eventchannel-once" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>EventChannel.once(string eventName, function fn)</h4>
<p>监听一个事件一次，触发后失效</p>
<p>string eventName 事件名称</p>
<p>function fn 事件监听函数</p>
<p>参数 any args 触发事件参数</p>
<p>Tips：</p>
<ul>
<li><code v-pre>navigateTo</code>, <code v-pre>redirectTo</code> 只能打开非 tabBar 页面。</li>
<li><code v-pre>switchTab</code> 只能打开 <code v-pre>tabBar</code> 页面。</li>
<li><code v-pre>reLaunch</code> 可以打开任意页面。</li>
<li>页面底部的 <code v-pre>tabBar</code> 由页面决定，即只要是定义为 <code v-pre>tabBar</code> 的页面，底部都有 <code v-pre>tabBar</code>。</li>
<li>不能在 <code v-pre>App.vue</code> 里面进行页面跳转。</li>
<li>H5端页面刷新之后页面栈会消失，此时<code v-pre>navigateBack</code>不能返回，如果一定要返回可以使用<code v-pre>history.back()</code>导航到浏览器的其他历史记录。</li>
</ul>
<p><strong>参考事项</strong></p>
<ul>
<li>页面路由拦截和管理，插件市场有很多封装好的工具类，搜索<a href="https://ext.dcloud.net.cn/search?q=%E8%B7%AF%E7%94%B1" target="_blank" rel="noopener noreferrer">路由<ExternalLinkIcon/></a></li>
</ul>
<h2 id="_4-数据缓存" tabindex="-1"><a class="header-anchor" href="#_4-数据缓存" aria-hidden="true">#</a> 4.数据缓存</h2>
<h3 id="_4-1-uni-setstoragesync-key-data" tabindex="-1"><a class="header-anchor" href="#_4-1-uni-setstoragesync-key-data" aria-hidden="true">#</a> 4.1 uni.setStorageSync(KEY,DATA)</h3>
<p>将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。</p>
<p><strong>参数说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">key</td>
<td style="text-align:left">String</td>
<td style="text-align:left">是</td>
<td style="text-align:left">本地缓存中的指定的 key</td>
</tr>
<tr>
<td style="text-align:left">data</td>
<td style="text-align:left">Any</td>
<td style="text-align:left">是</td>
<td style="text-align:left">需要存储的内容，只支持原生类型、及能够通过 JSON.stringify 序列化的对象</td>
</tr>
</tbody>
</table>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
	uni<span class="token punctuation">.</span><span class="token function">setStorageSync</span><span class="token punctuation">(</span><span class="token string">'storage_key'</span><span class="token punctuation">,</span> <span class="token string">'hello'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong></p>
<ul>
<li><code v-pre>uni-</code>、<code v-pre>uni_</code>、<code v-pre>dcloud-</code>、<code v-pre>dcloud_</code>为前缀的key，为系统保留关键前缀。如<code v-pre>uni_deviceId</code>、<code v-pre>uni_id_token</code>，请开发者为key命名时避开这些前缀。</li>
</ul>
<h3 id="_4-2-uni-getstoragesync-key" tabindex="-1"><a class="header-anchor" href="#_4-2-uni-getstoragesync-key" aria-hidden="true">#</a> 4.2 uni.getStorageSync(KEY)</h3>
<p>从本地缓存中同步获取指定 key 对应的内容。</p>
<p><strong>参数说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">key</td>
<td style="text-align:left">String</td>
<td style="text-align:left">是</td>
<td style="text-align:left">本地缓存中的指定的 key</td>
</tr>
</tbody>
</table>
<p><strong>示例</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> value <span class="token operator">=</span> uni<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span><span class="token string">'storage_key'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-uni-removestoragesync-key" tabindex="-1"><a class="header-anchor" href="#_4-3-uni-removestoragesync-key" aria-hidden="true">#</a> 4.3 uni.removeStorageSync(KEY)</h3>
<p>从本地缓存中同步移除指定 key。</p>
<p><strong>参数说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">key</td>
<td style="text-align:left">String</td>
<td style="text-align:left">是</td>
<td style="text-align:left">本地缓存中的指定的 key</td>
</tr>
</tbody>
</table>
<p><strong>示例</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
	uni<span class="token punctuation">.</span><span class="token function">removeStorageSync</span><span class="token punctuation">(</span><span class="token string">'storage_key'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-uni-clearstoragesync" tabindex="-1"><a class="header-anchor" href="#_4-4-uni-clearstoragesync" aria-hidden="true">#</a> 4.4 uni.clearStorageSync()</h3>
<p>同步清理本地数据缓存。</p>
<p><strong>示例</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
	uni<span class="token punctuation">.</span><span class="token function">clearStorageSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong></p>
<p>uni-app的Storage在不同端的实现不同：</p>
<ul>
<li>H5端为localStorage，浏览器限制5M大小，是缓存概念，可能会被清理</li>
<li>App端为原生的plus.storage，无大小限制，不是缓存，是持久化的</li>
<li>各个小程序端为其自带的storage api，数据存储生命周期跟小程序本身一致，即除用户主动删除或超过一定时间被自动清理，否则数据都一直可用。</li>
<li>微信小程序单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。</li>
</ul>
<h2 id="_5-界面" tabindex="-1"><a class="header-anchor" href="#_5-界面" aria-hidden="true">#</a> 5.界面</h2>
<h3 id="_5-1-交互反馈" tabindex="-1"><a class="header-anchor" href="#_5-1-交互反馈" aria-hidden="true">#</a> 5.1 交互反馈</h3>
<h4 id="_5-1-1-uni-showtoast-object" tabindex="-1"><a class="header-anchor" href="#_5-1-1-uni-showtoast-object" aria-hidden="true">#</a> 5.1.1 uni.showToast(OBJECT)</h4>
<p><a href="https://uniapp.dcloud.net.cn/api/ui/prompt.html#showtoast" target="_blank" rel="noopener noreferrer">uni.showToast(OBJECT) | uni-app官网 (dcloud.net.cn)<ExternalLinkIcon/></a></p>
<p>显示消息提示框。</p>
<p><strong>OBJECT参数说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">平台差异说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">title</td>
<td style="text-align:left">String</td>
<td style="text-align:left">是</td>
<td style="text-align:left">提示的内容，长度与 icon 取值有关。</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">icon</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">图标，有效值详见下方说明。</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">image</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">自定义图标的本地路径（app端暂不支持gif）</td>
<td style="text-align:left">App、H5、微信小程序、百度小程序</td>
</tr>
<tr>
<td style="text-align:left">mask</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否显示透明蒙层，防止触摸穿透，默认：false</td>
<td style="text-align:left">App、微信小程序</td>
</tr>
<tr>
<td style="text-align:left">duration</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">否</td>
<td style="text-align:left">提示的延迟时间，单位毫秒，默认：1500</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">position</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">纯文本轻提示显示位置，填写有效值后只有 <code v-pre>title</code> 属性生效，且不支持通过 uni.hideToast 隐藏。有效值详见下方说明。</td>
<td style="text-align:left">App</td>
</tr>
<tr>
<td style="text-align:left">success</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用成功的回调函数</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">fail</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用失败的回调函数</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">complete</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用结束的回调函数（调用成功、失败都会执行）</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<p><strong>icon 值说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">平台差异说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">success</td>
<td style="text-align:left">显示成功图标，此时 title 文本在<code v-pre>小程序</code>平台最多显示 7 个汉字长度。</td>
<td style="text-align:left">支付宝小程序无长度无限制</td>
</tr>
<tr>
<td style="text-align:left">error</td>
<td style="text-align:left">显示错误图标，此时 title 文本在<code v-pre>小程序</code>平台最多显示 7 个汉字长度。</td>
<td style="text-align:left">支付宝小程序、快手小程序、字节小程序、百度小程序、京东小程序、QQ小程序不支持</td>
</tr>
<tr>
<td style="text-align:left">fail</td>
<td style="text-align:left">显示错误图标，此时 title 文本无长度显示。</td>
<td style="text-align:left">支付宝小程序、字节小程序</td>
</tr>
<tr>
<td style="text-align:left">exception</td>
<td style="text-align:left">显示异常图标。此时 title 文本无长度显示。</td>
<td style="text-align:left">支付宝小程序</td>
</tr>
<tr>
<td style="text-align:left">loading</td>
<td style="text-align:left">显示加载图标，此时 title 文本在<code v-pre>小程序</code>平台最多显示 7 个汉字长度。</td>
<td style="text-align:left">支付宝小程序不支持</td>
</tr>
<tr>
<td style="text-align:left">none</td>
<td style="text-align:left">不显示图标，此时 title 文本在<code v-pre>小程序</code>最多可显示两行，<code v-pre>App</code>仅支持单行显示。</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<p><strong>示例</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'标题'</span><span class="token punctuation">,</span>
	<span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>position 值说明（仅App生效）</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">top</td>
<td style="text-align:left">居上显示</td>
</tr>
<tr>
<td style="text-align:left">center</td>
<td style="text-align:left">居中显示</td>
</tr>
<tr>
<td style="text-align:left">bottom</td>
<td style="text-align:left">居底显示</td>
</tr>
</tbody>
</table>
<h4 id="_5-1-2-uni-hidetoast" tabindex="-1"><a class="header-anchor" href="#_5-1-2-uni-hidetoast" aria-hidden="true">#</a> 5.1.2 uni.hideToast()</h4>
<p>隐藏消息提示框。</p>
<p><strong>示例</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">hideToast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_5-1-3-uni-showloading-object" tabindex="-1"><a class="header-anchor" href="#_5-1-3-uni-showloading-object" aria-hidden="true">#</a> 5.1.3 uni.showLoading(OBJECT)</h4>
<p>显示 loading 提示框, 需主动调用 <a href="https://uniapp.dcloud.net.cn/api/ui/prompt#hideloading" target="_blank" rel="noopener noreferrer">uni.hideLoading<ExternalLinkIcon/></a> 才能关闭提示框。</p>
<p><strong>OBJECT参数说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">平台差异说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">title</td>
<td style="text-align:left">String</td>
<td style="text-align:left">是</td>
<td style="text-align:left">提示的文字内容，显示在loading的下方</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">mask</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">否</td>
<td style="text-align:left">是否显示透明蒙层，防止触摸穿透，默认：false</td>
<td style="text-align:left">H5、App、微信小程序、百度小程序</td>
</tr>
<tr>
<td style="text-align:left">success</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用成功的回调函数</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">fail</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用失败的回调函数</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">complete</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用结束的回调函数（调用成功、失败都会执行）</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<p><strong>示例</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'加载中'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-1-4-uni-hideloading" tabindex="-1"><a class="header-anchor" href="#_5-1-4-uni-hideloading" aria-hidden="true">#</a> 5.1.4 uni.hideLoading()</h4>
<p>隐藏 loading 提示框。</p>
<p><strong>示例</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'加载中'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	uni<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-1-5-uni-showmodal-object" tabindex="-1"><a class="header-anchor" href="#_5-1-5-uni-showmodal-object" aria-hidden="true">#</a> 5.1.5 uni.showModal(OBJECT)</h4>
<p><a href="https://uniapp.dcloud.net.cn/api/ui/prompt.html#showmodal" target="_blank" rel="noopener noreferrer">uni.showToast(OBJECT) | uni-app官网 (dcloud.net.cn)<ExternalLinkIcon/></a></p>
<p>显示模态弹窗，可以只有一个确定按钮，也可以同时有确定和取消按钮。类似于一个API整合了 html 中：alert、confirm。</p>
<p><strong>success返回参数说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">confirm</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">为 true 时，表示用户点击了确定按钮</td>
</tr>
<tr>
<td style="text-align:left">cancel</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）</td>
</tr>
</tbody>
</table>
<p><strong>示例</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'提示'</span><span class="token punctuation">,</span>
	<span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'这是一个模态弹窗'</span><span class="token punctuation">,</span>
	<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>confirm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'用户点击确定'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>cancel<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'用户点击取消'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://i0.hdslb.com/bfs/album/061217a883709051e65348a91168e69cdf5a23d4.png" alt="image-20221014121909976"></p>
<h4 id="_5-1-6-uni-showactionsheet-object" tabindex="-1"><a class="header-anchor" href="#_5-1-6-uni-showactionsheet-object" aria-hidden="true">#</a> 5.1.6 uni.showActionSheet(OBJECT)</h4>
<p><a href="https://uniapp.dcloud.net.cn/api/ui/prompt.html#showactionsheet" target="_blank" rel="noopener noreferrer">uni.showToast(OBJECT) | uni-app官网 (dcloud.net.cn)<ExternalLinkIcon/></a></p>
<p>从底部向上弹出操作菜单</p>
<p><strong>success返回参数说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">tapIndex</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">用户点击的按钮，从上到下的顺序，从0开始</td>
</tr>
</tbody>
</table>
<p><strong>示例</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">showActionSheet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">itemList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'A'</span><span class="token punctuation">,</span> <span class="token string">'B'</span><span class="token punctuation">,</span> <span class="token string">'C'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'选中了第'</span> <span class="token operator">+</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>tapIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">'个按钮'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>errMsg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://i0.hdslb.com/bfs/album/316a4345dc977084b0194df17854f199c3a38253.png" alt="image-20221014122100193"></p>
<h3 id="_5-2-下拉刷新" tabindex="-1"><a class="header-anchor" href="#_5-2-下拉刷新" aria-hidden="true">#</a> 5.2 下拉刷新</h3>
<h4 id="_5-2-1-基本配置" tabindex="-1"><a class="header-anchor" href="#_5-2-1-基本配置" aria-hidden="true">#</a> 5.2.1 基本配置</h4>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>默认值</th>
<th>描述</th>
<th>平台差异说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>backgroundColor</td>
<td>HexColor</td>
<td>#ffffff</td>
<td>下拉显示出来的窗口的背景色</td>
<td>微信小程序</td>
</tr>
<tr>
<td>backgroundTextStyle</td>
<td>String</td>
<td>dark</td>
<td>下拉 loading 的样式，仅支持 dark / light</td>
<td>微信小程序</td>
</tr>
<tr>
<td>enablePullDownRefresh</td>
<td>Boolean</td>
<td>false</td>
<td>是否开启下拉刷新，详见<a href="https://uniapp.dcloud.net.cn/tutorial/page.html#lifecycle" target="_blank" rel="noopener noreferrer">页面生命周期<ExternalLinkIcon/></a>。</td>
<td></td>
</tr>
</tbody>
</table>
<p><img src="https://i0.hdslb.com/bfs/album/2351f57d223d7a5d127f873638ed5aa931adf7df.png" alt="image-20221012202610815"></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"enablePullDownRefresh"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"#bfa"</span><span class="token punctuation">,</span>
    <span class="token property">"backgroundTextStyle"</span><span class="token operator">:</span> <span class="token string">"dark"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>网页页面显示如下：</strong></p>
<p><img src="https://i0.hdslb.com/bfs/album/38e25e497d658afacd1b393dc34277c9021bc4da.png" alt="image-20221012202548755"></p>
<p><strong>小程序页面如下：</strong></p>
<p><img src="https://i0.hdslb.com/bfs/album/65649a17ef5120accf4456f608405d31750cae4f.png" alt="image-20221012202559340"></p>
<p><strong>onPullDownRefresh</strong></p>
<p>在 js 中定义 onPullDownRefresh 处理函数（和onLoad等生命周期函数同级），监听该页面用户下拉刷新事件。</p>
<ul>
<li>需要在 <code v-pre>pages.json</code> 里，找到的当前页面的pages节点，并在 <code v-pre>style</code> 选项中开启 <code v-pre>enablePullDownRefresh</code>。</li>
<li>当处理完数据刷新后，<code v-pre>uni.stopPullDownRefresh</code> 可以停止当前页面的下拉刷新。</li>
</ul>
<h4 id="_5-2-2-uni-startpulldownrefresh" tabindex="-1"><a class="header-anchor" href="#_5-2-2-uni-startpulldownrefresh" aria-hidden="true">#</a> 5.2.2 <a href="https://uniapp.dcloud.net.cn/api/ui/pulldown.html#startpulldownrefresh" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>uni.startPullDownRefresh</h4>
<p>开始下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。</p>
<p><strong>OBJECT 参数说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数名</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">success</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用成功的回调</td>
</tr>
<tr>
<td style="text-align:left">fail</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用失败的回调函数</td>
</tr>
<tr>
<td style="text-align:left">complete</td>
<td style="text-align:left">Function</td>
<td style="text-align:left">否</td>
<td style="text-align:left">接口调用结束的回调函数（调用成功、失败都会执行）</td>
</tr>
</tbody>
</table>
<p><strong>success 返回参数说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">errMsg</td>
<td style="text-align:left">String</td>
<td style="text-align:left">接口调用结果</td>
</tr>
</tbody>
</table>
<h4 id="_5-2-3-uni-stoppulldownrefresh" tabindex="-1"><a class="header-anchor" href="#_5-2-3-uni-stoppulldownrefresh" aria-hidden="true">#</a> 5.2.3 <a href="https://uniapp.dcloud.net.cn/api/ui/pulldown.html#stoppulldownrefresh" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>uni.stopPullDownRefresh</h4>
<p>停止当前页面下拉刷新。</p>
<p><strong>示例</strong></p>
<p>第一步：开启下拉刷新。需要在 pages.json 里，找到的当前页面的pages节点，并在 style 选项中开启 enablePullDownRefresh。</p>
<p>第二步：onPullDownRefresh 处理函数（和onLoad等生命周期函数同级），该函数的作用就是用来监听该页面用户下拉刷新事件。</p>
<p>第三步：对应的停止uni.stopPullDownRefresh() 和 开始uni.startPullDownRefresh(OBJECT)下拉刷新的函数。</p>
<p>pages.json</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
        	<span class="token string-property property">"path"</span><span class="token operator">:</span> <span class="token string">"pages/index/index"</span><span class="token punctuation">,</span>
        	<span class="token string-property property">"style"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        		<span class="token string-property property">"navigationBarTitleText"</span><span class="token operator">:</span> <span class="token string">"uni-app"</span><span class="token punctuation">,</span>
        		<span class="token string-property property">"enablePullDownRefresh"</span><span class="token operator">:</span> <span class="token boolean">true</span>
        	<span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"globalStyle"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    	<span class="token string-property property">"navigationBarTextStyle"</span><span class="token operator">:</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
    	<span class="token string-property property">"navigationBarBackgroundColor"</span><span class="token operator">:</span> <span class="token string">"#0faeff"</span><span class="token punctuation">,</span>
    	<span class="token string-property property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"#fbf9fe"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.vue</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 仅做示例，实际开发中延时根据需求来使用。</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'uni-app'</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function-variable function">onLoad</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'start pulldown'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		uni<span class="token punctuation">.</span><span class="token function">startPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//一旦触发下拉刷新就会执行下面方法。</span>
	<span class="token function">onPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'refresh'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			uni<span class="token punctuation">.</span><span class="token function">stopPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//上面虽然睡眠了，但是依然会继续执行下面的代码。</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'验证代码继续执行'</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong></p>
<ul>
<li>支付宝小程序<code v-pre>startPullDownRefresh</code>在开发者工具里会提示<code v-pre>暂未开放，请勿使用</code></li>
<li>支付宝小程序<code v-pre>startPullDownRefresh</code>请使用真机调试（非真机预览）</li>
<li>后续支付宝小程序开发工具更新可能会有所修改</li>
</ul>
<h2 id="_6-页面和窗体" tabindex="-1"><a class="header-anchor" href="#_6-页面和窗体" aria-hidden="true">#</a> 6.页面和窗体</h2>
<h3 id="_6-1-页面" tabindex="-1"><a class="header-anchor" href="#_6-1-页面" aria-hidden="true">#</a> 6.1 页面</h3>
<h4 id="_6-1-1-getcurrentpages" tabindex="-1"><a class="header-anchor" href="#_6-1-1-getcurrentpages" aria-hidden="true">#</a> 6.1.1 getCurrentPages()</h4>
<p><code v-pre>getCurrentPages()</code> 函数用于获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。</p>
<p><strong>注意：</strong></p>
<ul>
<li><code v-pre>getCurrentPages()</code>仅用于展示页面栈的情况，请勿修改页面栈，以免造成页面状态错误。</li>
<li>不要在 App.onLaunch 的时候调用 getCurrentPages()，此时page 还没有生成。(要在方法里或者onshow里写，将此页面存入栈空间)</li>
</ul>
<p>每个页面实例的方法属性列表：</p>
<table>
<thead>
<tr>
<th>方法</th>
<th>描述</th>
<th>平台说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>page.$getAppWebview()</td>
<td>获取当前页面的webview对象实例</td>
<td>App</td>
</tr>
<tr>
<td>page.route</td>
<td>获取当前页面的路由</td>
<td></td>
</tr>
</tbody>
</table>
<p>熟悉页面栈后才能更好的使用getCurrentPages()，下面将列举几种常用的使用场景：
1.利用页面栈的长度
例如：进入小程序非默认首页时，需要提供返回首页的按钮或者执行其它事件</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">let</span> pages <span class="token operator">=</span> <span class="token function">getCurrentPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//当前页面栈</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>pages<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//todo</span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、跨页面赋值</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token keyword">let</span> pages <span class="token operator">=</span> <span class="token function">getCurrentPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//当前页面栈</span>
 <span class="token keyword">let</span> prevPage <span class="token operator">=</span> pages<span class="token punctuation">[</span>pages<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//上一页面</span>
 <span class="token comment">//直接给上移页面赋值</span>
 prevPage<span class="token punctuation">.</span>list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、页面跳转后自动刷新</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token comment">//举例</span>
 uni<span class="token punctuation">.</span><span class="token function">switchTab</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
     <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'../index/index'</span><span class="token punctuation">,</span>
     <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">var</span> page <span class="token operator">=</span> <span class="token function">getCurrentPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//当前页面</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>page <span class="token operator">==</span> <span class="token keyword">undefined</span> <span class="token operator">||</span> page <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
         page<span class="token punctuation">.</span><span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//或者其它操作</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、获取当前页面相关信息</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> pages <span class="token operator">=</span> <span class="token function">getCurrentPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//当前页面栈</span>
<span class="token comment">//当前页面为页面栈的最后一个元素</span>
<span class="token keyword">let</span> prevPage <span class="token operator">=</span> pages<span class="token punctuation">[</span>pages<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//当前页面</span>
<span class="token comment">// or</span>
<span class="token comment">// pop() 方法用于删除并返回数组的最后一个元素</span>
<span class="token keyword">let</span> prevPage <span class="token operator">=</span> pages<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//当前页面</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> prevPage<span class="token punctuation">.</span>route<span class="token punctuation">)</span> <span class="token comment">//举例：输出为‘pages/index/index</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-1-2-getapp" tabindex="-1"><a class="header-anchor" href="#_6-1-2-getapp" aria-hidden="true">#</a> 6.1.2 getApp()</h4>
<p><code v-pre>getApp()</code> 函数用于获取当前应用实例，一般用于获取globalData 。</p>
<p><strong>实例</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>globalData<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong></p>
<ul>
<li>不要在定义于 <code v-pre>App()</code> 内的函数中，或调用 <code v-pre>App</code> 前调用 <code v-pre>getApp()</code> ，可以通过 <code v-pre>this.$scope</code> 获取对应的app实例</li>
<li>通过 <code v-pre>getApp()</code> 获取实例之后，不要私自调用生命周期函数。</li>
<li>当在首页<code v-pre>nvue</code>中使用<code v-pre>getApp()</code>不一定可以获取真正的<code v-pre>App</code>对象。对此提供了<code v-pre>const app = getApp({allowDefault: true})</code>用来获取原始的<code v-pre>App</code>对象，可以用来在首页对<code v-pre>globalData</code>等初始化</li>
</ul>
<h3 id="_6-2-页面通讯" tabindex="-1"><a class="header-anchor" href="#_6-2-页面通讯" aria-hidden="true">#</a> 6.2 页面通讯</h3>
<h4 id="_6-2-1-uni-emit-eventname-object" tabindex="-1"><a class="header-anchor" href="#_6-2-1-uni-emit-eventname-object" aria-hidden="true">#</a> 6.2.1 uni.$emit(eventName,OBJECT)</h4>
<p>触发全局的自定义事件，附加参数都会传给监听器回调函数。</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>eventName</td>
<td>String</td>
<td>事件名</td>
</tr>
<tr>
<td>OBJECT</td>
<td>Object</td>
<td>触发事件携带的附加参数</td>
</tr>
</tbody>
</table>
<p><strong>代码示例</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'update'</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">'页面更新'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>复制代码</p>
<h4 id="_6-2-2-uni-on-eventname-callback" tabindex="-1"><a class="header-anchor" href="#_6-2-2-uni-on-eventname-callback" aria-hidden="true">#</a> 6.2.2 uni.$on(eventName,callback)</h4>
<p>监听全局的自定义事件，事件由 <code v-pre>uni.$emit</code> 触发，回调函数会接收事件触发函数的传入参数。</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>eventName</td>
<td>String</td>
<td>事件名</td>
</tr>
<tr>
<td>callback</td>
<td>Function</td>
<td>事件的回调函数</td>
</tr>
</tbody>
</table>
<p><strong>代码示例</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">'update'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'监听到事件来自 update ，携带参数 msg 为：'</span> <span class="token operator">+</span> data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制代码</p>
<h4 id="_6-2-3-uni-once-eventname-callback" tabindex="-1"><a class="header-anchor" href="#_6-2-3-uni-once-eventname-callback" aria-hidden="true">#</a> 6.2.3 uni.$once(eventName,callback)</h4>
<p>监听全局的自定义事件，事件由 <code v-pre>uni.$emit</code> 触发，但仅触发一次，在第一次触发之后移除该监听器。</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>eventName</td>
<td>String</td>
<td>事件名</td>
</tr>
<tr>
<td>callback</td>
<td>Function</td>
<td>事件的回调函数</td>
</tr>
</tbody>
</table>
<p><strong>代码示例</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">$once</span><span class="token punctuation">(</span><span class="token string">'update'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'监听到事件来自 update ，携带参数 msg 为：'</span> <span class="token operator">+</span> data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制代码</p>
<h4 id="_6-2-3-uni-off-eventname-callback" tabindex="-1"><a class="header-anchor" href="#_6-2-3-uni-off-eventname-callback" aria-hidden="true">#</a> 6.2.3 uni.$off([eventName, callback])</h4>
<p>移除全局自定义事件监听器。</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>eventName</td>
<td>Array＜String＞</td>
<td>事件名</td>
</tr>
<tr>
<td>callback</td>
<td>Function</td>
<td>事件的回调函数</td>
</tr>
</tbody>
</table>
<p><strong>Tips</strong></p>
<ul>
<li>如果uni.$off没有传入参数，则移除App级别的所有事件监听器；</li>
<li>如果只提供了事件名（eventName），则移除该事件名对应的所有监听器；</li>
<li>如果同时提供了事件与回调，则只移除这个事件回调的监听器；</li>
<li>提供的回调必须跟$on的回调为同一个才能移除这个回调的监听器；</li>
</ul>
<p><strong>代码示例</strong></p>
<p><code v-pre>list.vue</code></p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>goTestPage<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>uniApi跳转到测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token function">goTestPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
					<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"/pages/test/test"</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
					uni<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'cc'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
						<span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">"aa"</span><span class="token punctuation">,</span>
						<span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token string">"bb"</span>
					<span class="token punctuation">}</span><span class="token punctuation">)</span>

				<span class="token punctuation">}</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>test.vue</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        uni<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">"cc"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">onUnload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 移除监听事件  </span>
        uni<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">'cc'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意事项</strong></p>
<ul>
<li>uni.$emit、 uni.$on 、 uni.$once 、uni.$off 触发的事件都是 App 全局级别的，跨任意组件，页面，nvue，vue 等</li>
<li>使用时，注意及时销毁事件监听，比如，页面 onLoad 里边 uni.$on 注册监听，onUnload 里边 uni.$off 移除，或者一次性的事件，直接使用 uni.$once 监听</li>
<li>注意 uni.$on 定义完成后才能接收到 uni.$emit 传递的数据</li>
</ul>
</div></template>


