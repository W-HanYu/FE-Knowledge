import{_ as n,o as s,c as a,e}from"./app.713299e2.js";const p={},t=e(`<h1 id="_5-webpack配置" tabindex="-1"><a class="header-anchor" href="#_5-webpack配置" aria-hidden="true">#</a> 5.webpack配置</h1><h2 id="_5-1-项目基本配置" tabindex="-1"><a class="header-anchor" href="#_5-1-项目基本配置" aria-hidden="true">#</a> 5.1 项目基本配置</h2><ul><li><p>通常情况下，实际开发中我们都需要使用构建工具对代码进行打包，TS同样也可以结合构建工具一起使用，下边以webpack为例介绍一下如何结合构建工具使用TS。</p></li><li><p>步骤：</p><ol><li><p>初始化项目</p><ul><li>进入项目根目录，执行命令 <code> npm init -y</code><ul><li>主要作用：创建package.json文件</li></ul></li></ul></li><li><p>下载构建工具</p><ul><li><code>npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin</code><ul><li>共安装了7个包 <ul><li>webpack <ul><li>构建工具webpack</li></ul></li><li>webpack-cli <ul><li>webpack的命令行工具</li></ul></li><li>webpack-dev-server <ul><li>webpack的开发服务器</li></ul></li><li>typescript <ul><li>ts编译器</li></ul></li><li>ts-loader <ul><li>ts加载器，用于在webpack中编译ts文件</li></ul></li><li>html-webpack-plugin <ul><li>webpack中html插件，用来自动创建html文件</li></ul></li><li>clean-webpack-plugin <ul><li>webpack中的清除插件，每次构建都会先清除目录</li></ul></li></ul></li></ul></li></ul></li><li><p>根目录下创建webpack的配置文件webpack.config.js</p><ul><li><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引入一个包</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 引入html插件</span>
<span class="token keyword">const</span> HTMLWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// webpack中的所有的配置信息都应该写在module.exports中</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token comment">// 指定入口文件</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.ts&quot;</span><span class="token punctuation">,</span>

    <span class="token comment">// 指定打包文件所在目录</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 指定打包文件的目录</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// 打包后文件的文件</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;bundle.js&quot;</span><span class="token punctuation">,</span>

        <span class="token comment">// 告诉webpack不使用箭头</span>
        <span class="token literal-property property">environment</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">arrowFunction</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        
        <span class="token literal-property property">clean</span><span class="token operator">:</span><span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 指定webpack打包时要使用模块</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 指定要加载的规则</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// test指定的是规则生效的文件</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.ts$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token comment">// 要使用的loader</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                     <span class="token comment">// 配置babel</span>
                     <span class="token punctuation">{</span>
                         <span class="token comment">// 指定加载器</span>
                         <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
                         <span class="token comment">// 设置babel</span>
                         <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                             <span class="token comment">// 设置预定义的环境</span>
                             <span class="token literal-property property">presets</span><span class="token operator">:</span><span class="token punctuation">[</span>
                                 <span class="token punctuation">[</span>
                                     <span class="token comment">// 指定环境的插件</span>
                                     <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span>
                                     <span class="token comment">// 配置信息</span>
                                     <span class="token punctuation">{</span>
                                         <span class="token comment">// 要兼容的目标浏览器</span>
                                         <span class="token literal-property property">targets</span><span class="token operator">:</span><span class="token punctuation">{</span>
                                             <span class="token string-property property">&quot;chrome&quot;</span><span class="token operator">:</span><span class="token string">&quot;58&quot;</span><span class="token punctuation">,</span>
                                             <span class="token string-property property">&quot;ie&quot;</span><span class="token operator">:</span><span class="token string">&quot;11&quot;</span>
                                         <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                         <span class="token comment">// 指定corejs的版本</span>
                                         <span class="token string-property property">&quot;corejs&quot;</span><span class="token operator">:</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
                                         <span class="token comment">// 使用corejs的方式 &quot;usage&quot; 表示按需加载</span>
                                         <span class="token string-property property">&quot;useBuiltIns&quot;</span><span class="token operator">:</span><span class="token string">&quot;usage&quot;</span>
                                     <span class="token punctuation">}</span>
                                 <span class="token punctuation">]</span>
                             <span class="token punctuation">]</span>
                         <span class="token punctuation">}</span>
                     <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token string">&#39;ts-loader&#39;</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token comment">// 要排除的文件</span>
                <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node-modules</span><span class="token regex-delimiter">/</span></span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 配置Webpack插件</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">HTMLWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">// title: &quot;这是一个自定义的title&quot;</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// 用来设置引用模块</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.ts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.js&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>根目录下创建tsconfig.json，配置可以根据自己需要</p><ul><li><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES2015&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES2015&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>修改package.json添加如下配置</p><ul><li><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  ...略...
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack serve --open chrome.exe&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  ...略...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>在src下创建ts文件，并在并命令行执行<code>npm run build</code>对代码进行编译，或者执行<code>npm start</code>来启动开发服务器</p></li></ol></li></ul><h2 id="_5-2-babel配置" tabindex="-1"><a class="header-anchor" href="#_5-2-babel配置" aria-hidden="true">#</a> 5.2 Babel配置</h2><ul><li><p>经过一系列的配置，使得TS和webpack已经结合到了一起，除了webpack，开发中还经常需要结合babel来对代码进行转换以使其可以兼容到更多的浏览器，在上述步骤的基础上，通过以下步骤再将babel引入到项目中。</p><ol><li><p>安装依赖包：</p><ul><li><code>npm i -D @babel/core @babel/preset-env babel-loader core-js</code></li><li>共安装了4个包，分别是： <ul><li>@babel/core <ul><li>babel的核心工具</li></ul></li><li>@babel/preset-env <ul><li>babel的预定义环境</li></ul></li><li>@babel-loader <ul><li>babel在webpack中的加载器</li></ul></li><li>core-js <ul><li>core-js用来使老版本的浏览器支持新版ES语法</li></ul></li></ul></li></ul></li><li><p>修改webpack.config.js配置文件</p><ul><li><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">...</span>略<span class="token operator">...</span>
<span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.ts$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
                        <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                            <span class="token punctuation">[</span>
                                <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span>
                                <span class="token punctuation">{</span>
                                    <span class="token string-property property">&quot;targets&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                                        <span class="token string-property property">&quot;chrome&quot;</span><span class="token operator">:</span> <span class="token string">&quot;58&quot;</span><span class="token punctuation">,</span>
                                        <span class="token string-property property">&quot;ie&quot;</span><span class="token operator">:</span> <span class="token string">&quot;11&quot;</span>
                                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                    <span class="token string-property property">&quot;corejs&quot;</span><span class="token operator">:</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
                                    <span class="token string-property property">&quot;useBuiltIns&quot;</span><span class="token operator">:</span> <span class="token string">&quot;usage&quot;</span>
                                <span class="token punctuation">}</span>
                            <span class="token punctuation">]</span>
                        <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;ts-loader&quot;</span><span class="token punctuation">,</span>

                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span>略<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如此一来，使用ts编译后的文件将会再次被babel处理，使得代码可以在大部分浏览器中直接使用，可以在配置选项的targets中指定要兼容的浏览器版本。</p></li></ul></li></ol></li></ul>`,5),l=[t];function o(i,c){return s(),a("div",null,l)}const u=n(p,[["render",o],["__file","05.html.vue"]]);export{u as default};
