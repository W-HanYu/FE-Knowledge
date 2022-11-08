<template><div><h1 id="_06【对象的扩展】" tabindex="-1"><a class="header-anchor" href="#_06【对象的扩展】" aria-hidden="true">#</a> 06【对象的扩展】</h1>
<h2 id="_1-属性的简洁表示法" tabindex="-1"><a class="header-anchor" href="#_1-属性的简洁表示法" aria-hidden="true">#</a> 1.属性的简洁表示法</h2>
<p>ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">'bar'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token punctuation">{</span>foo<span class="token punctuation">}</span><span class="token punctuation">;</span>
baz <span class="token comment">// {foo: "bar"}</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">foo</span><span class="token operator">:</span> foo<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，变量<code v-pre>foo</code>直接写在大括号里面。这时，属性名就是变量名, 属性值就是变量值。下面是另一个例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>x<span class="token punctuation">,</span> y<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 等同于</span>

<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> x<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> y<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">f</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// Object {x: 1, y: 2}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了属性简写，方法也可以简写。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"Hello!"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 等同于</span>

<span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">method</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"Hello!"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个实际的例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> birth <span class="token operator">=</span> <span class="token string">'2000/01/01'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>

  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span>

  <span class="token comment">//等同于birth: birth</span>
  birth<span class="token punctuation">,</span>

  <span class="token comment">// 等同于hello: function ()...</span>
  <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我的名字是'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种写法用于函数的返回值，将会非常方便。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getPoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>x<span class="token punctuation">,</span> y<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">getPoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// {x:1, y:10}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-方括号语法" tabindex="-1"><a class="header-anchor" href="#_2-方括号语法" aria-hidden="true">#</a> 2.方括号语法</h2>
<h3 id="_2-1-方括号语法的用法" tabindex="-1"><a class="header-anchor" href="#_2-1-方括号语法的用法" aria-hidden="true">#</a> 2.1 方括号语法的用法</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> prop <span class="token operator">=</span> <span class="token string">'age'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
person<span class="token punctuation">.</span>prop <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// { prop: 18 }</span>

<span class="token comment">// -----------------------------------------</span>

<span class="token keyword">const</span> prop <span class="token operator">=</span> <span class="token string">'age'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
person<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// { age: 18 }</span>

<span class="token comment">// -----------------------------------------</span>

<span class="token comment">// ES6 增强</span>
<span class="token keyword">const</span> prop <span class="token operator">=</span> <span class="token string">'age'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// { age: 18 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-方括号中可以放什么" tabindex="-1"><a class="header-anchor" href="#_2-2-方括号中可以放什么" aria-hidden="true">#</a> 2.2 方括号中可以放什么</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// [值、可以得到值的表达式]</span>
<span class="token keyword">const</span> prop <span class="token operator">=</span> <span class="token string">'age'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">'age2'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">'sex'</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">'man'</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">'s'</span> <span class="token operator">+</span> <span class="token string">'ex2'</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">'womam'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// { age: 18, age2: 24, sex: 'man', sex2: 'womam' }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串<code v-pre>[object Object]</code>，这一点要特别小心。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> keyA <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> keyB <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> myObject <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>keyA<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">'valueA'</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>keyB<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">'valueB'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

myObject <span class="token comment">// Object {[object Object]: "valueB"}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>[keyA]</code>和<code v-pre>[keyB]</code>得到的都是<code v-pre>[object Object]</code>，所以<code v-pre>[keyB]</code>会把<code v-pre>[keyA]</code>覆盖掉，而<code v-pre>myObject</code>最后只有一个<code v-pre>[object Object]</code>属性。</p>
<h3 id="_2-3-方括号语法和点语法的区别" tabindex="-1"><a class="header-anchor" href="#_2-3-方括号语法和点语法的区别" aria-hidden="true">#</a> 2.3 方括号语法和点语法的区别</h3>
<ol>
<li>点语法是方括号语法的特殊形式</li>
<li>属性名由数字、字母、下划线以及 $ 构成，并且数字还不能打头的时候可以使用点语法（合法标识符）</li>
<li>能用点语法优先使用点语法</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

person<span class="token punctuation">.</span>age 等价于 person<span class="token punctuation">[</span><span class="token string">'age'</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-super-关键字" tabindex="-1"><a class="header-anchor" href="#_3-super-关键字" aria-hidden="true">#</a> 3.super 关键字</h2>
<p>我们知道，<code v-pre>this</code>关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字<code v-pre>super</code>，指向当前对象的原型对象。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> proto <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'hello'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'world'</span><span class="token punctuation">,</span>
  <span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span>foo<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> proto<span class="token punctuation">)</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// "hello"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，对象<code v-pre>obj.find()</code>方法之中，通过<code v-pre>super.foo</code>引用了原型对象<code v-pre>proto</code>的<code v-pre>foo</code>属性。</p>
<p>注意，<code v-pre>super</code>关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 报错</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token keyword">super</span><span class="token punctuation">.</span>foo
<span class="token punctuation">}</span>

<span class="token comment">// 报错</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">foo</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">super</span><span class="token punctuation">.</span>foo
<span class="token punctuation">}</span>

<span class="token comment">// 报错</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">foo</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span>foo
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面三种<code v-pre>super</code>的用法都会报错，因为对于 JavaScript 引擎来说，这里的<code v-pre>super</code>都没有用在对象的方法之中。第一种写法是<code v-pre>super</code>用在属性里面，第二种和第三种写法是<code v-pre>super</code>用在一个函数里面，然后赋值给<code v-pre>foo</code>属性。目前，只有对象方法的简写法可以让 JavaScript 引擎确认，定义的是对象的方法。</p>
<p>JavaScript 引擎内部，<code v-pre>super.foo</code>等同于<code v-pre>Object.getPrototypeOf(this).foo</code>（属性）或<code v-pre>Object.getPrototypeOf(this).foo.call(this)</code>（方法）。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> proto <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">'hello'</span><span class="token punctuation">,</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">'world'</span><span class="token punctuation">,</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> proto<span class="token punctuation">)</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// "world"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>super.foo</code>指向原型对象<code v-pre>proto</code>的<code v-pre>foo</code>方法，但是绑定的<code v-pre>this</code>却还是当前对象<code v-pre>obj</code>，因此输出的就是<code v-pre>world</code>。</p>
<h2 id="_4-对象的展开运算符" tabindex="-1"><a class="header-anchor" href="#_4-对象的展开运算符" aria-hidden="true">#</a> 4.对象的展开运算符</h2>
<h3 id="_4-1-展开对象" tabindex="-1"><a class="header-anchor" href="#_4-1-展开对象" aria-hidden="true">#</a> 4.1 展开对象</h3>
<p>对象不能直接展开，必须在 {} 中展开。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> apple <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'红色'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">shape</span><span class="token operator">:</span> <span class="token string">'球形'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">taste</span><span class="token operator">:</span> <span class="token string">'甜'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span>apple<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>			<span class="token comment">// { color: '红色', shape: '球形', taste: '甜' }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span>apple<span class="token punctuation">}</span> <span class="token operator">===</span> apple<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-合并对象" tabindex="-1"><a class="header-anchor" href="#_4-2-合并对象" aria-hidden="true">#</a> 4.2 合并对象</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> apple <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'红色'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">shape</span><span class="token operator">:</span> <span class="token string">'球形'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">taste</span><span class="token operator">:</span> <span class="token string">'甜'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'黑色'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">shape</span><span class="token operator">:</span> <span class="token string">'圆柱形'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">'写字'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 新对象拥有全部属性，相同属性，后者覆盖前者</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span>apple<span class="token punctuation">,</span> <span class="token operator">...</span>pen<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// { color: '黑色', shape: '圆柱形', taste: '甜', use: '写字' }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span>pen<span class="token punctuation">,</span> <span class="token operator">...</span>apple<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// { color: '红色', shape: '球形', use: '写字', taste: '甜' }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-注意事项" tabindex="-1"><a class="header-anchor" href="#_4-3-注意事项" aria-hidden="true">#</a> 4.3 注意事项</h3>
<h4 id="_4-3-1-空对象的展开" tabindex="-1"><a class="header-anchor" href="#_4-3-1-空对象的展开" aria-hidden="true">#</a> 4.3.1 空对象的展开</h4>
<p>如果展开一个空对象，则没有任何效果。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>			<span class="token comment">// {}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// { a: 1 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-2-非对象的展开" tabindex="-1"><a class="header-anchor" href="#_4-3-2-非对象的展开" aria-hidden="true">#</a> 4.3.2 非对象的展开</h4>
<p>如果展开的不是对象，则会自动将其转为对象，再将其属性罗列出来（没有属性便为空）。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token number">.1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>			<span class="token comment">// {}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// [Number: 1]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">undefined</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// {}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">null</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>			<span class="token comment">// {}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>			<span class="token comment">// {}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-3-字符串的展开" tabindex="-1"><a class="header-anchor" href="#_4-3-3-字符串的展开" aria-hidden="true">#</a> 4.3.3 字符串的展开</h4>
<p>如果展开运算符后面是字符串，它会自动转成一个类似数组的对象，因此返回的不是空对象。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 字符串在对象中展开</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token string">'alex'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// { '0': 'a', '1': 'l', '2': 'e', '3': 'x' }</span>

<span class="token comment">// 字符串在数组中展开</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token string">'alex'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// [ 'a', 'l', 'e', 'x' ]</span>

<span class="token comment">// 字符串直接展开</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token string">'alex'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>			<span class="token comment">// a l e x</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-4-数组的展开" tabindex="-1"><a class="header-anchor" href="#_4-3-4-数组的展开" aria-hidden="true">#</a> 4.3.4 数组的展开</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// { '0': 1, '1': 2, '2': 3 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-3-5-对象中对象属性的展开" tabindex="-1"><a class="header-anchor" href="#_4-3-5-对象中对象属性的展开" aria-hidden="true">#</a> 4.3.5 对象中对象属性的展开</h4>
<p>不会展开对象中的对象属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> apple <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">feature</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">taste</span><span class="token operator">:</span> <span class="token string">'甜'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">feature</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'黑色'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">shape</span><span class="token operator">:</span> <span class="token string">'圆柱形'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">'写字'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span>apple<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>			<span class="token comment">// { feature: { taste: '甜' } }</span>

<span class="token comment">// feature 会直接覆盖，因为 feature 不能展开</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span>apple<span class="token punctuation">,</span> <span class="token operator">...</span>pen<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// { feature: { color: '黑色', shape: '圆柱形' }, use: '写字' }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-对象展开运算符的应用" tabindex="-1"><a class="header-anchor" href="#_4-4-对象展开运算符的应用" aria-hidden="true">#</a> 4.4 对象展开运算符的应用</h3>
<h4 id="_4-4-1-复制对象" tabindex="-1"><a class="header-anchor" href="#_4-4-1-复制对象" aria-hidden="true">#</a> 4.4.1 复制对象</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>a<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> c <span class="token operator">===</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// { x: 1, y: 2 } false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-4-2-用户参数和默认参数" tabindex="-1"><a class="header-anchor" href="#_4-4-2-用户参数和默认参数" aria-hidden="true">#</a> 4.4.2 用户参数和默认参数</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">logUser</span> <span class="token operator">=</span> <span class="token parameter">userParam</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> defaultPeram <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">'ZhangSan'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">'male'</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> param <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>defaultPeram<span class="token punctuation">,</span> <span class="token operator">...</span>userParam<span class="token punctuation">}</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>param<span class="token punctuation">.</span>username<span class="token punctuation">,</span> param<span class="token punctuation">.</span>age<span class="token punctuation">,</span> param<span class="token punctuation">.</span>sex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">logUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">'jerry'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// jerry 0 male</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再优化：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">logUser</span> <span class="token operator">=</span> <span class="token parameter">userParam</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> defaultPeram <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">'ZhangSan'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">'male'</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span>username<span class="token punctuation">,</span> age<span class="token punctuation">,</span> sex<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>defaultPeram<span class="token punctuation">,</span> <span class="token operator">...</span>userParam<span class="token punctuation">}</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> age<span class="token punctuation">,</span> sex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">logUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">'jerry'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// jerry 0 male</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-对象的新增方法" tabindex="-1"><a class="header-anchor" href="#_5-对象的新增方法" aria-hidden="true">#</a> 5.对象的新增方法</h2>
<h3 id="_5-1-object-is" tabindex="-1"><a class="header-anchor" href="#_5-1-object-is" aria-hidden="true">#</a> 5.1 Object.is()</h3>
<p>ES5 比较两个值是否相等，只有两个运算符：相等运算符（<code v-pre>==</code>）和严格相等运算符（<code v-pre>===</code>）。它们都有缺点，前者会自动转换数据类型，后者的<code v-pre>NaN</code>不等于自身，以及<code v-pre>+0</code>等于<code v-pre>-0</code>。JavaScript 缺乏一种运算，在所有环境中，只要两个值是一样的，它们就应该相等。</p>
<p>ES6 提出“Same-value equality”（同值相等）算法，用来解决这个问题。<code v-pre>Object.is</code>就是部署这个算法的新方法。它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">,</span> <span class="token string">'foo'</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不同之处只有两个：一是<code v-pre>+0</code>不等于<code v-pre>-0</code>，二是<code v-pre>NaN</code>等于自身。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">+</span><span class="token number">0</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">0</span> <span class="token comment">//true</span>
<span class="token number">NaN</span> <span class="token operator">===</span> <span class="token number">NaN</span> <span class="token comment">// false</span>

Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token operator">+</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">,</span> <span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-object-assign" tabindex="-1"><a class="header-anchor" href="#_5-2-object-assign" aria-hidden="true">#</a> 5.2 Object.assign()</h3>
<p><code v-pre>Object.assign()</code>方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> source1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> source2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> source1<span class="token punctuation">,</span> source2<span class="token punctuation">)</span><span class="token punctuation">;</span>
target <span class="token comment">// {a:1, b:2, c:3}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> source1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> source2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> source1<span class="token punctuation">,</span> source2<span class="token punctuation">)</span><span class="token punctuation">;</span>
target <span class="token comment">// {a:1, b:2, c:3}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>汇总</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 基本用法</span>
<span class="token comment">// Object.assign(目标对象, 源对象1, 源对象2, ...);</span>
<span class="token keyword">const</span> apple <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'红色'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">shape</span><span class="token operator">:</span> <span class="token string">'圆形'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">taste</span><span class="token operator">:</span> <span class="token string">'甜'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'黑色'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">shape</span><span class="token operator">:</span> <span class="token string">'圆柱形'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">'写字'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>apple<span class="token punctuation">,</span> pen<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	
<span class="token comment">// 后面的覆盖前面的（最终返回的不是新的，而是修改了前面的）</span>
<span class="token comment">// { color: '黑色', shape: '圆柱形', taste: '甜', use: '写字' }</span>
<span class="token comment">// Object.assign 直接合并到了第一个参数中，返回的就是合并后的对象</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>apple<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// { color: '黑色', shape: '圆柱形', taste: '甜', use: '写字' }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>apple<span class="token punctuation">,</span> pen<span class="token punctuation">)</span> <span class="token operator">===</span> apple<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// true</span>


<span class="token comment">// 可以合并多个对象</span>
<span class="token comment">// 第一个参数使用一个空对象来实现合并返回一个新对象的目的</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> apple<span class="token punctuation">,</span> pen<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// { color: '黑色', shape: '圆柱形', taste: '甜', use: '写字' }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>apple<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// { color: '红色', shape: '圆形', taste: '甜' }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span>apple<span class="token punctuation">,</span> <span class="token operator">...</span>pen<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { color: '黑色', shape: '圆柱形', taste: '甜', use: '写字' }</span>


<span class="token comment">// 注意事项</span>
<span class="token comment">// (1) 基本数据类型作为源对象</span>
<span class="token comment">// 与对象的展开类似，先转换成对象，再合并</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// {}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// {}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>			<span class="token comment">// {}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// {}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'str'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// { '0': 's', '1': 't', '2': 'r' }</span>
<span class="token comment">// (2) 同名属性的替换</span>
<span class="token comment">// 后面的直接覆盖前面的</span>
<span class="token keyword">const</span> apple <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'红色'</span><span class="token punctuation">,</span> <span class="token string">'黄色'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">shape</span><span class="token operator">:</span> <span class="token string">'圆形'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">taste</span><span class="token operator">:</span> <span class="token string">'甜'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'黑色'</span><span class="token punctuation">,</span> <span class="token string">'银色'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">shape</span><span class="token operator">:</span> <span class="token string">'圆柱形'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">'写字'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> apple<span class="token punctuation">,</span> pen<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// { color: [ '黑色', '银色' ], shape: '圆柱形', taste: '甜', use: '写字' }</span>


<span class="token comment">// 应用</span>
<span class="token comment">// 合并默认参数和用户参数</span>
<span class="token keyword">const</span> <span class="token function-variable function">logUser</span> <span class="token operator">=</span> <span class="token parameter">userOptions</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token constant">DEFAULTS</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">'ZhangSan'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">'male'</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> options <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token constant">DEFAULTS</span><span class="token punctuation">,</span> userOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">logUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>						<span class="token comment">// { username: 'ZhangSan', age: 0, sex: 'male' }</span>
<span class="token function">logUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>					<span class="token comment">// { username: 'ZhangSan', age: 0, sex: 'male' }</span>
<span class="token function">logUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">'Alex'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// { username: 'Alex', age: 0, sex: 'male' }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-object-keys-、object-values-和-object-entries" tabindex="-1"><a class="header-anchor" href="#_5-3-object-keys-、object-values-和-object-entries" aria-hidden="true">#</a> 5.3 Object.keys()、Object.values() 和 Object.entries()</h3>
<p><code v-pre>Object.keys</code>方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名。</p>
<p><code v-pre>Object.values</code>方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值。</p>
<p><code v-pre>Object.entries()</code>方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 基本用法</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Alex'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 返回键数组</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// [ 'name', 'age' ]</span>
<span class="token comment">// 返回值数组</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// [ 'Alex', 18 ]</span>
<span class="token comment">// 返回键值二维数组</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">// [ [ 'name', 'Alex' ], [ 'age', 18 ] ]</span>


<span class="token comment">// 与数组类似方法的区别</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>			<span class="token comment">// Object [Array Iterator] {}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// Object [Array Iterator] {}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// Object [Array Iterator] {}</span>
<span class="token comment">// 数组的 keys()、values()、entries() 等方法是实例方法，返回的都是 Iterator</span>
<span class="token comment">// 对象的 Object.keys()、Object.values()、Object.entries() 等方法是构造函数方法，返回的是数组</span>


<span class="token comment">// 应用（使用 for...of 循环遍历对象）</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Alex'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>		
<span class="token punctuation">}</span>
<span class="token comment">// name</span>
<span class="token comment">// age</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> value <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>		
<span class="token punctuation">}</span>
<span class="token comment">// Alex</span>
<span class="token comment">// 18</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> entries <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>entries<span class="token punctuation">)</span><span class="token punctuation">;</span>	
<span class="token punctuation">}</span>
<span class="token comment">// [ 'name', 'Alex' ]</span>
<span class="token comment">// [ 'age', 18 ]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// name Alex</span>
<span class="token comment">// age 18</span>

<span class="token comment">// Object.keys()/values()/entires() 并不能保证顺序一定是你看到的样子，这一点和 for in 是一样的</span>
<span class="token comment">// 如果对遍历顺序有要求那么不能用 for in 以及这种方法，而要用其他方法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


