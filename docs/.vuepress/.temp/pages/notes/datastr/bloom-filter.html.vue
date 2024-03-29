<template><div><h1 id="布隆过滤器" tabindex="-1"><a class="header-anchor" href="#布隆过滤器" aria-hidden="true">#</a> 布隆过滤器</h1>
<h2 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h2>
<p>假设你现在要处理这样一个问题，你有一个网站并且拥有<code v-pre>很多</code>访客，每当有用户访问时，你想知道这个 ip 是不是第一次访问你的网站。</p>
<h3 id="hashtable-可以么" tabindex="-1"><a class="header-anchor" href="#hashtable-可以么" aria-hidden="true">#</a> hashtable 可以么</h3>
<p>一个显而易见的答案是将所有的 IP 用 hashtable 存起来，每次访问都去 hashtable 中取，然后判断即可。但是题目说了网站有<code v-pre>很多</code>访客，假如有 10 亿个用户访问过，假设 IP 是 IPV4， 那么每个 IP 的长度是 4 byte，那么你一共需要 4 * 1000000000 = 4000000000Bytes = 4G 。</p>
<p>如果是判断 URL 黑名单，由于每个 URL 会更长（可能远大于上面 IPV4 地址的 4 byte），那么需要的空间可能会远远大于你的期望。</p>
<h3 id="bit" tabindex="-1"><a class="header-anchor" href="#bit" aria-hidden="true">#</a> bit</h3>
<p>另一个稍微难想到的解法是 bit， 我们知道 bit 有 0 和 1 两种状态，那么用来表示<code v-pre>存在</code>与<code v-pre>不存在</code>再合适不过了。</p>
<p>假如有 10 亿个 IP，就可以用 10 亿个 bit 来存储，那么你一共需要 1 * 1000000000 = (4000000000 / 8) Bytes = 128M, 变为原来的 1/32, 如果是存储 URL 这种更长的字符串，效率会更高。 问题是，我们怎么把 IPV4 和 bit 的位置关联上呢？</p>
<p>比如<code v-pre>192.168.1.1</code> 应该是用第几位表示，<code v-pre>10.18.1.1</code> 应该是用第几位表示呢？ 答案是使用哈希函数。</p>
<p>基于这种想法，我们只需要两个操作，set(ip) 和 has(ip)，以及一个内置函数 hash(ip) 用于将 IP 映射到 bit 表。</p>
<p>这样做有两个非常致命的缺点：</p>
<ol>
<li>当样本分布极度不均匀的时候，会造成很大空间上的浪费</li>
</ol>
<blockquote>
<p>我们可以通过优化散列函数来解决</p>
</blockquote>
<ol start="2">
<li>当元素不是整型（比如 URL）的时候，BitSet 就不适用了</li>
</ol>
<blockquote>
<p>我们还是可以使用散列函数来解决， 甚至可以多 hash 几次</p>
</blockquote>
<h3 id="布隆过滤器-1" tabindex="-1"><a class="header-anchor" href="#布隆过滤器-1" aria-hidden="true">#</a> 布隆过滤器</h3>
<p>布隆过滤器其实就是<code v-pre>bit + 多个散列函数</code>。k 次 hash(ip) 会生成多个索引，并将其 k 个索引位置的二进制置为 1。</p>
<ul>
<li>如果经过 k 个索引位置的值都为 1，那么认为其<code v-pre>可能存在</code>(因为有冲突的可能)。</li>
<li>如果有一个不为 1，那么<code v-pre>一定不存在</code>（一个值经过散列函数得到的值一定是唯一的），这也是布隆过滤器的一个重要特点。</li>
</ul>
<p>也就是说布隆过滤器回答了：<code v-pre>可能存在</code> 和 <code v-pre>一定不存在</code> 的问题。</p>
<p><img src="https://p.ipic.vip/1aeqlp.jpg" alt="bloom-filter-url"></p>
<p>从上图可以看出， 布隆过滤器本质上是由<code v-pre>一个很长的二进制向量</code>和<code v-pre>多个哈希函数</code>组成。</p>
<p>由于没有 hashtable 的 100% 可靠性，因此这本质上是一种<code v-pre>可靠性换取空间的做法</code>。除了可靠性，布隆过滤器删除起来也比较麻烦。</p>
<h3 id="误报" tabindex="-1"><a class="header-anchor" href="#误报" aria-hidden="true">#</a> 误报</h3>
<p>上面提到了布隆过滤器回答了：<code v-pre>可能存在</code> 和 <code v-pre>一定不存在</code> 的问题。 因此当回答是<code v-pre>可能存在</code>的时候你该怎么做？一般而言， 为了宁可错杀一千，也不放过一个，我们认为他存在。 这个时候就产生了<code v-pre>误报</code>。</p>
<p>误报率和二进制向量的长度成反比。</p>
<h3 id="布隆过滤器的应用" tabindex="-1"><a class="header-anchor" href="#布隆过滤器的应用" aria-hidden="true">#</a> 布隆过滤器的应用</h3>
<ol>
<li>网络爬虫</li>
</ol>
<p>判断某个 URL 是否已经被爬取过</p>
<ol start="2">
<li>K-V 数据库 判断某个 key 是否存在</li>
</ol>
<p>比如 Hbase 的每个 Region 中都包含一个 BloomFilter，用于在查询时快速判断某个 key 在该 region 中是否存在。</p>
<ol start="3">
<li>钓鱼网站识别</li>
</ol>
<p>浏览器有时候会警告用户，访问的网站很可能是钓鱼网站，用的就是这种技术</p>
<blockquote>
<p>从这个算法大家可以对 tradeoff(取舍) 有更入的理解。</p>
</blockquote>
<ol start="4">
<li>恶意网站识别</li>
</ol>
<p>总之， 如果你需要判断<code v-pre>一个项目是否在一个集合中出现过，并且需要 100% 确定没有出现过，或者可能出现过</code>，就可以考虑使用布隆过滤器。</p>
<h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span>   <span class="token keyword">class</span>  <span class="token class-name">MyBloomFilter</span> <span class="token punctuation">{</span>
     <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">DEFAULT_SIZE</span> <span class="token operator">=</span>  <span class="token number">2</span> <span class="token operator">&lt;&lt;</span> <span class="token number">31</span> <span class="token punctuation">;</span>
     <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> seeds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">13</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token number">37</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
     <span class="token keyword">private</span>  <span class="token class-name">BitSet</span>  bits <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BitSet</span><span class="token punctuation">(</span><span class="token constant">DEFAULT_SIZE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">private</span>  <span class="token class-name">SimpleHash</span><span class="token punctuation">[</span><span class="token punctuation">]</span> func  <span class="token operator">=</span> <span class="token keyword">new</span>  <span class="token class-name">SimpleHash</span><span class="token punctuation">[</span>seeds<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>

     <span class="token keyword">public</span>   <span class="token keyword">static</span>   <span class="token keyword">void</span>  <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//使用</span>
        <span class="token class-name">String</span> value <span class="token operator">=</span> <span class="token string">"www.xxxxx.com"</span> <span class="token punctuation">;</span>
        <span class="token class-name">MyBloomFilter</span> filter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyBloomFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>filter<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        filter<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>filter<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//构造函数</span>
     <span class="token keyword">public</span>  <span class="token class-name">MyBloomFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">for</span>  <span class="token punctuation">(</span> <span class="token keyword">int</span>  i  <span class="token operator">=</span>   <span class="token number">0</span> <span class="token punctuation">;</span> i  <span class="token operator">&lt;</span>  seeds<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">++</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            func<span class="token punctuation">[</span>i<span class="token punctuation">]</span>  <span class="token operator">=</span>   <span class="token keyword">new</span>  <span class="token class-name">SimpleHash</span><span class="token punctuation">(</span><span class="token constant">DEFAULT_SIZE</span><span class="token punctuation">,</span> seeds<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
     <span class="token comment">//添加网站</span>
     <span class="token keyword">public</span>   <span class="token keyword">void</span>  <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">String</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">for</span>  <span class="token punctuation">(</span><span class="token class-name">SimpleHash</span> f <span class="token operator">:</span> func<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            bits<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span><span class="token function">hash</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token boolean">true</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
     <span class="token comment">//判断可疑网站是否存在</span>
     <span class="token keyword">public</span>   <span class="token keyword">boolean</span>  <span class="token function">contains</span><span class="token punctuation">(</span><span class="token class-name">String</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">if</span>  <span class="token punctuation">(</span>value  <span class="token operator">==</span>   <span class="token keyword">null</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token keyword">return</span>   <span class="token boolean">false</span> <span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
         <span class="token keyword">boolean</span>  ret  <span class="token operator">=</span>   <span class="token boolean">true</span> <span class="token punctuation">;</span>
         <span class="token keyword">for</span>  <span class="token punctuation">(</span><span class="token class-name">SimpleHash</span> f <span class="token operator">:</span> func<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//核心就是通过“与”的操作</span>
            ret  <span class="token operator">=</span>  ret  <span class="token operator">&amp;&amp;</span>  bits<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span><span class="token function">hash</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
         <span class="token keyword">return</span>  ret<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>布隆过滤器回答了：<code v-pre>可能存在</code> 和 <code v-pre>一定不存在</code> 的问题。本质是一种空间和准确率的一个取舍。实际使用可能会有误报的情况， 如果你的业务可以接受误报，那么使用布隆过滤器进行优化是一个不错的选择。</p>
</div></template>


