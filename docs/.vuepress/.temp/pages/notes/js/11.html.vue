<template><div><h1 id="_13-json-对象" tabindex="-1"><a class="header-anchor" href="#_13-json-对象" aria-hidden="true">#</a> 13.JSON 对象</h1>
<h2 id="_13-1-json-格式" tabindex="-1"><a class="header-anchor" href="#_13-1-json-格式" aria-hidden="true">#</a> 13.1 JSON 格式</h2>
<p>JSON 格式（JavaScript Object Notation 的缩写）是一种用于数据交换的文本格式，2001年由 Douglas Crockford 提出，目的是取代繁琐笨重的 XML 格式。</p>
<p>相比 XML 格式，JSON 格式有两个显著的优点：书写简单，一目了然；符合 JavaScript 原生语法，可以由解释引擎直接处理，不用另外添加解析代码。所以，JSON 迅速被接受，已经成为各大网站交换数据的标准格式，并被写入标准。</p>
<p>每个 JSON 对象就是一个值，可能是一个数组或对象，也可能是一个原始类型的值。总之，只能是一个值，不能是两个或更多的值。</p>
<p>JSON 对值的类型和格式有严格的规定。</p>
<blockquote>
<ol>
<li>复合类型的值只能是数组或对象，不能是函数、正则表达式对象、日期对象。</li>
<li>原始类型的值只有四种：字符串、数值（必须以十进制表示）、布尔值和<code v-pre>null</code>（不能使用<code v-pre>NaN</code>, <code v-pre>Infinity</code>, <code v-pre>-Infinity</code>和<code v-pre>undefined</code>）。</li>
<li>字符串必须使用双引号表示，不能使用单引号。</li>
<li>对象的键名必须放在双引号里面。</li>
<li>数组或对象最后一个成员的后面，不能加逗号。</li>
</ol>
</blockquote>
<p>以下都是合法的 JSON。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">"one"</span><span class="token punctuation">,</span> <span class="token string">"two"</span><span class="token punctuation">,</span> <span class="token string">"three"</span><span class="token punctuation">]</span>

<span class="token punctuation">{</span> <span class="token string-property property">"one"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">"two"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string-property property">"three"</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span>

<span class="token punctuation">{</span><span class="token string-property property">"names"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"张三"</span><span class="token punctuation">,</span> <span class="token string">"李四"</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>

<span class="token punctuation">[</span> <span class="token punctuation">{</span> <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"张三"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"李四"</span><span class="token punctuation">}</span> <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下都是不合法的 JSON。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"张三"</span><span class="token punctuation">,</span> <span class="token string-property property">'age'</span><span class="token operator">:</span> <span class="token number">32</span> <span class="token punctuation">}</span>  <span class="token comment">// 属性名必须使用双引号</span>

<span class="token punctuation">[</span><span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">128</span><span class="token punctuation">,</span> <span class="token number">0xFFF</span><span class="token punctuation">]</span> <span class="token comment">// 不能使用十六进制值</span>

<span class="token punctuation">{</span> <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"张三"</span><span class="token punctuation">,</span> <span class="token string-property property">"age"</span><span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token punctuation">}</span> <span class="token comment">// 不能使用 undefined</span>

<span class="token punctuation">{</span> <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"张三"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"birthday"</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'Fri, 26 Aug 2011 07:13:10 GMT'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token string-property property">"getName"</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token comment">// 属性值不能使用函数和日期对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，<code v-pre>null</code>、空数组和空对象都是合法的 JSON 值。</p>
<p><strong>JSON 对象的方法</strong></p>
<p><code v-pre>JSON</code>对象是 JavaScript 的原生对象，用来处理 JSON 格式数据。它有两个静态方法：<code v-pre>JSON.stringify()</code>和<code v-pre>JSON.parse()</code>。</p>
<h2 id="_13-2-json-stringify" tabindex="-1"><a class="header-anchor" href="#_13-2-json-stringify" aria-hidden="true">#</a> 13.2 JSON.stringify()</h2>
<h3 id="_13-2-1-基本用法" tabindex="-1"><a class="header-anchor" href="#_13-2-1-基本用法" aria-hidden="true">#</a> 13.2.1 基本用法</h3>
<p><code v-pre>JSON.stringify()</code>方法用于将一个值转为 JSON 字符串。该字符串符合 JSON 格式，并且可以被<code v-pre>JSON.parse()</code>方法还原。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">)</span> <span class="token comment">// ""abc""</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// "1"</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// "false"</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// "[]"</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// "{}"</span>

<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"false"</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// '[1,"false",false]'</span>

<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"张三"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// '{"name":"张三"}'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码将各种类型的值，转成 JSON 字符串。</p>
<p>注意，对于原始类型的字符串，转换结果会带双引号。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">"foo"</span> <span class="token comment">// false</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">"\"foo\""</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，字符串<code v-pre>foo</code>，被转成了<code v-pre>&quot;\&quot;foo\&quot;&quot;</code>。这是因为将来还原的时候，内层双引号可以让 JavaScript 引擎知道，这是一个字符串，而不是其他类型的值。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// "false"</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token string">'false'</span><span class="token punctuation">)</span> <span class="token comment">// "\"false\""</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，如果不是内层的双引号，将来还原的时候，引擎就无法知道原始值是布尔值还是字符串。</p>
<p>如果对象的属性是<code v-pre>undefined</code>、函数或 XML 对象，该属性会被<code v-pre>JSON.stringify()</code>过滤。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token function-variable function">b</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// "{}"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，对象<code v-pre>obj</code>的<code v-pre>a</code>属性是<code v-pre>undefined</code>，而<code v-pre>b</code>属性是一个函数，结果都被<code v-pre>JSON.stringify</code>过滤。</p>
<p>如果数组的成员是<code v-pre>undefined</code>、函数或 XML 对象，则这些值被转成<code v-pre>null</code>。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">// "[null,null]"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，数组<code v-pre>arr</code>的成员是<code v-pre>undefined</code>和函数，它们都被转成了<code v-pre>null</code>。</p>
<p>正则对象会被转成空对象。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">foo</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span> <span class="token comment">// "{}"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>JSON.stringify()</code>方法会忽略对象的不可遍历的属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token string-property property">'foo'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">'bar'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "{"foo":1}"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>bar</code>是<code v-pre>obj</code>对象的不可遍历属性，<code v-pre>JSON.stringify</code>方法会忽略这个属性。</p>
<h3 id="_13-2-2-第二个参数" tabindex="-1"><a class="header-anchor" href="#_13-2-2-第二个参数" aria-hidden="true">#</a> 13.2.2 第二个参数</h3>
<p><code v-pre>JSON.stringify()</code>方法还可以接受一个数组，作为第二个参数，指定参数对象的哪些属性需要转成字符串。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">'prop1'</span><span class="token operator">:</span> <span class="token string">'value1'</span><span class="token punctuation">,</span>
  <span class="token string-property property">'prop2'</span><span class="token operator">:</span> <span class="token string">'value2'</span><span class="token punctuation">,</span>
  <span class="token string-property property">'prop3'</span><span class="token operator">:</span> <span class="token string">'value3'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> selectedProperties <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'prop1'</span><span class="token punctuation">,</span> <span class="token string">'prop2'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> selectedProperties<span class="token punctuation">)</span>
<span class="token comment">// "{"prop1":"value1","prop2":"value2"}"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>JSON.stringify()</code>方法的第二个参数指定，只转<code v-pre>prop1</code>和<code v-pre>prop2</code>两个属性。</p>
<p>这个类似白名单的数组，只对对象的属性有效，对数组无效。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'0'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// "["a","b"]"</span>

<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token operator">:</span> <span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token string">'b'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'0'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// "{"0":"a"}"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，第二个参数指定 JSON 格式只转<code v-pre>0</code>号属性，实际上对数组是无效的，只对对象有效。</p>
<p>第二个参数还可以是一个函数，用来更改<code v-pre>JSON.stringify()</code>的返回值。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">"number"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    value <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span>
<span class="token comment">// '{"a": 2,"b": 4}'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中的<code v-pre>f</code>函数，接受两个参数，分别是被转换的对象的键名和键值。如果键值是数值，就将它乘以<code v-pre>2</code>，否则就原样返回。</p>
<p>注意，这个处理函数是递归处理所有的键。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"["</span><span class="token operator">+</span> key <span class="token operator">+</span><span class="token string">"]:"</span> <span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> f<span class="token punctuation">)</span>
<span class="token comment">// []:[object Object]</span>
<span class="token comment">// [a]:[object Object]</span>
<span class="token comment">// [b]:1</span>
<span class="token comment">// '{"a":{"b":1}}'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，对象<code v-pre>obj</code>一共会被<code v-pre>f</code>函数处理三次，输出的最后那行是<code v-pre>JSON.stringify()</code>的默认输出。第一次键名为空，键值是整个对象<code v-pre>obj</code>；第二次键名为<code v-pre>a</code>，键值是<code v-pre>{b: 1}</code>；第三次键名为<code v-pre>b</code>，键值为1。</p>
<p>递归处理中，每一次处理的对象，都是前一次返回的值。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">'object'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> value <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> f<span class="token punctuation">)</span>
<span class="token comment">// "{"b": 4}"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>f</code>函数修改了对象<code v-pre>obj</code>，接着<code v-pre>JSON.stringify()</code>方法就递归处理修改后的对象<code v-pre>obj</code>。</p>
<p>如果处理函数返回<code v-pre>undefined</code>或没有返回值，则该属性会被忽略。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">"string"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">"abc"</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span>
<span class="token comment">// '{"b": 123}'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>a</code>属性经过处理后，返回<code v-pre>undefined</code>，于是该属性被忽略了。</p>
<h3 id="_13-2-3-第三个参数" tabindex="-1"><a class="header-anchor" href="#_13-2-3-第三个参数" aria-hidden="true">#</a> 13.2.3 第三个参数</h3>
<p><code v-pre>JSON.stringify()</code>还可以接受第三个参数，用于增加返回的 JSON 字符串的可读性。</p>
<p>默认返回的是单行字符串，对于大型的 JSON 对象，可读性非常差。第三个参数使得每个属性单独占据一行，并且将每个属性前面添加指定的前缀（不超过10个字符）。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 默认输出</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">p1</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">p2</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// JSON.stringify({ p1: 1, p2: 2 })</span>

<span class="token comment">// 分行输出</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">p1</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">p2</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">'\t'</span><span class="token punctuation">)</span>
<span class="token comment">// {</span>
<span class="token comment">// 	"p1": 1,</span>
<span class="token comment">// 	"p2": 2</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，第三个属性<code v-pre>\t</code>在每个属性前面添加一个制表符，然后分行显示。</p>
<p>第三个属性如果是一个数字，则表示每个属性前面添加的空格（最多不超过10个）。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">p1</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">p2</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
"{
  "p1": 1,
  "p2": 2
}"
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-3-json-parse" tabindex="-1"><a class="header-anchor" href="#_13-3-json-parse" aria-hidden="true">#</a> 13.3 JSON.parse()</h2>
<p><code v-pre>JSON.parse()</code>方法用于将 JSON 字符串转换成对应的值。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">'{}'</span><span class="token punctuation">)</span> <span class="token comment">// {}</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">'true'</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">'"foo"'</span><span class="token punctuation">)</span> <span class="token comment">// "foo"</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">'[1, 5, "false"]'</span><span class="token punctuation">)</span> <span class="token comment">// [1, 5, "false"]</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">'null'</span><span class="token punctuation">)</span> <span class="token comment">// null</span>

<span class="token keyword">var</span> o <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">'{"name": "张三"}'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
o<span class="token punctuation">.</span>name <span class="token comment">// 张三</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果传入的字符串不是有效的 JSON 格式，<code v-pre>JSON.parse()</code>方法将报错。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">"'String'"</span><span class="token punctuation">)</span> <span class="token comment">// illegal single quotes</span>
<span class="token comment">// SyntaxError: Unexpected token ILLEGAL</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，双引号字符串中是一个单引号字符串，因为单引号字符串不符合 JSON 格式，所以报错。</p>
<p>为了处理解析错误，可以将<code v-pre>JSON.parse()</code>方法放在<code v-pre>try...catch</code>代码块中。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">"'String'"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'parsing error'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>JSON.parse()</code>方法可以接受一个处理函数，作为第二个参数，用法与<code v-pre>JSON.stringify()</code>方法类似。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">'a'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> value <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">'{"a": 1, "b": 2}'</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span>
<span class="token comment">// {a: 11, b: 2}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>JSON.parse()</code>的第二个参数是一个函数，如果键名是<code v-pre>a</code>，该函数会将键值加上10。</p>
<h1 id="_14-json5" tabindex="-1"><a class="header-anchor" href="#_14-json5" aria-hidden="true">#</a> 14.JSON5</h1>
<p>JSON 格式可以说是目前最流行的数据传输格式了，被广泛应用于前后端通信，尤其是在 SPA 应用中，JSON 数据通过 HTTP 协议进行传输，具有体积小、易序列化、可读性好等优点。（当然，这些优点是相对的，例如体积小是相对于 XML 而言的，如果跟 protobuf 比，那体积就大多了。）
JSON 虽好，但是仍有两大痛点让开发者苦恼不已：</p>
<ul>
<li>不能添加注释（这个不能忍）</li>
<li>序列化之后的 key 被加上了双引号（体积变大了）</li>
</ul>
<h2 id="_14-1-json如何添加注释" tabindex="-1"><a class="header-anchor" href="#_14-1-json如何添加注释" aria-hidden="true">#</a> 14.1 JSON如何添加注释</h2>
<p>目前的标准是不能添加注释，如果想添加的话，只能曲线救国了，例如我是这么干的：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
 <span class="token property">"----------base----------"</span><span class="token operator">:</span> <span class="token string">"通用模块变量定义"</span><span class="token punctuation">,</span>
 <span class="token property">"common"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
 <span class="token property">"object_not_exit"</span><span class="token operator">:</span> <span class="token string">"对象 ${id} 不存在！"</span><span class="token punctuation">,</span>
 <span class="token property">"invalid_username_or_password"</span><span class="token operator">:</span> <span class="token string">"用户名或密码错误！"</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token property">"----------sms----------"</span><span class="token operator">:</span> <span class="token string">"短信模块相关变量"</span><span class="token punctuation">,</span>
 <span class="token property">"sms"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
 <span class="token property">"template_missing_parameters"</span><span class="token operator">:</span> <span class="token string">"模板缺少变量！"</span><span class="token punctuation">,</span>
 <span class="token property">"param_length_limit"</span><span class="token operator">:</span> <span class="token string">"参数超出长度限制！"</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结下来一般有下面三种方法：</p>
<p>1、使用约定的 key 作为注释字段：
如以 //， _comment，#####，—--— (# 或 - 的个数自定) 作为注释的 key 等。</p>
<p>2、使用重名 key 作为注释：
即每个 key，使用两次，第1次做注释，第2次做实际属性。</p>
<p>3、使用字段 key 加前缀做注释 key：
常用的前缀有 #, _ 等。</p>
<h2 id="_14-2-能否去掉-key-中的双引号" tabindex="-1"><a class="header-anchor" href="#_14-2-能否去掉-key-中的双引号" aria-hidden="true">#</a> 14.2 能否去掉 key 中的双引号</h2>
<p>序列化之后的 key 被加上了双引号，例如：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>const obj = <span class="token punctuation">{</span> name<span class="token operator">:</span> 'keliq'<span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">12</span> <span class="token punctuation">}</span>
console.log(JSON.stringify(obj))
<span class="token comment">// {"name":"keliq","age":12}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>仔细观察可以发现，对象的 key 是没有双引号的，但是序列化之后，两边都被加上了引号，导致字符数量变多了，那问题就来了：</p>
<ul>
<li>为什么要给 key 加双引号？</li>
<li>能不能去掉 key 里面的双引号？</li>
</ul>
<p>这里先说一个历史背景：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>在 ECMAScript <span class="token number">3</span> 中，保留字是不能作为对象的 key 的，例如：
<span class="token punctuation">{</span>function<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">}</span> <span class="token comment">// 语法错误</span>
<span class="token punctuation">{</span>if<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">}</span> <span class="token comment">// 语法错误</span>
<span class="token punctuation">{</span><span class="token boolean">true</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">}</span> <span class="token comment">// 语法错误</span>

只能给 key 添加双引号或单引号：
<span class="token punctuation">{</span><span class="token property">"function"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">}</span> <span class="token comment">// Ok</span>
<span class="token punctuation">{</span><span class="token property">"if"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">}</span> <span class="token comment">// Ok</span>
<span class="token punctuation">{</span><span class="token property">"true"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">}</span> <span class="token comment">// Ok</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是在 ES5 之后，保留字也是可以作为 key 的了，因此在不考虑向后兼容的情况下，如果能把 JSON 对象表示成跟 JavaScript 对象一模一样，只是把中间的空格、换行等删掉该多好呀！</p>
<h2 id="_14-3-json5-解决了什么问题" tabindex="-1"><a class="header-anchor" href="#_14-3-json5-解决了什么问题" aria-hidden="true">#</a> 14.3 JSON5 解决了什么问题？</h2>
<ul>
<li>
<p>你想要的，它都有！这就是 <a href="https://json5.org/" target="_blank" rel="noopener noreferrer">JSON5 <ExternalLinkIcon/></a>标准，它有以下特性：</p>
<p><strong>对象</strong></p>
<p>对象的 key 可以跟 JavaScript 中对象 key 完全一致
末尾可以有一个逗号</p>
<p><strong>数组</strong></p>
<p>末尾可以有一个逗号</p>
<p><strong>字符串</strong></p>
<ul>
<li>字符串可以用单引号</li>
<li>字符串可以用反引号</li>
<li>字符串可以用转义字符</li>
</ul>
<p><strong>数字</strong></p>
<ul>
<li>数字可以是 16 进制</li>
<li>数字可以用点开头或结尾</li>
<li>数字可以表示正无穷、负无穷和NaN.</li>
<li>数字可以用加号开头</li>
</ul>
<p><strong>注释</strong></p>
<p>支持单行和多行注释</p>
<p><strong>空格</strong></p>
<p>允许多余的空格</p>
</li>
</ul>
<p><strong>可以看到，JSON5 比 JSON 强大很多，是 JSON 的超集，就好比 TypeScript 相较于 JavaScript。</strong></p>
<h2 id="_14-4-json5的使用" tabindex="-1"><a class="header-anchor" href="#_14-4-json5的使用" aria-hidden="true">#</a> 14.4 JSON5的使用</h2>
<p>使用 Node.js 环境，通过一个简单示例，展示JSON5的使用方式以及新的功能。</p>
<ol>
<li>
<p>新建文件test.js</p>
</li>
<li>
<p>安装 json5</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> json5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<p><code v-pre>test.js</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">JSON5</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'json5'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// comments</span>
    <span class="token comment">/* 
        multi 
        comments
    */</span>
    <span class="token literal-property property">unquoted</span><span class="token operator">:</span> <span class="token string">'and you can quote me on that'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">singleQuotes</span><span class="token operator">:</span> <span class="token string">'I can use "double quotes" here'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lineBreaks</span><span class="token operator">:</span> <span class="token string">"Look, Mom! \
  No \\n's!"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hexadecimal</span><span class="token operator">:</span> <span class="token number">0xdecaf</span><span class="token punctuation">,</span>
    <span class="token literal-property property">leadingDecimalPoint</span><span class="token operator">:</span> <span class="token number">.8675309</span><span class="token punctuation">,</span> <span class="token literal-property property">andTrailing</span><span class="token operator">:</span> <span class="token number">8675309.</span><span class="token punctuation">,</span>
    <span class="token literal-property property">positiveSign</span><span class="token operator">:</span> <span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">'in objects'</span><span class="token punctuation">,</span> <span class="token literal-property property">andIn</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'arrays'</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"backwardsCompatible"</span><span class="token operator">:</span> <span class="token string">"with JSON"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token constant">JSON5</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"***************************"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON5</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">/* 输出结果如下：

{unquoted:'and you can quote me on that',singleQuotes:'I can use "double quotes" here',lineBreaks:"Look, Mom!   No \\n's!",hexadecimal:912559,leadingDecimalPoint:0.8675309,andTrailing:8675309,positiveSign:1,trailingComma:'in objects',andIn:['arrays'],backwardsCompatible:'with JSON'}
***************************
{
  unquoted: 'and you can quote me on that',
  singleQuotes: 'I can use "double quotes" here',
  lineBreaks: "Look, Mom!   No \\n's!",
  hexadecimal: 912559,
  leadingDecimalPoint: 0.8675309,
  andTrailing: 8675309,
  positiveSign: 1,
  trailingComma: 'in objects',
  andIn: [ 'arrays' ],
  backwardsCompatible: 'with JSON'
}

*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">node</span> test.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


