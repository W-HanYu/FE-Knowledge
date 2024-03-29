<template><div><p>这篇文章不是讲解数据结构的文章，而是结合现实的场景帮助大家理解和复习数据结构与算法，如果你的数据结构基础很差，建议先去看一些基础教程，再转过来看。
本篇文章的定位是侧重于前端的，通过学习前端中实际场景的数据结构，从而加深大家对数据结构的理解和认识。</p>
<h2 id="线性结构" tabindex="-1"><a class="header-anchor" href="#线性结构" aria-hidden="true">#</a> 线性结构</h2>
<p>数据结构我们可以从逻辑上分为线性结构和非线性结构。线性结构有<code v-pre>数组</code>，<code v-pre>栈</code>，<code v-pre>链表</code>等， 非线性结构有<code v-pre>树</code>，<code v-pre>图</code>等。
需要注意的是，线性和非线性不代表存储结构是线性的还是非线性的，这两者没有任何关系，它只是一种逻辑上的划分。比如我们可以用数组去存储二叉树。一般而言，有前驱和后继的就是线性数据结构。比如数组和链表。</p>
<h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> <code v-pre>数组</code></h3>
<p>其实后面的数据结构很多都有数组的影子。数组是最简单的数据结构了，很多地方都用到它。 比如用一个数据列表存储一些用户的 id，就可以用数组进行存储。
我们之后要讲的栈和队列其实都可以看成是一种受限的数组，怎么个受限法呢？我们后面讨论。
接下来通过几个有趣的例子来加深大家对数组这种数据结构的理解。</p>
<h4 id="react-hooks-非前端党慎入" tabindex="-1"><a class="header-anchor" href="#react-hooks-非前端党慎入" aria-hidden="true">#</a> React Hooks（非前端党慎入）</h4>
<p>Hooks 的本质就是一个数组， 伪代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> hooks <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  hooks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>hookData<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">reactsInternalRenderAComPonentMethod</span><span class="token punctuation">(</span><span class="token parameter">component</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  hooks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token function">components</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> hooksForThisComponent <span class="token operator">=</span> hooks<span class="token punctuation">;</span>
  hooks <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么为什么 <code v-pre>hooks</code> 要用数组？ 我们可以换个角度来解释，如果不用数组会怎么样？</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Form</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. Use the name state variable</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">'Mary'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 2. Use an effect for persisting the form</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">persistForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'formData'</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 3. Use the surname state variable</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>surname<span class="token punctuation">,</span> setSurname<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">'Poppins'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 4. Use an effect for updating the title</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">updateTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span>title <span class="token operator">=</span> name <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> surname<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基于数组的方式，<code v-pre>Form</code> 的 <code v-pre>hooks</code> 就是 <code v-pre>[hook1, hook2, hook3, hook4]</code>。</p>
<p>进而我们可以得出这样的关系， <code v-pre>hook1</code> 就是<code v-pre> [name, setName]</code> 这一对，<code v-pre>hook2</code> 就是 <code v-pre>persistForm</code> 这个。</p>
<p>如果不用数组实现，比如对象，<code v-pre>Form</code> 的 <code v-pre>hooks</code> 就是</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">'key1'</span><span class="token operator">:</span> hook1<span class="token punctuation">,</span>
  <span class="token string-property property">'key2'</span><span class="token operator">:</span> hook2<span class="token punctuation">,</span>
  <span class="token string-property property">'key3'</span><span class="token operator">:</span> hook3<span class="token punctuation">,</span>
  <span class="token string-property property">'key4'</span><span class="token operator">:</span> hook4<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么问题是 <code v-pre>key1</code>，<code v-pre>key2</code>，<code v-pre>key3</code>，<code v-pre>key4</code> 怎么取呢？这就是个问题了。更多关于 <code v-pre>React hooks</code> 的本质研究，请查看 <a href="https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e" target="_blank" rel="noopener noreferrer">React hooks: not magic, just arrays<ExternalLinkIcon/></a></p>
<p>不过使用数组也有一个问题， 那就是 <code v-pre>React</code> 将<code v-pre>如何确保组件内部 hooks 保存的状态之间的对应关系</code>这个工作交给了开发人员去保证，即你必须保证 HOOKS 的顺序严格一致，具体可以看 <code v-pre>React</code> 官网关于 <code v-pre>Hooks Rule</code> 部分。</p>
<h3 id="队列" tabindex="-1"><a class="header-anchor" href="#队列" aria-hidden="true">#</a> 队列</h3>
<p>队列是一种<code v-pre>受限</code>的序列。受限在哪呢？受限就受限在它只能够操作队尾和队首，并且只能只能在队尾添加元素，在队首删除元素。而数组就没有这个限制。</p>
<p>队列作为一种最常见的数据结构同样有着非常广泛的应用， 比如消息队列</p>
<blockquote>
<p>&quot;队列&quot;这个名称，可类比为现实生活中排队（不插队的那种）</p>
</blockquote>
<p>在计算机科学中，一个 队列 (queue) 是一种特殊类型的抽象数据类型或集合，集合中的实体按顺序保存。</p>
<p>队列基本操作有两种：</p>
<ul>
<li>向队列的后端位置添加实体，称为入队</li>
<li>从队列的前端位置移除实体，称为出队。</li>
</ul>
<p>队列中元素先进先出 <code v-pre>FIFO (first in, first out)</code> 的示意：</p>
<p><img src="https://p.ipic.vip/vd0xqq.jpg" alt=""></p>
<p>（图片来自 https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/queue/README.zh-CN.md)</p>
<h4 id="队列的实际使用" tabindex="-1"><a class="header-anchor" href="#队列的实际使用" aria-hidden="true">#</a> 队列的实际使用</h4>
<p>我们在做性能优化的时候，很多时候会提到的一点就是<code v-pre>“HTTP 1.1 的队头阻塞问题”</code>，具体来说就是 <code v-pre>HTTP2</code> 解决了 <code v-pre>HTTP1.1</code> 中的队头阻塞问题，但是为什么<code v-pre> HTTP1.1</code> 有队头阻塞问题，<code v-pre>HTTP2</code> 究竟怎么解决的这个问题，很多人都不清楚。</p>
<p>其实<code v-pre>队头阻塞</code>是一个专有名词，不仅仅在 <code v-pre>HTTP</code> 有，交换器等其他地方也都涉及到了这个问题。实际上引起这个问题的根本原因是使用了<code v-pre>队列</code>这种数据结构。</p>
<p>协议规定， 对于同一个 <code v-pre>tcp</code> 连接，所有的 <code v-pre>http1.0</code> 请求放入队列中，只有前一个<code v-pre>请求的响应</code>收到了，才能发送下一个请求，这个时候就发生了阻塞，并且这个阻塞主要发生在客户端。</p>
<p>这就好像我们在等红绿灯，即使旁边绿灯亮了，你的这个车道是红灯，你还是不能走，还是要等着。</p>
<p><img src="https://p.ipic.vip/nflzy7.jpg" alt="basic-data-structure-queue-1"></p>
<ul>
<li><code v-pre>HTTP/1.0</code> 和 <code v-pre>HTTP/1.1</code>:</li>
</ul>
<blockquote>
<p>在<code v-pre>HTTP/1.0</code> 中每一次请求都需要建立一个 TCP 连接，请求结束后立即断开连接。</p>
</blockquote>
<blockquote>
<p>在<code v-pre>HTTP/1.1</code> 中，每一个连接都默认是长连接 (persistent connection)。对于同一个 tcp 连接，允许一次发送多个 http1.1 请求，也就是说，不必等前一个响应收到，就可以发送下一个请求。这样就解决了 http1.0 的客户端的队头阻塞，而这也就是<code v-pre>HTTP/1.1</code>中<code v-pre>管道 (Pipeline)</code>的概念了。</p>
</blockquote>
<p>但是，<code v-pre>http1.1 规定，服务器端的响应的发送要根据请求被接收的顺序排队</code>，也就是说，先接收到的请求的响应也要先发送。这样造成的问题是，如果最先收到的请求的处理时间长的话，响应生成也慢，就会阻塞已经生成了的响应的发送，这也会造成队头阻塞。可见，http1.1 的队首阻塞是发生在服务器端。</p>
<p>如果用图来表示的话，过程大概是：</p>
<p><img src="https://p.ipic.vip/6epvep.jpg" alt="basic-data-structure-queue-2"></p>
<p><code v-pre>HTTP/2</code> 和 <code v-pre>HTTP/1.1</code>:</p>
<p>为了解决<code v-pre>HTTP/1.1</code>中的服务端队首阻塞，<code v-pre>HTTP/2</code>采用了<code v-pre>二进制分帧</code> 和 <code v-pre>多路复用</code> 等方法。</p>
<p>帧是<code v-pre>HTTP/2</code>数据通信的最小单位。在 <code v-pre>HTTP/1.1</code> 中数据包是文本格式，而 <code v-pre>HTTP/2</code> 的数据包是二进制格式的，也就是二进制帧。</p>
<p>采用帧的传输方式可以将请求和响应的数据分割得更小，且二进制协议可以被高效解析。<code v-pre>HTTP/2</code>中，同域名下所有通信都在单个连接上完成，该连接可以承载任意数量的双向数据流。每个数据流都以消息的形式发送，而消息又由一个或多个帧组成。多个帧之间可以乱序发送，根据帧首部的流标识可以重新组装。</p>
<p><code v-pre>多路复用</code>用以替代原来的序列和拥塞机制。在<code v-pre>HTTP/1.1</code>中，并发多个请求需要多个 TCP 链接，且单个域名有 6-8 个 TCP 链接请求限制（这个限制是浏览器限制的，不同的浏览器也不一定一样）。在<code v-pre>HTTP/2</code>中，同一域名下的所有通信在单个链接完成，仅占用一个 TCP 链接，且在这一个链接上可以并行请求和响应，互不干扰。</p>
<blockquote>
<p><a href="https://http2.akamai.com/demo" target="_blank" rel="noopener noreferrer">此网站<ExternalLinkIcon/></a> 可以直观感受 <code v-pre>HTTP/1.1</code> 和 <code v-pre>HTTP/2</code> 的性能对比。</p>
</blockquote>
<h3 id="栈" tabindex="-1"><a class="header-anchor" href="#栈" aria-hidden="true">#</a> 栈</h3>
<p>栈也是一种<strong>受限</strong>的序列，它受限就受限在只能够操作栈顶，不管入栈还是出栈，都是在栈顶操作。同样地，数组就没有这个限制。</p>
<p>在计算机科学中，一个栈 <code v-pre>(stack)</code> 是一种抽象数据类型，用作表示元素的集合，具有两种主要操作：</p>
<ul>
<li><code v-pre>push</code>, 添加元素到栈的顶端（末尾）</li>
<li><code v-pre>pop</code>, 移除栈最顶端（末尾）的元素</li>
</ul>
<p>以上两种操作可以简单概括为<strong>后进先出 <code v-pre>(LIFO = last in, first out)</code></strong>。</p>
<p>此外，应有一个 <code v-pre>peek</code> 操作用于访问栈当前顶端（末尾）的元素。（只返回不弹出）</p>
<blockquote>
<p>&quot;栈&quot;这个名称，可类比于一组物体的堆叠（一摞书，一摞盘子之类的）。</p>
</blockquote>
<p>栈的 <code v-pre>push</code> 和 <code v-pre>pop</code> 操作的示意：</p>
<p><img src="https://p.ipic.vip/kzge8i.jpg" alt="basic-data-structure-stack"></p>
<p>（图片来自 https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/stack/README.zh-CN.md)</p>
<h4 id="栈的应用-非前端慎入" tabindex="-1"><a class="header-anchor" href="#栈的应用-非前端慎入" aria-hidden="true">#</a> 栈的应用（<code v-pre>非前端慎入</code>）</h4>
<p>栈在很多地方都有着应用，比如大家熟悉的浏览器就有很多栈，其实浏览器的执行栈就是一个基本的栈结构，从数据结构上说，它就是一个栈。
这也就解释了，我们用递归的解法和用循环+栈的解法本质上是差不多的。</p>
<p>比如如下 JS 代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>真正执行的时候，内部大概是这样的：</p>
<p><img src="https://p.ipic.vip/j4s1dt.jpg" alt="basic-data-structure-call-stack"></p>
<blockquote>
<p>我画的图没有画出执行上下文中其他部分（<code v-pre>this</code> 和 <code v-pre>scope</code> 等）， 这部分是闭包的关键，而我这里不是讲闭包的，是为了讲解栈的。</p>
</blockquote>
<blockquote>
<p>社区中有很多“执行上下文中的 <code v-pre>scope</code> 指的是执行栈中父级声明的变量”说法，这是完全错误的， <code v-pre>JS </code>是词法作用域，<code v-pre>scope</code> 指的是函数定义时候的父级，和执行没关系</p>
</blockquote>
<p>栈常见的应用有进制转换，括号匹配，栈混洗，中缀表达式（用的很少），后缀表达式（逆波兰表达式）等。</p>
<p>合法的栈混洗操作也是一个经典的题目，这其实和合法的括号匹配表达式之间存在着一一对应的关系，也就是说 <code v-pre>n</code> 个元素的栈混洗有多少种，<code v-pre>n</code> 对括号的合法表达式就有多少种。感兴趣的可以查找相关资料。</p>
<h3 id="链表" tabindex="-1"><a class="header-anchor" href="#链表" aria-hidden="true">#</a> 链表</h3>
<p>链表是一种最基本数据结构，熟练掌握链表的结构和常见操作是基础中的基础。</p>
<p><img src="https://p.ipic.vip/w0t5od.jpg" alt=""></p>
<p>（图片来自： https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/linked-list/traversal)</p>
<h4 id="react-fiber-非前端慎入" tabindex="-1"><a class="header-anchor" href="#react-fiber-非前端慎入" aria-hidden="true">#</a> React Fiber（非前端慎入）</h4>
<p>很多人都说 fiber 是基于链表实现的，但是为什么要基于链表呢，可能很多人并没有答案，那么我觉得可以把这两个点（fiber 和链表）放到一起来讲下。</p>
<p>fiber 出现的目的其实是为了解决 react 在执行的时候是无法停下来的，需要一口气执行完的问题的。</p>
<p><img src="https://p.ipic.vip/aop2rm.jpg" alt="fiber-intro"></p>
<blockquote>
<p>图片来自 <code v-pre>Lin Clark 在 ReactConf 2017 分享</code></p>
</blockquote>
<p>上面已经指出了引入 <code v-pre>fiber</code> 之前的问题，就是 <code v-pre>react</code> 会阻止优先级高的代码（比如用户输入）执行。因此他们打算自己自建一个<code v-pre>虚拟执行栈</code>来解决这个问题，这个虚拟执行栈的底层实现就是链表。</p>
<p>Fiber 的基本原理是将协调过程分成小块，一次执行一块，然后将运算结果保存起来，并判断是否有时间继续执行下一块（<code v-pre>react </code>自己实现了一个类似 <code v-pre>requestIdleCallback</code> 的功能）。如果有时间，则继续。 否则跳出，让浏览器主线程歇一会，执行别的优先级高的代码。</p>
<p>当协调过程完成（所有的小块都运算完毕）， 那么就会进入提交阶段， 执行真正的进行副作用（<code v-pre>side effect</code>）操作，比如更新 <code v-pre>DOM</code>，这个过程是没有办法取消的，原因就是这部分有副作用。</p>
<p>问题的关键就是将协调的过程划分为一块块的，最后还可以合并到一起，有点像 <code v-pre>Map／Reduce</code>。</p>
<p><code v-pre>React</code> 必须重新实现遍历树的算法，从依赖于<code v-pre>内置堆栈的同步递归模型</code>，变为<code v-pre>具有链表和指针的异步模型</code>。</p>
<blockquote>
<p><code v-pre>Andrew</code> 是这么说的： 如果你只依赖于 [内置] 调用堆栈，它将继续工作直到堆栈为空。</p>
</blockquote>
<p>如果我们可以随意中断调用堆栈并手动操作堆栈帧，那不是很好吗？
这就是 <code v-pre>React Fiber</code> 的目的。 <code v-pre>Fiber</code>是堆栈的重新实现，专门用于<code v-pre>React</code> 组件。 你可以将单个 Fiber 视为一个<code v-pre>虚拟堆栈帧</code>。</p>
<p>react fiber 大概是这样的：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> fiber <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token constant">HOST_COMPONENT</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'div'</span><span class="token punctuation">,</span>
  <span class="token keyword">return</span><span class="token operator">:</span> parentFiber<span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> childFiber<span class="token punctuation">,</span>
  <span class="token literal-property property">sibling</span><span class="token operator">:</span> childFiber<span class="token punctuation">,</span>
  <span class="token literal-property property">alternate</span><span class="token operator">:</span> currentFiber<span class="token punctuation">,</span>
  <span class="token literal-property property">stateNode</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token string">'foo'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">partialState</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">effectTag</span><span class="token operator">:</span> <span class="token constant">PLACEMENT</span><span class="token punctuation">,</span>
  <span class="token literal-property property">effects</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从这里可以看出 fiber 本质上是个对象，使用 <code v-pre>parent</code>，<code v-pre>child</code>，<code v-pre>sibling</code> 属性去构建 <code v-pre>fiber</code> 树来表示组件的结构树，
<code v-pre>return</code>,<code v-pre> children</code>, <code v-pre>sibling</code> 也都是一个 <code v-pre>fiber</code>，因此<code v-pre>fiber</code>看起来就是一个链表。</p>
<blockquote>
<p>细心的朋友可能已经发现了， <code v-pre>alternate</code> 也是一个 <code v-pre>fiber</code>， 那么它是用来做什么的呢？
它其实原理有点像 <code v-pre>git</code>， 可以用来执行 <code v-pre>git revert</code> ,<code v-pre>git commit</code> 等操作，这部分挺有意思，我会在我的<code v-pre>《从零开发 git》</code>中讲解</p>
</blockquote>
<p>想要了解更多的朋友可以看 <a href="https://github.com/dawn-plex/translate/blob/master/articles/the-how-and-why-on-reacts-usage-of-linked-list-in-fiber-to-walk-the-components-tree.md" target="_blank" rel="noopener noreferrer">这个文章<ExternalLinkIcon/></a></p>
<p>如果可以翻墙， 可以看 <a href="https://medium.com/react-in-depth/the-how-and-why-on-reacts-usage-of-linked-list-in-fiber-67f1014d0eb7" target="_blank" rel="noopener noreferrer">英文原文<ExternalLinkIcon/></a></p>
<p><a href="https://engineering.hexacta.com/didact-fiber-incremental-reconciliation-b2fe028dcaec" target="_blank" rel="noopener noreferrer">这篇文章<ExternalLinkIcon/></a> 也是早期讲述 fiber 架构的优秀文章</p>
<p>我目前也在写关于<code v-pre>《从零开发 react 系列教程》</code>中关于 fiber 架构的部分，如果你对具体实现感兴趣，欢迎关注。</p>
<h2 id="非线性结构" tabindex="-1"><a class="header-anchor" href="#非线性结构" aria-hidden="true">#</a> 非线性结构</h2>
<p>那么有了线性结构，我们为什么还需要非线性结构呢？ 答案是为了高效地兼顾静态操作和动态操作，<strong>我们一般使用树去管理需要大量动态操作的数据</strong>。大家可以对照各种数据结构的各种操作的复杂度来直观感受一下。</p>
<h3 id="树" tabindex="-1"><a class="header-anchor" href="#树" aria-hidden="true">#</a> 树</h3>
<p>树的应用同样非常广泛，小到文件系统，大到因特网，组织架构等都可以表示为树结构，而在我们前端眼中比较熟悉的 DOM 树也是一种树结构，而 HTML 作为一种 DSL 去描述这种树结构的具体表现形式。如果你接触过 AST，那么 AST 也是一种树，XML 也是树结构。树的应用远比大多数人想象的要多得多。</p>
<p>树其实是一种特殊的<code v-pre>图</code>，是一种无环连通图，是一种极大无环图，也是一种极小连通图。</p>
<p>从另一个角度看，树是一种递归的数据结构。而且树的不同表示方法，比如不常用的<code v-pre>长子 + 兄弟</code>法，对于
你理解树这种数据结构有着很大用处， 说是一种对树的本质的更深刻的理解也不为过。</p>
<p>树的基本算法有前中后序遍历和层次遍历，有的同学对前中后这三个分别具体表现的访问顺序比较模糊，其实当初我也是一样的，后面我学到了一点，你只需要记住：<code v-pre>所谓的前中后指的是根节点的位置，其他位置按照先左后右排列即可</code>。比如前序遍历就是<code v-pre>根左右</code>, 中序就是<code v-pre>左根右</code>，后序就是<code v-pre>左右根</code>， 很简单吧？</p>
<p>我刚才提到了树是一种递归的数据结构，因此树的遍历算法使用递归去完成非常简单，幸运的是树的算法基本上都要依赖于树的遍历。</p>
<p>但是递归在计算机中的性能一直都有问题，因此掌握不那么容易理解的&quot;命令式地迭代&quot;遍历算法在某些情况下是有用的。如果你使用迭代式方式去遍历的话，可以借助上面提到的<code v-pre>栈</code>来进行，可以极大减少代码量。</p>
<blockquote>
<p>如果使用栈来简化运算，由于栈是 FILO 的，因此一定要注意左右子树的推入顺序。</p>
</blockquote>
<p>树的重要性质：</p>
<ul>
<li>如果树有<code v-pre>n</code>个顶点，那么其就有<code v-pre>n - 1</code>条边，这说明了树的顶点数和边数是同阶的。</li>
<li>任何一个节点到根节点存在<code v-pre>唯一</code>路径，路径的长度为节点所处的深度</li>
</ul>
<p>实际使用的树有可能会更复杂，比如使用在游戏中的碰撞检测可能会用到四叉树或者八叉树。以及 k 维的树结构 <code v-pre>k-d 树</code>等。</p>
<p><img src="https://p.ipic.vip/obdpvz.jpg" alt="">
（图片来自 https://zh.wikipedia.org/wiki/K-d%E6%A0%91）</p>
<h3 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树" aria-hidden="true">#</a> 二叉树</h3>
<p>二叉树是节点度数不超过二的树，是树的一种特殊子集，有趣的是二叉树这种被限制的树结构却能够表示和实现所有的树，
它背后的原理正是<code v-pre>长子 + 兄弟</code>法，用邓老师的话说就是<code v-pre>二叉树是多叉树的特例，但在有根且有序时，其描述能力却足以覆盖后者</code>。</p>
<blockquote>
<p>实际上， 在你使用<code v-pre>长子 + 兄弟</code>法表示树的同时，进行 45 度角旋转即可。</p>
</blockquote>
<p>一个典型的二叉树：</p>
<p><img src="https://p.ipic.vip/uclaew.jpg" alt=""></p>
<p>（图片来自 https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/tree/README.zh-CN.md)</p>
<p>对于一般的树，我们通常会去遍历，这里又会有很多变种。</p>
<p>下面我列举一些二叉树遍历的相关算法：</p>
<ul>
<li><RouterLink to="/notes/problems/94.binary-tree-inorder-traversal.html">94.binary-tree-inorder-traversal</RouterLink></li>
<li><RouterLink to="/notes/problems/102.binary-tree-level-order-traversal.html">102.binary-tree-level-order-traversal</RouterLink></li>
<li><RouterLink to="/notes/problems/103.binary-tree-zigzag-level-order-traversal.html">103.binary-tree-zigzag-level-order-traversal</RouterLink></li>
<li><RouterLink to="/notes/problems/144.binary-tree-preorder-traversal.html">144.binary-tree-preorder-traversal</RouterLink></li>
<li><RouterLink to="/notes/problems/145.binary-tree-postorder-traversal.html">145.binary-tree-postorder-traversal</RouterLink></li>
<li><RouterLink to="/notes/problems/199.binary-tree-right-side-view.html">199.binary-tree-right-side-view</RouterLink></li>
</ul>
<p>相关概念：</p>
<ul>
<li>真二叉树 （所有节点的度数只能是偶数，即只能为<code v-pre>0</code>或者<code v-pre> 2</code>）</li>
</ul>
<p>另外我也专门开设了 <RouterLink to="/notes/datastr/binary-tree-traversal.html">二叉树的遍历</RouterLink> 章节，具体细节和算法可以去那里查看。</p>
<h4 id="堆" tabindex="-1"><a class="header-anchor" href="#堆" aria-hidden="true">#</a> 堆</h4>
<p>堆其实是一种优先级队列，在很多语言都有对应的内置数据结构，很遗憾 javascript 没有这种原生的数据结构。不过这对我们理解和运用不会有影响。</p>
<p>堆的一种典型的实现就是二叉堆。</p>
<p>二叉堆的特点：</p>
<ul>
<li>在一个 最小堆<code v-pre> (min heap)</code> 中，如果<code v-pre>P</code>是<code v-pre>C</code>的一个父级节点，那么 <code v-pre>P </code>的 <code v-pre>key</code>（或 <code v-pre>value</code>) 应小于或等于 <code v-pre>C</code> 的对应值。
正因为此，堆顶元素一定是最小的，我们会利用这个特点求最小值或者第 k 小的值。</li>
</ul>
<p><img src="https://p.ipic.vip/vm13lg.jpg" alt="min-heap"></p>
<ul>
<li>在一个 最大堆 <code v-pre>(max heap)</code> 中，<code v-pre>P</code> 的 <code v-pre>key</code>（或 <code v-pre>value</code>) 大于或等于<code v-pre> C</code> 的对应值。</li>
</ul>
<p><img src="https://p.ipic.vip/d771jf.jpg" alt="max-heap"></p>
<p>需要注意的是优先队列不仅有堆一种，还有更复杂的，但是通常来说，我们会把两者做等价。</p>
<p>相关算法：</p>
<ul>
<li><RouterLink to="/notes/problems/295.find-median-from-data-stream.html">295.find-median-from-data-stream</RouterLink></li>
</ul>
<h4 id="二叉查找树" tabindex="-1"><a class="header-anchor" href="#二叉查找树" aria-hidden="true">#</a> 二叉查找树</h4>
<p>二叉排序树（<code v-pre>Binary Sort Tree</code>），又称二叉查找树（<code v-pre>Binary Search Tree</code>），亦称二叉搜索树。</p>
<p>二叉查找树具有下列性质的二叉树：</p>
<ul>
<li>若左子树不空，则左子树上所有节点的值均小于它的根节点的值；</li>
<li>若右子树不空，则右子树上所有节点的值均大于它的根节点的值；</li>
<li>左、右子树也分别为二叉排序树；</li>
<li>没有键值相等的节点。</li>
</ul>
<p>对于一个二叉查找树，常规操作有<code v-pre>插入</code>，<code v-pre>查找</code>，<code v-pre>删除</code>，找<code v-pre>父节点</code>，<code v-pre>求最大值</code>，<code v-pre>求最小值</code>。</p>
<p>二叉查找树，<code v-pre>之所以叫查找树就是因为其非常适合查找</code>。举个例子，如下一颗二叉查找树，我们想找节点值小于且最接近<code v-pre> 58</code> 的节点，搜索的流程如图所示：</p>
<p><img src="https://p.ipic.vip/7upfbi.jpg" alt="bst"></p>
<p>（图片来自 https://www.geeksforgeeks.org/floor-in-binary-search-tree-bst/）</p>
<p>另外我们二叉查找树有一个性质是： <code v-pre>其中序遍历的结果是一个有序数组</code>。
有时候我们可以利用到这个性质。</p>
<p>相关题目：</p>
<ul>
<li><RouterLink to="/notes/problems/98.validate-binary-search-tree.html">98.validate-binary-search-tree</RouterLink></li>
</ul>
<h3 id="二叉平衡树" tabindex="-1"><a class="header-anchor" href="#二叉平衡树" aria-hidden="true">#</a> 二叉平衡树</h3>
<p>平衡树是计算机科学中的一类数据结构，是一种改进的二叉查找树。一般的二叉查找树的查询复杂度取决于目标结点到树根的距离（即深度），因此当结点的深度普遍较大时，查询的均摊复杂度会上升。为了实现更高效的查询，产生了平衡树。</p>
<p>在这里，平衡指所有叶子的深度趋于平衡，更广义的是指在树上所有可能查找的均摊复杂度偏低。</p>
<p>一些数据库引擎内部就是用的这种数据结构，其目标也是将查询的操作降低到 logn（树的深度），可以简单理解为<code v-pre>树在数据结构层面构造了二分查找算法</code>。</p>
<p>基本操作：</p>
<ul>
<li>
<p>旋转</p>
</li>
<li>
<p>插入</p>
</li>
<li>
<p>删除</p>
</li>
<li>
<p>查询前驱</p>
</li>
<li>
<p>查询后继</p>
</li>
</ul>
<h4 id="avl" tabindex="-1"><a class="header-anchor" href="#avl" aria-hidden="true">#</a> AVL</h4>
<p>是最早被发明的自平衡二叉查找树。在 AVL 树中，任一节点对应的两棵子树的最大高度差为 1，因此它也被称为高度平衡树。查找、插入和删除在平均和最坏情况下的时间复杂度都是 <code v-pre>O(logn)</code>。增加和删除元素的操作则可能需要借由一次或多次树旋转，以实现树的重新平衡。AVL 树得名于它的发明者 <code v-pre>G. M. Adelson-Velsky</code> 和 <code v-pre>Evgenii Landis</code>，他们在 1962 年的论文 <code v-pre>An algorithm for the organization of information</code> 中公开了这一数据结构。 节点的平衡因子是它的左子树的高度减去它的右子树的高度（有时相反）。带有平衡因子<code v-pre> 1</code>、<code v-pre>0</code> 或<code v-pre>-1</code>的节点被认为是平衡的。带有平衡因子 <code v-pre>-2</code> 或<code v-pre> 2</code> 的节点被认为是不平衡的，并需要重新平衡这个树。平衡因子可以直接存储在每个节点中，或从可能存储在节点中的子树高度计算出来。</p>
<h4 id="红黑树" tabindex="-1"><a class="header-anchor" href="#红黑树" aria-hidden="true">#</a> 红黑树</h4>
<p>在 1972 年由鲁道夫·贝尔发明，被称为&quot;对称二叉 B 树&quot;，它现代的名字源于 <code v-pre>Leo J. Guibas</code> 和 <code v-pre>Robert Sedgewick </code>于 <code v-pre>1978 </code>年写的一篇论文。红黑树的结构复杂，但它的操作有着良好的最坏情况运行时间，并且在实践中高效：它可以在 <code v-pre>O(logn)</code> 时间内完成查找，插入和删除，这里的 <code v-pre>n</code> 是树中元素的数目</p>
<h3 id="字典树-前缀树" tabindex="-1"><a class="header-anchor" href="#字典树-前缀树" aria-hidden="true">#</a> 字典树（前缀树）</h3>
<p>又称 <code v-pre>Trie</code> 树，是一种树形结构。典型应用是用于统计，排序和保存大量的字符串（但不仅限于字符串），所以经常被搜索引擎系统用于文本词频统计。它的优点是：利用字符串的公共前缀来减少查询时间，最大限度地减少无谓的字符串比较，查询效率比哈希树高。</p>
<p><img src="https://p.ipic.vip/xwqu33.jpg" alt=""></p>
<p>（图来自 https://baike.baidu.com/item/%E5%AD%97%E5%85%B8%E6%A0%91/9825209?fr=aladdin)
它有 3 个基本性质：</p>
<ul>
<li>根节点不包含字符，除根节点外每一个节点都只包含一个字符；</li>
<li>从根节点到某一节点，路径上经过的字符连接起来，为该节点对应的字符串；</li>
<li>每个节点的所有子节点包含的字符都不相同。</li>
</ul>
<h4 id="immutable-与-字典树-非前端慎入" tabindex="-1"><a class="header-anchor" href="#immutable-与-字典树-非前端慎入" aria-hidden="true">#</a> immutable 与 字典树（非前端慎入）</h4>
<p><code v-pre>immutableJS</code>的底层就是<code v-pre>share + tree</code>. 这样看的话，其实和字典树是一致的。</p>
<p>关于这点，我写过一篇文章 <a href="https://mp.weixin.qq.com/s?__biz=MzA3MjU5NjU2NA==&amp;mid=2455504106&amp;idx=1&amp;sn=8911bafed52aad42170b96f97b055b5c&amp;chksm=88b349d1bfc4c0c7ab575711bbf5b3ca98423b60aed42ee9d9bfe43981336284e1440dd59f2e&amp;token=967898660&amp;lang=zh_CN#rd" target="_blank" rel="noopener noreferrer">immutablejs 是如何优化我们的代码的？<ExternalLinkIcon/></a>，强烈建议前端开发阅读。</p>
<p>相关算法：</p>
<ul>
<li><RouterLink to="/notes/problems/208.implement-trie-prefix-tree.html">208.implement-trie-prefix-tree</RouterLink></li>
<li><RouterLink to="/notes/problems/211.add-and-search-word-data-structure-design.html">211.add-and-search-word-data-structure-design</RouterLink></li>
<li><RouterLink to="/notes/problems/212.word-search-ii.html">212.word-search-ii</RouterLink></li>
</ul>
<h2 id="图" tabindex="-1"><a class="header-anchor" href="#图" aria-hidden="true">#</a> 图</h2>
<ul>
<li><RouterLink to="/notes/datastr/graph.html">图专题</RouterLink></li>
</ul>
</div></template>


