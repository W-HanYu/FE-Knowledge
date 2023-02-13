<template><div><h1 id="二叉树的遍历算法" tabindex="-1"><a class="header-anchor" href="#二叉树的遍历算法" aria-hidden="true">#</a> 二叉树的遍历算法</h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>二叉树作为一个基础的数据结构，遍历算法作为一个基础的算法，两者结合当然是经典的组合了。很多题目都会有<code v-pre>ta</code>的身影，有直接问二叉树的遍历的，有间接问的。比如要你找到树中满足条件的节点，就是间接考察树的遍历，因为你要找到树中满足条件的点，就需要进行遍历。</p>
<blockquote>
<p>你如果掌握了二叉树的遍历，那么也许其他复杂的树对于你来说也并不遥远了</p>
</blockquote>
<p>二叉数的遍历主要有前中后遍历和层次遍历。 前中后属于 <code v-pre>DFS</code>，层次遍历则可以使用 <code v-pre>BFS</code> 或者 <code v-pre>DFS</code> 来实现。只不过使用 BFS 来实现层次遍历会容易些，因为层次遍历就是 <code v-pre>BFS</code> 的副产物啊，你可以将层次遍历看成没有提前终止的 BFS</p>
<p>DFS 和 BFS 都有着自己的应用，比如<code v-pre> leetcode 301 号问题和 609 号</code>问题。</p>
<p>DFS 都可以使用栈来简化操作，并且其实树本身是一种递归的数据结构，因此递归和栈对于 <code v-pre>DFS</code> 来说是两个关键点。</p>
<p>DFS 图解：</p>
<p><img src="https://p.ipic.vip/phae05.gif" alt="binary-tree-traversal-dfs"></p>
<p>(图片来自 https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/tree/depth-first-search)</p>
<p>BFS 的关键点在于如何记录每一层次是否遍历完成， 我们可以用一个标识位来表式当前层的结束。</p>
<p>对于前中后序遍历来说。首先不管是前中还是后序遍历，变的只是根节点的位置， 左右节点的顺序永远是先左后右。 比如前序遍历就是根在前面，即根左右。中序就是根在中间，即左根右。后序就是根在后面，即左右根。</p>
<p>下面我们依次讲解：</p>
<h2 id="前序遍历" tabindex="-1"><a class="header-anchor" href="#前序遍历" aria-hidden="true">#</a> 前序遍历</h2>
<p>相关问题<RouterLink to="/notes/problems/144.binary-tree-preorder-traversal.html">144.binary-tree-preorder-traversal</RouterLink></p>
<p>前序遍历的顺序是<code v-pre>根-左-右</code></p>
<p>思路是：</p>
<ol>
<li>
<p>先将根结点入栈</p>
</li>
<li>
<p>出栈一个元素，将右节点和左节点依次入栈</p>
</li>
<li>
<p>重复 2 的步骤</p>
</li>
</ol>
<p>总结： 典型的递归数据结构，典型的用栈来简化操作的算法。</p>
<p>其实从宏观上表现为：<code v-pre>自顶向下依次访问左侧链，然后自底向上依次访问右侧链</code>，如果从这个角度出发去写的话，算法就不一样了。从上向下我们可以直接递归访问即可，从下向上我们只需要借助栈也可以轻易做到。</p>
<p>整个过程大概是这样：</p>
<p><img src="https://p.ipic.vip/ei0wj1.jpg" alt="binary-tree-traversal-preorder"></p>
<p>这种思路有一个好处就是可以<code v-pre>统一三种遍历的思路</code>. 这个很重要，如果不了解的朋友，希望能够记住这一点。</p>
<h2 id="中序遍历" tabindex="-1"><a class="header-anchor" href="#中序遍历" aria-hidden="true">#</a> 中序遍历</h2>
<p>相关问题<RouterLink to="/notes/problems/94.binary-tree-inorder-traversal.html">94.binary-tree-inorder-traversal</RouterLink></p>
<p>中序遍历的顺序是 <code v-pre>左-根-右</code>，根节点不是先输出，这就有一点点复杂了。</p>
<ol>
<li>
<p>根节点入栈</p>
</li>
<li>
<p>判断有没有左节点，如果有，则入栈，直到叶子节点</p>
</li>
</ol>
<blockquote>
<p>此时栈中保存的就是所有的左节点和根节点。</p>
</blockquote>
<ol start="3">
<li>出栈，判断有没有右节点，有则入栈，继续执行 2</li>
</ol>
<p>值得注意的是，中序遍历一个二叉查找树（BST）的结果是一个有序数组，利用这个性质有些题目可以得到简化，
比如<RouterLink to="/notes/problems/230.kth-smallest-element-in-a-bst.html">230.kth-smallest-element-in-a-bst</RouterLink>，
以及<RouterLink to="/notes/problems/98.validate-binary-search-tree.html">98.validate-binary-search-tree</RouterLink></p>
<h2 id="后序遍历" tabindex="-1"><a class="header-anchor" href="#后序遍历" aria-hidden="true">#</a> 后序遍历</h2>
<p>相关问题<RouterLink to="/notes/problems/145.binary-tree-postorder-traversal.html">145.binary-tree-postorder-traversal</RouterLink></p>
<p>后序遍历的顺序是 <code v-pre>左-右-根</code></p>
<p>这个就有点难度了，要不也不会是 leetcode 困难的 难度啊。</p>
<p>其实这个也是属于根节点先不输出，并且根节点是最后输出。 这里可以采用一种讨巧的做法，
就是记录当前节点状态，如果：</p>
<ol>
<li>
<p>当前节点是叶子节点或者</p>
</li>
<li>
<p>当前节点的左右子树都已经遍历过了，那么就可以出栈了。</p>
</li>
</ol>
<p>对于 <code v-pre>1. 当前节点是叶子节点</code>，这个比较好判断，只要判断 left 和 rigt 是否同时为 null 就好。</p>
<p>对于 <code v-pre>2. 当前节点的左右子树都已经遍历过了</code>， 只需要用一个变量记录即可。最坏的情况，我们记录每一个节点的访问状况就好了，空间复杂度 O(n)
但是仔细想一下，我们使用了栈的结构，从叶子节点开始输出，我们记录一个当前出栈的元素就好了，空间复杂度 O(1)， 具体请查看上方链接。</p>
<h2 id="层次遍历" tabindex="-1"><a class="header-anchor" href="#层次遍历" aria-hidden="true">#</a> 层次遍历</h2>
<p>层次遍历的关键点在于如何记录每一层次是否遍历完成， 我们可以用一个标识位来表式当前层的结束。</p>
<p><img src="https://p.ipic.vip/9z2nxw.gif" alt="binary-tree-traversal-bfs"></p>
<p>(图片来自 https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/tree/breadth-first-search)</p>
<p>具体做法：</p>
<ol>
<li>
<p>根节点入队列， 并入队列一个特殊的标识位，此处是 null</p>
</li>
<li>
<p>出队列</p>
</li>
<li>
<p>判断是不是 null， 如果是则代表本层已经结束。我们再次判断是否当前队列为空，如果不为空继续入队一个 null，否则说明遍历已经完成，我们什么都不不用做</p>
</li>
<li>
<p>如果不为 null，说明这一层还没完，则将其左右子树依次入队列。</p>
</li>
</ol>
<p>相关问题：</p>
<ul>
<li><RouterLink to="/notes/problems/102.binary-tree-level-order-traversal.html">102.binary-tree-level-order-traversal</RouterLink></li>
<li><a href="https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii/" target="_blank" rel="noopener noreferrer">117. 填充每个节点的下一个右侧节点指针 II<ExternalLinkIcon/></a></li>
</ul>
<h2 id="双色标记法" tabindex="-1"><a class="header-anchor" href="#双色标记法" aria-hidden="true">#</a> 双色标记法</h2>
<p>我们知道垃圾回收算法中，有一种算法叫三色标记法。 即：</p>
<ul>
<li>用白色表示尚未访问</li>
<li>灰色表示尚未完全访问子节点</li>
<li>黑色表示子节点全部访问</li>
</ul>
<p>那么我们可以模仿其思想，使用双色标记法来统一三种遍历。</p>
<p>其核心思想如下：</p>
<ul>
<li>使用颜色标记节点的状态，新节点为白色，已访问的节点为灰色。</li>
<li>如果遇到的节点为白色，则将其标记为灰色，然后将其右子节点、自身、左子节点依次入栈。</li>
<li>如果遇到的节点为灰色，则将节点的值输出。</li>
</ul>
<p>使用这种方法实现的中序遍历如下：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">inorderTraversal</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        WHITE<span class="token punctuation">,</span> GRAY <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span>
        res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>WHITE<span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">]</span>
        <span class="token keyword">while</span> stack<span class="token punctuation">:</span>
            color<span class="token punctuation">,</span> node <span class="token operator">=</span> stack<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> node <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span> <span class="token keyword">continue</span>
            <span class="token keyword">if</span> color <span class="token operator">==</span> WHITE<span class="token punctuation">:</span>
                stack<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">(</span>WHITE<span class="token punctuation">,</span> node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span>
                stack<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">(</span>GRAY<span class="token punctuation">,</span> node<span class="token punctuation">)</span><span class="token punctuation">)</span>
                stack<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">(</span>WHITE<span class="token punctuation">,</span> node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                res<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
        <span class="token keyword">return</span> res
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，实现上 WHITE 就表示的是递归中的第一次进入过程，Gray 则表示递归中的从叶子节点返回的过程。 因此这种迭代的写法更接近递归写法的本质。</p>
<p>如要实现前序、后序遍历，只需要调整左右子节点的入栈顺序即可。可以看出使用三色标记法， 其写法类似递归的形式，因此便于记忆和书写，缺点是使用了额外的内存空间。不过这个额外的空间是线性的，影响倒是不大。</p>
<blockquote>
<p>虽然递归也是额外的线性时间，但是递归的栈开销还是比一个 0，1 变量开销大的。换句话说就是空间复杂度的常数项是不同的，这在一些情况下的差异还是蛮明显的。</p>
</blockquote>
<p><code v-pre>划重点：双色迭代法是一种可以用迭代模拟递归的写法，其写法和递归非常相似，要比普通迭代简单地多。</code></p>
<h2 id="morris-遍历" tabindex="-1"><a class="header-anchor" href="#morris-遍历" aria-hidden="true">#</a> Morris 遍历</h2>
<p>我们可以使用一种叫做 Morris 遍历的方法，既不使用递归也不借助于栈。从而在 $O(1)$ 空间完成这个过程。</p>
<p><code v-pre>如果你需要使用 $O(1)$ 空间遍历一棵二叉树，那么就要使用 Morris 遍历。</code></p>
<p>这个算法考察相对少，作为了解即可。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">MorrisTraversal</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">:</span>
    curr <span class="token operator">=</span> root

    <span class="token keyword">while</span> curr<span class="token punctuation">:</span>
        <span class="token comment"># If left child is null, print the</span>
        <span class="token comment"># current node data. And, update</span>
        <span class="token comment"># the current pointer to right child.</span>
        <span class="token keyword">if</span> curr<span class="token punctuation">.</span>left <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>curr<span class="token punctuation">.</span>data<span class="token punctuation">,</span> end<span class="token operator">=</span> <span class="token string">" "</span><span class="token punctuation">)</span>
            curr <span class="token operator">=</span> curr<span class="token punctuation">.</span>right

        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token comment"># Find the inorder predecessor</span>
            prev <span class="token operator">=</span> curr<span class="token punctuation">.</span>left

            <span class="token keyword">while</span> prev<span class="token punctuation">.</span>right <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span> <span class="token keyword">and</span> prev<span class="token punctuation">.</span>right <span class="token keyword">is</span> <span class="token keyword">not</span> curr<span class="token punctuation">:</span>
                prev <span class="token operator">=</span> prev<span class="token punctuation">.</span>right

            <span class="token comment"># If the right child of inorder</span>
            <span class="token comment"># predecessor already points to</span>
            <span class="token comment"># the current node, update the</span>
            <span class="token comment"># current with it's right child</span>
            <span class="token keyword">if</span> prev<span class="token punctuation">.</span>right <span class="token keyword">is</span> curr<span class="token punctuation">:</span>
                prev<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token boolean">None</span>
                curr <span class="token operator">=</span> curr<span class="token punctuation">.</span>right

            <span class="token comment"># else If right child doesn't point</span>
            <span class="token comment"># to the current node, then print this</span>
            <span class="token comment"># node's data and update the right child</span>
            <span class="token comment"># pointer with the current node and update</span>
            <span class="token comment"># the current with it's left child</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                <span class="token keyword">print</span> <span class="token punctuation">(</span>curr<span class="token punctuation">.</span>data<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">" "</span><span class="token punctuation">)</span>
                prev<span class="token punctuation">.</span>right <span class="token operator">=</span> curr
                curr <span class="token operator">=</span> curr<span class="token punctuation">.</span>left
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考： <a href="https://www.educative.io/edpresso/what-is-morris-traversal" target="_blank" rel="noopener noreferrer">what-is-morris-traversal<ExternalLinkIcon/></a></p>
<p><code v-pre>划重点：Morris 是一种可以在 $O(1)$ 空间遍历二叉树的算法。</code></p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>本文详细讲解了二叉树的层次遍历和深度优先遍历。</p>
<p>对于深度优先遍历，我们又细分为前中后序三种遍历方式。</p>
<p>最后我们讲解了双色遍历和 Morris 遍历。这两种方式可以作为了解，不掌握也没关系。</p>
<p>另外，如果题目要求你实现迭代器（就是调用一次输出一个二叉树的值），那么前面讲的迭代的方式就非常适用了。</p>
<h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>
<ul>
<li><a href="https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/" target="_blank" rel="noopener noreferrer">lowest-common-ancestor-of-a-binary-tree<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/binary-tree-level-order-traversal/" target="_blank" rel="noopener noreferrer">binary-tree-level-order-traversal<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/" target="_blank" rel="noopener noreferrer">binary-tree-zigzag-level-order-traversal<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/validate-binary-search-tree/" target="_blank" rel="noopener noreferrer">validate-binary-search-tree<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/" target="_blank" rel="noopener noreferrer">maximum-depth-of-binary-tree<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/balanced-binary-tree/" target="_blank" rel="noopener noreferrer">balanced-binary-tree<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/" target="_blank" rel="noopener noreferrer">binary-tree-level-order-traversal-ii<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/" target="_blank" rel="noopener noreferrer">binary-tree-maximum-path-sum<ExternalLinkIcon/></a></li>
<li><a href="https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/" target="_blank" rel="noopener noreferrer">insert-into-a-binary-search-tree<ExternalLinkIcon/></a></li>
</ul>
</div></template>


