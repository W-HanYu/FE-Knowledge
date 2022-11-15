<template><div><h1 id="_6-接口-interface" tabindex="-1"><a class="header-anchor" href="#_6-接口-interface" aria-hidden="true">#</a> 6.接口（ interface）</h1>
<p>在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。</p>
<h2 id="_6-1-什么是接口" tabindex="-1"><a class="header-anchor" href="#_6-1-什么是接口" aria-hidden="true">#</a> 6.1 什么是接口</h2>
<p>在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。</p>
<p>TypeScript 中的接口是一个非常灵活的概念，除了可用于[对类的一部分行为进行抽象]以外，也常用于对「对象的形状（Shape）」进行描述。</p>
<h2 id="_6-2-基本使用" tabindex="-1"><a class="header-anchor" href="#_6-2-基本使用" aria-hidden="true">#</a> 6.2 基本使用</h2>
<p>当一个对象类型被多次使用时，一般会使用接口（<code v-pre>interface</code>）来描述对象的类型，达到复用的目的</p>
<ul>
<li>解释：
<ol>
<li>使用 <code v-pre>interface</code> 关键字来声明接口</li>
<li>接口名称(比如，此处的 Person)，可以是任意合法的名称</li>
<li>声明接口后，直接使用接口名称作为类型</li>
</ol>
</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'Tom'</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">25</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子中，我们定义了一个接口 <code v-pre>IPerson</code>，接着定义了一个变量 <code v-pre>tom</code>，它的类型是 <code v-pre>IPerson</code>。这样，我们就约束了 <code v-pre>tom</code> 的形状必须和接口 <code v-pre>IPerson</code> 一致。</p>
<p>接口一般首字母大写。</p>
<p>定义的变量比接口少了一些属性是不允许的：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'Tom'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(6,5): error TS2322: Type '{ name: string; }' is not assignable to type 'Person'.</span>
<span class="token comment">//   Property 'age' is missing in type '{ name: string; }'.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多一些属性也是不允许的：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'Tom'</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
    gender<span class="token operator">:</span> <span class="token string">'male'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(9,5): error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.</span>
<span class="token comment">//   Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可见，<strong>赋值的时候，变量的形状必须和接口的形状保持一致</strong>。</p>
<h2 id="_6-3-可选-只读属性" tabindex="-1"><a class="header-anchor" href="#_6-3-可选-只读属性" aria-hidden="true">#</a> 6.3 可选 | 只读属性</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只读属性用于限制只能在对象刚刚创建的时候修改其值。此外 TypeScript 还提供了 <code v-pre>ReadonlyArray&lt;T&gt;</code> 类型，它与 <code v-pre>Array&lt;T&gt;</code> 相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> ro<span class="token operator">:</span> ReadonlyArray<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span> <span class="token operator">=</span> a<span class="token punctuation">;</span>
ro<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span> <span class="token comment">// error!</span>
ro<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// error!</span>
ro<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span> <span class="token comment">// error!</span>
a <span class="token operator">=</span> ro<span class="token punctuation">;</span> <span class="token comment">// error!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-4-任意属性" tabindex="-1"><a class="header-anchor" href="#_6-4-任意属性" aria-hidden="true">#</a> 6.4 任意属性</h2>
<p>有时候我们希望一个接口中除了包含必选和可选属性之外，还允许有其他的任意属性，这时我们可以使用 <strong>索引签名</strong> 的形式来满足上述要求。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'Tom'</span><span class="token punctuation">,</span>
    gender<span class="token operator">:</span> <span class="token string">'male'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，<strong>一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集</strong></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'Tom'</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
    gender<span class="token operator">:</span> <span class="token string">'male'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(3,5): error TS2411: Property 'age' of type 'number' is not assignable to string index type 'string'.</span>
<span class="token comment">// index.ts(7,5): error TS2322: Type '{ [x: string]: string | number; name: string; age: number; gender: string; }' is not assignable to type 'Person'.</span>
<span class="token comment">//   Index signatures are incompatible.</span>
<span class="token comment">//     Type 'string | number' is not assignable to type 'string'.</span>
<span class="token comment">//       Type 'number' is not assignable to type 'string'.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，任意属性的值允许是 <code v-pre>string</code>，但是可选属性 <code v-pre>age</code> 的值却是 <code v-pre>number</code>，<code v-pre>number</code> 不是 <code v-pre>string</code> 的子属性，所以报错了。</p>
<p>另外，在报错信息中可以看出，此时 <code v-pre>{ name: 'Tom', age: 25, gender: 'male' }</code> 的类型被推断成了 <code v-pre>{ [x: string]: string | number; name: string; age: number; gender: string; }</code>，这是联合类型和接口的结合。</p>
<p>一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 这里真实的类型应该为：number | undefined</span>
    <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'Tom'</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
    gender<span class="token operator">:</span> <span class="token string">'male'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-5-绕开额外属性检查的方式" tabindex="-1"><a class="header-anchor" href="#_6-5-绕开额外属性检查的方式" aria-hidden="true">#</a> 6.5 绕开额外属性检查的方式</h2>
<h3 id="_6-5-1-类型断言" tabindex="-1"><a class="header-anchor" href="#_6-5-1-类型断言" aria-hidden="true">#</a> 6.5.1 类型断言</h3>
<p>类型断言的意义就等同于你在告诉程序，你很清楚自己在做什么，此时程序自然就不会再进行额外的属性检查了。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span> 
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> 
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> 
  money<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> p<span class="token operator">:</span> Props <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">"兔神"</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
  money<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">100000</span><span class="token punctuation">,</span>
  girl<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span> <span class="token keyword">as</span> Props<span class="token punctuation">;</span> <span class="token comment">// OK</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-5-2-索引签名" tabindex="-1"><a class="header-anchor" href="#_6-5-2-索引签名" aria-hidden="true">#</a> 6.5.2 索引签名</h3>
<blockquote>
<p>使用场景：当无法确定对象中有那些属性(或对象中可以出现任意多的属性)
使用[key:string] 来约束该接口中允许出现的属性名称。表示只要是string类型的属性名称，都可以出现在对象中
key只是一个占位符，可以换成任意合法的变量名称</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code> <span class="token keyword">interface</span> <span class="token class-name">AnyObject</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>key<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> obj1<span class="token operator">:</span>AnyObject <span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token string-property property">'1'</span><span class="token operator">:</span><span class="token number">11</span><span class="token punctuation">,</span>
    <span class="token comment">// 's':'ss'</span>
<span class="token punctuation">}</span>
<span class="token comment">//  ||</span>
<span class="token comment">//  \/</span>
<span class="token keyword">interface</span> <span class="token class-name">AnyObject1<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>key<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token constant">T</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> obj2<span class="token operator">:</span>AnyObject1<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span> <span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token string-property property">'1'</span><span class="token operator">:</span><span class="token number">11</span><span class="token punctuation">,</span>
    <span class="token comment">// 's':'ss'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数组接口也是使用了索引签名类型</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MyArray<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>n<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token constant">T</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> mayy<span class="token operator">:</span>MyArray<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>MyArray模拟了原生的数组接口 并使用[n:number]来作为索引签名类型
该签名表示：只要是number类型的键/索引都可以出现在数组中，或者说数组中可以有任意多个元素
同时也符合数组索引十number类型的这一前提</p>
</blockquote>
</div></template>


