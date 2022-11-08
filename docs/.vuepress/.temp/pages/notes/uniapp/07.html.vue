<template><div><h1 id="_07-【unicloud】" tabindex="-1"><a class="header-anchor" href="#_07-【unicloud】" aria-hidden="true">#</a> 07 【uniCloud】</h1>
<h2 id="_1-开发自己的第一个unicloud项目" tabindex="-1"><a class="header-anchor" href="#_1-开发自己的第一个unicloud项目" aria-hidden="true">#</a> 1.开发自己的第一个uniCloud项目</h2>
<ol>
<li>创建uniCloud项目</li>
</ol>
<p>HBuilderX中新建项目，选择uni-app项目，并勾选<code v-pre>启用uniCloud</code>，在右侧选择服务供应商（腾讯云或阿里云）</p>
<p>项目名称随意，比如 firstunicloud</p>
<ol start="2">
<li>关联服务空间</li>
</ol>
<p>一个开发者可以拥有多个服务空间，每个服务空间都是一个独立的serverless云环境，不同服务空间之间的云函数、数据库、存储都是隔离的。</p>
<p>对项目根目录<code v-pre>uniCloud</code>点右键选择<code v-pre>关联云服务空间</code>，绑定之前创建的服务空间，或者新建一个服务空间。</p>
<ol start="3">
<li>创建云函数/云对象</li>
</ol>
<p><code v-pre>uniCloud</code>项目创建并绑定服务空间后，开发者可以创建云函数（云对象是云函数的一种，云函数可泛指普通云函数和云对象）。</p>
<p>在<code v-pre>uniCloud/cloudfunctions</code>目录右键创建云函数/云对象</p>
<p><img src="https://i0.hdslb.com/bfs/album/d1dca73d93851b3fcc5713717024edd605713eb8.png" alt="image-20221014204232191"></p>
<ul>
<li>创建云函数后，生成一个目录，该目录下自动生成index.js，是该云函数的入口文件，不可改名。</li>
<li>创建云对象后，生成一个目录，该目录下自动生成index.obj.js，是该云对象的入口文件，不可改名。</li>
</ul>
<p>如果该云函数/云对象还需要引入其他js，可在index.js入口文件中引用。</p>
<ol start="4">
<li>给云对象编写方法</li>
</ol>
<p>打开helloco.obj.js，我们为它添加一个 sum 方法，逻辑就是接收传入a和b2个参数，返回求和结果。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 此处省略a和b的有效性校验</span>
		<span class="token keyword">return</span> a <span class="token operator">+</span> b
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>在前端调用云对象</li>
</ol>
<p>在项目首页，pages/index/index.vue 里，添加一个按钮，点击后执行异步方法sum。</p>
<p>js 中 import 这个 helloco 对象，调用它的 sum 方法</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>testco()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>请求云对象的方法<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">{</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token keyword">async</span> <span class="token function">testco</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 注意异步</span>
				<span class="token keyword">const</span> helloco <span class="token operator">=</span> uniCloud<span class="token punctuation">.</span><span class="token function">importObject</span><span class="token punctuation">(</span><span class="token string">'helloco'</span><span class="token punctuation">)</span> <span class="token comment">// 导入云对象</span>
				<span class="token keyword">try</span> <span class="token punctuation">{</span>
					<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> helloco<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">//导入云对象后就可以直接调用该对象的sum方法了，注意使用异步await</span>
					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token comment">// 结果是3</span>
				<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>运行</li>
</ol>
<p>将项目运行到浏览器或其他平台，点页面上的按钮，控制台会打印结果：3</p>
<p>HBuilderX自带一个云函数本地运行环境，运行项目时也默认选择 连接本地云函数。可以在底部控制台中的前端控制台右上角进行切换。</p>
<p>可以对helloco云对象点右键上传到uniCloud服务空间，然后在前端控制台右上角切换为 连接云端云函数，那么此时客户端连接的就是真正的现网uniCloud服务器了。</p>
<p>关于运行调试，有单独文档，<a href="https://uniapp.dcloud.net.cn/uniCloud/rundebug" target="_blank" rel="noopener noreferrer">详见<ExternalLinkIcon/></a></p>
<ol start="7">
<li>小结</li>
</ol>
<p>到此为止，你已经开发了第一个 first uniCloud 项目，完成了客户端和服务器的第一次交互。</p>
<p>这个云对象只做了一个求和运算，实际开发中不需要在服务器求和，前端就可以求和。服务器应该做更复杂的事情。</p>
<p>但你可以通过这个示例感知uniCloud的开发，其实非常简单。尤其是云对象，打破了服务器做接口传json给前端的传统，让云端服务对象化，让服务器代码像写前端js一样、清晰。</p>
<p>接下来，建议通读文档，进一步学习掌握uniCloud。</p>
<h2 id="_2-云函数-云对象" tabindex="-1"><a class="header-anchor" href="#_2-云函数-云对象" aria-hidden="true">#</a> 2.云函数/云对象</h2>
<h3 id="_2-1-简介" tabindex="-1"><a class="header-anchor" href="#_2-1-简介" aria-hidden="true">#</a> 2.1 简介</h3>
<p>云函数是运行在云端的 <code v-pre>JavaScript</code> 代码，是基于 <code v-pre>Node.js</code> 的扩展。</p>
<p>在常规的 <code v-pre>Node API</code> 基础上，uniCloud的云函数环境内置了<code v-pre>uniCloud</code>对象，这个对象内置了网络、数据库等各种API。开发者未学习过 <code v-pre>Node.js</code> 也没有关系，只需要看uniCloud的文档，掌握这个<code v-pre>uniCloud</code>对象的API即可。</p>
<p>每个云函数是一个js包，在云函数被调用时，由 serverless 调度系统分配硬件资源启动一个 node 环境来运行这个云函数。</p>
<p>在HBuilderX中可以新建云函数（HBuilderX 3.4 同时可以新建云对象）。</p>
<p><img src="https://i0.hdslb.com/bfs/album/abff2b7db1436a59e85edced074e8116e44907ed.png" alt="image-20221014221332868"></p>
<p>每个云函数是一个目录，其中普通云函数有<code v-pre>index.js</code>入口文件，云对象的入口文件则是<code v-pre>index.obj.js</code>。</p>
<p>一个最简单的云函数只需要这个入口js文件，在里面编写代码即可。当然也可以在这个js中require该云函数目录下的其他js、json文件。</p>
<p>云函数的配置文件和 npm规范 相同，在云函数目录下可新建一个 package.json 来存放配置。uniCloud云函数扩展了 package.json，增加了一些特有的配置项。<a href="https://uniapp.dcloud.net.cn/uniCloud/cf-functions#packagejson" target="_blank" rel="noopener noreferrer">详见<ExternalLinkIcon/></a></p>
<p>云函数启动后实例会保留一段时间（如15分钟），超过保留期后若该云函数一直没有被再调用，那这个实例会被释放。所以云函数有冷启动的概念。不过由于js实例的启动要比php和java更快，所以js更适合serverless方式。</p>
<p><strong>注意事项</strong></p>
<ul>
<li>云函数内使用commonjs规范，不可使用import、export，参考：<a href="http://nodejs.cn/api/modules.html#modules_modules_commonjs_modules" target="_blank" rel="noopener noreferrer">commonjs模块(opens new window)<ExternalLinkIcon/></a></li>
<li>不同项目使用同一个服务空间时，不可使用同名云函数。同名云函数会相互覆盖。</li>
<li>在HBuilderX创建云函数时，如果新云函数与服务器上已存在同名云函数，会用新函数覆盖。所以应先选择从服务空间下载云函数。</li>
<li>uniCloud的阿里云版，暂不可使用相对路径读取文件（比如<code v-pre>fs.readFileSync('./info.txt')</code>），可以使用绝对路径<code v-pre>fs.readFileSync(path.resolve(__dirname,'./info.txt'))</code></li>
</ul>
<h3 id="_2-2-云函数的分类" tabindex="-1"><a class="header-anchor" href="#_2-2-云函数的分类" aria-hidden="true">#</a> 2.2 云函数的分类</h3>
<p>云函数有若干子概念，包括 普通云函数、云对象、公共模块、clientDB的action云函数、uniCloud扩展库。</p>
<ul>
<li>云函数：通过传统json接口方式和客户端通信，客户端使用<code v-pre>uniCloud.callfunction(&quot;&quot;)</code>调用云函数</li>
<li>云对象：是通过前端导入对象来操作的，客户端使用<code v-pre>uniCloud.importObject(&quot;&quot;)</code>导入云对象。详见<a href="https://uniapp.dcloud.net.cn/uniCloud/cloud-obj" target="_blank" rel="noopener noreferrer">云对象<ExternalLinkIcon/></a></li>
<li>公共模块：用于不同的云函数/云对象，抽取和共享相同代码，详见<a href="https://uniapp.dcloud.net.cn/uniCloud/cf-functions#%E5%85%AC%E5%85%B1%E6%A8%A1%E5%9D%97" target="_blank" rel="noopener noreferrer">公共模块文档<ExternalLinkIcon/></a></li>
<li>action云函数：为了弥补clientDB客户端直接操作数据库的局限而设计的，详见<a href="https://uniapp.dcloud.net.cn/uniCloud/clientdb#action" target="_blank" rel="noopener noreferrer">clientDB action文档<ExternalLinkIcon/></a></li>
<li>uniCloud扩展库：为了裁剪和控制云函数体积而设计的，一些不太常用的功能比如Redis，独立为可选扩展库，避免增大每个云函数的体积，详见<a href="https://uniapp.dcloud.net.cn/uniCloud/cf-functions#%E6%89%A9%E5%B1%95%E5%BA%93" target="_blank" rel="noopener noreferrer">uniCloud扩展库<ExternalLinkIcon/></a></li>
</ul>
<p>HBuilderX中uniCloud项目的云函数均在项目的<code v-pre>uniCloud/cloudfunctions</code>目录下，目录结构如下：</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code>|——— cloudfunctions               云函数目录
|   │───common                    云函数公用模块目录 
|   |   └──hello-common           云函数公用模块
|   |      │──index.js            公用模块代码
|   |      └──package.json        公用模块package.json
|   │───uni-clientDB-actions
|   │      └──new_action.js       clientDB action代码 
|   │───function-name             云函数目录
|   │     │──index.js             云函数代码
|   │     └──package.json         包含云函数的配置信息，如url化、定时设置、可用内存等内容 
|   └───object-name               云对象目录
|         │──index.obj.js         云对象代码
|         └──package.json         包含云对象的配置信息，可用内存等内容 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-unicloud响应体规范" tabindex="-1"><a class="header-anchor" href="#_2-3-unicloud响应体规范" aria-hidden="true">#</a> 2.3 uniCloud响应体规范</h3>
<p><code v-pre>uniCloud响应体规范</code>（uniCloud response format），是DCloud制定的、服务器给客户端返回json数据的一种建议格式。</p>
<p>云对象、clientDB、uni-id公共模块均支持此规范。</p>
<p><strong>由来</strong></p>
<p>uniCloud服务器给客户端返回的数据格式一般是json，但json的格式具体是什么没有约定。比如返回错误码，是叫<code v-pre>code</code>还是叫<code v-pre>errCode</code>？错误内容是<code v-pre>message</code>还是<code v-pre>errMsg</code>？内容的国际化如何处理？</p>
<p>如果没有一套统一的格式，在客户端将无法编写有效的网络拦截器，无法统一处理错误。</p>
<p>另外，如果不同的插件，云端返回的数据格式千差万别，那使用者整合这些插件也会非常麻烦。国际化更无法落地。</p>
<p>为此DCloud推出了<code v-pre>uniCloud响应体规范</code>。</p>
<p>为了与uni-app前端的API错误回调风格统一，uniCloud响应体规范定义的云端返回信息（尤其是报错时）应包含<code v-pre>errCode</code>和<code v-pre>errMsg</code>。</p>
<p>除此之外响应体规范还包含<code v-pre>newToken</code>字段，用于token的自动续期（云对象接收含有newToken的响应后会自动更新storage内存储的<code v-pre>uni_id_token</code>及<code v-pre>uni_id_token_expired</code>，此行为新增于<code v-pre>HBuilderX 3.4.13</code>）。开发者一般无需关心此数据，uni-app客户端和云端uni-id之间会自动管理token及续期。</p>
<p><code v-pre>uniCloud响应体</code>示例如下：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token comment">// 失败返回值</span>
<span class="token punctuation">{</span>
  <span class="token property">"errCode"</span><span class="token operator">:</span> 'uni-id-account-banned'<span class="token punctuation">,</span>
  <span class="token property">"errMsg"</span><span class="token operator">:</span> '账号被禁用'
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token comment">// 成功返回值</span>
<span class="token punctuation">{</span>
  <span class="token property">"errCode"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"errMsg"</span><span class="token operator">:</span> '登录成功'<span class="token punctuation">,</span>
  <span class="token property">"uid"</span><span class="token operator">:</span> 'xxx'<span class="token punctuation">,</span> <span class="token comment">// 其他信息</span>
  <span class="token property">"newToken"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 用于下发新token给客户端</span>
	  <span class="token property">"token"</span><span class="token operator">:</span> 'xxx'<span class="token punctuation">,</span>
	  <span class="token property">"tokenExpired"</span><span class="token operator">:</span> 'xxx'
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HBuilderX内使用代码块<code v-pre>returnu</code>可以快速输入以下代码（<code v-pre>HBuilderX 3.4.0</code>及以上版本）:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">errCode</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token literal-property property">errMsg</span><span class="token operator">:</span> <span class="token string">''</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>errCode</li>
</ul>
<p>errCode在成功时应返回数字<code v-pre>0</code>,失败时应返回一个以插件id开头的“字符串”，每个单词以连字符（<code v-pre>-</code>）分割。做出这样的规定是为了防止不同插件之间出现重复错误码</p>
<p>以<code v-pre>'uni-id-account-banned'</code>错误码为例，<code v-pre>uni-id</code>为插件id，<code v-pre>account-banned</code>为错误缩写。</p>
<p>如果业务开发的代码并不发布插件市场，那么为了避免下载了一个市场的插件产生冲突，推荐使用不包含“-”的字符串来做errCode（插件市场的所有插件ID必须包含“-”）。</p>
<p>后续uniCloud会提供自动根据errCode对errMsg进行国际化处理的功能，开发者仅需保证云函数返回值满足<code v-pre>uniCloud响应体规范</code>即可。</p>
<ul>
<li>errMsg</li>
</ul>
<p>errMsg用于存放具体错误信息，包括展示给开发者、终端用户的错误信息</p>
<h2 id="_3-云对象" tabindex="-1"><a class="header-anchor" href="#_3-云对象" aria-hidden="true">#</a> 3.云对象</h2>
<h2 id="_4-普通云函数" tabindex="-1"><a class="header-anchor" href="#_4-普通云函数" aria-hidden="true">#</a> 4.普通云函数</h2>
<p>callFunction方式云函数，也称之为普通云函数。</p>
<p>uni-app的前端代码，不再执行<code v-pre>uni.request</code>联网，而是通过<code v-pre>uniCloud.callFunction</code>调用云函数。</p>
<p>callFunction方式避免了服务器提供域名，不暴露固定ip，减少被攻击的风险。</p>
<ul>
<li>对于uni-app前端而言，使用云对象会比使用callFunction云函数方式更为简单清晰。</li>
<li>但对于非uni-app前端调用的场景，比如5+App、外部应用、服务器要调用云函数，或者uniCloud定时任务，此时不适合使用云对象，还是需要云函数。</li>
</ul>
<p><code v-pre>uniCloud.callFunction</code>可以在uni-app前端执行，也可以在uniCloud云函数中执行。也就是前端和云端都可以调用另一个云函数。</p>
<p><code v-pre>callFunction</code>方法的参数和返回值如下：</p>
<h3 id="_4-1-callfunction方法" tabindex="-1"><a class="header-anchor" href="#_4-1-callfunction方法" aria-hidden="true">#</a> 4.1 callFunction方法</h3>
<p><code v-pre>uniCloud.callFunction</code>需要一个json对象作为参数，其中包含2个字段</p>
<table>
<thead>
<tr>
<th style="text-align:center">字段</th>
<th style="text-align:center">类型</th>
<th style="text-align:center">必填</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">name</td>
<td style="text-align:center">String</td>
<td style="text-align:center">是</td>
<td style="text-align:center">云函数名称</td>
</tr>
<tr>
<td style="text-align:center">data</td>
<td style="text-align:center">Object</td>
<td style="text-align:center">否</td>
<td style="text-align:center">客户端需要传递的参数</td>
</tr>
</tbody>
</table>
<p><strong>返回json</strong></p>
<table>
<thead>
<tr>
<th style="text-align:center">字段</th>
<th style="text-align:center">类型</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">result</td>
<td style="text-align:center">Object</td>
<td style="text-align:center">云函数中代码return的返回结果</td>
</tr>
<tr>
<td style="text-align:center">requestId</td>
<td style="text-align:center">String</td>
<td style="text-align:center">云函数请求序列号，用于错误排查，可以在uniCloud web控制台的云函数日志中查到</td>
</tr>
<tr>
<td style="text-align:center">header</td>
<td style="text-align:center">Object</td>
<td style="text-align:center">服务器header信息</td>
</tr>
<tr>
<td style="text-align:center">errCode</td>
<td style="text-align:center">Number或String</td>
<td style="text-align:center">服务器错误码</td>
</tr>
<tr>
<td style="text-align:center">success</td>
<td style="text-align:center">bool</td>
<td style="text-align:center">执行是否成功</td>
</tr>
</tbody>
</table>
<p><strong>前端示例代码</strong></p>
<p>假使云服务空间有一个云函数名为“hellocf”，那么前端可以通过如下方式调用这个云函数</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// promise方式</span>
uniCloud<span class="token punctuation">.</span><span class="token function">callFunction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'hellocf'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// callback方式</span>
uniCloud<span class="token punctuation">.</span><span class="token function">callFunction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'hellocf'</span><span class="token punctuation">,</span>
	<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function">complete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-云函数的入参" tabindex="-1"><a class="header-anchor" href="#_4-2-云函数的入参" aria-hidden="true">#</a> 4.2 云函数的入参</h3>
<p>客户端callFunction调用云函数时，云函数通过入参接收客户端数据，通过头信息上下文获取客户端信息，经过业务逻辑处理后给客户端返回结果。</p>
<p>假使客户端代码调用云函数<code v-pre>hellocf</code>，并传递了<code v-pre>{a:1,b:2}</code>的数据，</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 客户端调用云函数并传递参数</span>
uniCloud<span class="token punctuation">.</span><span class="token function">callFunction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'hellocf'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么云函数侧的代码如下，将传入的两个参数求和并返回客户端：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// hellocf云函数index.js入口文件代码</span>
<span class="token string">'use strict'</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">main</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
	<span class="token comment">//event为客户端上传的参数</span>
	<span class="token keyword">let</span> c <span class="token operator">=</span> event<span class="token punctuation">.</span>a <span class="token operator">+</span> event<span class="token punctuation">.</span>b
	<span class="token keyword">return</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">sum</span><span class="token operator">:</span> c
	<span class="token punctuation">}</span> <span class="token comment">// 通过return返回结果给客户端</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>云函数的传入参数有两个，一个是<code v-pre>event</code>对象，一个是<code v-pre>context</code>对象。</p>
<ul>
<li><code v-pre>event</code>指的是触发云函数的事件。当客户端调用云函数时，<code v-pre>event</code>就是客户端调用云函数时传入的参数。</li>
<li><code v-pre>context</code> 对象包含了本次请求的上下文，包括客户端的ip、ua、appId等信息，以及云函数的环境情况、调用来源source等信息。</li>
</ul>
<h4 id="_4-2-1-event对象" tabindex="-1"><a class="header-anchor" href="#_4-2-1-event对象" aria-hidden="true">#</a> 4.2.1 event对象</h4>
<p>event对象，可以理解为客户端上行参数中的json对象。在使用<code v-pre>uni-id</code>且登录成功后，会自动多添加了一个<code v-pre>uniIdToken</code>属性。</p>
<p>可以通过 <code v-pre>event.uniIdToken</code> 获取 uni-id 的 token，如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token string">'use strict'</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">main</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> token <span class="token operator">=</span> event<span class="token punctuation">.</span>uniIdToken <span class="token comment">// 客户端uni-id token</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以开发者需注意，自己上行的参数对象不要包含uniIdToken属性，避免同名冲突。</p>
<p><strong>入参的体积限制</strong></p>
<p>云函数上行的参数内容不能传太大。</p>
<ul>
<li>阿里云event大小不可超过1MB</li>
<li>腾讯云event大小不可超过5MB</li>
</ul>
<h4 id="_4-2-2-context对象" tabindex="-1"><a class="header-anchor" href="#_4-2-2-context对象" aria-hidden="true">#</a> 4.2.2 context对象</h4>
<ul>
<li><code v-pre>context</code> 对象包含了本次请求的上下文，包括客户端的ip、ua、appId等信息，以及云函数的环境情况、调用来源source等信息。</li>
</ul>
<p>context对象的属性清单如下：</p>
<table>
<thead>
<tr>
<th>属性名称</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>SPACEINFO</td>
<td>object</td>
<td>服务空间信息</td>
</tr>
<tr>
<td>|- spaceId</td>
<td>string</td>
<td>服务空间id</td>
</tr>
<tr>
<td>|- provider</td>
<td>string</td>
<td>服务空间供应商：aliyun|tencent</td>
</tr>
<tr>
<td>SOURCE</td>
<td>string</td>
<td>云函数调用来源 <a href="https://uniapp.dcloud.net.cn/uniCloud/cf-callfunction.html#context-source" target="_blank" rel="noopener noreferrer">详见<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>FUNCTION_NAME</td>
<td>string</td>
<td>获取云函数名称</td>
</tr>
<tr>
<td>FUNCTION_TYPE</td>
<td>string</td>
<td>获取云函数类型，对于云函数来说，这里一定会返回<code v-pre>cloudfunction</code>，新增于HBuilderX 3.5.1。</td>
</tr>
<tr>
<td>CLIENTIP</td>
<td>string</td>
<td>客户端IP。如果调用来源是其他服务器，会返回调用方的ip</td>
</tr>
<tr>
<td>CLIENTUA</td>
<td>string</td>
<td>客户端userAgent。注意非本地运行环境下客户端getSystemInfoSync也会获取ua参数并上传给云函数，但是云函数会从http请求头里面获取ua而不是clientInfo里面的ua</td>
</tr>
<tr>
<td>uniIdToken</td>
<td>string</td>
<td>客户端uni-id token字符串，新增于HBuilderX 3.5.1。</td>
</tr>
<tr>
<td>requestId</td>
<td>string</td>
<td>当前请求id，新增于HBuilderX 3.5.5。</td>
</tr>
</tbody>
</table>
<p>除了上述属性，如果是uni-app客户端通过callfunction访问云函数，那么context还会追加一批客户端信息。</p>
<ul>
<li>HBuilderX 3.4.9前，context 添加了一批大写属性，如APPID、OS。</li>
<li>HBuilderX 3.4.9起，context 的属性包括前端API <code v-pre>uni.getSystemInfo</code> 的所有属性。比如appId、osName，均以驼峰方式命名。这些属性较多，且可能跟随前端API更新而变化，具体详见 <a href="https://uniapp.dcloud.net.cn/api/system/info.html#getsysteminfo" target="_blank" rel="noopener noreferrer">uni.getSystemInfo<ExternalLinkIcon/></a></li>
</ul>
<p>为了保持向下兼容，新版并没有去掉老版那些大写属性的客户端信息，但文档标注为以废弃。对于新版HBuilderX用户而言，请使用 <code v-pre>uni.getSystemInfo</code> 返回的驼峰属性。</p>
<p>HBuilderX 3.4.9起，context 的属性还可以打印出<code v-pre>channel</code>和<code v-pre>scene</code>，即App的渠道包标记和小程序场景值。但这个功能属于未完成功能，开发者暂不使用这2个属性，后续会升级完善。目前如开发者需要这2个属性，请自行在客户端使用<a href="https://uniapp.dcloud.net.cn/api/plugins/getLaunchOptionsSync.html#getlaunchoptionssync" target="_blank" rel="noopener noreferrer">uni.getLaunchOptionsSync<ExternalLinkIcon/></a>上传。</p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token string">'use strict'</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">main</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
	<span class="token comment">//event为客户端上传的参数</span>
  <span class="token comment">//...</span>
  <span class="token comment">//context中可获取客户端调用的上下文</span>
  <span class="token keyword">let</span> clientIP <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token constant">CLIENTIP</span> <span class="token comment">// 客户端ip信息</span>
  <span class="token keyword">let</span> spaceInfo <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token constant">SPACEINFO</span> <span class="token comment">// 当前环境信息 {spaceId:'xxx',provider:'tencent'}</span>
  <span class="token keyword">let</span> source <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token constant">SOURCE</span> <span class="token comment">// 云函数调用来源</span>
  <span class="token comment">// 以下属性只有使用uni-app以callFunction方式调用才能获取，即context.SOURCE=="client"，调用方不是uni-app客户端则没有相应数据</span>
  <span class="token keyword">let</span> appid <span class="token operator">=</span> context<span class="token punctuation">.</span>appId <span class="token comment">// manifest.json中配置的appid</span>
  <span class="token keyword">let</span> deviceId <span class="token operator">=</span> context<span class="token punctuation">.</span>deviceId <span class="token comment">// 客户端标识，新增于HBuilderX 3.1.0，同uni-app客户端getSystemInfo接口获取的deviceId</span>
	<span class="token comment">//... //其它业务代码</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-云函数的返回格式" tabindex="-1"><a class="header-anchor" href="#_4-3-云函数的返回格式" aria-hidden="true">#</a> 4.3 云函数的返回格式</h3>
<p>普通云函数返回给客户端的是json格式数据。返回结果包裹在result下。</p>
<p>前端发起callFunction到云端接收参数并响应，然后反馈前端，前端接收，完整流程代码如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 客户端发起调用云函数hellocf，并传入data数据</span>
uniCloud<span class="token punctuation">.</span><span class="token function">callFunction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'hellocf'</span><span class="token punctuation">,</span>
	<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>result<span class="token punctuation">)</span> <span class="token comment">// 结果是 {sum: 3}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 云函数hellocf的代码，接收到客户端传递的data，并对其中a和b相加返回给客户端</span>
<span class="token string">'use strict'</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">main</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
	<span class="token comment">//event为客户端上传的参数</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'event : '</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span>
	<span class="token comment">//返回数据给客户端</span>
	<span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">sum</span> <span class="token operator">:</span> event<span class="token punctuation">.</span>a <span class="token operator">+</span> event<span class="token punctuation">.</span>b<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么客户端得到的res结构如下</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"errCode"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token property">"errMsg"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
	<span class="token property">"header"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">"access-control-expose-headers"</span><span class="token operator">:</span> <span class="token string">"Date,x-fc-request-id,x-fc-error-type,x-fc-code-checksum,x-fc-invocation-duration,x-fc-max-memory-usage,x-fc-log-result,x-fc-invocation-code-version"</span>
		<span class="token property">"content-disposition"</span><span class="token operator">:</span> <span class="token string">"attachment"</span>
		<span class="token property">"content-length"</span><span class="token operator">:</span> <span class="token string">"38"</span>
		<span class="token property">"content-type"</span><span class="token operator">:</span> <span class="token string">"application/json"</span>
		<span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"Sat, 25 Jun 2022 19:28:34 GMT"</span>
		<span class="token property">"x-fc-code-checksum"</span><span class="token operator">:</span> <span class="token string">"92066386860027743"</span>
		<span class="token property">"x-fc-instance-id"</span><span class="token operator">:</span> <span class="token string">"c-62b761c4-5a85e238b3ce404c817d"</span>
		<span class="token property">"x-fc-invocation-duration"</span><span class="token operator">:</span> <span class="token string">"23"</span>
		<span class="token property">"x-fc-invocation-service-version"</span><span class="token operator">:</span> <span class="token string">"LATEST"</span>
		<span class="token property">"x-fc-max-memory-usage"</span><span class="token operator">:</span> <span class="token string">"66.61"</span>
		<span class="token property">"x-fc-request-id"</span><span class="token operator">:</span> <span class="token string">"80854b93-b0c7-43ab-ab16-9ee9f77ff41e"</span>
		<span class="token property">"x-serverless-request-id"</span><span class="token operator">:</span> <span class="token string">"ac1403831656185314624173902"</span>
		<span class="token property">"x-serverless-runtime-version"</span><span class="token operator">:</span> <span class="token string">"1.3.2"</span>
	<span class="token punctuation">}</span>
	<span class="token property">"requestId"</span><span class="token operator">:</span> <span class="token string">"ac1403831656185314624173902"</span>
	<span class="token property">"result"</span><span class="token operator">:</span> <span class="token punctuation">{</span>sum<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span>
	<span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中<code v-pre>result</code>是开发者云函数代码返回的数据，其余是云平台返回的。</p>
<p>注意：HBuilderX本地运行云函数时，如果没有系统错误，则只返回<code v-pre>result</code>，其他需要在云端运行云函数才会返回。</p>
<ul>
<li>errCode为0时，success也是true。
<ul>
<li>表示云函数在系统层面没有运行错误。可以正常返回result。前端callFunction会进入success回调</li>
<li>如果开发者的业务有报错，可以在 result 里返回 errCode 和 errMsg。</li>
</ul>
</li>
<li>errCode不为0时，success为false。
<ul>
<li>表示云函数在系统层面报错了，比如联网失败、云函数超时、内存超限等错误。前端callFunction会进入fail回调</li>
<li>发生系统错误时 result 里无法正常返回业务错误。errCode不为0时，还会返回errMsg。</li>
</ul>
</li>
<li>requestId是云函数的请求id，线上运行时，可以在uniCloud web控制台的云函数日志中查看运行日志。</li>
<li>header是云厂商的一些信息，阿里云和腾讯云不同，上面示例代码是阿里云的header。</li>
</ul>
</div></template>


