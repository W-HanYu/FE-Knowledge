<template><div><h1 id="_9-date对象" tabindex="-1"><a class="header-anchor" href="#_9-date对象" aria-hidden="true">#</a> 9.Date对象</h1>
<p>掌握 Date 日期对象的使用，动态获取当前计算机的时间。</p>
<h2 id="_9-1-普通函数的用法" tabindex="-1"><a class="header-anchor" href="#_9-1-普通函数的用法" aria-hidden="true">#</a> 9.1 普通函数的用法</h2>
<p><code v-pre>Date</code>对象可以作为普通函数直接调用，返回一个代表当前时间的字符串。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// "Tue Dec 01 2021 09:34:43 GMT+0800 (CST)"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，即使带有参数，<code v-pre>Date</code>作为普通函数使用时，返回的还是当前时间。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">Date</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// "Tue Dec 01 2021 09:34:43 GMT+0800 (CST)"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码说明，无论有没有参数，直接调用<code v-pre>Date</code>总是返回当前时间。</p>
<h2 id="_9-2-构造函数的用法" tabindex="-1"><a class="header-anchor" href="#_9-2-构造函数的用法" aria-hidden="true">#</a> 9.2 构造函数的用法</h2>
<p><code v-pre>Date</code>还可以当作构造函数使用。对它使用<code v-pre>new</code>命令，会返回一个<code v-pre>Date</code>对象的实例。如果不加参数，实例代表的就是当前时间。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> today <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>Date</code>实例有一个独特的地方。其他对象求值的时候，都是默认调用<code v-pre>.valueOf()</code>方法，但是<code v-pre>Date</code>实例求值的时候，默认调用的是<code v-pre>toString()</code>方法。这导致对<code v-pre>Date</code>实例求值，返回的是一个字符串，代表该实例对应的时间。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> today <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

today
<span class="token comment">// "Tue Dec 01 2021 09:34:43 GMT+0800 (CST)"</span>

<span class="token comment">// 等同于</span>
today<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// "Tue Dec 01 2021 09:34:43 GMT+0800 (CST)"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>today</code>是<code v-pre>Date</code>的实例，直接求值等同于调用<code v-pre>toString</code>方法。</p>
<p>作为构造函数时，<code v-pre>Date</code>对象可以接受多种格式的参数，返回一个该参数对应的时间实例。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 参数为时间零点开始计算的毫秒数</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">1378218728000</span><span class="token punctuation">)</span>
<span class="token comment">// Tue Sep 03 2013 22:32:08 GMT+0800 (CST)</span>

<span class="token comment">// 参数为日期字符串</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'January 6, 2013'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Sun Jan 06 2013 00:00:00 GMT+0800 (CST)</span>

<span class="token comment">// 参数为多个整数，</span>
<span class="token comment">// 代表年、月、日、小时、分钟、秒、毫秒</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2013</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)</span>

<span class="token keyword">var</span> d3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2020-06-01'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	
<span class="token comment">// 算时区，中国为东八区</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d3<span class="token punctuation">)</span><span class="token punctuation">;</span>	
<span class="token comment">// Mon Jun 01 2020 08:00:00 GMT+0800 (中国标准时间)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于<code v-pre>Date</code>构造函数的参数，有几点说明。</p>
<p>第一点，参数可以是负整数，代表1970年元旦之前的时间。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1378218728000</span><span class="token punctuation">)</span>
<span class="token comment">// Fri Apr 30 1926 17:27:52 GMT+0800 (CST)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>第二点，只要是能被<code v-pre>Date.parse()</code>方法解析的字符串，都可以当作参数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2013-2-15'</span><span class="token punctuation">)</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2013/2/15'</span><span class="token punctuation">)</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'02/15/2013'</span><span class="token punctuation">)</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2013-FEB-15'</span><span class="token punctuation">)</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'FEB, 15, 2013'</span><span class="token punctuation">)</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'FEB 15, 2013'</span><span class="token punctuation">)</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'February, 15, 2013'</span><span class="token punctuation">)</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'February 15, 2013'</span><span class="token punctuation">)</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'15 Feb 2013'</span><span class="token punctuation">)</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'15, February, 2013'</span><span class="token punctuation">)</span>
<span class="token comment">// Fri Feb 15 2013 00:00:00 GMT+0800 (CST)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面多种日期字符串的写法，返回的都是同一个时间。</p>
<p>第三，参数为年、月、日等多个整数时，年和月是不能省略的，其他参数都可以省略的。也就是说，这时至少需要两个参数，因为如果只使用“年”这一个参数，<code v-pre>Date</code>会将其解释为毫秒数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2013</span><span class="token punctuation">)</span>
<span class="token comment">// Thu Jan 01 1970 08:00:02 GMT+0800 (CST)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，2013被解释为毫秒数，而不是年份。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2013</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2013</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2013</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2013</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，不管有几个参数，返回的都是2013年1月1日零点。</p>
<p>最后，各个参数的取值范围如下。</p>
<ul>
<li>年：使用四位数年份，比如<code v-pre>2000</code>。如果写成两位数或个位数，则加上<code v-pre>1900</code>，即<code v-pre>10</code>代表1910年。如果是负数，表示公元前。</li>
<li>月：<code v-pre>0</code>表示一月，依次类推，<code v-pre>11</code>表示12月。</li>
<li>日：<code v-pre>1</code>到<code v-pre>31</code>。</li>
<li>小时：<code v-pre>0</code>到<code v-pre>23</code>。</li>
<li>分钟：<code v-pre>0</code>到<code v-pre>59</code>。</li>
<li>秒：<code v-pre>0</code>到<code v-pre>59</code></li>
<li>毫秒：<code v-pre>0</code>到<code v-pre>999</code>。</li>
</ul>
<p>注意，月份从<code v-pre>0</code>开始计算，但是，天数从<code v-pre>1</code>开始计算。另外，除了日期的默认值为<code v-pre>1</code>，小时、分钟、秒钟和毫秒的默认值都是<code v-pre>0</code>。</p>
<p>这些参数如果超出了正常范围，会被自动折算。比如，如果月设为<code v-pre>15</code>，就折算为下一年的4月。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2013</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span>
<span class="token comment">// Tue Apr 01 2014 00:00:00 GMT+0800 (CST)</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2013</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// Mon Dec 31 2012 00:00:00 GMT+0800 (CST)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码的第二个例子，日期设为<code v-pre>0</code>，就代表上个月的最后一天。</p>
<p>参数还可以使用负数，表示扣去的时间。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2013</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// Sat Dec 01 2012 00:00:00 GMT+0800 (CST)</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2013</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// Sun Dec 30 2012 00:00:00 GMT+0800 (CST)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，分别对月和日使用了负数，表示从基准日扣去相应的时间。</p>
<h2 id="_9-3-日期的运算" tabindex="-1"><a class="header-anchor" href="#_9-3-日期的运算" aria-hidden="true">#</a> 9.3 日期的运算</h2>
<p>类型自动转换时，<code v-pre>Date</code>实例如果转为数值，则等于对应的毫秒数；如果转为字符串，则等于对应的日期字符串。所以，两个日期实例对象进行减法运算时，返回的是它们间隔的毫秒数；进行加法运算时，返回的是两个字符串连接而成的新字符串。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> d1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> d2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

d2 <span class="token operator">-</span> d1
<span class="token comment">// 2678400000</span>
d2 <span class="token operator">+</span> d1
<span class="token comment">// "Sat Apr 01 2000 00:00:00 GMT+0800 (CST)Wed Mar 01 2000 00:00:00 GMT+0800 (</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-4-时间戳" tabindex="-1"><a class="header-anchor" href="#_9-4-时间戳" aria-hidden="true">#</a> 9.4 时间戳</h2>
<ul>
<li>时间戳表示 1970 年 1 月 1 日 零点整距离某时刻的毫秒数</li>
<li>通过 getTime() 方法或者 Date.parse() 函数可以将日期对象变为时间戳</li>
<li>通过 new Date(时间戳) 的写法，可以将时间戳变为日期对象</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 日期对象</span>
<span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 显示时间戳的两种方式</span>
<span class="token keyword">var</span> timestamp1 <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// 精确到毫秒</span>
<span class="token keyword">var</span> timestamp2 <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 精确到秒，也是毫秒数，只不过最后三位一定是 000</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>timestamp1<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 1644661417729</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>timestamp2<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 1644661417000</span>

<span class="token comment">// 将时间戳变为日期对象</span>
<span class="token keyword">var</span> dd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">1644661417000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dd<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// 2022-02-12T10:23:37.000Z</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>获取时间戳的方法，分别为 new Date().getTime() 和 Date.now() 和  +new Date()</strong></p>
<h2 id="_9-5-日期对象的常见的方法" tabindex="-1"><a class="header-anchor" href="#_9-5-日期对象的常见的方法" aria-hidden="true">#</a> 9.5 日期对象的常见的方法</h2>
<h3 id="_9-5-1-date-prototype-valueof" tabindex="-1"><a class="header-anchor" href="#_9-5-1-date-prototype-valueof" aria-hidden="true">#</a> 9.5.1 Date.prototype.valueOf()</h3>
<p><code v-pre>Date</code>的实例对象，有几十个自己的方法，除了<code v-pre>valueOf</code>和<code v-pre>toString</code>，可以分为以下三类。</p>
<ul>
<li><code v-pre>to</code>类：从<code v-pre>Date</code>对象返回一个字符串，表示指定的时间。</li>
<li><code v-pre>get</code>类：获取<code v-pre>Date</code>对象的日期和时间。</li>
<li><code v-pre>set</code>类：设置<code v-pre>Date</code>对象的日期和时间。</li>
</ul>
<p><code v-pre>valueOf</code>方法返回实例对象距离时间零点（1970年1月1日00:00:00 UTC）对应的毫秒数，该方法等同于<code v-pre>getTime</code>方法。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

d<span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 1362790014817</span>
d<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 1362790014817</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>预期为数值的场合，<code v-pre>Date</code>实例会自动调用该方法，所以可以用下面的方法计算时间的间隔。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> start <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
<span class="token keyword">var</span> end <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> elapsed <span class="token operator">=</span> end <span class="token operator">-</span> start<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-5-2-to-类方法" tabindex="-1"><a class="header-anchor" href="#_9-5-2-to-类方法" aria-hidden="true">#</a> 9.5.2 to 类方法</h3>
<blockquote>
<p><strong>常用</strong></p>
<ul>
<li>
<p><code v-pre>toString()</code>将日期时间转换为普通字符串</p>
</li>
<li>
<p><code v-pre>toUTCString()</code>将日期时间转换为世界时间（UTC）格式的字符串</p>
</li>
<li>
<p><code v-pre>toLocaleString()</code>将日期时间时间戳转换为本地时间格式的字符串</p>
</li>
</ul>
</blockquote>
<p><strong>（1）Date.prototype.toString()</strong></p>
<p><code v-pre>toString</code>方法返回一个完整的日期字符串。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2013</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

d<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// "Tue Jan 01 2013 00:00:00 GMT+0800 (CST)"</span>
d
<span class="token comment">// "Tue Jan 01 2013 00:00:00 GMT+0800 (CST)"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为<code v-pre>toString</code>是默认的调用方法，所以如果直接读取<code v-pre>Date</code>实例，就相当于调用这个方法。</p>
<p><strong>（2）Date.prototype.toUTCString()</strong></p>
<p><code v-pre>toUTCString</code>方法返回对应的 UTC 时间，也就是比北京时间晚8个小时。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2013</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

d<span class="token punctuation">.</span><span class="token function">toUTCString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// "Mon, 31 Dec 2012 16:00:00 GMT"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）Date.prototype.toISOString()</strong></p>
<p><code v-pre>toISOString</code>方法返回对应时间的 ISO8601 写法。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2013</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

d<span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// "2012-12-31T16:00:00.000Z"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，<code v-pre>toISOString</code>方法返回的总是 UTC 时区的时间。</p>
<p><strong>（4）Date.prototype.toJSON()</strong></p>
<p><code v-pre>toJSON</code>方法返回一个符合 JSON 格式的 ISO 日期字符串，与<code v-pre>toISOString</code>方法的返回结果完全相同。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2013</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

d<span class="token punctuation">.</span><span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// "2012-12-31T16:00:00.000Z"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（5）Date.prototype.toDateString()</strong></p>
<p><code v-pre>toDateString</code>方法返回日期字符串（不含小时、分和秒）。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2013</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
d<span class="token punctuation">.</span><span class="token function">toDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// "Tue Jan 01 2013"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（6）Date.prototype.toTimeString()</strong></p>
<p><code v-pre>toTimeString</code>方法返回时间字符串（不含年月日）。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2013</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
d<span class="token punctuation">.</span><span class="token function">toTimeString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// "00:00:00 GMT+0800 (CST)"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（7）本地时间</strong></p>
<p>以下三种方法，可以将 Date 实例转为表示本地时间的字符串。</p>
<ul>
<li><code v-pre>Date.prototype.toLocaleString()</code>：完整的本地时间。</li>
<li><code v-pre>Date.prototype.toLocaleDateString()</code>：本地日期（不含小时、分和秒）。</li>
<li><code v-pre>Date.prototype.toLocaleTimeString()</code>：本地时间（不含年月日）。</li>
</ul>
<p>下面是用法实例。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2013</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

d<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 中文版浏览器为"2013年1月1日 上午12:00:00"</span>
<span class="token comment">// 英文版浏览器为"1/1/2013 12:00:00 AM"</span>

d<span class="token punctuation">.</span><span class="token function">toLocaleDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 中文版浏览器为"2013年1月1日"</span>
<span class="token comment">// 英文版浏览器为"1/1/2013"</span>

d<span class="token punctuation">.</span><span class="token function">toLocaleTimeString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 中文版浏览器为"上午12:00:00"</span>
<span class="token comment">// 英文版浏览器为"12:00:00 AM"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这三个方法都有两个可选的参数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>dateObj<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">[</span>locales<span class="token punctuation">[</span><span class="token punctuation">,</span> options<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
dateObj<span class="token punctuation">.</span><span class="token function">toLocaleDateString</span><span class="token punctuation">(</span><span class="token punctuation">[</span>locales<span class="token punctuation">[</span><span class="token punctuation">,</span> options<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
dateObj<span class="token punctuation">.</span><span class="token function">toLocaleTimeString</span><span class="token punctuation">(</span><span class="token punctuation">[</span>locales<span class="token punctuation">[</span><span class="token punctuation">,</span> options<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这两个参数中，<code v-pre>locales</code>是一个指定所用语言的字符串，<code v-pre>options</code>是一个配置对象。下面是<code v-pre>locales</code>的例子，分别采用<code v-pre>en-US</code>和<code v-pre>zh-CN</code>语言设定。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2013</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

d<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token string">'en-US'</span><span class="token punctuation">)</span> <span class="token comment">// "1/1/2013, 12:00:00 AM"</span>
d<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token string">'zh-CN'</span><span class="token punctuation">)</span> <span class="token comment">// "2013/1/1 上午12:00:00"</span>

d<span class="token punctuation">.</span><span class="token function">toLocaleDateString</span><span class="token punctuation">(</span><span class="token string">'en-US'</span><span class="token punctuation">)</span> <span class="token comment">// "1/1/2013"</span>
d<span class="token punctuation">.</span><span class="token function">toLocaleDateString</span><span class="token punctuation">(</span><span class="token string">'zh-CN'</span><span class="token punctuation">)</span> <span class="token comment">// "2013/1/1"</span>

d<span class="token punctuation">.</span><span class="token function">toLocaleTimeString</span><span class="token punctuation">(</span><span class="token string">'en-US'</span><span class="token punctuation">)</span> <span class="token comment">// "12:00:00 AM"</span>
d<span class="token punctuation">.</span><span class="token function">toLocaleTimeString</span><span class="token punctuation">(</span><span class="token string">'zh-CN'</span><span class="token punctuation">)</span> <span class="token comment">// "上午12:00:00"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>options</code>配置对象有以下属性。</p>
<ul>
<li><code v-pre>dateStyle</code>：可能的值为<code v-pre>full</code>、<code v-pre>long</code>、<code v-pre>medium</code>、<code v-pre>short</code>。</li>
<li><code v-pre>timeStyle</code>：可能的值为<code v-pre>full</code>、<code v-pre>long</code>、<code v-pre>medium</code>、<code v-pre>short</code>。</li>
<li><code v-pre>month</code>：可能的值为<code v-pre>numeric</code>、<code v-pre>2-digit</code>、<code v-pre>long</code>、<code v-pre>short</code>、<code v-pre>narrow</code>。</li>
<li><code v-pre>year</code>：可能的值为<code v-pre>numeric</code>、<code v-pre>2-digit</code>。</li>
<li><code v-pre>weekday</code>：可能的值为<code v-pre>long</code>、<code v-pre>short</code>、<code v-pre>narrow</code>。</li>
<li><code v-pre>day</code>、<code v-pre>hour</code>、<code v-pre>minute</code>、<code v-pre>second</code>：可能的值为<code v-pre>numeric</code>、<code v-pre>2-digit</code>。</li>
<li><code v-pre>timeZone</code>：可能的值为 IANA 的时区数据库。</li>
<li><code v-pre>timeZoneName</code>：可能的值为<code v-pre>long</code>、<code v-pre>short</code>。</li>
<li><code v-pre>hour12</code>：24小时周期还是12小时周期，可能的值为<code v-pre>true</code>、<code v-pre>false</code>。</li>
</ul>
<p>下面是用法实例。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2013</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

d<span class="token punctuation">.</span><span class="token function">toLocaleDateString</span><span class="token punctuation">(</span><span class="token string">'en-US'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">weekday</span><span class="token operator">:</span> <span class="token string">'long'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">'numeric'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">month</span><span class="token operator">:</span> <span class="token string">'long'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">day</span><span class="token operator">:</span> <span class="token string">'numeric'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// "Tuesday, January 1, 2013"</span>

d<span class="token punctuation">.</span><span class="token function">toLocaleDateString</span><span class="token punctuation">(</span><span class="token string">'en-US'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">day</span><span class="token operator">:</span> <span class="token string">"2-digit"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">month</span><span class="token operator">:</span> <span class="token string">"long"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">"2-digit"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// "January 01, 13"</span>

d<span class="token punctuation">.</span><span class="token function">toLocaleTimeString</span><span class="token punctuation">(</span><span class="token string">'en-US'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">timeZone</span><span class="token operator">:</span> <span class="token string">'UTC'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeZoneName</span><span class="token operator">:</span> <span class="token string">'short'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// "4:00:00 PM UTC"</span>

d<span class="token punctuation">.</span><span class="token function">toLocaleTimeString</span><span class="token punctuation">(</span><span class="token string">'en-US'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">timeZone</span><span class="token operator">:</span> <span class="token string">'Asia/Shanghai'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeZoneName</span><span class="token operator">:</span> <span class="token string">'long'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// "12:00:00 AM China Standard Time"</span>

d<span class="token punctuation">.</span><span class="token function">toLocaleTimeString</span><span class="token punctuation">(</span><span class="token string">'en-US'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">hour12</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// "00:00:00"</span>

d<span class="token punctuation">.</span><span class="token function">toLocaleTimeString</span><span class="token punctuation">(</span><span class="token string">'en-US'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">hour12</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// "12:00:00 AM"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-5-3-get-类方法" tabindex="-1"><a class="header-anchor" href="#_9-5-3-get-类方法" aria-hidden="true">#</a> 9.5.3 get 类方法</h3>
<p><code v-pre>Date</code>对象提供了一系列<code v-pre>get*</code>方法，用来获取实例对象某个方面的值。</p>
<ul>
<li><code v-pre>getTime()</code>：返回实例距离1970年1月1日00:00:00的毫秒数，等同于<code v-pre>valueOf</code>方法。</li>
<li><code v-pre>getDate()</code>：返回实例对象对应每个月的几号（从1开始）。</li>
<li><code v-pre>getDay()</code>：返回星期几，星期日为0，星期一为1，以此类推。</li>
<li><code v-pre>getFullYear()</code>：返回四位的年份。</li>
<li><code v-pre>getMonth()</code>：返回月份（0表示1月，11表示12月）。</li>
<li><code v-pre>getHours()</code>：返回小时（0-23）。</li>
<li><code v-pre>getMilliseconds()</code>：返回毫秒（0-999）。</li>
<li><code v-pre>getMinutes()</code>：返回分钟（0-59）。</li>
<li><code v-pre>getSeconds()</code>：返回秒（0-59）。</li>
<li><code v-pre>getTimezoneOffset()</code>：返回当前时间与 UTC 的时区差异，以分钟表示，返回结果考虑到了夏令时因素。</li>
</ul>
<p>所有这些<code v-pre>get</code>方法返回的都是整数，不同方法返回值的范围不一样。</p>
<ul>
<li>分钟和秒：0 到 59</li>
<li>小时：0 到 23</li>
<li>星期：0（星期天）到 6（星期六）</li>
<li>日期：1 到 31</li>
<li>月份：0（一月）到 11（十二月）</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'January 6, 2013'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

d<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 6</span>
d<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
d<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 2013</span>
d<span class="token punctuation">.</span><span class="token function">getTimezoneOffset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// -480</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，最后一行返回<code v-pre>-480</code>，即 UTC 时间减去当前时间，单位是分钟。<code v-pre>-480</code>表示 UTC 比当前时间少480分钟，即当前时区比 UTC 早8个小时。</p>
<p>下面是一个例子，计算本年度还剩下多少天。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">leftDays</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> today <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> endYear <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>today<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">,</span> <span class="token number">999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> msPerDay <span class="token operator">=</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token punctuation">(</span>endYear<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> today<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> msPerDay<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这些<code v-pre>get*方法返回的都是当前时区的时间，</code>Date`对象还提供了这些方法对应的 UTC 版本，用来返回 UTC 时间。</p>
<ul>
<li><code v-pre>getUTCDate()</code></li>
<li><code v-pre>getUTCFullYear()</code></li>
<li><code v-pre>getUTCMonth()</code></li>
<li><code v-pre>getUTCDay()</code></li>
<li><code v-pre>getUTCHours()</code></li>
<li><code v-pre>getUTCMinutes()</code></li>
<li><code v-pre>getUTCSeconds()</code></li>
<li><code v-pre>getUTCMilliseconds()</code></li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>var d = new Date('January 6, 2013');

d.getDate() // 6
d.getUTCDate() // 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，实例对象<code v-pre>d</code>表示当前时区（东八时区）的1月6日0点0分0秒，这个时间对于当前时区来说是1月6日，所以<code v-pre>getDate</code>方法返回6，对于 UTC 时区来说是1月5日，所以<code v-pre>getUTCDate</code>方法返回5。</p>
<h3 id="_9-5-4-set-类方法" tabindex="-1"><a class="header-anchor" href="#_9-5-4-set-类方法" aria-hidden="true">#</a> 9.5.4 set 类方法</h3>
<p><code v-pre>Date</code>对象提供了一系列<code v-pre>set</code>方法，用来设置实例对象的各个方面。</p>
<ul>
<li><code v-pre>setDate(date)</code>：设置实例对象对应的每个月的几号（1-31），返回改变后毫秒时间戳。</li>
<li><code v-pre>setFullYear(year [, month, date])</code>：设置四位年份。</li>
<li><code v-pre>setHours(hour [, min, sec, ms])</code>：设置小时（0-23）。</li>
<li><code v-pre>setMilliseconds(ms)</code>：设置毫秒（0-999）。</li>
<li><code v-pre>setMinutes(min [, sec, ms])</code>：设置分钟（0-59）。</li>
<li><code v-pre>setMonth(month [, date])</code>：设置月份（0-11）。</li>
<li><code v-pre>setSeconds(sec [, ms])</code>：设置秒（0-59）。</li>
<li><code v-pre>setTime(milliseconds)</code>：设置毫秒时间戳。</li>
</ul>
<p>这些方法基本是跟<code v-pre>get*</code>方法一一对应的，但是没有<code v-pre>setDay</code>方法，因为星期几是计算出来的，而不是设置的。另外，需要注意的是，凡是涉及到设置月份，都是从0开始算的，即<code v-pre>0</code>是1月，<code v-pre>11</code>是12月。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span> <span class="token punctuation">(</span><span class="token string">'January 6, 2013'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

d <span class="token comment">// Sun Jan 06 2013 00:00:00 GMT+0800 (CST)</span>
d<span class="token punctuation">.</span><span class="token function">setDate</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span> <span class="token comment">// 1357660800000</span>
d <span class="token comment">// Wed Jan 09 2013 00:00:00 GMT+0800 (CST)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>set</code>方法的参数都会自动折算。以<code v-pre>setDate()</code>为例，如果参数超过当月的最大天数，则向下一个月顺延，如果参数是负数，表示从上个月的最后一天开始减去的天数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> d1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'January 6, 2013'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

d1<span class="token punctuation">.</span><span class="token function">setDate</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span> <span class="token comment">// 1359648000000</span>
d1 <span class="token comment">// Fri Feb 01 2013 00:00:00 GMT+0800 (CST)</span>

<span class="token keyword">var</span> d2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span> <span class="token punctuation">(</span><span class="token string">'January 6, 2013'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

d2<span class="token punctuation">.</span><span class="token function">setDate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 1356796800000</span>
d2 <span class="token comment">// Sun Dec 30 2012 00:00:00 GMT+0800 (CST)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>d1.setDate(32)</code>将日期设为1月份的32号，因为1月份只有31号，所以自动折算为2月1日。<code v-pre>d2.setDate(-1)</code>表示设为上个月的倒数第二天，即12月30日。</p>
<p><code v-pre>set</code>类方法和<code v-pre>get</code>类方法，可以结合使用，得到相对时间。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 将日期向后推1000天</span>
d<span class="token punctuation">.</span><span class="token function">setDate</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 将时间设为6小时后</span>
d<span class="token punctuation">.</span><span class="token function">setHours</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 将年份设为去年</span>
d<span class="token punctuation">.</span><span class="token function">setFullYear</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>set*</code>系列方法除了<code v-pre>setTime()</code>，都有对应的 UTC 版本，即设置 UTC 时区的时间。</p>
<ul>
<li><code v-pre>setUTCDate()</code></li>
<li><code v-pre>setUTCFullYear()</code></li>
<li><code v-pre>setUTCHours()</code></li>
<li><code v-pre>setUTCMilliseconds()</code></li>
<li><code v-pre>setUTCMinutes()</code></li>
<li><code v-pre>setUTCMonth()</code></li>
<li><code v-pre>setUTCSeconds()</code></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'January 6, 2013'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
d<span class="token punctuation">.</span><span class="token function">getUTCHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 16</span>
d<span class="token punctuation">.</span><span class="token function">setUTCHours</span><span class="token punctuation">(</span><span class="token number">22</span><span class="token punctuation">)</span> <span class="token comment">// 1357423200000</span>
d <span class="token comment">// Sun Jan 06 2013 06:00:00 GMT+0800 (CST)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，本地时区（东八时区）的1月6日0点0分，是 UTC 时区的前一天下午16点。设为 UTC 时区的22点以后，就变为本地时区的上午6点。</p>
</div></template>


