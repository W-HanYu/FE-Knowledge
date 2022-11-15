<template><div><h1 id="_3-typescript常用类型" tabindex="-1"><a class="header-anchor" href="#_3-typescript常用类型" aria-hidden="true">#</a> 3.TypeScript常用类型</h1>
<h2 id="_3-1-概述" tabindex="-1"><a class="header-anchor" href="#_3-1-概述" aria-hidden="true">#</a> 3.1 概述</h2>
<p>TypeScript 是 JS 的超集，TS 提供了 JS 的所有功能，并且额外的增加了：<strong>类型系统</strong></p>
<ul>
<li>所有的 JS 代码都是 TS 代码</li>
<li><strong>JS 有类型</strong>（比如，number/string 等），但是 <strong>JS 不会检查变量的类型是否发生变化</strong>，而 TS 会检查</li>
</ul>
<p>TypeScript 类型系统的主要优势：<strong>可以显示标记出代码中的意外行为，从而降低了发生错误的可能性</strong></p>
<p><strong>示例代码</strong>:</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">18</span>

<span class="token keyword">let</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>说明：代码中的 <code v-pre>: number</code> 就是<strong>类型注解</strong></li>
<li>作用：<strong>为变量添加类型约束</strong>。比如，上述代码中，约定变量 age 的类型为 number 类型</li>
<li>解释：<strong>约定了什么类型，就只能给变量赋值该类型的值，否则，就会报错</strong></li>
<li>约定了类型之后，代码的提示就会非常的清晰</li>
<li>错误演示：</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 错误代码：</span>
<span class="token comment">// 错误原因：将 string 类型的值赋值给了 number 类型的变量，类型不一致</span>
<span class="token keyword">let</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token string">'18'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-2-typescript常见类型" tabindex="-1"><a class="header-anchor" href="#_3-2-typescript常见类型" aria-hidden="true">#</a> 3.2 TypeScript常见类型</h2>
<p>可以将 TS 中的常用基础类型细分为两类：</p>
<ul>
<li>JS 已有类型
<ul>
<li>原始类型，简单类型（<code v-pre>string、boolean、number、object、bigint、symbol、null 和 undefined</code>）</li>
<li>复杂数据类型（数组，对象，函数等）</li>
</ul>
</li>
<li>TS 新增类型
<ul>
<li>联合类型</li>
<li>自定义类型（类型别名）</li>
<li>接口</li>
<li>元组</li>
<li>字面量类型</li>
<li>枚举</li>
<li>void</li>
<li>any</li>
<li>…</li>
</ul>
</li>
</ul>
<h2 id="_3-3-原始类型" tabindex="-1"><a class="header-anchor" href="#_3-3-原始类型" aria-hidden="true">#</a> 3.3 原始类型</h2>
<h3 id="_3-3-1-js的八种内置类型" tabindex="-1"><a class="header-anchor" href="#_3-3-1-js的八种内置类型" aria-hidden="true">#</a> 3.3.1 JS的八种内置类型</h3>
<ul>
<li>
<p>原始类型：<code v-pre>string、boolean、number、bigint、object、symbol、null 和 undefined</code></p>
</li>
<li>
<p>特点：简单，这些类型，完全按照 JS 中类型的名称来书写</p>
</li>
<li>
<p>number</p>
<ul>
<li>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> decimal<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> hex<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0xf00d</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> binary<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0b1010</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> octal<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0o744</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> big<span class="token operator">:</span> bigint <span class="token operator">=</span> <span class="token number">100n</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>boolean</p>
<ul>
<li>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> isDone<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>string</p>
<ul>
<li>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> color<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"blue"</span><span class="token punctuation">;</span>
color <span class="token operator">=</span> <span class="token string">'red'</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> fullName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Bob Bobbington</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">let</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">37</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> sentence<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>fullName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.

I'll be </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>age <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> years old next month.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>其它</p>
<ul>
<li>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token keyword">let</span> b<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>
<span class="token keyword">let</span> obj<span class="token operator">:</span> object <span class="token operator">=</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> s<span class="token operator">:</span> <span class="token builtin">symbol</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<blockquote>
<p>对象类型：object（包括，数组、对象、函数等对象）。</p>
<p>特点：对象类型，在TS中更加细化，每个具体的对象都有自己的类型语法。</p>
</blockquote>
<h3 id="_3-3-2注意点" tabindex="-1"><a class="header-anchor" href="#_3-3-2注意点" aria-hidden="true">#</a> 3.3.2注意点</h3>
<p><strong>null和undefined</strong></p>
<p>默认情况下 <code v-pre>null</code> 和 <code v-pre>undefined</code> 是所有类型的子类型。 就是说你可以把 <code v-pre>null</code> 和 <code v-pre>undefined</code> 赋值给其他类型。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// null和undefined赋值给string</span>
<span class="token keyword">let</span> str<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"666"</span><span class="token punctuation">;</span>
str <span class="token operator">=</span> <span class="token keyword">null</span>
str<span class="token operator">=</span> <span class="token keyword">undefined</span>

<span class="token comment">// null和undefined赋值给number</span>
<span class="token keyword">let</span> num<span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span>
num <span class="token operator">=</span> <span class="token keyword">null</span>
num<span class="token operator">=</span> <span class="token keyword">undefined</span>

<span class="token comment">// null和undefined赋值给object</span>
<span class="token keyword">let</span> obj<span class="token operator">:</span>object <span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
obj <span class="token operator">=</span> <span class="token keyword">null</span>
obj<span class="token operator">=</span> <span class="token keyword">undefined</span>

<span class="token comment">// null和undefined赋值给Symbol</span>
<span class="token keyword">let</span> sym<span class="token operator">:</span> <span class="token builtin">symbol</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">"me"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
sym <span class="token operator">=</span> <span class="token keyword">null</span>
sym<span class="token operator">=</span> <span class="token keyword">undefined</span>

<span class="token comment">// null和undefined赋值给boolean</span>
<span class="token keyword">let</span> isDone<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
isDone <span class="token operator">=</span> <span class="token keyword">null</span>
isDone<span class="token operator">=</span> <span class="token keyword">undefined</span>

<span class="token comment">// null和undefined赋值给bigint</span>
<span class="token keyword">let</span> big<span class="token operator">:</span> bigint <span class="token operator">=</span>  <span class="token number">100n</span><span class="token punctuation">;</span>
big <span class="token operator">=</span> <span class="token keyword">null</span>
big<span class="token operator">=</span> <span class="token keyword">undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你在tsconfig.json指定了<code v-pre>&quot;strictNullChecks&quot;:true</code> ，<code v-pre>null</code> 和 <code v-pre>undefined</code> 只能赋值给 <code v-pre>void</code> 和它们各自的类型。</p>
<p><strong>number和bigint</strong></p>
<p>虽然<code v-pre>number</code>和<code v-pre>bigint</code>都表示数字，但是这两个类型不兼容。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> big<span class="token operator">:</span> bigint <span class="token operator">=</span>  <span class="token number">100n</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
big <span class="token operator">=</span> num<span class="token punctuation">;</span>
num <span class="token operator">=</span> big<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会抛出一个类型不兼容的 <code v-pre>ts(2322)</code> 错误。</p>
<h2 id="_3-4-数组类型" tabindex="-1"><a class="header-anchor" href="#_3-4-数组类型" aria-hidden="true">#</a> 3.4 数组类型</h2>
<p>数组类型的两种写法：(<strong>推荐使用number[]写法</strong>)</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> numbers<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> <span class="token builtin">string</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"a"</span><span class="token punctuation">,</span><span class="token string">"b"</span><span class="token punctuation">,</span><span class="token string">"c"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>定义联合类型数组</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> arr<span class="token operator">:</span><span class="token punctuation">(</span><span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 表示定义了一个名称叫做arr的数组, </span>
<span class="token comment">// 这个数组中将来既可以存储数值类型的数据, 也可以存储字符串类型的数据</span>
arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义指定对象成员的数组：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// interface是接口,最后面会讲到</span>
<span class="token keyword">interface</span> <span class="token class-name">Arrobj</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> arr3<span class="token operator">:</span>Arrobj<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token string">'jimmy'</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token number">22</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-5-联合类型与交叉类型" tabindex="-1"><a class="header-anchor" href="#_3-5-联合类型与交叉类型" aria-hidden="true">#</a> 3.5 联合类型与交叉类型</h2>
<h3 id="_3-5-1-联合类型" tabindex="-1"><a class="header-anchor" href="#_3-5-1-联合类型" aria-hidden="true">#</a> 3.5.1 联合类型</h3>
<p>联合类型表示取值可以为多种类型中的一种，使用 <code v-pre>|</code> 分隔每个类型。</p>
<p>需求：数组中既有 number 类型，又有 string 类型，这个数组的类型应该如何写?</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> arr<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>解释：<code v-pre>|</code>（竖线）在 TS 中叫做<strong>联合类型</strong>，即：由两个或多个其他类型组成的类型，表示可以是这些类型中的任意一种</li>
<li>注意：这是 TS 中联合类型的语法，只有一根竖线，不要与 JS 中的或（|| 或）混淆了</li>
</ul>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code>  <span class="token keyword">let</span> <span class="token literal-property property">timer</span><span class="token operator">:</span> number <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
  timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>

  <span class="token comment">// 定义一个数组，数组中可以有数字或者字符串, 需要注意 | 的优先级</span>
  <span class="token keyword">let</span> <span class="token literal-property property">arr</span><span class="token operator">:</span> <span class="token punctuation">(</span>number <span class="token operator">|</span> string<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'abc'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>联合类型通常与 <code v-pre>null</code> 或 <code v-pre>undefined</code> 一起使用：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">undefined</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如，这里 <code v-pre>name</code> 的类型是 <code v-pre>string | undefined</code> 意味着可以将 <code v-pre>string</code> 或 <code v-pre>undefined</code> 的值传递给<code v-pre>sayHello</code> 函数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token string">"semlinker"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这个示例，你可以凭直觉知道类型 A 和类型 B 联合后的类型是同时接受 A 和 B 值的类型。此外，对于联合类型来说，你可能会遇到以下的用法：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
type EventNames <span class="token operator">=</span> <span class="token string">'click'</span> <span class="token operator">|</span> <span class="token string">'scroll'</span> <span class="token operator">|</span> <span class="token string">'mousemove'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以上示例中的 <code v-pre>1</code>、<code v-pre>2</code> 或 <code v-pre>'click'</code> 被称为字面量类型，用来约束取值只能是某几个值中的一个。</p>
<h3 id="_3-5-1-交叉类型" tabindex="-1"><a class="header-anchor" href="#_3-5-1-交叉类型" aria-hidden="true">#</a> 3.5.1 交叉类型</h3>
<p>交叉类型是将多个类型合并为一个类型。 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性，使用<code v-pre>&amp;</code>定义交叉类型。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token punctuation">{</span>
  <span class="token keyword">type</span> <span class="token class-name">Useless</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">&amp;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很显然，如果我们仅仅把原始类型、字面量类型、函数类型等原子类型合并成交叉类型，是没有任何用处的，因为任何类型都不能满足同时属于多种原子类型，比如既是 string 类型又是 number 类型。因此，在上述的代码中，类型别名 Useless 的类型就是个 never。</p>
<p>交叉类型真正的用武之地就是将多个接口类型合并成一个类型，从而实现等同接口继承的效果，也就是所谓的合并接口类型，如下代码所示：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>  <span class="token keyword">type</span> <span class="token class-name">IntersectionType</span> <span class="token operator">=</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> mixed<span class="token operator">:</span> IntersectionType <span class="token operator">=</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">18</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述示例中，我们通过交叉类型，使得 IntersectionType 同时拥有了 id、name、age 所有属性，这里我们可以试着将合并接口类型理解为求并集。</p>
<h2 id="_3-6-类型别名" tabindex="-1"><a class="header-anchor" href="#_3-6-类型别名" aria-hidden="true">#</a> 3.6 类型别名</h2>
<ul>
<li><code v-pre>类型别名（自定义类型）</code>：类型别名用来给一个类型起个新名字。(类型别名常用于联合类型。)</li>
<li>使用场景：当同一类型（复杂）被多次使用时，可以通过类型别名，<strong>简化该类型的使用</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">CustomArray</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">let</span> arr1<span class="token operator">:</span> CustomArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr2<span class="token operator">:</span> CustomArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'x'</span><span class="token punctuation">,</span> <span class="token string">'y'</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span>


<span class="token keyword">type</span> <span class="token class-name">Message</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token function-variable function">greet</span> <span class="token operator">=</span> <span class="token punctuation">(</span>message<span class="token operator">:</span> Message<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>解释:
<ol>
<li>使用 <code v-pre>type</code> 关键字来创建自定义类型</li>
<li>类型别名（比如，此处的 <em>CustomArray</em>）可以是任意合法的变量名称</li>
<li>推荐使用大写字母开头</li>
<li>创建类型别名后，直接使用该类型别名作为变量的类型注解即可</li>
</ol>
</li>
</ul>
<blockquote>
<p><strong>注意：类型别名，诚如其名，即我们仅仅是给类型取了一个新的名字，并不是创建了一个新的类型。</strong></p>
</blockquote>
<h2 id="_3-7-函数类型" tabindex="-1"><a class="header-anchor" href="#_3-7-函数类型" aria-hidden="true">#</a> 3.7 函数类型</h2>
<h3 id="_3-7-1-基本使用" tabindex="-1"><a class="header-anchor" href="#_3-7-1-基本使用" aria-hidden="true">#</a> 3.7.1 基本使用</h3>
<ul>
<li>函数的类型实际上指的是：<code v-pre>函数参数</code>和<code v-pre>返回值</code>的类型</li>
<li>为函数指定类型的两种方式：
<ol>
<li>单独指定参数、返回值的类型</li>
<li>同时指定参数、返回值的类型</li>
</ol>
</li>
</ul>
<ol>
<li>单独指定参数、返回值的类型：</li>
</ol>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 函数声明</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>

<span class="token comment">// 函数表达式</span>
<span class="token keyword">let</span> <span class="token function-variable function">mySum</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function-variable function">number</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 箭头函数</span>
<span class="token keyword">const</span> add <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>同时指定参数、返回值的类型:</li>
</ol>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">AddFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">number</span>

<span class="token keyword">const</span> add<span class="token operator">:</span> <span class="token function-variable function">AddFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>解释：当函数作为表达式时，可以通过类似箭头函数形式的语法来为函数添加类型</li>
<li>注意：这种形式只适用于函数表达式</li>
</ul>
<ol start="3">
<li>用接口定义函数类型</li>
</ol>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ISearchFunc</span><span class="token punctuation">{</span>
  <span class="token punctuation">(</span>source<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> subString<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>采用函数表达式接口定义函数的方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。</p>
<h3 id="_3-7-2-void-类型" tabindex="-1"><a class="header-anchor" href="#_3-7-2-void-类型" aria-hidden="true">#</a> 3.7.2 void 类型</h3>
<ul>
<li>
<p><code v-pre>void</code>表示没有任何类型，和其他类型是平等关系，不能直接赋值:</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span> 
<span class="token keyword">let</span> b<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> a<span class="token punctuation">;</span> <span class="token comment">// Error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>你只能为它赋予<code v-pre>null</code>和<code v-pre>undefined</code>（在<code v-pre>strictNullChecks</code>未指定为true时）。声明一个<code v-pre>void</code>类型的变量没有什么大用，我们一般也只有在函数没有返回值时去声明。</p>
</li>
<li>
<p>如果函数没有返回值，那么，函数返回值类型为：<code v-pre>void</code></p>
</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello'</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>值得注意的是，方法没有返回值将得到<code v-pre>undefined</code>，但是我们需要定义成<code v-pre>void</code>类型，而不是<code v-pre>undefined</code>类型。否则将报错:</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 如果什么都不写，此时，add 函数的返回值类型为： void</span>
<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// 这种写法是明确指定函数返回值类型为 void，与上面不指定返回值类型相同</span>
<span class="token keyword">const</span> add <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"this is TypeScript"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>

<span class="token comment">// 但，如果指定 返回值类型为 undefined，此时，函数体中必须显示的 return undefined 才可以</span>
<span class="token keyword">const</span> add <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 此处，返回的 undefined 是 JS 中的一个值</span>
  <span class="token keyword">return</span> <span class="token keyword">undefined</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7-3-never-类型" tabindex="-1"><a class="header-anchor" href="#_3-7-3-never-类型" aria-hidden="true">#</a> 3.7.3 never 类型</h3>
<ul>
<li>void 用来表示空，以函数为例，就表示没有返回值的函数</li>
<li>never 类型表示的是那些永不存在的值的类型。</li>
</ul>
<p>值会永不存在的两种情况：</p>
<ol>
<li>如果一个函数执行时抛出了<strong>异常</strong>，那么这个函数永远不存在返回值（因为抛出异常会直接中断程序运行，这使得程序运行不到返回值那一步，即具有不可达的终点，也就永不存在返回了）；</li>
<li>函数中执行无限循环的代码（<strong>死循环</strong>），使得程序永远无法运行到函数返回值那一步，永不存在返回。</li>
</ol>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 异常</span>
<span class="token keyword">function</span> <span class="token function">err</span><span class="token punctuation">(</span>msg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span> <span class="token comment">// OK</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token comment">// 死循环</span>
<span class="token keyword">function</span> <span class="token function">loopForever</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span> <span class="token comment">// OK</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>never</code>类型同<code v-pre>null</code>和<code v-pre>undefined</code>一样，也是任何类型的子类型，也可以赋值给任何类型。</p>
<p>但是没有类型是<code v-pre>never</code>的子类型或可以赋值给<code v-pre>never</code>类型（除了<code v-pre>never</code>本身之外），即使<code v-pre>any</code>也不可以赋值给<code v-pre>never</code></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> ne<span class="token operator">:</span> <span class="token builtin">never</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> nev<span class="token operator">:</span> <span class="token builtin">never</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> an<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>

ne <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
ne <span class="token operator">=</span> nev<span class="token punctuation">;</span> <span class="token comment">// OK</span>
ne <span class="token operator">=</span> an<span class="token punctuation">;</span> <span class="token comment">// Error</span>
ne <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"异常"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
ne <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 TypeScript 中，可以利用 never 类型的特性来实现全面性检查，具体示例如下：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Foo</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">controlFlowAnalysisWithNever</span><span class="token punctuation">(</span>foo<span class="token operator">:</span> Foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> foo <span class="token operator">===</span> <span class="token string">"string"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里 foo 被收窄为 string 类型</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> foo <span class="token operator">===</span> <span class="token string">"number"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里 foo 被收窄为 number 类型</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// foo 在这里是 never</span>
    <span class="token keyword">const</span> check<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> foo<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意在 else 分支里面，我们把收窄为 never 的 foo 赋值给一个显示声明的 never 变量。如果一切逻辑正确，那么这里应该能够编译通过。但是假如后来有一天你的同事修改了 Foo 的类型：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Foo</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然而他忘记同时修改 <code v-pre>controlFlowAnalysisWithNever</code> 方法中的控制流程，这时候 else 分支的 foo 类型会被收窄为 <code v-pre>boolean</code> 类型，导致无法赋值给 never 类型，这时就会产生一个编译错误。通过这个方式，我们可以确保<code v-pre>controlFlowAnalysisWithNever</code> 方法总是穷尽了 Foo 的所有可能类型。 通过这个示例，我们可以得出一个结论：<strong>使用 never 避免出现新增了联合类型没有对应的实现，目的就是写出类型绝对安全的代码。</strong></p>
<p>比较:<code v-pre>void</code>和<code v-pre>never</code></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// void 用来表示空，以函数为例，就表示没有返回值的函数</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// never 表示永远不会返回结果</span>
<span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'出错啦！'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7-4-可选参数" tabindex="-1"><a class="header-anchor" href="#_3-7-4-可选参数" aria-hidden="true">#</a> 3.7.4 可选参数</h3>
<ul>
<li>使用函数实现某个功能时，参数可以传也可以不传。这种情况下，在给函数参数指定类型时，就用到<strong>可选参数</strong>了</li>
<li>比如，数组的 slice 方法，可以 <code v-pre>slice()</code> 也可以 <code v-pre>slice(1)</code> 还可以 <code v-pre>slice(1, 3)</code></li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">buildName</span><span class="token punctuation">(</span>firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> lastName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>lastName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> firstName <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> lastName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> firstName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> tomcat <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">'Tom'</span><span class="token punctuation">,</span> <span class="token string">'Cat'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> tom <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">'Tom'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>可选参数：在可传可不传的参数名称后面添加 <code v-pre>?</code>（问号）</li>
<li>注意：<strong>可选参数只能出现在参数列表的最后</strong>，也就是说可选参数后面不能再出现必选参数</li>
</ul>
<h3 id="_3-7-5-参数默认值" tabindex="-1"><a class="header-anchor" href="#_3-7-5-参数默认值" aria-hidden="true">#</a> 3.7.5 参数默认值</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">buildName</span><span class="token punctuation">(</span>firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> lastName <span class="token operator">=</span> <span class="token string">'Cat'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> firstName <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> lastName<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> tomcat <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">'Tom'</span><span class="token punctuation">,</span> <span class="token string">'Cat'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> tom <span class="token operator">=</span> <span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">'Tom'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>默认值会自动判断类型</p>
</blockquote>
<h3 id="_3-7-6-剩余参数" tabindex="-1"><a class="header-anchor" href="#_3-7-6-剩余参数" aria-hidden="true">#</a> 3.7.6 剩余参数</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">push</span><span class="token punctuation">(</span>array<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">...</span>items<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    items<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        array<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">push</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7-7-函数重载" tabindex="-1"><a class="header-anchor" href="#_3-7-7-函数重载" aria-hidden="true">#</a> 3.7.7 函数重载</h3>
<p>由于 JavaScript 是一个动态语言，我们通常会使用不同类型的参数来调用同一个函数，该函数会根据不同的参数而返回不同的类型的调用结果：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"1"</span><span class="token punctuation">,</span> <span class="token string">"2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//"12"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 TypeScript 是 JavaScript 的超集，因此以上的代码可以直接在 TypeScript 中使用，但当 TypeScript 编译器开启 <code v-pre>noImplicitAny</code> 的配置项时，以上代码会提示以下错误信息：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>Parameter <span class="token string">'x'</span> implicitly has an <span class="token string">'any'</span> type<span class="token punctuation">.</span>
Parameter <span class="token string">'y'</span> implicitly has an <span class="token string">'any'</span> type<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>该信息告诉我们参数 x 和参数 y 隐式具有 <code v-pre>any</code> 类型。为了解决这个问题，我们可以为参数设置一个类型。因为我们希望 <code v-pre>add</code> 函数同时支持 string 和 number 类型，因此我们可以定义一个 <code v-pre>string | number</code> 联合类型，同时我们为该联合类型取个别名：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Combinable</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在定义完 Combinable 联合类型后，我们来更新一下 <code v-pre>add</code> 函数：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> Combinable<span class="token punctuation">,</span> b<span class="token operator">:</span> Combinable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> a <span class="token operator">===</span> <span class="token string">'string'</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> b <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> b<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为 <code v-pre>add</code> 函数的参数显式设置类型之后，之前错误的提示消息就消失了。那么此时的 <code v-pre>add</code> 函数就完美了么，我们来实际测试一下：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'Semlinker'</span><span class="token punctuation">,</span> <span class="token string">' Kakuqo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
result<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面代码中，我们分别使用 <code v-pre>'Semlinker'</code> 和 <code v-pre>' Kakuqo'</code> 这两个字符串作为参数调用 add 函数，并把调用结果保存到一个名为 <code v-pre>result</code> 的变量上，这时候我们想当然的认为此时 result 的变量的类型为 string，所以我们就可以正常调用字符串对象上的 <code v-pre>split</code> 方法。但这时 TypeScript 编译器又出现以下错误信息了：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>Property <span class="token string">'split'</span> does not exist on <span class="token keyword">type</span> <span class="token string">'number'</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>很明显 <code v-pre>number</code> 类型的对象上并不存在 <code v-pre>split</code> 属性。问题又来了，那如何解决呢？这时我们就可以利用 TypeScript 提供的函数重载特性。</p>
<blockquote>
<p><strong>函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力。</strong> 要解决前面遇到的问题，方法就是为同一个函数提供多个函数类型定义来进行函数重载，编译器会根据这个列表去处理函数的调用。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Types</span> <span class="token operator">=</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>b<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token operator">:</span>Types<span class="token punctuation">,</span> b<span class="token operator">:</span>Types<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> a <span class="token operator">===</span> <span class="token string">'string'</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> b <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> b<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'Semlinker'</span><span class="token punctuation">,</span> <span class="token string">' Kakuqo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
result<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在以上代码中，我们为 add 函数提供了多个函数类型定义，从而实现函数的重载。之后，可恶的错误消息又消失了，因为这时 result 变量的类型是 <code v-pre>string</code> 类型。</p>
<h2 id="_3-8-类型推断" tabindex="-1"><a class="header-anchor" href="#_3-8-类型推断" aria-hidden="true">#</a> 3.8 类型推断</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token punctuation">{</span>
  <span class="token keyword">let</span> str<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">'this is string'</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> bool<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  <span class="token keyword">const</span> str<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">'this is string'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> bool<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看着上面的示例，可能你已经在嘀咕了：定义基础类型的变量都需要写明类型注解，TypeScript 太麻烦了吧？在示例中，使用 let 定义变量时，我们写明类型注解也就罢了，毕竟值可能会被改变。可是，使用 <code v-pre>const</code> 常量时还需要写明类型注解，那可真的很麻烦。</p>
<p>实际上，TypeScript 早就考虑到了这么简单而明显的问题。</p>
<ul>
<li>在很多情况下, TS 某些没有明确指出类型的地方，<strong>TS 的类型推断机制会帮助提供类型</strong></li>
<li>换句话说：由于类型推断的存在，这些地方，类型注解可以省略不写</li>
<li>发生类型推断的 2 种常见场景:
<ol>
<li>具有初始化值的变量</li>
<li>有默认值的函数参数、函数返回的类型都可以根据上下文推断出来。</li>
</ol>
</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token punctuation">{</span>
  <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'this is string'</span><span class="token punctuation">;</span> <span class="token comment">// 等价</span>
  <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 等价</span>
  <span class="token keyword">let</span> bool <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 等价</span>
<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  <span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">'this is string'</span><span class="token punctuation">;</span> <span class="token comment">// 不等价</span>
  <span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 不等价</span>
  <span class="token keyword">const</span> bool <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 不等价</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们能根据 return 语句推断函数返回的类型，如下代码所示：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token punctuation">{</span>
  <span class="token comment">/** 根据参数的类型，推断出返回值的类型也是 number */</span>
  <span class="token keyword">function</span> <span class="token function">add1</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> x1<span class="token operator">=</span> <span class="token function">add1</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 推断出 x1 的类型也是 number</span>
  
  <span class="token comment">/** 推断参数 b 的类型是数字或者 undefined，返回值的类型也是数字 */</span>
  <span class="token keyword">function</span> <span class="token function">add2</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> x2 <span class="token operator">=</span> <span class="token function">add2</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> x3 <span class="token operator">=</span> <span class="token function">add2</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ts(2345) Argument of type "1" is not assignable to parameter of type 'number | undefined</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们把 TypeScript 这种基于赋值表达式推断类型的能力称之为<code v-pre>类型推断</code>。</p>
<blockquote>
<p>如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 <code v-pre>any</code> 类型而完全不被类型检查：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber<span class="token punctuation">;</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token string">'seven'</span><span class="token punctuation">;</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<ul>
<li>推荐：<strong>能省略类型注解的地方就省略</strong>（<s>偷懒</s>，充分利用TS类型推断的能力，提升开发效率）</li>
<li>技巧：如果不知道类型，可以通过鼠标悬停在变量名称上，利用 VSCode 的提示来查看类型</li>
</ul>
<h2 id="_3-9-对象类型" tabindex="-1"><a class="header-anchor" href="#_3-9-对象类型" aria-hidden="true">#</a> 3.9 对象类型</h2>
<h3 id="_3-9-1-基本使用" tabindex="-1"><a class="header-anchor" href="#_3-9-1-基本使用" aria-hidden="true">#</a> 3.9.1 基本使用</h3>
<ul>
<li>JS 中的对象是由属性和方法构成的，而 <strong>TS 对象的类型就是在描述对象的结构</strong>（有什么类型的属性和方法）</li>
<li>对象类型的写法:</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 空对象</span>
<span class="token keyword">let</span> person<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 有属性的对象</span>
<span class="token keyword">let</span> person<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'同学'</span>
<span class="token punctuation">}</span>

<span class="token comment">// 既有属性又有方法的对象</span>
<span class="token comment">// 在一行代码中指定对象的多个属性类型时，使用 `;`（分号）来分隔</span>
<span class="token keyword">let</span> person<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'jack'</span><span class="token punctuation">,</span>
  <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 对象中如果有多个类型，可以换行写：</span>
<span class="token comment">// 通过换行来分隔多个属性类型，可以去掉 `;`</span>
<span class="token keyword">let</span> person<span class="token operator">:</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'jack'</span><span class="token punctuation">,</span>
  <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>解释:
<ol>
<li>使用 <code v-pre>{}</code> 来描述对象结构</li>
<li>属性采用<code v-pre>属性名: 类型</code>的形式</li>
<li>方法采用<code v-pre>方法名(): 返回值类型</code>的形式</li>
</ol>
</li>
</ul>
<h3 id="_3-9-2-箭头函数形式的方法类型" tabindex="-1"><a class="header-anchor" href="#_3-9-2-箭头函数形式的方法类型" aria-hidden="true">#</a> 3.9.2 箭头函数形式的方法类型</h3>
<ul>
<li>方法的类型也可以使用箭头函数形式</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token punctuation">{</span>
    <span class="token function">greet</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span>
    <span class="token function-variable function">greet</span><span class="token operator">:</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>



<span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">greet</span><span class="token operator">:</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token function">greet</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">greet</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-9-3-对象可选属性" tabindex="-1"><a class="header-anchor" href="#_3-9-3-对象可选属性" aria-hidden="true">#</a> 3.9.3 对象可选属性</h3>
<ul>
<li>对象的属性或方法，也可以是可选的，此时就用到<strong>可选属性</strong>了</li>
<li>比如，我们在使用 <code v-pre>axios({ ... })</code> 时，如果发送 GET 请求，method 属性就可以省略</li>
<li>可选属性的语法与函数可选参数的语法一致，都使用 <code v-pre>?</code> 来表示</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span>
  method<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">axios</span><span class="token punctuation">(</span>config<span class="token operator">:</span> Config<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-9-4-使用类型别名" tabindex="-1"><a class="header-anchor" href="#_3-9-4-使用类型别名" aria-hidden="true">#</a> 3.9.4 使用类型别名</h3>
<ul>
<li>注意：直接使用 <code v-pre>{}</code> 形式为对象添加类型，会降低代码的可读性（不好辨识类型和值）</li>
<li>推荐：<strong>使用类型别名为对象添加类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 创建类型别名</span>
<span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用类型别名作为对象的类型：</span>
<span class="token keyword">let</span> person<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'jack'</span><span class="token punctuation">,</span>
  <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-9-5-任意属性" tabindex="-1"><a class="header-anchor" href="#_3-9-5-任意属性" aria-hidden="true">#</a> 3.9.5 任意属性</h3>
<p>有时候我们希望一个对象中除了包含必选和可选属性之外，还允许有其他的任意属性，这时我们可以使用 <strong>索引签名</strong> 的形式来满足上述要求。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// [propName: string]: any 表示任意类型的属性</span>
<span class="token keyword">let</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token punctuation">[</span>propName<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> any<span class="token punctuation">}</span><span class="token punctuation">;</span>
c <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'猪八戒'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">'男'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，<strong>一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集</strong></p>
<h2 id="_3-10-元组类型" tabindex="-1"><a class="header-anchor" href="#_3-10-元组类型" aria-hidden="true">#</a> 3.10 元组类型</h2>
<h3 id="_3-10-1-元祖定义" tabindex="-1"><a class="header-anchor" href="#_3-10-1-元祖定义" aria-hidden="true">#</a> 3.10.1 元祖定义</h3>
<p>众所周知，数组一般由同种类型的值组成，但有时我们需要在单个变量中存储不同类型的值，这时候我们就可以使用元组。在 JavaScript 中是没有元组的，元组是 TypeScript 中特有的类型，其工作方式类似于数组。</p>
<p>元组最重要的特性是可以限制<code v-pre>数组元素的个数和类型</code>，它特别适合用来实现多值返回。</p>
<ul>
<li>场景：在地图中，使用经纬度坐标来标记位置信息</li>
<li>可以使用数组来记录坐标，那么，该数组中只有两个元素，并且这两个元素都是数值类型</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> position<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">116.2317</span><span class="token punctuation">,</span> <span class="token number">39.5427</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>使用 number[] 的缺点：不严谨，因为该类型的数组中可以出现任意多个数字</li>
<li>更好的方式：<code v-pre>元组 Tuple</code></li>
<li>元组类型是另一种类型的数组，它确切地知道包含多少个元素，<strong>以及特定索引对应的类型</strong>（元祖用于保存定长定数据类型的数据）</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 类型必须匹配且个数必须为2</span>
<span class="token keyword">let</span> position<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">39.5427</span><span class="token punctuation">,</span> <span class="token number">116.2317</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>解释：
<ol>
<li>元组类型可以确切地标记出有多少个元素，以及每个元素的类型</li>
<li>该示例中，元素有两个元素，每个元素的类型都是 number</li>
</ol>
</li>
</ul>
<p><strong>注意</strong>，元组类型只能表示一个已知元素数量和类型的数组，长度已指定，越界访问会提示错误。如果一个数组中可能有多种类型，数量和类型都不确定，那就直接<code v-pre>any[]</code></p>
<h3 id="_3-10-2-元祖类型的解构赋值" tabindex="-1"><a class="header-anchor" href="#_3-10-2-元祖类型的解构赋值" aria-hidden="true">#</a> 3.10.2 元祖类型的解构赋值</h3>
<p>我们可以通过下标的方式来访问元组中的元素，当元组中的元素较多时，这种方式并不是那么便捷。其实元组也是支持解构赋值的：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> employee<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"Semlinker"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>id<span class="token punctuation">,</span> username<span class="token punctuation">]</span> <span class="token operator">=</span> employee<span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">id: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">username: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>username<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码成功运行后，控制台会输出以下消息：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>id<span class="token operator">:</span> <span class="token number">1</span>
username<span class="token operator">:</span> Semlinker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里需要注意的是，在解构赋值时，解构数组元素的个数是不能超过元组中元素的个数，否则也会出现错误，比如：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> employee<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"Semlinker"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>id<span class="token punctuation">,</span> username<span class="token punctuation">,</span> age<span class="token punctuation">]</span> <span class="token operator">=</span> employee<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在以上代码中，我们新增了一个 age 变量，但此时 TypeScript 编译器会提示以下错误信息：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>Tuple <span class="token keyword">type</span> <span class="token string">'[number, string]'</span> <span class="token keyword">of</span> length <span class="token string">'2'</span> has no element at index <span class="token string">'2'</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>很明显元组类型 <code v-pre>[number, string]</code> 的长度是 <code v-pre>2</code>，在位置索引 <code v-pre>2</code> 处不存在任何元素。</p>
<h3 id="_3-10-3-元组类型的可选元素" tabindex="-1"><a class="header-anchor" href="#_3-10-3-元组类型的可选元素" aria-hidden="true">#</a> 3.10.3 元组类型的可选元素</h3>
<p>与函数签名类型，在定义元组类型时，我们也可以通过 <code v-pre>?</code> 号来声明元组类型的可选元素，具体的示例如下：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> optionalTuple<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">boolean</span><span class="token operator">?</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
optionalTuple <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Semlinker"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">optionalTuple : </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>optionalTuple<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
optionalTuple <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Kakuqo"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">optionalTuple : </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>optionalTuple<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面代码中，我们定义了一个名为 <code v-pre>optionalTuple</code> 的变量，该变量的类型要求包含一个必须的字符串属性和一个可选布尔属性，该代码正常运行后，控制台会输出以下内容：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">optionalTuple</span> <span class="token operator">:</span> Semlinker<span class="token punctuation">,</span><span class="token boolean">true</span>
<span class="token literal-property property">optionalTuple</span> <span class="token operator">:</span> Kakuqo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>那么在实际工作中，声明可选的元组元素有什么作用？这里我们来举一个例子，在三维坐标轴中，一个坐标点可以使用 <code v-pre>(x, y, z)</code> 的形式来表示，对于二维坐标轴来说，坐标点可以使用 <code v-pre>(x, y)</code> 的形式来表示，而对于一维坐标轴来说，只要使用 <code v-pre>(x)</code> 的形式来表示即可。针对这种情形，在 TypeScript 中就可以利用元组类型可选元素的特性来定义一个元组类型的坐标点，具体实现如下：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Point</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token operator">?</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token operator">?</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> x<span class="token operator">:</span> Point <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 一维坐标点</span>
<span class="token keyword">const</span> xy<span class="token operator">:</span> Point <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 二维坐标点</span>
<span class="token keyword">const</span> xyz<span class="token operator">:</span> Point <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 三维坐标点</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xy<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xyz<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-10-4-元组类型的剩余元素" tabindex="-1"><a class="header-anchor" href="#_3-10-4-元组类型的剩余元素" aria-hidden="true">#</a> 3.10.4 元组类型的剩余元素</h3>
<p>元组类型里最后一个元素可以是剩余元素，形式为 <code v-pre>...X</code>，这里 <code v-pre>X</code> 是数组类型。<strong>剩余元素代表元组类型是开放的，可以有零个或多个额外的元素。</strong> 例如，<code v-pre>[number, ...string[]]</code> 表示带有一个 <code v-pre>number</code> 元素和任意数量<code v-pre>string</code> 类型元素的元组类型。为了能更好的理解，我们来举个具体的例子：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>type RestTupleType <span class="token operator">=</span> <span class="token punctuation">[</span>number<span class="token punctuation">,</span> <span class="token operator">...</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">restTuple</span><span class="token operator">:</span> RestTupleType <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">666</span><span class="token punctuation">,</span> <span class="token string">"Semlinker"</span><span class="token punctuation">,</span> <span class="token string">"Kakuqo"</span><span class="token punctuation">,</span> <span class="token string">"Lolo"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>restTuple<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>restTuple<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-10-5-只读的元组类型" tabindex="-1"><a class="header-anchor" href="#_3-10-5-只读的元组类型" aria-hidden="true">#</a> 3.10.5 只读的元组类型</h3>
<p>TypeScript 3.4 还引入了对只读元组的新支持。我们可以为任何元组类型加上 <code v-pre>readonly</code> 关键字前缀，以使其成为只读元组。具体的示例如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">point</span><span class="token operator">:</span> readonly <span class="token punctuation">[</span>number<span class="token punctuation">,</span> number<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在使用 <code v-pre>readonly</code> 关键字修饰元组类型之后，任何企图修改元组中元素的操作都会抛出异常：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// Cannot assign to '0' because it is a read-only property.</span>
point<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// Property 'push' does not exist on type 'readonly [number, number]'.</span>
point<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Property 'pop' does not exist on type 'readonly [number, number]'.</span>
point<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Property 'splice' does not exist on type 'readonly [number, number]'.</span>
point<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-11-字面量类型" tabindex="-1"><a class="header-anchor" href="#_3-11-字面量类型" aria-hidden="true">#</a> 3.11 字面量类型</h2>
<p>在 TypeScript 中，字面量不仅可以表示值，还可以表示类型，即所谓的字面量类型。</p>
<h3 id="_3-11-1-基本使用" tabindex="-1"><a class="header-anchor" href="#_3-11-1-基本使用" aria-hidden="true">#</a> 3.11.1 基本使用</h3>
<ul>
<li>思考以下代码，两个变量的类型分别是什么?</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> str1 <span class="token operator">=</span> <span class="token string">'Hello TS'</span>
<span class="token keyword">const</span> str2 <span class="token operator">=</span> <span class="token string">'Hello TS'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>通过 TS 类型推断机制，可以得到答案：
<ol>
<li>变量 str1 的类型为：string</li>
<li>变量 str2 的类型为：'Hello TS'</li>
</ol>
</li>
<li>解释:</li>
</ul>
<ol>
<li>str1 是一个变量(let)，它的值可以是任意字符串，所以类型为:string</li>
<li>str2 是一个常量(const)，它的值不能变化只能是 'Hello TS'，所以，它的类型为:'Hello TS'</li>
</ol>
<ul>
<li>注意：此处的 'Hello TS'，就是一个<strong>字面量类型</strong>，也就是说某个特定的字符串也可以作为 TS 中的类型</li>
</ul>
<p>目前，TypeScript 支持 3 种字面量类型：字符串字面量类型、数字字面量类型、布尔字面量类型，对应的字符串字面量、数字字面量、布尔字面量分别拥有与其值一样的字面量类型，具体示例如下：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token punctuation">{</span>
  <span class="token keyword">let</span> specifiedStr<span class="token operator">:</span> <span class="token string">'this is string'</span> <span class="token operator">=</span> <span class="token string">'this is string'</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> specifiedNum<span class="token operator">:</span> <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> specifiedBoolean<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如 'this is string' （这里表示一个字符串字面量类型）类型是 string 类型（确切地说是 string 类型的子类型），而 string 类型不一定是 'this is string'（这里表示一个字符串字面量类型）类型，如下具体示例：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token punctuation">{</span>
  <span class="token keyword">let</span> specifiedStr<span class="token operator">:</span> <span class="token string">'this is string'</span> <span class="token operator">=</span> <span class="token string">'this is string'</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> str<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">'any string'</span><span class="token punctuation">;</span>
  specifiedStr <span class="token operator">=</span> str<span class="token punctuation">;</span> <span class="token comment">// ts(2322) 类型 '"string"' 不能赋值给类型 'this is string'</span>
  str <span class="token operator">=</span> specifiedStr<span class="token punctuation">;</span> <span class="token comment">// ok </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>'this is string' 字面量类型可以给 string 类型赋值，但是 string 类型不能给 'this is string' 字面量类型赋值。</p>
<h3 id="_3-11-2-字符串字面量类型" tabindex="-1"><a class="header-anchor" href="#_3-11-2-字符串字面量类型" aria-hidden="true">#</a> 3.11.2 字符串字面量类型</h3>
<p>一般来说，我们可以使用一个字符串字面量类型作为变量的类型，如下代码所示：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">hello</span><span class="token operator">:</span> <span class="token string">'hello'</span> <span class="token operator">=</span> <span class="token string">'hello'</span><span class="token punctuation">;</span>
hello <span class="token operator">=</span> <span class="token string">'hi'</span><span class="token punctuation">;</span> <span class="token comment">// ts(2322) Type '"hi"' is not assignable to type '"hello"'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上，定义单个的字面量类型并没有太大的用处，它真正的应用场景是可以把多个字面量类型组合成一个联合类型（后面会讲解），用来描述拥有明确成员的实用的集合。</p>
<p>如下代码所示，我们使用字面量联合类型描述了一个明确、可 'up' 可 'down' 的集合，这样就能清楚地知道需要的数据结构了。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>type Direction <span class="token operator">=</span> <span class="token string">'up'</span> <span class="token operator">|</span> <span class="token string">'down'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">dir</span><span class="token operator">:</span> Direction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token function">move</span><span class="token punctuation">(</span><span class="token string">'up'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
<span class="token function">move</span><span class="token punctuation">(</span><span class="token string">'right'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ts(2345) Argument of type '"right"' is not assignable to parameter of type 'Direction'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过使用字面量类型组合的联合类型，我们可以限制函数的参数为指定的字面量类型集合，然后编译器会检查参数是否是指定的字面量类型集合里的成员。</p>
<p>因此，相较于使用 string 类型，使用字面量类型（组合的联合类型）可以将函数的参数限定为更具体的类型。这不仅提升了程序的可读性，还保证了函数的参数类型，可谓一举两得。</p>
<h3 id="_3-11-3-数字字面量类型及布尔字面量类型" tabindex="-1"><a class="header-anchor" href="#_3-11-3-数字字面量类型及布尔字面量类型" aria-hidden="true">#</a> 3.11.3 数字字面量类型及布尔字面量类型</h3>
<p>数字字面量类型和布尔字面量类型的使用与字符串字面量类型的使用类似，我们可以使用字面量组合的联合类型将函数的参数限定为更具体的类型，比如声明如下所示的一个类型 Config：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Config</span> <span class="token punctuation">{</span>
    size<span class="token operator">:</span> <span class="token string">'small'</span> <span class="token operator">|</span> <span class="token string">'big'</span><span class="token punctuation">;</span>
    isEnable<span class="token operator">:</span>  <span class="token boolean">true</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    margin<span class="token operator">:</span> <span class="token number">0</span> <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">4</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述代码中，我们限定了 size 属性为字符串字面量类型 'small' | 'big'，isEnable 属性为布尔字面量类型 true | false（布尔字面量只包含 true 和 false，true | false 的组合跟直接使用 boolean 没有区别），margin 属性为数字字面量类型 0 | 2 | 4。</p>
<h3 id="_3-11-4-let和const分析" tabindex="-1"><a class="header-anchor" href="#_3-11-4-let和const分析" aria-hidden="true">#</a> 3.11.4 let和const分析</h3>
<p>我们先来看一个 const 示例，如下代码所示：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">'this is string'</span><span class="token punctuation">;</span> <span class="token comment">// str: 'this is string'</span>
  <span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// num: 1</span>
  <span class="token keyword">const</span> bool <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// bool: true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述代码中，我们将 const 定义为一个不可变更的常量，在缺省类型注解的情况下，TypeScript 推断出它的类型直接由赋值字面量的类型决定，这也是一种比较合理的设计。</p>
<p>接下来我们看看如下所示的 let 示例:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>

  <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'this is string'</span><span class="token punctuation">;</span> <span class="token comment">// str: string</span>
  <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// num: number</span>
  <span class="token keyword">let</span> bool <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// bool: boolean</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述代码中，缺省显式类型注解的可变更的变量的类型转换为了赋值字面量类型的父类型，比如 str 的类型是 'this is string' 类型（这里表示一个字符串字面量类型）的父类型 string，num 的类型是 1 类型的父类型 number。</p>
<p>这种设计符合编程预期，意味着我们可以分别赋予 str 和 num 任意值（只要类型是 string 和 number 的子集的变量）：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  str <span class="token operator">=</span> <span class="token string">'any string'</span><span class="token punctuation">;</span>
  num <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  bool <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们将 TypeScript 的字面量子类型转换为父类型的这种设计称之为 &quot;literal widening&quot;，也就是字面量类型的拓宽，比如上面示例中提到的字符串字面量类型转换成 string 类型，下面我们着重介绍一下。</p>
<h3 id="_3-11-5-使用模式和场景" tabindex="-1"><a class="header-anchor" href="#_3-11-5-使用模式和场景" aria-hidden="true">#</a> 3.11.5 使用模式和场景</h3>
<ul>
<li>使用模式：<strong>字面量类型配合联合类型一起使用</strong></li>
<li>使用场景：用来表示一组明确的可选值列表</li>
<li>比如，在贪吃蛇游戏中，游戏的方向的可选值只能是上、下、左、右中的任意一个</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 使用自定义类型:</span>
<span class="token keyword">type</span> <span class="token class-name">Direction</span> <span class="token operator">=</span> <span class="token string">'up'</span> <span class="token operator">|</span> <span class="token string">'down'</span> <span class="token operator">|</span> <span class="token string">'left'</span> <span class="token operator">|</span> <span class="token string">'right'</span>

<span class="token keyword">function</span> <span class="token function">changeDirection</span><span class="token punctuation">(</span>direction<span class="token operator">:</span> Direction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>direction<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用函数时，会有类型提示：</span>
<span class="token function">changeDirection</span><span class="token punctuation">(</span><span class="token string">'up'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>解释：参数 direction 的值只能是 up/down/left/right 中的任意一个</li>
<li>优势：相比于 string 类型，使用字面量类型更加精确、严谨</li>
</ul>
<h3 id="_3-11-6-类型拓宽-type-widening" tabindex="-1"><a class="header-anchor" href="#_3-11-6-类型拓宽-type-widening" aria-hidden="true">#</a> 3.11.6 类型拓宽(Type Widening)</h3>
<p>所有通过 let 或 var 定义的变量、函数的形参、对象的非只读属性，如果满足指定了初始值且未显式添加类型注解的条件，那么它们推断出来的类型就是指定的初始值字面量类型拓宽后的类型，这就是字面量类型拓宽。</p>
<p>下面我们通过字符串字面量的示例来理解一下字面量类型拓宽：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'this is string'</span><span class="token punctuation">;</span> <span class="token comment">// 类型是 string</span>
  <span class="token keyword">let</span> strFun <span class="token operator">=</span> <span class="token punctuation">(</span>str <span class="token operator">=</span> <span class="token string">'this is string'</span><span class="token punctuation">)</span> <span class="token operator">=></span> str<span class="token punctuation">;</span> <span class="token comment">// 类型是 (str?: string) => string;</span>
  <span class="token keyword">const</span> specifiedStr <span class="token operator">=</span> <span class="token string">'this is string'</span><span class="token punctuation">;</span> <span class="token comment">// 类型是 'this is string'</span>
  <span class="token keyword">let</span> str2 <span class="token operator">=</span> specifiedStr<span class="token punctuation">;</span> <span class="token comment">// 类型是 'string'</span>
  <span class="token keyword">let</span> <span class="token function-variable function">strFun2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str <span class="token operator">=</span> specifiedStr</span><span class="token punctuation">)</span> <span class="token operator">=></span> str<span class="token punctuation">;</span> <span class="token comment">// 类型是 (str?: string) => string;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为第 1~2 行满足了 let、形参且未显式声明类型注解的条件，所以变量、形参的类型拓宽为 string（形参类型确切地讲是 string | undefined）。</p>
<p>因为第 3 行的常量不可变更，类型没有拓宽，所以 specifiedStr 的类型是 'this is string' 字面量类型。</p>
<p>第 4~5 行，因为赋予的值 specifiedStr 的类型是字面量类型，且没有显式类型注解，所以变量、形参的类型也被拓宽了。其实，这样的设计符合实际编程诉求。我们设想一下，如果 str2 的类型被推断为 'this is string'，它将不可变更，因为赋予任何其他的字符串类型的值都会提示类型错误。</p>
<p>基于字面量类型拓宽的条件，我们可以通过如下所示代码添加显示类型注解控制类型拓宽行为。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">specifiedStr</span><span class="token operator">:</span> <span class="token string">'this is string'</span> <span class="token operator">=</span> <span class="token string">'this is string'</span><span class="token punctuation">;</span> <span class="token comment">// 类型是 '"this is string"'</span>
  <span class="token keyword">let</span> str2 <span class="token operator">=</span> specifiedStr<span class="token punctuation">;</span> <span class="token comment">// 即便使用 let 定义，类型是 'this is string'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上，除了字面量类型拓宽之外，TypeScript 对某些特定类型值也有类似 &quot;Type Widening&quot; （类型拓宽）的设计，下面我们具体来了解一下。</p>
<p>比如对 null 和 undefined 的类型进行拓宽，通过 let、var 定义的变量如果满足未显式声明类型注解且被赋予了 null 或 undefined 值，则推断出这些变量的类型是 any：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 类型拓宽成 any</span>
  <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// 类型拓宽成 any</span>

  <span class="token doc-comment comment">/** -----分界线------- */</span>
  <span class="token keyword">const</span> z <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 类型是 null</span>

  <span class="token doc-comment comment">/** -----分界线------- */</span>
  <span class="token keyword">let</span> <span class="token function-variable function">anyFun</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">param <span class="token operator">=</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> param<span class="token punctuation">;</span> <span class="token comment">// 形参类型是 null</span>
  <span class="token keyword">let</span> z2 <span class="token operator">=</span> z<span class="token punctuation">;</span> <span class="token comment">// 类型是 null</span>
  <span class="token keyword">let</span> x2 <span class="token operator">=</span> x<span class="token punctuation">;</span> <span class="token comment">// 类型是 null</span>
  <span class="token keyword">let</span> y2 <span class="token operator">=</span> y<span class="token punctuation">;</span> <span class="token comment">// 类型是 undefined</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：在严格模式下，一些比较老的版本中（2.0）null 和 undefined 并不会被拓宽成“any”。</strong></p>
<h3 id="_3-11-7-类型缩小-type-narrowing" tabindex="-1"><a class="header-anchor" href="#_3-11-7-类型缩小-type-narrowing" aria-hidden="true">#</a> 3.11.7 类型缩小(Type Narrowing)</h3>
<p>在 TypeScript 中，我们可以通过某些操作将变量的类型由一个较为宽泛的集合缩小到相对较小、较明确的集合，这就是 &quot;Type Narrowing&quot;。</p>
<p>比如，我们可以使用类型守卫将函数参数的类型从 any 缩小到明确的类型，具体示例如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">anything</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> anything <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> anything<span class="token punctuation">;</span> <span class="token comment">// 类型是 string </span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> anything <span class="token operator">===</span> <span class="token string">'number'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> anything<span class="token punctuation">;</span> <span class="token comment">// 类型是 number</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 VS Code 中 hover 到第 4 行的 anything 变量提示类型是 string，到第 6 行则提示类型是 number。</p>
<p>同样，我们可以使用类型守卫将联合类型缩小到明确的子类型，具体示例如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">anything</span><span class="token operator">:</span> string <span class="token operator">|</span> number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> anything <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> anything<span class="token punctuation">;</span> <span class="token comment">// 类型是 string </span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> anything<span class="token punctuation">;</span> <span class="token comment">// 类型是 number</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，我们也可以通过字面量类型等值判断（===）或其他控制流语句（包括但不限于 if、三目运算符、switch 分支）将联合类型收敛为更具体的类型，如下代码所示：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  type Goods <span class="token operator">=</span> <span class="token string">'pen'</span> <span class="token operator">|</span> <span class="token string">'pencil'</span> <span class="token operator">|</span><span class="token string">'ruler'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> getPenCost <span class="token operator">=</span> <span class="token punctuation">(</span>item<span class="token operator">:</span> <span class="token string">'pen'</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> getPencilCost <span class="token operator">=</span> <span class="token punctuation">(</span>item<span class="token operator">:</span> <span class="token string">'pencil'</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> getRulerCost <span class="token operator">=</span> <span class="token punctuation">(</span>item<span class="token operator">:</span> <span class="token string">'ruler'</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token number">6</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getCost</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> Goods</span><span class="token punctuation">)</span> <span class="token operator">=></span>  <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>item <span class="token operator">===</span> <span class="token string">'pen'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">getPenCost</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// item => 'pen'</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>item <span class="token operator">===</span> <span class="token string">'pencil'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">getPencilCost</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// item => 'pencil'</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">getRulerCost</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// item => 'ruler'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述 getCost 函数中，接受的参数类型是字面量类型的联合类型，函数内包含了 <code v-pre>if</code> 语句的 3 个流程分支，其中每个流程分支调用的函数的参数都是具体独立的字面量类型。</p>
<p>那为什么类型由多个字面量组成的变量 item 可以传值给仅接收单一特定字面量类型的函数 <code v-pre>getPenCost、getPencilCost、getRulerCost</code> 呢？这是因为在每个流程分支中，编译器知道流程分支中的 item 类型是什么。比如 item === 'pencil' 的分支，item 的类型就被收缩为“pencil”。</p>
<p>事实上，如果我们将上面的示例去掉中间的流程分支，编译器也可以推断出收敛后的类型，如下代码所示：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token keyword">const</span> <span class="token function-variable function">getCost</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> Goods</span><span class="token punctuation">)</span> <span class="token operator">=></span>  <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>item <span class="token operator">===</span> <span class="token string">'pen'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      item<span class="token punctuation">;</span> <span class="token comment">// item => 'pen'</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      item<span class="token punctuation">;</span> <span class="token comment">// => 'pencil' | 'ruler'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-12-枚举类型" tabindex="-1"><a class="header-anchor" href="#_3-12-枚举类型" aria-hidden="true">#</a> 3.12 枚举类型</h2>
<h3 id="_3-12-1-基本使用" tabindex="-1"><a class="header-anchor" href="#_3-12-1-基本使用" aria-hidden="true">#</a> 3.12.1 基本使用</h3>
<ul>
<li>枚举的功能类似于<strong>字面量类型+联合类型组合</strong>的功能，也可以表示一组明确的可选值</li>
<li>枚举：定义一组命名常量。它描述一个值，该值可以是这些命名常量中的一个</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 创建枚举</span>
<span class="token keyword">enum</span> 枚举名 <span class="token punctuation">{</span> 
    枚举项 <span class="token operator">=</span> 枚举值<span class="token punctuation">,</span>
    枚举项 <span class="token operator">=</span> 枚举值<span class="token punctuation">,</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>解释:
<ol>
<li>使用 <code v-pre>enum</code> 关键字定义枚举</li>
<li>约定枚举名称以大写字母开头</li>
<li>枚举中的多个值之间通过 <code v-pre>,</code>（逗号）分隔</li>
<li>定义好枚举后，直接使用枚举名称作为类型注解</li>
</ol>
</li>
</ul>
<h3 id="_3-12-2-数字枚举" tabindex="-1"><a class="header-anchor" href="#_3-12-2-数字枚举" aria-hidden="true">#</a> 3.12.2 数字枚举</h3>
<ul>
<li>问题：我们把枚举成员作为了函数的实参，它的值是什么呢?</li>
<li>解释：通过将鼠标移入 Gender.Boy，可以看到枚举成员 Boy 的值为 1</li>
<li>注意：枚举成员是有值的，默认为：从 0 开始自增的数值</li>
<li>我们把，枚举成员的值为数字的枚举，称为：<code v-pre>数字枚举</code></li>
<li>当然，也可以给枚举中的成员初始化值</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token punctuation">{</span>
  <span class="token comment">/* 
    ✅开发需求：
      用户编辑界面，用户选择的性别    男  女  未知
      后端接口参数要求传的是数字对应为 1   0  -1

    🎉开发经验：
      TS项目中可通过设计枚举结构，提高源代码的可读性
  */</span>

  <span class="token comment">// 定义枚举结构</span>
  <span class="token comment">// enum Gender {</span>
  <span class="token comment">//   Boy = 1,</span>
  <span class="token comment">//   Girl = 0,</span>
  <span class="token comment">//   Unknown = -1</span>
  <span class="token comment">// }</span>

  <span class="token comment">// 🔔补充：枚举项会自动自增，默认从 0 开始</span>
  <span class="token keyword">enum</span> Gender <span class="token punctuation">{</span>
    Unknown <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
    Girl<span class="token punctuation">,</span>
    Boy<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 模拟后端所需的参数</span>
  <span class="token keyword">const</span> query<span class="token operator">:</span> Gender <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'用户名'</span><span class="token punctuation">,</span>
    <span class="token comment">// gender: Gender.Boy 等价于 gender: 1，🔔但代码可读性更高</span>
    gender<span class="token operator">:</span> Gender<span class="token punctuation">.</span>Boy<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'query'</span><span class="token punctuation">,</span> query<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-12-3-字符串枚举-了解即可" tabindex="-1"><a class="header-anchor" href="#_3-12-3-字符串枚举-了解即可" aria-hidden="true">#</a> 3.12.3 字符串枚举-了解即可</h3>
<ul>
<li>字符串枚举：枚举成员的值是字符串</li>
<li>注意：字符串枚举没有自增长行为，因此，<strong>字符串枚举的每个成员必须有初始值</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
  Up <span class="token operator">=</span> <span class="token string">'UP'</span><span class="token punctuation">,</span>
  Down <span class="token operator">=</span> <span class="token string">'DOWN'</span><span class="token punctuation">,</span>
  Left <span class="token operator">=</span> <span class="token string">'LEFT'</span><span class="token punctuation">,</span>
  Right <span class="token operator">=</span> <span class="token string">'RIGHT'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-12-4-枚举实现原理" tabindex="-1"><a class="header-anchor" href="#_3-12-4-枚举实现原理" aria-hidden="true">#</a> 3.12.4 枚举实现原理</h3>
<ul>
<li>枚举是 TS 为数不多的非 JavaScript 类型级扩展(不仅仅是类型)的特性之一</li>
<li>因为：其他类型仅仅被当做类型，而枚举不仅用作类型，还提供值(枚举成员都是有值的)</li>
<li>也就是说，其他的类型会在编译为 JS 代码时自动移除。但是，<strong>枚举类型会被编译为 JS 代码</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">enum</span> Gender <span class="token punctuation">{</span>
    Unknown <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
    Girl <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    Boy <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 会被编译为以下 JS 代码：</span>
<span class="token keyword">var</span> Gender<span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>Gender<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Gender<span class="token punctuation">[</span>Gender<span class="token punctuation">[</span><span class="token string">"Unknown"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Unknown"</span><span class="token punctuation">;</span>
    Gender<span class="token punctuation">[</span>Gender<span class="token punctuation">[</span><span class="token string">"Girl"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Girl"</span><span class="token punctuation">;</span>
    Gender<span class="token punctuation">[</span>Gender<span class="token punctuation">[</span><span class="token string">"Boy"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"Boy"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Gender <span class="token operator">||</span> <span class="token punctuation">(</span>Gender <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>说明：枚举与前面讲到的字面量类型+联合类型组合的功能类似，都用来表示一组明确的可选值列表</li>
<li>一般情况下，<strong>推荐使用字面量类型+联合类型组合的方式</strong>，因为相比枚举，这种方式更加直观、简洁、高效</li>
</ul>
<h2 id="_3-13-any-类型" tabindex="-1"><a class="header-anchor" href="#_3-13-any-类型" aria-hidden="true">#</a> 3.13 any 类型</h2>
<p>在 TypeScript 中，任何类型都可以被归为 any 类型。这让 any 类型成为了类型系统的顶级类型.</p>
<ul>
<li><strong>原则:不推荐使用 any</strong>!这会让 TypeScript 变为 “AnyScript”(失去 TS 类型保护的优势)</li>
<li>一个变量设置类型为any后相当于对该变量关闭了TS的类型检测</li>
<li>当值的类型为 any 时，可以对该值进行任意操作，并且不会有代码提示</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token number">666</span><span class="token punctuation">;</span>
a <span class="token operator">=</span> <span class="token string">"Semlinker"</span><span class="token punctuation">;</span>
a <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
a <span class="token operator">=</span> <span class="token number">66</span>
a <span class="token operator">=</span> <span class="token keyword">undefined</span>
a <span class="token operator">=</span> <span class="token keyword">null</span>
a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">'seven'</span><span class="token punctuation">;</span>
a <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
<span class="token comment">// TS2322: Type 'number' is not assignable to type 'string'.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>解释:以上操作都不会有任何类型错误提示，即使可能存在错误</li>
<li>尽可能的避免使用 any 类型，除非临时使用 any 来“避免”书写很长、很复杂的类型</li>
<li>其他隐式具有 any 类型的情况
<ol>
<li>
<p>声明变量不提供类型也不提供默认值</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> something<span class="token punctuation">;</span>
something <span class="token operator">=</span> <span class="token string">'seven'</span><span class="token punctuation">;</span>
something <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
something<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">'Tom'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等价于</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> something<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
something <span class="token operator">=</span> <span class="token string">'seven'</span><span class="token punctuation">;</span>
something <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
something<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">'Tom'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>函数参数不加类型</p>
</li>
</ol>
</li>
<li>注意：因为不推荐使用 any，所以，这两种情况下都应该提供类型</li>
</ul>
<p>在许多场景下，这太宽松了。使用 <code v-pre>any</code> 类型，可以很容易地编写类型正确但在运行时有问题的代码。如果我们使用 <code v-pre>any</code> 类型，就无法使用 TypeScript 提供的大量的保护机制。请记住，<code v-pre>any 是魔鬼！</code>尽量不要用any。</p>
<p>为了解决 <code v-pre>any</code> 带来的问题，TypeScript 3.0 引入了 <code v-pre>unknown</code> 类型。</p>
<h2 id="_3-14-unknown-类型" tabindex="-1"><a class="header-anchor" href="#_3-14-unknown-类型" aria-hidden="true">#</a> 3.14 unknown 类型</h2>
<h3 id="_3-14-1-基本使用" tabindex="-1"><a class="header-anchor" href="#_3-14-1-基本使用" aria-hidden="true">#</a> 3.14.1 基本使用</h3>
<p><code v-pre>unknown</code>与<code v-pre>any</code>一样，所有类型都可以分配给<code v-pre>unknown</code>:</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// unknown 表示未知类型的值</span>
<span class="token keyword">let</span> e<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">;</span>
e <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
e <span class="token operator">=</span> <span class="token string">'hello'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>unknown</code>与<code v-pre>any</code>的最大区别是： 任何类型的值可以赋值给<code v-pre>any</code>，同时<code v-pre>any</code>类型的值也可以赋值给任何类型。<code v-pre>unknown</code> 任何类型的值都可以赋值给它，但它只能赋值给<code v-pre>unknown</code>和<code v-pre>any</code>。看看下面这个例子:</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> notSure<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> uncertain<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> notSure<span class="token punctuation">;</span> <span class="token comment">// OK</span>

<span class="token keyword">let</span> notSure<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> uncertain<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> notSure<span class="token punctuation">;</span> <span class="token comment">// OK</span>

<span class="token keyword">let</span> notSure<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> uncertain<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> notSure<span class="token punctuation">;</span> <span class="token comment">// Error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>unknown 实际上就是一个类型安全的any</p>
<p>unknown类型的变量，不能直接赋值给其他变量（除了自己和any）</p>
</blockquote>
<p>如果不缩小类型，就无法对<code v-pre>unknown</code>类型执行任何操作：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getDog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token string">'123'</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">const</span> dog<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token punctuation">{</span>hello<span class="token operator">:</span> getDog<span class="token punctuation">}</span><span class="token punctuation">;</span>
dog<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种机制起到了很强的预防性，更安全，这就要求我们必须缩小类型，我们可以使用<code v-pre>typeof</code>、<code v-pre>类型断言</code>等方式来缩小未知范围：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getDogName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">;</span>
 <span class="token keyword">return</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> dogName <span class="token operator">=</span> <span class="token function">getDogName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 直接使用</span>
<span class="token keyword">const</span> upName <span class="token operator">=</span> dogName<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
<span class="token comment">// typeof</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> dogName <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> upName <span class="token operator">=</span> dogName<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是这样才能赋值太麻烦了，所以引出了类型断言。</p>
<h3 id="_3-14-2-类型断言" tabindex="-1"><a class="header-anchor" href="#_3-14-2-类型断言" aria-hidden="true">#</a> 3.14.2 类型断言</h3>
<p>有些情况下，变量的类型对于我们来说是很明确，但是TS编译器却并不清楚，此时，可以通过类型断言来告诉编译器变量的类型。</p>
<p>类型断言好比其他语言里的类型转换，但是不进行特殊的数据检查和解构。它没有运行时的影响，只是在编译阶段起作用。</p>
<p>TypeScript 类型检测无法做到绝对智能，毕竟程序不能像人一样思考。有时会碰到我们比 TypeScript 更清楚实际类型的情况，比如下面的例子：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> arrayNumber<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> greaterThan2<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> arrayNumber<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>num <span class="token operator">=></span> num <span class="token operator">></span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 提示 ts(2322)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，greaterThan2 一定是一个数字（确切地讲是 3），因为 arrayNumber 中明显有大于 2 的成员，但静态类型对运行时的逻辑无能为力。</p>
<p>在 TypeScript 看来，greaterThan2 的类型既可能是数字，也可能是 undefined，所以上面的示例中提示了一个 ts(2322) 错误，此时我们不能把类型 undefined 分配给类型 number。</p>
<p>不过，我们可以使用一种笃定的方式——<strong>类型断言</strong>（类似仅作用在类型层面的强制类型转换）告诉 TypeScript 按照我们的方式做类型检查。</p>
<p>比如，我们可以使用 as 语法做类型断言，如下代码所示：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> arrayNumber<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> greaterThan2<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> arrayNumber<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>num <span class="token operator">=></span> num <span class="token operator">></span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>语法</strong></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 尖括号 语法</span>
<span class="token keyword">let</span> someValue<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">"this is a string"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> strLength<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span>someValue<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>

<span class="token comment">// as 语法</span>
<span class="token keyword">let</span> someValue<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">"this is a string"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> strLength<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token punctuation">(</span>someValue <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上两种方式虽然没有任何区别，但是尖括号格式会与react中JSX产生语法冲突，因此我们更推荐使用 as 语法。</p>
<p>好了，对于上面<code v-pre>unknown 类型</code>赋值的类型也能解决了。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getDogName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">;</span>
 <span class="token keyword">return</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> dogName <span class="token operator">=</span> <span class="token function">getDogName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 类型断言 </span>
<span class="token keyword">let</span> upName <span class="token operator">=</span> <span class="token punctuation">(</span>dogName <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>

<span class="token keyword">let</span> upName <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span>dogName<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>告诉解析器我就是这个类型的就可以了。</p>
</blockquote>
<h3 id="_3-14-3-非空断言" tabindex="-1"><a class="header-anchor" href="#_3-14-3-非空断言" aria-hidden="true">#</a> 3.14.3 非空断言</h3>
<p>在上下文中当类型检查器无法断定类型时，一个新的后缀表达式操作符 <code v-pre>!</code> 可以用于断言操作对象是非 null 和非 undefined 类型。<strong>具体而言，x! 将从 x 值域中排除 null 和 undefined 。</strong></p>
<p>具体看以下示例：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> mayNullOrUndefinedOrString<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
mayNullOrUndefinedOrString<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
mayNullOrUndefinedOrString<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ts(2531)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">NumGenerator</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">number</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">myFunc</span><span class="token punctuation">(</span>numGenerator<span class="token operator">:</span> NumGenerator <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Object is possibly 'undefined'.(2532)</span>
  <span class="token comment">// Cannot invoke an object which is possibly 'undefined'.(2722)</span>
  <span class="token keyword">const</span> num1 <span class="token operator">=</span> <span class="token function">numGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
  <span class="token keyword">const</span> num2 <span class="token operator">=</span> numGenerator<span class="token operator">!</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//OK</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-14-4-确定赋值断言" tabindex="-1"><a class="header-anchor" href="#_3-14-4-确定赋值断言" aria-hidden="true">#</a> 3.14.4 确定赋值断言</h3>
<p>允许在实例属性和变量声明后面放置一个 <code v-pre>!</code> 号，从而告诉 TypeScript 该属性会被明确地赋值。为了更好地理解它的作用，我们来看个具体的例子：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Variable 'x' is used before being assigned.(2454)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
<span class="token keyword">function</span> <span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很明显该异常信息是说变量 x 在赋值前被使用了，要解决该问题，我们可以使用确定赋值断言：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> x<span class="token operator">!</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Ok</span>

<span class="token keyword">function</span> <span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code v-pre>let x!: number;</code> 确定赋值断言，TypeScript 编译器就会知道该属性会被明确地赋值。</p>
<h2 id="_3-15-总结" tabindex="-1"><a class="header-anchor" href="#_3-15-总结" aria-hidden="true">#</a> 3.15 总结</h2>
<ul>
<li>
<p>类型声明</p>
<ul>
<li>
<p>类型声明是TS非常重要的一个特点</p>
</li>
<li>
<p>通过类型声明可以指定TS中变量（参数、形参）的类型</p>
</li>
<li>
<p>指定类型后，当为变量赋值时，TS编译器会自动检查值是否符合类型声明，符合则赋值，否则报错</p>
</li>
<li>
<p>简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值</p>
</li>
<li>
<p>语法：</p>
<ul>
<li>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> 变量<span class="token operator">:</span> 类型<span class="token punctuation">;</span>

<span class="token keyword">let</span> 变量<span class="token operator">:</span> 类型 <span class="token operator">=</span> 值<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>参数<span class="token operator">:</span> 类型<span class="token punctuation">,</span> 参数<span class="token operator">:</span> 类型<span class="token punctuation">)</span><span class="token operator">:</span> 类型<span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
<li>
<p>自动类型判断</p>
<ul>
<li>TS拥有自动的类型判断机制</li>
<li>当对变量的声明和赋值是同时进行的，TS编译器会自动判断变量的类型</li>
<li>所以如果你的变量的声明和赋值时同时进行的，可以省略掉类型声明</li>
</ul>
</li>
<li>
<p>类型：</p>
<table>
<thead>
<tr>
<th style="text-align:center">类型</th>
<th style="text-align:center">例子</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">number</td>
<td style="text-align:center">1, -33, 2.5</td>
<td style="text-align:center">任意数字</td>
</tr>
<tr>
<td style="text-align:center">string</td>
<td style="text-align:center">'hi', &quot;hi&quot;, hi</td>
<td style="text-align:center">任意字符串</td>
</tr>
<tr>
<td style="text-align:center">boolean</td>
<td style="text-align:center">true、false</td>
<td style="text-align:center">布尔值true或false</td>
</tr>
<tr>
<td style="text-align:center">字面量</td>
<td style="text-align:center">其本身</td>
<td style="text-align:center">限制变量的值就是该字面量的值</td>
</tr>
<tr>
<td style="text-align:center">any</td>
<td style="text-align:center">*</td>
<td style="text-align:center">任意类型</td>
</tr>
<tr>
<td style="text-align:center">unknown</td>
<td style="text-align:center">*</td>
<td style="text-align:center">类型安全的any</td>
</tr>
<tr>
<td style="text-align:center">void</td>
<td style="text-align:center">空值（undefined）</td>
<td style="text-align:center">没有值（或undefined）</td>
</tr>
<tr>
<td style="text-align:center">never</td>
<td style="text-align:center">没有值</td>
<td style="text-align:center">不能是任何值</td>
</tr>
<tr>
<td style="text-align:center">object</td>
<td style="text-align:center">{name:'孙悟空'}</td>
<td style="text-align:center">任意的JS对象</td>
</tr>
<tr>
<td style="text-align:center">array</td>
<td style="text-align:center">[1,2,3]</td>
<td style="text-align:center">任意JS数组</td>
</tr>
<tr>
<td style="text-align:center">tuple</td>
<td style="text-align:center">[4,5]</td>
<td style="text-align:center">元素，TS新增类型，固定长度数组</td>
</tr>
<tr>
<td style="text-align:center">enum</td>
<td style="text-align:center">enum{A, B}</td>
<td style="text-align:center">枚举，TS中新增类型</td>
</tr>
</tbody>
</table>
</li>
</ul>
</div></template>


