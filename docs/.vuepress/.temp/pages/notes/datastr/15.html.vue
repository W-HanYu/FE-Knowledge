<template><div><h1 id="滑动窗口-sliding-window" tabindex="-1"><a class="header-anchor" href="#滑动窗口-sliding-window" aria-hidden="true">#</a> 滑动窗口（Sliding Window）</h1>
<p>笔者最早接触滑动窗口是<code v-pre>滑动窗口协议</code>，滑动窗口协议（Sliding Window Protocol），属于 TCP 协议的一种应用，用于网络数据传输时的流量控制，以避免拥塞的发生。 发送方和接收方分别有一个窗口大小 w1 和 w2。窗口大小可能会根据网络流量的变化而有所不同，但是在更简单的实现中它们是固定的。窗口大小必须大于零才能进行任何操作。</p>
<p>我们算法中的滑动窗口也是类似，只不过包括的情况更加广泛。实际上上面的滑动窗口在某一个时刻就是固定窗口大小的滑动窗口，随着网络流量等因素改变窗口大小也会随着改变。接下来我们讲下算法中的滑动窗口。</p>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>滑动窗口是一种解决问题的思路和方法，通常用来解决一些连续问题。 比如 LeetCode 的 <a href="https://leetcode-cn.com/problems/minimum-size-subarray-sum/solution/209-chang-du-zui-xiao-de-zi-shu-zu-hua-dong-chua-2/" target="_blank" rel="noopener noreferrer">209. 长度最小的子数组<ExternalLinkIcon/></a>。更多滑动窗口题目见下方<code v-pre>题目列表</code>。</p>
<h2 id="常见套路" tabindex="-1"><a class="header-anchor" href="#常见套路" aria-hidden="true">#</a> 常见套路</h2>
<p>滑动窗口主要用来处理连续问题。比如题目求解“连续子串 xxxx”，“连续子数组 xxxx”，就应该可以想到滑动窗口。能不能解决另说，但是这种敏感性还是要有的。</p>
<p>从类型上说主要有：</p>
<ul>
<li>固定窗口大小</li>
<li>窗口大小不固定，求解最大的满足条件的窗口</li>
<li>窗口大小不固定，求解最小的满足条件的窗口（上面的 209 题就属于这种）</li>
</ul>
<p>后面两种我们统称为<code v-pre>可变窗口</code>。当然不管是哪种类型基本的思路都是一样的，不一样的仅仅是代码细节。</p>
<h3 id="固定窗口大小" tabindex="-1"><a class="header-anchor" href="#固定窗口大小" aria-hidden="true">#</a> 固定窗口大小</h3>
<p>对于固定窗口，我们只需要固定初始化左右指针 l 和 r，分别表示的窗口的左右顶点，并且保证：</p>
<ol>
<li>l 初始化为 0</li>
<li>初始化 r，使得 r - l + 1 等于窗口大小</li>
<li>同时移动 l 和 r</li>
<li>判断窗口内的连续元素是否满足题目限定的条件
<ul>
<li>4.1 如果满足，再判断是否需要更新最优解，如果需要则更新最优解</li>
<li>4.2 如果不满足，则继续。</li>
</ul>
</li>
</ol>
<p><img src="https://p.ipic.vip/vpgo8a.jpg" alt=""></p>
<h3 id="可变窗口大小" tabindex="-1"><a class="header-anchor" href="#可变窗口大小" aria-hidden="true">#</a> 可变窗口大小</h3>
<p>对于可变窗口，我们同样固定初始化左右指针 l 和 r，分别表示的窗口的左右顶点。后面有所不同，我们需要保证：</p>
<ol>
<li>l 和 r 都初始化为 0</li>
<li>r 指针移动一步</li>
<li>判断窗口内的连续元素是否满足题目限定的条件
<ul>
<li>3.1 如果满足，再判断是否需要更新最优解，如果需要则更新最优解。并尝试通过移动 l 指针缩小窗口大小。循环执行 3.1</li>
<li>3.2 如果不满足，则继续。</li>
</ul>
</li>
</ol>
<p>形象地来看的话，就是 r 指针不停向右移动，l 指针仅仅在窗口满足条件之后才会移动，起到窗口收缩的效果。</p>
<p><img src="https://p.ipic.vip/n7w2h5.jpg" alt=""></p>
<h2 id="模板代码" tabindex="-1"><a class="header-anchor" href="#模板代码" aria-hidden="true">#</a> 模板代码</h2>
<h3 id="伪代码" tabindex="-1"><a class="header-anchor" href="#伪代码" aria-hidden="true">#</a> 伪代码</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>初始化慢指针 = 0
初始化 ans

for 快指针 in 可迭代集合
   更新窗口内信息
   while 窗口内不符合题意
      扩展或者收缩窗口
      慢指针移动
   更新答案
返回 ans
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3>
<p>以下是 209 题目的代码，使用 Python 编写，大家意会即可。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">minSubArrayLen</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> s<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        l <span class="token operator">=</span> total <span class="token operator">=</span> <span class="token number">0</span>
        ans <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token keyword">for</span> r <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            total <span class="token operator">+=</span> nums<span class="token punctuation">[</span>r<span class="token punctuation">]</span>
            <span class="token keyword">while</span> total <span class="token operator">>=</span> s<span class="token punctuation">:</span>
                ans <span class="token operator">=</span> <span class="token builtin">min</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span> r <span class="token operator">-</span> l <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
                total <span class="token operator">-=</span> nums<span class="token punctuation">[</span>l<span class="token punctuation">]</span>
                l <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">return</span>  <span class="token number">0</span> <span class="token keyword">if</span> ans <span class="token operator">==</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token keyword">else</span> ans
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="题目列表-有题解" tabindex="-1"><a class="header-anchor" href="#题目列表-有题解" aria-hidden="true">#</a> 题目列表（有题解）</h2>
<p>以下题目有的信息比较直接，有的题目信息比较隐蔽，需要自己发掘</p>
<ul>
<li><a href="https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/pythonjavascript-hua-dong-chuang-kou-3-wu-zhong-fu/" target="_blank" rel="noopener noreferrer">【Python，JavaScript】滑动窗口（3. 无重复字符的最长子串）<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/minimum-window-substring/solution/python-hua-dong-chuang-kou-76-zui-xiao-fu-gai-zi-c/" target="_blank" rel="noopener noreferrer">76. 最小覆盖子串<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/minimum-size-subarray-sum/solution/209-chang-du-zui-xiao-de-zi-shu-zu-hua-dong-chua-2/" target="_blank" rel="noopener noreferrer">209. 长度最小的子数组<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/solution/python-hua-dong-chuang-kou-438-zhao-dao-zi-fu-chua/" target="_blank" rel="noopener noreferrer">【Python】滑动窗口（438. 找到字符串中所有字母异位词）<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/fruit-into-baskets/solution/904-shui-guo-cheng-lan-python3-by-fe-lucifer/" target="_blank" rel="noopener noreferrer">【904. 水果成篮】（Python3）<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/binary-subarrays-with-sum/solution/930-he-xiang-tong-de-er-yuan-zi-shu-zu-javapython-/" target="_blank" rel="noopener noreferrer">【930. 和相同的二元子数组】（Java，Python）<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/subarrays-with-k-different-integers/solution/992-k-ge-bu-tong-zheng-shu-de-zi-shu-zu-hua-dong-c/" target="_blank" rel="noopener noreferrer">【992. K 个不同整数的子数组】滑动窗口（Python）<ExternalLinkIcon/></a></li>
<li><RouterLink to="/notes/problems/978.longest-turbulent-subarray.html">978. 最长湍流子数组</RouterLink></li>
<li><a href="https://leetcode-cn.com/problems/max-consecutive-ones-iii/solution/1004-zui-da-lian-xu-1de-ge-shu-iii-hua-dong-chuang/" target="_blank" rel="noopener noreferrer">【1004. 最大连续 1 的个数 III】滑动窗口（Python3）<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode.com/problems/replace-the-substring-for-balanced-string/discuss/408978/javacpython-sliding-window/367697" target="_blank" rel="noopener noreferrer">【1234. 替换子串得到平衡字符串】[Java/C++/Python] Sliding Window<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/count-number-of-nice-subarrays/solution/1248-tong-ji-you-mei-zi-shu-zu-hua-dong-chuang-kou/" target="_blank" rel="noopener noreferrer">【1248. 统计「优美子数组」】滑动窗口（Python）<ExternalLinkIcon/></a></li>
<li><RouterLink to="/notes/problems/1658.minimum-operations-to-reduce-x-to-zero.html">1658. 将 x 减到 0 的最小操作数</RouterLink></li>
</ul>
<h2 id="扩展阅读" tabindex="-1"><a class="header-anchor" href="#扩展阅读" aria-hidden="true">#</a> 扩展阅读</h2>
<ul>
<li><a href="https://leetcode.com/problems/binary-subarrays-with-sum/discuss/186683/" target="_blank" rel="noopener noreferrer">LeetCode Sliding Window Series Discussion<ExternalLinkIcon/></a></li>
</ul>
</div></template>


