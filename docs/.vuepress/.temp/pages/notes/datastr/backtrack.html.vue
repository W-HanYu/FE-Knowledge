<template><div><h1 id="回溯" tabindex="-1"><a class="header-anchor" href="#回溯" aria-hidden="true">#</a> 回溯</h1>
<p>回溯是 DFS 中的一种技巧。回溯法采用 <a href="https://zh.wikipedia.org/wiki/%E8%AF%95%E9%94%99" target="_blank" rel="noopener noreferrer">试错<ExternalLinkIcon/></a> 的思想，它尝试分步的去解决一个问题。在分步解决问题的过程中，当它通过尝试发现现有的分步答案不能得到有效的正确的解答的时候，它将<code v-pre>取消上一步甚至是上几步的计算，再通过其它的可能的分步解答再次尝试寻找问题的答案</code>。</p>
<p>通俗上讲，回溯是一种走不通就回头的算法。</p>
<p>回溯的本质是穷举所有可能，尽管有时候可以通过剪枝去除一些根本不可能是答案的分支， 但是从本质上讲，仍然是一种暴力枚举算法。</p>
<p>回溯法可以抽象为树形结构，并且是是一颗高度有限的树（N 叉树）。回溯法解决的都是在集合中查找子集，集合的大小就是树的叉树，递归的深度，构成树的高度。</p>
<p>以求数组 [1,2,3] 的子集为例：</p>
<p><img src="https://p.ipic.vip/94t4uj.jpg" alt=""></p>
<blockquote>
<p>for 循环用来枚举分割点，其实区间 dp 分割区间就是类似的做法</p>
</blockquote>
<p>以上图来说， 我们会在每一个节点进行加入到结果集这一次操作。</p>
<p><img src="https://p.ipic.vip/cfk0ru.jpg" alt=""></p>
<p>对于上面的灰色节点， 加入结果集就是 [1]。</p>
<p><img src="https://p.ipic.vip/uuy9r7.jpg" alt=""></p>
<p>这个加入结果集就是 [1,2]。</p>
<p><img src="https://p.ipic.vip/ze3qul.jpg" alt=""></p>
<p>这个加入结果集就是 [2,3]，以此类推。一共有六个子集，分别是 [1], [1,2], [1,2,3], [2], [2,3] 和 [3]。</p>
<p>而对于全排列问题则会在叶子节点加入到结果集，不过这都是细节问题。掌握了思想之后， 大家再去学习细节就会事半功倍。</p>
<p>下面我们来看下具体代码怎么写。</p>
<h2 id="算法流程" tabindex="-1"><a class="header-anchor" href="#算法流程" aria-hidden="true">#</a> 算法流程</h2>
<ol>
<li>构造空间树。</li>
<li>进行遍历。</li>
<li>如遇到边界条件，即不再向下搜索，转而搜索另一条链。</li>
<li>达到目标条件，输出结果。</li>
</ol>
<h2 id="算法模板" tabindex="-1"><a class="header-anchor" href="#算法模板" aria-hidden="true">#</a> 算法模板</h2>
<p>伪代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> visited <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>满足特定条件）<span class="token punctuation">{</span>
		<span class="token comment">// 返回结果 or 退出搜索空间</span>
	<span class="token punctuation">}</span>

	visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">// 将当前状态标为已搜索</span>
	<span class="token function">dosomething</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">// 对i做一些操作</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span>根据i能到达的下个状态j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 如果状态j没有被搜索过</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token function">undo</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">// 恢复i</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="剪枝" tabindex="-1"><a class="header-anchor" href="#剪枝" aria-hidden="true">#</a> 剪枝</h2>
<p>回溯题目的另外一个考点是剪枝， 通过恰当地剪枝，可以有效减少时间，比如我通过剪枝操作将<code v-pre>石子游戏 V</code>的时间从 900 多 ms 优化到了 500 多 ms。</p>
<p>剪枝在每道题的技巧都是不一样的， 不过一个简单的原则就是<code v-pre>避免根本不可能是答案的递归</code>。</p>
<p>举个例子: <a href="https://leetcode-cn.com/problems/split-array-into-fibonacci-sequence/" target="_blank" rel="noopener noreferrer">842. 将数组拆分成斐波那契序列<ExternalLinkIcon/></a></p>
<p>题目描述：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>给定一个数字字符串 S，比如 S = "123456579"，我们可以将它分成斐波那契式的序列 [123, 456, 579]。

形式上，斐波那契式序列是一个非负整数列表 F，且满足：

0 &lt;= F[i] &lt;= 2^31 - 1，（也就是说，每个整数都符合 32 位有符号整数类型）；
F.length >= 3；
对于所有的0 &lt;= i &lt; F.length - 2，都有 F[i] + F[i+1] = F[i+2] 成立。
另外，请注意，将字符串拆分成小块时，每个块的数字一定不要以零开头，除非这个块是数字 0 本身。

返回从 S 拆分出来的任意一组斐波那契式的序列块，如果不能拆分则返回 []。



示例 1：

输入："123456579"
输出：[123,456,579]
示例 2：

输入: "11235813"
输出: [1,1,2,3,5,8,13]
示例 3：

输入: "112358130"
输出: []
解释: 这项任务无法完成。
示例 4：

输入："0123"
输出：[]
解释：每个块的数字不能以零开头，因此 "01"，"2"，"3" 不是有效答案。
示例 5：

输入: "1101111"
输出: [110, 1, 111]
解释: 输出 [11,0,11,11] 也同样被接受。


提示：

1 &lt;= S.length &lt;= 200
字符串 S 中只含有数字。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还是直接套回溯模板即可解决。但是如果不进行合适地剪枝，很容易超时，这里我进行了四个剪枝操作，具体看代码。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">splitIntoFibonacci</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> S<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">backtrack</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment"># 剪枝1</span>
            <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">2</span> <span class="token keyword">and</span> path<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!=</span> path<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> path<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
            <span class="token keyword">if</span> start <span class="token operator">>=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">2</span><span class="token punctuation">:</span>
                    <span class="token keyword">return</span> path
                <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

            cur <span class="token operator">=</span> <span class="token number">0</span>
            ans <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
            <span class="token comment"># 枚举分割点</span>
            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token comment"># 剪枝2</span>
                <span class="token keyword">if</span> i <span class="token operator">></span> start <span class="token keyword">and</span> S<span class="token punctuation">[</span>start<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">'0'</span><span class="token punctuation">:</span>
                    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
                cur <span class="token operator">=</span> cur <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token builtin">int</span><span class="token punctuation">(</span>S<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token comment"># 剪枝3</span>
                <span class="token keyword">if</span> cur <span class="token operator">></span> <span class="token number">2</span>`<span class="token number">31</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">:</span>
                    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
                path<span class="token punctuation">.</span>append<span class="token punctuation">(</span>cur<span class="token punctuation">)</span>
                ans <span class="token operator">=</span> backtrack<span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> path<span class="token punctuation">)</span>
                <span class="token comment"># 剪枝 4</span>
                <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>ans<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">2</span><span class="token punctuation">:</span>
                    <span class="token keyword">return</span> ans
                path<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> ans

        <span class="token keyword">return</span> backtrack<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>剪枝过程用图表示就是这样的：</p>
<p><img src="https://p.ipic.vip/bc5dgl.jpg" alt=""></p>
<p><code v-pre>剪枝算法回溯的一大考点，大家一定要掌握。</code></p>
<h2 id="笛卡尔积" tabindex="-1"><a class="header-anchor" href="#笛卡尔积" aria-hidden="true">#</a> 笛卡尔积</h2>
<p>一些回溯的题目，我们仍然也可以采用笛卡尔积的方式，将结果保存在返回值而不是路径中，这样就避免了回溯状态，并且由于结果在返回值中，因此可以使用记忆化递归， 进而优化为动态规划形式。</p>
<p>参考题目：</p>
<ul>
<li><a href="https://github.com/azl397985856/leetcode/blob/master/problems/140.word-break-ii.md" target="_blank" rel="noopener noreferrer">140. 单词拆分 II<ExternalLinkIcon/></a></li>
<li><RouterLink to="/notes/problems/401.binary-watch.html">401. 二进制手表</RouterLink></li>
<li><a href="https://github.com/azl397985856/leetcode/blob/master/problems/816.ambiguous-coordinates.md" target="_blank" rel="noopener noreferrer">816. 模糊坐标<ExternalLinkIcon/></a></li>
</ul>
<p>这类问题不同于子集和全排列，其组合是有规律的，我们可以使用笛卡尔积公式，将两个或更多子集联合起来。</p>
<h2 id="经典题目" tabindex="-1"><a class="header-anchor" href="#经典题目" aria-hidden="true">#</a> 经典题目</h2>
<ul>
<li><RouterLink to="/notes/problems/39.combination-sum.html">39. 组合总和</RouterLink></li>
<li><RouterLink to="/notes/problems/40.combination-sum-ii.html">40. 组合总和 II</RouterLink></li>
<li><RouterLink to="/notes/problems/46.permutations.html">46. 全排列</RouterLink></li>
<li><RouterLink to="/notes/problems/47.permutations-ii.html">47. 全排列 II</RouterLink></li>
<li><RouterLink to="/notes/problems/52.N-Queens-II.html">52. N 皇后 II</RouterLink></li>
<li><RouterLink to="/notes/problems/78.subsets.html">78. 子集</RouterLink></li>
<li><RouterLink to="/notes/problems/90.subsets-ii.html">90. 子集 II</RouterLink></li>
<li><RouterLink to="/notes/problems/113.path-sum-ii.html">113. 路径总和 II</RouterLink></li>
<li><RouterLink to="/notes/problems/131.palindrome-partitioning.html">131. 分割回文串</RouterLink></li>
<li><RouterLink to="/notes/problems/1255.maximum-score-words-formed-by-letters.html">1255. 得分最高的单词集合</RouterLink></li>
</ul>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>回溯的本质就是暴力枚举所有可能。要注意的是，由于回溯通常结果集都记录在回溯树的路径上，因此如果不进行撤销操作， 则可能在回溯后状态不正确导致结果有差异， 因此需要在递归到底部往上冒泡的时候进行撤销状态。</p>
<p>如果你每次递归的过程都拷贝了一份数据，那么就不需要撤销状态，相对地空间复杂度会有所增加。</p>
</div></template>


