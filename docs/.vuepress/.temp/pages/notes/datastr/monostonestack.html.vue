<template><div><h1 id="单调栈" tabindex="-1"><a class="header-anchor" href="#单调栈" aria-hidden="true">#</a> 单调栈</h1>
<p>顾名思义， 单调栈是一种栈。因此要学单调栈，首先要彻底搞懂栈。</p>
<h2 id="栈是什么" tabindex="-1"><a class="header-anchor" href="#栈是什么" aria-hidden="true">#</a> 栈是什么？</h2>
<p><img src="https://p.ipic.vip/3ad96r.jpg" alt=""></p>
<p>栈是一种受限的数据结构， 体现在只允许新的内容从一个方向插入或删除，这个方向我们叫栈顶，而从其他位置获取内容是不被允许的</p>
<p>栈最显著的特征就是 LIFO(Last In, First Out - 后进先出)</p>
<p>举个例子：</p>
<p>栈就像是一个放书本的抽屉，进栈的操作就好比是想抽屉里放一本书，新进去的书永远在最上层，而退栈则相当于从里往外拿书本，永远是从最上层开始拿，所以拿出来的永远是最后进去的哪一个</p>
<h3 id="栈的常用操作" tabindex="-1"><a class="header-anchor" href="#栈的常用操作" aria-hidden="true">#</a> 栈的常用操作</h3>
<ol>
<li>进栈 - push - 将元素放置到栈顶</li>
<li>退栈 - pop - 将栈顶元素弹出</li>
<li>栈顶 - top - 得到栈顶元素的值</li>
<li>是否空栈 - isEmpty - 判断栈内是否有元素</li>
</ol>
<h3 id="栈的常用操作时间复杂度" tabindex="-1"><a class="header-anchor" href="#栈的常用操作时间复杂度" aria-hidden="true">#</a> 栈的常用操作时间复杂度</h3>
<p>由于栈只在尾部操作就行了，我们用数组进行模拟的话，可以很容易达到 O(1)的时间复杂度。当然也可以用链表实现，即链式栈。</p>
<ol>
<li>进栈 - O(1)</li>
<li>出栈 - O(1)</li>
</ol>
<p><img src="https://p.ipic.vip/x9l30w.jpg" alt=""></p>
<h3 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h3>
<ul>
<li>函数调用栈</li>
<li>浏览器前进后退</li>
<li>匹配括号</li>
<li>单调栈用来寻找下一个更大（更小）元素</li>
</ul>
<h3 id="题目推荐" tabindex="-1"><a class="header-anchor" href="#题目推荐" aria-hidden="true">#</a> 题目推荐</h3>
<ul>
<li><a href="https://leetcode-cn.com/problems/decode-string/" target="_blank" rel="noopener noreferrer">394. 字符串解码<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/validate-stack-sequences/" target="_blank" rel="noopener noreferrer">946. 验证栈序列<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/design-a-stack-with-increment-operation/" target="_blank" rel="noopener noreferrer">1381. 设计一个支持增量操作的栈<ExternalLinkIcon/></a></li>
</ul>
<h2 id="单调栈又是什么" tabindex="-1"><a class="header-anchor" href="#单调栈又是什么" aria-hidden="true">#</a> 单调栈又是什么？</h2>
<p>单调栈是一种特殊的栈。栈本来就是一种受限的数据结构了，单调栈在此基础上又受限了一次（受限++）。</p>
<p>单调栈要求栈中的元素是单调递增的或者单调递减的。</p>
<blockquote>
<p>是否严格递增或递减可以根据实际情况来。</p>
</blockquote>
<p>这里我用 [a,b,c] 表示一个栈。 其中 左侧为栈底，右侧为栈顶。单调增还是单调减取决于出栈顺序。如果出栈的元素是单调增的，那就是单调递增栈，如果出栈的元素是单调减的，那就是单调递减栈。</p>
<p>比如：</p>
<ul>
<li>[1,2,3,4] 就是一个单调递减栈（因为此时的出栈顺序是 4，3，2，1。下同，不再赘述）</li>
<li>[3,2,1] 就是一个单调递增栈</li>
<li>[1,3,2] 就不是一个合法的单调栈</li>
</ul>
<p>那这个限制有什么用呢？这个限制（特性）能够解决什么用的问题呢？</p>
<h3 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h3>
<p>单调栈适合的题目是求解<code v-pre>下一个大于 xxx</code>或者<code v-pre>下一个小于 xxx</code>这种题目。所有当你有这种需求的时候，就应该想到单调栈。</p>
<p>那么为什么单调栈适合求解<code v-pre>下一个大于 xxx</code>或者<code v-pre>下一个小于 xxx</code>这种题目？原因很简单，我这里通过一个例子给大家讲解一下。</p>
<blockquote>
<p>这里举的例子是单调递减栈</p>
</blockquote>
<p>比如我们需要依次将数组 [1,3,4,5,2,9,6] 压入单调栈。</p>
<ol>
<li>首先压入 1，此时的栈为：[1]</li>
<li>继续压入 3，此时的栈为：[1,3]</li>
<li>继续压入 4，此时的栈为：[1,3,4]</li>
<li>继续压入 5，此时的栈为：[1,3,4,5]</li>
<li><code v-pre>如果</code>继续压入 2，此时的栈为：[1,3,4,5,2] 不满足单调递减栈的特性， 因此需要调整。如何调整？由于栈只有 pop 操作，因此我们只好不断 pop，直到满足单调递减为止。</li>
<li>上面其实我们并没有压入 2，而是先 pop，pop 到压入 2 依然可以保持单调递减再 压入 2，此时的栈为：[1,2]</li>
<li>继续压入 9，此时的栈为：[1,2,9]</li>
<li><code v-pre>如果</code>继续压入 6，则不满足单调递减栈的特性， 我们故技重施，不断 pop，直到满足单调递减为止。此时的栈为：[1,2,6]</li>
</ol>
<p>注意这里的栈仍然是非空的，如果有的题目需要用到所有数组的信息，那么很有可能因没有考虑边界而不能通过所有的测试用例。 这里介绍一个技巧 - <code v-pre>哨兵法</code>，这个技巧经常用在单调栈的算法中。</p>
<p>对于上面的例子，我可以在原数组 [1,3,4,5,2,9,6] 的右侧添加一个小于数组中最小值的项即可，比如 -1。此时的数组是 [1,3,4,5,2,9,6,-1]。这种技巧可以简化代码逻辑，大家尽量掌握。</p>
<p>上面的例子如果你明白了，就不难理解为啥单调栈适合求解<code v-pre>下一个大于 xxx</code>或者<code v-pre>下一个小于 xxx</code>这种题目了。比如上面的例子，我们就可以很容易地求出<code v-pre>在其之后第一个小于其本身的位置</code>。比如 3 的索引是 1，小于 3 的第一个索引是 4，2 的索引 4，小于 2 的第一个索引是 0，但是其在 2 的索引 4 之后，因此不符合条件，也就是不存在<code v-pre>在 2 之后第一个小于 2 本身的位置</code>。</p>
<p>上面的例子，我们在第 6 步开始 pop，第一个被 pop 出来的是 5，因此 5 之后的第一个小于 5 的索引就是 4。同理被 pop 出来的 3，4，5 也都是 4。</p>
<p>如果用 ans 来表示<code v-pre>在其之后第一个小于其本身的位置</code>，ans[i] 表示 arr[i] 之后第一个小于 arr[i] 的位置， ans[i] 为 -1 表示这样的位置不存在，比如前文提到的 2。那么此时的 ans 是 [-1,4,4,4,-1,-1,-1]。</p>
<p>第 8 步，我们又开始 pop 了。此时 pop 出来的是 9，因此 9 之后第一个小于 9 的索引就是 6。</p>
<p>这个算法的过程用一句话总结就是，<code v-pre>如果压栈之后仍然可以保持单调性，那么直接压。否则先弹出栈的元素，直到压入之后可以保持单调性。</code>
这个算法的原理用一句话总结就是，<code v-pre>被弹出的元素都是大于当前元素的，并且由于栈是单调增的，因此在其之后小于其本身的最近的就是当前元素了</code></p>
<p>下面给大家推荐几道题，大家趁着知识还在脑子来，赶紧去刷一下吧~</p>
<h3 id="伪代码" tabindex="-1"><a class="header-anchor" href="#伪代码" aria-hidden="true">#</a> 伪代码</h3>
<p>上面的算法可以用如下的伪代码表示，同时这是一个通用的算法模板，大家遇到单调栈的题目可以直接套。</p>
<p>建议大家用自己熟悉的编程语言实现一遍，以后改改符号基本就能用。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">monostoneStack</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> arr<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        ans <span class="token operator">=</span> 定义一个长度和 arr 一样长的数组，并初始化为 <span class="token operator">-</span><span class="token number">1</span>
        循环 i <span class="token keyword">in</span>  arr<span class="token punctuation">:</span>
            <span class="token keyword">while</span> stack <span class="token keyword">and</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> arr<span class="token punctuation">[</span>栈顶元素<span class="token punctuation">]</span><span class="token punctuation">:</span>
                peek <span class="token operator">=</span> 弹出栈顶元素
                ans<span class="token punctuation">[</span>peek<span class="token punctuation">]</span> <span class="token operator">=</span> i <span class="token operator">-</span> peek
            stack<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        <span class="token keyword">return</span> ans
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>复杂度分析</code></p>
<ul>
<li>时间复杂度：由于 arr 的元素最多只会入栈，出栈一次，因此时间复杂度仍然是 $O(N)$，其中 N 为数组长度。</li>
<li>空间复杂度：由于使用了栈， 并且栈的长度最大是和 arr 长度一致，因此空间复杂度是 $O(N)$，其中 N 为数组长度。</li>
</ul>
<h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3>
<p>这里提高两种编程语言的单调栈模板供大家参考。</p>
<p>Python3：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">monostoneStack</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> T<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        ans <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token builtin">len</span><span class="token punctuation">(</span>T<span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>T<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">while</span> stack <span class="token keyword">and</span> T<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> T<span class="token punctuation">[</span>stack<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                peek <span class="token operator">=</span> stack<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
                ans<span class="token punctuation">[</span>peek<span class="token punctuation">]</span> <span class="token operator">=</span> i <span class="token operator">-</span> peek
            stack<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        <span class="token keyword">return</span> ans
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JS:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">monostoneStack</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token constant">T</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token constant">T</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token constant">T</span><span class="token punctuation">[</span>stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token constant">T</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> peek <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      result<span class="token punctuation">[</span>peek<span class="token punctuation">]</span> <span class="token operator">=</span> i <span class="token operator">-</span> peek<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="题目推荐-1" tabindex="-1"><a class="header-anchor" href="#题目推荐-1" aria-hidden="true">#</a> 题目推荐</h3>
<p>下面几个题帮助你理解单调栈， 并让你明白什么时候可以用单调栈进行算法优化。</p>
<ul>
<li>
<p><a href="https://github.com/azl397985856/leetcode/blob/master/problems/42.trapping-rain-water.md" title="42. 接雨水" target="_blank" rel="noopener noreferrer">42. 接雨水<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://github.com/azl397985856/leetcode/blob/master/problems/84.largest-rectangle-in-histogram.md" title="84. 柱状图中最大的矩形" target="_blank" rel="noopener noreferrer">84. 柱状图中最大的矩形<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://github.com/azl397985856/leetcode/blob/master/daily/2019-06-06.md" title="739.每日温度" target="_blank" rel="noopener noreferrer">739.每日温度<ExternalLinkIcon/></a></p>
</li>
<li>
<ol start="316">
<li>去除重复字母</li>
</ol>
</li>
<li>
<ol start="402">
<li>移掉 K 位数字</li>
</ol>
</li>
<li>
<ol start="496">
<li>下一个更大元素 I</li>
</ol>
</li>
<li>
<ol start="581">
<li>最短无序连续子数组</li>
</ol>
</li>
<li>
<ol start="901">
<li>股票价格跨度</li>
</ol>
</li>
</ul>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>单调栈本质就是栈， 栈本身就是一种受限的数据结构。其受限指的是只能在一端进行操作。而单调栈在栈的基础上进一步受限，即要求栈中的元素始终保持单调性。</p>
<p>由于栈中都是单调的，因此其天生适合解决<code v-pre>在其之后第一个小于其本身的位置</code>的题目。大家如果遇到题目需要找<code v-pre>在其之后第一个小于其本身的位置</code>的题目，就可是考虑使用单调栈。</p>
<p>单调栈的写法相对比较固定，大家可以自己参考我的伪代码自己总结一份模板，以后直接套用可以大大提高做题效率和容错率。</p>
</div></template>


