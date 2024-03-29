<template><div><h1 id="history对象和location对象" tabindex="-1"><a class="header-anchor" href="#history对象和location对象" aria-hidden="true">#</a> History对象和Location对象</h1>
<h1 id="_1-history-对象概述" tabindex="-1"><a class="header-anchor" href="#_1-history-对象概述" aria-hidden="true">#</a> 1.History 对象概述</h1>
<p><code v-pre>window.history</code>属性指向 History 对象，它表示当前窗口的浏览历史。</p>
<p>History 对象保存了当前窗口访问过的所有页面网址。下面代码表示当前窗口一共访问过3个网址。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>history<span class="token punctuation">.</span>length <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于安全原因，浏览器不允许脚本读取这些地址，但是允许在地址之间导航。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 后退到前一个网址</span>
history<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 等同于</span>
history<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浏览器工具栏的“前进”和“后退”按钮，其实就是对 History 对象进行操作。</p>
<h1 id="_2-history-对象方法" tabindex="-1"><a class="header-anchor" href="#_2-history-对象方法" aria-hidden="true">#</a> 2.History 对象方法</h1>
<h2 id="_2-1-history-back-、history-forward-、history-go" tabindex="-1"><a class="header-anchor" href="#_2-1-history-back-、history-forward-、history-go" aria-hidden="true">#</a> 2.1 History.back()、History.forward()、History.go()</h2>
<p>这三个方法用于在历史之中移动。</p>
<ul>
<li><code v-pre>History.back()</code>：移动到上一个网址，等同于点击浏览器的后退键。对于第一个访问的网址，该方法无效果。</li>
<li><code v-pre>History.forward()</code>：移动到下一个网址，等同于点击浏览器的前进键。对于最后一个访问的网址，该方法无效果。</li>
<li><code v-pre>History.go()</code>：接受一个整数作为参数，以当前网址为基准，移动到参数指定的网址，比如<code v-pre>go(1)</code>相当于<code v-pre>forward()</code>，<code v-pre>go(-1)</code>相当于<code v-pre>back()</code>。如果参数超过实际存在的网址范围，该方法无效果；如果不指定参数，默认参数为<code v-pre>0</code>，相当于刷新当前页面。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>history<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
history<span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
history<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>history.go(0)</code>相当于刷新当前页面。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>history<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 刷新当前页面</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意，移动到以前访问过的页面时，页面通常是从浏览器缓存之中加载，而不是重新要求服务器发送新的网页。</p>
<h1 id="_3-location-对象属性" tabindex="-1"><a class="header-anchor" href="#_3-location-对象属性" aria-hidden="true">#</a> 3.Location 对象属性</h1>
<p><code v-pre>Location</code>对象是浏览器提供的原生对象，提供 URL 相关的信息和操作方法。通过<code v-pre>window.location</code>和<code v-pre>document.location</code>属性，可以拿到这个对象。</p>
<p><code v-pre>Location</code>对象提供以下属性。</p>
<ul>
<li><code v-pre>Location.href</code>：整个 URL。</li>
<li><code v-pre>Location.protocol</code>：当前 URL 的协议，包括冒号（<code v-pre>:</code>）。</li>
<li><code v-pre>Location.host</code>：主机。如果端口不是协议默认的<code v-pre>80</code>和<code v-pre>433</code>，则还会包括冒号（<code v-pre>:</code>）和端口。</li>
<li><code v-pre>Location.hostname</code>：主机名，不包括端口。</li>
<li><code v-pre>Location.port</code>：端口号。</li>
<li><code v-pre>Location.pathname</code>：URL 的路径部分，从根路径<code v-pre>/</code>开始。</li>
<li><code v-pre>Location.search</code>：查询字符串部分，从问号<code v-pre>?</code>开始。</li>
<li><code v-pre>Location.hash</code>：片段字符串部分，从<code v-pre>#</code>开始。</li>
<li><code v-pre>Location.username</code>：域名前面的用户名。</li>
<li><code v-pre>Location.password</code>：域名前面的密码。</li>
<li><code v-pre>Location.origin</code>：URL 的协议、主机名和端口。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 当前网址为</span>
<span class="token comment">// http://user:passwd@www.example.com:4097/path/a.html?x=111#part1</span>
document<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href
<span class="token comment">// "http://user:passwd@www.example.com:4097/path/a.html?x=111#part1"</span>
document<span class="token punctuation">.</span>location<span class="token punctuation">.</span>protocol
<span class="token comment">// "http:"</span>
document<span class="token punctuation">.</span>location<span class="token punctuation">.</span>host
<span class="token comment">// "www.example.com:4097"</span>
document<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hostname
<span class="token comment">// "www.example.com"</span>
document<span class="token punctuation">.</span>location<span class="token punctuation">.</span>port
<span class="token comment">// "4097"</span>
document<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname
<span class="token comment">// "/path/a.html"</span>
document<span class="token punctuation">.</span>location<span class="token punctuation">.</span>search
<span class="token comment">// "?x=111"</span>
document<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash
<span class="token comment">// "#part1"</span>
document<span class="token punctuation">.</span>location<span class="token punctuation">.</span>username
<span class="token comment">// "user"</span>
document<span class="token punctuation">.</span>location<span class="token punctuation">.</span>password
<span class="token comment">// "passwd"</span>
document<span class="token punctuation">.</span>location<span class="token punctuation">.</span>origin
<span class="token comment">// "http://user:passwd@www.example.com:4097"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些属性里面，只有<code v-pre>origin</code>属性是只读的，其他属性都可写。</p>
<p>注意，如果对<code v-pre>Location.href</code>写入新的 URL 地址，浏览器会立刻跳转到这个新地址。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 跳转到新网址</span>
document<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">'http://www.example.com'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个特性常常用于让网页自动滚动到新的锚点。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">'#top'</span><span class="token punctuation">;</span>
<span class="token comment">// 等同于</span>
document<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash <span class="token operator">=</span> <span class="token string">'#top'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接改写<code v-pre>location</code>，相当于写入<code v-pre>href</code>属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span>location <span class="token operator">=</span> <span class="token string">'http://www.example.com'</span><span class="token punctuation">;</span>
<span class="token comment">// 等同于</span>
document<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">'http://www.example.com'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，<code v-pre>Location.href</code>属性是浏览器唯一允许跨域写入的属性，即非同源的窗口可以改写另一个窗口（比如子窗口与父窗口）的<code v-pre>Location.href</code>属性，导致后者的网址跳转。<code v-pre>Location</code>的其他属性都不允许跨域写入。</p>
<h1 id="_4-location-对象方法" tabindex="-1"><a class="header-anchor" href="#_4-location-对象方法" aria-hidden="true">#</a> 4.Location 对象方法</h1>
<p><strong>（1）Location.assign()</strong></p>
<p><code v-pre>assign</code>方法接受一个 URL 字符串作为参数，使得浏览器立刻跳转到新的 URL。如果参数不是有效的 URL 字符串，则会报错。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 跳转到新的网址</span>
document<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token string">'http://www.example.com'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）Location.replace()</strong></p>
<p><code v-pre>replace</code>方法接受一个 URL 字符串作为参数，使得浏览器立刻跳转到新的 URL。如果参数不是有效的 URL 字符串，则会报错。</p>
<p>它与<code v-pre>assign</code>方法的差异在于，<code v-pre>replace</code>会在浏览器的浏览历史<code v-pre>History</code>里面删除当前网址，也就是说，一旦使用了该方法，后退按钮就无法回到当前网页了，相当于在浏览历史里面，使用新的 URL 替换了老的 URL。它的一个应用是，当脚本发现当前是移动设备时，就立刻跳转到移动版网页。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 跳转到新的网址</span>
document<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'http://www.example.com'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）Location.reload()</strong></p>
<p><code v-pre>reload</code>方法使得浏览器重新加载当前网址，相当于按下浏览器的刷新按钮。</p>
<p>它接受一个布尔值作为参数。如果参数为<code v-pre>true</code>，浏览器将向服务器重新请求这个网页，并且重新加载后，网页将滚动到头部（即<code v-pre>scrollTop === 0</code>）。如果参数是<code v-pre>false</code>或为空，浏览器将从本地缓存重新加载该网页，并且重新加载后，网页的视口位置是重新加载前的位置。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 向服务器重新请求当前网址</span>
window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（4）Location.toString()</strong></p>
<p><code v-pre>toString</code>方法返回整个 URL 字符串，相当于读取<code v-pre>Location.href</code>属性。</p>
<h1 id="_5-url-的编码和解码" tabindex="-1"><a class="header-anchor" href="#_5-url-的编码和解码" aria-hidden="true">#</a> 5.URL 的编码和解码</h1>
<p>网页的 URL 只能包含合法的字符。合法字符分成两类。</p>
<ul>
<li>URL 元字符：分号（<code v-pre>;</code>），逗号（<code v-pre>,</code>），斜杠（<code v-pre>/</code>），问号（<code v-pre>?</code>），冒号（<code v-pre>:</code>），at（<code v-pre>@</code>），<code v-pre>&amp;</code>，等号（<code v-pre>=</code>），加号（<code v-pre>+</code>），美元符号（<code v-pre>$</code>），井号（<code v-pre>#</code>）</li>
<li>语义字符：<code v-pre>a-z</code>，<code v-pre>A-Z</code>，<code v-pre>0-9</code>，连词号（<code v-pre>-</code>），下划线（<code v-pre>_</code>），点（<code v-pre>.</code>），感叹号（<code v-pre>!</code>），波浪线（<code v-pre>~</code>），星号（<code v-pre>*</code>），单引号（<code v-pre>'</code>），圆括号（<code v-pre>()</code>）</li>
</ul>
<p>除了以上字符，其他字符出现在 URL 之中都必须转义，规则是根据操作系统的默认编码，将每个字节转为百分号（<code v-pre>%</code>）加上两个大写的十六进制字母。</p>
<p>比如，UTF-8 的操作系统上，<code v-pre>http://www.example.com/q=春节</code>这个 URL 之中，汉字“春节”不是 URL 的合法字符，所以被浏览器自动转成<code v-pre>http://www.example.com/q=%E6%98%A5%E8%8A%82</code>。其中，“春”转成了<code v-pre>%E6%98%A5</code>，“节”转成了<code v-pre>%E8%8A%82</code>。这是因为“春”和“节”的 UTF-8 编码分别是<code v-pre>E6 98 A5</code>和<code v-pre>E8 8A 82</code>，将每个字节前面加上百分号，就构成了 URL 编码。</p>
<p>JavaScript 提供四个 URL 的编码/解码方法。</p>
<ul>
<li><code v-pre>encodeURI()</code></li>
<li><code v-pre>encodeURIComponent()</code></li>
<li><code v-pre>decodeURI()</code></li>
<li><code v-pre>decodeURIComponent()</code></li>
</ul>
<h2 id="_5-1-encodeuri" tabindex="-1"><a class="header-anchor" href="#_5-1-encodeuri" aria-hidden="true">#</a> 5.1 encodeURI()</h2>
<p><code v-pre>encodeURI()</code>方法用于转码整个 URL。它的参数是一个字符串，代表整个 URL。它会将元字符和语义字符之外的字符，都进行转义。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">encodeURI</span><span class="token punctuation">(</span><span class="token string">'http://www.example.com/q=春节'</span><span class="token punctuation">)</span>
<span class="token comment">// "http://www.example.com/q=%E6%98%A5%E8%8A%82"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-2-encodeuricomponent" tabindex="-1"><a class="header-anchor" href="#_5-2-encodeuricomponent" aria-hidden="true">#</a> 5.2 encodeURIComponent()</h2>
<p><code v-pre>encodeURIComponent()</code>方法用于转码 URL 的组成部分，会转码除了语义字符之外的所有字符，即元字符也会被转码。所以，它不能用于转码整个 URL。它接受一个参数，就是 URL 的片段。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token string">'春节'</span><span class="token punctuation">)</span>
<span class="token comment">// "%E6%98%A5%E8%8A%82"</span>
<span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token string">'http://www.example.com/q=春节'</span><span class="token punctuation">)</span>
<span class="token comment">// "http%3A%2F%2Fwww.example.com%2Fq%3D%E6%98%A5%E8%8A%82"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>encodeURIComponent()</code>会连 URL 元字符一起转义，所以如果转码整个 URL 就会出错。</p>
<h2 id="_5-3-decodeuri" tabindex="-1"><a class="header-anchor" href="#_5-3-decodeuri" aria-hidden="true">#</a> 5.3 decodeURI()</h2>
<p><code v-pre>decodeURI()</code>方法用于整个 URL 的解码。它是<code v-pre>encodeURI()</code>方法的逆运算。它接受一个参数，就是转码后的 URL。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">decodeURI</span><span class="token punctuation">(</span><span class="token string">'http://www.example.com/q=%E6%98%A5%E8%8A%82'</span><span class="token punctuation">)</span>
<span class="token comment">// "http://www.example.com/q=春节"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-4-decodeuricomponent" tabindex="-1"><a class="header-anchor" href="#_5-4-decodeuricomponent" aria-hidden="true">#</a> 5.4 decodeURIComponent()</h2>
<p><code v-pre>decodeURIComponent()</code>用于URL 片段的解码。它是<code v-pre>encodeURIComponent()</code>方法的逆运算。它接受一个参数，就是转码后的 URL 片段。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">decodeURIComponent</span><span class="token punctuation">(</span><span class="token string">'%E6%98%A5%E8%8A%82'</span><span class="token punctuation">)</span>
<span class="token comment">// "春节"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


