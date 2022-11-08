<template><div><h1 id="_21-节点的关系" tabindex="-1"><a class="header-anchor" href="#_21-节点的关系" aria-hidden="true">#</a> 21.节点的关系</h1>
<p><img src="https://i0.hdslb.com/bfs/album/a8821cf029e2fa7e8eb3db98db0c675360d99ae4.png" alt=""></p>
<table>
<thead>
<tr>
<th>关系</th>
<th>考虑所有结点</th>
</tr>
</thead>
<tbody>
<tr>
<td>子节点</td>
<td><code v-pre>childNodes</code></td>
</tr>
<tr>
<td>父节点</td>
<td><code v-pre>parentNode</code></td>
</tr>
<tr>
<td>第一个子节点</td>
<td><code v-pre>firstChild</code></td>
</tr>
<tr>
<td>最后一个子节点</td>
<td><code v-pre>lastChild</code></td>
</tr>
<tr>
<td>前一个兄弟节点</td>
<td><code v-pre>previousSibling</code></td>
</tr>
<tr>
<td>后一个兄弟节点</td>
<td><code v-pre>nextSibling</code></td>
</tr>
</tbody>
</table>
<p>【注意：文本节点也属于节点】</p>
<p>DOM 中，文本节点也属于节点，在使用节点的关系时一定要注意。</p>
<p>在标准的 W3C 规范中，空白文本节点也应该算作节点，但是在 IE8 及以前的浏览器中会有一定的兼容问题，它们不把空白文本节点当作节点。</p>
<p>【排除文本节点的干扰】</p>
<p>从 IE9 开始支持一些 “只考虑元素节点” 的属性。</p>
<blockquote>
<p>如果考虑兼容性，可以通过后面的函数封装来实现。</p>
</blockquote>
<table>
<thead>
<tr>
<th>关系</th>
<th>考虑所有结点</th>
<th>只考虑元素节点</th>
</tr>
</thead>
<tbody>
<tr>
<td>子节点</td>
<td><code v-pre>childNodes</code></td>
<td><code v-pre>children</code></td>
</tr>
<tr>
<td>父节点</td>
<td><code v-pre>parentNode</code></td>
<td>同</td>
</tr>
<tr>
<td>第一个子节点</td>
<td><code v-pre>firstChild</code></td>
<td><code v-pre>firstElementChild</code></td>
</tr>
<tr>
<td>最后一个子节点</td>
<td><code v-pre>lastChild</code></td>
<td><code v-pre>lastElementChild</code></td>
</tr>
<tr>
<td>前一个兄弟节点</td>
<td><code v-pre>previousSibling</code></td>
<td><code v-pre>previousElementSibling</code></td>
</tr>
<tr>
<td>后一个兄弟节点</td>
<td><code v-pre>nextSibling</code></td>
<td><code v-pre>nextElementSibling</code></td>
</tr>
</tbody>
</table>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>我是段落A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>para<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>我是段落B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>我是段落C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">var</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'box'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> para <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'para'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 所有子节点</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>box<span class="token punctuation">.</span>childNodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 所有的元素子节点（IE9开始兼容）</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>box<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>box<span class="token punctuation">.</span>children<span class="token punctuation">.</span>para<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 第一个子节点</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>box<span class="token punctuation">.</span>firstChild<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>box<span class="token punctuation">.</span>firstChild<span class="token punctuation">.</span>nodeType<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 第一个元素子节点（IE9开始兼容）</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>box<span class="token punctuation">.</span>firstElementChild<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 最后一个子节点</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>box<span class="token punctuation">.</span>lastChild<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>box<span class="token punctuation">.</span>lastChild<span class="token punctuation">.</span>nodeType<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 最后一个元素子节点（IE9开始兼容）</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>box<span class="token punctuation">.</span>lastElementChild<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 父节点</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>para<span class="token punctuation">.</span>parentNode<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 前一个兄弟节点</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>para<span class="token punctuation">.</span>previousSibling<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 前一个元素兄弟节点（IE9开始兼容）</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>para<span class="token punctuation">.</span>previousElementSibling<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 后一个兄弟节点</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>para<span class="token punctuation">.</span>nextSibling<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 后一个元素兄弟节点（IE9开始兼容）</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>para<span class="token punctuation">.</span>nextElementSibling<span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>结果</li>
</ul>
<img src="https://i0.hdslb.com/bfs/album/e66b1d9963a26d2d560157c8e592ae5f810f98f4.png" style="zoom:80%;" />
<p>注意：文本也算作节点（如图选中空白部分）</p>
<p><img src="https://i0.hdslb.com/bfs/album/1ce25ef2816cd948a18d0f67889bc21f49158cd5.png" alt=""></p>
<h1 id="_22-节点的内部操作" tabindex="-1"><a class="header-anchor" href="#_22-节点的内部操作" aria-hidden="true">#</a> 22.节点的内部操作</h1>
<h2 id="_22-1-如何改变元素节点中的内容" tabindex="-1"><a class="header-anchor" href="#_22-1-如何改变元素节点中的内容" aria-hidden="true">#</a> 22.1 如何改变元素节点中的内容</h2>
<p>改变元素节点中的内容可以使用两个相关属性。</p>
<ul>
<li><code v-pre>innerHTML</code></li>
<li><code v-pre>innerText</code></li>
</ul>
<p><code v-pre>innerHTML</code> 属性能以 HTML 语法设置节点中的内容。</p>
<p><code v-pre>innerText</code> 属性只能以纯文本的形式设置节点中的内容。</p>
<ul>
<li>innerHTML</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">var</span> oBox <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'box'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        oBox<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">'ds'</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>innerHTML</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">var</span> oBox <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'box'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 注意：此处的 HTML 字符串不允许换行！</span>
        oBox<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">'&lt;ul>&lt;li>牛奶&lt;/li>&lt;li>咖啡&lt;/li>&lt;/ul>'</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://i0.hdslb.com/bfs/album/223c5c2407e51dee586d3d01e19d28424c798120.png" style="zoom:67%;" />
<ul>
<li>innerText</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">var</span> oBox <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'box'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        oBox<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'ds'</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>innerText</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">var</span> oBox <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'box'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        oBox<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'&lt;ul>&lt;li>牛奶&lt;/li>&lt;li>咖啡&lt;/li>&lt;/ul>'</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://i0.hdslb.com/bfs/album/c427b3475ca842a957605d4af2cd3c1309d960e6.png" style="zoom: 50%;" />
<h2 id="_22-2-如何改变元素节点的css样式" tabindex="-1"><a class="header-anchor" href="#_22-2-如何改变元素节点的css样式" aria-hidden="true">#</a> 22.2 如何改变元素节点的CSS样式</h2>
<h3 id="_22-2-1-控制样式属性" tabindex="-1"><a class="header-anchor" href="#_22-2-1-控制样式属性" aria-hidden="true">#</a> 22.2.1 控制样式属性</h3>
<p>应用【修改样式】，通过修改行内样式 <code v-pre>style</code> 属性，实现对样式的动态修改。</p>
<p>应用【修改样式】，通过修改行内样式 <code v-pre>style</code> 属性，实现对样式的动态修改。</p>
<p>改变元素节点的 CSS 样式需要使用这样的语句：</p>
<ul>
<li><code v-pre>oBox.style.backgroundColor = 'red';</code></li>
<li><code v-pre>oBox.style.backgroundImage = 'url(images/1.jpg)';</code></li>
<li><code v-pre>oBox.style.fontSize = '32px';</code></li>
</ul>
<p>【注意事项】</p>
<ul>
<li>CSS 属性要写成 “驼峰” 形式</li>
<li>CSS 属性值要设置成完整形式</li>
<li>注意写单位</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.box</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        你好
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">var</span> oBox <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'box'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        oBox<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">'rgb(100, 200, 123)'</span><span class="token punctuation">;</span>
        oBox<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">'#f80'</span><span class="token punctuation">;</span>
        oBox<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundImage <span class="token operator">=</span> <span class="token string">'url(https://www.imooc.com/static/img/index/logo-recommended.png)'</span><span class="token punctuation">;</span>
        oBox<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundSize <span class="token operator">=</span> <span class="token string">'contain'</span><span class="token punctuation">;</span>
        oBox<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> <span class="token string">'50px'</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>JS 修改的 CSS 样式，属于行内式，优先级最高！所以可以覆盖原有的样式。</p>
</blockquote>
<h3 id="_22-2-2-操作类名-classname-操作css" tabindex="-1"><a class="header-anchor" href="#_22-2-2-操作类名-classname-操作css" aria-hidden="true">#</a> 22.2.2 操作类名(className) 操作CSS</h3>
<p>如果修改的样式比较多，直接通过style属性修改比较繁琐，我们可以通过借助于css类名的形式。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>练习 - 修改样式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.pink</span> <span class="token punctuation">{</span>
            <span class="token property">background</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> hotpink<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>随便一些文本内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// 获取 DOM 节点</span>
    <span class="token keyword">const</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.intro'</span><span class="token punctuation">)</span>
    box<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">'pink'</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：</p>
<p>1.由于class是关键字, 所以使用className去代替</p>
<p>2.className是使用新值换旧值, 如果需要添加一个类,需要保留之前的类名</p>
</blockquote>
<h3 id="_22-2-3-通过-classlist-操作类控制css" tabindex="-1"><a class="header-anchor" href="#_22-2-3-通过-classlist-操作类控制css" aria-hidden="true">#</a> 22.2.3 通过 classList 操作类控制CSS</h3>
<p><code v-pre>className</code>属性用来读写当前元素节点的<code v-pre>class</code>属性。它的值是一个字符串，每个<code v-pre>class</code>之间用空格分割。</p>
<p><code v-pre>classList</code>属性返回一个类似数组的对象，当前元素节点的每个<code v-pre>class</code>就是这个对象的一个成员。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// HTML 代码 &lt;div class="one two three" id="myDiv">&lt;/div></span>
<span class="token keyword">var</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myDiv'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

div<span class="token punctuation">.</span>className
<span class="token comment">// "one two three"</span>

div<span class="token punctuation">.</span>classList
<span class="token comment">// {</span>
<span class="token comment">//   0: "one"</span>
<span class="token comment">//   1: "two"</span>
<span class="token comment">//   2: "three"</span>
<span class="token comment">//   length: 3</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了解决className 容易覆盖以前的类名，我们可以通过classList方式追加和删除类名</p>
<p><strong>定义及用法</strong></p>
<ul>
<li>classList 属性返回元素类名.</li>
<li>该属性用于在元素中添加, 移除及切换 CSS 类.</li>
<li>classList 是只读属性.</li>
</ul>
<p><strong>语法</strong></p>
<blockquote>
<p>element.classList</p>
</blockquote>
<p><strong>属性</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>length:
    只读属性, 返回列表中类的长度.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方法</strong></p>
<ol>
<li>为元素添加类:</li>
</ol>
<blockquote>
<p>element.classList.add(class1, class2, …);</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">add</span><span class="token punctuation">(</span>class1<span class="token punctuation">,</span> class2<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">)</span>
    <span class="token operator">*</span> 在元素中添加一个或多个类名<span class="token punctuation">.</span>
    <span class="token operator">*</span> 若指定类名已存在<span class="token punctuation">,</span> 则不添加<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<ol start="2">
<li>
<p>查看元素是否存在类:</p>
<blockquote>
<p>element.classList.contains(class);</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">contains</span><span class="token punctuation">(</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token operator">*</span> 判断类名是否存在<span class="token punctuation">.</span>
    <span class="token operator">*</span> 返回布尔值<span class="token operator">:</span> <span class="token boolean">true</span><span class="token operator">/</span><span class="token boolean">false</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
</li>
</ol>
<p>​	3. 获取元素的第 index 个类名（索引为 index ）:</p>
<blockquote>
<p>element.classList.item(index);</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">item</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
    <span class="token operator">*</span> 返回类名在元素中的索引值<span class="token punctuation">,</span> 索引从 <span class="token number">0</span> 开始<span class="token punctuation">.</span>
    <span class="token operator">*</span> 如果不在索引区间内<span class="token punctuation">,</span> 返回 <span class="token keyword">null</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<ol start="4">
<li>移除类</li>
</ol>
<blockquote>
<p>element.classList.remove(“mystyle”); // 单个移除
element.classList.remove(“mystyle”, “anotherClass”, “thirdClass”); // 多个移除</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">remove</span><span class="token punctuation">(</span>class1<span class="token punctuation">,</span> class2<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">)</span>
    <span class="token operator">*</span> 在元素中删除一个或多个类名<span class="token punctuation">.</span>
    <span class="token operator">*</span> 若指定类名不存在<span class="token punctuation">,</span> 不会报错<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<ol start="5">
<li>为元素切换类:</li>
</ol>
<blockquote>
<p>element.classList.toggle(“newClassName”);</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token operator">|</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token operator">*</span> 在元素中切换类名<span class="token punctuation">.</span>
    <span class="token operator">*</span> 第一个在参数为在元素中移除的类名<span class="token punctuation">,</span> 并返回 <span class="token boolean">false</span><span class="token punctuation">.</span>
    <span class="token operator">*</span> 如果该类名不存在<span class="token punctuation">,</span> 则会在元素中添加类名<span class="token punctuation">,</span> 并返回 <span class="token boolean">true</span><span class="token punctuation">.</span>
    <span class="token operator">*</span> 第二参数可选<span class="token punctuation">,</span> 是布尔值<span class="token punctuation">,</span> 用于设置元素是否强制添加或移除类<span class="token punctuation">,</span> 不管该类是否存在<span class="token punctuation">.</span>
    <span class="token operator">*</span> 注意： Internet Explorer 或 Opera <span class="token number">12</span> 及其更早版本不支持第二个参数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<p><strong>案例</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myDiv'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

div<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'myCssClass'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
div<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">,</span> <span class="token string">'bar'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
div<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'myCssClass'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
div<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token string">'myCssClass'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 如果 myCssClass 不存在就加入，否则移除</span>
div<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">'myCssClass'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 true 或者 false</span>
div<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回第一个 Class</span>
div<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面比较一下，<code v-pre>className</code>和<code v-pre>classList</code>在添加和删除某个 class 时的写法。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> foo <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 添加class</span>
foo<span class="token punctuation">.</span>className <span class="token operator">+=</span> <span class="token string">'bold'</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'bold'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 删除class</span>
foo<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'bold'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
foo<span class="token punctuation">.</span>className <span class="token operator">=</span> foo<span class="token punctuation">.</span>className<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^bold$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>toggle</code>方法可以接受一个布尔值，作为第二个参数。如果为<code v-pre>true</code>，则添加该属性；如果为<code v-pre>false</code>，则去除该属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">,</span> boolValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>boolValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>classList</code>属性指向一个类似数组的对象，该对象的<code v-pre>length</code>属性（只读）返回当前元素的<code v-pre>class</code>数量。</p>
<p><code v-pre>classList</code>对象有下列方法。</p>
<ul>
<li><code v-pre>add()</code>：增加一个 class。</li>
<li><code v-pre>remove()</code>：移除一个 class。</li>
<li><code v-pre>contains()</code>：检查当前元素是否包含某个 class。</li>
<li><code v-pre>toggle()</code>：将某个 class 移入或移出当前元素。</li>
<li><code v-pre>item()</code>：返回指定索引位置的 class。</li>
<li><code v-pre>toString()</code>：将 class 的列表转为字符串。</li>
</ul>
<h3 id="_22-2-4-通过-getcomputedstyle-操作伪元素" tabindex="-1"><a class="header-anchor" href="#_22-2-4-通过-getcomputedstyle-操作伪元素" aria-hidden="true">#</a> 22.2.4 通过 getComputedStyle 操作伪元素</h3>
<p>CSS 伪元素是通过 CSS 向 DOM 添加的元素，主要是通过<code v-pre>:before</code>和<code v-pre>:after</code>选择器生成，然后用<code v-pre>content</code>属性指定伪元素的内容。</p>
<p>下面是一段 HTML 代码。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>test<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Test content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>CSS 添加伪元素<code v-pre>:before</code>的写法如下。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">#test:before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'Before '</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #FF0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>节点元素的<code v-pre>style</code>对象无法读写伪元素的样式，这时就要用到<code v-pre>window.getComputedStyle()</code>。JavaScript 获取伪元素，可以使用下面的方法。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> test <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#test'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> result <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>test<span class="token punctuation">,</span> <span class="token string">':before'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>content<span class="token punctuation">;</span>
<span class="token keyword">var</span> color <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>test<span class="token punctuation">,</span> <span class="token string">':before'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>color<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，也可以使用 CSSStyleDeclaration 实例的<code v-pre>getPropertyValue</code>方法，获取伪元素的属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> result <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>test<span class="token punctuation">,</span> <span class="token string">':before'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token string">'content'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> color <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>test<span class="token punctuation">,</span> <span class="token string">':before'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token string">'color'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_22-3-如何改变元素节点的html属性" tabindex="-1"><a class="header-anchor" href="#_22-3-如何改变元素节点的html属性" aria-hidden="true">#</a> 22.3 如何改变元素节点的HTML属性</h2>
<p>标准 W3C 属性，如 <code v-pre>src</code>、<code v-pre>href</code>、<code v-pre>title</code>、<code v-pre>alt</code> 等等，只需要直接打点进行更改即可。</p>
<p><code v-pre>oImg.src = 'images/2.jpg';</code></p>
<p>【案例】</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>images/1.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pic<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.baidu.com<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>link<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        去百度
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">var</span> oPic <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'pic'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> oLink <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'link'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        oPic<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">'images/2.jpg'</span><span class="token punctuation">;</span>
        oLink<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">'http://www.imooc.com'</span><span class="token punctuation">;</span>
        oLink<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'去慕课网'</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于不符合 W3C 标准的属性，要使用 <code v-pre>setAttribute()</code> 和 <code v-pre>getAttribute()</code> 来设置、读取。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>oBox<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'data-n'</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> n <span class="token operator">=</span> oBox<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'data-n'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>HTML 的自定义属性，主要用途就是与 JS 配合方便实现一些效果。</p>
</blockquote>
<p>【案例】</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">var</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'box'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        box<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'data-n'</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> n <span class="token operator">=</span> box<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'data-n'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">alert</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://i0.hdslb.com/bfs/album/0a2b76b0a888113ea0b1af90b03ca09fac264dea.png" style="zoom:50%;" />
<blockquote>
<p>这里只是简单说一下，后面会详细讲解属性的操作</p>
</blockquote>
<h2 id="_22-4-如何改变表单元素的状态" tabindex="-1"><a class="header-anchor" href="#_22-4-如何改变表单元素的状态" aria-hidden="true">#</a> 22.4 如何改变表单元素的状态</h2>
<p>表单很多情况，也需要修改属性，比如点击眼睛，可以看到密码，本质是把表单类型转换为文本框</p>
<p>正常的有属性有取值的跟其他的标签属性没有任何区别</p>
<p>获取:DOM对象.属性名</p>
<p>设置:DOM对象.属性名= 新值</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>agree<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// 1. 获取元素</span>
        <span class="token keyword">let</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">)</span>
        <span class="token comment">// 2. 取值或者设置值  得到input里面的值可以用 value</span>
        <span class="token comment">// console.log(input.value)</span>
        input<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'小米手机'</span>
        input<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">'password'</span>

        <span class="token comment">// 2. 启用按钮</span>
        <span class="token keyword">let</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'button'</span><span class="token punctuation">)</span>
        <span class="token comment">// disabled 不可用   =  false  这样可以让按钮启用</span>
        btn<span class="token punctuation">.</span>disabled <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token comment">// 3. 勾选复选框</span>
        <span class="token keyword">let</span> checkbox <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.agree'</span><span class="token punctuation">)</span>
        checkbox<span class="token punctuation">.</span>checked <span class="token operator">=</span> <span class="token boolean">false</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


