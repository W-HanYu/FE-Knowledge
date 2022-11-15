<template><div><h1 id="_4-编译选项" tabindex="-1"><a class="header-anchor" href="#_4-编译选项" aria-hidden="true">#</a> 4.编译选项</h1>
<blockquote>
<p>tsconfig.json 是 TypeScript 项目的配置文件。如果一个目录下存在一个 tsconfig.json 文件，那么往往意味着这个目录就是 TypeScript 项目的根目录。</p>
<p>tsconfig.json 包含 TypeScript 编译的相关配置，通过更改编译配置项，我们可以让 TypeScript 编译出 ES6、ES5、node 的代码。</p>
<p><strong>tsconfig.json 重要字段</strong></p>
<ul>
<li>files - 设置要编译的文件的名称；</li>
<li>include - 设置需要进行编译的文件，支持路径模式匹配；</li>
<li>exclude - 设置无需进行编译的文件，支持路径模式匹配；</li>
<li>compilerOptions - 设置与编译流程相关的选项。</li>
</ul>
</blockquote>
<ul>
<li>
<p>自动编译文件</p>
<ul>
<li>
<p>编译文件时，使用 -w 指令后，TS编译器会自动监视文件的变化，并在文件发生变化时对文件进行重新编译。</p>
</li>
<li>
<p>示例：</p>
<ul>
<li>
<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre v-pre class="language-powershell"><code>tsc xxx<span class="token punctuation">.</span>ts <span class="token operator">-</span>w
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
<li>
<p>自动编译整个项目</p>
<ul>
<li>
<p>如果直接使用tsc指令，则可以自动将当前项目下的所有ts文件编译为js文件。</p>
</li>
<li>
<p>但是能直接使用tsc命令的前提时，要先在项目根目录下创建一个ts的配置文件 tsconfig.json</p>
</li>
<li>
<p>tsconfig.json是一个JSON文件，添加配置文件后，只需只需 tsc 命令即可完成对整个项目的编译</p>
</li>
<li>
<p>配置选项：</p>
<ul>
<li>
<p>include</p>
<ul>
<li>
<p>定义希望被编译文件所在的目录</p>
</li>
<li>
<p>默认值：[&quot;**/*&quot;]</p>
</li>
<li>
<p>示例：</p>
<ul>
<li>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"include"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">"src/**/*"</span><span class="token punctuation">,</span> <span class="token string">"tests/**/*"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>上述示例中，所有src目录和tests目录下的文件都会被编译</p>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>exclude</p>
<ul>
<li>
<p>定义需要排除在外的目录</p>
</li>
<li>
<p>默认值：[&quot;node_modules&quot;, &quot;bower_components&quot;, &quot;jspm_packages&quot;]</p>
</li>
<li>
<p>示例：</p>
<ul>
<li>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"exclude"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./src/hello/**/*"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>上述示例中，src下hello目录下的文件都不会被编译</p>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>extends</p>
<ul>
<li>
<p>定义被继承的配置文件</p>
</li>
<li>
<p>示例：</p>
<ul>
<li>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"extends"</span><span class="token operator">:</span> <span class="token string">"./configs/base"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>上述示例中，当前配置文件中会自动包含config目录下base.json中的所有配置信息</p>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>files</p>
<ul>
<li>
<p>指定被编译文件的列表，只有需要编译的文件少时才会用到</p>
</li>
<li>
<p>示例：</p>
<ul>
<li>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"files"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"core.ts"</span><span class="token punctuation">,</span>
    <span class="token string">"sys.ts"</span><span class="token punctuation">,</span>
    <span class="token string">"types.ts"</span><span class="token punctuation">,</span>
    <span class="token string">"scanner.ts"</span><span class="token punctuation">,</span>
    <span class="token string">"parser.ts"</span><span class="token punctuation">,</span>
    <span class="token string">"utilities.ts"</span><span class="token punctuation">,</span>
    <span class="token string">"binder.ts"</span><span class="token punctuation">,</span>
    <span class="token string">"checker.ts"</span><span class="token punctuation">,</span>
    <span class="token string">"tsc.ts"</span>
  <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>列表中的文件都会被TS编译器所编译</p>
</li>
</ul>
</li>
<li>
<p>compilerOptions</p>
<ul>
<li>
<p>编译选项是配置文件中非常重要也比较复杂的配置选项</p>
</li>
<li>
<p>在compilerOptions中包含多个子选项，用来完成对编译的配置</p>
<ul>
<li>
<p>项目选项</p>
<ul>
<li>
<p>target</p>
<ul>
<li>
<p>设置ts代码编译的目标版本</p>
</li>
<li>
<p>可选值：</p>
<ul>
<li>ES3（默认）、ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext</li>
</ul>
</li>
<li>
<p>示例：</p>
<ul>
<li>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"ES6"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>如上设置，我们所编写的ts代码将会被编译为ES6版本的js代码</p>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>lib</p>
<ul>
<li>
<p>指定代码运行时所包含的库（宿主环境）</p>
</li>
<li>
<p>可选值：</p>
<ul>
<li>ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext、DOM、WebWorker、ScriptHost ......</li>
</ul>
</li>
<li>
<p>示例：</p>
<ul>
<li>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"ES6"</span><span class="token punctuation">,</span>
    <span class="token property">"lib"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"ES6"</span><span class="token punctuation">,</span> <span class="token string">"DOM"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"outDir"</span><span class="token operator">:</span> <span class="token string">"dist"</span><span class="token punctuation">,</span>
    <span class="token property">"outFile"</span><span class="token operator">:</span> <span class="token string">"dist/aa.js"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
<li>
<p>module</p>
<ul>
<li>
<p>设置编译后代码使用的模块化系统</p>
</li>
<li>
<p>可选值：</p>
<ul>
<li>CommonJS、UMD、AMD、System、ES2020、ESNext、None</li>
</ul>
</li>
<li>
<p>示例：</p>
<ul>
<li>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"module"</span><span class="token operator">:</span> <span class="token string">"CommonJS"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
<li>
<p>outDir</p>
<ul>
<li>
<p>编译后文件的所在目录</p>
</li>
<li>
<p>默认情况下，编译后的js文件会和ts文件位于相同的目录，设置outDir后可以改变编译后文件的位置</p>
</li>
<li>
<p>示例：</p>
<ul>
<li>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"outDir"</span><span class="token operator">:</span> <span class="token string">"dist"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>设置后编译后的js文件将会生成到dist目录</p>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>outFile</p>
<ul>
<li>
<p>将所有的文件编译为一个js文件</p>
</li>
<li>
<p>默认会将所有的编写在全局作用域中的代码合并为一个js文件，如果module制定了None、System或AMD则会将模块一起合并到文件之中</p>
</li>
<li>
<p>示例：</p>
<ul>
<li>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"outFile"</span><span class="token operator">:</span> <span class="token string">"dist/app.js"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
<li>
<p>rootDir</p>
<ul>
<li>
<p>指定代码的根目录，默认情况下编译后文件的目录结构会以最长的公共目录为根目录，通过rootDir可以手动指定根目录</p>
</li>
<li>
<p>示例：</p>
<ul>
<li>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"rootDir"</span><span class="token operator">:</span> <span class="token string">"./src"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
<li>
<p>allowJs</p>
<ul>
<li>是否对js文件编译</li>
</ul>
</li>
<li>
<p>checkJs</p>
<ul>
<li>
<p>是否对js文件进行检查</p>
</li>
<li>
<p>示例：</p>
<ul>
<li>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"allowJs"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"checkJs"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
<li>
<p>removeComments</p>
<ul>
<li>是否删除注释</li>
<li>默认值：false</li>
</ul>
</li>
<li>
<p>noEmit</p>
<ul>
<li>不对代码进行编译</li>
<li>默认值：false</li>
</ul>
</li>
<li>
<p>sourceMap</p>
<ul>
<li>是否生成sourceMap</li>
<li>默认值：false</li>
</ul>
</li>
</ul>
</li>
<li>
<p>严格检查</p>
<ul>
<li>strict
<ul>
<li>启用所有的严格检查，默认值为true，设置后相当于开启了所有的严格检查</li>
</ul>
</li>
<li>alwaysStrict
<ul>
<li>总是以严格模式对代码进行编译</li>
</ul>
</li>
<li>noImplicitAny
<ul>
<li>禁止隐式的any类型</li>
</ul>
</li>
<li>noImplicitThis
<ul>
<li>禁止类型不明确的this(比如函数时window调用)</li>
</ul>
</li>
<li>strictBindCallApply
<ul>
<li>严格检查bind、call和apply的参数列表</li>
</ul>
</li>
<li>strictFunctionTypes
<ul>
<li>严格检查函数的类型</li>
</ul>
</li>
<li>strictNullChecks
<ul>
<li>严格的空值检查</li>
</ul>
</li>
<li>strictPropertyInitialization
<ul>
<li>严格检查属性是否初始化</li>
</ul>
</li>
</ul>
</li>
<li>
<p>额外检查</p>
<ul>
<li>noFallthroughCasesInSwitch
<ul>
<li>检查switch语句包含正确的break</li>
</ul>
</li>
<li>noImplicitReturns
<ul>
<li>检查函数没有隐式的返回值</li>
</ul>
</li>
<li>noUnusedLocals
<ul>
<li>检查未使用的局部变量</li>
</ul>
</li>
<li>noUnusedParameters
<ul>
<li>检查未使用的参数</li>
</ul>
</li>
</ul>
</li>
<li>
<p>高级</p>
<ul>
<li>allowUnreachableCode
<ul>
<li>检查不可达代码</li>
<li>可选值：
<ul>
<li>true，忽略不可达代码</li>
<li>false，不可达代码将引起错误</li>
</ul>
</li>
</ul>
</li>
<li>noEmitOnError
<ul>
<li>有错误的情况下不进行编译</li>
<li>默认值：false</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<p><strong>超哥的compilerOptions 选项</strong></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
<span class="token comment">/*
  tsconfig.json是ts编译器的配置文件，ts编译器可以根据它的信息来对代码进行编译
    "include" 用来指定哪些ts文件需要被编译
      路径：** 表示任意目录
            * 表示任意文件
    "exclude" 不需要被编译的文件目录
        默认值：["node_modules", "bower_components", "jspm_packages"]

*/</span>
  <span class="token property">"include"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"./src/**/*"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">//  "exclude": [</span>
<span class="token comment">//    "./src/hello/**/*"</span>
<span class="token comment">//  ]</span>

  <span class="token comment">/*
    compilerOptions 编译器的选项
  */</span>
  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>

    <span class="token comment">// target 用来指定ts被编译为的ES的版本</span>
    <span class="token comment">// 'es3', 'es5', 'es6', 'es2015', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'esnext'</span>
    <span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"es2015"</span><span class="token punctuation">,</span>
    <span class="token comment">// module 指定要使用的模块化的规范</span>
    <span class="token comment">// 'none', 'commonjs', 'amd', 'system', 'umd', 'es6', 'es2015', 'es2020', 'esnext'</span>
    <span class="token property">"module"</span><span class="token operator">:</span> <span class="token string">"es2015"</span><span class="token punctuation">,</span>
    <span class="token comment">// lib用来指定项目中要使用的库(默认即可)</span>
<span class="token comment">//    "lib": []</span>
    <span class="token comment">// outDir 用来指定编译后文件所在的目录</span>
    <span class="token property">"outDir"</span><span class="token operator">:</span> <span class="token string">"./dist"</span><span class="token punctuation">,</span>
    <span class="token comment">// 将代码合并为一个文件</span>
    <span class="token comment">// 设置outFile后，所有的全局作用域中的代码会合并到同一个文件中</span>
    <span class="token comment">//"outFile": "./dist/app.js"</span>

    <span class="token comment">// 是否对js文件进行编译，默认是false</span>
<span class="token comment">//    "allowJs": true,</span>
    <span class="token comment">// 是否检查js代码是否符合语法规范，默认是false</span>
<span class="token comment">//    "checkJs": true,</span>
    <span class="token comment">// 是否移除注释</span>
    <span class="token property">"removeComments"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 不生成编译后的文件</span>
    <span class="token property">"noEmit"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>


    <span class="token comment">// 当有错误时不生成编译后的文件</span>
    <span class="token property">"noEmitOnError"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">// 所有严格检查的总开关</span>
    <span class="token property">"strict"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">// 用来设置编译后的文件是否使用严格模式，默认false</span>
    <span class="token property">"alwaysStrict"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">// 不允许隐式的any类型</span>
    <span class="token property">"noImplicitAny"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">// 不允许不明确类型的this</span>
    <span class="token property">"noImplicitThis"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">// 严格的检查空值</span>
    <span class="token property">"strictNullChecks"</span><span class="token operator">:</span> <span class="token boolean">true</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>网上找的compilerOptions 选项</strong></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  
    <span class="token comment">/* 基本选项 */</span>
    <span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"es5"</span><span class="token punctuation">,</span>                       <span class="token comment">// 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'</span>
    <span class="token property">"module"</span><span class="token operator">:</span> <span class="token string">"commonjs"</span><span class="token punctuation">,</span>                  <span class="token comment">// 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'</span>
    <span class="token property">"lib"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                             <span class="token comment">// 指定要包含在编译中的库文件</span>
    <span class="token property">"allowJs"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                       <span class="token comment">// 允许编译 javascript 文件</span>
    <span class="token property">"checkJs"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                       <span class="token comment">// 报告 javascript 文件中的错误</span>
    <span class="token property">"jsx"</span><span class="token operator">:</span> <span class="token string">"preserve"</span><span class="token punctuation">,</span>                     <span class="token comment">// 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'</span>
    <span class="token property">"declaration"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                   <span class="token comment">// 生成相应的 '.d.ts' 文件</span>
    <span class="token property">"sourceMap"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                     <span class="token comment">// 生成相应的 '.map' 文件</span>
    <span class="token property">"outFile"</span><span class="token operator">:</span> <span class="token string">"./"</span><span class="token punctuation">,</span>                       <span class="token comment">// 将输出文件合并为一个文件</span>
    <span class="token property">"outDir"</span><span class="token operator">:</span> <span class="token string">"./"</span><span class="token punctuation">,</span>                        <span class="token comment">// 指定输出目录</span>
    <span class="token property">"rootDir"</span><span class="token operator">:</span> <span class="token string">"./"</span><span class="token punctuation">,</span>                       <span class="token comment">// 用来控制输出目录结构 --outDir.</span>
    <span class="token property">"removeComments"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                <span class="token comment">// 删除编译后的所有的注释</span>
    <span class="token property">"noEmit"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                        <span class="token comment">// 不生成输出文件</span>
    <span class="token property">"importHelpers"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                 <span class="token comment">// 从 tslib 导入辅助工具函数</span>
    <span class="token property">"isolatedModules"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>               <span class="token comment">// 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.</span>

    <span class="token comment">/* 严格的类型检查选项 */</span>
    <span class="token property">"strict"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                        <span class="token comment">// 启用所有严格类型检查选项</span>
    <span class="token property">"noImplicitAny"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                 <span class="token comment">// 在表达式和声明上有隐含的 any类型时报错</span>
    <span class="token property">"strictNullChecks"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>              <span class="token comment">// 启用严格的 null 检查</span>
    <span class="token property">"noImplicitThis"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                <span class="token comment">// 当 this 表达式值为 any 类型的时候，生成一个错误</span>
    <span class="token property">"alwaysStrict"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                  <span class="token comment">// 以严格模式检查每个模块，并在每个文件里加入 'use strict'</span>

    <span class="token comment">/* 额外的检查 */</span>
    <span class="token property">"noUnusedLocals"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                <span class="token comment">// 有未使用的变量时，抛出错误</span>
    <span class="token property">"noUnusedParameters"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>            <span class="token comment">// 有未使用的参数时，抛出错误</span>
    <span class="token property">"noImplicitReturns"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>             <span class="token comment">// 并不是所有函数里的代码都有返回值时，抛出错误</span>
    <span class="token property">"noFallthroughCasesInSwitch"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>    <span class="token comment">// 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）</span>

    <span class="token comment">/* 模块解析选项 */</span>
    <span class="token property">"moduleResolution"</span><span class="token operator">:</span> <span class="token string">"node"</span><span class="token punctuation">,</span>            <span class="token comment">// 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)</span>
    <span class="token property">"baseUrl"</span><span class="token operator">:</span> <span class="token string">"./"</span><span class="token punctuation">,</span>                       <span class="token comment">// 用于解析非相对模块名称的基目录</span>
    <span class="token property">"paths"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>                           <span class="token comment">// 模块名到基于 baseUrl 的路径映射的列表</span>
    <span class="token property">"rootDirs"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                        <span class="token comment">// 根文件夹列表，其组合内容表示项目运行时的结构内容</span>
    <span class="token property">"typeRoots"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                       <span class="token comment">// 包含类型声明的文件列表</span>
    <span class="token property">"types"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>                           <span class="token comment">// 需要包含的类型声明文件名列表</span>
    <span class="token property">"allowSyntheticDefaultImports"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 允许从没有设置默认导出的模块中默认导入。</span>

    <span class="token comment">/* Source Map Options */</span>
    <span class="token property">"sourceRoot"</span><span class="token operator">:</span> <span class="token string">"./"</span><span class="token punctuation">,</span>                    <span class="token comment">// 指定调试器应该找到 TypeScript 文件而不是源文件的位置</span>
    <span class="token property">"mapRoot"</span><span class="token operator">:</span> <span class="token string">"./"</span><span class="token punctuation">,</span>                       <span class="token comment">// 指定调试器应该找到映射文件而不是生成文件的位置</span>
    <span class="token property">"inlineSourceMap"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>               <span class="token comment">// 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件</span>
    <span class="token property">"inlineSources"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                 <span class="token comment">// 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性</span>

    <span class="token comment">/* 其他选项 */</span>
    <span class="token property">"experimentalDecorators"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">// 启用装饰器</span>
    <span class="token property">"emitDecoratorMetadata"</span><span class="token operator">:</span> <span class="token boolean">true</span>          <span class="token comment">// 为装饰器提供元数据的支持</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


