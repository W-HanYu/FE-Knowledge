<template><div><h1 id="游程编码和哈夫曼编码" tabindex="-1"><a class="header-anchor" href="#游程编码和哈夫曼编码" aria-hidden="true">#</a> 游程编码和哈夫曼编码</h1>
<h2 id="huffman-encode-哈夫曼编码" tabindex="-1"><a class="header-anchor" href="#huffman-encode-哈夫曼编码" aria-hidden="true">#</a> Huffman encode(哈夫曼编码)</h2>
<p>Huffman 编码的基本思想就是用短的编码表示出现频率高的字符，用长的编码来表示出现频率低的字符，这使得编码之后的字符串的平均长度、长度的期望值降低，从而实现压缩的目的。
因此 Huffman 编码被广泛地应用于无损压缩领域。 可以看出， huffman 编码是<code v-pre>一种可变编码</code>，而不是固定长度编码。</p>
<p>Huffman 编码的过程包含两个主要部分：</p>
<ul>
<li>根据输入字符构建 Huffman 树</li>
<li>遍历 Huffman 树，并将树的节点分配给字符</li>
</ul>
<p>上面提到了他的基本原理就是<code v-pre>用短的编码表示出现频率高的字符，用长的编码来表示出现频率低的字符</code>，因此首先要做的就是统计字符的出现频率，然后根据统计的频率来构建 Huffman 树（又叫最优二叉树）。</p>
<p><img src="https://p.ipic.vip/v13yj7.jpg" alt="Huffman-tree"></p>
<p>如图，<code v-pre>huffman 树以一颗二叉树</code>。 其中节点的左子节点路径用 0 表示，右子节点用 1 表示，节点的值表示的是其权重，权重越大深度越小。深度表示的其实就是编码的长度。通常我们使用字符出现的频率作为权重。真正执行编码的时候，类似字典树，节点不用来编码，节点的路径用来编码.</p>
<blockquote>
<p>如果计算机使用三进制，而不是二进制，那么 huffman 树就应该是一个三叉树。</p>
</blockquote>
<h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h2>
<p>比如我们对一个字符串的频率统计的结果如下：</p>
<table>
<thead>
<tr>
<th style="text-align:center">character</th>
<th style="text-align:center">frequency</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">a</td>
<td style="text-align:center">5</td>
</tr>
<tr>
<td style="text-align:center">b</td>
<td style="text-align:center">9</td>
</tr>
<tr>
<td style="text-align:center">c</td>
<td style="text-align:center">12</td>
</tr>
<tr>
<td style="text-align:center">d</td>
<td style="text-align:center">13</td>
</tr>
<tr>
<td style="text-align:center">e</td>
<td style="text-align:center">16</td>
</tr>
<tr>
<td style="text-align:center">f</td>
<td style="text-align:center">45</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>将每个元素构造成一个节点，即只有一个元素的树。并构建一个最小堆，包含所有的节点，该算法用了最小堆来作为优先队列。</p>
</li>
<li>
<p><code v-pre>选取两个权值最小的节点</code>，并添加一个权值为 5+9=14 的节点，作为他们的父节点。并<code v-pre>更新最小堆</code>，现在最小堆包含 5 个节点，其中 4 个树还是原来的节点，权值为 5 和 9 的节点合并为一个。</p>
</li>
</ul>
<p>结果是这样的：</p>
<p><img src="https://p.ipic.vip/bn2vws.jpg" alt="huffman-example"></p>
<table>
<thead>
<tr>
<th style="text-align:center">character</th>
<th style="text-align:center">frequency</th>
<th style="text-align:center">encoding</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">a</td>
<td style="text-align:center">5</td>
<td style="text-align:center">1100</td>
</tr>
<tr>
<td style="text-align:center">b</td>
<td style="text-align:center">9</td>
<td style="text-align:center">1101</td>
</tr>
<tr>
<td style="text-align:center">c</td>
<td style="text-align:center">12</td>
<td style="text-align:center">100</td>
</tr>
<tr>
<td style="text-align:center">d</td>
<td style="text-align:center">13</td>
<td style="text-align:center">101</td>
</tr>
<tr>
<td style="text-align:center">e</td>
<td style="text-align:center">16</td>
<td style="text-align:center">111</td>
</tr>
<tr>
<td style="text-align:center">f</td>
<td style="text-align:center">45</td>
<td style="text-align:center">0</td>
</tr>
</tbody>
</table>
<h2 id="run-length-encode-游程编码" tabindex="-1"><a class="header-anchor" href="#run-length-encode-游程编码" aria-hidden="true">#</a> run-length encode(游程编码)</h2>
<p>游程编码是一种比较简单的压缩算法，其基本思想是将重复且连续出现多次的字符使用（连续出现次数，某个字符）来描述。</p>
<p>比如一个字符串：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>AAAAABBBBCCC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用游程编码可以将其描述为：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>5A4B3C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5A 表示这个地方有 5 个连续的 A，同理 4B 表示有 4 个连续的 B，3C 表示有 3 个连续的 C，其它情况以此类推。</p>
<p>但是实际上情况可能会非常复杂，我们可以对单个字符进行编码，也可以对多个字符进行编码。 因此如何提取子序列就是一个问题。这并没有看的那么简单。还是以上面的例子来说，我们有也可以把<code v-pre>AAAAABBBBCCC</code>整体看成一个子序列，这样编码的长度就有所编码。究竟使用哪种方法，取决于压缩的时间和压缩的比例等。 更复杂的情况还有很多，这里不做扩展。</p>
<p>对文件进行压缩比较适合的情况是文件内的二进制有大量的连续重复，一个经典的例子就是具有大面积色块的 BMP 图像，BMP 因为没有压缩，所以看到的是什么样子存储的时候二进制就是什么样子</p>
<blockquote>
<p>这也是我们图片倾向于纯色的时候，压缩会有很好的效果</p>
</blockquote>
<p>思考一个问题， 如果我们在 CDN 上存储两个图片，这两个图片几乎完全一样，我们是否可以进行优化呢？这虽然是 CDN 厂商更应该关心的问题，但是这个问题对我们影响依然很大，值得思考。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>游程编码和 Huffman 都是无损压缩算法，即解压缩过程不会损失原数据任何内容。 实际情况，我们先用游程编码一遍，然后再用 Huffman 再次编码一次。几乎所有的无损压缩格式都用到了它们，比如 PNG，GIF，PDF，ZIP 等。</p>
<p>对于有损压缩，通常是去除了人类无法识别的颜色，听力频率范围等。也就是说损失了原来的数据。 但由于人类无法识别这部分信息，因此很多情况下都是值得的。这种删除了人类无法感知内容的编码，我们称之为“感知编码”（也许是一个自创的新名词），比如 JPEG，MP3 等。关于有损压缩不是本文的讨论范围，感兴趣的可以搜素相关资料。</p>
<p>实际上，视频压缩的原理也是类似，只不过视频压缩会用到一些额外的算法，比如“时间冗余”，即仅存储变化的部分，对于不变的部分，存储一次就够了。</p>
<h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>
<p><RouterLink to="/notes/problems/900.rle-iterator.html">900.rle-iterator</RouterLink></p>
</div></template>


