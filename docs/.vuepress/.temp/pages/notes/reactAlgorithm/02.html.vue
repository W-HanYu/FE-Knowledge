<template><div><h1 id="react-中的深度优先遍历" tabindex="-1"><a class="header-anchor" href="#react-中的深度优先遍历" aria-hidden="true">#</a> React 中的深度优先遍历</h1>
<p>对于树或图结构的搜索(或遍历)来讲, 分为深度优先(DFS)和广度优先(BFS).</p>
<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2>
<p>深度优先遍历: DFS(英语:Depth-First-Search,DFS)是一种用于遍历或搜索树或图的算法.</p>
<p>来自 wiki 上的解释(更权威): 当<code v-pre>节点v</code>的所在边都己被探寻过, 搜索将回溯到发现<code v-pre>节点v</code>的那条边的起始节点. 这一过程一直进行到已发现从源节点可达的所有节点为止. 如果还存在未被发现的节点, 则选择其中一个作为源节点并重复以上过程, 整个进程反复进行直到所有节点都被访问为止.</p>
<h2 id="实现方式" tabindex="-1"><a class="header-anchor" href="#实现方式" aria-hidden="true">#</a> 实现方式</h2>
<p>DFS 的主流实现方式有 2 种.</p>
<ol>
<li>递归(简单粗暴)</li>
<li>利用<code v-pre>栈</code>存储遍历路径</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'探寻阶段: '</span><span class="token punctuation">,</span> node<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  node<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">child</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'回溯阶段: '</span><span class="token punctuation">,</span> node<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>使用栈</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// 因为要分辨探寻阶段和回溯阶段, 所以必须要一个属性来记录是否已经访问过该节点</span>
  <span class="token comment">// 如果不打印探寻和回溯, 就不需要此属性</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>visited <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 栈顶元素还存在, 就继续循环</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>node <span class="token operator">=</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>visited<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'回溯阶段: '</span><span class="token punctuation">,</span> node<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 回溯完成, 弹出该元素</span>
      stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'探寻阶段: '</span><span class="token punctuation">,</span> node<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
      node<span class="token punctuation">.</span>visited <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token comment">// 利用栈的先进后出的特性, 倒序将节点送入栈中</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> node<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-当中的使用场景" tabindex="-1"><a class="header-anchor" href="#react-当中的使用场景" aria-hidden="true">#</a> React 当中的使用场景</h2>
<p>深度优先遍历在<code v-pre>react</code>当中的使用非常典型, 最主要的使用时在<code v-pre>ReactElement</code>和<code v-pre>fiber</code>树的构造过程. 其次是在使用<code v-pre>context</code>时, 需要深度优先地查找消费<code v-pre>context</code>的节点.</p>
<h3 id="reactelement-树-的构造" tabindex="-1"><a class="header-anchor" href="#reactelement-树-的构造" aria-hidden="true">#</a> ReactElement &quot;树&quot;的构造</h3>
<p><code v-pre>ReactElement</code>不能算是严格的树结构, 为了方便表述, 后文都称之为树.</p>
<p>在<code v-pre>react-reconciler</code>包中, <code v-pre>ReactElement</code>的构造过程实际上是嵌套在<code v-pre>fiber树构造循环</code>过程中的, 与<code v-pre>fiber</code>树的构造是相互交替进行的(在<code v-pre>fiber 树构建</code>章节中详细解读, 本节只介绍深度优先遍历的使用场景).</p>
<p><code v-pre>ReactElement</code>树的构造, 实际上就是各级组件<code v-pre>render</code>之后的总和. 整个过程体现在<code v-pre>reconciler</code>工作循环之中.</p>
<p>源码位于<a href="https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L1558" target="_blank" rel="noopener noreferrer"><code v-pre>ReactFiberWorkLoop.js</code><ExternalLinkIcon/></a>中, 此处为了简明, 已经将源码中与 dfs 无关的旁支逻辑去掉.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">workLoopSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. 最外层循环, 保证每一个节点都能遍历, 不会遗漏</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>workInProgress <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span>workInProgress<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">unitOfWork</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> current <span class="token operator">=</span> unitOfWork<span class="token punctuation">.</span>alternate<span class="token punctuation">;</span>
  <span class="token keyword">let</span> next<span class="token punctuation">;</span>
  <span class="token comment">// 2. beginWork是向下探寻阶段</span>
  next <span class="token operator">=</span> <span class="token function">beginWork</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> unitOfWork<span class="token punctuation">,</span> subtreeRenderLanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 3. completeUnitOfWork 是回溯阶段</span>
    <span class="token function">completeUnitOfWork</span><span class="token punctuation">(</span>unitOfWork<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    workInProgress <span class="token operator">=</span> next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">completeUnitOfWork</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">unitOfWork</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> completedWork <span class="token operator">=</span> unitOfWork<span class="token punctuation">;</span>
  <span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> current <span class="token operator">=</span> completedWork<span class="token punctuation">.</span>alternate<span class="token punctuation">;</span>
    <span class="token keyword">const</span> returnFiber <span class="token operator">=</span> completedWork<span class="token punctuation">.</span>return<span class="token punctuation">;</span>
    <span class="token keyword">let</span> next<span class="token punctuation">;</span>
    <span class="token comment">// 3.1 回溯并处理节点</span>
    next <span class="token operator">=</span> <span class="token function">completeWork</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> completedWork<span class="token punctuation">,</span> subtreeRenderLanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 判断在处理节点的过程中, 是否派生出新的节点</span>
      workInProgress <span class="token operator">=</span> next<span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> siblingFiber <span class="token operator">=</span> completedWork<span class="token punctuation">.</span>sibling<span class="token punctuation">;</span>
    <span class="token comment">// 3.2 判断是否有旁支</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>siblingFiber <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      workInProgress <span class="token operator">=</span> siblingFiber<span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 3.3 没有旁支 继续回溯</span>
    completedWork <span class="token operator">=</span> returnFiber<span class="token punctuation">;</span>
    workInProgress <span class="token operator">=</span> completedWork<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>completedWork <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上源码本质上是采用递归的方式进行 dfs, 假设有以下组件结构:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>header<span class="token operator">></span>header<span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">></span>
        <span class="token operator">&lt;</span>Content <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>footer<span class="token operator">></span>footer<span class="token operator">&lt;</span><span class="token operator">/</span>footer<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Content</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Fragment<span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>Fragment<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>则可以绘制出遍历路径如下:</p>
<img src="@source/snapshots/dfs/dfs-reactelement.png" width="500"/>
<p>注意:</p>
<ul>
<li><code v-pre>ReactElement</code>树是在大循环中的<code v-pre>beginWork</code>阶段&quot;逐级&quot;生成的.</li>
<li>&quot;逐级&quot;中的每一级是指一个<code v-pre>class</code>或<code v-pre>function</code>类型的组件, 每调用一次<code v-pre>render</code>或执行一次<code v-pre>function</code>调用, 就会生成一批<code v-pre>ReactElement</code>节点.</li>
<li><code v-pre>ReactElement</code>树的构造, 实际上就是各级组件<code v-pre>render</code>之后的总和.</li>
</ul>
<h3 id="fiber-树的构造" tabindex="-1"><a class="header-anchor" href="#fiber-树的构造" aria-hidden="true">#</a> fiber 树的构造</h3>
<p>在<code v-pre>ReactElement</code>的构造过程中, 同时伴随着<code v-pre>fiber</code>树的构造, <code v-pre>fiber</code>树同样也是在<code v-pre>beginWork</code>阶段生成的.</p>
<p>绘制出遍历路径如下:</p>
<p><img src="@source/snapshots/dfs/dfs-fibertree.png" alt=""></p>
<h3 id="查找-context-的消费节点" tabindex="-1"><a class="header-anchor" href="#查找-context-的消费节点" aria-hidden="true">#</a> 查找 context 的消费节点</h3>
<p>当<code v-pre>context</code>改变之后, 需要找出依赖该<code v-pre>context</code>的所有子节点(详细分析会在<code v-pre>context原理</code>章节深入解读), 这里同样也是一个<code v-pre>DFS</code>, 具体源码在<a href="https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberNewContext.old.js#L182-L295" target="_blank" rel="noopener noreferrer">ReactFiberNewContext.js<ExternalLinkIcon/></a>.</p>
<p>将其主干逻辑剥离出来, 可以清晰的看出采用循环递归的方式进行遍历:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">propagateContextChange</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">context</span><span class="token operator">:</span> ReactContext<span class="token operator">&lt;</span>mixed<span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token literal-property property">changedBits</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
  <span class="token literal-property property">renderLanes</span><span class="token operator">:</span> Lanes<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> fiber <span class="token operator">=</span> workInProgress<span class="token punctuation">.</span>child<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>fiber <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> nextFiber<span class="token punctuation">;</span>
    <span class="token comment">// Visit this fiber.</span>
    <span class="token keyword">const</span> list <span class="token operator">=</span> fiber<span class="token punctuation">.</span>dependencies<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>list <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 匹配context等逻辑, 和dfs无关, 此处可以暂时忽略</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 向下探寻</span>
      nextFiber <span class="token operator">=</span> fiber<span class="token punctuation">.</span>child<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    fiber <span class="token operator">=</span> nextFiber<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>由于<code v-pre>react</code>内部使用了<code v-pre>ReactElement</code>和<code v-pre>fiber</code>两大树形结构, 所以有不少关于节点访问的逻辑.</p>
<p>本节主要介绍了<code v-pre>DFS</code>的概念和它在<code v-pre>react</code>源码中的使用情况. 其中<code v-pre>fiber</code>树的<code v-pre>DFS</code>遍历, 涉及到的代码多, 分布广, 涵盖了<code v-pre>reconciler</code>阶段的大部分工作, 是<code v-pre>reconciler</code>阶段工作循环的核心流程.</p>
<p>除了<code v-pre>DFS</code>之外, 源码中还有很多逻辑都是查找树中的节点(如: 向上查找父节点等). 对树形结构的遍历在源码中的比例很高, 了解这些算法技巧能够更好的理解<code v-pre>react</code>源码.</p>
<h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>
<p><a href="https://zh.wikipedia.org/wiki/%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2" target="_blank" rel="noopener noreferrer">深度优先搜索<ExternalLinkIcon/></a></p>
</div></template>


