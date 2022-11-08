<template><div><h1 id="_03-【全局配置】" tabindex="-1"><a class="header-anchor" href="#_03-【全局配置】" aria-hidden="true">#</a> 03 【全局配置】</h1>
<h2 id="_1-globalstyle-全局外观配置" tabindex="-1"><a class="header-anchor" href="#_1-globalstyle-全局外观配置" aria-hidden="true">#</a> 1.globalStyle 全局外观配置</h2>
<p>用于设置应用的状态栏、导航条、标题、窗口背景色等。
部分属性：
navigationBar开头的都是导航栏设置（小程序导航栏+手机导航栏）
navigationBarBackgroundColor  导航栏背景颜色
navigationBarTitleText  导航栏标题文字内容
navigationBarTextStyle 导航栏标题颜色，仅支持 black / white</p>
<p>enablePullDownRefresh 是否开启全局的下拉刷新。 （默认为false）
backgroundTextStyle 下拉 loading 的样式，仅支持 dark / light
backgroundColor  设置下拉 loading的背景颜色</p>
<h3 id="_1-1-导航栏样式配置" tabindex="-1"><a class="header-anchor" href="#_1-1-导航栏样式配置" aria-hidden="true">#</a> 1.1 导航栏样式配置</h3>
<p><strong>对应官方文档：https://uniapp.dcloud.io/collocation/pages.html#globalstyle</strong></p>
<p><strong>导航栏属于下图红色框位置：</strong></p>
<p><img src="https://i0.hdslb.com/bfs/album/637b02ee23433f6b0afdc2868f7e2be0c62bf10c.png" alt="image-20221012201535101"></p>
<p><strong>导航栏配置需要注意的是：</strong></p>
<ul>
<li><strong>页面级的navigationBarTitleText会覆盖全局的navigationBarTitleText</strong></li>
</ul>
<p><img src="https://i0.hdslb.com/bfs/album/4a4b6d01d6458bb509c658518b4f12867007a1ff.png" alt="image-20221012201556021"></p>
<h3 id="_1-3-上拉触底效果" tabindex="-1"><a class="header-anchor" href="#_1-3-上拉触底效果" aria-hidden="true">#</a> 1.3 上拉触底效果</h3>
<p><strong>onReachBottomDistance 这个配置适用于页面快到下面的时候，触发写一页等情况。</strong></p>
<p><strong>同样，对应官方文档：https://uniapp.dcloud.io/collocation/pages.html#globalstyle</strong></p>
<h2 id="_2-pages-页面配置" tabindex="-1"><a class="header-anchor" href="#_2-pages-页面配置" aria-hidden="true">#</a> 2.pages 页面配置</h2>
<p><code v-pre>uni-app</code> 通过 pages 节点配置应用由哪些页面组成，pages 节点接收一个数组，数组每个项都是一个对象，其属性值如下：</p>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">默认值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">path</td>
<td style="text-align:left">String</td>
<td style="text-align:left"></td>
<td style="text-align:left">配置页面路径</td>
</tr>
<tr>
<td style="text-align:left">style</td>
<td style="text-align:left">Object</td>
<td style="text-align:left"></td>
<td style="text-align:left">配置页面窗口表现，配置项参考下方 <a href="https://uniapp.dcloud.net.cn/collocation/pages#style" target="_blank" rel="noopener noreferrer">pageStyle<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<p><strong>Tips：</strong></p>
<ul>
<li>pages节点的第一项为应用入口页（即首页）</li>
<li><strong>应用中新增/减少页面</strong>，都需要对 pages 数组进行修改</li>
<li>文件名<strong>不需要写后缀</strong>，框架会自动寻找路径下的页面资源</li>
</ul>
<p><strong>开发目录为：</strong></p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code>┌─pages
│  ├─index
│  │  └─index.vue
│  └─message
│     └─message.vue
├─static
├─main.js
├─App.vue
├─manifest.json
└─pages.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>pages的页面配置：</strong></p>
<p><img src="https://i0.hdslb.com/bfs/album/a683dd9ee382f15ae3dffa5bf9713f03f98a190a.png" alt="image-20221012220943133"></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">//pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages</span>
	<span class="token punctuation">{</span>
		<span class="token comment">//新创建的message.vue，对应的添加上路径。</span>
		<span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"pages/message/message"</span><span class="token punctuation">,</span>
		<span class="token comment">//可以配置style样式。</span>
		<span class="token property">"style"</span><span class="token operator">:</span><span class="token punctuation">{</span>
			<span class="token property">"navigationBarTitleText"</span><span class="token operator">:</span><span class="token string">"信息页"</span><span class="token punctuation">,</span>
			<span class="token property">"navigationBarBackgroundColor"</span><span class="token operator">:</span> <span class="token string">"#2866f7"</span><span class="token punctuation">,</span>
			<span class="token comment">//根据官方可以专门设置h5内容。其他情况不受影响。</span>
			<span class="token property">"h5"</span><span class="token operator">:</span><span class="token punctuation">{</span>
				<span class="token property">"pullToRefresh"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">"color"</span><span class="token operator">:</span><span class="token string">"#333333"</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">{</span>
		<span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"pages/index/index"</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-tabbar-底部导航栏" tabindex="-1"><a class="header-anchor" href="#_3-tabbar-底部导航栏" aria-hidden="true">#</a> 3.tabBar 底部导航栏</h2>
<p>如果应用是一个多 tab 应用，可以通过 tabBar 配置项指定一级导航栏，以及 tab 切换时显示的对应页。</p>
<p>在 pages.json 中提供 tabBar 配置，不仅仅是为了方便快速开发导航，更重要的是在App和小程序端提升性能。在这两个平台，底层原生引擎在启动时无需等待js引擎初始化，即可直接读取 pages.json 中配置的 tabBar 信息，渲染原生tab。</p>
<p><strong>Tips</strong></p>
<ul>
<li>当设置 position 为 top 时，将不会显示 icon</li>
<li>tabBar 中的 list 是一个数组，只能配置最少2个、最多5个 tab，tab 按数组的顺序排序。</li>
<li>tabbar 切换第一次加载时可能渲染不及时，可以在每个tabbar页面的onLoad生命周期里先弹出一个等待雪花（hello uni-app使用了此方式）</li>
<li>tabbar 的页面展现过一次后就保留在内存中，再次切换 tabbar 页面，只会触发每个页面的onShow，不会再触发onLoad。</li>
<li>顶部的 tabbar 目前仅微信小程序上支持。需要用到顶部选项卡的话，建议不使用 tabbar 的顶部设置，而是自己做顶部选项卡，可参考 hello uni-app-&gt;模板-&gt;顶部选项卡。</li>
</ul>
<p><strong>tabbar就是如下图一样：</strong></p>
<p><img src="https://i0.hdslb.com/bfs/album/0018973addf36030319bd33a668cddffa12b4600.png" alt="image-20221012203142545"></p>
<p><strong>在pages.json配置如下：</strong></p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token comment">//设置导航栏</span>
<span class="token property">"tabBar"</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token comment">// tab 上的文字默认颜色	</span>
    <span class="token property">"color"</span><span class="token operator">:</span> <span class="token string">"#ccc"</span><span class="token punctuation">,</span>
    <span class="token comment">// tab 上的文字选中时的颜色	</span>
    <span class="token property">"selectedColor"</span><span class="token operator">:</span> <span class="token string">"#ff55ff"</span><span class="token punctuation">,</span>
	<span class="token comment">//声明多个导航栏</span>
	<span class="token property">"list"</span><span class="token operator">:</span><span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token property">"text"</span><span class="token operator">:</span><span class="token string">"首页"</span><span class="token punctuation">,</span> <span class="token comment">//名称</span>
			<span class="token property">"pagePath"</span><span class="token operator">:</span><span class="token string">"pages/index/index"</span><span class="token punctuation">,</span> <span class="token comment">//路径</span>
			<span class="token property">"iconPath"</span><span class="token operator">:</span><span class="token string">"static/logo.png"</span><span class="token punctuation">,</span> <span class="token comment">//图片路径</span>
			<span class="token property">"selectedIconPath"</span><span class="token operator">:</span><span class="token string">"static/1.jpg"</span> <span class="token comment">//选择后图片路径</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token property">"text"</span><span class="token operator">:</span><span class="token string">"琴谱"</span><span class="token punctuation">,</span>
			<span class="token property">"pagePath"</span><span class="token operator">:</span><span class="token string">"pages/message/message"</span><span class="token punctuation">,</span>
			<span class="token property">"iconPath"</span><span class="token operator">:</span><span class="token string">"static/logo.png"</span><span class="token punctuation">,</span>
			<span class="token property">"selectedIconPath"</span><span class="token operator">:</span><span class="token string">"static/1.jpg"</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token property">"text"</span><span class="token operator">:</span><span class="token string">"个人中心"</span><span class="token punctuation">,</span>
			<span class="token property">"pagePath"</span><span class="token operator">:</span><span class="token string">"pages/user/user"</span><span class="token punctuation">,</span>
			<span class="token property">"iconPath"</span><span class="token operator">:</span><span class="token string">"static/logo.png"</span><span class="token punctuation">,</span>
			<span class="token property">"selectedIconPath"</span><span class="token operator">:</span><span class="token string">"static/1.jpg"</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>同样，对应官方文档：https://uniapp.dcloud.io/collocation/pages.html#tabbar</strong></p>
<h2 id="_4-condition-启动模式配置" tabindex="-1"><a class="header-anchor" href="#_4-condition-启动模式配置" aria-hidden="true">#</a> 4.condition 启动模式配置</h2>
<p>启动模式配置，仅开发期间生效，用于模拟直达页面的场景，如：小程序转发后，用户点击所打开的页面。</p>
<p><strong>属性说明：</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">current</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">是</td>
<td style="text-align:left">当前激活的模式，list节点的索引值</td>
</tr>
<tr>
<td style="text-align:left">list</td>
<td style="text-align:left">Array</td>
<td style="text-align:left">是</td>
<td style="text-align:left">启动模式列表</td>
</tr>
</tbody>
</table>
<p><strong>list说明：</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">String</td>
<td style="text-align:left">是</td>
<td style="text-align:left">启动模式名称</td>
</tr>
<tr>
<td style="text-align:left">path</td>
<td style="text-align:left">String</td>
<td style="text-align:left">是</td>
<td style="text-align:left">启动页面路径</td>
</tr>
<tr>
<td style="text-align:left">query</td>
<td style="text-align:left">String</td>
<td style="text-align:left">否</td>
<td style="text-align:left">启动参数，可在页面的 <a href="https://uniapp.dcloud.net.cn/tutorial/page.html#lifecycle" target="_blank" rel="noopener noreferrer">onLoad<ExternalLinkIcon/></a> 函数里获得</td>
</tr>
</tbody>
</table>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token comment">//condition启动模式配置</span>
<span class="token property">"condition"</span><span class="token operator">:</span><span class="token punctuation">{</span>
	<span class="token comment">//当前激活的模式，list节点的索引值</span>
	<span class="token property">"current"</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token comment">//启动模式列表</span>
	<span class="token property">"list"</span><span class="token operator">:</span><span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"详情页"</span><span class="token punctuation">,</span>	<span class="token comment">//启动模式名称</span>
			<span class="token property">"path"</span><span class="token operator">:</span><span class="token string">"pages/detail/detail"</span><span class="token punctuation">,</span> <span class="token comment">//启动页面路径</span>
			<span class="token property">"query"</span><span class="token operator">:</span><span class="token string">"id=80"</span>	<span class="token comment">//启动参数，进入页面时的onLoad 函数的参数就可以拿到该参数</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://i0.hdslb.com/bfs/album/056e725d6015b3a34be015f33e28de3c863afa36.png" alt="image-20221012221205049"></p>
<p><strong>页面参数如下图：</strong></p>
<p><img src="https://i0.hdslb.com/bfs/album/b47a287f532966535787d363873f4ef146516ac0.png" alt="image-20221012221237417"></p>
<h2 id="_5-easycom模式" tabindex="-1"><a class="header-anchor" href="#_5-easycom模式" aria-hidden="true">#</a> 5.easycom模式</h2>
<blockquote>
<p><code v-pre>HBuilderX 2.5.5</code>起支持<code v-pre>easycom</code>组件模式。</p>
</blockquote>
<p>传统vue组件，需要安装、引用、注册，三个步骤后才能使用组件。<code v-pre>easycom</code>将其精简为一步。 只要组件安装在项目的components目录下，并符合<code v-pre>components/组件名称/组件名称.vue</code>目录结构。就可以不用引用、注册，直接在页面中使用。 如下：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ds-test</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ds-test</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token comment">// 这里不用import引入，也不需要在components内注册uni-list组件。template里就可以直接用</span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">{</span>

			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://i0.hdslb.com/bfs/album/e14f3fe871f18cb2d0c8c97d19dd84b28665a99d.png" alt="image-20221014202040280"></p>
<p>不管components目录下安装了多少组件，<code v-pre>easycom</code>打包后会自动剔除没有使用的组件，对组件库的使用尤为友好。</p>
<p>组件库批量安装，随意使用，自动按需打包。以官方的<code v-pre>uni-ui</code>为例，在HBuilderX新建项目界面选择<code v-pre>uni-ui</code>项目模板，只需在页面中敲u，拉出大量组件代码块，直接选择，即可使用。大幅提升开发效率，降低使用门槛。</p>
<p>在<a href="https://ext.dcloud.net.cn/" target="_blank" rel="noopener noreferrer">uni-app插件市场 (opens new window)<ExternalLinkIcon/></a>下载符合<code v-pre>components/组件名称/组件名称.vue</code>目录结构的组件，均可直接使用。</p>
<p><code v-pre>easycom</code>是自动开启的，不需要手动开启，有需求时可以在<code v-pre>pages.json</code>的<code v-pre>easycom</code>节点进行个性化设置，如关闭自动扫描，或自定义扫描匹配组件的策略。设置参数如下：</p>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">默认值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">autoscan</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">true</td>
<td style="text-align:left">是否开启自动扫描，开启后将会自动扫描符合<code v-pre>components/组件名称/组件名称.vue</code>目录结构的组件</td>
</tr>
<tr>
<td style="text-align:left">custom</td>
<td style="text-align:left">Object</td>
<td style="text-align:left">-</td>
<td style="text-align:left">以正则方式自定义组件匹配规则。如果<code v-pre>autoscan</code>不能满足需求，可以使用<code v-pre>custom</code>自定义匹配规则</td>
</tr>
</tbody>
</table>
<p><strong>自定义easycom配置的示例</strong></p>
<p>如果需要匹配node_modules内的vue文件，需要使用<code v-pre>packageName/path/to/vue-file-$1.vue</code>形式的匹配规则，其中<code v-pre>packageName</code>为安装的包名，<code v-pre>/path/to/vue-file-$1.vue</code>为vue文件在包内的路径。</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token property">"easycom"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"autoscan"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"custom"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">"ds-(.*)"</span><span class="token operator">:</span> <span class="token string">"@/components/ds-$1/ds-$1.vue"</span> <span class="token comment">// 匹配components目录内的vue文件</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>说明</strong></p>
<ul>
<li><code v-pre>easycom</code>方式引入的组件无需在页面内<code v-pre>import</code>，也不需要在<code v-pre>components</code>内声明，即可在任意页面使用</li>
<li><code v-pre>easycom</code>方式引入组件不是全局引入，而是局部引入。例如在H5端只有加载相应页面才会加载使用的组件</li>
<li>在组件名完全一致的情况下，<code v-pre>easycom</code>引入的优先级低于手动引入（区分连字符形式与驼峰形式）</li>
<li>考虑到编译速度，直接在<code v-pre>pages.json</code>内修改<code v-pre>easycom</code>不会触发重新编译，需要改动页面内容触发。</li>
<li><code v-pre>easycom</code>只处理vue组件，不处理小程序专用组件（如微信的wxml格式组件）。不处理后缀为.nvue的组件。但vue组件也可以全端运行，包括小程序和app-nvue。可以参考uni ui，使用vue后缀，同时兼容nvue页面。</li>
</ul>
</div></template>


