<template><div><h1 id="_25-节点的属性" tabindex="-1"><a class="header-anchor" href="#_25-节点的属性" aria-hidden="true">#</a> 25.节点的属性</h1>
<p>HTML 元素包括标签名和若干个键值对，这个键值对就称为“属性”（attribute）。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>a id<span class="token operator">=</span><span class="token string">"test"</span> href<span class="token operator">=</span><span class="token string">"http://www.example.com"</span><span class="token operator">></span>
  链接
<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>a</code>元素包括两个属性：<code v-pre>id</code>属性和<code v-pre>href</code>属性。</p>
<p>属性本身是一个对象（<code v-pre>Attr</code>对象），但是实际上，这个对象极少使用。一般都是通过元素节点对象（<code v-pre>HTMlElement</code>对象）来操作属性。本章介绍如何操作这些属性。</p>
<h2 id="_25-1-element-attributes-属性" tabindex="-1"><a class="header-anchor" href="#_25-1-element-attributes-属性" aria-hidden="true">#</a> 25.1 Element.attributes 属性</h2>
<p>元素对象有一个<code v-pre>attributes</code>属性，返回一个类似数组的动态对象，成员是该元素标签的所有属性节点对象，属性的实时变化都会反映在这个节点对象上。其他类型的节点对象，虽然也有<code v-pre>attributes</code>属性，但返回的都是<code v-pre>null</code>，因此可以把这个属性视为元素对象独有的。</p>
<p>单个属性可以通过序号引用，也可以通过属性名引用。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// HTML 代码如下</span>
<span class="token comment">// &lt;body bgcolor="yellow" onload=""></span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>attributes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>attributes<span class="token punctuation">.</span>bgcolor
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>attributes<span class="token punctuation">[</span><span class="token string">'ONLOAD'</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，上面代码的三种方法，返回的都是属性节点对象，而不是属性值。</p>
<p>属性节点对象有<code v-pre>name</code>和<code v-pre>value</code>属性，对应该属性的属性名和属性值，等同于<code v-pre>nodeName</code>属性和<code v-pre>nodeValue</code>属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// HTML代码为</span>
<span class="token comment">// &lt;div id="mydiv"></span>
<span class="token keyword">var</span> n <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'mydiv'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

n<span class="token punctuation">.</span>attributes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name <span class="token comment">// "id"</span>
n<span class="token punctuation">.</span>attributes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>nodeName <span class="token comment">// "id"</span>

n<span class="token punctuation">.</span>attributes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value <span class="token comment">// "mydiv"</span>
n<span class="token punctuation">.</span>attributes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>nodeValue <span class="token comment">// "mydiv"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面代码可以遍历一个元素节点的所有属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> para <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> result <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'result'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>para<span class="token punctuation">.</span><span class="token function">hasAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> attrs <span class="token operator">=</span> para<span class="token punctuation">.</span>attributes<span class="token punctuation">;</span>
  <span class="token keyword">var</span> output <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> attrs<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    output <span class="token operator">+=</span> attrs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">'->'</span> <span class="token operator">+</span> attrs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  result<span class="token punctuation">.</span>textContent <span class="token operator">=</span> output<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  result<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">'No attributes to show'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_25-2-元素的标准属性" tabindex="-1"><a class="header-anchor" href="#_25-2-元素的标准属性" aria-hidden="true">#</a> 25.2 元素的标准属性</h2>
<p>HTML 元素的标准属性（即在标准中定义的属性），会自动成为元素节点对象的属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>id <span class="token comment">// "test"</span>
a<span class="token punctuation">.</span>href <span class="token comment">// "http://www.example.com/"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>a</code>元素标签的属性<code v-pre>id</code>和<code v-pre>href</code>，自动成为节点对象的属性。</p>
<p>这些属性都是可写的。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myImage'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">'http://www.example.com/image.jpg'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的写法，会立刻替换掉<code v-pre>img</code>对象的<code v-pre>src</code>属性，即会显示另外一张图片。</p>
<p>这种修改属性的方法，常常用于添加表单的属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> f <span class="token operator">=</span> document<span class="token punctuation">.</span>forms<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
f<span class="token punctuation">.</span>action <span class="token operator">=</span> <span class="token string">'submit.php'</span><span class="token punctuation">;</span>
f<span class="token punctuation">.</span>method <span class="token operator">=</span> <span class="token string">'POST'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码为表单添加提交网址和提交方法。</p>
<p>注意，这种用法虽然可以读写属性，但是无法删除属性，<code v-pre>delete</code>运算符在这里不会生效。</p>
<p>HTML 元素的属性名是大小写不敏感的，但是 JavaScript 对象的属性名是大小写敏感的。转换规则是，转为 JavaScript 属性名时，一律采用小写。如果属性名包括多个单词，则采用骆驼拼写法，即从第二个单词开始，每个单词的首字母采用大写，比如<code v-pre>onClick</code>。</p>
<p>有些 HTML 属性名是 JavaScript 的保留字，转为 JavaScript 属性时，必须改名。主要是以下两个。</p>
<ul>
<li><code v-pre>for</code>属性改为<code v-pre>htmlFor</code></li>
<li><code v-pre>class</code>属性改为<code v-pre>className</code></li>
</ul>
<p>另外，HTML 属性值一般都是字符串，但是 JavaScript 属性会自动转换类型。比如，将字符串<code v-pre>true</code>转为布尔值，将<code v-pre>onClick</code>的值转为一个函数，将<code v-pre>style</code>属性的值转为一个<code v-pre>CSSStyleDeclaration</code>对象。因此，可以对这些属性赋予各种类型的值。</p>
<h2 id="_25-3-元素特性的相关属性" tabindex="-1"><a class="header-anchor" href="#_25-3-元素特性的相关属性" aria-hidden="true">#</a> 25.3 元素特性的相关属性</h2>
<p><strong>（1）Element.id</strong></p>
<p><code v-pre>Element.id</code>属性返回指定元素的<code v-pre>id</code>属性，该属性可读写。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// HTML 代码为 &lt;p id="foo"></span>
<span class="token keyword">var</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span>id <span class="token comment">// "foo"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，<code v-pre>id</code>属性的值是大小写敏感，即浏览器能正确识别<code v-pre>&lt;p id=&quot;foo&quot;&gt;</code>和<code v-pre>&lt;p id=&quot;FOO&quot;&gt;</code>这两个元素的<code v-pre>id</code>属性，但是最好不要这样命名。</p>
<p><strong>（2）Element.tagName</strong></p>
<p><code v-pre>Element.tagName</code>属性返回指定元素的大写标签名，与<code v-pre>nodeName</code>属性的值相等。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// HTML代码为</span>
<span class="token comment">// &lt;span id="myspan">Hello&lt;/span></span>
<span class="token keyword">var</span> span <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myspan'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
span<span class="token punctuation">.</span>id <span class="token comment">// "myspan"</span>
span<span class="token punctuation">.</span>tagName <span class="token comment">// "SPAN"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（3）Element.dir</strong></p>
<p><code v-pre>Element.dir</code>属性用于读写当前元素的文字方向，可能是从左到右（<code v-pre>&quot;ltr&quot;</code>），也可能是从右到左（<code v-pre>&quot;rtl&quot;</code>）。</p>
<p><strong>（4）Element.accessKey</strong></p>
<p><code v-pre>Element.accessKey</code>属性用于读写分配给当前元素的快捷键。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// HTML 代码如下</span>
<span class="token comment">// &lt;button accesskey="h" id="btn">点击&lt;/button></span>
<span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'btn'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
btn<span class="token punctuation">.</span>accessKey <span class="token comment">// "h"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>btn</code>元素的快捷键是<code v-pre>h</code>，按下<code v-pre>Alt + h</code>就能将焦点转移到它上面。</p>
<p><strong>（5）Element.draggable</strong></p>
<p><code v-pre>Element.draggable</code>属性返回一个布尔值，表示当前元素是否可拖动。该属性可读写。</p>
<p><strong>（6）Element.lang</strong></p>
<p><code v-pre>Element.lang</code>属性返回当前元素的语言设置。该属性可读写。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// HTML 代码如下</span>
<span class="token comment">// &lt;html lang="en"></span>
document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>lang <span class="token comment">// "en"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（7）Element.tabIndex</strong></p>
<p><code v-pre>Element.tabIndex</code>属性返回一个整数，表示当前元素在 Tab 键遍历时的顺序。该属性可读写。</p>
<p><code v-pre>tabIndex</code>属性值如果是负值（通常是<code v-pre>-1</code>），则 Tab 键不会遍历到该元素。如果是正整数，则按照顺序，从小到大遍历。如果两个元素的<code v-pre>tabIndex</code>属性的正整数值相同，则按照出现的顺序遍历。遍历完所有<code v-pre>tabIndex</code>为正整数的元素以后，再遍历所有<code v-pre>tabIndex</code>等于<code v-pre>0</code>、或者属性值是非法值、或者没有<code v-pre>tabIndex</code>属性的元素，顺序为它们在网页中出现的顺序。</p>
<p><strong>（8）Element.title</strong></p>
<p><code v-pre>Element.title</code>属性用来读写当前元素的 HTML 属性<code v-pre>title</code>。该属性通常用来指定，鼠标悬浮时弹出的文字提示框。</p>
<h2 id="_25-4-属性操作的标准方法" tabindex="-1"><a class="header-anchor" href="#_25-4-属性操作的标准方法" aria-hidden="true">#</a> 25.4 属性操作的标准方法</h2>
<h3 id="_25-4-1-概述" tabindex="-1"><a class="header-anchor" href="#_25-4-1-概述" aria-hidden="true">#</a> 25.4.1 概述</h3>
<p>元素节点提供六个方法，用来操作属性。</p>
<ul>
<li><code v-pre>getAttribute()</code></li>
<li><code v-pre>getAttributeNames()</code></li>
<li><code v-pre>setAttribute()</code></li>
<li><code v-pre>hasAttribute()</code></li>
<li><code v-pre>hasAttributes()</code></li>
<li><code v-pre>removeAttribute()</code></li>
</ul>
<p>这有几点注意。</p>
<p>（1）适用性</p>
<p>这六个方法对所有属性（包括用户自定义的属性）都适用。</p>
<p>（2）返回值</p>
<p><code v-pre>getAttribute()</code>只返回字符串，不会返回其他类型的值。</p>
<p>（3）属性名</p>
<p>这些方法只接受属性的标准名称，不用改写保留字，比如<code v-pre>for</code>和<code v-pre>class</code>都可以直接使用。另外，这些方法对于属性名是大小写不敏感的。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> image <span class="token operator">=</span> document<span class="token punctuation">.</span>images<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
image<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'class'</span><span class="token punctuation">,</span> <span class="token string">'myImage'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>setAttribute</code>方法直接使用<code v-pre>class</code>作为属性名，不用写成<code v-pre>className</code>。</p>
<h3 id="_25-4-2-element-getattribute" tabindex="-1"><a class="header-anchor" href="#_25-4-2-element-getattribute" aria-hidden="true">#</a> 25.4.2 Element.getAttribute()</h3>
<p><code v-pre>Element.getAttribute</code>方法返回当前元素节点的指定属性。如果指定属性不存在，则返回<code v-pre>null</code>。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// HTML 代码为</span>
<span class="token comment">// &lt;div id="div1" align="left"></span>
<span class="token keyword">var</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'div1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
div<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'align'</span><span class="token punctuation">)</span> <span class="token comment">// "left"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_25-4-3-element-getattributenames" tabindex="-1"><a class="header-anchor" href="#_25-4-3-element-getattributenames" aria-hidden="true">#</a> 25.4.3 Element.getAttributeNames()</h3>
<p><code v-pre>Element.getAttributeNames()</code>返回一个数组，成员是当前元素的所有属性的名字。如果当前元素没有任何属性，则返回一个空数组。使用<code v-pre>Element.attributes</code>属性，也可以拿到同样的结果，唯一的区别是它返回的是类似数组的对象。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> mydiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'mydiv'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

mydiv<span class="token punctuation">.</span><span class="token function">getAttributeNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> value <span class="token operator">=</span> mydiv<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码用于遍历某个节点的所有属性。</p>
<h3 id="_25-4-4-element-setattribute" tabindex="-1"><a class="header-anchor" href="#_25-4-4-element-setattribute" aria-hidden="true">#</a> 25.4.4 Element.setAttribute()</h3>
<p><code v-pre>Element.setAttribute</code>方法用于为当前元素节点新增属性。如果同名属性已存在，则相当于编辑已存在的属性。该方法没有返回值。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// HTML 代码为</span>
<span class="token comment">// &lt;button>Hello World&lt;/button></span>
<span class="token keyword">var</span> b <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'button'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'myButton'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'disabled'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>button</code>元素的<code v-pre>name</code>属性被设成<code v-pre>myButton</code>，<code v-pre>disabled</code>属性被设成<code v-pre>true</code>。</p>
<p>这里有两个地方需要注意，首先，属性值总是字符串，其他类型的值会自动转成字符串，比如布尔值<code v-pre>true</code>就会变成字符串<code v-pre>true</code>；其次，上例的<code v-pre>disable</code>属性是一个布尔属性，对于<code v-pre>&lt;button&gt;</code>元素来说，这个属性不需要属性值，只要设置了就总是会生效，因此<code v-pre>setAttribute</code>方法里面可以将<code v-pre>disabled</code>属性设成任意值。</p>
<h3 id="_25-4-5-element-hasattribute" tabindex="-1"><a class="header-anchor" href="#_25-4-5-element-hasattribute" aria-hidden="true">#</a> 25.4.5 Element.hasAttribute()</h3>
<p><code v-pre>Element.hasAttribute</code>方法返回一个布尔值，表示当前元素节点是否包含指定属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> d <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'div1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">hasAttribute</span><span class="token punctuation">(</span><span class="token string">'align'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  d<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'align'</span><span class="token punctuation">,</span> <span class="token string">'center'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码检查<code v-pre>div</code>节点是否含有<code v-pre>align</code>属性。如果有，则设置为居中对齐。</p>
<h3 id="_25-4-6-element-removeattribute" tabindex="-1"><a class="header-anchor" href="#_25-4-6-element-removeattribute" aria-hidden="true">#</a> 25.4.6 Element.removeAttribute()</h3>
<p><code v-pre>Element.removeAttribute</code>方法移除指定属性。该方法没有返回值。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// HTML 代码为</span>
<span class="token comment">// &lt;div id="div1" align="left" width="200px"></span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'div1'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token string">'align'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 现在的HTML代码为</span>
<span class="token comment">// &lt;div id="div1" width="200px"></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_25-4-7-element-focus-element-blur" tabindex="-1"><a class="header-anchor" href="#_25-4-7-element-focus-element-blur" aria-hidden="true">#</a> 25.4.7 Element.focus()，Element.blur()</h3>
<p><code v-pre>Element.focus</code>方法用于将当前页面的焦点，转移到指定元素上。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'my-span'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该方法可以接受一个对象作为参数。参数对象的<code v-pre>preventScroll</code>属性是一个布尔值，指定是否将当前元素停留在原始位置，而不是滚动到可见区域。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getFocus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'btn'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">preventScroll</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码会让<code v-pre>btn</code>元素获得焦点，并滚动到可见区域。</p>
<p>最后，从<code v-pre>document.activeElement</code>属性可以得到当前获得焦点的元素。</p>
<p><code v-pre>Element.blur</code>方法用于将焦点从当前元素移除。</p>
<h3 id="_25-4-7-element-click" tabindex="-1"><a class="header-anchor" href="#_25-4-7-element-click" aria-hidden="true">#</a> 25.4.7 Element.click()</h3>
<p><code v-pre>Element.click</code>方法用于在当前元素上模拟一次鼠标点击，相当于触发了<code v-pre>click</code>事件。</p>
<h2 id="_25-5-dataset-属性" tabindex="-1"><a class="header-anchor" href="#_25-5-dataset-属性" aria-hidden="true">#</a> 25.5 dataset 属性</h2>
<p>有时，需要在HTML元素上附加数据，供 JavaScript 脚本使用。一种解决方法是自定义属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"mydiv"</span> foo<span class="token operator">=</span><span class="token string">"bar"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码为<code v-pre>div</code>元素自定义了<code v-pre>foo</code>属性，然后可以用<code v-pre>getAttribute()</code>和<code v-pre>setAttribute()</code>读写这个属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> n <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'mydiv'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
n<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span> <span class="token comment">// bar</span>
n<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">,</span> <span class="token string">'baz'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方法虽然可以达到目的，但是会使得 HTML 元素的属性不符合标准，导致网页代码通不过校验。</p>
<p>更好的解决方法是，使用标准提供的<code v-pre>data-*</code>属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"mydiv"</span> data<span class="token operator">-</span>foo<span class="token operator">=</span><span class="token string">"bar"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，使用元素节点对象的<code v-pre>dataset</code>属性，它指向一个对象，可以用来操作 HTML 元素标签的<code v-pre>data-*</code>属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> n <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'mydiv'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
n<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>foo <span class="token comment">// bar</span>
n<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">'baz'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，通过<code v-pre>dataset.foo</code>读写<code v-pre>data-foo</code>属性。</p>
<p>删除一个<code v-pre>data-*</code>属性，可以直接使用<code v-pre>delete</code>命令。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">delete</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myDiv'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>foo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>除了<code v-pre>dataset</code>属性，也可以用<code v-pre>getAttribute('data-foo')</code>、<code v-pre>removeAttribute('data-foo')</code>、<code v-pre>setAttribute('data-foo')</code>、<code v-pre>hasAttribute('data-foo')</code>等方法操作<code v-pre>data-*</code>属性。</p>
<p>注意，<code v-pre>data-</code>后面的属性名有限制，只能包含字母、数字、连词线（<code v-pre>-</code>）、点（<code v-pre>.</code>）、冒号（<code v-pre>:</code>）和下划线（<code v-pre>_</code>)。而且，属性名不应该使用<code v-pre>A</code>到<code v-pre>Z</code>的大写字母，比如不能有<code v-pre>data-helloWorld</code>这样的属性名，而要写成<code v-pre>data-hello-world</code>。</p>
<p>转成<code v-pre>dataset</code>的键名时，连词线后面如果跟着一个小写字母，那么连词线会被移除，该小写字母转为大写字母，其他字符不变。反过来，<code v-pre>dataset</code>的键名转成属性名时，所有大写字母都会被转成连词线+该字母的小写形式，其他字符不变。比如，<code v-pre>dataset.helloWorld</code>会转成<code v-pre>data-hello-world</code>。</p>
</div></template>


