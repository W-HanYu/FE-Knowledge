<template><div><h1 id="小岛问题" tabindex="-1"><a class="header-anchor" href="#小岛问题" aria-hidden="true">#</a> 小岛问题</h1>
<p>LeetCode 上有很多小岛题，虽然官方没有这个标签， 但是在我这里都差不多。不管是思路还是套路都比较类似，大家可以结合起来练习。</p>
<p>不严谨地讲，小岛问题是 DFS 的子专题。</p>
<h2 id="套路" tabindex="-1"><a class="header-anchor" href="#套路" aria-hidden="true">#</a> 套路</h2>
<p>这种题目的套路都是 DFS，从一个或多个入口 DFS 即可。 DFS 的时候，我们往四个方向延伸即可。</p>
<p>一个最经典的代码模板：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>seen <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> i 越界 <span class="token keyword">or</span> j 越界<span class="token punctuation">:</span> <span class="token keyword">return</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token keyword">in</span> seen<span class="token punctuation">:</span> <span class="token keyword">return</span>
  temp <span class="token operator">=</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span>
  <span class="token comment"># 标记为访问过</span>
  seen<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token comment"># 上</span>
  dfs<span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span>
  <span class="token comment"># 下</span>
  dfs<span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span>
  <span class="token comment"># 右</span>
  dfs<span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token comment"># 左</span>
  dfs<span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token comment"># 撤销标记</span>
  seen<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 单点搜索</span>
dfs<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment"># 多点搜索</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>M<span class="token punctuation">)</span><span class="token punctuation">:</span>
   <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">:</span>
      dfs<span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有时候我们甚至可以不用 visited 来标记每个 cell 的访问情况， 而是直接原地标记，这种算法的空间复杂度会更好。这也是一个很常用的技巧， 大家要熟练掌握。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> i 越界 <span class="token keyword">or</span> j 越界<span class="token punctuation">:</span> <span class="token keyword">return</span>
  <span class="token keyword">if</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token keyword">return</span>
  temp <span class="token operator">=</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span>
  <span class="token comment"># 标记为访问过</span>
  board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token comment"># 上</span>
  dfs<span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span>
  <span class="token comment"># 下</span>
  dfs<span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span>
  <span class="token comment"># 右</span>
  dfs<span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token comment"># 左</span>
  dfs<span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token comment"># 撤销标记</span>
  board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp
<span class="token comment"># 单点搜索</span>
dfs<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment"># 多点搜索</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>M<span class="token punctuation">)</span><span class="token punctuation">:</span>
   <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>N<span class="token punctuation">)</span><span class="token punctuation">:</span>
      dfs<span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>
<ul>
<li><a href="https://github.com/azl397985856/leetcode/blob/master/problems/200.number-of-islands.md" target="_blank" rel="noopener noreferrer">200. 岛屿数量<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/max-area-of-island/solution/695-dao-yu-de-zui-da-mian-ji-dfspython3-by-fe-luci/" target="_blank" rel="noopener noreferrer">695. 岛屿的最大面积<ExternalLinkIcon/></a>(字节跳动原题)</li>
<li><a href="https://leetcode-cn.com/problems/as-far-from-land-as-possible/solution/python-tu-jie-chao-jian-dan-de-bfs1162-di-tu-fen-x/" target="_blank" rel="noopener noreferrer">1162. 地图分析<ExternalLinkIcon/></a></li>
<li>463.岛屿的周长</li>
</ul>
<p>上面四道题都可以使用常规的 DFS 来做。 并且递归的方向都是上下左右四个方向。更有意思的是，都可以采用原地修改的方式，来减少开辟 visited 的空间。</p>
<p>其中 463 题， 只是在做 DFS 的时候，需要注意相邻的各自边长可能会被重复计算， 因此需要减去。这里我的思路是：</p>
<ul>
<li>遇到陆地就加 4</li>
<li>继续判断其左侧和上方是否为陆地
<ul>
<li>如果是的话，会出现重复计算，这个时候重复计算的是 2，因此减去 2 即可</li>
<li>如果不是，则不会重复计算， 不予理会即可</li>
</ul>
</li>
</ul>
<p>注意，右侧和下方的就不需要算了，否则还是会重复计算。</p>
<p>代码：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">islandPerimeter</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> grid<span class="token punctuation">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> i <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token keyword">or</span> i <span class="token operator">>=</span> m <span class="token keyword">or</span> j <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token keyword">or</span> j <span class="token operator">>=</span> n <span class="token keyword">or</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">1</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token number">0</span>
            grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
            ans <span class="token operator">=</span> <span class="token number">4</span> <span class="token operator">+</span> dfs<span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token operator">+</span> dfs<span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token operator">+</span> \
                dfs<span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> dfs<span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> i <span class="token operator">></span> <span class="token number">0</span> <span class="token keyword">and</span> grid<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>
                ans <span class="token operator">-=</span> <span class="token number">2</span>
            <span class="token keyword">if</span> j <span class="token operator">></span> <span class="token number">0</span> <span class="token keyword">and</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>
                ans <span class="token operator">-=</span> <span class="token number">2</span>
            <span class="token keyword">return</span> ans

        m<span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>grid<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
                    <span class="token keyword">return</span> dfs<span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然， 你选择判断右侧和下方也是一样的，只需要改<code v-pre>两行</code>代码即可，这两种算法没有什么区别。代码：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">islandPerimeter</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> grid<span class="token punctuation">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> i <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token keyword">or</span> i <span class="token operator">>=</span> m <span class="token keyword">or</span> j <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token keyword">or</span> j <span class="token operator">>=</span> n <span class="token keyword">or</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">1</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token number">0</span>
            grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
            ans <span class="token operator">=</span> <span class="token number">4</span> <span class="token operator">+</span> dfs<span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token operator">+</span> dfs<span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token operator">+</span> \
                dfs<span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> dfs<span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token comment"># 这里需要变</span>
            <span class="token keyword">if</span> i <span class="token operator">&lt;</span> m <span class="token operator">-</span> <span class="token number">1</span> <span class="token keyword">and</span> grid<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>
                ans <span class="token operator">-=</span> <span class="token number">2</span>
            <span class="token comment"># 这里需要变</span>
            <span class="token keyword">if</span> j <span class="token operator">&lt;</span> n <span class="token operator">-</span> <span class="token number">1</span> <span class="token keyword">and</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>
                ans <span class="token operator">-=</span> <span class="token number">2</span>
            <span class="token keyword">return</span> ans

        m<span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>grid<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
                    <span class="token keyword">return</span> dfs<span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你下次碰到了小岛题目， 或者可以抽象为小岛类模型的题目，可以尝试使用本节给大家介绍的模板。这种题目的规律性很强， 类似的还有石子游戏，石子游戏大多数可以使用 DP 来做，这就是一种套路。</p>
<h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2>
<p>实际上，很多题都有小岛题的影子，所谓的小岛题的核心是求连通区域。如果你能将问题转化为求连通区域，那么就可以使用本节的思路去做。 比如 <a href="https://leetcode-cn.com/problems/regions-cut-by-slashes/" title="959. 由斜杠划分区域" target="_blank" rel="noopener noreferrer">959. 由斜杠划分区域<ExternalLinkIcon/></a></p>
<p>题目描述：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>在由 1 x 1 方格组成的 N x N 网格 grid 中，每个 1 x 1 方块由 /、\ 或空格构成。这些字符会将方块划分为一些共边的区域。

（请注意，反斜杠字符是转义的，因此 \ 用 "\\" 表示。）。

返回区域的数目。

示例 1：

输入：
[
  " /",
  "/ "
]
输出：2
解释：2x2 网格如下：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p.ipic.vip/ie8a2v.jpg" alt=""></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>
示例 2：

输入：
[
  " /",
  "  "
]
输出：1
解释：2x2 网格如下：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p.ipic.vip/cm4wgd.jpg" alt=""></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>
示例 3：

输入：
[
  "\\/",
  "/\\"
]
输出：4
解释：（回想一下，因为 \ 字符是转义的，所以 "\\/" 表示 \/，而 "/\\" 表示 /\。）
2x2 网格如下：

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p.ipic.vip/wb8ru7.jpg" alt=""></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>
示例 4：

输入：
[
  "/\\",
  "\\/"
]
输出：5
解释：（回想一下，因为 \ 字符是转义的，所以 "/\\" 表示 /\，而 "\\/" 表示 \/。）
2x2 网格如下：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p.ipic.vip/dpuon4.jpg" alt=""></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>
示例 5：

输入：
[
  "//",
  "/ "
]
输出：3
解释：2x2 网格如下：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p.ipic.vip/i7hmlc.jpg" alt=""></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>提示：

1 &lt;= grid.length == grid[0].length &lt;= 30
grid[i][j] 是 '/'、'\'、或 ' '。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上，如果你将题目中的 &quot;/&quot; 和 &quot;&quot; 都转化为 一个 3 x 3 的网格之后，问题就变成了求连通区域的个数，就可以用本节的思路去解决了。具体留给读者去思考吧，这里给大家贴一个 Python3 的代码。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">regionsBySlashes</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> grid<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        m<span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>grid<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        new_grid <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span> <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> n<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> m<span class="token punctuation">)</span><span class="token punctuation">]</span>
        ans <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token comment"># 预处理，生成新的 3 * m * 3 * n 的网格</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">'/'</span><span class="token punctuation">:</span>
                    new_grid<span class="token punctuation">[</span><span class="token number">3</span> <span class="token operator">*</span> i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span> <span class="token operator">*</span> j <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
                    new_grid<span class="token punctuation">[</span><span class="token number">3</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span> <span class="token operator">*</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
                    new_grid<span class="token punctuation">[</span><span class="token number">3</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span> <span class="token operator">*</span> j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
                <span class="token keyword">if</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">'\\'</span><span class="token punctuation">:</span>
                    new_grid<span class="token punctuation">[</span><span class="token number">3</span> <span class="token operator">*</span> i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span> <span class="token operator">*</span> j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
                    new_grid<span class="token punctuation">[</span><span class="token number">3</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span> <span class="token operator">*</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
                    new_grid<span class="token punctuation">[</span><span class="token number">3</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span> <span class="token operator">*</span> j <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>·
        <span class="token keyword">def</span> <span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> <span class="token number">0</span> <span class="token operator">&lt;=</span> i <span class="token operator">&lt;</span> <span class="token number">3</span> <span class="token operator">*</span> m <span class="token keyword">and</span> <span class="token number">0</span> <span class="token operator">&lt;=</span> j <span class="token operator">&lt;</span> <span class="token number">3</span> <span class="token operator">*</span> n <span class="token keyword">and</span> new_grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
                new_grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
                dfs<span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span>
                dfs<span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span>
                dfs<span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
                dfs<span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> m<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> n<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> new_grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
                    ans <span class="token operator">+=</span> <span class="token number">1</span>
                    dfs<span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
        <span class="token keyword">return</span> ans
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


