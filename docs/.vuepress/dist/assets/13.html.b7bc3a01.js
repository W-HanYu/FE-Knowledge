import{_ as t,r as o,o as c,c as i,a as n,b as s,d as e,e as p}from"./app.8f1211c8.js";const l={},r=n("h1",{id:"前缀树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前缀树","aria-hidden":"true"},"#"),s(" 前缀树")],-1),u=n("p",null,"字典树也叫前缀树、Trie。它本身就是一个树型结构，也就是一颗多叉树，学过树的朋友应该非常容易理解，它的核心操作是插入，查找。删除很少使用，因此这个讲义不包含删除操作。",-1),d={href:"https://leetcode-cn.com/tag/trie/",target:"_blank",rel:"noopener noreferrer"},k=p(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>我们想一下用百度搜索时候，打个“一语”，搜索栏中会给出“一语道破”，“一语成谶(四声的 chen)”等推荐文本，这种叫模糊匹配，也就是给出一个模糊的 query，希望给出一个相关推荐列表，很明显，hashmap 并不容易做到模糊匹配，而 Trie 可以实现基于前缀的模糊搜索。</p><blockquote><p>注意这里的模糊搜索也仅仅是基于前缀的。比如还是上面的例子，搜索“道破”就不会匹配到“一语道破”，而只能匹配“道破 xx”</p></blockquote><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><p>假想一个场景：给你若干单词 words 和一系列关键字 keywords，让你判断 keywords 是否在 words 中存在，或者判断 keywords 中的单词是否有 words 中的单词的前缀。比如 pre 就是 pres 的前缀<code>之一</code>。</p><p>朴素的想法是遍历 keywords，对于 keywords 中的每一项都遍历 words 列表判断二者是否相等，或者是否是其前缀。这种算法的时间复杂度是 $O(m * n)$，其中 m 为 words 的平均长度，n 为 keywords 的平均长度。那么是否有可能对其进行优化呢？答案就是本文要讲的前缀树。</p><p>我们可以将 words 存储到一个树上，这棵树叫做前缀树。 一个前缀树大概是这个样子：</p><p><img src="https://p.ipic.vip/l22fyo.jpg" alt=""></p><p>如图每一个节点存储一个字符，然后外加一个控制信息表示是否是单词结尾，实际使用过程可能会有细微差别，不过变化不大。</p><p>为了搞明白前缀树是如何优化暴力算法的。我们需要了解一下前缀树的基本概念和操作。</p><h3 id="节点" tabindex="-1"><a class="header-anchor" href="#节点" aria-hidden="true">#</a> 节点：</h3><ul><li>根结点无实际意义</li><li>每一个节点<code>数据域</code>存储一个字符</li><li>每个节点中的<code>控制域</code>可以自定义，如 isWord(是否是单词)，count(该前缀出现的次数)等，需实际问题实际分析需要什么。</li></ul><p>一个可能的前缀树节点结构：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  <span class="token keyword">private</span> <span class="token keyword">class</span> <span class="token class-name">TrieNode</span> <span class="token punctuation">{</span>

        <span class="token keyword">int</span> count<span class="token punctuation">;</span> <span class="token comment">//表示以该处节点构成的串的个数</span>
        <span class="token keyword">int</span> preCount<span class="token punctuation">;</span> <span class="token comment">//表示以该处节点构成的前缀的字串的个数</span>
        <span class="token class-name">TrieNode</span><span class="token punctuation">[</span><span class="token punctuation">]</span> children<span class="token punctuation">;</span>

        <span class="token class-name">TrieNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            children <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TrieNode</span><span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            preCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出 TriNode 是一个递归的数据结构，<code>其结构类似多叉树，只是多了几个属性记录额外信息罢了。</code> 比如 count 可以用来判断以当前节点结束的单词个数， preCount 可以用来判断以当前节点结束的前缀个数。举个例子：比如前缀树中存了两个单词 lu 和 lucifer，那么单词 lu 有一个，lu 前缀有两个。</p><p>前缀树大概如下图：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                        l(count = 0, preCount=2)
                    u(count = 1, preCount=2)
                c(count = 0, preCount=1)
            i(count = 0, preCount=1)
        f(count = 0, preCount=1)
    e(count = 0, preCount=1)
f(count = 1, preCount=1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="trie-的插入" tabindex="-1"><a class="header-anchor" href="#trie-的插入" aria-hidden="true">#</a> Trie 的插入</h3><p>构建 Trie 的核心就是插入。而插入指的就是将单词（words）全部依次插入到前缀树中。假定给出几个单词 words [she,he,her,good,god]构造出一个 Trie 如下图：</p><p><img src="https://p.ipic.vip/znbzcd.jpg" alt=""></p><p>也就是说从根结点出发到某一粉色节点所经过的字符组成的单词，在单词列表中出现过，当然我们也可以给树的每个节点加个 count 属性，代表根结点到该节点所构成的字符串前缀出现的次数</p><p><img src="https://p.ipic.vip/qelwml.jpg" alt=""></p><p>可以看出树的构造非常简单：<code>插入新单词的时候就从根结点出发一个字符一个字符插入，有对应的字符节点就更新对应的属性，没有就创建一个！</code></p><h3 id="trie-的查询" tabindex="-1"><a class="header-anchor" href="#trie-的查询" aria-hidden="true">#</a> Trie 的查询</h3><p>查询更简单了，给定一个 Trie 和一个单词，和插入的过程类似，一个字符一个字符找</p><ul><li>若中途有个字符没有对应节点 →Trie 不含该单词</li><li>若字符串遍历完了，都有对应节点，但最后一个字符对应的节点并不是粉色的，也就不是一个单词 →Trie 不含该单词</li></ul><h2 id="trie-模版" tabindex="-1"><a class="header-anchor" href="#trie-模版" aria-hidden="true">#</a> Trie 模版</h2><p>了解了 Trie 的使用场景以及基本的 API， 那么最后就是用代码来实现了。这里我提供了 Python 和 Java 两种语言的代码。</p><p>Java Code:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Trie</span> <span class="token punctuation">{</span>

    <span class="token class-name">TrieNode</span> root<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Trie</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TrieNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">String</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">TrieNode</span> node <span class="token operator">=</span> root<span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> word<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">[</span>word<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                node<span class="token punctuation">.</span>children<span class="token punctuation">[</span>word<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TrieNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            node <span class="token operator">=</span> node<span class="token punctuation">.</span>children<span class="token punctuation">[</span>word<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            node<span class="token punctuation">.</span>preCount<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        node<span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token class-name">String</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">TrieNode</span> node <span class="token operator">=</span> root<span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> word<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">[</span>word<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

            node <span class="token operator">=</span> node<span class="token punctuation">.</span>children<span class="token punctuation">[</span>word<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> node<span class="token punctuation">.</span>count <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token class-name">String</span> prefix<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">TrieNode</span> node <span class="token operator">=</span> root<span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> prefix<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">[</span>prefix<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            node <span class="token operator">=</span> node<span class="token punctuation">.</span>children<span class="token punctuation">[</span>prefix<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> node<span class="token punctuation">.</span>preCount <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">class</span> <span class="token class-name">TrieNode</span> <span class="token punctuation">{</span>

        <span class="token keyword">int</span> count<span class="token punctuation">;</span> <span class="token comment">//表示以该处节点构成的串的个数</span>
        <span class="token keyword">int</span> preCount<span class="token punctuation">;</span> <span class="token comment">//表示以该处节点构成的前缀的字串的个数</span>
        <span class="token class-name">TrieNode</span><span class="token punctuation">[</span><span class="token punctuation">]</span> children<span class="token punctuation">;</span>

        <span class="token class-name">TrieNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            children <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TrieNode</span><span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            preCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python Code:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">TrieNode</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment"># 表示以该处节点构成的串的个数</span>
        self<span class="token punctuation">.</span>preCount <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment"># 表示以该处节点构成的前缀的字串的个数</span>
        self<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Trie</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>root <span class="token operator">=</span> TrieNode<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">insert</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> word<span class="token punctuation">)</span><span class="token punctuation">:</span>
        node <span class="token operator">=</span> self<span class="token punctuation">.</span>root
        <span class="token keyword">for</span> ch <span class="token keyword">in</span> word<span class="token punctuation">:</span>
            <span class="token keyword">if</span> ch <span class="token keyword">not</span> <span class="token keyword">in</span> node<span class="token punctuation">.</span>children<span class="token punctuation">:</span>
                node<span class="token punctuation">.</span>children<span class="token punctuation">[</span>ch<span class="token punctuation">]</span> <span class="token operator">=</span> TrieNode<span class="token punctuation">(</span><span class="token punctuation">)</span>
            node <span class="token operator">=</span> node<span class="token punctuation">.</span>children<span class="token punctuation">[</span>ch<span class="token punctuation">]</span>
            node<span class="token punctuation">.</span>preCount <span class="token operator">+=</span> <span class="token number">1</span>
        node<span class="token punctuation">.</span>count <span class="token operator">+=</span> <span class="token number">1</span>

    <span class="token keyword">def</span> <span class="token function">search</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> word<span class="token punctuation">)</span><span class="token punctuation">:</span>
        node <span class="token operator">=</span> self<span class="token punctuation">.</span>root
        <span class="token keyword">for</span> ch <span class="token keyword">in</span> word<span class="token punctuation">:</span>
            <span class="token keyword">if</span> ch <span class="token keyword">not</span> <span class="token keyword">in</span> node<span class="token punctuation">.</span>children<span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token boolean">False</span>
            node <span class="token operator">=</span> node<span class="token punctuation">.</span>children<span class="token punctuation">[</span>ch<span class="token punctuation">]</span>
        <span class="token keyword">return</span> node<span class="token punctuation">.</span>count <span class="token operator">&gt;</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">startsWith</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> prefix<span class="token punctuation">)</span><span class="token punctuation">:</span>
        node <span class="token operator">=</span> self<span class="token punctuation">.</span>root
        <span class="token keyword">for</span> ch <span class="token keyword">in</span> prefix<span class="token punctuation">:</span>
            <span class="token keyword">if</span> ch <span class="token keyword">not</span> <span class="token keyword">in</span> node<span class="token punctuation">.</span>children<span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token boolean">False</span>
            node <span class="token operator">=</span> node<span class="token punctuation">.</span>children<span class="token punctuation">[</span>ch<span class="token punctuation">]</span>
        <span class="token keyword">return</span> node<span class="token punctuation">.</span>preCount <span class="token operator">&gt;</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JavaScript Code</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>var Trie = function() {
  this.children = {};
  this.count = 0 //表示以该处节点构成的串的个数
  this.preCount = 0 // 表示以该处节点构成的前缀的字串的个数
};

Trie.prototype.insert = function(word) {
  let node = this.children;
  for(let char of word){
    if(!node[char]) node[char] = {}
    node = node[char]
    node.preCount += 1
  }
  node.count += 1
};

Trie.prototype.search = function(word) {
  let node = this.children;
  for(let char of word){
    if(!node[char]) return false
    node = node[char]
  }
  return node.count &gt; 0
};

Trie.prototype.startsWith = function(prefix) {
  let node = this.children;
  for(let char of prefix){
    if(!node[char]) return false
    node = node[char]
  }
  return node.preCount &gt; 0
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>复杂度分析</code></p><ul><li><p>插入和查询的时间复杂度自然是$O(len(key))$，key 是待插入(查找)的字串。</p></li><li><p>建树的最坏空间复杂度是$O(m^{n})$, m 是字符集中字符个数，n 是字符串长度。</p></li></ul><h2 id="回答开头的问题" tabindex="-1"><a class="header-anchor" href="#回答开头的问题" aria-hidden="true">#</a> 回答开头的问题</h2><p>前面我们抛出了一个问题：给你若干单词 words 和一系列关键字 keywords，让你判断 keywords 是否在 words 中存在，或者判断 keywords 中的单词是否有 words 中的单词的前缀。比如 pre 就是 pres 的前缀<code>之一</code>。</p><p>如果使用 Trie 来解，会怎么样呢？首先我们需要建立 Trie，这部分的时间复杂度是 $O(t)$，其中 t 为 words 的总字符。<code>预处理</code>完毕之后就是查询了。对于查询，由于树的高度是 $O(m)$，其中 m 为 words 的平均长度，因此查询基本操作的次数不会大于 $m$。当然查询的基本操作次数也不会大于 $k$，其中 k 为被查询单词 keyword 的长度，因此对于查询来说，时间复杂度为 $O(min(m, k))$。时间上优化的代价是空间上的消耗，对于空间来说则是预处理的消耗，空间复杂度为 $O(t)$。</p><h2 id="前缀树的特点" tabindex="-1"><a class="header-anchor" href="#前缀树的特点" aria-hidden="true">#</a> 前缀树的特点</h2><p>简单来说， 前缀树就是一个树。前缀树一般是将一系列的单词记录到树上， 如果这些单词没有公共前缀，则和直接用数组存没有任何区别。而如果有公共前缀， 则公共前缀仅会被存储一次。可以想象，如果一系列单词的公共前缀很多， 则会有效减少空间消耗。</p><p>而前缀树的意义实际上是空间换时间，这和哈希表，动态规划等的初衷是一样的。</p><p>其原理也很简单，正如我前面所言，其公共前缀仅会被存储一次，因此如果我想在一堆单词中找某个单词或者某个前缀是否出现，我无需进行完整遍历，而是遍历前缀树即可。本质上，使用前缀树和不使用前缀树减少的时间就是公共前缀的数目。也就是说，一堆单词没有公共前缀，使用前缀树没有任何意义。</p>`,43),v={href:"https://github.com/azl397985856/leetcode/blob/b8e8fa5f0554926efa9039495b25ed7fc158372a/problems/208.implement-trie-prefix-tree.md",target:"_blank",rel:"noopener noreferrer"},m=p('<h2 id="应用场景及分析" tabindex="-1"><a class="header-anchor" href="#应用场景及分析" aria-hidden="true">#</a> 应用场景及分析</h2><p>正如上面所说，前缀树的核心思想是用空间换时间，利用字符串的公共前缀来降低查询的时间开销。</p><p>比如给你一个字符串 query，问你这个<code>字符串</code>是否在<code>字符串集合</code>中出现过，这样我们就可以将字符串集合建树，建好之后来匹配 query 是否出现，那有的朋友肯定会问，之前讲过的 hashmap 岂不是更好？</p><p>因此，这里我的理解是：上述精确查找只是模糊查找一个特例，模糊查找 hashmap 显然做不到，并且如果在精确查找问题中，hashmap 出现过多冲突，效率还不一定比 Trie 高，有兴趣的朋友可以做一下测试，看看哪个快。</p><p>再比如给你一个长句和一堆敏感词，找出长句中所有敏感词出现的所有位置（想下，有时候我们口吐芬芳，结果发送出去却变成了****，懂了吧）</p><blockquote><p>小提示：实际上 AC 自动机就利用了 trie 的性质来实现敏感词的匹配，性能非常好。以至于很多编辑器都是用的 AC 自动机的算法。</p></blockquote><p>还有些其他场景，这里不过多讨论，有兴趣的可以 google 一下。</p><h2 id="题目推荐" tabindex="-1"><a class="header-anchor" href="#题目推荐" aria-hidden="true">#</a> 题目推荐</h2><p>以下是本专题的六道题目的题解，内容会持续更新，感谢你的关注～</p>',9),b={href:"https://github.com/azl397985856/leetcode/blob/b8e8fa5f0554926efa9039495b25ed7fc158372a/problems/208.implement-trie-prefix-tree.md",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/azl397985856/leetcode/blob/b0b69f8f11dace3a9040b54532105d42e88e6599/problems/211.add-and-search-word-data-structure-design.md",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/azl397985856/leetcode/blob/b0b69f8f11dace3a9040b54532105d42e88e6599/problems/212.word-search-ii.md",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/azl397985856/leetcode/blob/master/problems/472.concatenated-words.md",target:"_blank",rel:"noopener noreferrer"},y={href:"https://leetcode-cn.com/problems/replace-words/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/azl397985856/leetcode/blob/master/problems/820.short-encoding-of-words.md",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/azl397985856/leetcode/blob/master/problems/1032.stream-of-characters.md",target:"_blank",rel:"noopener noreferrer"},T=n("h2",{id:"总结",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),s(" 总结")],-1),x=n("p",null,"前缀树的核心思想是用空间换时间，利用字符串的公共前缀来降低查询的时间开销。因此如果题目中公共前缀比较多，就可以考虑使用前缀树来优化。",-1),C=n("p",null,"前缀树的基本操作就是插入和查询，其中查询可以完整查询，也可以前缀查询，其中基于前缀查询才是前缀树的灵魂，也是其名字的来源。",-1),N=n("p",null,"最后给大家提供了两种语言的前缀树模板，大家如果需要用，直接将其封装成标准 API 调用即可。",-1),$=n("p",null,[s("基于前缀树的题目变化通常不大， 使用模板就可以解决。如何知道该使用前缀树优化是一个难点，不过大家只要牢牢记一点即可，那就是"),n("code",null,"算法的复杂度瓶颈在字符串查找，并且字符串有很多公共前缀，就可以用前缀树优化"),s("。")],-1);function A(j,z){const a=o("ExternalLinkIcon");return c(),i("div",null,[r,u,n("p",null,[s("截止目前（2020-02-04） "),n("a",d,[s("前缀树（字典树）"),e(a)]),s(" 在 LeetCode 一共有 17 道题目。其中 2 道简单，8 个中等，7 个困难。")]),k,n("p",null,[s("知道了前缀树的特点，接下来我们自己实现一个前缀树。关于实现可以参考 "),n("a",v,[s("0208.implement-trie-prefix-tree"),e(a)])]),m,n("ul",null,[n("li",null,[n("a",b,[s("0208.实现 Trie (前缀树)"),e(a)])]),n("li",null,[n("a",h,[s("0211.添加与搜索单词 - 数据结构设计"),e(a)])]),n("li",null,[n("a",f,[s("0212.单词搜索 II"),e(a)])]),n("li",null,[n("a",w,[s("0472.连接词"),e(a)])]),n("li",null,[n("a",y,[s("648. 单词替换"),e(a)])]),n("li",null,[n("a",_,[s("0820.单词的压缩编码"),e(a)])]),n("li",null,[n("a",g,[s("1032.字符流"),e(a)])])]),T,x,C,N,$])}const S=t(l,[["render",A],["__file","13.html.vue"]]);export{S as default};
