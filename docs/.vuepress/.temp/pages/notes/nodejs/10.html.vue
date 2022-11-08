<template><div><h1 id="_10-【express基本使用】" tabindex="-1"><a class="header-anchor" href="#_10-【express基本使用】" aria-hidden="true">#</a> 10 【Express基本使用】</h1>
<blockquote>
<p>https://www.expressjs.com.cn/</p>
</blockquote>
<p>基于 Node.js 平台，快速、开放、极简的 web 开发框架。</p>
<h2 id="_1-express的安装方式" tabindex="-1"><a class="header-anchor" href="#_1-express的安装方式" aria-hidden="true">#</a> 1.Express的安装方式</h2>
<p>Express的安装可直接使用npm包管理器上的项目，在安装npm之前可先安装淘宝镜像：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> cnpm <span class="token parameter variable">--registry</span><span class="token operator">=</span>https://registry.npmmirror.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样我们使用cnpm的来代替npm，这使得下载速度提高很多；其次你需要在你项目目录下运行以下指令来初始化npm，期间所有提示按enter键即可，这会生成package.json，它是用于描述项目文件的。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>cnpm init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再输入</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>cnpm install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这下项目目录中又会多出一个叫node_modules文件夹，里面是node.js为我们提供的模块，当然现在没有。接下来便是真正的安装express了，执行：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>cnpm install express --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这时，我们看到node_modules文件夹多了许多不同版本的应用文件夹，接下来执行</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>express --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看express是否安装成功，如果显示版本号，则安装正确。</p>
<p><img src="https://i0.hdslb.com/bfs/album/62c7b3ce419bd390b082314ccb8233e5b2cafa65.png" alt="image-20221103194431096"></p>
<h2 id="_2-运行原理" tabindex="-1"><a class="header-anchor" href="#_2-运行原理" aria-hidden="true">#</a> 2.运行原理</h2>
<p><strong>底层：http模块</strong></p>
<blockquote>
<p>Express框架建立在node.js内置的http模块上。http模块生成服务器的原始代码如下</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"http"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> app <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string-property property">"Content-Type"</span><span class="token operator">:</span> <span class="token string">"text/plain"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">"Hello world!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token string">"localhost"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Express框架的核心是对http模块的再包装。上面的代码用Express改写如下</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'Hello world!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Express框架等于在http模块之上，加了一个中间层</p>
</blockquote>
<p><strong>什么是中间件</strong></p>
<blockquote>
<ul>
<li>简单说，中间件（middleware）就是处理HTTP请求的函数。它最大的特点就是，一个中间件处理完，再传递给下一个中间件。App实例在运行过程中，会调用一系列的中间件</li>
<li>每个中间件可以从App实例，接收三个参数，依次为request对象（代表HTTP请求）、response对象（代表HTTP回应），next回调函数（代表下一个中间件）。每个中间件都可以对HTTP请求（request对象）进行加工，并且决定是否调用next方法，将request对象再传给下一个中间件。</li>
</ul>
</blockquote>
<ul>
<li>一个不进行任何操作、只传递<code v-pre>request</code>对象的中间件，就是下面这样</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">uselessMiddleware</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>上面代码的next就是下一个中间件。如果它带有参数，则代表抛出一个错误，参数为错误文本</li>
<li>抛出错误以后，后面的中间件将不再执行，直到发现一个错误处理函数为止</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">uselessMiddleware</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'出错了！'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-express-方法" tabindex="-1"><a class="header-anchor" href="#_3-express-方法" aria-hidden="true">#</a> 3.Express 方法</h2>
<p><strong>Express路由简介</strong></p>
<p>路由表示应用程序端点 (URI) 的定义以及响应客户端请求的方式。它包含一个请求方时（methods）、路径（path）和路由匹配时的函数（callback）;</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">methods</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Express路由方法</strong></p>
<p>Express方法源于 HTTP 方法之一，附加到 express 类的实例。它可请求的方法包括：</p>
<p>get、post、put、head、delete、options、trace、copy、lock、mkcol、move、purge、propfind、proppatch、unlock、report、mkactivity、checkout、merge、m-search、notify、subscribe、unsubscribe、patch、search 和 connect。</p>
<blockquote>
<p>路由是指如何定义应用的端点（URIs）以及如何响应客户端的请求。</p>
<p>路由是由一个 URI、HTTP 请求（GET、POST等）和若干个句柄组成，它的结构如下： app.METHOD(path, [callback...], callback)， app 是 express 对象的一个实例， METHOD 是一个 HTTP 请求方法， path 是服务器上的路径， callback 是当路由匹配时要执行的函数。</p>
</blockquote>
<p>下面是一个基本的路由示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// respond with "hello world" when a GET request is made to the homepage</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//写完一个send，后面所有跟路由有关的都不会执行</span>
  <span class="token comment">//会自动响应对应的数据类型</span>
  <span class="token comment">//   res.send([1, 2, 3]);</span>
  <span class="token comment">//   res.send({ ok: 1 });</span>
  <span class="token comment">//   res.json({ ok: 1 });</span>
   <span class="token comment">// 使用混合使用函数数组处理时如果前面有res.send();那么后面和路由处理相关代码都不生效</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'hello world'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        &lt;html>
            &lt;h1>hello world&lt;/h2>
        &lt;/html>
    </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>路由路径和请求方法一起定义了请求的端点，它可以是字符串、字符串模式或者正则表达式。</p>
<p><strong>all方法和HTTP动词方法</strong></p>
<blockquote>
<p>针对不同的请求，Express提供了use方法的一些别名。比如，上面代码也可以用别名的形式来写</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"express"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"http"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">"Content-Type"</span><span class="token operator">:</span> <span class="token string">"text/plain"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">"Welcome to the homepage!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/about"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">"Welcome to the about page!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">"404!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">1337</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<ul>
<li>上面代码的all方法表示，所有请求都必须通过该中间件，参数中的“*”表示对所有路径有效。get方法则是只有GET动词的HTTP请求通过该中间件，它的第一个参数是请求的路径。由于get方法的回调函数没有调用next方法，所以只要有一个中间件被调用了，后面的中间件就不会再被调用了</li>
<li>除了get方法以外，Express还提供post、put、delete方法，即HTTP动词都是Express的方法</li>
</ul>
</blockquote>
<ul>
<li>除了get方法以外，Express还提供post、put、delete方法，即HTTP动词都是Express的方法</li>
<li>这些方法的第一个参数，都是请求的路径。除了绝对匹配以外，Express允许模式匹配</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/hello/:who"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">"Hello, "</span> <span class="token operator">+</span> req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>who <span class="token operator">+</span> <span class="token string">"."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-路径匹配" tabindex="-1"><a class="header-anchor" href="#_4-路径匹配" aria-hidden="true">#</a> 4.路径匹配</h2>
<h3 id="_4-1-字符串路径" tabindex="-1"><a class="header-anchor" href="#_4-1-字符串路径" aria-hidden="true">#</a> 4.1 字符串路径</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 匹配根路径的请求</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 匹配 /about 路径的请求</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/about'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'about'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 匹配 /random.text 路径的请求</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/random.text'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'random.text'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-字符串模式路径" tabindex="-1"><a class="header-anchor" href="#_4-2-字符串模式路径" aria-hidden="true">#</a> 4.2 字符串模式路径</h3>
<p>使用字符串模式的路由路径示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 匹配 acd 和 abcd</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/ab?cd'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'ab?cd'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 匹配 abcd、abbcd、abbbcd等</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/ab+cd'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'ab+cd'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 匹配 abcd、abxcd、abRABDOMcd、ab123cd等</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/ab*cd'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'ab*cd'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 匹配 /abe 和 /abcde</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/ab(cd)?e'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'ab(cd)?e'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-正则表达式路径" tabindex="-1"><a class="header-anchor" href="#_4-3-正则表达式路径" aria-hidden="true">#</a> 4.3 正则表达式路径</h3>
<p>使用正则表达式的路由路径示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 匹配任何路径中含有 a 的路径：</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'/a/'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 匹配 butterfly、dragonfly，不匹配 butterflyman、dragonfly man等</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.*fly$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'/.*fly$/'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以为请求处理提供多个回调函数，其行为类似 中间件。唯一的区别是这些回调函数有可能调用 next('route') 方法而略过其他路由回调函数。可以利用该机制为路由定义前提条件，如果在现有路径上继续执行没有意义，则可将控制权交给剩下的路径。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/example/a'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'Hello from A!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用多个回调函数处理路由（记得指定 next 对象）：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/example/b'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'response will be sent by the next function ...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'Hello from B!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用回调函数数组处理路由：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">cb0</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'CB0'</span><span class="token punctuation">)</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token function-variable function">cb1</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'CB1'</span><span class="token punctuation">)</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token function-variable function">cb2</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'Hello from C!'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/example/c'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>cb0<span class="token punctuation">,</span> cb1<span class="token punctuation">,</span> cb2<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-response对象" tabindex="-1"><a class="header-anchor" href="#_5-response对象" aria-hidden="true">#</a> 5.response对象</h2>
<table>
<thead>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="http://www.expressjs.com.cn/en/4x/api.html#res.download" target="_blank" rel="noopener noreferrer">res.download()<ExternalLinkIcon/></a></td>
<td>提示要下载的文件。</td>
</tr>
<tr>
<td><a href="http://www.expressjs.com.cn/en/4x/api.html#res.end" target="_blank" rel="noopener noreferrer">res.end（）<ExternalLinkIcon/></a></td>
<td>结束响应过程。</td>
</tr>
<tr>
<td><a href="http://www.expressjs.com.cn/en/4x/api.html#res.json" target="_blank" rel="noopener noreferrer">res.json（）<ExternalLinkIcon/></a></td>
<td>发送JSON响应。</td>
</tr>
<tr>
<td><a href="http://www.expressjs.com.cn/en/4x/api.html#res.jsonp" target="_blank" rel="noopener noreferrer">res.jsonp（）<ExternalLinkIcon/></a></td>
<td>发送带有JSONP支持的JSON响应。</td>
</tr>
<tr>
<td><a href="http://www.expressjs.com.cn/en/4x/api.html#res.redirect" target="_blank" rel="noopener noreferrer">res.redirect（）<ExternalLinkIcon/></a></td>
<td>重定向请求。</td>
</tr>
<tr>
<td><a href="http://www.expressjs.com.cn/en/4x/api.html#res.render" target="_blank" rel="noopener noreferrer">res.render（）<ExternalLinkIcon/></a></td>
<td>渲染视图模板。</td>
</tr>
<tr>
<td><a href="http://www.expressjs.com.cn/en/4x/api.html#res.send" target="_blank" rel="noopener noreferrer">res.send（）<ExternalLinkIcon/></a></td>
<td>发送各种类型的响应。</td>
</tr>
<tr>
<td><a href="http://www.expressjs.com.cn/en/4x/api.html#res.sendFile" target="_blank" rel="noopener noreferrer">res.sendFile（）<ExternalLinkIcon/></a></td>
<td>将文件作为八位字节流发送。</td>
</tr>
<tr>
<td><a href="http://www.expressjs.com.cn/en/4x/api.html#res.sendStatus" target="_blank" rel="noopener noreferrer">res.sendStatus（）<ExternalLinkIcon/></a></td>
<td>设置响应状态代码，并将其字符串表示形式发送为响应正文。</td>
</tr>
</tbody>
</table>
<p>例：</p>
<p><strong>（1）response.redirect方法</strong></p>
<blockquote>
<p>response.redirect方法允许网址的重定向</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>response<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">"/hello/anime"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
response<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">"http://www.example.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
response<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token number">301</span><span class="token punctuation">,</span> <span class="token string">"http://www.example.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）response.sendFile方法</strong></p>
<blockquote>
<p>response.sendFile方法用于发送文件</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>response<span class="token punctuation">.</span><span class="token function">sendFile</span><span class="token punctuation">(</span><span class="token string">"/path/to/anime.mp4"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>（3）response.render方法</strong></p>
<blockquote>
<p>response.render方法用于渲染网页模板。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//  使用render方法，将message变量传入index模板，渲染成HTML网页</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  response<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">"index"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"Hello World"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-路线处理程序" tabindex="-1"><a class="header-anchor" href="#_6-路线处理程序" aria-hidden="true">#</a> 6.路线处理程序</h2>
<p>您可以提供行为类似于<a href="http://www.expressjs.com.cn/en/guide/using-middleware.html" target="_blank" rel="noopener noreferrer">中间件的<ExternalLinkIcon/></a>多个回调函数来处理请求。唯一的例外是这些回调可能会调用<code v-pre>next('route')</code>以绕过其余的路由回调。您可以使用此机制在路由上施加先决条件，然后在没有理由继续使用当前路由的情况下将控制权传递给后续路由。</p>
<p>多个回调函数可以处理一条路由（确保指定了<code v-pre>next</code>对象）。例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/example/b'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'the response will be sent by the next function ...'</span><span class="token punctuation">)</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'Hello from B!'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>混合使用函数和函数数组处理路由：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">fun1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 验证用户token过期, cookie过期</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'token验证'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> isValid <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isValid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">//将第一个中间件的数据传输到第二个中间件</span>
    res<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"dselegent"</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">fun2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'home'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/home'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>fun1<span class="token punctuation">,</span> fun2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/list'</span><span class="token punctuation">,</span> fun1<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'list'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-中间件" tabindex="-1"><a class="header-anchor" href="#_7-中间件" aria-hidden="true">#</a> 7.中间件</h2>
<p>Express 是一个自身功能极简，完全是由路由和中间件构成一个的 web 开发框架：从本质上来说，一个 Express 应用就是在调用各种中间件。</p>
<p>中间件（Middleware） 是一个函数，它可以访问请求对象（request object (req)）, 响应对象（response object (res)）, 和 web 应用中处于请求-响应循环流程中的中间件，一般被命名为 next 的变量。</p>
<p>中间件的功能包括：</p>
<ul>
<li>执行任何代码。</li>
<li>修改请求和响应对象。</li>
<li>终结请求-响应循环。</li>
<li>调用堆栈中的下一个中间件。</li>
</ul>
<p>如果当前中间件没有终结请求-响应循环，则必须调用 next() 方法将控制权交给下一个中间件，否则请求就会挂起。</p>
<p>Express 应用可使用如下几种中间件：</p>
<ul>
<li>应用级中间件</li>
<li>路由级中间件</li>
<li>错误处理中间件</li>
<li>内置中间件</li>
<li>第三方中间件</li>
</ul>
<p>使用可选则挂载路径，可在应用级别或路由级别装载中间件。另外，你还可以同时装在一系列中间件函数，从而在一个挂载点上创建一个子中间件栈。</p>
<h3 id="_7-1-应用级中间件" tabindex="-1"><a class="header-anchor" href="#_7-1-应用级中间件" aria-hidden="true">#</a> 7.1 应用级中间件</h3>
<p>应用级中间件绑定到 app 对象 使用 app.use() 和 app.METHOD()， 其中， METHOD 是需要处理的 HTTP 请求的方法，例如 GET, PUT, POST 等等，全部小写。例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> indexRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./route/indexRouter'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> LoginRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./route/LoginRouter'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//应用级别(后面的路由都会执行此中间件)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 验证用户token过期, cookie过期</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'token验证'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> isValid <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isValid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//应用级别(这里不写路径默认/)</span>
<span class="token comment">//这些use方法是每次访问都是从上往下执行</span>
<span class="token comment">//如果是/login/a,会先找到/login开头的这个应用级中间件</span>
<span class="token comment">//然后再进入这个中间件找/a</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>indexRouter<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">,</span> LoginRouter<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-路由级中间件" tabindex="-1"><a class="header-anchor" href="#_7-2-路由级中间件" aria-hidden="true">#</a> 7.2 路由级中间件</h3>
<h4 id="_7-2-1-app-route" tabindex="-1"><a class="header-anchor" href="#_7-2-1-app-route" aria-hidden="true">#</a> 7.2.1 app.route()</h4>
<p>您可以使用来为路由路径创建可链接的路由处理程序<code v-pre>app.route()</code>。由于路径是在单个位置指定的，因此创建模块化路由非常有帮助，减少冗余和错别字也很有帮助。有关路由的更多信息，请参见：<a href="http://www.expressjs.com.cn/en/4x/api.html#router" target="_blank" rel="noopener noreferrer">Router（）文档<ExternalLinkIcon/></a>。</p>
<p>这是使用定义的链式路由处理程序的示例<code v-pre>app.route()</code>。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">'/book'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">' Get a random book'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'Add a book'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'Update the book'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-2-2-快速路由器" tabindex="-1"><a class="header-anchor" href="#_7-2-2-快速路由器" aria-hidden="true">#</a> 7.2.2 快速路由器</h4>
<p>路由级中间件和应用级中间件一样，只是它绑定的对象为 <code v-pre>express.Router()</code>。</p>
<p>使用<code v-pre>express.Router</code>该类创建模块化的，可安装的路由处理程序。一个<code v-pre>Router</code>实例是一个完整的中间件和路由系统; 因此，它通常被称为“迷你应用程序”。</p>
<p>以下示例将路由器创建为模块，在其中加载中间件功能，定义一些路由，并将路由器模块安装在主应用程序的路径上。</p>
<p><code v-pre>home.js</code>在app目录中创建一个名为以下内容的路由器文件：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 没有挂载路径的中间件，通过该路由的每个请求都会执行该中间件</span>
router<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Time:'</span><span class="token punctuation">,</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 一个中间件栈，显示任何指向 /user/:id 的 HTTP 请求的信息</span>
router<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/user/:id'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Request URL:'</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>originalUrl<span class="token punctuation">)</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Request Type:'</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>method<span class="token punctuation">)</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 一个中间件栈，处理指向 /user/:id 的 GET 请求</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/user/:id'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果 user id 为 0, 跳到下一个路由</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'route'</span><span class="token punctuation">)</span>
  <span class="token comment">// 负责将控制权交给栈中下一个中间件</span>
  <span class="token keyword">else</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 渲染常规页面</span>
  res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">'regular'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 处理 /user/:id， 渲染一个特殊页面</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/user/:id'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">'special'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports<span class="token operator">=</span>  router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在应用程序中加载路由器模块：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> indexRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./home'</span><span class="token punctuation">)</span>
<span class="token comment">// ...</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/home'</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该应用程序现在将能够处理对<code v-pre>/home</code>和的请求<code v-pre>/home/user/123456</code></p>
<h4 id="_7-2-3-router-route方法" tabindex="-1"><a class="header-anchor" href="#_7-2-3-router-route方法" aria-hidden="true">#</a> 7.2.3 router.route方法</h4>
<blockquote>
<p>router实例对象的route方法，可以接受访问路径作为参数</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">'/api'</span><span class="token punctuation">)</span>
	<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// ...</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		Bear<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> bears</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
			res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>bears<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports<span class="token operator">=</span>  router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-错误处理中间件" tabindex="-1"><a class="header-anchor" href="#_7-3-错误处理中间件" aria-hidden="true">#</a> 7.3 错误处理中间件</h3>
<p>错误处理中间件和其他中间件定义类似，只是要使用 4 个参数，而不是 3 个，其签名如下： (err, req, res, next)。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//上面的中间件都没有匹配就会走这里</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>stack<span class="token punctuation">)</span>
     <span class="token comment">//send的状态码默认是200</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-4-内置的中间件" tabindex="-1"><a class="header-anchor" href="#_7-4-内置的中间件" aria-hidden="true">#</a> 7.4 内置的中间件</h3>
<p>express.static 是 Express 唯一内置的中间件。它基于 serve-static，负责在 Express 应用中提托管静态资源。每个应用可有多个静态目录。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'public'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'uploads'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'files'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-5-第三方中间件" tabindex="-1"><a class="header-anchor" href="#_7-5-第三方中间件" aria-hidden="true">#</a> 7.5 第三方中间件</h3>
<p>安装所需功能的 node 模块，并在应用中加载，可以在应用级加载，也可以在路由级加载。</p>
<p>下面的例子安装并加载了一个解析 cookie 的中间件： cookie-parser</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>$ npm install cookie<span class="token operator">-</span>parser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> cookieParser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'cookie-parser'</span><span class="token punctuation">)</span>

<span class="token comment">// 加载用于解析 cookie 的中间件</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cookieParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-获取参数" tabindex="-1"><a class="header-anchor" href="#_8-获取参数" aria-hidden="true">#</a> 8.获取参数</h2>
<h3 id="_8-1-req-query" tabindex="-1"><a class="header-anchor" href="#_8-1-req-query" aria-hidden="true">#</a> 8.1 req.query</h3>
<p>req.query()可以用来获取接口请求中拼接在链接&quot;?&quot;后边的参数，主要用于get请求，post请求也适用。
req.query()被express原生支持，并且会自动将参数转换为对象形式返回。
请求：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>http://localhost:5050/server?p<span class="token operator">=</span>user<span class="token operator">&amp;</span><span class="token assign-left variable">q</span><span class="token operator">=</span>password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>express接口:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> server <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/server'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>resp</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>query<span class="token punctuation">)</span><span class="token punctuation">;</span>
    resp<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">5050</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'服务器已就绪'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求后得到的结果：</p>
<p><img src="https://i0.hdslb.com/bfs/album/75af32b9b18f18c515720fea9909e2ee9e98123c.png" alt="image-20221103202150243"></p>
<h3 id="_8-2-req-params" tabindex="-1"><a class="header-anchor" href="#_8-2-req-params" aria-hidden="true">#</a> 8.2 req.params</h3>
<p>req.params()有些特殊，它适用于在url链接上传递数据参数，需要后台接口用==:变量名==的写法发起请求。</p>
<p>请求：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>http://localhost:5050/nums/1000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>express接口：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> server <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
server<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/nums/:num'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> resp</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
  resp<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">5050</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
	 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'服务器已就绪'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求后得到的结果：</p>
<p><img src="https://i0.hdslb.com/bfs/album/77d61a1ac0f8b8d16d34540bcf02f7bff28989c6.png" alt="image-20221103202245942"></p>
<h3 id="_8-3-req-body" tabindex="-1"><a class="header-anchor" href="#_8-3-req-body" aria-hidden="true">#</a> 8.3 req.body</h3>
<p>req.body()被原生express所支持,可以直接使用req.body()获取post请求的表单数据。</p>
<p>请求:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">fecth</span><span class="token punctuation">(</span><span class="token string">'http://localhost:5050/people'</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'post'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'zhangsan'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>express接口：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//配置解析post参数的-不用下载第三方 ,内置</span>
<span class="token comment">//解析post参数-(url-ky格式) username=kerwin&amp;password=1234</span>
<span class="token comment">// app.use(express.urlencoded({ extended: false }));</span>
<span class="token comment">//解析post参数-(json字符串) {name:"",age:100}</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
server<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/people'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> resp</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
  resp<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">5050</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'服务器已就绪'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://i0.hdslb.com/bfs/album/25cbb7ad14c21077add671c586e0f18f4a6c61b8.png" alt="image-20221103202743889"></p>
<h2 id="_9-利用-express-托管静态文件" tabindex="-1"><a class="header-anchor" href="#_9-利用-express-托管静态文件" aria-hidden="true">#</a> 9.利用 Express 托管静态文件</h2>
<p>通过 Express 内置的 express.static 可以方便地托管静态文件，例如图片、CSS、JavaScript 文件等。</p>
<p>将静态资源文件所在的目录作为参数传递给 express.static 中间件就可以提供静态资源文件的访问了。例如，假设在 public 目录放置了图片、CSS 和 JavaScript 文件，你就可以：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//直接将public里的index.html当成/的网页</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'public'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，public 目录下面的文件就可以访问了。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">3000</span><span class="token operator">/</span>images<span class="token operator">/</span>kitten<span class="token punctuation">.</span>jpg
<span class="token literal-property property">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">3000</span><span class="token operator">/</span>css<span class="token operator">/</span>style<span class="token punctuation">.</span>css
<span class="token literal-property property">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">3000</span><span class="token operator">/</span>js<span class="token operator">/</span>app<span class="token punctuation">.</span>js
<span class="token literal-property property">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">3000</span><span class="token operator">/</span>images<span class="token operator">/</span>bg<span class="token punctuation">.</span>png
<span class="token literal-property property">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">3000</span><span class="token operator">/</span>hello<span class="token punctuation">.</span>html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>所有文件的路径都是相对于存放目录的，因此，存放静态文件的目录名不会出现在 URL 中。</p>
</blockquote>
<p>如果你的静态资源存放在多个目录下面，你可以多次调用 express.static 中间件：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'public'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'files'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>访问静态资源文件时，express.static 中间件会根据目录添加的顺序查找所需的文件。</p>
<p>如果你希望所有通过 express.static 访问的文件都存放在一个“虚拟（virtual）”目录（即目录根本不存在）下面，可以通过为静态资源目录指定一个挂载路径的方式来实现，如下所示：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/static'</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'public'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在，你就可以通过带有 “/static” 前缀的地址来访问 public 目录下面的文件了。</p>
<div class="language-tex line-numbers-mode" data-ext="tex"><pre v-pre class="language-tex"><code>http://localhost:3000/static/images/kitten.jpg
http://localhost:3000/static/css/style.css
http://localhost:3000/static/js/app.js
http://localhost:3000/static/images/bg.png
http://localhost:3000/static/hello.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'public'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"/css/index.css"</span> <span class="token operator">/</span><span class="token operator">></span>
    
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/static'</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'public'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"/static/css/index.css"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


