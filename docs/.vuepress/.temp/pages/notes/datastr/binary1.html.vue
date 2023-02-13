<template><div><h1 id="二分专题-基础" tabindex="-1"><a class="header-anchor" href="#二分专题-基础" aria-hidden="true">#</a> 二分专题(基础)</h1>
<p><img src="https://p.ipic.vip/zlxbvk.jpg" alt=""></p>
<p>今天给大家带来的是《二分》专题。先上下本文的提纲，这个是我用 mindmap 画的一个脑图，之后我会继续完善，将其他专题逐步完善起来。</p>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>为了准备这个专题，我不仅肝完了力扣的所有二分题目，还肝完了另外一个 OJ 网站 - <a href="https://www.geeksforgeeks.org/binary-search/" target="_blank" rel="noopener noreferrer">Binary Search<ExternalLinkIcon/></a> 的所有二分题目，一共<strong>100 多道</strong>。大家看完如果觉得有用，可以通过点赞转发的方式告诉我，如果喜欢的人多，我继续尽快出下篇哦~</p>
<p>二分查找又称<code v-pre>折半搜索算法</code>。 狭义地来讲，二分查找是一种在有序数组查找某一特定元素的搜索算法。这同时也是大多数人所知道的一种说法。实际上， 广义的二分查找是将问题的规模缩小到原有的一半。类似的，三分法就是将问题规模缩小为原来的 1/3。</p>
<p>本文给大家带来的内容则是<code v-pre>狭义地二分查找</code></p>
<blockquote>
<p>尽管二分查找的基本思想相对简单，但细节可以令人难以招架 ... — 高德纳</p>
</blockquote>
<p>当乔恩·本特利将二分搜索问题布置给专业编程课的学生时，百分之 90 的学生在花费数小时后还是无法给出正确的解答，主要因为这些错误程序在面对边界值的时候无法运行，或返回错误结果。1988 年开展的一项研究显示，20 本教科书里只有 5 本正确实现了二分搜索。不仅如此，本特利自己 1986 年出版的《编程珠玑》一书中的二分搜索算法存在整数溢出的问题，二十多年来无人发现。Java 语言的库所实现的二分搜索算法中同样的溢出问题存在了九年多才被修复。</p>
<p>可见二分查找并不简单， 本文就试图带你走近 ta，明白 ta 的底层逻辑，并提供模板帮助大家写书 bug free 的二分查找代码。看完讲义后建议大家结合 <a href="https://leetcode-cn.com/leetbook/read/binary-search" title="LeetCode Book 二分查找" target="_blank" rel="noopener noreferrer">LeetCode Book 二分查找<ExternalLinkIcon/></a> 练习一下。</p>
<h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2>
<p>首先我们要知道几个基本概念。这些概念对学习二分有着很重要的作用，之后遇到这些概念就不再讲述了，默认大家已经掌握。</p>
<h3 id="解空间" tabindex="-1"><a class="header-anchor" href="#解空间" aria-hidden="true">#</a> 解空间</h3>
<p>解空间指的是<strong>题目所有可能的解构成的集合</strong>。比如一个题目所有解的可能是 1,2,3,4,5，但具体在某一种情况只能是其中某一个数（即可能是 1，2，3，4，5 中的<strong>一个数</strong>）。那么这里的解空间就是 1,2,3,4,5 构成的集合，在某一个具体的情况下可能是其中任意一个值，<strong>我们的目标就是在某个具体的情况判断其具体是哪个</strong>。如果线性枚举所有的可能，就枚举这部分来说时间复杂度就是 $O(n)$。</p>
<p>举了例子：</p>
<p>如果让你在一个数组 nums 中查找 target，如果存在则返回对应索引，如果不存在则返回 -1。那么对于这道题来说其解空间是什么？</p>
<p>很明显解空间是区间 [-1, n-1]，其中 n 为 nums 的长度。</p>
<p>需要注意的是上面题目的解空间只可能是区间 [-1,n-1] 之间的整数。而诸如 1.2 这样的小数是不可能存在的。这其实也是大多数二分的情况。 但也有少部分题目解空间包括小数的。如果解空间包括小数，就可能会涉及到精度问题，这一点大家需要注意。</p>
<p>比如让你求一个数 x 的平方根，答案误差在 $10^-6$ 次方都认为正确。这里容易知道其解空间大小可定义为 [1,x]（当然可以定义地更精确，之后我们再讨论这个问题），其中解空间应该包括所有区间的实数，不仅仅是整数而已。这个时候解题思路和代码都没有太大变化，唯二需要变化的是：</p>
<ol>
<li>更新答案的步长。 比如之前的更新是 <code v-pre>l = mid + 1</code>，现在<strong>可能</strong>就不行了，因此这样<strong>可能</strong>会错过正确解，比如正确解恰好就在区间 [mid,mid+1] 内的某一个小数。</li>
<li>判断条件时候需要考虑误差。由于精度的问题，判断的结束条件可能就要变成 <strong>与答案的误差在某一个范围内</strong>。</li>
</ol>
<p>对于<strong>搜索类题目</strong>，解空间一定是有限的，不然问题不可解。对于搜索类问题，第一步就是需要明确解空间，这样你才能够在解空间内进行搜索。这个技巧不仅适用于二分法，只要是搜索问题都可以使用，比如 DFS，BFS 以及回溯等。只不过对于二分法来说，<strong>明确解空间显得更为重要</strong>。如果现在还不理解这句话也没关系，看完本文或许你就理解了。</p>
<p>定义解空间的时候的一个原则是： 可以大但不可以小。因为如果解空间偏大（只要不是无限大）无非就是多做几次运算，而如果解空间过小则可能<strong>错失正确解</strong>，导致结果错误。比如前面我提到的求 x 的平方根，我们当然可以将解空间定义的更小，比如定义为 [1,x/2]，这样可以减少运算的次数。但如果设置地太小，则可能会错过正确解。这是新手容易犯错的点之一。</p>
<p>有的同学可能会说我看不出来怎么办呀。我觉得如果你实在拿不准也完全没有关系，比如求 x 的平方根，就可以设置为 [1,x]，就让它多做几次运算嘛。我建议你<strong>给上下界设置一个宽泛的范围</strong>。等你对二分逐步了解之后可以<strong>卡地更死一点</strong>。</p>
<h3 id="序列有序" tabindex="-1"><a class="header-anchor" href="#序列有序" aria-hidden="true">#</a> 序列有序</h3>
<p>我这里说的是序列，并不是数组，链表等。也就是说二分法通常要求的序列有序，不一定是数组，链表，也有可能是其他数据结构。另外有的<strong>序列有序</strong>题目直接讲出来了，会比较容易。而有些则隐藏在题目信息之中。乍一看，题目并没有<strong>有序</strong>关键字，而有序其实就隐藏在字里行间。比如题目给了数组 nums，并且没有限定 nums 有序，但限定了 nums 为非负。这样如果给 nums 做前缀和或者前缀或（位运算或），就可以得到一个有序的序列啦。</p>
<blockquote>
<p>更多技巧在四个应用部分展开哦。</p>
</blockquote>
<p>虽然二分法不意味着需要序列有序，但大多数二分题目都有<strong>有序</strong>这个显著特征。只不过：</p>
<ul>
<li>有的是题目直接限定了有序。这种题目通常难度不高，也容易让人想到用二分。</li>
<li>有的是需要你<strong>自己构造有序序列</strong>。这种类型的题目通常难度不低，需要大家有一定的观察能力。</li>
</ul>
<p>比如<a href="https://binarysearch.com/problems/Triple-Inversion" title="Triple Inversion" target="_blank" rel="noopener noreferrer">Triple Inversion<ExternalLinkIcon/></a>。题目描述如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Given a list of integers nums, return the number of pairs i &lt; j such that nums[i] > nums[j] * 3.

Constraints： n ≤ 100,000 where n is the length of nums
Example 1
Input：
nums = [7, 1, 2]
Output：
2
Explanation：
We have the pairs (7, 1) and (7, 2)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这道题并没有限定数组 nums 是有序的，但是我们可以构造一个有序序列 d，进而在 d 上做二分。代码：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">solve</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> A<span class="token punctuation">)</span><span class="token punctuation">:</span>
        d <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        ans <span class="token operator">=</span> <span class="token number">0</span>

        <span class="token keyword">for</span> a <span class="token keyword">in</span> A<span class="token punctuation">:</span>
            i <span class="token operator">=</span> bisect<span class="token punctuation">.</span>bisect_right<span class="token punctuation">(</span>d<span class="token punctuation">,</span> a <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span>
            ans <span class="token operator">+=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">-</span> i
            bisect<span class="token punctuation">.</span>insort<span class="token punctuation">(</span>d<span class="token punctuation">,</span> a<span class="token punctuation">)</span>
        <span class="token keyword">return</span> ans
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果暂时不理解代码也没关系，大家先留个印象，知道有这么一种类型题即可，大家可以看完本章的所有内容（上下两篇）之后再回头做这道题。</p>
<h3 id="极值" tabindex="-1"><a class="header-anchor" href="#极值" aria-hidden="true">#</a> 极值</h3>
<p>类似我在<a href="https://lucifer.ren/blog/2020/12/26/heap/" title="堆专题" target="_blank" rel="noopener noreferrer">堆专题<ExternalLinkIcon/></a> 提到的极值。只不过这里的极值是<strong>静态的</strong>，而不是动态的。这里的极值通常指的是<strong>求第 k 大（或者第 k 小）的数。</strong></p>
<p>堆的一种很重要的用法是求第 k 大的数，而二分法也可以求第 k 大的数，只不过<strong>二者的思路完全不同</strong>。使用堆求第 k 大的思路我已经在前面提到的堆专题里详细解释了。那么二分呢？这里我们通过一个例子来感受一下：这道题是 <a href="https://binarysearch.com/problems/Kth-Pair-Distance" title="Kth Pair Distance" target="_blank" rel="noopener noreferrer">Kth Pair Distance<ExternalLinkIcon/></a>，题目描述如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Given a list of integers nums and an integer k, return the k-th (0-indexed) smallest abs(x - y) for every pair of elements (x, y) in nums. Note that (x, y) and (y, x) are considered the same pair.

Constraints:n ≤ 100,000 where n is the length of nums
Example 1
Input:
nums = [1, 5, 3, 2]
k = 3
Output:
2
Explanation:

Here are all the pair distances:

abs(1 - 5) = 4
abs(1 - 3) = 2
abs(1 - 2) = 1
abs(5 - 3) = 2
abs(5 - 2) = 3
abs(3 - 2) = 1

Sorted in ascending order we have [1, 1, 2, 2, 3, 4].
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单来说，题目就是给的一个数组 nums，让你求 nums 第 k 大的<strong>任意两个数的差的绝对值</strong>。当然，我们可以使用堆来做，只不过使用堆的时间复杂度会很高，导致无法通过所有的测试用例。这道题我们可以使用二分法来降维打击。</p>
<p>对于这道题来说，解空间就是从 0 到数组 nums 中最大最小值的差，用区间表示就是 [0, max(nums) - min(nums)]。明确了解空间之后，我们就需要对解空间进行二分。对于这道题来说，可以选当前解空间的中间值 mid ，然后计算小于等于这个中间值的<strong>任意两个数的差的绝对值</strong>有几个，我们不妨令这个数字为 x。</p>
<ul>
<li>如果 x 大于 k，那么解空间中大于等于 mid 的数都不可能是答案，可以将其舍弃。</li>
<li>如果 x 小于 k，那么解空间中小于等于 mid 的数都不可能是答案，可以将其舍弃。</li>
<li>如果 x 等于 k，那么 mid 就是答案。</li>
</ul>
<p>基于此，我们可使用二分来解决。这种题型，我总结为<strong>计数二分</strong>。我会在后面的四大应用部分重点讲解。</p>
<p>代码：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">solve</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> A<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">:</span>
        A<span class="token punctuation">.</span>sort<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">def</span> <span class="token function">count_not_greater</span><span class="token punctuation">(</span>diff<span class="token punctuation">)</span><span class="token punctuation">:</span>
            i <span class="token operator">=</span> ans <span class="token operator">=</span> <span class="token number">0</span>
            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">while</span> A<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> diff<span class="token punctuation">:</span>
                    i <span class="token operator">+=</span> <span class="token number">1</span>
                ans <span class="token operator">+=</span> j <span class="token operator">-</span> i
            <span class="token keyword">return</span> ans
        l<span class="token punctuation">,</span> r <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> A<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> A<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

        <span class="token keyword">while</span> l <span class="token operator">&lt;=</span> r<span class="token punctuation">:</span>
            mid <span class="token operator">=</span> <span class="token punctuation">(</span>l <span class="token operator">+</span> r<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span>
            <span class="token keyword">if</span> count_not_greater<span class="token punctuation">(</span>mid<span class="token punctuation">)</span> <span class="token operator">></span> k<span class="token punctuation">:</span>
                r <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                l <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token keyword">return</span> l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果暂时不理解代码也没关系，大家先留个印象，知道有这么一种类型题即可，大家可以看完本章的所有内容（上下两篇）之后再回头做这道题。</p>
<h2 id="一个中心" tabindex="-1"><a class="header-anchor" href="#一个中心" aria-hidden="true">#</a> 一个中心</h2>
<p>二分法的一个中心大家一定牢牢记住。其他（比如序列有序，左右双指针）都是二分法的手和脚，都是表象，并不是本质，而<strong>折半才是二分法的灵魂</strong>。</p>
<p>前面已经给大家明确了解空间的概念。而这里的折半其实就是解空间的折半。</p>
<p>比如刚开始解空间是 [1, n]（n 为一个大于 n 的整数）。通过<strong>某种方式</strong>，我们确定 [1, m] 区间都<strong>不可能是答案</strong>。那么解空间就变成了 (m,n]，持续此过程知道解空间变成平凡（直接可解）。</p>
<blockquote>
<p>注意区间 (m,n] 左侧是开放的，表示 m 不可能取到。</p>
</blockquote>
<p>显然折半的难点是<strong>根据什么条件舍弃哪一步部分</strong>。这里有两个关键字:</p>
<ol>
<li>什么条件</li>
<li>舍弃哪部分</li>
</ol>
<p>几乎所有的二分的难点都在这两个点上。如果明确了这两点，几乎所有的二分问题都可以迎刃而解。幸运的是，关于这两个问题的答案通常都是有限的，题目考察的往往就是那几种。这其实就是所谓的做题套路。关于这些套路，我会在之后的四个应用部分给大家做详细介绍。</p>
<h2 id="二分法上篇小结" tabindex="-1"><a class="header-anchor" href="#二分法上篇小结" aria-hidden="true">#</a> 二分法上篇小结</h2>
<p>上篇主要就是带大家了解几个概念，这些概念对做题极为重要，请务必掌握。接下来讲解了二分法的中心 - 折半，这个中心需要大家做任何二分都要放到脑子中。</p>
<p>如果让我用一句话总结二分法，我会说**<code v-pre>二分法是一种让未知世界无机可乘的算法</code><strong>。即二分法无论如何我们都可以舍弃一半解，也就是无论如何都可以将解空间砍半。难点就是上面提到的两点：</strong><code v-pre>什么条件</code>** 和 <strong><code v-pre>舍弃哪部分</code></strong>。这是二分法核心要解决的问题。</p>
<p>以上就是《二分专题（上篇）》的所有内容。如果觉得文章有用，请点赞留言转发一下，让我有动力继续出下集。</p>
<h2 id="下集预告" tabindex="-1"><a class="header-anchor" href="#下集预告" aria-hidden="true">#</a> 下集预告</h2>
<p>上集介绍的是基本概念。下一集我们介绍两种二分的类型以及四种二分的应用。</p>
<p>下集目录：</p>
<ul>
<li>
<p>两种类型</p>
<ul>
<li>
<p>最左插入</p>
</li>
<li>
<p>最右插入</p>
</li>
</ul>
</li>
<li>
<p>四大应用</p>
<ul>
<li>
<p>能力检测二分</p>
</li>
<li>
<p>前缀和二分</p>
</li>
<li>
<p>插入排序二分（不是你理解的插入排序哦）</p>
</li>
<li>
<p>计数二分</p>
</li>
</ul>
</li>
</ul>
<p>其中两种类型（最左和最右插入）主要解决的的是：<strong><code v-pre>解空间已经明确出来了，如何用代码找出具体的解</code></strong>。</p>
<p>而四大应用主要解决的是：<strong><code v-pre>如何构造解空间</code></strong>。更多的情况则是如何构建有序序列。</p>
<p>这两部分都是实操性很强的内容，在理解这两部分内容的同时，请大家务必牢记一个中心**<code v-pre>折半</code>**。那我们下篇见喽~</p>
</div></template>


