import{_ as s,o as n,c as a,e}from"./app.713299e2.js";const t={},p=e(`<h1 id="_11-【express服务端渲染】" tabindex="-1"><a class="header-anchor" href="#_11-【express服务端渲染】" aria-hidden="true">#</a> 11 【Express服务端渲染】</h1><h2 id="_1-express脚手架的安装" tabindex="-1"><a class="header-anchor" href="#_1-express脚手架的安装" aria-hidden="true">#</a> 1.Express脚手架的安装</h2><p>安装Express脚手架有两种方式：</p><h3 id="_1-1-使用express-generator安装" tabindex="-1"><a class="header-anchor" href="#_1-1-使用express-generator安装" aria-hidden="true">#</a> 1.1 使用express-generator安装</h3><p>使用命令行进入项目目录，依次执行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>cnpm i <span class="token parameter variable">-g</span> express-generator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可通过express -h查看命令行的指令含义</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>express <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Usage: express <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>dir<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Options:
    <span class="token parameter variable">--version</span>        输出版本号
-e, <span class="token parameter variable">--ejs</span>            添加对 ejs 模板引擎的支持
    <span class="token parameter variable">--pug</span>            添加对 pug 模板引擎的支持
    <span class="token parameter variable">--hbs</span>            添加对 handlebars 模板引擎的支持
-H, <span class="token parameter variable">--hogan</span>          添加对 hogan.js 模板引擎的支持
-v, <span class="token parameter variable">--view</span> <span class="token operator">&lt;</span>engine<span class="token operator">&gt;</span>  添加对视图引擎（view） <span class="token operator">&lt;</span>engine<span class="token operator">&gt;</span> 的支持 <span class="token punctuation">(</span>ejs<span class="token operator">|</span>hbs<span class="token operator">|</span>hjs<span class="token operator">|</span>jade<span class="token operator">|</span>pug<span class="token operator">|</span>twig<span class="token operator">|</span>vash<span class="token punctuation">)</span> （默认是 jade 模板引擎）
    --no-view        创建不带视图引擎的项目
-c, <span class="token parameter variable">--css</span> <span class="token operator">&lt;</span>engine<span class="token operator">&gt;</span>   添加样式表引擎 <span class="token operator">&lt;</span>engine<span class="token operator">&gt;</span> 的支持 <span class="token punctuation">(</span>less<span class="token operator">|</span>stylus<span class="token operator">|</span>compass<span class="token operator">|</span>sass<span class="token punctuation">)</span> （默认是普通的 css 文件）
    <span class="token parameter variable">--git</span>            添加 .gitignore
-f, <span class="token parameter variable">--force</span>          强制在非空目录下创建
-h, <span class="token parameter variable">--help</span>           输出使用方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建了一个名为 myapp 的 Express 应用，并使用ejs模板引擎</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>express <span class="token parameter variable">--view</span><span class="token operator">=</span>ejs myapp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入app，并安装依赖</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> myapp
<span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在Windows 下，使用以下命令启Express应用：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> <span class="token assign-left variable">DEBUG</span><span class="token operator">=</span>app:* <span class="token operator">&amp;</span> <span class="token function">npm</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>在 MacOS 或 Linux 下，使用以下命令启Express应用：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">DEBUG</span><span class="token operator">=</span>app:* <span class="token function">npm</span> start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-2-使用-express-命令-来快速从创建一个项目目录" tabindex="-1"><a class="header-anchor" href="#_1-2-使用-express-命令-来快速从创建一个项目目录" aria-hidden="true">#</a> 1.2 使用 express 命令 来快速从创建一个项目目录</h3><p>express 项目文件夹的名字 -e 如 使用命令行进入项目目录，依次执行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>express app <span class="token parameter variable">-e</span>
<span class="token builtin class-name">cd</span> app
cnpm <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时，你也可以看到在app文件夹下的文件结构；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bin: 启动目录 里面包含了一个启动文件 www 默认监听端口是 <span class="token number">3000</span> <span class="token punctuation">(</span>直接node www执行即可<span class="token punctuation">)</span>
node_modules：依赖的模块包
public：存放静态资源
routes：路由操作
views：存放ejs模板引擎
app.js：主文件
package.json：项目描述文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一个Express应用“Hello World”</p><p>在这里，我们不使用npm构建的脚手架，而是向最开始那样直接在主目录中新建一个app.js文件。</p><p>在app.js中输入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//引入express模块</span>
<span class="token keyword">var</span> app<span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//express()是express模块顶级函数</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>      <span class="token comment">//访问根路径时输出hello world</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;h1 style=&#39;color: blue&#39;&gt;hello world&lt;/h1&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//设置访问端口号</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令行进入项目文件夹后，键入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run start/npm start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>即已开启服务器，接下来只需在浏览器中运行 http://localhost:3000/ 就可以访问到服务器得到响应后的数据</p><h2 id="_2-模板引擎简介" tabindex="-1"><a class="header-anchor" href="#_2-模板引擎简介" aria-hidden="true">#</a> 2.模板引擎简介</h2><p>相比于jade模板引擎，ejs对原HTML语言就未作出结构上的改变，只不过在其交互数据方面做出了些许修改，相比于jade更加简单易用。因此其学习成本是很低的。您也可参考ejs官网：https://ejs.bootcss.com/</p><p><img src="https://tva1.sinaimg.cn/large/0074UQWJgy1h3eh73418lj30pf0ah0zy.jpg" alt="image-20220618170512237"></p><blockquote><p>服务端渲染可以在源码中看到，客户端渲染不能再源码中看到</p></blockquote><h2 id="_3-ejs基本使用" tabindex="-1"><a class="header-anchor" href="#_3-ejs基本使用" aria-hidden="true">#</a> 3.ejs基本使用</h2><p>需要在应用中进行如下设置才能让 Express 渲染模板文件：</p><p><img src="https://tva1.sinaimg.cn/large/0074UQWJgy1h3eh8z7bmwj307j0hmq5q.jpg" alt="image-20220618190604147"></p><p>这里我们使用如下配置文件：</p><p>可以通过下面的方式实现基本的ejs操作： app.js文件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ejs<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;ejs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fs<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> app<span class="token operator">=</span><span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//引用ejs</span>
app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;views&#39;</span><span class="token punctuation">,</span><span class="token string">&quot;./views&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//设置视图的对应目录</span>
app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;view engine&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;ejs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//设置默认的模板引擎</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;&lt;h4&gt;express&lt;/h4&gt;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//会去找views目录下的index.ejs文件</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ejs文件：</p><div class="language-ejs line-numbers-mode" data-ext="ejs"><pre class="language-ejs"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        <span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%</span><span class="token language-javascript"> <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span> </span><span class="token delimiter punctuation">%&gt;</span></span>
            <span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%=</span><span class="token language-javascript"> i </span><span class="token delimiter punctuation">%&gt;</span></span>
        <span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%</span><span class="token language-javascript"> <span class="token punctuation">}</span> </span><span class="token delimiter punctuation">%&gt;</span></span>
        <span class="token comment">&lt;!-- 获取变量 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>datas<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>获取变量：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
            <span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%-</span><span class="token language-javascript"> title </span><span class="token delimiter punctuation">%&gt;</span></span>
            <span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%=</span><span class="token language-javascript"> title </span><span class="token delimiter punctuation">%&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由此可以知道：</p><div class="language-ejs line-numbers-mode" data-ext="ejs"><pre class="language-ejs"><code><span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%</span><span class="token language-javascript"> xxx </span><span class="token delimiter punctuation">%&gt;</span></span>：里面写入的是js语法，
<span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%=</span><span class="token language-javascript"> xxx </span><span class="token delimiter punctuation">%&gt;</span></span>：里面是服务端发送给ejs模板转义后的变量，输出为原数据
<span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%-</span><span class="token language-javascript"> xxx </span><span class="token delimiter punctuation">%&gt;</span></span>：里面也是服务端发送给ejs模板后的变量，解析html
如果写html的注释，那样会在源码中显示，下面这种ejs注释不会在源码中显示
<span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%</span><span class="token comment"># 注释标签，不执行、不输出内容 </span><span class="token delimiter punctuation">%&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同理res.render()函数也是支持回调的：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Tobi&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> html</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样我们即可将看到html的内容。</p><p><strong>关于res.redirect()</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">isShow</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>username <span class="token operator">===</span> <span class="token string">&#39;ds&#39;</span> <span class="token operator">&amp;&amp;</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>password <span class="token operator">===</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;登录成功&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// res.send(&quot;成功&quot;)</span>
    <span class="token comment">// 重定向到home</span>
    res<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">&#39;/index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;登录失败&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">&#39;用户名密码不匹配&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">isShow</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-ejs-标签各种含义" tabindex="-1"><a class="header-anchor" href="#_4-ejs-标签各种含义" aria-hidden="true">#</a> 4.ejs 标签各种含义</h2><div class="language-ejs line-numbers-mode" data-ext="ejs"><pre class="language-ejs"><code><span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%</span><span class="token language-javascript"> <span class="token string">&#39;脚本&#39;</span> 标签，用于流程控制，无输出。
<span class="token operator">&lt;</span><span class="token operator">%</span>_ 删除其前面的空格符
<span class="token operator">&lt;</span><span class="token operator">%=</span> 输出数据到模板（输出是转义 <span class="token constant">HTML</span> 标签）
<span class="token operator">&lt;</span><span class="token operator">%</span><span class="token operator">-</span> 输出非转义的数据到模板
<span class="token operator">&lt;</span><span class="token operator">%</span># 注释标签，不执行、不输出内容
<span class="token operator">&lt;</span><span class="token operator">%</span><span class="token operator">%</span> 输出字符串 <span class="token string">&#39;&lt;%&#39;</span>
</span><span class="token delimiter punctuation">%&gt;</span></span> 一般结束标签
-%&gt; 删除紧随其后的换行符
_%&gt; 将结束标签后面的空格符删除
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://tva1.sinaimg.cn/large/0074UQWJgy1h3eh7h67twj30me05tads.jpg" alt="image-20220618170943284"></p><p>以上就为ejs基本用法，往后对数据库操作就直接把json数据从服务器返送给模板引擎就行；</p><h2 id="_5-导入公共模板样式" tabindex="-1"><a class="header-anchor" href="#_5-导入公共模板样式" aria-hidden="true">#</a> 5.导入公共模板样式</h2><p><code>header.ejs</code></p><div class="language-ejs line-numbers-mode" data-ext="ejs"><pre class="language-ejs"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>
  我是公共样式
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%</span><span class="token language-javascript"> <span class="token keyword">if</span><span class="token punctuation">(</span>isShowSchool<span class="token punctuation">)</span> <span class="token punctuation">{</span></span><span class="token delimiter punctuation">%&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>校园招聘<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%</span><span class="token language-javascript"> <span class="token punctuation">}</span> </span><span class="token delimiter punctuation">%&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>index.ejs</code></p><div class="language-ejs line-numbers-mode" data-ext="ejs"><pre class="language-ejs"><code><span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%-</span><span class="token language-javascript"> <span class="token function">include</span><span class="token punctuation">(</span><span class="token string">&quot;./header.ejs&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span> <span class="token literal-property property">isShowSchool</span><span class="token operator">:</span><span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> </span><span class="token delimiter punctuation">%&gt;</span></span> index <span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%</span><span class="token comment"># 我的注释 </span><span class="token delimiter punctuation">%&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://tva1.sinaimg.cn/large/0074UQWJgy1h3eh7cbp4jj31hc0rq7oj.jpg" alt="image-20220618191129477"></p>`,59),o=[p];function c(l,i){return n(),a("div",null,o)}const r=s(t,[["render",c],["__file","11.html.vue"]]);export{r as default};
