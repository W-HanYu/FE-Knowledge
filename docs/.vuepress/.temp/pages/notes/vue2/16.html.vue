<template><div><h1 id="_16-【打包-图片懒加载】" tabindex="-1"><a class="header-anchor" href="#_16-【打包-图片懒加载】" aria-hidden="true">#</a> 16 【打包 图片懒加载】</h1>
<h2 id="_1-打包" tabindex="-1"><a class="header-anchor" href="#_1-打包" aria-hidden="true">#</a> 1.打包</h2>
<p><code v-pre>vue.config.js</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//打包时不生成map文件(用来进行错误提示的文件，很占用空间)</span>
  <span class="token literal-property property">productionSourceMap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 关闭ESLINT校验工具</span>
  <span class="token literal-property property">lintOnSave</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-图片懒加载" tabindex="-1"><a class="header-anchor" href="#_2-图片懒加载" aria-hidden="true">#</a> 2.图片懒加载</h2>
<p><a href="https://www.npmjs.com/package/vue-lazyload" target="_blank" rel="noopener noreferrer">懒加载vue-lazyload插件官网<ExternalLinkIcon/></a>
插件的使用直接参考官方教程，很简单。</p>
<p><strong>安装vue-lazyload插件</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> vue-lazyload@1.3.3 --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>在main.js中进行引用</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> VueLazyload <span class="token keyword">from</span> <span class="token string">"vue-lazyload"</span><span class="token punctuation">;</span>

<span class="token comment">//或者自定义配置插件</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueLazyload<span class="token punctuation">,</span> <span class="token punctuation">{</span>
<span class="token literal-property property">preLoad</span><span class="token operator">:</span> <span class="token number">1.3</span><span class="token punctuation">,</span>
<span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@/assets/image/error.png'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@/assets/image/loading.gif'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token literal-property property">attempt</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>各个自定义配置属性含义：</strong></p>
<p><img src="https://i0.hdslb.com/bfs/album/4f3788e8fd79ec4841143a5824982956f983d9a2.png" alt="image-20220720143240479"></p>
<p><strong>使用（将图片设置为<a href="https://so.csdn.net/so/search?q=%E6%87%92%E5%8A%A0%E8%BD%BD&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">懒加载<ExternalLinkIcon/></a>）</strong></p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">v-lazy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>psdimg<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>psd<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意：</strong>
当遇到是v-for循环的时候，或者用div包裹着img的时候，需要在div上面添加 <code v-pre>v-lazy-container=&quot;{ selector: ‘img’ }&quot;</code></p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-lazy-container</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ selector: 'img' }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//aaa.com/img1.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//aaa.com/img2.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//aaa.com/img3.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  
<span class="token comment">&lt;!--或者这种：--></span>
 
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-lazy-container</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ selector: 'img' }<span class="token punctuation">"</span></span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是这种情况的话，一定要使用 data-src 来指定路径，而不使用v-lazy。因为如果使用的是v-lazy的话，拿到了图片地址也会一直显示不出来。</p>
</div></template>


