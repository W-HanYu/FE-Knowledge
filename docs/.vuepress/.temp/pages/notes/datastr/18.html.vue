<template><div><h1 id="平衡二叉树专题" tabindex="-1"><a class="header-anchor" href="#平衡二叉树专题" aria-hidden="true">#</a> 平衡二叉树专题</h1>
<p>力扣关于平衡二叉树的题目还是有一些的，并且都非常经典，推荐大家练习。今天给大家精选了 4 道题，如果你彻底搞明白了这几道题，碰到其他的平衡二叉树的题目应该不至于没有思路。当你领会了我的思路之后， 建议再找几个题目练手，巩固一下学习成果。</p>
<h2 id="_110-平衡二叉树-简单" tabindex="-1"><a class="header-anchor" href="#_110-平衡二叉树-简单" aria-hidden="true">#</a> 110. 平衡二叉树（简单）</h2>
<p>最简单的莫过于判断一个树是否为平衡二叉树了，我们来看下。</p>
<h3 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

示例 1:

给定二叉树 [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7
返回 true 。

示例 2:

给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
返回 false


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h3>
<p>由于平衡二叉树定义为就是<code v-pre>一个二叉树每个节点的左右两个子树的高度差的绝对值不超过 1。</code>用伪代码描述就是：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">if</span> <span class="token builtin">abs</span><span class="token punctuation">(</span>高度<span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">-</span> 高度<span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">1</span> <span class="token keyword">and</span> root<span class="token punctuation">.</span>left 也是平衡二叉树 <span class="token keyword">and</span> root<span class="token punctuation">.</span>right 也是平衡二叉树<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'是平衡二叉树'</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'不是平衡二叉树'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而 root.left 和 root.right <code v-pre>如何判断是否是二叉平衡树就和 root 是一样的了</code>，可以看出这个问题有明显的递归性。</p>
<p>因此我们首先需要知道如何计算一个子树的高度。这个可以通过递归的方式轻松地计算出来。计算子树高度的 Python 代码如下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> node<span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token number">0</span>
    l <span class="token operator">=</span> dfs<span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    r <span class="token operator">=</span> dfs<span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token builtin">max</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> r<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3>
<p>代码支持： Python3</p>
<p>Python3 Code:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">isBalanced</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> <span class="token keyword">not</span> node<span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token number">0</span>
            l <span class="token operator">=</span> dfs<span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
            r <span class="token operator">=</span> dfs<span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token builtin">max</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> r<span class="token punctuation">)</span>  <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> root<span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token boolean">True</span>
        <span class="token keyword">if</span> <span class="token builtin">abs</span><span class="token punctuation">(</span>dfs<span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">-</span>  dfs<span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token boolean">False</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>isBalanced<span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token keyword">and</span> self<span class="token punctuation">.</span>isBalanced<span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>复杂度分析</code></p>
<ul>
<li>时间复杂度：对于 isBalanced 来说，由于每个节点最多被访问一次，这部分的时间复杂度为 $O(N)$，而 dfs 函数 每次被调用的次数不超过 $log N$，因此总的时间复杂度为 $O(NlogN)$，其中 $N$ 为 树的节点总数。</li>
<li>空间复杂度：由于使用了递归，这里的空间复杂度的瓶颈在栈空间，因此空间复杂度为 $O(h)$，其中 $h$ 为树的高度。</li>
</ul>
<h2 id="_108-将有序数组转换为二叉搜索树-简单" tabindex="-1"><a class="header-anchor" href="#_108-将有序数组转换为二叉搜索树-简单" aria-hidden="true">#</a> 108. 将有序数组转换为二叉搜索树（简单）</h2>
<p>108 和 109 基本是一样的，只不过数据结构不一样，109 变成了链表了而已。由于链表操作比数组需要考虑更多的因素，因此 109 是 中等难度。</p>
<h3 id="题目描述-1" tabindex="-1"><a class="header-anchor" href="#题目描述-1" aria-hidden="true">#</a> 题目描述</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="思路-1" tabindex="-1"><a class="header-anchor" href="#思路-1" aria-hidden="true">#</a> 思路</h3>
<p>对于这个问题或者 <code v-pre>给定一个二叉搜索树，将其改为平衡（后面会讲）</code> 基本思路都是一样的。</p>
<p>题目的要求是将有序数组转化为：</p>
<ol>
<li>高度平衡的二叉树</li>
<li>二叉搜索树</li>
</ol>
<p>由于平衡二叉树是左右两个子树的高度差的绝对值不超过 1。因此一种简单的方法是<code v-pre>选择中点作为根节点，根节点左侧的作为左子树，右侧的作为右子树即可。</code>原因很简单，这样分配可以保证左右子树的节点数目差不超过 1。因此高度差自然也不会超过 1 了。</p>
<p>上面的操作同时也满足了二叉搜索树，原因就是题目给的数组是有序的。</p>
<blockquote>
<p>你也可以选择别的数作为根节点，而不是中点，这也可以看出答案是不唯一的。</p>
</blockquote>
<h3 id="代码-1" tabindex="-1"><a class="header-anchor" href="#代码-1" aria-hidden="true">#</a> 代码</h3>
<p>代码支持： Python3</p>
<p>Python3 Code:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">sortedArrayToBST</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> TreeNode<span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> nums<span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token boolean">None</span>
        mid <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span>
        root <span class="token operator">=</span> TreeNode<span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span>
        root<span class="token punctuation">.</span>left <span class="token operator">=</span> self<span class="token punctuation">.</span>sortedArrayToBST<span class="token punctuation">(</span>nums<span class="token punctuation">[</span><span class="token punctuation">:</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span>
        root<span class="token punctuation">.</span>right <span class="token operator">=</span> self<span class="token punctuation">.</span>sortedArrayToBST<span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>复杂度分析</code></p>
<ul>
<li>时间复杂度：由于每个节点最多被访问一次，因此总的时间复杂度为 $O(N)$，其中 $N$ 为数组长度。</li>
<li>空间复杂度：由于使用了递归，这里的空间复杂度的瓶颈在栈空间，因此空间复杂度为 $O(h)$，其中 $h$ 为树的高度。同时由于是平衡二叉树，因此 $h$ 就是 $log N$。</li>
</ul>
<h2 id="_109-有序链表转换二叉搜索树-中等" tabindex="-1"><a class="header-anchor" href="#_109-有序链表转换二叉搜索树-中等" aria-hidden="true">#</a> 109. 有序链表转换二叉搜索树（中等）</h2>
<h3 id="题目描述-2" tabindex="-1"><a class="header-anchor" href="#题目描述-2" aria-hidden="true">#</a> 题目描述</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>`给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定的有序链表： [-10, -3, 0, 5, 9],

一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="思路-2" tabindex="-1"><a class="header-anchor" href="#思路-2" aria-hidden="true">#</a> 思路</h3>
<p>和 108 思路一样。 不同的是数据结构的不同，因此我们需要关注的是链表和数组的操作差异。</p>
<p><img src="https://p.ipic.vip/e7yblm.jpg" alt=""></p>
<p>（数组的情况）</p>
<p>我们再来看下链表：</p>
<p><img src="https://p.ipic.vip/gkndvh.jpg" alt="">
（链表的情况）</p>
<p>找到中点，只需要使用经典的快慢指针即可。同时为了防止环的出现， 我们需要斩断指向 mid 的 next 指针，因此需要记录一下中点前的一个节点，这只需要用一个变量 pre 记录即可。</p>
<h3 id="代码-2" tabindex="-1"><a class="header-anchor" href="#代码-2" aria-hidden="true">#</a> 代码</h3>
<h3 id="代码-3" tabindex="-1"><a class="header-anchor" href="#代码-3" aria-hidden="true">#</a> 代码</h3>
<p>代码支持：JS,Java,Python,C++</p>
<p>JS Code</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">sortedListToBST</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> tail</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> tail<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
  <span class="token keyword">let</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!=</span> tail <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> tail<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>slow<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> slow<span class="token punctuation">)</span><span class="token punctuation">;</span>
  root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>slow<span class="token punctuation">.</span>next<span class="token punctuation">,</span> tail<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Java Code:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">sortedListToBST</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">private</span> <span class="token class-name">TreeNode</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> tail<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>head <span class="token operator">==</span> tail<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token class-name">ListNode</span> fast <span class="token operator">=</span> head<span class="token punctuation">,</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
      <span class="token keyword">while</span><span class="token punctuation">(</span>fast <span class="token operator">!=</span> tail <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> tail<span class="token punctuation">)</span><span class="token punctuation">{</span>
          fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
          slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token class-name">TreeNode</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>slow<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
      root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> slow<span class="token punctuation">)</span><span class="token punctuation">;</span>
      root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>slow<span class="token punctuation">.</span>next<span class="token punctuation">,</span> tail<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> root<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python Code:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">sortedListToBST</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> head<span class="token punctuation">:</span> ListNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> TreeNode<span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> head<span class="token punctuation">:</span>
            <span class="token keyword">return</span> head
        pre<span class="token punctuation">,</span> slow<span class="token punctuation">,</span> fast <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">,</span> head<span class="token punctuation">,</span> head

        <span class="token keyword">while</span> fast <span class="token keyword">and</span> fast<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">:</span>
            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">.</span><span class="token builtin">next</span>
            pre <span class="token operator">=</span> slow
            slow <span class="token operator">=</span> slow<span class="token punctuation">.</span><span class="token builtin">next</span>
        <span class="token keyword">if</span> pre<span class="token punctuation">:</span>
            pre<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> <span class="token boolean">None</span>
        node <span class="token operator">=</span> TreeNode<span class="token punctuation">(</span>slow<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
        <span class="token keyword">if</span> slow <span class="token operator">==</span> fast<span class="token punctuation">:</span>
            <span class="token keyword">return</span> node
        node<span class="token punctuation">.</span>left <span class="token operator">=</span> self<span class="token punctuation">.</span>sortedListToBST<span class="token punctuation">(</span>head<span class="token punctuation">)</span>
        node<span class="token punctuation">.</span>right <span class="token operator">=</span> self<span class="token punctuation">.</span>sortedListToBST<span class="token punctuation">(</span>slow<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>C++ Code:</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    TreeNode<span class="token operator">*</span> <span class="token function">sortedListToBST</span><span class="token punctuation">(</span>ListNode<span class="token operator">*</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">sortedListToBST</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    TreeNode<span class="token operator">*</span> <span class="token function">sortedListToBST</span><span class="token punctuation">(</span>ListNode<span class="token operator">*</span> head<span class="token punctuation">,</span> ListNode<span class="token operator">*</span> tail<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> tail<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>

        ListNode<span class="token operator">*</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
        ListNode<span class="token operator">*</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">!=</span> tail <span class="token operator">&amp;&amp;</span> fast<span class="token operator">-></span>next <span class="token operator">!=</span> tail<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            slow <span class="token operator">=</span> slow<span class="token operator">-></span>next<span class="token punctuation">;</span>
            fast <span class="token operator">=</span> fast<span class="token operator">-></span>next<span class="token operator">-></span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        TreeNode<span class="token operator">*</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">TreeNode</span><span class="token punctuation">(</span>slow<span class="token operator">-></span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        root<span class="token operator">-></span>left <span class="token operator">=</span> <span class="token function">sortedListToBST</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> slow<span class="token punctuation">)</span><span class="token punctuation">;</span>
        root<span class="token operator">-></span>right <span class="token operator">=</span> <span class="token function">sortedListToBST</span><span class="token punctuation">(</span>slow<span class="token operator">-></span>next<span class="token punctuation">,</span> tail<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>复杂度分析</code></p>
<p>令 n 为链表长度。</p>
<ul>
<li>时间复杂度：递归树的深度为 $logn$，每一层的基本操作数为 $n$，因此总的时间复杂度为$O(nlogn)$</li>
<li>空间复杂度：空间复杂度为$O(logn)$</li>
</ul>
<p>有的同学不太会分析递归的时间复杂度和空间复杂度，我们在这里给大家再次介绍一下。</p>
<p><img src="https://p.ipic.vip/s8ejbw.jpg" alt=""></p>
<p>首先我们尝试画出如下的递归树。由于递归树的深度为 $logn$ 因此空间复杂度就是 $logn$ * 递归函数内部的空间复杂度，由于递归函数内空间复杂度为 $O(1)$，因此总的空间复杂度为 $O(logn)$。</p>
<p>时间复杂度稍微困难一点点。之前西法在先导篇给大家说过：<code v-pre>如果有递归那就是：递归树的节点数 \* 递归函数内部的基础操作数</code>。而这句话的前提是所有递归函数内部的基本操作数是一样的，这样才能直接乘。而这里递归函数的基本操作数不一样。</p>
<p>不过我们发现递归树内部每一层的基本操作数都是固定的， 为啥固定已经在图上给大家算出来了。因此总的空间复杂度其实可以通过<code v-pre>递归深度 \* 每一层基础操作数</code>计算得出，也就是 $nlogn$。 类似的技巧可以用于归并排序的复杂度分析中。</p>
<p>另外大家也直接可以通过公式推导得出。对于这道题来说，设基本操作数 T(n)，那么就有 T(n) = T(n/2) * 2 + n/2，推导出来 T(n) 大概是 nlogn。这应该高中的知识。
具体推导过程如下：</p>
<p>$$</p>
<p>T(n) = T(n/2) _ 2 + n/2 =
\frac{n}{2} + 2 _ (\frac{n}{2}) ^ 2 + 2 ^ 2 _ (\frac{n}{2}) ^ 3 + ...
= logn _ \frac{n}{2}</p>
<p>$$</p>
<p>类似地，如果递推公式为 T(n) = T(n/2) * 2 + 1 ，那么 T(n) 大概就是 logn。</p>
<h2 id="_1382-将二叉搜索树变平衡-中等" tabindex="-1"><a class="header-anchor" href="#_1382-将二叉搜索树变平衡-中等" aria-hidden="true">#</a> 1382. 将二叉搜索树变平衡（中等）</h2>
<h3 id="题目描述-3" tabindex="-1"><a class="header-anchor" href="#题目描述-3" aria-hidden="true">#</a> 题目描述</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>给你一棵二叉搜索树，请你返回一棵 平衡后 的二叉搜索树，新生成的树应该与原来的树有着相同的节点值。

如果一棵二叉搜索树中，每个节点的两棵子树高度差不超过 1 ，我们就称这棵二叉搜索树是 平衡的 。

如果有多种构造方法，请你返回任意一种。

 

示例：

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p.ipic.vip/6s67fh.jpg" alt=""></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>
输入：root = [1,null,2,null,3,null,4,null,null]
输出：[2,1,3,null,null,null,4]
解释：这不是唯一的正确答案，[3,1,4,null,2,null,null] 也是一个可行的构造方案。
 

提示：

树节点的数目在 1 到 10^4 之间。
树节点的值互不相同，且在 1 到 10^5 之间。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="思路-3" tabindex="-1"><a class="header-anchor" href="#思路-3" aria-hidden="true">#</a> 思路</h3>
<p>由于<code v-pre>二叉搜索树的中序遍历是一个有序数组</code>，因此问题很容易就转化为 <code v-pre>108. 将有序数组转换为二叉搜索树（简单）</code>。</p>
<h3 id="代码-4" tabindex="-1"><a class="header-anchor" href="#代码-4" aria-hidden="true">#</a> 代码</h3>
<p>代码支持： Python3</p>
<p>Python3 Code:</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">inorder</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> node<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> node<span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>inorder<span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">[</span>node<span class="token punctuation">.</span>val<span class="token punctuation">]</span> <span class="token operator">+</span> self<span class="token punctuation">.</span>inorder<span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">balanceBST</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> TreeNode<span class="token punctuation">:</span>
        nums <span class="token operator">=</span> self<span class="token punctuation">.</span>inorder<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
        <span class="token keyword">def</span> <span class="token function">dfs</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> start <span class="token operator">==</span> end<span class="token punctuation">:</span> <span class="token keyword">return</span> TreeNode<span class="token punctuation">(</span>nums<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> start <span class="token operator">></span> end<span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token boolean">None</span>
            mid <span class="token operator">=</span> <span class="token punctuation">(</span>start <span class="token operator">+</span> end<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span>
            root <span class="token operator">=</span> TreeNode<span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span>
            root<span class="token punctuation">.</span>left <span class="token operator">=</span> dfs<span class="token punctuation">(</span>start<span class="token punctuation">,</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
            root<span class="token punctuation">.</span>right <span class="token operator">=</span> dfs<span class="token punctuation">(</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> end<span class="token punctuation">)</span>
            <span class="token keyword">return</span> root
        <span class="token keyword">return</span> dfs<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>复杂度分析</code></p>
<ul>
<li>时间复杂度：由于每个节点最多被访问一次，因此总的时间复杂度为 $O(N)$，其中 $N$ 为链表长度。</li>
<li>空间复杂度：虽然使用了递归，但是瓶颈不在栈空间，而是开辟的长度为 $N$ 的 nums 数组，因此空间复杂度为 $O(N)$，其中 $N$ 为树的节点总数。</li>
</ul>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>本文通过四道关于二叉平衡树的题帮助大家识别此类型题目背后的思维逻辑，我们来总结一下学到的知识。</p>
<p>平衡二叉树指的是：<code v-pre>一个二叉树每个节点的左右两个子树的高度差的绝对值不超过1。</code></p>
<p>如果需要让你判断一个树是否是平衡二叉树，只需要死扣定义，然后用递归即可轻松解决。</p>
<p>如果需要你将一个数组或者链表（逻辑上都是线性的数据结构）转化为平衡二叉树，只需要随便选一个节点，并分配一半到左子树，另一半到右子树即可。</p>
<p>同时，如果要求你转化为平衡二叉搜索树，则可以选择排序数组(或链表)的中点，左边的元素为左子树， 右边的元素为右子树即可。</p>
<blockquote>
<p>小提示 1： 如果不需要是二叉搜索树则不需要排序，否则需要排序。</p>
</blockquote>
<blockquote>
<p>小提示 2： 你也可以不选择中点， 算法需要相应调整，感兴趣的同学可以试试。</p>
</blockquote>
<blockquote>
<p>小提示 3： 链表的操作需要特别注意环的存在。</p>
</blockquote>
<p>更多题解可以访问我的 LeetCode 题解仓库：https://github.com/azl397985856/leetcode 。 目前已经 37K star 啦。</p>
<p>关注公众号力扣加加，努力用清晰直白的语言还原解题思路，并且有大量图解，手把手教你识别套路，高效刷题。</p>
</div></template>


