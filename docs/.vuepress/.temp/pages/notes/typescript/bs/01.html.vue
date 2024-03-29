<template><div><h2 id="一、什么是-typescript" tabindex="-1"><a class="header-anchor" href="#一、什么是-typescript" aria-hidden="true">#</a> 一、什么是 typescript？</h2>
<p>TypeScript 是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>TypeScript 提供最新的和不断发展的 JavaScript 特性，包括那些来自 2015 年的 ECMAScript 和未来的提案中的特性，比如异步功能和 Decorators，以帮助建立健壮的组件。下图显示了 TypeScript 与 ES5、ES2015 和 ES2016 之间的关系：</p>
</div>
<p><img src="@source/notes/assets/0.1.png" alt="1"></p>
<h3 id="_1-1-typescript-与-javascript-区别" tabindex="-1"><a class="header-anchor" href="#_1-1-typescript-与-javascript-区别" aria-hidden="true">#</a> 1.1 typescript 与 javascript 区别</h3>
<table>
<thead>
<tr>
<th style="text-align:center">TypeScript</th>
<th style="text-align:center">JavaScript</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">JavaScript 的超集用于解决大型项目的代码复杂性</td>
<td style="text-align:center">一种脚本语言，用于创建动态网页</td>
</tr>
<tr>
<td style="text-align:center">可以在编译期间发现并纠正错误</td>
<td style="text-align:center">作为一种解释型语言，只能在运行时发现错误</td>
</tr>
<tr>
<td style="text-align:center">强类型，支持静态和动态类型</td>
<td style="text-align:center">弱类型，没有静态类型选项</td>
</tr>
<tr>
<td style="text-align:center">最终被编译成 JavaScript 代码，使浏览器可以理解</td>
<td style="text-align:center">可以直接在浏览器中使用</td>
</tr>
<tr>
<td style="text-align:center">支持模块、泛型和接口</td>
<td style="text-align:center">不支持模块，泛型或接口</td>
</tr>
<tr>
<td style="text-align:center">社区的支持仍在增长，而且还不是很大</td>
<td style="text-align:center">大量的社区支持以及大量文档和解决问题的支持｜</td>
</tr>
</tbody>
</table>
<h3 id="_1-2-获取-typescript" tabindex="-1"><a class="header-anchor" href="#_1-2-获取-typescript" aria-hidden="true">#</a> 1.2 获取 TypeScript</h3>
<p>命令行的 TypeScript 编译器可以使用 npm 包管理器来安装。</p>
<ul>
<li>1.安装 TypeScript<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$ npm install -g typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>2.验证 TypeScript</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>  $ tsc -v
# Version 4.0.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>3.编译 TypeScript 文件</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>  $ tsc helloworld.ts

# helloworld.ts => helloworld.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，对刚入门 TypeScript 的小伙伴来说，也可以不用安装 typescript，而是直接使用线上的 <a href="https://www.typescriptlang.org/play/" target="_blank" rel="noopener noreferrer">TypeScript Playground<ExternalLinkIcon/></a> 来学习新的语法或新特性。通过配置 TS Config 的 Target，可以设置不同的编译目标，从而编译生成不同的目标代码。</p>
<p>下图示例中所设置的编译目标是 ES5：
<img src="@source/notes/assets/0.2.jpg" alt="2"></p>
<h3 id="_1-3-典型-typescript-编译流程" tabindex="-1"><a class="header-anchor" href="#_1-3-典型-typescript-编译流程" aria-hidden="true">#</a> 1.3 典型 Typescript 编译流程</h3>
<p><img src="@source/notes/typescript/assets/0.3.jpeg" alt="4"></p>
<p>如你所见，在上图中包含 3 个 ts 文件：a.ts、b.ts 和 c.ts。这些文件将被 TypeScript 编译器，根据配置的编译选项编译成 3 个 js 文件，即 a.js、b.js 和 c.js。对于大多数使用 TypeScript 开发的 Web 项目，我们还会对编译生成的 js 文件进行打包处理，然后在进行部署。</p>
<h3 id="_1-4-typescript-初体验" tabindex="-1"><a class="header-anchor" href="#_1-4-typescript-初体验" aria-hidden="true">#</a> 1.4 Typescript 初体验</h3>
<p>新建一个 hello.ts 文件，并输入以下内容：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span>person<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">"Hello, "</span> <span class="token operator">+</span> person<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">"TypeScript"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后执行 tsc hello.ts 命令，之后会生成一个编译好的文件 hello.js：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token string">"use strict"</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">"Hello, "</span> <span class="token operator">+</span> person<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">"TypeScript"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>观察以上编译后的输出结果，我们发现 person 参数的类型信息在编译后被擦除了。TypeScript 只会在编译阶段对类型进行静态检查，如果发现有错误，编译时就会报错。而在运行时，编译生成的 JS 与普通的 JavaScript 文件一样，并不会进行类型检查。</p>
</div></template>


