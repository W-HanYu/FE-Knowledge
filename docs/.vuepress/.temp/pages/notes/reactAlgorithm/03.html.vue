<template><div><h1 id="react-中的调和算法" tabindex="-1"><a class="header-anchor" href="#react-中的调和算法" aria-hidden="true">#</a> React 中的调和算法</h1>
<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2>
<p>调和函数(<a href="https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactChildFiber.old.js#L1274-L1410" target="_blank" rel="noopener noreferrer">源码<ExternalLinkIcon/></a>)是在<code v-pre>fiber树构(对比更新)</code>过程中对<code v-pre>旧fiber节点</code>与<code v-pre>新reactElement</code>进行比较, 判定<code v-pre>旧fiber节点</code>是否可以复用的一个比较函数.</p>
<p>调和函数仅是<code v-pre>fiber树构造</code>过程中的一个环节, 所以在深入理解这个函数之前, 建议对<code v-pre>fiber树构造</code>有一个宏观的理解(可以参考前文<RouterLink to="/notes/main/fibertree-create.html">fiber 树构造(初次创建)</RouterLink>, <RouterLink to="/notes/main/fibertree-update.html">fiber 树构造(对比更新)</RouterLink>), 本节重点探讨其算法的实现细节.</p>
<p>它的主要作用:</p>
<ol>
<li>给新增,移动,和删除节点设置<code v-pre>fiber.flags</code>(新增, 移动: <code v-pre>Placement</code>, 删除: <code v-pre>Deletion</code>)</li>
<li>如果是需要删除的<code v-pre>fiber</code>, <a href="https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactChildFiber.old.js#L275-L294" target="_blank" rel="noopener noreferrer">除了自身打上<code v-pre>Deletion</code>之外, 还要将其添加到父节点的<code v-pre>effects</code>链表中<ExternalLinkIcon/></a>(正常副作用队列的处理是在<code v-pre>completeWork</code>函数, 但是该节点(被删除)会脱离<code v-pre>fiber</code>树, 不会再进入<code v-pre>completeWork</code>阶段, 所以在<code v-pre>beginWork</code>阶段提前加入副作用队列).</li>
</ol>
<h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h2>
<p>算法复杂度低, 从上至下比较整个树形结构, 时间复杂度被缩短到 O(n)</p>
<h2 id="基本原理" tabindex="-1"><a class="header-anchor" href="#基本原理" aria-hidden="true">#</a> 基本原理</h2>
<ol>
<li>比较对象: <code v-pre>fiber</code>对象与<code v-pre>ReactElement</code>对象相比较.
<ul>
<li>注意: 此处有一个误区, 并不是两棵 fiber 树相比较, 而是<code v-pre>旧fiber</code>对象与<code v-pre>新ReactElement</code>对象向比较, 结果生成新的<code v-pre>fiber子节点</code>.</li>
<li>可以理解为输入<code v-pre>ReactElement</code>, 经过<code v-pre>reconcileChildren()</code>之后, 输出<code v-pre>fiber</code>.</li>
</ul>
</li>
<li>比较方案:
<ul>
<li>单节点比较</li>
<li>可迭代节点比较</li>
</ul>
</li>
</ol>
<h3 id="单节点比较" tabindex="-1"><a class="header-anchor" href="#单节点比较" aria-hidden="true">#</a> 单节点比较</h3>
<p>单节点的逻辑比较简明, 先直接看<a href="https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactChildFiber.old.js#L1135-L1233" target="_blank" rel="noopener noreferrer">源码<ExternalLinkIcon/></a>:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 只保留主干逻辑</span>
<span class="token keyword">function</span> <span class="token function">reconcileSingleElement</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">returnFiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">currentFirstChild</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">element</span><span class="token operator">:</span> ReactElement<span class="token punctuation">,</span>
  <span class="token literal-property property">lanes</span><span class="token operator">:</span> Lanes<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token punctuation">{</span>
  <span class="token keyword">const</span> key <span class="token operator">=</span> element<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
  <span class="token keyword">let</span> child <span class="token operator">=</span> currentFirstChild<span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>child <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// currentFirstChild !== null, 表明是对比更新阶段</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 1. key相同, 进一步判断 child.elementType === element.type</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 只看核心逻辑</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>elementType <span class="token operator">===</span> element<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 1.1 已经匹配上了, 如果有兄弟节点, 需要给兄弟节点打上Deletion标记</span>
            <span class="token function">deleteRemainingChildren</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> child<span class="token punctuation">.</span>sibling<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 1.2 构造fiber节点, 新的fiber对象会复用current.stateNode, 即可复用DOM对象</span>
            <span class="token keyword">const</span> existing <span class="token operator">=</span> <span class="token function">useFiber</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> element<span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
            existing<span class="token punctuation">.</span>ref <span class="token operator">=</span> <span class="token function">coerceRef</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> child<span class="token punctuation">,</span> element<span class="token punctuation">)</span><span class="token punctuation">;</span>
            existing<span class="token punctuation">.</span>return <span class="token operator">=</span> returnFiber<span class="token punctuation">;</span>
            <span class="token keyword">return</span> existing<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// Didn't match. 给当前节点点打上Deletion标记</span>
      <span class="token function">deleteRemainingChildren</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> child<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 2. key不相同, 匹配失败, 给当前节点打上Deletion标记</span>
      <span class="token function">deleteChild</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> child<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    child <span class="token operator">=</span> child<span class="token punctuation">.</span>sibling<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token punctuation">{</span>
    <span class="token comment">// ...省略部分代码, 只看核心逻辑</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 新建节点</span>
  <span class="token keyword">const</span> created <span class="token operator">=</span> <span class="token function">createFiberFromElement</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> returnFiber<span class="token punctuation">.</span>mode<span class="token punctuation">,</span> lanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
  created<span class="token punctuation">.</span>ref <span class="token operator">=</span> <span class="token function">coerceRef</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> currentFirstChild<span class="token punctuation">,</span> element<span class="token punctuation">)</span><span class="token punctuation">;</span>
  created<span class="token punctuation">.</span>return <span class="token operator">=</span> returnFiber<span class="token punctuation">;</span>
  <span class="token keyword">return</span> created<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>如果是新增节点, 直接新建 fiber, 没有多余的逻辑</li>
<li>如果是对比更新
<ul>
<li>如果<code v-pre>key</code>和<code v-pre>type</code>都相同(即: <code v-pre>ReactElement.key</code> === <code v-pre>Fiber.key</code> 且 <code v-pre>Fiber.elementType === ReactElement.type</code>), 则复用</li>
<li>否则新建</li>
</ul>
</li>
</ol>
<p>注意: 复用过程是调用<code v-pre>useFiber(child, element.props)</code>创建<code v-pre>新的fiber</code>对象, 这个<code v-pre>新fiber对象.stateNode = currentFirstChild.stateNode</code>, 即<code v-pre>stateNode</code>属性得到了复用, 故 DOM 节点得到了复用.</p>
<h3 id="可迭代节点比较-数组类型-symbol-iterator-fn-iterator-fn" tabindex="-1"><a class="header-anchor" href="#可迭代节点比较-数组类型-symbol-iterator-fn-iterator-fn" aria-hidden="true">#</a> 可迭代节点比较(数组类型, [Symbol.iterator]=fn,[@@iterator]=fn)</h3>
<p>可迭代节点比较, 在<a href="https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactChildFiber.old.js#L1346-L1362" target="_blank" rel="noopener noreferrer">源码中<ExternalLinkIcon/></a>被分为了 2 个部分:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">reconcileChildFibers</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">returnFiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">currentFirstChild</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">newChild</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">lanes</span><span class="token operator">:</span> Lanes<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isArray</span><span class="token punctuation">(</span>newChild<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">reconcileChildrenArray</span><span class="token punctuation">(</span>
      returnFiber<span class="token punctuation">,</span>
      currentFirstChild<span class="token punctuation">,</span>
      newChild<span class="token punctuation">,</span>
      lanes<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getIteratorFn</span><span class="token punctuation">(</span>newChild<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">reconcileChildrenIterator</span><span class="token punctuation">(</span>
      returnFiber<span class="token punctuation">,</span>
      currentFirstChild<span class="token punctuation">,</span>
      newChild<span class="token punctuation">,</span>
      lanes<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中<code v-pre>reconcileChildrenArray函数</code>(针对数组类型)和<code v-pre>reconcileChildrenIterator</code>(针对可迭代类型)的核心逻辑几乎一致, 下文将分析<a href="https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactChildFiber.old.js#L771-L924" target="_blank" rel="noopener noreferrer"><code v-pre>reconcileChildrenArray()</code>函数<ExternalLinkIcon/></a>. 如果是新增节点, 所有的比较逻辑都无法命中, 只有<code v-pre>对比更新</code>过程, 才有实际作用, 所以下文重点分析<code v-pre>对比更新</code>的情况.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">reconcileChildrenArray</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">returnFiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">currentFirstChild</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">newChildren</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span><span class="token operator">*</span><span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token literal-property property">lanes</span><span class="token operator">:</span> Lanes<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token literal-property property">resultingFirstChild</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> <span class="token literal-property property">previousNewFiber</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> oldFiber <span class="token operator">=</span> currentFirstChild<span class="token punctuation">;</span>
  <span class="token keyword">let</span> lastPlacedIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> newIdx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> nextOldFiber <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token comment">// 1. 第一次循环: 遍历最长公共序列(key相同), 公共序列的节点都视为可复用</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> oldFiber <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> newIdx <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> newIdx<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 后文分析</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>newIdx <span class="token operator">===</span> newChildren<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果newChildren序列被遍历完, 那么oldFiber序列中剩余节点都视为删除(打上Deletion标记)</span>
    <span class="token function">deleteRemainingChildren</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> oldFiber<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> resultingFirstChild<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>oldFiber <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果oldFiber序列被遍历完, 那么newChildren序列中剩余节点都视为新增(打上Placement标记)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> newIdx <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> newIdx<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 后文分析</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> resultingFirstChild<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// ==================分割线==================</span>
  <span class="token keyword">const</span> existingChildren <span class="token operator">=</span> <span class="token function">mapRemainingChildren</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> oldFiber<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 2. 第二次循环: 遍历剩余非公共序列, 优先复用oldFiber序列中的节点</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> newIdx <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> newIdx<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>shouldTrackSideEffects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// newChildren已经遍历完, 那么oldFiber序列中剩余节点都视为删除(打上Deletion标记)</span>
    existingChildren<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">child</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">deleteChild</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> child<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> resultingFirstChild<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>reconcileChildrenArray</code>函数源码看似很长, 梳理其主干之后, 其实非常清晰.</p>
<p>通过形参, 首先明确比较对象是<code v-pre>currentFirstChild: Fiber | null</code>和<code v-pre>newChildren: Array&lt;*&gt;</code>:</p>
<ul>
<li><code v-pre>currentFirstChild</code>: 是一个<code v-pre>fiber</code>节点, 通过<code v-pre>fiber.sibling</code>可以将兄弟节点全部遍历出来. 所以可以将<code v-pre>currentFirstChild</code>理解为链表头部, 它代表一个序列, 源码中被记为<code v-pre>oldFiber</code>.</li>
<li><code v-pre>newChildren</code>: 是一个数组, 其中包含了若干个<code v-pre>ReactElement</code>对象. 所以<code v-pre>newChildren</code>也代表一个序列.</li>
</ul>
<p>所以<code v-pre>reconcileChildrenArray</code>实际就是 2 个序列之间的比较(<code v-pre>链表oldFiber</code>和<code v-pre>数组newChildren</code>), 最后返回合理的<code v-pre>fiber</code>序列.</p>
<p>上述代码中, 以注释分割线为界限, 整个核心逻辑分为 2 步骤:</p>
<ol>
<li>第一次循环: 遍历最长<code v-pre>公共</code>序列(key 相同), 公共序列的节点都视为可复用
<ul>
<li>如果<code v-pre>newChildren序列</code>被遍历完, 那么<code v-pre>oldFiber序列</code>中剩余节点都视为删除(打上<code v-pre>Deletion</code>标记)</li>
<li>如果<code v-pre>oldFiber序列</code>被遍历完, 那么<code v-pre>newChildren序列</code>中剩余节点都视为新增(打上<code v-pre>Placement</code>标记)</li>
</ul>
</li>
<li>第二次循环: 遍历剩余<code v-pre>非公共</code>序列, 优先复用 oldFiber 序列中的节点
<ul>
<li>在对比更新阶段(非初次创建<code v-pre>fiber</code>, 此时<code v-pre>shouldTrackSideEffects</code>被设置为 true). 第二次循环遍历完成之后, <code v-pre>oldFiber序列中</code>没有匹配上的节点都视为删除(打上<code v-pre>Deletion</code>标记)</li>
</ul>
</li>
</ol>
<p>假设有如下图所示 2 个初始化序列:</p>
<p><img src="@source/snapshots/diff/before-traverse.png" alt=""></p>
<p>接下来第一次循环, 会遍历公共序列<code v-pre>A,B</code>, 生成的 fiber 节点<code v-pre>fiber(A), fiber(B)</code>可以复用.</p>
<p><img src="@source/snapshots/diff/traverse1.png" alt=""></p>
<p>最后第二次循环, 会遍历剩余序列<code v-pre>E,C,X,Y</code>:</p>
<ul>
<li>生成的 fiber 节点<code v-pre>fiber(E), fiber(C)</code>可以复用. 其中<code v-pre>fiber(C)</code>节点发生了位移(打上<code v-pre>Placement</code>标记).</li>
<li><code v-pre>fiber(X), fiber(Y)</code>是新增(打上<code v-pre>Placement</code>标记).</li>
<li>同时<code v-pre>oldFiber</code>序列中的<code v-pre>fiber(D)</code>节点确定被删除(打上<code v-pre>Deletion</code>标记).</li>
</ul>
<p><img src="@source/snapshots/diff/traverse2.png" alt=""></p>
<p>整个主干逻辑就介绍完了, 接下来贴上完整源码</p>
<blockquote>
<p>第一次循环</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 1. 第一次循环: 遍历最长公共序列(key相同), 公共序列的节点都视为可复用</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> oldFiber <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> newIdx <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> newIdx<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>oldFiber<span class="token punctuation">.</span>index <span class="token operator">></span> newIdx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nextOldFiber <span class="token operator">=</span> oldFiber<span class="token punctuation">;</span>
    oldFiber <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    nextOldFiber <span class="token operator">=</span> oldFiber<span class="token punctuation">.</span>sibling<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// new槽位和old槽位进行比较, 如果key不同, 返回null</span>
  <span class="token comment">// key相同, 比较type是否一致. type一致则执行useFiber(update逻辑), type不一致则运行createXXX(insert逻辑)</span>
  <span class="token keyword">const</span> newFiber <span class="token operator">=</span> <span class="token function">updateSlot</span><span class="token punctuation">(</span>
    returnFiber<span class="token punctuation">,</span>
    oldFiber<span class="token punctuation">,</span>
    newChildren<span class="token punctuation">[</span>newIdx<span class="token punctuation">]</span><span class="token punctuation">,</span>
    lanes<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>newFiber <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果返回null, 表明key不同. 无法满足公共序列条件, 退出循环</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>oldFiber <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      oldFiber <span class="token operator">=</span> nextOldFiber<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>shouldTrackSideEffects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 若是新增节点, 则给老节点打上Deletion标记</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>oldFiber <span class="token operator">&amp;&amp;</span> newFiber<span class="token punctuation">.</span>alternate <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">deleteChild</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> oldFiber<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// lastPlacedIndex 记录被移动的节点索引</span>
  <span class="token comment">// 如果当前节点可复用, 则要判断位置是否移动.</span>
  lastPlacedIndex <span class="token operator">=</span> <span class="token function">placeChild</span><span class="token punctuation">(</span>newFiber<span class="token punctuation">,</span> lastPlacedIndex<span class="token punctuation">,</span> newIdx<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 更新resultingFirstChild结果序列</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>previousNewFiber <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    resultingFirstChild <span class="token operator">=</span> newFiber<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    previousNewFiber<span class="token punctuation">.</span>sibling <span class="token operator">=</span> newFiber<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  previousNewFiber <span class="token operator">=</span> newFiber<span class="token punctuation">;</span>
  oldFiber <span class="token operator">=</span> nextOldFiber<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>第二次循环</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 1. 将第一次循环后, oldFiber剩余序列加入到一个map中. 目的是为了第二次循环能顺利的找到可复用节点</span>
<span class="token keyword">const</span> existingChildren <span class="token operator">=</span> <span class="token function">mapRemainingChildren</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> oldFiber<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. 第二次循环: 遍历剩余非公共序列, 优先复用oldFiber序列中的节点</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> newIdx <span class="token operator">&lt;</span> newChildren<span class="token punctuation">.</span>length<span class="token punctuation">;</span> newIdx<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> newFiber <span class="token operator">=</span> <span class="token function">updateFromMap</span><span class="token punctuation">(</span>
    existingChildren<span class="token punctuation">,</span>
    returnFiber<span class="token punctuation">,</span>
    newIdx<span class="token punctuation">,</span>
    newChildren<span class="token punctuation">[</span>newIdx<span class="token punctuation">]</span><span class="token punctuation">,</span>
    lanes<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>newFiber <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>shouldTrackSideEffects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>newFiber<span class="token punctuation">.</span>alternate <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果newFiber是通过复用创建的, 则清理map中对应的老节点</span>
        existingChildren<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>newFiber<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> newIdx <span class="token operator">:</span> newFiber<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    lastPlacedIndex <span class="token operator">=</span> <span class="token function">placeChild</span><span class="token punctuation">(</span>newFiber<span class="token punctuation">,</span> lastPlacedIndex<span class="token punctuation">,</span> newIdx<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 更新resultingFirstChild结果序列</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>previousNewFiber <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      resultingFirstChild <span class="token operator">=</span> newFiber<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      previousNewFiber<span class="token punctuation">.</span>sibling <span class="token operator">=</span> newFiber<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    previousNewFiber <span class="token operator">=</span> newFiber<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 3. 善后工作, 第二次循环完成之后, existingChildren中剩余的fiber节点就是将要被删除的节点, 打上Deletion标记</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>shouldTrackSideEffects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  existingChildren<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">child</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">deleteChild</span><span class="token punctuation">(</span>returnFiber<span class="token punctuation">,</span> child<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h3>
<p>无论是单节点还是可迭代节点的比较, 最终的目的都是生成下级子节点. 并在<code v-pre>reconcileChildren</code>过程中, 给一些有副作用的节点(新增, 删除, 移动位置等)打上副作用标记, 等待 commit 阶段(参考<RouterLink to="/notes/main/commit.html">fiber 树渲染</RouterLink>)的处理.</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>本节介绍了 React 源码中, <code v-pre>fiber构造循环</code>阶段用于生成下级子节点的<code v-pre>reconcileChildren</code>函数(函数中的算法被称为调和算法), 并演示了<code v-pre>可迭代节点比较</code>的图解示例. 该算法十分巧妙, 其核心逻辑把<code v-pre>newChildren序列</code>分为 2 步遍历, 先遍历公共序列, 再遍历非公共部分, 同时复用<code v-pre>oldFiber</code>序列中的节点.</p>
</div></template>


