<template><div><h1 id="节点集合" tabindex="-1"><a class="header-anchor" href="#节点集合" aria-hidden="true">#</a> 节点集合</h1>
<h1 id="_23-nodelist-接口" tabindex="-1"><a class="header-anchor" href="#_23-nodelist-接口" aria-hidden="true">#</a> 23.NodeList 接口</h1>
<h2 id="_23-1-概述" tabindex="-1"><a class="header-anchor" href="#_23-1-概述" aria-hidden="true">#</a> 23.1 概述</h2>
<p><code v-pre>NodeList</code>实例是一个类似数组的对象，它的成员是节点对象。通过以下方法可以得到<code v-pre>NodeList</code>实例。</p>
<ul>
<li><code v-pre>Node.childNodes</code></li>
<li><code v-pre>document.querySelectorAll()</code>等节点搜索方法</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>childNodes <span class="token keyword">instanceof</span> <span class="token class-name">NodeList</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>NodeList</code>实例很像数组，可以使用<code v-pre>length</code>属性和<code v-pre>forEach</code>方法。但是，它不是数组，不能使用<code v-pre>pop</code>或<code v-pre>push</code>之类数组特有的方法。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> children <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>childNodes<span class="token punctuation">;</span>

Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token comment">// false</span>

children<span class="token punctuation">.</span>length <span class="token comment">// 34</span>
children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，NodeList 实例<code v-pre>children</code>不是数组，但是具有<code v-pre>length</code>属性和<code v-pre>forEach</code>方法。</p>
<p>如果<code v-pre>NodeList</code>实例要使用数组方法，可以将其转为真正的数组。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> children <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>childNodes<span class="token punctuation">;</span>
<span class="token keyword">var</span> nodeArr <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>除了使用<code v-pre>forEach</code>方法遍历 NodeList 实例，还可以使用<code v-pre>for</code>循环。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> children <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>childNodes<span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> children<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> item <span class="token operator">=</span> children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，NodeList 实例可能是动态集合，也可能是静态集合。所谓动态集合就是一个活的集合，DOM 删除或新增一个相关节点，都会立刻反映在 NodeList 实例。目前，只有<code v-pre>Node.childNodes</code>返回的是一个动态集合，其他的 NodeList 都是静态集合。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> children <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>childNodes<span class="token punctuation">;</span>
children<span class="token punctuation">.</span>length <span class="token comment">// 18</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
children<span class="token punctuation">.</span>length <span class="token comment">// 19</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，文档增加一个子节点，NodeList 实例<code v-pre>children</code>的<code v-pre>length</code>属性就增加了1。</p>
<h2 id="_23-2-nodelist-prototype-length" tabindex="-1"><a class="header-anchor" href="#_23-2-nodelist-prototype-length" aria-hidden="true">#</a> 23.2 NodeList.prototype.length</h2>
<p><code v-pre>length</code>属性返回 NodeList 实例包含的节点数量。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'xxx'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length
<span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>document.querySelectorAll</code>返回一个 NodeList 集合。对于那些不存在的 HTML 标签，<code v-pre>length</code>属性返回<code v-pre>0</code>。</p>
<h2 id="_23-3-nodelist-prototype-foreach" tabindex="-1"><a class="header-anchor" href="#_23-3-nodelist-prototype-foreach" aria-hidden="true">#</a> 23.3 NodeList.prototype.forEach()</h2>
<p><code v-pre>forEach</code>方法用于遍历 NodeList 的所有成员。它接受一个回调函数作为参数，每一轮遍历就执行一次这个回调函数，用法与数组实例的<code v-pre>forEach</code>方法完全一致。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> children <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>childNodes<span class="token punctuation">;</span>
children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> i<span class="token punctuation">,</span> list</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，回调函数<code v-pre>f</code>的三个参数依次是当前成员、位置和当前 NodeList 实例。<code v-pre>forEach</code>方法的第二个参数，用于绑定回调函数内部的<code v-pre>this</code>，该参数可省略。</p>
<h2 id="_23-4-nodelist-prototype-item" tabindex="-1"><a class="header-anchor" href="#_23-4-nodelist-prototype-item" aria-hidden="true">#</a> 23.4 NodeList.prototype.item()</h2>
<p><code v-pre>item</code>方法接受一个整数值作为参数，表示成员的位置，返回该位置上的成员。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>childNodes<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>item(0)</code>返回第一个成员。</p>
<p>如果参数值大于实际长度，或者索引不合法（比如负数），<code v-pre>item</code>方法返回<code v-pre>null</code>。如果省略参数，<code v-pre>item</code>方法会报错。</p>
<p>所有类似数组的对象，都可以使用方括号运算符取出成员。一般情况下，都是使用方括号运算符，而不使用<code v-pre>item</code>方法。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>childNodes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_23-5-nodelist-prototype-keys-nodelist-prototype-values-nodelist-prototype-entries" tabindex="-1"><a class="header-anchor" href="#_23-5-nodelist-prototype-keys-nodelist-prototype-values-nodelist-prototype-entries" aria-hidden="true">#</a> 23.5 NodeList.prototype.keys()，NodeList.prototype.values()，NodeList.prototype.entries()</h2>
<p>这三个方法都返回一个 ES6 的遍历器对象，可以通过<code v-pre>for...of</code>循环遍历获取每一个成员的信息。区别在于，<code v-pre>keys()</code>返回键名的遍历器，<code v-pre>values()</code>返回键值的遍历器，<code v-pre>entries()</code>返回的遍历器同时包含键名和键值的信息。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> children <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>childNodes<span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">of</span> children<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 0</span>
<span class="token comment">// 1</span>
<span class="token comment">// 2</span>
<span class="token comment">// ...</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> value <span class="token keyword">of</span> children<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// #text</span>
<span class="token comment">// &lt;script></span>
<span class="token comment">// ...</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> entry <span class="token keyword">of</span> children<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Array [ 0, #text ]</span>
<span class="token comment">// Array [ 1, &lt;script> ]</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_24-htmlcollection-接口" tabindex="-1"><a class="header-anchor" href="#_24-htmlcollection-接口" aria-hidden="true">#</a> 24.HTMLCollection 接口</h1>
<h2 id="_24-1-概述" tabindex="-1"><a class="header-anchor" href="#_24-1-概述" aria-hidden="true">#</a> 24.1 概述</h2>
<p><code v-pre>HTMLCollection</code>是一个节点对象的集合，只能包含元素节点（element），不能包含其他类型的节点。它的返回值是一个类似数组的对象，但是与<code v-pre>NodeList</code>接口不同，<code v-pre>HTMLCollection</code>没有<code v-pre>forEach</code>方法，只能使用<code v-pre>for</code>循环遍历。</p>
<p>返回<code v-pre>HTMLCollection</code>实例的，主要是一些<code v-pre>Document</code>对象的集合属性，比如<code v-pre>document.links</code>、<code v-pre>document.forms</code>、<code v-pre>document.images</code>等。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span>links <span class="token keyword">instanceof</span> <span class="token class-name">HTMLCollection</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>HTMLCollection</code>实例都是动态集合，节点的变化会实时反映在集合中。</p>
<p>如果元素节点有<code v-pre>id</code>或<code v-pre>name</code>属性，那么<code v-pre>HTMLCollection</code>实例上面，可以使用<code v-pre>id</code>属性或<code v-pre>name</code>属性引用该节点元素。如果没有对应的节点，则返回<code v-pre>null</code>。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// HTML 代码如下</span>
<span class="token comment">// &lt;img id="pic" src="http://example.com/foo.jpg"></span>

<span class="token keyword">var</span> pic <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'pic'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>images<span class="token punctuation">.</span>pic <span class="token operator">===</span> pic <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>document.images</code>是一个<code v-pre>HTMLCollection</code>实例，可以通过<code v-pre>&lt;img&gt;</code>元素的<code v-pre>id</code>属性值，从<code v-pre>HTMLCollection</code>实例上取到这个元素。</p>
<h2 id="_24-2-htmlcollection-prototype-length" tabindex="-1"><a class="header-anchor" href="#_24-2-htmlcollection-prototype-length" aria-hidden="true">#</a> 24.2 HTMLCollection.prototype.length</h2>
<p><code v-pre>length</code>属性返回<code v-pre>HTMLCollection</code>实例包含的成员数量。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span>links<span class="token punctuation">.</span>length <span class="token comment">// 18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_24-3-htmlcollection-prototype-item" tabindex="-1"><a class="header-anchor" href="#_24-3-htmlcollection-prototype-item" aria-hidden="true">#</a> 24.3 HTMLCollection.prototype.item()</h2>
<p><code v-pre>item</code>方法接受一个整数值作为参数，表示成员的位置，返回该位置上的成员。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> c <span class="token operator">=</span> document<span class="token punctuation">.</span>images<span class="token punctuation">;</span>
<span class="token keyword">var</span> img0 <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>item(0)</code>表示返回0号位置的成员。由于方括号运算符也具有同样作用，而且使用更方便，所以一般情况下，总是使用方括号运算符。</p>
<p>如果参数值超出成员数量或者不合法（比如小于0），那么<code v-pre>item</code>方法返回<code v-pre>null</code>。</p>
<h2 id="_24-4-htmlcollection-prototype-nameditem" tabindex="-1"><a class="header-anchor" href="#_24-4-htmlcollection-prototype-nameditem" aria-hidden="true">#</a> 24.4 HTMLCollection.prototype.namedItem()</h2>
<p><code v-pre>namedItem</code>方法的参数是一个字符串，表示<code v-pre>id</code>属性或<code v-pre>name</code>属性的值，返回当前集合中对应的元素节点。如果没有对应的节点，则返回<code v-pre>null</code>。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// HTML 代码如下</span>
<span class="token comment">// &lt;img id="pic" src="http://example.com/foo.jpg"></span>

<span class="token keyword">var</span> pic <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'pic'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>images<span class="token punctuation">.</span><span class="token function">namedItem</span><span class="token punctuation">(</span><span class="token string">'pic'</span><span class="token punctuation">)</span> <span class="token operator">===</span> pic <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Collection.namedItem('value')</code>等同于<code v-pre>Collection['value']</code>。</p>
</div></template>


