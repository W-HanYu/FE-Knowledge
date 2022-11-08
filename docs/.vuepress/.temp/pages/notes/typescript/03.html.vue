<template><div><h2 id="_3-11-字面量类型" tabindex="-1"><a class="header-anchor" href="#_3-11-字面量类型" aria-hidden="true">#</a> 3.11 字面量类型</h2>
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


