<template><div><h1 id="react-位运算" tabindex="-1"><a class="header-anchor" href="#react-位运算" aria-hidden="true">#</a> React 位运算</h1>
<p>网络上介绍位运算的文章非常多(如<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators" target="_blank" rel="noopener noreferrer">MDN 上的介绍<ExternalLinkIcon/></a>就很仔细).</p>
<p>本文的目的:</p>
<ol>
<li>温故知新, 对位运算的基本使用做一下简单的总结.</li>
<li>归纳在<code v-pre>javascript</code>中使用位运算的注意事项.</li>
<li>列举在<code v-pre>react</code>源码中, 对于位运算的高频使用场景.</li>
</ol>
<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2>
<p>位运算直接处理每一个比特位(bit), 是非常底层的运算, 优势是速度快, 劣势就是不直观且只支持整数运算.</p>
<h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h2>
<table>
<thead>
<tr>
<th>位运算</th>
<th>用法</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>按位与(<code v-pre>&amp;</code>)</td>
<td><code v-pre>a &amp; b</code></td>
<td>对于每一个比特位,两个操作数都为 1 时, 结果为 1, 否则为 0</td>
</tr>
<tr>
<td>按位或(<code v-pre>|</code>)</td>
<td><code v-pre>a | b</code></td>
<td>对于每一个比特位,两个操作数都为 0 时, 结果为 0, 否则为 1</td>
</tr>
<tr>
<td>按位异或(<code v-pre>^</code>)</td>
<td><code v-pre>a ^ b</code></td>
<td>对于每一个比特位,两个操作数相同时, 结果为 0, 否则为 1</td>
</tr>
<tr>
<td>按位非(<code v-pre>~</code>)</td>
<td><code v-pre>~ a</code></td>
<td>反转操作数的比特位, 即 0 变成 1, 1 变成 0</td>
</tr>
<tr>
<td>左移(<code v-pre>&lt;&lt;</code>)</td>
<td><code v-pre>a &lt;&lt; b</code></td>
<td>将 a 的二进制形式向左移 b (&lt; 32) 比特位, 右边用 0 填充</td>
</tr>
<tr>
<td>有符号右移(<code v-pre>&gt;&gt;</code>)</td>
<td><code v-pre>a &gt;&gt; b</code></td>
<td>将 a 的二进制形式向右移 b (&lt; 32) 比特位, 丢弃被移除的位, 左侧以最高位来填充</td>
</tr>
<tr>
<td>无符号右移(<code v-pre>&gt;&gt;&gt;</code>)</td>
<td><code v-pre>a &gt;&gt;&gt; b</code></td>
<td>将 a 的二进制形式向右移 b (&lt; 32) 比特位, 丢弃被移除的位, 并用 0 在左侧填充</td>
</tr>
</tbody>
</table>
<p>在<a href="https://www.ecma-international.org/ecma-262/5.1/#sec-11.10" target="_blank" rel="noopener noreferrer"><code v-pre>ES5</code>规范中<ExternalLinkIcon/></a>, 对二进制位运算的说明如下:</p>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<ul>
<li><code v-pre>&gt;&gt;</code> 和<code v-pre>&lt;&lt;</code>
数 a 向右移一位，相当于将 a 除以 2，向下取整；数 a 向左移一位，相当于将 a 乘以 2</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>公示：
a<span class="token operator">>></span>k<span class="token operator">==</span><span class="token operator">=</span>parseInt<span class="token punctuation">(</span>a/<span class="token punctuation">(</span><span class="token number">2</span>^k<span class="token punctuation">))</span><span class="token operator">==</span><span class="token operator">=</span>Math.floor<span class="token punctuation">(</span>a/<span class="token punctuation">(</span><span class="token number">2</span>^k<span class="token punctuation">))</span>

<span class="token operator"><span class="token file-descriptor important">5</span>>></span><span class="token number">1</span>-<span class="token operator">></span>Math.floor<span class="token punctuation">(</span><span class="token number">5</span>/2<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>^</code></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>a <span class="token operator">=</span> a + b<span class="token punctuation">;</span><span class="token operator">==</span><span class="token operator">=</span> a ^<span class="token operator">=</span> b<span class="token punctuation">;</span>
b <span class="token operator">=</span> a - b<span class="token punctuation">;</span><span class="token operator">==</span><span class="token operator">=</span> b ^<span class="token operator">=</span> a<span class="token punctuation">;</span>
a <span class="token operator">=</span> a - b<span class="token punctuation">;</span><span class="token operator">==</span><span class="token operator">=</span> a ^<span class="token operator">=</span> b<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>&amp;</code>
只要根据数的最后一位是 0 还是 1 来决定即可，为 0 就是偶数，为 1 就是奇数</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>if<span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">==</span> <span class="token punctuation">(</span>a <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">))</span> <span class="token punctuation">{</span>
 //偶数
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>~</code>
换符号将正数变成负数，负数变成正数</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>int reversal<span class="token punctuation">(</span>int a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">return</span> ~a + <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>The production A <span class="token builtin class-name">:</span> A @ B, where @ is one of the bitwise operators <span class="token keyword">in</span> the productions above, is evaluated as follows:
<span class="token number">1</span>. Let lref be the result of evaluating A.
<span class="token number">2</span>. Let lval be GetValue<span class="token punctuation">(</span>lref<span class="token punctuation">)</span>.
<span class="token number">3</span>. Let rref be the result of evaluating B.
<span class="token number">4</span>. Let rval be GetValue<span class="token punctuation">(</span>rref<span class="token punctuation">)</span>.
<span class="token number">5</span>. Let lnum be ToInt32<span class="token punctuation">(</span>lval<span class="token punctuation">)</span>.
<span class="token number">6</span>. Let rnum be ToInt32<span class="token punctuation">(</span>rval<span class="token punctuation">)</span>.
<span class="token number">7</span>. Return the result of applying the bitwise operator @ to lnum and rnum. The result is a signed <span class="token number">32</span> bit integer.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>意思是会将位运算中的左右操作数都转换为<code v-pre>有符号32位整型</code>, 且返回结果也是<code v-pre>有符号32位整型</code></p>
<ul>
<li>所以当操作数是浮点型时首先会被转换成整型, 再进行位运算</li>
<li>当操作数过大, 超过了<code v-pre>Int32</code>范围, 超过的部分会被截取</li>
</ul>
<p>通过以上知识的回顾, 要点如下:</p>
<ol>
<li>位运算只能在整型变量之间进行运算</li>
<li>js 中的<code v-pre>Number</code>类型在底层都是以浮点数(参考 IEEE754 标准)进行存储.</li>
<li>js 中所有的按位操作符的操作数都会被<a href="https://www.ecma-international.org/ecma-262/5.1/#sec-9.5" target="_blank" rel="noopener noreferrer">转成补码（two's complement）<ExternalLinkIcon/></a>形式的<code v-pre>有符号32位整数</code>.</li>
</ol>
<p>所以在 js 中使用位运算时, 有 2 种情况会造成结果异常:</p>
<ol>
<li>
<p>操作数为浮点型(虽然底层都是浮点型, 此处理解为显示性的浮点型)</p>
<ul>
<li>转换流程: 浮点数 -&gt; 整数(丢弃小数位) -&gt; 位运算</li>
</ul>
</li>
<li>
<p>操作数的大小超过<code v-pre>Int32</code>范围(<code v-pre>-2^31 ~ 2^31-1</code>). 超过范围的二进制位会被截断, 取<code v-pre>低位32bit</code>.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>      Before: 11100110111110100000000000000110000000000001
      After:              10100000000000000110000000000001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p>另外由于 js 语言的<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness" target="_blank" rel="noopener noreferrer">隐式转换<ExternalLinkIcon/></a>, 对非<code v-pre>Number</code>类型使用位运算操作符时会发生隐式转换, 相当于先使用<code v-pre>Number(xxx)</code>将其转换为<code v-pre>number</code>类型, 再进行位运算:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token string">'str'</span> <span class="token operator">>>></span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//  ===> Number('str') >>> 0  ===> NaN >>> 0 = 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2>
<p>为了方便比较, 以下演示代码中的注释, 都写成了 8 位二进制数(上文已经说明, 事实上在 js 中, 位运算最终的结果都是 Int32).</p>
<p>枚举属性:</p>
<p>通过位移的方式, 定义一些枚举常量</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">A</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 0b00000001</span>
<span class="token keyword">const</span> <span class="token constant">B</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 0b00000010</span>
<span class="token keyword">const</span> <span class="token constant">C</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 0b00000100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>位掩码:</p>
<p>通过位移定义的一组枚举常量, 可以利用位掩码的特性, 快速操作这些枚举产量(增加, 删除, 比较).</p>
<ol>
<li>属性增加<code v-pre>|</code>
<ol>
<li><code v-pre>ABC = A | B | C</code></li>
</ol>
</li>
<li>属性删除<code v-pre>&amp; ~</code>
<ol>
<li><code v-pre>AB = ABC &amp; ~C</code></li>
</ol>
</li>
<li>属性比较
<ol>
<li>AB 当中包含 B: <code v-pre>AB &amp; B === B</code></li>
<li>AB 当中不包含 C: <code v-pre>AB &amp; C === 0</code></li>
<li>A 和 B 相等: <code v-pre>A === B</code></li>
</ol>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">A</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 0b00000001</span>
<span class="token keyword">const</span> <span class="token constant">B</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 0b00000010</span>
<span class="token keyword">const</span> <span class="token constant">C</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 0b00000100</span>

<span class="token comment">// 增加属性</span>
<span class="token keyword">const</span> <span class="token constant">ABC</span> <span class="token operator">=</span> <span class="token constant">A</span> <span class="token operator">|</span> <span class="token constant">B</span> <span class="token operator">|</span> <span class="token constant">C</span><span class="token punctuation">;</span> <span class="token comment">// 0b00000111</span>
<span class="token comment">// 删除属性</span>
<span class="token keyword">const</span> <span class="token constant">AB</span> <span class="token operator">=</span> <span class="token constant">ABC</span> <span class="token operator">&amp;</span> <span class="token operator">~</span><span class="token constant">C</span><span class="token punctuation">;</span> <span class="token comment">// 0b00000011</span>

<span class="token comment">// 属性比较</span>
<span class="token comment">// 1. AB当中包含B</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token constant">AB</span> <span class="token operator">&amp;</span> <span class="token constant">B</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token constant">B</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token comment">// 2. AB当中不包含C</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token constant">AB</span> <span class="token operator">&amp;</span> <span class="token constant">C</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token comment">// 3. A和B相等</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">A</span> <span class="token operator">===</span> <span class="token constant">B</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-当中的使用场景" tabindex="-1"><a class="header-anchor" href="#react-当中的使用场景" aria-hidden="true">#</a> React 当中的使用场景</h2>
<p>在 react 核心包中, 位运算使用的场景非常多. 此处只列举出了使用频率较高的示例.</p>
<h3 id="优先级管理-lanes" tabindex="-1"><a class="header-anchor" href="#优先级管理-lanes" aria-hidden="true">#</a> 优先级管理 lanes</h3>
<p>lanes 是<code v-pre>17.x</code>版本中开始引入的重要概念, 代替了<code v-pre>16.x</code>版本中的<code v-pre>expirationTime</code>, 作为<code v-pre>fiber</code>对象的一个属性(位于<code v-pre>react-reconciler</code>包), 主要控制 fiber 树在构造过程中的优先级(这里只介绍位运算的应用, 对于 lanes 的深入分析在<RouterLink to="/notes/main/priority.html"><code v-pre>优先级管理</code></RouterLink>章节深入解读).</p>
<p>变量定义:</p>
<p>首先看源码<a href="https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberLane.js#L74-L103" target="_blank" rel="noopener noreferrer">ReactFiberLane.js<ExternalLinkIcon/></a>中的定义</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//类型定义</span>
<span class="token keyword">export</span> opaque type Lanes <span class="token operator">=</span> number<span class="token punctuation">;</span>
<span class="token keyword">export</span> opaque type Lane <span class="token operator">=</span> number<span class="token punctuation">;</span>

<span class="token comment">// 变量定义</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">NoLanes</span><span class="token operator">:</span> Lanes <span class="token operator">=</span> <span class="token comment">/*                        */</span> <span class="token number">0b0000000000000000000000000000000</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">NoLane</span><span class="token operator">:</span> Lane <span class="token operator">=</span> <span class="token comment">/*                          */</span> <span class="token number">0b0000000000000000000000000000000</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">SyncLane</span><span class="token operator">:</span> Lane <span class="token operator">=</span> <span class="token comment">/*                        */</span> <span class="token number">0b0000000000000000000000000000001</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">SyncBatchedLane</span><span class="token operator">:</span> Lane <span class="token operator">=</span> <span class="token comment">/*                 */</span> <span class="token number">0b0000000000000000000000000000010</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">InputDiscreteHydrationLane</span><span class="token operator">:</span> Lane <span class="token operator">=</span> <span class="token comment">/*      */</span> <span class="token number">0b0000000000000000000000000000100</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token literal-property property">InputDiscreteLanes</span><span class="token operator">:</span> Lanes <span class="token operator">=</span> <span class="token comment">/*                    */</span> <span class="token number">0b0000000000000000000000000011000</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">InputContinuousHydrationLane</span><span class="token operator">:</span> Lane <span class="token operator">=</span> <span class="token comment">/*           */</span> <span class="token number">0b0000000000000000000000000100000</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token literal-property property">InputContinuousLanes</span><span class="token operator">:</span> Lanes <span class="token operator">=</span> <span class="token comment">/*                  */</span> <span class="token number">0b0000000000000000000000011000000</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
<span class="token comment">// ...</span>

<span class="token keyword">const</span> NonIdleLanes <span class="token operator">=</span> <span class="token comment">/*                                 */</span> <span class="token number">0b0000111111111111111111111111111</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">IdleHydrationLane</span><span class="token operator">:</span> Lane <span class="token operator">=</span> <span class="token comment">/*               */</span> <span class="token number">0b0001000000000000000000000000000</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token literal-property property">IdleLanes</span><span class="token operator">:</span> Lanes <span class="token operator">=</span> <span class="token comment">/*                             */</span> <span class="token number">0b0110000000000000000000000000000</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">OffscreenLane</span><span class="token operator">:</span> Lane <span class="token operator">=</span> <span class="token comment">/*                   */</span> <span class="token number">0b1000000000000000000000000000000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>源码中<code v-pre>Lanes</code>和<code v-pre>Lane</code>都是<code v-pre>number</code>类型, 并且将所有变量都使用二进制位来表示.</p>
<p>注意: 源码中变量只列出了 31 位, 由于 js 中位运算都会转换成<code v-pre>Int32</code>(上文已经解释), 最多为 32 位, 且最高位是符号位. 所以除去符号位, 最多只有 31 位可以参与运算.</p>
<p><a href="https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberLane.js#L121-L194" target="_blank" rel="noopener noreferrer">方法定义<ExternalLinkIcon/></a>:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getHighestPriorityLanes</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">lanes</span><span class="token operator">:</span> Lanes <span class="token operator">|</span> Lane</span><span class="token punctuation">)</span><span class="token operator">:</span> Lanes <span class="token punctuation">{</span>
  <span class="token comment">// 判断 lanes中是否包含 SyncLane</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>SyncLane <span class="token operator">&amp;</span> lanes<span class="token punctuation">)</span> <span class="token operator">!==</span> NoLanes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    return_highestLanePriority <span class="token operator">=</span> SyncLanePriority<span class="token punctuation">;</span>
    <span class="token keyword">return</span> SyncLane<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 判断 lanes中是否包含 SyncBatchedLane</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>SyncBatchedLane <span class="token operator">&amp;</span> lanes<span class="token punctuation">)</span> <span class="token operator">!==</span> NoLanes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    return_highestLanePriority <span class="token operator">=</span> SyncBatchedLanePriority<span class="token punctuation">;</span>
    <span class="token keyword">return</span> SyncBatchedLane<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
  <span class="token comment">// ... 省略其他代码</span>
  <span class="token keyword">return</span> lanes<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在方法定义中, 也是通过位掩码的特性来判断二进制形式变量之间的关系. 除了常规的位掩码操作外, 特别说明其中 2 个技巧性强的函数:</p>
<ol>
<li><code v-pre>getHighestPriorityLane</code>: 分离出最高优先级</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getHighestPriorityLane</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">lanes</span><span class="token operator">:</span> Lanes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> lanes <span class="token operator">&amp;</span> <span class="token operator">-</span>lanes<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过<code v-pre>lanes &amp; -lanes</code>可以分离出所有比特位中最右边的 1, 具体来讲:</p>
<ul>
<li>假设 <code v-pre>lanes(InputDiscreteLanes) = 0b0000000000000000000000000011000</code></li>
<li>那么 <code v-pre>-lanes = 0b1111111111111111111111111101000</code></li>
<li>所以 <code v-pre>lanes &amp; -lanes = 0b0000000000000000000000000001000</code></li>
<li>相比最初的 InputDiscreteLanes, 分离出来了<code v-pre>最右边的1</code></li>
<li>通过 lanes 的定义, 数字越小的优先级越高, 所以此方法可以获取<code v-pre>最高优先级的lane</code></li>
<li></li>
</ul>
<ol start="2">
<li><code v-pre>getLowestPriorityLane</code>: 分离出最低优先级</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getLowestPriorityLane</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">lanes</span><span class="token operator">:</span> Lanes</span><span class="token punctuation">)</span><span class="token operator">:</span> Lane <span class="token punctuation">{</span>
  <span class="token comment">// This finds the most significant non-zero bit.</span>
  <span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token number">31</span> <span class="token operator">-</span> <span class="token function">clz32</span><span class="token punctuation">(</span>lanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">?</span> NoLanes <span class="token operator">:</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> index<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>clz32(lanes)</code>返回一个数字在转换成 32 无符号整形数字的二进制形式后, 前导 0 的个数(<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32" target="_blank" rel="noopener noreferrer">MDN 上的解释<ExternalLinkIcon/></a>)</p>
<ul>
<li>假设 <code v-pre>lanes(InputDiscreteLanes) = 0b0000000000000000000000000011000</code></li>
<li>那么 <code v-pre>clz32(lanes) = 27</code>, 由于 InputDiscreteLanes 在源码中被书写成了 31 位, 虽然在字面上前导 0 是 26 个, 但是转成标准 32 位后是 27 个</li>
<li><code v-pre>index = 31 - clz32(lanes) = 4</code></li>
<li>最后 <code v-pre>1 &lt;&lt; index = 0b0000000000000000000000000010000</code></li>
<li>相比最初的 InputDiscreteLanes, 分离出来了<code v-pre>最左边的1</code></li>
<li>通过 lanes 的定义, 数字越小的优先级越高, 所以此方法可以获取最低优先级的 lane</li>
</ul>
<h3 id="执行上下文-executioncontext" tabindex="-1"><a class="header-anchor" href="#执行上下文-executioncontext" aria-hidden="true">#</a> 执行上下文 ExecutionContext</h3>
<p><code v-pre>ExecutionContext</code>定义与<code v-pre>react-reconciler</code>包中, 代表<code v-pre>reconciler</code>在运行时的上下文状态(在<code v-pre>reconciler 执行上下文</code>章节中深入解读, 此处介绍位运算的应用).</p>
<p><a href="https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L247-L256" target="_blank" rel="noopener noreferrer">变量定义<ExternalLinkIcon/></a>:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> NoContext <span class="token operator">=</span> <span class="token comment">/*             */</span> <span class="token number">0b0000000</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> BatchedContext <span class="token operator">=</span> <span class="token comment">/*               */</span> <span class="token number">0b0000001</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> EventContext <span class="token operator">=</span> <span class="token comment">/*                 */</span> <span class="token number">0b0000010</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> DiscreteEventContext <span class="token operator">=</span> <span class="token comment">/*         */</span> <span class="token number">0b0000100</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> LegacyUnbatchedContext <span class="token operator">=</span> <span class="token comment">/*       */</span> <span class="token number">0b0001000</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> RenderContext <span class="token operator">=</span> <span class="token comment">/*                */</span> <span class="token number">0b0010000</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> CommitContext <span class="token operator">=</span> <span class="token comment">/*                */</span> <span class="token number">0b0100000</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> RetryAfterError <span class="token operator">=</span> <span class="token comment">/*       */</span> <span class="token number">0b1000000</span><span class="token punctuation">;</span>

<span class="token comment">// ...</span>

<span class="token comment">// Describes where we are in the React execution stack</span>
<span class="token keyword">let</span> <span class="token literal-property property">executionContext</span><span class="token operator">:</span> ExecutionContext <span class="token operator">=</span> NoContext<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意: 和<code v-pre>lanes</code>的定义不同, <code v-pre>ExecutionContext</code>类型的变量, 在定义的时候采取的是 8 位二进制表示(因为变量的数量少, 8 位就够了, 没有必要写成 31 位).</p>
<p>使用(由于使用的地方较多, 所以举一个<a href="https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L517-L619" target="_blank" rel="noopener noreferrer">代表性强的例子<ExternalLinkIcon/></a>, <code v-pre>scheduleUpdateOnFiber</code> 函数是<code v-pre>react-reconciler</code>包对<code v-pre>react</code>包暴露出来的 api, 每一次更新都会调用, 所以比较特殊):</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// scheduleUpdateOnFiber函数中包含了好多关于executionContext的判断(都是使用位运算)</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">scheduleUpdateOnFiber</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">fiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">lane</span><span class="token operator">:</span> Lane<span class="token punctuation">,</span>
  <span class="token literal-property property">eventTime</span><span class="token operator">:</span> number<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> workInProgressRoot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断: executionContext 不包含 RenderContext</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      deferRenderPhaseUpdateToNextBatch <span class="token operator">||</span>
      <span class="token punctuation">(</span>executionContext <span class="token operator">&amp;</span> RenderContext<span class="token punctuation">)</span> <span class="token operator">===</span> NoContext
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>lane <span class="token operator">===</span> SyncLane<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token comment">// 判断: executionContext 包含 LegacyUnbatchedContext</span>
      <span class="token punctuation">(</span>executionContext <span class="token operator">&amp;</span> LegacyUnbatchedContext<span class="token punctuation">)</span> <span class="token operator">!==</span> NoContext <span class="token operator">&amp;&amp;</span>
      <span class="token comment">// 判断: executionContext 不包含 RenderContext或CommitContext</span>
      <span class="token punctuation">(</span>executionContext <span class="token operator">&amp;</span> <span class="token punctuation">(</span>RenderContext <span class="token operator">|</span> CommitContext<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">===</span> NoContext
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1" aria-hidden="true">#</a> 总结</h2>
<p>本节介绍了位运算的基本使用, 并列举了位运算在<code v-pre>react</code>源码中的高频应用. 在特定的情况下, 使用位运算不仅是提高运算速度, 且位掩码能简洁和清晰的表示出二进制变量之间的关系. 二进制变量虽然有优势, 但是缺点也很明显, 不够直观, 扩展性不好(在 js 当中的二进制变量, 除去符号位, 最多只能使用 31 位, 当变量的数量超过 31 位就需要组合, 此时就会变得复杂). 在阅读源码时, 我们需要了解二级制变量和位掩码的使用. 但在实际开发中, 需要视情况而定, 不能盲目使用.</p>
<h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>
<p><a href="https://www.ecma-international.org/ecma-262/5.1/#sec-11.10" target="_blank" rel="noopener noreferrer">ECMAScript® Language Specification(Standard ECMA-262 5.1 Edition) Binary Bitwise Operators<ExternalLinkIcon/></a></p>
<p><a href="https://www.ruanyifeng.com/blog/2010/06/ieee_floating-point_representation.html" target="_blank" rel="noopener noreferrer">浮点数的二进制表示<ExternalLinkIcon/></a></p>
<p><a href="https://zh.wikipedia.org/wiki/IEEE_754" target="_blank" rel="noopener noreferrer">IEEE 754<ExternalLinkIcon/></a></p>
</div></template>


