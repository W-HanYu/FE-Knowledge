<template><div><h1 id="_13-【script-setup-总结】" tabindex="-1"><a class="header-anchor" href="#_13-【script-setup-总结】" aria-hidden="true">#</a> 13 【script setup 总结】</h1>
<blockquote>
<p>因为学习的时候，视频版本并没有一些新的语法糖，笔记是没有使用这些语法糖的，但是用法都会以补充的形式加进来。</p>
</blockquote>
<p>在 <code v-pre>setup()</code> 函数中手动暴露大量的状态和方法非常繁琐。幸运的是，我们可以通过使用构建工具来简化该操作。当使用单文件组件（SFC）时，我们可以使用 <code v-pre>&lt;script setup&gt;</code> 来大幅度地简化代码。</p>
<p><code v-pre>&lt;script setup&gt; </code>是在单文件组件 (SFC) 中使用组合式 API 的编译时语法糖。当同时使用 SFC 与组合式 API 时该语法是默认推荐。相比于普通的<code v-pre>&lt;script&gt;</code>语法，它具有更多优势：</p>
<ul>
<li>更少的样板内容，更简洁的代码。</li>
<li>能够使用纯 Typescript 声明 props 和自定义事件。</li>
<li>更好的运行时性能 (其模板会被编译成同一作用域内的渲染函数，避免了渲染上下文代理对象)。</li>
<li>更好的 IDE 类型推导性能 (减少了语言服务器从代码中抽取类型的工作)。</li>
</ul>
<h2 id="_1-基本语法" tabindex="-1"><a class="header-anchor" href="#_1-基本语法" aria-hidden="true">#</a> 1.基本语法</h2>
<p>要启用该语法，需要在 <code v-pre>&lt;script&gt;</code> 代码块上添加 <code v-pre>setup</code> attribute：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello script setup'</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>里面的代码会被编译成组件 <code v-pre>setup()</code> 函数的内容。这意味着与普通的 <code v-pre>&lt;script&gt;</code> 只在组件被首次引入的时候执行一次不同，<code v-pre>&lt;script setup&gt;</code> 中的代码会在<strong>每次组件实例被创建的时候执行</strong>。</p>
<h2 id="_2-顶层的绑定会被暴露给模板" tabindex="-1"><a class="header-anchor" href="#_2-顶层的绑定会被暴露给模板" aria-hidden="true">#</a> 2.顶层的绑定会被暴露给模板<a href="https://staging-cn.vuejs.org/api/sfc-script-setup.html#top-level-bindings-are-exposed-to-template" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h2>
<p>当使用 <code v-pre>&lt;script setup&gt;</code> 的时候，任何在 <code v-pre>&lt;script setup&gt;</code> 声明的顶层的绑定 (包括变量，函数声明，以及 import 导入的内容) 都能在模板中直接使用：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// 变量</span>
<span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token string">'Hello!'</span>

<span class="token comment">// 函数</span>
<span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>log<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-响应式" tabindex="-1"><a class="header-anchor" href="#_3-响应式" aria-hidden="true">#</a> 3.响应式<a href="https://staging-cn.vuejs.org/api/sfc-script-setup.html#reactivity" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h2>
<p>响应式状态需要明确使用<a href="https://staging-cn.vuejs.org/api/reactivity-core.html" target="_blank" rel="noopener noreferrer">响应式 API<ExternalLinkIcon/></a> 来创建。和 <code v-pre>setup()</code> 函数的返回值一样，ref 在模板中使用的时候会自动解包：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>count++<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-使用组件" tabindex="-1"><a class="header-anchor" href="#_4-使用组件" aria-hidden="true">#</a> 4.使用组件<a href="https://staging-cn.vuejs.org/api/sfc-script-setup.html#using-components" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h2>
<p><code v-pre>&lt;script setup&gt;</code> 范围里的值也能被直接作为自定义组件的标签名使用：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> MyComponent <span class="token keyword">from</span> <span class="token string">'./MyComponent.vue'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> MyComponent <span class="token keyword">from</span> <span class="token string">'./MyComponent.vue'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里 <code v-pre>MyComponent</code> 应当被理解为像是在引用一个变量。如果你使用过 JSX，此处的心智模型是类似的。其 kebab-case 格式的 <code v-pre>&lt;my-component&gt;</code> 同样能在模板中使用——不过，我们强烈建议使用 PascalCase 格式以保持一致性。同时这也有助于区分原生的自定义元素。</p>
<h3 id="_4-1-动态组件" tabindex="-1"><a class="header-anchor" href="#_4-1-动态组件" aria-hidden="true">#</a> 4.1 动态组件<a href="https://staging-cn.vuejs.org/api/sfc-script-setup.html#dynamic-components" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h3>
<p>由于组件是通过变量引用而不是基于字符串组件名注册的，在 <code v-pre>&lt;script setup&gt;</code> 中要使用动态组件的时候，应该使用动态的 <code v-pre>:is</code> 来绑定：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Foo <span class="token keyword">from</span> <span class="token string">'./Foo.vue'</span>
<span class="token keyword">import</span> Bar <span class="token keyword">from</span> <span class="token string">'./Bar.vue'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Foo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>someCondition ? Foo : Bar<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意组件是如何在三元表达式中被当做变量使用的。</p>
<h3 id="_4-2-递归组件" tabindex="-1"><a class="header-anchor" href="#_4-2-递归组件" aria-hidden="true">#</a> 4.2 递归组件<a href="https://staging-cn.vuejs.org/api/sfc-script-setup.html#recursive-components" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h3>
<p>一个单文件组件可以通过它的文件名被其自己所引用。例如：名为 <code v-pre>FooBar.vue</code> 的组件可以在其模板中用 <code v-pre>&lt;FooBar/&gt;</code> 引用它自己。</p>
<p>请注意这种方式相比于导入的组件优先级更低。如果有具名的导入和组件自身推导的名字冲突了，可以为导入的组件添加别名：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> FooBar <span class="token keyword">as</span> FooBarChild <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./components'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-3-命名空间组件" tabindex="-1"><a class="header-anchor" href="#_4-3-命名空间组件" aria-hidden="true">#</a> 4.3 命名空间组件<a href="https://staging-cn.vuejs.org/api/sfc-script-setup.html#namespaced-components" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h3>
<p>可以使用带 <code v-pre>.</code> 的组件标签，例如 <code v-pre>&lt;Foo.Bar&gt;</code> 来引用嵌套在对象属性中的组件。这在需要从单个文件中导入多个组件的时候非常有用：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">></span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Form <span class="token keyword">from</span> <span class="token string">'./form-components'</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Input<span class="token operator">></span>
    <span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Label<span class="token operator">></span>label<span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token punctuation">.</span>Label<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token punctuation">.</span>Input<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-使用自定义指令" tabindex="-1"><a class="header-anchor" href="#_5-使用自定义指令" aria-hidden="true">#</a> 5.使用自定义指令</h2>
<p>全局注册的自定义指令将正常工作。本地的自定义指令在 <code v-pre>&lt;script setup&gt;</code> 中不需要显式注册，但他们必须遵循 <code v-pre>vNameOfDirective</code> 这样的命名规范：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">></span>
<span class="token keyword">const</span> vMyDirective <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">beforeMount</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 在元素上做些操作</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>h1 v<span class="token operator">-</span>my<span class="token operator">-</span>directive<span class="token operator">></span>This is a Heading<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果指令是从别处导入的，可以通过重命名来使其符合命名规范：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> myDirective <span class="token keyword">as</span> vMyDirective <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./MyDirective.js'</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-defineprops-和-defineemits" tabindex="-1"><a class="header-anchor" href="#_6-defineprops-和-defineemits" aria-hidden="true">#</a> 6.<code v-pre>defineProps()</code> 和 <code v-pre>defineEmits()</code><a href="https://staging-cn.vuejs.org/api/sfc-script-setup.html#defineprops-defineemits" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h2>
<p>为了在声明 <code v-pre>props</code> 和 <code v-pre>emits</code> 选项时获得完整的类型推导支持，我们可以使用 <code v-pre>defineProps</code> 和 <code v-pre>defineEmits</code> API，它们将自动地在 <code v-pre>&lt;script setup&gt;</code> 中可用：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">></span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> String
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'change'</span><span class="token punctuation">,</span> <span class="token string">'delete'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// setup 代码</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>defineProps</code> 和 <code v-pre>defineEmits</code> 都是只能在 <code v-pre>&lt;script setup&gt;</code> 中使用的<strong>编译器宏</strong>。他们不需要导入，且会随着 <code v-pre>&lt;script setup&gt;</code> 的处理过程一同被编译掉。</li>
<li><code v-pre>defineProps</code> 接收与 <code v-pre>props</code> 选项相同的值，<code v-pre>defineEmits</code> 接收与 <code v-pre>emits</code> 选项相同的值。</li>
<li><code v-pre>defineProps</code> 和 <code v-pre>defineEmits</code> 在选项传入后，会提供恰当的类型推导。</li>
<li>传入到 <code v-pre>defineProps</code> 和 <code v-pre>defineEmits</code> 的选项会从 setup 中提升到模块的作用域。因此，传入的选项不能引用在 setup 作用域中声明的局部变量。这样做会引起编译错误。但是，它<em>可以</em>引用导入的绑定，因为它们也在模块作用域内。</li>
</ul>
<p>如果使用了 Typescript，<a href="https://staging-cn.vuejs.org/api/sfc-script-setup.html#typescript-only-features" target="_blank" rel="noopener noreferrer">使用纯类型声明来声明 prop 和 emit<ExternalLinkIcon/></a> 也是可以的。</p>
<h2 id="_7-defineexpose" tabindex="-1"><a class="header-anchor" href="#_7-defineexpose" aria-hidden="true">#</a> 7.<code v-pre>defineExpose</code><a href="https://staging-cn.vuejs.org/api/sfc-script-setup.html#defineexpose" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h2>
<p>使用 <code v-pre>&lt;script setup&gt;</code> 的组件是<strong>默认关闭</strong>的——即通过模板引用或者 <code v-pre>$parent</code> 链获取到的组件的公开实例，<strong>不会</strong>暴露任何在 <code v-pre>&lt;script setup&gt;</code> 中声明的绑定。</p>
<p>可以通过 <code v-pre>defineExpose</code> 编译器宏来显式指定在 <code v-pre>&lt;script setup&gt;</code> 组件中要暴露出去的属性：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

<span class="token function">defineExpose</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  a<span class="token punctuation">,</span>
  b
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当父组件通过模板引用的方式获取到当前组件的实例，获取到的实例会像这样 <code v-pre>{ a: number, b: number }</code> (ref 会和在普通实例中一样被自动解包)</p>
<h2 id="_8-useslots-和-useattrs" tabindex="-1"><a class="header-anchor" href="#_8-useslots-和-useattrs" aria-hidden="true">#</a> 8.<code v-pre>useSlots()</code> 和 <code v-pre>useAttrs()</code><a href="https://staging-cn.vuejs.org/api/sfc-script-setup.html#useslots-useattrs" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h2>
<p>在 <code v-pre>&lt;script setup&gt;</code> 使用 <code v-pre>slots</code> 和 <code v-pre>attrs</code> 的情况应该是相对来说较为罕见的，因为可以在模板中直接通过 <code v-pre>$slots</code> 和 <code v-pre>$attrs</code> 来访问它们。在你的确需要使用它们的罕见场景中，可以分别用 <code v-pre>useSlots</code> 和 <code v-pre>useAttrs</code> 两个辅助函数：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useSlots<span class="token punctuation">,</span> useAttrs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> slots <span class="token operator">=</span> <span class="token function">useSlots</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> attrs <span class="token operator">=</span> <span class="token function">useAttrs</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>useSlots</code> 和 <code v-pre>useAttrs</code> 是真实的运行时函数，它的返回与 <code v-pre>setupContext.slots</code> 和 <code v-pre>setupContext.attrs</code> 等价。它们同样也能在普通的组合式 API 中使用。</p>
<h2 id="_9-与普通的-script-一起使用" tabindex="-1"><a class="header-anchor" href="#_9-与普通的-script-一起使用" aria-hidden="true">#</a> 9.与普通的 <code v-pre>&lt;script&gt;</code> 一起使用<a href="https://staging-cn.vuejs.org/api/sfc-script-setup.html#usage-alongside-normal-script" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h2>
<p><code v-pre>&lt;script setup&gt; </code>可以和普通的 <code v-pre>&lt;script&gt; </code>一起使用。普通的<code v-pre>&lt;script&gt;</code>在有这些需要的情况下或许会被使用到：</p>
<ul>
<li>声明无法在 <code v-pre>&lt;script setup&gt;</code> 中声明的选项，例如 <code v-pre>inheritAttrs</code> 或插件的自定义选项。</li>
<li>声明模块的具名导出 (named exports)。</li>
<li>运行只需要在模块作用域执行一次的副作用，或是创建单例对象。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token comment">// 普通 &lt;script>, 在模块作用域下执行 (仅一次)</span>
<span class="token function">runSideEffectOnce</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 声明额外的选项</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">inheritAttrs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">customOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"App"</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span>script setup<span class="token operator">></span>
<span class="token comment">// 在 setup() 作用域中执行 (对每个实例皆如此)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-顶层-await" tabindex="-1"><a class="header-anchor" href="#_10-顶层-await" aria-hidden="true">#</a> 10.顶层 <code v-pre>await</code><a href="https://staging-cn.vuejs.org/api/sfc-script-setup.html#top-level-await" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h2>
<p><code v-pre>&lt;script setup&gt; </code>中可以使用顶层<code v-pre> await</code>。结果代码会被编译成 <code v-pre>async setup()：</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">></span>
<span class="token keyword">const</span> post <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/api/post/1</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">r</span><span class="token punctuation">)</span> <span class="token operator">=></span> r<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，await 的表达式会自动编译成在 <code v-pre>await</code> 之后保留当前组件实例上下文的格式。</p>
<p>注意</p>
<p><code v-pre>async setup()</code> 必须与 <a href="https://staging-cn.vuejs.org/guide/built-ins/suspense.html" target="_blank" rel="noopener noreferrer"><code v-pre>Suspense</code> 内置组件<ExternalLinkIcon/></a> 组合使用，<code v-pre>Suspense</code> 目前还是处于实验阶段的特性，会在将来的版本中稳定。</p>
<h2 id="_11-针对-typescript-的功能" tabindex="-1"><a class="header-anchor" href="#_11-针对-typescript-的功能" aria-hidden="true">#</a> 11.针对 TypeScript 的功能<a href="https://staging-cn.vuejs.org/api/sfc-script-setup.html#typescript-only-features" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h2>
<h3 id="_11-1-针对类型的-props-emit-声明" tabindex="-1"><a class="header-anchor" href="#_11-1-针对类型的-props-emit-声明" aria-hidden="true">#</a> 11.1 针对类型的 props/emit 声明<a href="https://staging-cn.vuejs.org/api/sfc-script-setup.html#type-only-propsemit-declarations" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h3>
<p>props 和 emit 都可以通过给 <code v-pre>defineProps</code> 和 <code v-pre>defineEmits</code> 传递纯类型参数的方式来声明：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token generic-function"><span class="token function">defineProps</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token builtin">string</span>
  bar<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token generic-function"><span class="token function">defineEmits</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">{</span>
  <span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token string">'change'</span><span class="token punctuation">,</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
  <span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token string">'update'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><code v-pre>defineProps</code> 或 <code v-pre>defineEmits</code> 只能要么使用运行时声明，要么使用类型声明。同时使用两种声明方式会导致编译报错。</p>
</li>
<li>
<p>使用类型声明的时候，静态分析会自动生成等效的运行时声明，从而在避免双重声明的前提下确保正确的运行时行为。</p>
<ul>
<li>在开发模式下，编译器会试着从类型来推导对应的运行时验证。例如这里从 <code v-pre>foo: string</code> 类型中推断出 <code v-pre>foo: String</code>。如果类型是对导入类型的引用，这里的推导结果会是 <code v-pre>foo: null</code> (与 <code v-pre>any</code> 类型相等)，因为编译器没有外部文件的信息。</li>
<li>在生产模式下，编译器会生成数组格式的声明来减少打包体积 (这里的 props 会被编译成 <code v-pre>['foo', 'bar']</code>)。</li>
<li>生成的代码仍然是有着合法类型的 Typescript 代码，它可以在后续的流程中被其他工具处理。</li>
</ul>
</li>
<li>
<p>截至目前，类型声明参数必须是以下内容之一，以确保正确的静态分析：</p>
<ul>
<li>类型字面量</li>
<li>在同一文件中的接口或类型字面量的引用</li>
</ul>
<p>现在还不支持复杂的类型和从其他文件进行类型导入，但我们有计划在将来支持。</p>
</li>
</ul>
<h3 id="_11-2-使用类型声明时的默认-props-值" tabindex="-1"><a class="header-anchor" href="#_11-2-使用类型声明时的默认-props-值" aria-hidden="true">#</a> 11.2 使用类型声明时的默认 props 值<a href="https://staging-cn.vuejs.org/api/sfc-script-setup.html#default-props-values-when-using-type-declaration" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h3>
<p>针对类型的 <code v-pre>defineProps</code> 声明的不足之处在于，它没有可以给 props 提供默认值的方式。为了解决这个问题，我们还提供了 <code v-pre>withDefaults</code> 编译器宏：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
  msg<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  labels<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">withDefaults</span><span class="token punctuation">(</span><span class="token generic-function"><span class="token function">defineProps</span><span class="token generic class-name"><span class="token operator">&lt;</span>Props<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  msg<span class="token operator">:</span> <span class="token string">'hello'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">labels</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token string">'one'</span><span class="token punctuation">,</span> <span class="token string">'two'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码会被编译为等价的运行时 props 的 <code v-pre>default</code> 选项。此外，<code v-pre>withDefaults</code> 辅助函数提供了对默认值的类型检查，并确保返回的 <code v-pre>props</code> 的类型删除了已声明默认值的属性的可选标志。</p>
<h2 id="_12-限制" tabindex="-1"><a class="header-anchor" href="#_12-限制" aria-hidden="true">#</a> 12.限制<a href="https://staging-cn.vuejs.org/api/sfc-script-setup.html#restrictions" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h2>
<p>由于模块执行语义的差异，<code v-pre>&lt;script setup&gt;</code> 中的代码依赖单文件组件的上下文。当将其移动到外部的 <code v-pre>.js</code> 或者 <code v-pre>.ts</code> 文件中的时候，对于开发者和工具来说都会感到混乱。因此，<strong><code v-pre>&lt;script setup&gt;</code></strong> 不能和 <code v-pre>src</code> attribute 一起使用。</p>
</div></template>


