import{_ as s,o as a,c as n,e}from"./app.8f1211c8.js";const t={},c=e(`<h1 id="_06-【sass语法介绍-函数】" tabindex="-1"><a class="header-anchor" href="#_06-【sass语法介绍-函数】" aria-hidden="true">#</a> 06 【Sass语法介绍-函数】</h1><blockquote><p>这篇文章只更新了颜色函数，由于Sass使用时间过短，其它函数暂时不太会用</p></blockquote><h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2><p>Sass 中的函数，这在 Sass 中是比较强大的一个功能，同时使用场景和语法也比较多，所以本节内容篇幅较长，但你一定要好好学习， Sass 函数很重要！在 Sass 中函数中几乎可以用到前面你学的所有章节的内容，所以说函数包括万象同时功能也非常强大，本节我们将详细讲解 Sass 中各种函数的功能和用法。</p><h2 id="_2-什么是函数" tabindex="-1"><a class="header-anchor" href="#_2-什么是函数" aria-hidden="true">#</a> 2.什么是函数？</h2><p>函数是一段可以被另外的程序或代码调用的“子程序”，一个函数由称为函数体的一系列代码语句组成，并且函数也可以接收值，在大多数语言中函数都是这样的，Sass 中的函数也是一样。</p><h2 id="_3-sass-函数简介" tabindex="-1"><a class="header-anchor" href="#_3-sass-函数简介" aria-hidden="true">#</a> 3.Sass 函数简介</h2><p>Sass 为我们提供了很多内置模块，其中就包含了很多函数（包括一些指令），我们可以通过 @use 去加载它们，然后我们就可以调用了，当然还有一些函数可以直接在 CSS 语句中调用，在 Sass 中常用的函数有：</p><ul><li>字符串函数</li><li>数字函数</li><li>列表函数</li><li>Introspection函数</li><li>条件函数</li><li>Map 函数</li><li>颜色函数</li></ul><p>上面这些函数为我们提供了强大而丰富的功能来更高效地编写样式，下面我们来详细讲解 Sass 函数。</p><h2 id="_4-颜色函数" tabindex="-1"><a class="header-anchor" href="#_4-颜色函数" aria-hidden="true">#</a> 4.颜色函数</h2><p>Sass 中提供了非常非常多的颜色函数用来处理颜色值，它们很多需要你具有专业的调色及配色知识才能发挥出作用，所以本节我们不讲的那么复杂，本节内容中我们只讲几种常见的、比较简单的颜色函数，其他特别复杂的用于调色的函数在以后你可以再慢慢研究。</p><h3 id="_4-1-用于获取通道色值的函数" tabindex="-1"><a class="header-anchor" href="#_4-1-用于获取通道色值的函数" aria-hidden="true">#</a> 4.1 用于获取通道色值的函数</h3><p>Sass 提供了可以获取一个色值中红色通道、绿色通道和蓝色通道色值的函数，它们分别是 red($color) 、green($color) 和 blue($color)。你可能还不太了解这三种通道是什么，不要紧，只要知道这三种函数和它的使用就可以。我们举例看下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">blue</span><span class="token punctuation">(</span>#BA55D3<span class="token punctuation">)</span>  <span class="token comment">//=&gt; 211</span>
<span class="token function">red</span><span class="token punctuation">(</span>#BA55D3<span class="token punctuation">)</span>  <span class="token comment">//=&gt; 186</span>
<span class="token function">green</span><span class="token punctuation">(</span>#BA55D3<span class="token punctuation">)</span>  <span class="token comment">//=&gt; 85</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-saturate-color-amount" tabindex="-1"><a class="header-anchor" href="#_4-2-saturate-color-amount" aria-hidden="true">#</a> 4.2 saturate($color, $amount)</h3><p>saturate($color, $amount) 函数用于调整 $color 的饱和度，第 1 个参数 $color 是一个颜色值，第 2 个参数是 0% ～ 100% 之间的百分数，其返回值也是一个颜色值。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">saturate</span><span class="token punctuation">(</span>#BA55D3<span class="token punctuation">,</span> 20%<span class="token punctuation">)</span>  <span class="token comment">//=&gt; #c740e8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-3-scale-color" tabindex="-1"><a class="header-anchor" href="#_4-3-scale-color" aria-hidden="true">#</a> 4.3 scale-color(…)</h3><p>这是一个非常强大的颜色函数，它<strong>接收很多个参数</strong>，可以<strong>调整一个色值的很多属性</strong>，包括这个颜色的红、绿、蓝通道，以及亮度等等，我们只能举例来直观的看下：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token function">scale-color</span><span class="token punctuation">(</span>#BA55D3<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$red</span></span><span class="token punctuation">:</span> 15%<span class="token punctuation">)</span>  <span class="token comment">//=&gt; #c455d3  调整红色通道</span>
<span class="token function">scale-color</span><span class="token punctuation">(</span>#BA55D3<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$blue</span></span><span class="token punctuation">:</span> 15%<span class="token punctuation">)</span>  <span class="token comment">//=&gt; #ba55da  调整蓝色通道</span>
<span class="token function">scale-color</span><span class="token punctuation">(</span>#BA55D3<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$lightness</span></span><span class="token punctuation">:</span> -10%<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$saturation</span></span><span class="token punctuation">:</span> 10%<span class="token punctuation">)</span>  <span class="token comment">//=&gt; #b338d2 调整亮度和饱和度</span>
<span class="token function">scale-color</span><span class="token punctuation">(</span>#BA55D3<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$alpha</span></span><span class="token punctuation">:</span> -30%<span class="token punctuation">)</span>  <span class="token comment">//=&gt; rgba(186, 85, 211, 0.7)  调整不透明度</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的例子可以看到颜色函数提供了非常强大的用于调色的函数，驾驭它的前提是你要有非常丰富的调色知识以及一定的美术基础。在实际的项目中我们非常少的用到颜色函数，因为一般都是由公司的 UI 设计师来进行调色，所以作为入门教程，你只需要了解 Sass 中的颜色函数就好。</p><h2 id="_5-小结" tabindex="-1"><a class="header-anchor" href="#_5-小结" aria-hidden="true">#</a> 5. 小结</h2><p>本节内容我们讲了 Sass 提供的各种各样的函数，基本覆盖到了比较常用的、常见的函数，它们分别是：</p><ul><li>字符串函数</li><li>数字函数</li><li>列表函数</li><li>Introspection函数</li><li>条件函数</li><li>Map 函数</li><li>颜色函数</li></ul>`,25),o=[c];function p(l,i){return a(),n("div",null,o)}const u=s(t,[["render",p],["__file","06.html.vue"]]);export{u as default};