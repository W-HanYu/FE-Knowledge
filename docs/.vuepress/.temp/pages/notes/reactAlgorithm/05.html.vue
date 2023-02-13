<template><div><h1 id="react-中的链表操作" tabindex="-1"><a class="header-anchor" href="#react-中的链表操作" aria-hidden="true">#</a> React 中的链表操作</h1>
<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2>
<p>来自 wiki 上的解释: 链表（Linked list）是一种常见的基础数据结构, 是一种线性表, 但是并不会按线性的顺序存储数据, 而是在每一个节点里存到下一个节点的指针(Pointer).由于不必须按顺序存储，链表在插入的时候可以达到 O(1)的复杂度, 但是查找一个节点或者访问特定编号的节点则需要 O(n)的时间.</p>
<ol>
<li>单向链表: 每个节点包含两个域, 一个信息域和一个指针域. 这个指针指向列表中的下一个节点, 而最后一个节点则指向一个空值.</li>
<li>双向链表: 每个节点有两个连接, 一个指向前一个节点(第一个节点指向空值), 而另一个指向下一个节点(最后一个节点指向空值).</li>
<li>循环链表: 在单向链表的基础上, 首节点和末节点被连接在一起.</li>
</ol>
<p><img src="@source/snapshots/linkedlist/summary.png" alt=""></p>
<h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2>
<ol>
<li>节点插入, 时间复杂度<code v-pre>O(1)</code></li>
<li>节点查找, 时间复杂度<code v-pre>O(n)</code></li>
<li>节点删除, 时间复杂度<code v-pre>O(1)</code></li>
<li>反转链表, 时间复杂度<code v-pre>O(n)</code></li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 定义Node节点类型</span>
<span class="token keyword">function</span> <span class="token function">Node</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 链表</span>
<span class="token keyword">function</span> <span class="token function">LinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token string">'head'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 查找node节点的前一个节点</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">findPrevious</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>currentNode <span class="token operator">&amp;&amp;</span> currentNode<span class="token punctuation">.</span>next <span class="token operator">!==</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      currentNode <span class="token operator">=</span> currentNode<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> currentNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 在node后插入新节点newElement</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">insert</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    node<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 删除节点</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">remove</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> previousNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">findPrevious</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>previousNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      previousNode<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 反转链表</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">reverse</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> tempNode <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token comment">// 重新设置next指针, 使其指向前一个节点</span>
      current<span class="token punctuation">.</span>next <span class="token operator">=</span> prev<span class="token punctuation">;</span>
      <span class="token comment">// 游标后移</span>
      prev <span class="token operator">=</span> current<span class="token punctuation">;</span>
      current <span class="token operator">=</span> tempNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 重新设置head节点</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> prev<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-当中的使用场景" tabindex="-1"><a class="header-anchor" href="#react-当中的使用场景" aria-hidden="true">#</a> React 当中的使用场景</h2>
<p>在 react 中, 链表的使用非常高频, 主要集中在<code v-pre>fiber</code>和<code v-pre>hook</code>对象的属性中.</p>
<h3 id="fiber-对象" tabindex="-1"><a class="header-anchor" href="#fiber-对象" aria-hidden="true">#</a> fiber 对象</h3>
<p>在<RouterLink to="/notes/main/object-structure.html#Fiber">react 高频对象</RouterLink>中对<code v-pre>fiber</code>对象的属性做了说明, 这里列举出 4 个链表属性.</p>
<ol>
<li>
<p><code v-pre>effect</code>链表(链式队列): 存储有副作用的子节点, 构成该队列的元素是<code v-pre>fiber</code>对象</p>
<ul>
<li><code v-pre>fiber.nextEffect</code>: 单向链表, 指向下一个有副作用的 fiber 节点.</li>
<li><code v-pre>fiber.firstEffect</code>: 指向副作用链表中的第一个 fiber 节点.</li>
<li><code v-pre>fiber.lastEffect</code>: 指向副作用链表中的最后一个 fiber 节点.</li>
</ul>
<img src="@source/snapshots/linkedlist/effects.png" width="600">
<p>注意: 此处只表示出链表的结构示意图, 在<code v-pre>fiber 树构造</code>章节中会对上图的结构进行详细解读.</p>
</li>
<li>
<p><code v-pre>updateQueue</code>链表(链式队列): 存储将要更新的状态, 构成该队列的元素是<code v-pre>update</code>对象</p>
<ul>
<li><code v-pre>fiber.updateQueue.pending</code>: 存储<code v-pre>state</code>更新的队列(链式队列), <code v-pre>class</code>类型节点的<code v-pre>state</code>改动之后, 都会创建一个<code v-pre>update</code>对象添加到这个队列中. 由于此队列是一个环形队列, 为了方便添加新元素和快速拿到队首元素, 所以<code v-pre>pending</code>指针指向了队列中最后一个元素.</li>
</ul>
<p><img src="@source/snapshots/data-structure/updatequeue.png" alt=""></p>
<p>注意: 此处只表示出链表的结构示意图, 在<code v-pre>状态组件(class 与 function)</code>章节中会对上图的结构进行详细解读.</p>
</li>
</ol>
<h3 id="hook-对象" tabindex="-1"><a class="header-anchor" href="#hook-对象" aria-hidden="true">#</a> Hook 对象</h3>
<p>在<RouterLink to="/notes/main/object-structure.html#Hook">react 高频对象</RouterLink>中对<code v-pre>Hook</code>对象的属性做了说明, <code v-pre>Hook</code>对象具备<code v-pre>.next</code>属性, 所以<code v-pre>Hook</code>对象本身就是链表中的一个节点.</p>
<p>此外<code v-pre>hook.queue.pending</code>也构成了一个链表, 将<code v-pre>hook</code>链表与<code v-pre>hook.queue.pending</code>链表同时表示在图中, 得到的结构如下:</p>
<p><img src="@source/snapshots/data-structure/fiber-hook.png" alt=""></p>
<p>注意: 此处只表示出链表的结构示意图, 在<code v-pre>hook 原理</code>章节中会对上图的结构进行详细解读.</p>
<h3 id="链表合并" tabindex="-1"><a class="header-anchor" href="#链表合并" aria-hidden="true">#</a> 链表合并</h3>
<p>在<code v-pre>react</code>中, 发起更新之后, 会通过<code v-pre>链表合并</code>的方式把等待(<code v-pre>pending</code>状态)更新的队列(<code v-pre>updateQueue</code>)合并到基础队列(<code v-pre>class</code>组件:<code v-pre>fiber.updateQueue.firstBaseUpdate</code>;<code v-pre>function</code>组件: <code v-pre>hook.baseQueue</code>), 最后通过遍历<code v-pre>baseQueue</code>筛选出优先级足够的<code v-pre>update</code>对象, 组合成最终的组件状态(<code v-pre>state</code>). 这个过程发生在<code v-pre>reconciler</code>阶段, 分别涉及到<code v-pre>class</code>组件和<code v-pre>function</code>组件.</p>
<p>具体场景:</p>
<ol>
<li>
<p><code v-pre>class</code>组件中</p>
<ul>
<li>
<p>在<code v-pre>class</code>组件中调用<code v-pre>setState</code>, 会创建<code v-pre>update</code>对象并添加到<code v-pre>fiber.updateQueue.shared.pending</code>链式队列(<a href="https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactUpdateQueue.old.js#L198-L230" target="_blank" rel="noopener noreferrer">源码地址<ExternalLinkIcon/></a>).</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> enqueueUpdate<span class="token operator">&lt;</span>State<span class="token operator">></span><span class="token punctuation">(</span>fiber<span class="token operator">:</span> Fiber<span class="token punctuation">,</span> <span class="token literal-property property">update</span><span class="token operator">:</span> Update<span class="token operator">&lt;</span>State<span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> updateQueue <span class="token operator">=</span> fiber<span class="token punctuation">.</span>updateQueue<span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
  <span class="token keyword">const</span> <span class="token literal-property property">sharedQueue</span><span class="token operator">:</span> SharedQueue<span class="token operator">&lt;</span>State<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span>updateQueue<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">.</span>shared<span class="token punctuation">;</span>
  <span class="token comment">// 将新的update对象添加到fiber.updateQueue.shared.pending链表上</span>
  <span class="token keyword">const</span> pending <span class="token operator">=</span> sharedQueue<span class="token punctuation">.</span>pending<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>pending <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    update<span class="token punctuation">.</span>next <span class="token operator">=</span> update<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    update<span class="token punctuation">.</span>next <span class="token operator">=</span> pending<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    pending<span class="token punctuation">.</span>next <span class="token operator">=</span> update<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  sharedQueue<span class="token punctuation">.</span>pending <span class="token operator">=</span> update<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于<code v-pre>fiber.updateQueue.shared.pending</code>是一个环形链表, 所以<code v-pre>fiber.updateQueue.shared.pending</code>永远指向末尾元素(保证快速添加新元素)</p>
<p><img src="@source/snapshots/linkedlist/fiber.updatequeue.png" alt=""></p>
</li>
<li>
<p>在<code v-pre>fiber</code>树构建阶段(或<code v-pre>reconciler</code>阶段), 会把<code v-pre>fiber.updateQueue.shared.pending</code>合并到<code v-pre>fiber.updateQueue.firstBaseUpdate</code>队列上(<a href="https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactUpdateQueue.old.js#L394-L572" target="_blank" rel="noopener noreferrer">源码地址<ExternalLinkIcon/></a>).</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> processUpdateQueue<span class="token operator">&lt;</span>State<span class="token operator">></span><span class="token punctuation">(</span>
  <span class="token literal-property property">workInProgress</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">instance</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">renderLanes</span><span class="token operator">:</span> Lanes<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token comment">// This is always non-null on a ClassComponent or HostRoot</span>
  <span class="token keyword">const</span> <span class="token literal-property property">queue</span><span class="token operator">:</span> UpdateQueue<span class="token operator">&lt;</span>State<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span>workInProgress<span class="token punctuation">.</span>updateQueue<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> firstBaseUpdate <span class="token operator">=</span> queue<span class="token punctuation">.</span>firstBaseUpdate<span class="token punctuation">;</span>
  <span class="token keyword">let</span> lastBaseUpdate <span class="token operator">=</span> queue<span class="token punctuation">.</span>lastBaseUpdate<span class="token punctuation">;</span>
  <span class="token comment">// Check if there are pending updates. If so, transfer them to the base queue.</span>
  <span class="token keyword">let</span> pendingQueue <span class="token operator">=</span> queue<span class="token punctuation">.</span>shared<span class="token punctuation">.</span>pending<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>pendingQueue <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    queue<span class="token punctuation">.</span>shared<span class="token punctuation">.</span>pending <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token comment">// The pending queue is circular. Disconnect the pointer between first</span>
    <span class="token comment">// and last so that it's non-circular.</span>
    <span class="token keyword">const</span> lastPendingUpdate <span class="token operator">=</span> pendingQueue<span class="token punctuation">;</span>
    <span class="token keyword">const</span> firstPendingUpdate <span class="token operator">=</span> lastPendingUpdate<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    lastPendingUpdate<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token comment">// Append pending updates to base queue</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>lastBaseUpdate <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      firstBaseUpdate <span class="token operator">=</span> firstPendingUpdate<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      lastBaseUpdate<span class="token punctuation">.</span>next <span class="token operator">=</span> firstPendingUpdate<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    lastBaseUpdate <span class="token operator">=</span> lastPendingUpdate<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/snapshots/linkedlist/fiber.updatequeue-merge-before.png" alt=""></p>
<p><img src="@source/snapshots/linkedlist/fiber.updatequeue-merge-after.png" alt=""></p>
</li>
</ul>
</li>
<li>
<p><code v-pre>function</code>组件中</p>
<ul>
<li>
<p>在<code v-pre>function</code>组件中使用<code v-pre>Hook</code>对象(<code v-pre>useState</code>), 并改变<code v-pre>Hook</code>对象的值(内部会调用<code v-pre>dispatchAction</code>), 此时也会创建<code v-pre>update(hook)</code>对象并添加到<code v-pre>hook.queue.pending</code>链式队列(<a href="https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberHooks.old.js#L1645-L1682" target="_blank" rel="noopener noreferrer">源码地址<ExternalLinkIcon/></a>).</p>
</li>
<li>
<p><code v-pre>hook.queue.pending</code>也是一个环形链表(与<code v-pre>fiber.updateQueue.shared.pending</code>的结构很相似)</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> dispatchAction<span class="token operator">&lt;</span><span class="token constant">S</span><span class="token punctuation">,</span> <span class="token constant">A</span><span class="token operator">></span><span class="token punctuation">(</span>
  <span class="token literal-property property">fiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>
  <span class="token literal-property property">queue</span><span class="token operator">:</span> UpdateQueue<span class="token operator">&lt;</span><span class="token constant">S</span><span class="token punctuation">,</span> <span class="token constant">A</span><span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token constant">A</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... 省略部分代码</span>
  <span class="token keyword">const</span> pending <span class="token operator">=</span> queue<span class="token punctuation">.</span>pending<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>pending <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// This is the first update. Create a circular list.</span>
    update<span class="token punctuation">.</span>next <span class="token operator">=</span> update<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    update<span class="token punctuation">.</span>next <span class="token operator">=</span> pending<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    pending<span class="token punctuation">.</span>next <span class="token operator">=</span> update<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  queue<span class="token punctuation">.</span>pending <span class="token operator">=</span> update<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在<code v-pre>fiber</code>树构建阶段(或<code v-pre>reconciler</code>阶段), 会将<code v-pre>hook.queue.pending</code>合并到<code v-pre>hook.baseQueue</code>队列上(<a href="https://github.com/facebook/react/blob/v17.0.2/packages/react-reconciler/src/ReactFiberHooks.old.js#L672-L694" target="_blank" rel="noopener noreferrer">源码地址<ExternalLinkIcon/></a>).</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> updateReducer<span class="token operator">&lt;</span><span class="token constant">S</span><span class="token punctuation">,</span> <span class="token constant">I</span><span class="token punctuation">,</span> <span class="token constant">A</span><span class="token operator">></span><span class="token punctuation">(</span>
  <span class="token function-variable function">reducer</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token constant">S</span><span class="token punctuation">,</span> <span class="token constant">A</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token constant">S</span><span class="token punctuation">,</span>
  <span class="token literal-property property">initialArg</span><span class="token operator">:</span> <span class="token constant">I</span><span class="token punctuation">,</span>
  init<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token constant">I</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token constant">S</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">S</span><span class="token punctuation">,</span> Dispatch<span class="token operator">&lt;</span><span class="token constant">A</span><span class="token operator">></span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... 省略部分代码</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>pendingQueue <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>baseQueue <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 在这里进行队列的合并</span>
      <span class="token keyword">const</span> baseFirst <span class="token operator">=</span> baseQueue<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token keyword">const</span> pendingFirst <span class="token operator">=</span> pendingQueue<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      baseQueue<span class="token punctuation">.</span>next <span class="token operator">=</span> pendingFirst<span class="token punctuation">;</span>
      pendingQueue<span class="token punctuation">.</span>next <span class="token operator">=</span> baseFirst<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    current<span class="token punctuation">.</span>baseQueue <span class="token operator">=</span> baseQueue <span class="token operator">=</span> pendingQueue<span class="token punctuation">;</span>
    queue<span class="token punctuation">.</span>pending <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/snapshots/linkedlist/hook.baseQueue-merge-before.png" alt=""></p>
<p><img src="@source/snapshots/linkedlist/hook.baseQueue-merge-after.png" alt=""></p>
</li>
</ul>
</li>
</ol>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>本节主要介绍了<code v-pre>链表</code>的概念和它在<code v-pre>react</code>源码中的使用情况. <code v-pre>react</code>中主要的数据结构都和链表有关, 使用非常高频. 源码中<code v-pre>链表合并</code>, <code v-pre>环形链表拆解</code>, <code v-pre>链表遍历</code>的代码篇幅很多, 所以深入理解链表的使用, 对理解<code v-pre>react原理</code>大有益处.</p>
<h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>
<ul>
<li><a href="https://zh.wikipedia.org/wiki/%E9%93%BE%E8%A1%A8" target="_blank" rel="noopener noreferrer">链表<ExternalLinkIcon/></a></li>
</ul>
</div></template>


