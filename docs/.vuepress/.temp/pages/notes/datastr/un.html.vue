<template><div><h1 id="并查集" tabindex="-1"><a class="header-anchor" href="#并查集" aria-hidden="true">#</a> 并查集</h1>
<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2>
<p>相信大家都玩过下面的迷宫游戏。你的目标是从地图的某一个角落移动到地图的出口。规则很简单，仅仅你不能穿过墙。</p>
<p><img src="https://p.ipic.vip/dg1jyf.jpg" alt=""></p>
<p>实际上，这道题并不能够使用并查集来解决。 不过如果我将规则变成，“是否存在一条从入口到出口的路径”，那么这就是一个简单的联通问题，这样就可以借助本节要讲的并查集来完成。
q q
另外如果地图不变，而<code v-pre>不断改变入口和出口的位置</code>，并依次让你判断起点和终点是否联通，并查集的效果高的超出你的想象。</p>
<p>另外并查集还可以在人工智能中用作图像人脸识别。比如将同一个人的不同角度，不同表情的面部数据进行联通。这样就可以很容易地回答<code v-pre>两张图片是否是同一个人</code>，无论拍摄角度和面部表情如何。</p>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>并查集使用的是一种<code v-pre>树型</code>的数据结构，用于处理一些不交集（Disjoint Sets）的合并及查询问题。</p>
<p>比如让你求两个人是否间接认识，两个地点之间是否有至少一条路径。上面的例子其实都可以抽象为联通性问题。即如果两个点联通，那么这两个点就有至少一条路径能够将其连接起来。值得注意的是，并查集只能回答“联通与否”，而不能回答诸如“具体的联通路径是什么”。如果要回答“具体的联通路径是什么”这个问题，则需要借助其他算法，比如广度优先遍历。</p>
<h2 id="形象解释" tabindex="-1"><a class="header-anchor" href="#形象解释" aria-hidden="true">#</a> 形象解释</h2>
<p>比如有两个司令。 司令下有若干军长，军长下有若干师长。。。</p>
<h3 id="判断两个节点是否联通" tabindex="-1"><a class="header-anchor" href="#判断两个节点是否联通" aria-hidden="true">#</a> 判断两个节点是否联通</h3>
<p>我们如何判断某两个师长是否归同一个司令管呢（连通性）？</p>
<p><img src="https://p.ipic.vip/nvj6x2.jpg" alt=""></p>
<p>很简单，我们顺着师长，往上找，找到司令。 如果两个师长找到的是同一个司令，那么两个人就归同一个司令管。（假设这两人级别比司令低）</p>
<p>如果我让你判断两个士兵是否归同一个师长管，也可以向上搜索到师长，如果搜索到的两个师长是同一个，那就说明这两个士兵归同一师长管。（假设这两人级别比师长低）</p>
<p>代码上我们可以用 parent[x] = y 表示 x 的 parent 是 y，通过不断沿着搜索 parent 搜索找到 root，然后比较 root 是否相同即可得出结论。 这里的 root 实际上就是上文提到的<code v-pre>集合代表</code>。</p>
<blockquote>
<p>之所以使用 parent 存储每个节点的父节点，而不是使用 children 存储每个节点的子节点是因为“我们需要找到某个元素的代表（也就是根）”</p>
</blockquote>
<p>这个不断往上找的操作，我们一般称为 find，使用 ta 我们可以很容易地求出两个节点是否连通。</p>
<h3 id="合并两个联通区域" tabindex="-1"><a class="header-anchor" href="#合并两个联通区域" aria-hidden="true">#</a> 合并两个联通区域</h3>
<p>如图有两个司令：</p>
<p><img src="https://p.ipic.vip/7b6a0l.jpg" alt=""></p>
<p>我们将其合并为一个联通域，最简单的方式就是直接将其中一个司令指向另外一个即可：</p>
<p><img src="https://p.ipic.vip/m1mgqv.jpg" alt=""></p>
<p>以上就是三个核心 API <code v-pre>find</code>，<code v-pre>connnected</code> 和 <code v-pre>union</code>， 的形象化解释，下面我们来看下代码实现。</p>
<h2 id="核心-api" tabindex="-1"><a class="header-anchor" href="#核心-api" aria-hidden="true">#</a> 核心 API</h2>
<p>并查集（Union-find Algorithm）定义了两个用于此数据结构的操作：</p>
<ul>
<li>
<p>Find：确定元素属于哪一个子集。它可以被用来确定两个元素是否属于同一子集。</p>
</li>
<li>
<p>Union：将两个子集合并成同一个集合。</p>
</li>
</ul>
<p>首先我们初始化每一个点都是一个连通域，类似下图：</p>
<p><img src="https://p.ipic.vip/knr558.jpg" alt=""></p>
<p>为了更加精确的定义这些方法，需要定义如何表示集合。一种常用的策略是为每个集合选定一个固定的元素，称为代表，以表示整个集合。接着，Find(x) 返回 x 所属集合的代表，而 Union 使用两个集合的代表作为参数进行合并。初始时，每个人的代表都是自己本身。</p>
<blockquote>
<p>这里的代表就是上面的“司令”。</p>
</blockquote>
<p>比如我们的 parent 长这个样子：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token punctuation">{</span>
 <span class="token string">"0"</span><span class="token punctuation">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>
 <span class="token string">"1"</span><span class="token punctuation">:</span> <span class="token string">"3"</span><span class="token punctuation">,</span>
 <span class="token string">"2"</span><span class="token punctuation">:</span> <span class="token string">"3"</span><span class="token punctuation">,</span>
 <span class="token string">"4"</span><span class="token punctuation">:</span> <span class="token string">"3"</span><span class="token punctuation">,</span>
 <span class="token string">"3"</span><span class="token punctuation">:</span> <span class="token string">"3"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> find</h3>
<p>假如我让你在上面的 parent 中找 0 的代表如何找？</p>
<p>首先，<code v-pre>树的根</code>在 parent 中满足“parent[x] == x”。因此我们可以先找到 0 的父亲 parent[0] 也就是 1，接下来我们看 1 的父亲 parent[1] 发现是 3，因此它不是根，我们继续找 3 的父亲，发现是 3 本身。也就是说 3 就是我们要找的代表，我们返回 3 即可。</p>
<p>上面的过程具有明显的递归性，我们可以根据自己的喜好使用递归或者迭代来实现。</p>
<p>递归：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">find</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> x <span class="token operator">!=</span> self<span class="token punctuation">.</span>parent<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">:</span>
        x <span class="token operator">=</span> self<span class="token punctuation">.</span>parent<span class="token punctuation">[</span>x<span class="token punctuation">]</span>
    <span class="token keyword">return</span> x
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>迭代：</p>
<p>也可使用递归来实现。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">find</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> x <span class="token operator">!=</span> self<span class="token punctuation">.</span>parent<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>parent<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> self<span class="token punctuation">.</span>find<span class="token punctuation">(</span>self<span class="token punctuation">.</span>parent<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>parent<span class="token punctuation">[</span>x<span class="token punctuation">]</span>
    <span class="token keyword">return</span> x
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我在递归实现的 find 过程进行了路径的压缩，每次往上查找之后都会将树的高度降低到 2。</p>
<p>这有什么用呢？我们知道每次 find 都会从当前节点往上不断搜索，直到到达根节点，因此 find 的时间复杂度大致相等于节点的深度，树的高度如果不加控制则可能为节点数，因此 find 的时间复杂度可能会退化到 $O(n)$。而如果进行路径压缩，那么树的平均高度不会超过 $logn$，如果使用了路径压缩和下面要讲的<code v-pre>按秩合并</code>那么时间复杂度可以趋近 $O(1)$，具体证明略。不过给大家画了一个图来辅助大家理解。</p>
<blockquote>
<p>注意是趋近 O(1)，准确来说是阿克曼函数的某个反函数。</p>
</blockquote>
<p><img src="https://p.ipic.vip/xknazz.gif" alt=""></p>
<p>极限情况下，每一个路径都会被压缩，这种情况下<code v-pre>继续</code>查找的时间复杂度就是 $O(1)$。</p>
<p><img src="https://p.ipic.vip/bl6gt4.jpg" alt=""></p>
<h3 id="connected" tabindex="-1"><a class="header-anchor" href="#connected" aria-hidden="true">#</a> connected</h3>
<p>直接利用上面实现好的 find 方法即可。如果两个节点的祖先相同，那么其就联通。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">connected</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> self<span class="token punctuation">.</span>find<span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token operator">==</span> self<span class="token punctuation">.</span>find<span class="token punctuation">(</span>q<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="union" tabindex="-1"><a class="header-anchor" href="#union" aria-hidden="true">#</a> union</h3>
<p>将其中一个节点挂到另外一个节点的祖先上，这样两者祖先就一样了。也就是说，两个节点联通了。</p>
<p>对于如下的一个图：</p>
<p><img src="https://p.ipic.vip/grnq9g.jpg" alt=""></p>
<p>如果我们将 0 和 7 进行一次合并。即 <code v-pre>union(0, 7)</code> ，则会发生如下过程。</p>
<ul>
<li>找到 0 的根节点 3</li>
<li>找到 7 的根节点 6</li>
<li>将 6 指向 3。（为了使得合并之后的树尽可能平衡，一般选择将小树挂载到大树上面，下面的代码模板会体现这一点。3 的秩比 6 的秩大，这样更利于树的平衡，避免出现极端的情况）</li>
</ul>
<p><img src="https://p.ipic.vip/64k05c.gif" alt=""></p>
<p>上面讲的小树挂大树就是所谓的<code v-pre>按秩合并</code>。</p>
<p>代码：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">union</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> self<span class="token punctuation">.</span>connected<span class="token punctuation">(</span>p<span class="token punctuation">,</span> q<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">return</span>
    self<span class="token punctuation">.</span>parent<span class="token punctuation">[</span>self<span class="token punctuation">.</span>find<span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> self<span class="token punctuation">.</span>find<span class="token punctuation">(</span>q<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我并没有判断秩的大小关系，目的是方便大家理清主脉络。完整代码见下面代码区。</p>
<h2 id="不带权并查集" tabindex="-1"><a class="header-anchor" href="#不带权并查集" aria-hidden="true">#</a> 不带权并查集</h2>
<p>平时做题过程，遇到的更多的是不带权的并查集。相比于带权并查集， 其实现过程也更加简单。</p>
<h3 id="代码模板" tabindex="-1"><a class="header-anchor" href="#代码模板" aria-hidden="true">#</a> 代码模板</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">UF</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> M<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>parent <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        self<span class="token punctuation">.</span>size <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        self<span class="token punctuation">.</span>cnt <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token comment"># 初始化 parent，size 和 cnt</span>
        <span class="token comment"># size 是一个哈希表，记录每一个联通域的大小，其中 key 是联通域的根，value 是联通域的大小</span>
        <span class="token comment"># cnt 是整数，表示一共有多少个联通域</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>M<span class="token punctuation">)</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>parent<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i
            self<span class="token punctuation">.</span>cnt <span class="token operator">+=</span> <span class="token number">1</span>
            self<span class="token punctuation">.</span>size<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>

    <span class="token keyword">def</span> <span class="token function">find</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> x <span class="token operator">!=</span> self<span class="token punctuation">.</span>parent<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>parent<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> self<span class="token punctuation">.</span>find<span class="token punctuation">(</span>self<span class="token punctuation">.</span>parent<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span>parent<span class="token punctuation">[</span>x<span class="token punctuation">]</span>
        <span class="token keyword">return</span> x
    <span class="token keyword">def</span> <span class="token function">union</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>connected<span class="token punctuation">(</span>p<span class="token punctuation">,</span> q<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">return</span>
        <span class="token comment"># 小的树挂到大的树上， 使树尽量平衡</span>
        leader_p <span class="token operator">=</span> self<span class="token punctuation">.</span>find<span class="token punctuation">(</span>p<span class="token punctuation">)</span>
        leader_q <span class="token operator">=</span> self<span class="token punctuation">.</span>find<span class="token punctuation">(</span>q<span class="token punctuation">)</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>size<span class="token punctuation">[</span>leader_p<span class="token punctuation">]</span> <span class="token operator">&lt;</span> self<span class="token punctuation">.</span>size<span class="token punctuation">[</span>leader_q<span class="token punctuation">]</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>parent<span class="token punctuation">[</span>leader_p<span class="token punctuation">]</span> <span class="token operator">=</span> leader_q
            self<span class="token punctuation">.</span>size<span class="token punctuation">[</span>leader_q<span class="token punctuation">]</span> <span class="token operator">+=</span> self<span class="token punctuation">.</span>size<span class="token punctuation">[</span>leader_p<span class="token punctuation">]</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>parent<span class="token punctuation">[</span>leader_q<span class="token punctuation">]</span> <span class="token operator">=</span> leader_p
            self<span class="token punctuation">.</span>size<span class="token punctuation">[</span>leader_p<span class="token punctuation">]</span> <span class="token operator">+=</span> self<span class="token punctuation">.</span>size<span class="token punctuation">[</span>leader_q<span class="token punctuation">]</span>
        self<span class="token punctuation">.</span>cnt <span class="token operator">-=</span> <span class="token number">1</span>
    <span class="token keyword">def</span> <span class="token function">connected</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>find<span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token operator">==</span> self<span class="token punctuation">.</span>find<span class="token punctuation">(</span>q<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="带权并查集" tabindex="-1"><a class="header-anchor" href="#带权并查集" aria-hidden="true">#</a> 带权并查集</h2>
<p>上面讲到的其实都是有向无权图，因此仅仅使用 parent 表示节点关系就可以了。而如果使用的是有向带权图呢？实际上除了维护 parent 这样的节点指向关系，我们还需要维护节点的权重，一个简单的想法是使用另外一个哈希表 weight 存储节点的权重关系。比如 <code v-pre>weight[a] = 1 表示 a 到其父节点的权重是 1</code>。</p>
<p>如果是带权的并查集，其查询过程的路径压缩以及合并过程会略有不同，因为我们不仅关心节点指向的变更，也关心权重如何更新。比如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>a    b
^    ^
|    |
|    |
x    y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上表示的是 x 的父节点是 a，y 的父节点是 b，现在我需要将 x 和 y 进行合并。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>a    b
^    ^
|    |
|    |
x -> y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设 x 到 a 的权重是 w(xa)，y 到 b 的权重为 w(yb)，x 到 y 的权重是 w(xy)。合并之后会变成如图的样子：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>a -> b
^    ^
|    |
|    |
x    y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么 a 到 b 的权重应该被更新为什么呢？我们知道 w(xa) + w(ab) = w(xy) + w(yb)，也就是说 a 到 b 的权重 w(ab) = w(xy) + w(yb) - w(xa)。</p>
<p>当然上面关系式是加法，减法，取模还是乘法，除法等完全由题目决定，我这里只是举了一个例子。不管怎么样，这种运算一定需要满足<code v-pre>可传导性</code>。</p>
<h3 id="代码模板-1" tabindex="-1"><a class="header-anchor" href="#代码模板-1" aria-hidden="true">#</a> 代码模板</h3>
<p>这里以加法型带权并查集为例，讲述一下代码应该如何书写。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">UF</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> M<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 初始化 parent，weight</span>
        self<span class="token punctuation">.</span>parent <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        self<span class="token punctuation">.</span>weight <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>M<span class="token punctuation">)</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>parent<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i
            self<span class="token punctuation">.</span>weight<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>

   <span class="token keyword">def</span> <span class="token function">find</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>parent<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">!=</span> x<span class="token punctuation">:</span>
            ancestor<span class="token punctuation">,</span> w <span class="token operator">=</span> self<span class="token punctuation">.</span>find<span class="token punctuation">(</span>self<span class="token punctuation">.</span>parent<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>parent<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> ancestor
            self<span class="token punctuation">.</span>weight<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">+=</span> w
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>parent<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">,</span> self<span class="token punctuation">.</span>weight<span class="token punctuation">[</span>x<span class="token punctuation">]</span>
    <span class="token keyword">def</span> <span class="token function">union</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">,</span> dist<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>connected<span class="token punctuation">(</span>p<span class="token punctuation">,</span> q<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">return</span>
        leader_p<span class="token punctuation">,</span> w_p <span class="token operator">=</span> self<span class="token punctuation">.</span>find<span class="token punctuation">(</span>p<span class="token punctuation">)</span>
        leader_q<span class="token punctuation">,</span> w_q <span class="token operator">=</span> self<span class="token punctuation">.</span>find<span class="token punctuation">(</span>q<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>parent<span class="token punctuation">[</span>leader_p<span class="token punctuation">]</span> <span class="token operator">=</span> leader_q
        self<span class="token punctuation">.</span>weight<span class="token punctuation">[</span>leader_p<span class="token punctuation">]</span> <span class="token operator">=</span> dist <span class="token operator">+</span> w_q <span class="token operator">-</span> w_p
    <span class="token keyword">def</span> <span class="token function">connected</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> p<span class="token punctuation">,</span> q<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>find<span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> self<span class="token punctuation">.</span>find<span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>典型题目：</p>
<ul>
<li><a href="https://leetcode-cn.com/problems/evaluate-division/" target="_blank" rel="noopener noreferrer">399. 除法求值<ExternalLinkIcon/></a></li>
</ul>
<h2 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h2>
<p>令 n 为图中点的个数。</p>
<p>首先分析空间复杂度。空间上，由于我们需要存储 parent （带权并查集还有 weight） ，因此空间复杂度取决于于图中的点的个数， 空间复杂度不难得出为 $O(n)$。</p>
<p>并查集的时间消耗主要是 union 和 find 操作，路径压缩和按秩合并优化后的时间复杂度接近于 O(1)。更加严谨的表达是 O(log(m×Alpha(n)))，n 为合并的次数， m 为查找的次数，这里 Alpha 是 Ackerman 函数的某个反函数。但如果只有路径压缩或者只有按秩合并，两者时间复杂度为 O(logx)和 O(logy)，x 和 y 分别为合并与查找的次数。</p>
<h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2>
<ul>
<li>检测图是否有环</li>
</ul>
<p>思路： 只需要将边进行合并，并在合并之前判断是否已经联通即可，如果合并之前已经联通说明存在环。</p>
<p>代码：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>uf <span class="token operator">=</span> UF<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> a<span class="token punctuation">,</span> b <span class="token keyword">in</span> edges<span class="token punctuation">:</span>
    <span class="token keyword">if</span> uf<span class="token punctuation">.</span>connected<span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token boolean">False</span>
    uf<span class="token punctuation">.</span>union<span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
<span class="token keyword">return</span> <span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>题目推荐：</p>
<ul>
<li><a href="https://leetcode-cn.com/problems/redundant-connection/solution/bing-cha-ji-mo-ban-ben-zhi-jiu-shi-jian-0wz2m/" target="_blank" rel="noopener noreferrer">684. 冗余连接<ExternalLinkIcon/></a></li>
<li><a href="https://binarysearch.com/problems/Forest-Detection" target="_blank" rel="noopener noreferrer">Forest Detection<ExternalLinkIcon/></a></li>
<li>最小生成树经典算法 Kruskal</li>
</ul>
<h2 id="练习" tabindex="-1"><a class="header-anchor" href="#练习" aria-hidden="true">#</a> 练习</h2>
<p>关于并查集的题目不少，官方给的数据是 30 道（截止 2020-02-20），但是有一些题目虽然官方没有贴<code v-pre>并查集</code>标签，但是使用并查集来说确非常简单。这类题目如果掌握模板，那么刷这种题会非常快，并且犯错的概率会大大降低，这就是模板的好处。</p>
<p>我这里总结了几道并查集的题目：</p>
<ul>
<li><RouterLink to="/notes/problems/547.friend-circles.html">547. 朋友圈</RouterLink></li>
<li><a href="https://leetcode-cn.com/problems/accounts-merge/solution/mo-ban-ti-bing-cha-ji-python3-by-fe-lucifer-3/" target="_blank" rel="noopener noreferrer">721. 账户合并<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/azl397985856/leetcode/issues/304" target="_blank" rel="noopener noreferrer">990. 等式方程的可满足性<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/smallest-string-with-swaps/" target="_blank" rel="noopener noreferrer">1202. 交换字符串中的元素<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/checking-existence-of-edge-length-limited-paths/" target="_blank" rel="noopener noreferrer">1697. 检查边长度限制的路径是否存在<ExternalLinkIcon/></a></li>
</ul>
<p>上面的题目前面四道都是无权图的连通性问题，第五道题是带权图的连通性问题。两种类型大家都要会，上面的题目关键字都是<code v-pre>连通性</code>，代码都是套模板。看完这里的内容，建议拿上面的题目练下手，检测一下学习成果。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>如果题目有连通，等价的关系，那么你就可以考虑并查集，另外使用并查集的时候要注意路径压缩，否则随着树的高度增加复杂度会逐渐增大。</p>
<p>对于带权并查集实现起来比较复杂，主要是路径压缩和合并这块不一样，不过我们只要注意节点关系，画出如下的图：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>a -> b
^    ^
|    |
|    |
x    y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就不难看出应该如何更新拉。</p>
<p>本文提供的题目模板是西法我用的比较多的，用了它不仅出错概率大大降低，而且速度也快了很多，整个人都更自信了呢 ^_^</p>
</div></template>


