<template><div><h1 id="react-中的栈操作" tabindex="-1"><a class="header-anchor" href="#react-中的栈操作" aria-hidden="true">#</a> React 中的栈操作</h1>
<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2>
<p>来自 wiki 上的解释: <code v-pre>堆栈</code>(<code v-pre>stack</code>)又称为<code v-pre>栈</code>或<code v-pre>堆叠</code>, 是计算机科学中的一种抽象资料类型, 只允许在有序的线性资料集合的一端(称为堆栈顶端<code v-pre>top</code>)进行加入数据(<code v-pre>push</code>)和移除数据(<code v-pre>pop</code>)的运算. 因而按照后进先出(<code v-pre>LIFO, Last In First Out</code>)的原理运作.</p>
<p>注意:</p>
<ul>
<li><code v-pre>栈</code>(stack)又叫做<code v-pre>堆栈</code>, 这里特指数据结构中的<code v-pre>栈</code>(另一种<code v-pre>程序内存分配</code>中的栈, 本系列不做介绍, 读者可自行了解).</li>
<li><code v-pre>堆栈</code>中虽带有一个<code v-pre>堆</code>字, 只是命名, 不要和<code v-pre>堆</code>混淆.</li>
<li>常说的<code v-pre>堆</code>有 2 种指代, 一种是<code v-pre>数据结构</code>中的堆(在<RouterLink to="/notes/reactAlgorithm/heapsort.html">React 算法之堆排序</RouterLink>中有介绍), 另一种是<code v-pre>程序内存分配</code>中的堆(本系列不做介绍, 读者可自行了解).</li>
</ul>
<h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h2>
<ol>
<li>先入后出, 后入先出.</li>
<li>除头尾节点之外, 每个元素有一个前驱, 一个后继.</li>
</ol>
<h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2>
<ol>
<li>压栈: <code v-pre>push()</code></li>
<li>弹栈: <code v-pre>pop((</code></li>
<li>预览栈顶元素: <code v-pre>peek()</code></li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Stack</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataStore <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 压栈</span>
  <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataStore<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>top<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> element<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 弹栈</span>
  <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dataStore<span class="token punctuation">[</span><span class="token operator">--</span><span class="token keyword">this</span><span class="token punctuation">.</span>top<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 预览栈顶元素</span>
  <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dataStore<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>top <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 检测栈内存储了多少个元素</span>
  <span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>top<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 清空栈</span>
  <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试代码:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'压栈a: '</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'压栈b: '</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'压栈c: '</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'c'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'栈高度: '</span><span class="token punctuation">,</span> stack<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'栈顶元素: '</span><span class="token punctuation">,</span> stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'弹出: '</span><span class="token punctuation">,</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'栈顶元素: '</span><span class="token punctuation">,</span> stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'压栈d: '</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'栈顶元素: '</span><span class="token punctuation">,</span> stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'清空栈: '</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  stack<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'栈高度: '</span><span class="token punctuation">,</span> stack<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'压栈e: '</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'e'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'栈顶元素: '</span><span class="token punctuation">,</span> stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用栈先进后出的特性, 在实际编码中应用非常广泛. 如<code v-pre>回溯</code>,<code v-pre>递归</code>,<code v-pre>深度优先搜索</code>等经典算法都可以利用栈的特性来实现. 由于本文的目的是讲解栈<code v-pre>react</code>中的使用场景, 所以与栈相关的经典案例本文不再列举, 请读者移步其他算法资料.</p>
<h2 id="react-当中的使用场景" tabindex="-1"><a class="header-anchor" href="#react-当中的使用场景" aria-hidden="true">#</a> React 当中的使用场景</h2>
<h3 id="context-状态管理-context" tabindex="-1"><a class="header-anchor" href="#context-状态管理-context" aria-hidden="true">#</a> Context 状态管理 {#context}</h3>
<p>在<code v-pre>fiber</code>树创建过程中, 如果使用了<a href="https://zh-hans.reactjs.org/docs/context.html#reactcreatecontext" target="_blank" rel="noopener noreferrer"><code v-pre>Context api</code><ExternalLinkIcon/></a>(具体来说是使用<code v-pre>Context.Provider</code>, <code v-pre>Class.contextType</code>, <code v-pre>Context.Consumer</code>等<code v-pre>api</code>), <code v-pre>react</code>内部会维护一个<code v-pre>栈</code>来保存提供者(<code v-pre>Context.Provider</code>)的状态, 供给消费者(<code v-pre>Context.Consumer</code>)使用.</p>
<p>首先看<code v-pre>stack</code>的定义(<a href="https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberStack.old.js#L10-L71" target="_blank" rel="noopener noreferrer">ReactFiberStack.js<ExternalLinkIcon/></a>中):</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> type StackCursor<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">|</span> current<span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 维护一个全局stack</span>
<span class="token keyword">const</span> <span class="token literal-property property">valueStack</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>any<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">// 一个工厂函数, 创建StackCursor对象</span>
<span class="token keyword">function</span> createCursor<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">(</span>defaultValue<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> StackCursor<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">current</span><span class="token operator">:</span> defaultValue<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> boolean <span class="token punctuation">{</span>
  <span class="token keyword">return</span> index <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 出栈</span>
<span class="token keyword">function</span> pop<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">(</span>cursor<span class="token operator">:</span> StackCursor<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">,</span> <span class="token literal-property property">fiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  cursor<span class="token punctuation">.</span>current <span class="token operator">=</span> valueStack<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
  valueStack<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  index<span class="token operator">--</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 入栈</span>
<span class="token keyword">function</span> push<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">(</span>cursor<span class="token operator">:</span> StackCursor<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token literal-property property">fiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  index<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token comment">// 注意: 这里存储的是 cursor当前值, 随后更新了cursor.current为</span>
  valueStack<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> cursor<span class="token punctuation">.</span>current<span class="token punctuation">;</span>
  cursor<span class="token punctuation">.</span>current <span class="token operator">=</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>ReactFiberStack.js</code>源码中, 定义的<code v-pre>valueStack</code>作为全局变量, 用来存储所有的<code v-pre>StackCursor.current</code>(不仅仅存储<code v-pre>context api</code>相关的<code v-pre>StackCursor</code>, 在<code v-pre>context 原理</code>章节中详细解读, 本节只讨论与<code v-pre>context api</code>相关的栈操作).</p>
<p>注意<code v-pre>StackCursor</code>是一个泛型对象, 与<code v-pre>context api</code>相关的<code v-pre>StackCursor</code>定义在<a href="https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberNewContext.old.js#L38" target="_blank" rel="noopener noreferrer"><code v-pre>ReactFiberNewContext.js</code><ExternalLinkIcon/></a>:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 定义全局 valueCursor, 用于管理&lt;Context.Provider/>组件的value</span>
<span class="token keyword">const</span> <span class="token literal-property property">valueCursor</span><span class="token operator">:</span> StackCursor<span class="token operator">&lt;</span>mixed<span class="token operator">></span> <span class="token operator">=</span> <span class="token function">createCursor</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ...省略无关代码</span>

<span class="token comment">// 将context当前的值保存到valueCursor中, 并设置context._currentValue为最新值</span>
<span class="token comment">// 运行完成之后context为最新状态</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> pushProvider<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">(</span>providerFiber<span class="token operator">:</span> Fiber<span class="token punctuation">,</span> <span class="token literal-property property">nextValue</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">context</span><span class="token operator">:</span> ReactContext<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token operator">=</span> providerFiber<span class="token punctuation">.</span>type<span class="token punctuation">.</span>_context<span class="token punctuation">;</span>
  <span class="token function">push</span><span class="token punctuation">(</span>valueCursor<span class="token punctuation">,</span> context<span class="token punctuation">.</span>_currentValue<span class="token punctuation">,</span> providerFiber<span class="token punctuation">)</span><span class="token punctuation">;</span>
  context<span class="token punctuation">.</span>_currentValue <span class="token operator">=</span> nextValue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 取出valueCursor中保存的旧值, 设置到context._currentValue上.</span>
<span class="token comment">// 运行完成之后context恢复到上一个状态</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">popProvider</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">providerFiber</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> currentValue <span class="token operator">=</span> valueCursor<span class="token punctuation">.</span>current<span class="token punctuation">;</span>
  <span class="token function">pop</span><span class="token punctuation">(</span>valueCursor<span class="token punctuation">,</span> providerFiber<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token literal-property property">context</span><span class="token operator">:</span> ReactContext<span class="token operator">&lt;</span>any<span class="token operator">></span> <span class="token operator">=</span> providerFiber<span class="token punctuation">.</span>type<span class="token punctuation">.</span>_context<span class="token punctuation">;</span>
  context<span class="token punctuation">.</span>_currentValue <span class="token operator">=</span> currentValue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设有如下组件结构(平时开发很难有这样的代码, 此处完全是为了演示<code v-pre>context api</code>中涉及到的栈操作):</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> MyContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token comment">// 第一级</span>
    <span class="token operator">&lt;</span>MyContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>MyContext<span class="token punctuation">.</span>Consumer<span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">value1</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token comment">//第二级嵌套</span>
          <span class="token operator">&lt;</span>MyContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>MyContext<span class="token punctuation">.</span>Consumer<span class="token operator">></span>
              <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">value2</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
                <span class="token comment">// 第三级嵌套</span>
                <span class="token operator">&lt;</span>MyContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token operator">></span>
                  <span class="token operator">&lt;</span>MyContext<span class="token punctuation">.</span>Consumer<span class="token operator">></span>
                    <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">value3</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
                      <span class="token operator">&lt;</span>span<span class="token operator">></span>
                        <span class="token punctuation">{</span>value1<span class="token punctuation">}</span><span class="token operator">-</span><span class="token punctuation">{</span>value2<span class="token punctuation">}</span><span class="token operator">-</span><span class="token punctuation">{</span>value3<span class="token punctuation">}</span>
                      <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
                    <span class="token punctuation">)</span><span class="token punctuation">}</span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>MyContext<span class="token punctuation">.</span>Consumer<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>MyContext<span class="token punctuation">.</span>Provider<span class="token operator">></span>
              <span class="token punctuation">)</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>MyContext<span class="token punctuation">.</span>Consumer<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>MyContext<span class="token punctuation">.</span>Provider<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>MyContext<span class="token punctuation">.</span>Consumer<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>MyContext<span class="token punctuation">.</span>Provider<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可在<code v-pre>codesandbox</code>中查看<a href="https://codesandbox.io/s/inspiring-wildflower-lkpom?file=/src/App.js" target="_blank" rel="noopener noreferrer">运行结果<ExternalLinkIcon/></a>.</p>
<p>将<code v-pre>fiber</code>树构造过程中<code v-pre>MyContext</code>对象在栈中的变化情况表示出来:</p>
<ol>
<li>
<p><code v-pre>beginWork</code>阶段: 入栈</p>
<ul>
<li><code v-pre>reconciler</code>之前, 由于<code v-pre>const MyContext = React.createContext(0);</code>已经创建了<code v-pre>MyContext</code>对象, 所以其初始值是<code v-pre>0</code>.</li>
<li><code v-pre>reconciler</code>过程中, 每当遇到<code v-pre>Context.Provider</code>类型的节点, 则会执行<code v-pre>pushProvider</code>.</li>
</ul>
</li>
</ol>
<p><img src="@source/snapshots/stack/context-beginwork.png" alt=""></p>
<ol start="2">
<li><code v-pre>completeWork</code>阶段: 出栈
<ul>
<li><code v-pre>reconciler</code>过程中, 每当遇到<code v-pre>Context.Provider</code>类型的节点, 则会执行<code v-pre>popProvider</code>.</li>
<li><code v-pre>reconciler</code>之后, <code v-pre>valueStack</code>和<code v-pre>valueCursor</code>以及<code v-pre>MyContext</code>都恢复到了初始状态.</li>
</ul>
</li>
</ol>
<p><img src="@source/snapshots/stack/context-completework.png" alt=""></p>
<p>注意:</p>
<ul>
<li>本节只分析<code v-pre>context</code>实现源码中与<code v-pre>栈</code>相关的部分, 所以只涉及到了<code v-pre>Context.Provider</code>(供应者)节点.</li>
<li>对于<code v-pre>Context.Consumer</code>(消费者)以及更新阶段<code v-pre>context</code>的运行机制的深入解读放在<code v-pre>context原理</code>章节中.</li>
</ul>
<h3 id="executioncontext-执行上下文" tabindex="-1"><a class="header-anchor" href="#executioncontext-执行上下文" aria-hidden="true">#</a> executionContext 执行上下文</h3>
<p><code v-pre>executionContext</code>是在<code v-pre>ReactFiberWorkLoop.js</code>中定义的一个<a href="https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L247-L256" target="_blank" rel="noopener noreferrer">全局变量(相对于该闭包)<ExternalLinkIcon/></a>, 且定义成二进制变量, 通过位运算来维护其状态(在<RouterLink to="/notes/reactAlgorithm/bitfield.html">React 算法之位运算</RouterLink>一文中已有介绍).</p>
<p>表面上看<code v-pre>executionContext</code>和栈并没有直接关系, 但实际在改变<code v-pre>executionContext</code>的时候, 巧妙的利用了<code v-pre>函数调用栈</code>, 实现<code v-pre>executionContext</code>状态的维护.</p>
<p>本节主要是体现<code v-pre>executionContext</code>和<code v-pre>函数调用栈</code>之间的配合运用(<a href="https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L1117-L1207" target="_blank" rel="noopener noreferrer">具体源码<ExternalLinkIcon/></a>), 这里以<code v-pre>batchedUpdates</code>和<code v-pre>unbatchedUpdates</code>为例进行分析.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> batchedUpdates<span class="token operator">&lt;</span><span class="token constant">A</span><span class="token punctuation">,</span> <span class="token constant">R</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token constant">A</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token constant">R</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token constant">A</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">R</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在执行回调之前, 先改变 executionContext</span>
  <span class="token keyword">const</span> prevExecutionContext <span class="token operator">=</span> executionContext<span class="token punctuation">;</span>
  executionContext <span class="token operator">|=</span> BatchedContext<span class="token punctuation">;</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token comment">// 回调执行完毕之后, 再恢复到以前的值 prevExecutionContext</span>
    executionContext <span class="token operator">=</span> prevExecutionContext<span class="token punctuation">;</span>
    <span class="token comment">// ... 省略无关代码</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> unbatchedUpdates<span class="token operator">&lt;</span><span class="token constant">A</span><span class="token punctuation">,</span> <span class="token constant">R</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token constant">A</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token constant">R</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token constant">A</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">R</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> prevExecutionContext <span class="token operator">=</span> executionContext<span class="token punctuation">;</span>
  executionContext <span class="token operator">&amp;=</span> <span class="token operator">~</span>BatchedContext<span class="token punctuation">;</span>
  executionContext <span class="token operator">|=</span> LegacyUnbatchedContext<span class="token punctuation">;</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    executionContext <span class="token operator">=</span> prevExecutionContext<span class="token punctuation">;</span>
    <span class="token comment">// ... 省略无关代码</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// ... 省略其他函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些函数的共性:</p>
<ol>
<li>执行回调之前, 先保存当前值为<code v-pre>prevExecutionContext</code>, 再改变 <code v-pre>executionContext</code>.</li>
<li>在执行回调<code v-pre>fn</code>期间, 无论函数<code v-pre>fn</code>调用栈有多深, 被改变过的<code v-pre>executionContext</code>始终有效.</li>
<li>回调执行完毕之后, 恢复到以前的值 <code v-pre>prevExecutionContext</code>.</li>
</ol>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>本节主要介绍了<code v-pre>栈</code>在<code v-pre>react</code>源码中的使用情况. 涉及入栈出栈等基本操作(<code v-pre>Context</code> 状态管理), 以及对函数调用栈的巧妙运用(改变<code v-pre>executionContext</code>执行上下文).</p>
<p>由于<code v-pre>reconciler</code>过程是一个深度优先遍历过程, 对于<code v-pre>fiber树</code>来讲, 向下探寻(<code v-pre>beginWork</code>阶段)和向上回溯(<code v-pre>completeWork</code>阶段)天然就和栈的入栈(<code v-pre>push</code>)和出栈(<code v-pre>pop</code>)能够无缝配合(context 机制就是在这个特性上建立起来的).</p>
<h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>
<ul>
<li><a href="https://blog.csdn.net/K346K346/article/details/80849966" target="_blank" rel="noopener noreferrer">栈<ExternalLinkIcon/></a></li>
</ul>
</div></template>


