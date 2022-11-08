<template><div><h1 id="_08-【props-组件事件】" tabindex="-1"><a class="header-anchor" href="#_08-【props-组件事件】" aria-hidden="true">#</a> 08 【Props 组件事件】</h1>
<h2 id="_1-props" tabindex="-1"><a class="header-anchor" href="#_1-props" aria-hidden="true">#</a> 1.Props</h2>
<h3 id="_1-1-props-声明" tabindex="-1"><a class="header-anchor" href="#_1-1-props-声明" aria-hidden="true">#</a> 1.1 Props 声明<a href="https://staging-cn.vuejs.org/guide/components/props.html#props-declaration" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h3>
<p>Props 是一种特别的 attributes，你可以在组件上声明注册。要传递给子组件内容，我们必须在组件的 props 列表上声明它。</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!-- BlogPost.vue --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'title'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>{{ title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>defineProps</code> 是一个仅 <code v-pre>&lt;script setup&gt;</code> 中可用的编译宏命令，并不需要显式地导入。声明的 props 会自动暴露给模板。<code v-pre>defineProps</code> 会返回一个对象，其中包含了可以传递给组件的所有 props：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'title'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>title<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>TypeScript 用户请参考：<a href="https://staging-cn.vuejs.org/guide/typescript/composition-api.html#typing-component-props" target="_blank" rel="noopener noreferrer">为组件 props 标注类型<ExternalLinkIcon/></a></p>
<p>在没有使用 <code v-pre>&lt;script setup&gt;</code> 的组件中，props 必须以 <code v-pre>props</code> 选项的方式声明，props 对象会作为 <code v-pre>setup()</code> 函数的第一个参数被传入：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'title'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// setup() 接收 props 作为第一个参数</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>title<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意传递给 <code v-pre>defineProps()</code> 的参数和提供给 <code v-pre>props</code> 选项的值是相同的，两种声明方式背后其实使用的都是 prop 选项。</p>
<p>除了使用字符串数组来声明 prop 外，还可以使用对象的形式：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 使用 &lt;script setup></span>
<span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token literal-property property">likes</span><span class="token operator">:</span> Number
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 非 &lt;script setup></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">likes</span><span class="token operator">:</span> Number
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于以对象形式声明中的每个属性，key 是 prop 的名称，而值则是该 prop 预期类型的构造函数。比如，如果要求一个 prop 的值是 <code v-pre>number</code> 类型，则可使用 <code v-pre>Number</code> 构造函数作为其声明的值。</p>
<p>对象形式的 props 声明不仅可以一定程度上作为组件的文档，而且如果其他开发者在使用你的组件时传递了错误的类型，也会在浏览器控制台中抛出警告。我们将在本章节稍后进一步讨论有关 <a href="https://staging-cn.vuejs.org/guide/components/props.html#prop-validation" target="_blank" rel="noopener noreferrer">prop 校验<ExternalLinkIcon/></a>的更多细节。</p>
<blockquote>
<p>校验选项中的 <code v-pre>type</code> 可以是下列这些原生构造函数：</p>
<ul>
<li><code v-pre>String</code></li>
<li><code v-pre>Number</code></li>
<li><code v-pre>Boolean</code></li>
<li><code v-pre>Array</code></li>
<li><code v-pre>Object</code></li>
<li><code v-pre>Date</code></li>
<li><code v-pre>Function</code></li>
<li><code v-pre>Symbol</code></li>
</ul>
<p>另外，<code v-pre>type</code> 也可以是自定义的类或构造函数，Vue 将会通过 <code v-pre>instanceof</code> 来检查类型是否匹配。</p>
</blockquote>
<p>如果你正在搭配 TypeScript 使用 <code v-pre>&lt;script setup&gt;</code>，也可以使用类型标注来声明 props：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">"ts"</span><span class="token operator">></span>
defineProps<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  title<span class="token operator">?</span><span class="token operator">:</span> string
  likes<span class="token operator">?</span><span class="token operator">:</span> number
<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多关于基于类型的声明的细节请参考<a href="https://staging-cn.vuejs.org/guide/typescript/composition-api.html#typing-component-props" target="_blank" rel="noopener noreferrer">组件 props 类型标注<ExternalLinkIcon/></a>。</p>
<h3 id="_1-2-prop-名字格式" tabindex="-1"><a class="header-anchor" href="#_1-2-prop-名字格式" aria-hidden="true">#</a> 1.2 Prop 名字格式<a href="https://staging-cn.vuejs.org/guide/components/props.html#prop-name-casing" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h3>
<p>如果一个 prop 的名字很长，应使用 camelCase 形式，因为它们是合法的 JavaScript 标识符，可以直接在模板的表达式中使用，也可以避免在作为属性 key 名时必须加上引号。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">greetingMessage</span><span class="token operator">:</span> String
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span> greetingMessage <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然理论上你也可以在向子组件传递 props 时使用 camelCase 形式 (使用 <a href="https://staging-cn.vuejs.org/guide/essentials/component-basics.html#dom-template-parsing-caveats" target="_blank" rel="noopener noreferrer">DOM 模板<ExternalLinkIcon/></a>时例外)，但实际上为了和 HTML attribute 对齐，我们通常会将其写为 kebab-case 形式：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>MyComponent greeting<span class="token operator">-</span>message<span class="token operator">=</span><span class="token string">"hello"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对于组件名我们推荐使用 <a href="https://staging-cn.vuejs.org/guide/components/registration.html#component-name-casing" target="_blank" rel="noopener noreferrer">PascalCase<ExternalLinkIcon/></a>，因为这提高了模板的可读性，能帮助我们区分 Vue 组件和原生 HTML 元素。然而对于传递 props 来说，使用 camelCase 并没有太多优势，因此我们推荐更贴近 HTML 的书写风格。</p>
<h3 id="_1-3-使用一个对象绑定多个-prop" tabindex="-1"><a class="header-anchor" href="#_1-3-使用一个对象绑定多个-prop" aria-hidden="true">#</a> 1.3 使用一个对象绑定多个 prop<a href="https://staging-cn.vuejs.org/guide/components/props.html#binding-multiple-properties-using-an-object" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h3>
<p>如果你想要将一个对象的所有属性都当作 props 传入，你可以使用<a href="https://staging-cn.vuejs.org/guide/essentials/template-syntax.html#dynamically-binding-multiple-attributes" target="_blank" rel="noopener noreferrer">没有参数的 <code v-pre>v-bind</code><ExternalLinkIcon/></a>，即只使用 <code v-pre>v-bind</code> 而非 <code v-pre>:prop-name</code>。例如，这里有一个 <code v-pre>post</code> 对象：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> post <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'My Journey with Vue'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以及下面的模板：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BlogPost</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>而这实际上等价于：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BlogPost</span> <span class="token attr-name">:id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post.id<span class="token punctuation">"</span></span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post.title<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-4-prop-校验" tabindex="-1"><a class="header-anchor" href="#_1-4-prop-校验" aria-hidden="true">#</a> 1.4 Prop 校验<a href="https://staging-cn.vuejs.org/guide/components/props.html#prop-validation" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h3>
<p>Vue 组件可以更细致地声明对传入的 props 的校验要求。比如我们上面已经看到过的类型声明，如果传入的值不满足类型要求，Vue 会在浏览器控制台中抛出警告来提醒使用者。这在开发给其他开发者使用的组件时非常有用。</p>
<p>要声明对 props 的校验，你可以向 <code v-pre>defineProps()</code> 宏提供一个带有 props 校验选项的对象，例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 基础类型检查</span>
  <span class="token comment">// （给出 `null` 和 `undefined` 值则会跳过任何类型检查）</span>
  <span class="token literal-property property">propA</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
  <span class="token comment">// 多种可能的类型</span>
  <span class="token literal-property property">propB</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Number<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 必传，且为 String 类型</span>
  <span class="token literal-property property">propC</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// Number 类型的默认值</span>
  <span class="token literal-property property">propD</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">100</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 对象类型的默认值</span>
  <span class="token literal-property property">propE</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
    <span class="token comment">// 对象或数组的默认值</span>
    <span class="token comment">// 必须从一个工厂函数返回。</span>
    <span class="token comment">// 该函数接收组件所接收到的原始 prop 作为参数。</span>
    <span class="token keyword">default</span><span class="token punctuation">(</span>rawProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'hello'</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 自定义类型校验函数</span>
  <span class="token literal-property property">propF</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">validator</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// The value must match one of these strings</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">'success'</span><span class="token punctuation">,</span> <span class="token string">'warning'</span><span class="token punctuation">,</span> <span class="token string">'danger'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 函数类型的默认值</span>
  <span class="token literal-property property">propG</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Function<span class="token punctuation">,</span>
    <span class="token comment">// 不像对象或数组的默认，这不是一个工厂函数。这会是一个用来作为默认值的函数</span>
    <span class="token keyword">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">'Default function'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p>
<p><code v-pre>defineProps()</code> 宏中的参数<strong>不可以访问 <code v-pre>&lt;script setup&gt;</code> 中定义的其他变量</strong>，因为在编译时整个表达式都会被移到外部的函数中。</p>
<p>一些补充细节：</p>
<ul>
<li>所有 prop 默认都是可选的，除非声明了 <code v-pre>required: true</code>。</li>
<li>除 <code v-pre>Boolean</code> 外的未传递的可选 prop 将会有一个默认值 <code v-pre>undefined</code>。</li>
<li><code v-pre>Boolean</code> 类型的未传递 prop 将被转换为 <code v-pre>false</code>。你应该为它设置一个 <code v-pre>default</code> 值来确保行为符合预期。</li>
<li>如果声明了 <code v-pre>default</code> 值，那么在 prop 的值被解析为 <code v-pre>undefined</code> 时，无论 prop 是未被传递还是显式指明的 <code v-pre>undefined</code>，都会改为 <code v-pre>default</code> 值。</li>
</ul>
<p>当 prop 的校验失败后，Vue 会抛出一个控制台警告 (在开发模式下)。</p>
<p>如果使用了<a href="https://staging-cn.vuejs.org/api/sfc-script-setup.html#typescript-only-features" target="_blank" rel="noopener noreferrer">基于类型的 prop 声明<ExternalLinkIcon/></a> ，Vue 会尽最大努力在运行时按照 prop 的类型标注进行编译。举例来说，<code v-pre>defineProps&lt;{ msg: string }&gt;</code> 会被编译为 <code v-pre>{ msg: { type: String, required: true }}</code>。</p>
<h3 id="_1-5-boolean-类型转换" tabindex="-1"><a class="header-anchor" href="#_1-5-boolean-类型转换" aria-hidden="true">#</a> 1.5 Boolean 类型转换<a href="https://staging-cn.vuejs.org/guide/components/props.html#boolean-casting" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h3>
<p>为了更贴近原生 boolean attributes 的行为，声明为 <code v-pre>Boolean</code> 类型的 props 有特别的类型转换规则。以带有如下声明的 <code v-pre>&lt;MyComponent&gt;</code> 组件为例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">disabled</span><span class="token operator">:</span> Boolean
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该组件可以被这样使用：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!-- 等同于传入 :disabled="true" --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>

<span class="token comment">&lt;!-- 等同于传入 :disabled="false" --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当一个 prop 被声明为允许多种类型时，例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token punctuation">[</span>Boolean<span class="token punctuation">,</span> Number<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>无论声明类型的顺序如何，<code v-pre>Boolean</code> 类型的特殊转换规则都会被应用。</p>
<h3 id="_1-6-单向数据流" tabindex="-1"><a class="header-anchor" href="#_1-6-单向数据流" aria-hidden="true">#</a> 1.6 单向数据流</h3>
<p>所有的 props 都遵循着<strong>单向绑定</strong>原则，props 因父组件的更新而变化，自然地将新的状态向下流往子组件，而不会逆向传递。这避免了子组件意外修改父组件的状态的情况，不然应用的数据流将很容易变得混乱而难以理解。</p>
<p>另外，每次父组件更新后，所有的子组件中的 props 都会被更新到最新值，这意味着你<strong>不应该</strong>在子组件中去更改一个 prop。若你这么做了，Vue 会在控制台上向你抛出警告：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'foo'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// ❌ 警告！prop 是只读的！</span>
props<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">'bar'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导致你想要更改一个 prop 的需求通常来源于以下两种场景：</p>
<ol>
<li>
<p><strong>prop 被用于传入初始值；而子组件想在之后将其作为一个局部数据属性</strong>。在这种情况下，最好是新定义一个局部数据属性，从 props 上获取初始值即可：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'initialCounter'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// 计数器只是将 props.initialCounter 作为初始值</span>
<span class="token comment">// 像下面这样做就使 prop 和后续更新无关了</span>
<span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>initialCounter<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>需要对传入的 prop 值做进一步的转换</strong>。在这种情况中，最好是基于该 prop 值定义一个计算属性：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'size'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// 该 prop 变更时计算属性也会自动更新</span>
<span class="token keyword">const</span> normalizedSize <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>size<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p><strong>更改对象 / 数组类型的 props<a href="https://staging-cn.vuejs.org/guide/components/props.html#mutating-object-array-props" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></strong></p>
<p>当对象或数组作为 props 被传入时，虽然子组件无法更改 props 绑定，但仍然<strong>可以</strong>更改对象或数组内部的值。这是因为 JavaScript 的对象和数组是按引用传递，而对 Vue 来说，禁止这样的改动虽然可能，但有很大的性能损耗，比较得不偿失。</p>
<p>这种更改的主要缺陷是它允许了子组件以某种不明显的方式影响父组件的状态，可能会使数据流在将来变得更难以理解。在最佳实践中，你应该尽可能避免这样的更改，除非父子组件在设计上本来就需要紧密耦合。在大多数场景下，子组件应该<a href="https://staging-cn.vuejs.org/guide/components/events.html" target="_blank" rel="noopener noreferrer">抛出一个事件<ExternalLinkIcon/></a>来通知父组件做出改变。</p>
<h3 id="_1-7-defineprops-总结" tabindex="-1"><a class="header-anchor" href="#_1-7-defineprops-总结" aria-hidden="true">#</a> 1.7 defineProps 总结</h3>
<ul>
<li>
<p>defineProps  只能是要么使用<code v-pre>运行时声明</code>，要么使用<code v-pre>typescript类型声明</code>。同时使用两种声明方式会导致编译报错。；</p>
</li>
<li>
<p>defineProps、withDefaults 是只在 <code v-pre>&lt;script setup&gt;</code> 语法糖中才能使用的编译器宏。他不需要导入且会随着<code v-pre>&lt;script setup&gt;</code>处理过程一同被编译掉。</p>
</li>
<li>
<p>withDefaults 只能与基于类型的defineProps声明一起使用；</p>
</li>
</ul>
<blockquote>
<p>例子1 &gt; 运行时声明 的方式只能设置参数类型、默认值、是否必传、自定义验证。报错为控制台warn警告。</p>
<p>若想设置[ 编辑器报错、编辑器语法提示 ]则需要使用类型声明的方式。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">'ts'</span> setup<span class="token operator">></span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">,</span> <span class="token comment">// 参数类型</span>
 <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//默认值</span>
 <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否必传</span>
 <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> value <span class="token operator">>=</span> <span class="token number">0</span> <span class="token comment">// 除了验证是否符合type的类型，此处再判断该值结果是否符合验证</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">sda</span><span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token comment">//undefined</span>
<span class="token literal-property property">strData</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
<span class="token literal-property property">arrFor</span><span class="token operator">:</span> Array
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<blockquote>
<p>例子2 &gt; 类型声明的方式1：defineProps 单独使用该api，只能设置是否必传和参数类型。（利用TS特性）</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">'ts'</span> setup<span class="token operator">></span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token generic-function"><span class="token function">defineProps</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">{</span>
    either<span class="token operator">:</span> <span class="token string">'必传且限定'</span><span class="token operator">|</span><span class="token string">'其中一个'</span><span class="token operator">|</span><span class="token string">'值'</span><span class="token punctuation">,</span> <span class="token comment">// 利用TS：限定父组件传 either 的值</span>
    child<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token punctuation">,</span>
    strData<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    arrFor<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相较于例子1，该写法只能设置参数类型、父组件对应 prop 是否该必传的功能。</p>
<p>传值有误时，控制台报warn警告，还提供编辑器报错功能。</p>
<p>提供编辑器代码提示的功能。</p>
</blockquote>
<blockquote>
<p>例子3 &gt; 类型声明的方式2：针对类型的 <code v-pre>defineProps</code> 声明的不足之处在于，它没有可以给 props 提供默认值的方式。为了解决这个问题，我们还提供了 <code v-pre>withDefaults</code> 编译器宏：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">'ts'</span> setup<span class="token operator">></span>
<span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
    either<span class="token operator">:</span> <span class="token string">'必传且限定'</span><span class="token operator">|</span><span class="token string">'其中一个'</span><span class="token operator">|</span><span class="token string">'值'</span><span class="token punctuation">,</span> <span class="token comment">// 利用TS：限定父组件传 either 的值</span>
    child<span class="token operator">:</span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token punctuation">,</span>
    sda<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token comment">// 未设置默认值，为 undefined</span>
    strData<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    msg<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    labels<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    obj<span class="token operator">?</span><span class="token operator">:</span><span class="token punctuation">{</span>a<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">withDefaults</span><span class="token punctuation">(</span><span class="token generic-function"><span class="token function">defineProps</span><span class="token generic class-name"><span class="token operator">&lt;</span>Props<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
msg<span class="token operator">:</span> <span class="token string">'hello'</span><span class="token punctuation">,</span>
<span class="token function-variable function">labels</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token string">'one'</span><span class="token punctuation">,</span> <span class="token string">'two'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token function-variable function">obj</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>  <span class="token punctuation">{</span>a<span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码会被编译为等价的运行时 props 的 <code v-pre>default</code> 选项。此外，<code v-pre>withDefaults</code> 辅助函数提供了对默认值的类型检查，并确保返回的 <code v-pre>props</code> 的类型删除了已声明默认值的属性的可选标志。</p>
</blockquote>
<h2 id="_2-组件事件" tabindex="-1"><a class="header-anchor" href="#_2-组件事件" aria-hidden="true">#</a> 2.组件事件</h2>
<blockquote>
<p>基础使用和vue2一样</p>
</blockquote>
<blockquote>
<p>场景说明：</p>
<p>组件功能封装：
组件封装了一系列 emit 事件，并返回数据、回调函数等，或单纯执行某个操作后，触发父组件的事件响应。
外部要用时，使用 @xxxx 来接收使用、响应。</p>
</blockquote>
<blockquote>
<p>详细：</p>
<p>defineEmits可以是数组或对象，从组件触发自定义事件，defineEmits可以是简单的数组，也可以是对象，后者允许配置事件验证。</p>
<p>在对象语法中，每个 <code v-pre>property</code> 的值可以为 null 或验证函数。验证函数将接收传递给 <code v-pre>$emit</code> 调用的其他参数。如果 $emit('foo',1) 被调用，foo 的相应验证函数将接收参数 1。验证函数应返回布尔值，以表示事件参数是否有效。</p>
<p>数组写法：<code v-pre> defineEmits:['emitEvnentName']</code></p>
<p>对象写法：<code v-pre> defineEmits:{}  { eventName:null }  { eventName:()=&gt;{} }</code></p>
</blockquote>
<blockquote>
<h4 id="细节说明" tabindex="-1"><a class="header-anchor" href="#细节说明" aria-hidden="true">#</a> 细节说明：</h4>
<p>1、数组形式和对象形式的值为null，表示该emit事件无验证函数。
2、对象形式且值为函数表示该 emit 配置了事件验证
验证函数必须有 return 真假值，真值表示通过验证，假值则 vue 会自动抛出 warn 警告！不 return 值默认当做失败，抛出 warn 警告！
<strong>验证函数主要就是验证参数是否正确，并不会在 return false 时中断 emit() 事件！</strong></p>
</blockquote>
<h3 id="_2-1-触发与监听事件" tabindex="-1"><a class="header-anchor" href="#_2-1-触发与监听事件" aria-hidden="true">#</a> 2.1 触发与监听事件</h3>
<p>在组件的模板表达式中，可以直接使用 <code v-pre>$emit</code> 方法触发自定义事件 (例如：在 <code v-pre>v-on</code> 的处理函数中)：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!-- MyComponent --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$emit('someEvent')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>click me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件可以通过 <code v-pre>v-on</code> (缩写为 <code v-pre>@</code>) 来监听事件：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token attr-name">@some-event</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>callback<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同样，组件的事件监听器也支持 <code v-pre>.once</code> 修饰符：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token attr-name">@some-event.once</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>callback<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>像组件与 prop 一样，事件的名字也提供了自动的格式转换。注意这里我们触发了一个以 camelCase 形式命名的事件，但在父组件中可以使用 kebab-case 形式来监听。与 <a href="https://staging-cn.vuejs.org/guide/components/props.html#prop-name-casing" target="_blank" rel="noopener noreferrer">prop 大小写格式<ExternalLinkIcon/></a>一样，在模板中我们也推荐使用 kebab-case 形式来编写监听器。</p>
<blockquote>
<p><strong>提示</strong></p>
<p>和原生 DOM 事件不一样，组件触发的事件<strong>没有冒泡机制</strong>。你只能监听直接子组件触发的事件。平级组件或是跨越多层嵌套的组件间通信，应使用一个外部的事件总线，或是使用一个<a href="https://staging-cn.vuejs.org/guide/scaling-up/state-management.html" target="_blank" rel="noopener noreferrer">全局状态管理方案<ExternalLinkIcon/></a>。</p>
</blockquote>
<h3 id="_2-2-事件参数" tabindex="-1"><a class="header-anchor" href="#_2-2-事件参数" aria-hidden="true">#</a> 2.2 事件参数<a href="https://staging-cn.vuejs.org/guide/components/events.html#event-arguments" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></h3>
<p>有时候我们会需要在触发事件时附带一个特定的值。举例来说，我们想要 <code v-pre>&lt;BlogPost&gt;</code> 组件来管理文本会缩放得多大。在这个场景下，我们可以给 <code v-pre>$emit</code> 提供一个额外的参数：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$emit('increaseBy', 1)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  Increase by 1
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我们在父组件中监听事件，我们可以先简单写一个内联的箭头函数作为监听器，此函数会接收到事件附带的参数：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyButton</span> <span class="token attr-name">@increase-by</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(n) => count += n<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者，也可以用一个组件方法来作为事件处理函数：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyButton</span> <span class="token attr-name">@increase-by</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>increaseCount<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该方法也会接收到事件所传递的参数：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">increaseCount</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  count<span class="token punctuation">.</span>value <span class="token operator">+=</span> n
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>提示</strong></p>
<p>所有传入 <code v-pre>$emit()</code> 的额外参数都会被直接传向监听器。举例来说，<code v-pre>$emit('foo', 1, 2, 3)</code> 触发后，监听器函数将会收到这三个参数值。</p>
</blockquote>
<h3 id="_2-3-声明触发的事件" tabindex="-1"><a class="header-anchor" href="#_2-3-声明触发的事件" aria-hidden="true">#</a> 2.3 声明触发的事件</h3>
<p>组件要触发的事件可以显式地通过 <a href="https://staging-cn.vuejs.org/api/sfc-script-setup.html#defineprops-defineemits" target="_blank" rel="noopener noreferrer"><code v-pre>defineEmits()</code><ExternalLinkIcon/></a> 宏来声明：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'inFocus'</span><span class="token punctuation">,</span> <span class="token string">'submit'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这声明了一个组件可能触发的所有事件，还可以对事件的参数进行<a href="https://staging-cn.vuejs.org/guide/components/events.html#validate-emitted-events" target="_blank" rel="noopener noreferrer">验证<ExternalLinkIcon/></a>。同时，这还可以让 Vue 避免将它们作为原生事件监听器隐式地应用于子组件的根元素。</p>
<p>和 <code v-pre>defineProps</code> 类似，<code v-pre>defineEmits</code> 仅可用于 <code v-pre>&lt;script setup&gt;</code> 之中，并且不需要导入，它返回一个等同于 <code v-pre>$emit</code> 方法的 <code v-pre>emit</code> 函数。它可以被用于在组件的 <code v-pre>&lt;script setup&gt;</code> 中抛出事件，因为此处无法直接访问 <code v-pre>$emit</code>:</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'inFocus'</span><span class="token punctuation">,</span> <span class="token string">'submit'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">buttonClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'submit'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>defineEmits()</code> 宏<strong>不能</strong>在子函数中使用。如上所示，它必须直接放置在 <code v-pre>&lt;script setup&gt;</code> 的顶级作用域下。</p>
<p>TypeScript 用户请参考：<a href="https://staging-cn.vuejs.org/guide/typescript/composition-api.html#typing-component-emits" target="_blank" rel="noopener noreferrer">为组件 emits 标注类型<ExternalLinkIcon/></a></p>
<p>如果你显式地使用了 <code v-pre>setup</code> 函数而不是 <code v-pre>&lt;script setup&gt;</code>，则事件需要通过 <a href="https://staging-cn.vuejs.org/api/options-state.html#emits" target="_blank" rel="noopener noreferrer"><code v-pre>emits</code><ExternalLinkIcon/></a> 选项来定义，<code v-pre>emit</code> 函数也被暴露在 <code v-pre>setup()</code> 的上下文对象上：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'inFocus'</span><span class="token punctuation">,</span> <span class="token string">'submit'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ctx<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'submit'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与 <code v-pre>setup()</code> 上下文对象中的其他属性一样，<code v-pre>emit</code> 可以安全地被解构：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'inFocus'</span><span class="token punctuation">,</span> <span class="token string">'submit'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> emit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'submit'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个 <code v-pre>emits</code> 选项还支持对象语法，它允许我们对触发事件的参数进行验证：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">submit</span><span class="token punctuation">(</span><span class="token parameter">payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 通过返回值为 `true` 还是为 `false` 来判断</span>
    <span class="token comment">// 验证是否通过</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你正在搭配 TypeScript 使用 <code v-pre>&lt;script setup&gt;</code>，也可以使用纯类型标注来声明触发的事件：</p>
<blockquote>
<p>defineProps 或 defineEmits 只能是要么使用运行时声明，要么使用类型声明。同时使用两种声明方式会导致编译报错。</p>
<p>讲解：左边的相当于函数参数名，第一个参数的值就是emit事件名，后面的任意多个参数都是emit事件的传递参数内容。剩下的就是TS相关内容，此处不对TS进行深入讲解，不懂的自己去学。</p>
<p>这里函数的参数名叫什么不重要，重要的是<code v-pre>ts类型</code>！第一个参数的ts类型值是<code v-pre>emit 事件名</code>，后面的参数 ts类型 则是emit传递的参数类型验证！提供编辑器报错功能。</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">'ts'</span><span class="token operator">></span>
<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token generic-function"><span class="token function">defineEmits</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">{</span>
  <span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token string">'change'</span><span class="token punctuation">,</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
  <span class="token punctuation">(</span>e<span class="token operator">:</span> <span class="token string">'delete'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> vlaue2<span class="token operator">:</span><span class="token builtin">number</span> <span class="token punctuation">,</span>value3<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'delete'</span><span class="token punctuation">,</span> <span class="token string">'123'</span><span class="token punctuation">,</span> <span class="token number">5666</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token operator">*</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用类型声明的时候，静态分析会自动生成等效的运行时声明，以消除双重声明的需要并仍然确保正确的运行时行为。</p>
<p>TypeScript 用户请参考：<a href="https://staging-cn.vuejs.org/guide/typescript/composition-api.html#typing-component-emits" target="_blank" rel="noopener noreferrer">如何为组件所抛出事件标注类型<ExternalLinkIcon/></a></p>
<p>尽管事件声明是可选的，我们还是推荐你完整地声明所有要触发的事件，以此在代码中作为文档记录组件的用法。同时，事件声明能让 Vue 更好地将事件和<a href="https://staging-cn.vuejs.org/guide/components/attrs.html#v-on-listener-inheritance" target="_blank" rel="noopener noreferrer">透传 attribute<ExternalLinkIcon/></a> 作出区分，从而避免一些由第三方代码触发的自定义 DOM 事件所导致的边界情况。</p>
<h3 id="_2-4-事件校验" tabindex="-1"><a class="header-anchor" href="#_2-4-事件校验" aria-hidden="true">#</a> 2.4 事件校验</h3>
<p>和对 props 添加类型校验的方式类似，所有触发的事件也可以使用对象形式来描述。</p>
<p>要为事件添加校验，那么事件可以被赋值为一个函数，接受的参数就是抛出事件时传入 <code v-pre>emit</code> 的内容，返回一个布尔值来表明事件是否合法。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">></span>
<span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 没有校验</span>
  <span class="token literal-property property">click</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

  <span class="token comment">// 校验 submit 事件</span>
  <span class="token function-variable function">submit</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>email <span class="token operator">&amp;&amp;</span> password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">'Invalid submit event payload!'</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">submitForm</span><span class="token punctuation">(</span><span class="token parameter">email<span class="token punctuation">,</span> password</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'submit'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-配合-v-model-使用" tabindex="-1"><a class="header-anchor" href="#_2-5-配合-v-model-使用" aria-hidden="true">#</a> 2.5 配合 <code v-pre>v-model</code> 使用</h3>
<blockquote>
<ul>
<li>使用限制：</li>
</ul>
<ol>
<li><code v-pre>&lt;input&gt;</code></li>
<li><code v-pre>&lt;select&gt;</code></li>
<li><code v-pre>&lt;textarea&gt;</code></li>
<li><code v-pre>components</code></li>
</ol>
<ul>
<li>修饰符:</li>
</ul>
<ol>
<li><code v-pre>.lazy</code> - 监听 <code v-pre>change</code> 而不是 <code v-pre>input</code> 事件</li>
<li><code v-pre>.number</code> - 输入字符串转为有效的数字</li>
<li><code v-pre>.trim</code> - 输入首尾空格过滤</li>
</ol>
</blockquote>
<p>自定义事件可以用于开发支持 <code v-pre>v-model</code> 的自定义表单组件。回忆一下 <code v-pre>v-model</code> 的用法：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>searchText<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的代码其实等价于下面这段（编译器会对 <code v-pre>v-model</code> 进行展开）：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
  <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>searchText<span class="token punctuation">"</span></span>
  <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>searchText = $event.target.value<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而当使用在一个组件上时，<code v-pre>v-model</code> 会被展开为如下的形式：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CustomInput</span>
  <span class="token attr-name">:modelValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>searchText<span class="token punctuation">"</span></span>
  <span class="token attr-name"><span class="token namespace">@update:</span>modelValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>newValue => searchText = newValue<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要让这个例子实际工作起来，<code v-pre>&lt;CustomInput&gt;</code> 组件内部需要做两件事：</p>
<ol>
<li>将内部原生 <code v-pre>input</code> 元素的 <code v-pre>value</code> attribute 绑定到 <code v-pre>modelValue</code> prop</li>
<li>输入新的值时在 <code v-pre>input</code> 元素上触发 <code v-pre>update:modelValue</code> 事件</li>
</ol>
<p>这里是相应的代码：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!-- CustomInput.vue --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'modelValue'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'update:modelValue'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
    <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modelValue<span class="token punctuation">"</span></span>
    <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$emit('update:modelValue', $event.target.value)<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在 <code v-pre>v-model</code> 也可以在这个组件上正常工作了：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CustomInput</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>searchText<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBDdXN0b21JbnB1dCBmcm9tICcuL0N1c3RvbUlucHV0LnZ1ZSdcbiAgXG5jb25zdCBtZXNzYWdlID0gcmVmKCdoZWxsbycpXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8Q3VzdG9tSW5wdXQgdi1tb2RlbD1cIm1lc3NhZ2VcIiAvPiB7eyBtZXNzYWdlIH19XG48L3RlbXBsYXRlPiIsImltcG9ydC1tYXAuanNvbiI6IntcbiAgXCJpbXBvcnRzXCI6IHtcbiAgICBcInZ1ZVwiOiBcImh0dHBzOi8vc2ZjLnZ1ZWpzLm9yZy92dWUucnVudGltZS5lc20tYnJvd3Nlci5qc1wiXG4gIH1cbn0iLCJDdXN0b21JbnB1dC52dWUiOiI8c2NyaXB0IHNldHVwPlxuZGVmaW5lUHJvcHMoWydtb2RlbFZhbHVlJ10pXG5kZWZpbmVFbWl0cyhbJ3VwZGF0ZTptb2RlbFZhbHVlJ10pXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8aW5wdXRcbiAgICA6dmFsdWU9XCJtb2RlbFZhbHVlXCJcbiAgICBAaW5wdXQ9XCIkZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gIC8+XG48L3RlbXBsYXRlPiJ9" target="_blank" rel="noopener noreferrer">在演练场中尝试一下<ExternalLinkIcon/></a></p>
<p><code v-pre>v-model</code> 的参数<a href="https://staging-cn.vuejs.org/guide/components/events.html#v-model-arguments" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a></p>
<p>默认情况下，<code v-pre>v-model</code> 在组件上都是使用 <code v-pre>modelValue</code> 作为 prop，并以 <code v-pre>update:modelValue</code> 作为对应的事件。我们可以通过给 <code v-pre>v-model</code> 指定一个参数来更改这些名字：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token attr-name"><span class="token namespace">v-model:</span>title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bookTitle<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在这个例子中，子组件应声明一个 <code v-pre>title</code> prop，并通过触发 <code v-pre>update:title</code> 事件更新父组件值：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!-- MyComponent.vue --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'title'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'update:title'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>
    <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span>
    <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$emit('update:title', $event.target.value)<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBNeUNvbXBvbmVudCBmcm9tICcuL015Q29tcG9uZW50LnZ1ZSdcbiAgXG5jb25zdCB0aXRsZSA9IHJlZigndi1tb2RlbCBhcmd1bWVudCBleGFtcGxlJylcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxoMT57eyB0aXRsZSB9fTwvaDE+XG4gIDxNeUNvbXBvbmVudCB2LW1vZGVsOnRpdGxlPVwidGl0bGVcIiAvPlxuPC90ZW1wbGF0ZT4iLCJpbXBvcnQtbWFwLmpzb24iOiJ7XG4gIFwiaW1wb3J0c1wiOiB7XG4gICAgXCJ2dWVcIjogXCJodHRwczovL3NmYy52dWVqcy5vcmcvdnVlLnJ1bnRpbWUuZXNtLWJyb3dzZXIuanNcIlxuICB9XG59IiwiTXlDb21wb25lbnQudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmRlZmluZVByb3BzKFsndGl0bGUnXSlcbmRlZmluZUVtaXRzKFsndXBkYXRlOnRpdGxlJ10pXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8aW5wdXRcbiAgICB0eXBlPVwidGV4dFwiXG4gICAgOnZhbHVlPVwidGl0bGVcIlxuICAgIEBpbnB1dD1cIiRlbWl0KCd1cGRhdGU6dGl0bGUnLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gIC8+XG48L3RlbXBsYXRlPiJ9" target="_blank" rel="noopener noreferrer">在演练场中尝试一下<ExternalLinkIcon/></a></p>
<h3 id="_2-6-关于组件使用原生事件" tabindex="-1"><a class="header-anchor" href="#_2-6-关于组件使用原生事件" aria-hidden="true">#</a> 2.6 关于组件使用原生事件</h3>
<blockquote>
<p>这是我目前想到的，如果有错误，请指出</p>
</blockquote>
<p><strong style="color:#DD5145">Vue3移除</strong><code v-pre>v-on.native</code>修饰符，那如何在组件上触发原生事件呢？</p>
<p>其实可以利用属性继承，详细可以看<code v-pre>17.1 Attributes 继承</code></p>
<p><strong>注意要写根标签，因为这个事件只会继承在根标签</strong>，<strong>因为Vue3不强制写根标签</strong>，所以会出现多个标签，这时这个事件找不到根标签会发出警告，解决的方法在<code v-pre>Attributes 继承</code>里面说了</p>
<p>父组件<code v-pre>App.vue</code></p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>父组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Son</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>test<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Son</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Son <span class="token keyword">from</span> <span class="token string">'./components/Son.vue'</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件<code v-pre>Son.vue</code></p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>子组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://i0.hdslb.com/bfs/album/b923af6cbf3547f18b1800321b6c53ce7bbfca71.png" alt="image-20220809130712485"></p>
<h3 id="_2-7-vue3中事件总线" tabindex="-1"><a class="header-anchor" href="#_2-7-vue3中事件总线" aria-hidden="true">#</a> 2.7 <code v-pre>vue3</code>中事件总线</h3>
<h4 id="_2-7-1-插件" tabindex="-1"><a class="header-anchor" href="#_2-7-1-插件" aria-hidden="true">#</a> 2.7.1 插件</h4>
<p>1.在vue3中，创建方法改成了createApp({})，prototype属性也被取消了，因此无法使用之前Vue.prototype.$bus = new Vue()的方式使用事务总线。</p>
<p>2.且在vue3中移除了$on,$off方法，因此官方推荐：事件总线模式可以被替换为使用外部的、实现了事件触发器接口的库，例如 mitt 或 tiny-emitter。</p>
<p>3.首先安装mitt：npm install --save mitt</p>
<p>4.在代码中使用：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> mitt <span class="token keyword">from</span> <span class="token string">"mitt"</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>createApp<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span>
 
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token comment">//正常配置</span>
<span class="token comment">//挂载事务总线</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$bus <span class="token operator">=</span> <span class="token function">mitt</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 
<span class="token comment">//在组件A中使用事务总线触发某个动作</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  instance<span class="token punctuation">.</span>proxy<span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'receive'</span><span class="token punctuation">,</span> <span class="token string">'你是一个瓜皮'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token comment">//在组件B中监听动作的发生</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// const instance = getCurrentInstance();</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> $bus <span class="token punctuation">}</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>appContext<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties

$bus<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'receive'</span><span class="token punctuation">,</span> <span class="token parameter">str</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'来数据了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  data<span class="token punctuation">.</span>value <span class="token operator">=</span> str<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>对于ts文件的写法</strong></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token keyword">import</span> mitt <span class="token keyword">from</span> <span class="token string">'mitt'</span>
 
<span class="token keyword">const</span> Mitt <span class="token operator">=</span> <span class="token function">mitt</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 
<span class="token comment">//TypeScript注册</span>
<span class="token comment">// 由于必须要拓展ComponentCustomProperties类型才能获得类型提示</span>
<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"vue"</span> <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ComponentCustomProperties</span> <span class="token punctuation">{</span>
        $bus<span class="token operator">:</span> <span class="token keyword">typeof</span> Mitt
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
 
<span class="token comment">//Vue3挂载全局API</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$Bus <span class="token operator">=</span> Mit
 
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-7-2-手写" tabindex="-1"><a class="header-anchor" href="#_2-7-2-手写" aria-hidden="true">#</a> 2.7.2 手写</h4>
<p><code v-pre>Bus.ts</code></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Console <span class="token keyword">from</span> <span class="token string">'console'</span>


<span class="token keyword">type</span> <span class="token class-name">BusClass</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">emit</span><span class="token operator">:</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">,</span>
    <span class="token function-variable function">on</span><span class="token operator">:</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> callback<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">CallbackName</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">symbol</span>

<span class="token keyword">type</span> <span class="token class-name">List</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>key<span class="token operator">:</span> CallbackName<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">Function</span><span class="token operator">></span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Bus</span> <span class="token keyword">implements</span> <span class="token class-name">BusClass</span> <span class="token punctuation">{</span>
    list<span class="token operator">:</span> List

    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">emit</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> callbacks<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">Function</span><span class="token operator">></span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span>name<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>callbacks <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">event "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" is not bound</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        callbacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>callback <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'emit'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
            <span class="token function">callback</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>  <span class="token comment">// this 为 Bus.ts 导出的实例, on方法如果使用ArrowFunction, 则无法使用this</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">on</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> callback<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> callbacks<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">Function</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        callbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> callbacks
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Bus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>挂载到全局Vue config
或者单独的页面引入 import Bus from ‘bus.ts’
Bus.emit 触发，Bus.on监听</p>
</blockquote>
<p><img src="https://i0.hdslb.com/bfs/album/f94abe842d83839d9c7f0f7852094e228f94b3c2.png" alt="image-20220810185533253"></p>
<p><code v-pre>main.ts</code></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token keyword">import</span> Bus <span class="token keyword">from</span> <span class="token string">"./utils/Bus"</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$bus <span class="token operator">=</span> Bus<span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方法和插件一模一样</p>
</div></template>


