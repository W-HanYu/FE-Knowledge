<template><div><h1 id="react-中的堆排序" tabindex="-1"><a class="header-anchor" href="#react-中的堆排序" aria-hidden="true">#</a> React 中的堆排序</h1>
<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2>
<p>二叉堆是一种特殊的堆, 二叉堆是<a href="https://zh.wikipedia.org/wiki/%E4%BA%8C%E5%8F%89%E6%A0%91#%E5%AE%8C%E5%85%A8%E4%BA%8C%E5%8F%89%E6%A0%91" target="_blank" rel="noopener noreferrer">完全二叉树<ExternalLinkIcon/></a>或者近似完全二叉树.</p>
<p>堆排序是利用二叉堆的特性, 对根节点(最大或最小)进行循环提取, 从而达到排序目的(堆排序本质上是一种选择排序), 时间复杂度为<code v-pre>O(nlog n)</code>.</p>
<h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h2>
<ol>
<li>父节点的值&gt;=子节点的值(最大堆), 父节点的值&lt;=子节点的值(最小堆). 每个节点的左子树和右子树都是一个二叉堆.</li>
<li>假设一个数组<code v-pre>[k0, k1, k2, ...kn]</code>下标从 0 开始. 则<code v-pre>ki &lt;= k2i+1,ki &lt;= k2i+2</code> 或者 <code v-pre>ki &gt;= k2i+1,ki &gt;= k2i+2</code> (i = 0,1,2,3 .. n/2)</li>
</ol>
<h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2>
<p>假设现在有一个乱序数组, [5,8,0,10,4,6,1], 现在将其构造成一个最小堆</p>
<ol>
<li>构造二叉堆
<ul>
<li>需要从最后一个非叶子节点开始, 向下调整堆结构</li>
</ul>
</li>
</ol>
<p><img src="@source/snapshots/data-structure/minheap.png" alt=""></p>
<ol start="2">
<li>插入节点, 重新向上调整堆(<code v-pre>sift-up</code>)
<ul>
<li>将新元素插入到数组末尾之后, 要重新调整数组结构, 保证数组任然是最小(或最大)堆.</li>
</ul>
</li>
</ol>
<p><img src="@source/snapshots/data-structure/minheap-insert.png" alt=""></p>
<ol start="3">
<li>提取或删除根节点(顶端节点), 重新向下调整堆(<code v-pre>sift-down</code>)
<ul>
<li>对于最大堆, 提取的是最大值. 对于最小堆, 提取的是最小值.</li>
<li>顶点被提取之后, 要重新调整数组结构, 保证数组任然是最小(或最大)堆.</li>
</ul>
</li>
</ol>
<p><img src="@source/snapshots/data-structure/minheap-remove.png" alt=""></p>
<ol start="4">
<li>排序过程</li>
</ol>
<p>利用二叉堆的特性, 排序就是循环提取根节点的过程. 循环执行步骤 3, 直到将所有的节点都提取完成, 被提取的节点构成的数组就是一个有序数组.</p>
<p>注意:</p>
<ul>
<li>如需升序排序, 应该构造最大堆. 因为最大的元素最先被提取出来, 被放置到了数组的最后, 最终数组中最后一个元素为最大元素.</li>
<li>如需降序排序, 应该构造最小堆. 因为最小的元素最先被提取出来, 被放置到了数组的最后, 最终数组中最后一个元素为最小元素.</li>
<li>堆排序是一种不稳定排序(对于相同大小的元素, 在排序之后有可能和排序前的先后次序被打乱).</li>
</ul>
<h2 id="代码演示" tabindex="-1"><a class="header-anchor" href="#代码演示" aria-hidden="true">#</a> 代码演示</h2>
<p>将乱序数组<code v-pre>[5,8,0,10,4,6,1]</code>降序排列</p>
<p>步骤:</p>
<ol>
<li>构造最小堆</li>
<li>循环提取根节点, 直到全部提取完</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">minHeapSort</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. 构造最小堆</span>
  <span class="token function">buildMinHeap</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 2. 循环提取根节点arr[0], 直到全部提取完</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> tmp <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
    <span class="token function">siftDown</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 把整个数组构造成最小堆</span>
<span class="token keyword">const</span> <span class="token function-variable function">buildMinHeap</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> startIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> startIndex<span class="token punctuation">;</span> i <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">siftDown</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 从startIndex索引开始, 向下调整最小堆</span>
<span class="token keyword">const</span> <span class="token function-variable function">siftDown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> startIndex<span class="token punctuation">,</span> endIndex</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> leftChildIndx <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> startIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> rightChildIndx <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> startIndex <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> swapIndex <span class="token operator">=</span> startIndex<span class="token punctuation">;</span>
  <span class="token keyword">let</span> tmpNode <span class="token operator">=</span> arr<span class="token punctuation">[</span>startIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>leftChildIndx <span class="token operator">&lt;=</span> endIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>leftChildIndx<span class="token punctuation">]</span> <span class="token operator">&lt;</span> tmpNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 待定是否交换, 因为right子节点有可能更小</span>
      tmpNode <span class="token operator">=</span> arr<span class="token punctuation">[</span>leftChildIndx<span class="token punctuation">]</span><span class="token punctuation">;</span>
      swapIndex <span class="token operator">=</span> leftChildIndx<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rightChildIndx <span class="token operator">&lt;=</span> endIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>rightChildIndx<span class="token punctuation">]</span> <span class="token operator">&lt;</span> tmpNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 比left节点更小, 替换swapIndex</span>
      tmpNode <span class="token operator">=</span> arr<span class="token punctuation">[</span>rightChildIndx<span class="token punctuation">]</span><span class="token punctuation">;</span>
      swapIndex <span class="token operator">=</span> rightChildIndx<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>swapIndex <span class="token operator">!==</span> startIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1.交换节点</span>
    arr<span class="token punctuation">[</span>swapIndex<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>startIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
    arr<span class="token punctuation">[</span>startIndex<span class="token punctuation">]</span> <span class="token operator">=</span> tmpNode<span class="token punctuation">;</span>

    <span class="token comment">// 2. 递归调用, 继续向下调整</span>
    <span class="token function">siftDown</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> swapIndex<span class="token punctuation">,</span> endIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">minHeapSort</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [10, 8, 6, 5,4, 1, 0]</span>

<span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">minHeapSort</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ 5 ]</span>

<span class="token keyword">var</span> arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">minHeapSort</span><span class="token punctuation">(</span>arr3<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[ 5, 1 ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-当中的使用场景" tabindex="-1"><a class="header-anchor" href="#react-当中的使用场景" aria-hidden="true">#</a> React 当中的使用场景</h2>
<p>对于二叉堆的应用是在<code v-pre>scheduler</code>包中, 有 2 个数组<a href="https://github.com/facebook/react/blob/v17.0.2/packages/scheduler/src/Scheduler.js#L61-L63" target="_blank" rel="noopener noreferrer"><code v-pre>taskQueue</code>和<code v-pre>timerQueue</code><ExternalLinkIcon/></a>, 它们都是以<code v-pre>最小堆</code>的形式进行存储, 这样就能保证以<code v-pre>O(1)</code>的时间复杂度, 取到数组顶端的对象(优先级最高的 task).</p>
<p>具体的调用过程被封装到了<a href="https://github.com/facebook/react/blob/v17.0.2/packages/scheduler/src/SchedulerMinHeap.js#L41-L87" target="_blank" rel="noopener noreferrer"><code v-pre>SchedulerMinHeap.js</code><ExternalLinkIcon/></a>, 其中有 2 个函数<code v-pre>siftUp</code>,<code v-pre>siftDown</code>分别对应向上调整和向下调整.</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>type Heap <span class="token operator">=</span> Array<span class="token operator">&lt;</span>Node<span class="token operator">></span><span class="token punctuation">;</span>
type Node <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">|</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
  <span class="token literal-property property">sortIndex</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
<span class="token operator">|</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 添加新节点, 添加之后, 需要调用`siftUp`函数向上调整堆.</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">heap</span><span class="token operator">:</span> Heap<span class="token punctuation">,</span> <span class="token literal-property property">node</span><span class="token operator">:</span> Node</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> index <span class="token operator">=</span> heap<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">siftUp</span><span class="token punctuation">(</span>heap<span class="token punctuation">,</span> node<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 查看堆的顶点, 也就是优先级最高的`task`或`timer`</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">peek</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">heap</span><span class="token operator">:</span> Heap</span><span class="token punctuation">)</span><span class="token operator">:</span> Node <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> first <span class="token operator">=</span> heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> first <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> first<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 将堆的顶点提取出来, 并删除顶点之后, 需要调用`siftDown`函数向下调整堆.</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">heap</span><span class="token operator">:</span> Heap</span><span class="token punctuation">)</span><span class="token operator">:</span> Node <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> first <span class="token operator">=</span> heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>first <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> last <span class="token operator">=</span> heap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>last <span class="token operator">!==</span> first<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> last<span class="token punctuation">;</span>
      <span class="token function">siftDown</span><span class="token punctuation">(</span>heap<span class="token punctuation">,</span> last<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> first<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 当插入节点之后, 需要向上调整堆结构, 保证数组是一个最小堆.</span>
<span class="token keyword">function</span> <span class="token function">siftUp</span><span class="token punctuation">(</span><span class="token parameter">heap<span class="token punctuation">,</span> node<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> index <span class="token operator">=</span> i<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> parentIndex <span class="token operator">=</span> <span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">>>></span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> parent <span class="token operator">=</span> heap<span class="token punctuation">[</span>parentIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>parent <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> <span class="token function">compare</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> node<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// The parent is larger. Swap positions.</span>
      heap<span class="token punctuation">[</span>parentIndex<span class="token punctuation">]</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>
      heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> parent<span class="token punctuation">;</span>
      index <span class="token operator">=</span> parentIndex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// The parent is smaller. Exit.</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 向下调整堆结构, 保证数组是一个最小堆.</span>
<span class="token keyword">function</span> <span class="token function">siftDown</span><span class="token punctuation">(</span><span class="token parameter">heap<span class="token punctuation">,</span> node<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> index <span class="token operator">=</span> i<span class="token punctuation">;</span>
  <span class="token keyword">const</span> length <span class="token operator">=</span> heap<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> leftIndex <span class="token operator">=</span> <span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> left <span class="token operator">=</span> heap<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> rightIndex <span class="token operator">=</span> leftIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> right <span class="token operator">=</span> heap<span class="token punctuation">[</span>rightIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// If the left or right node is smaller, swap with the smaller of those.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> <span class="token function">compare</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> node<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> <span class="token function">compare</span><span class="token punctuation">(</span>right<span class="token punctuation">,</span> left<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> right<span class="token punctuation">;</span>
        heap<span class="token punctuation">[</span>rightIndex<span class="token punctuation">]</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>
        index <span class="token operator">=</span> rightIndex<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> left<span class="token punctuation">;</span>
        heap<span class="token punctuation">[</span>leftIndex<span class="token punctuation">]</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>
        index <span class="token operator">=</span> leftIndex<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">&amp;&amp;</span> <span class="token function">compare</span><span class="token punctuation">(</span>right<span class="token punctuation">,</span> node<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      heap<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> right<span class="token punctuation">;</span>
      heap<span class="token punctuation">[</span>rightIndex<span class="token punctuation">]</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>
      index <span class="token operator">=</span> rightIndex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// Neither child is smaller. Exit.</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>peek</code>函数: 查看堆的顶点, 也就是优先级最高的<code v-pre>task</code>或<code v-pre>timer</code>.</li>
<li><code v-pre>pop</code>函数: 将堆的顶点提取出来, 并删除顶点之后, 需要调用<code v-pre>siftDown</code>函数向下调整堆.</li>
<li><code v-pre>push</code>函数: 添加新节点, 添加之后, 需要调用<code v-pre>siftUp</code>函数向上调整堆.</li>
<li><code v-pre>siftDown</code>函数: 向下调整堆结构, 保证数组是一个最小堆.</li>
<li><code v-pre>siftUp</code>函数: 当插入节点之后, 需要向上调整堆结构, 保证数组是一个最小堆.</li>
</ul>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>本节介绍了<code v-pre>堆排序</code>的基本使用, 并说明了<code v-pre>堆排序</code>在<code v-pre>react</code>源码中的应用. 在阅读<code v-pre>scheduler</code>包的源码时, 会更加清晰的理解作者的思路.</p>
</div></template>


