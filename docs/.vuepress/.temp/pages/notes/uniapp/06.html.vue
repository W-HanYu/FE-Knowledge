<template><div><h1 id="_06-【uniapp生命周期】" tabindex="-1"><a class="header-anchor" href="#_06-【uniapp生命周期】" aria-hidden="true">#</a> 06 【uniapp生命周期】</h1>
<p>生命周期的概念：一个对象从创建、运行、销毁的整个过程被成为生命周期。</p>
<p>生命周期函数：在生命周期中每个阶段会伴随着每一个函数的触发，这些函数被称为生命周期函数。</p>
<h2 id="_1-应用生命周期" tabindex="-1"><a class="header-anchor" href="#_1-应用生命周期" aria-hidden="true">#</a> 1.应用生命周期</h2>
<p><a href="https://uniapp.dcloud.net.cn/collocation/App.html#applifecycle" target="_blank" rel="noopener noreferrer">uni-app官网 (dcloud.net.cn)<ExternalLinkIcon/></a></p>
<p><code v-pre>uni-app</code> 支持如下应用生命周期函数：</p>
<table>
<thead>
<tr>
<th style="text-align:left">函数名</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">onLaunch</td>
<td style="text-align:left">当<code v-pre>uni-app</code> 初始化完成时触发（全局只触发一次）</td>
</tr>
<tr>
<td style="text-align:left">onShow</td>
<td style="text-align:left">当 <code v-pre>uni-app</code> 启动，或从后台进入前台显示</td>
</tr>
<tr>
<td style="text-align:left">onHide</td>
<td style="text-align:left">当 <code v-pre>uni-app</code> 从前台进入后台</td>
</tr>
<tr>
<td style="text-align:left">onError</td>
<td style="text-align:left">当 <code v-pre>uni-app</code> 报错时触发</td>
</tr>
</tbody>
</table>
<p><strong>示例代码</strong></p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token comment">// 只能在App.vue里监听应用的生命周期</span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token function-variable function">onLaunch</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'App Launch'</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function-variable function">onShow</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'App Show'</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function-variable function">onHide</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'App Hide'</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">onError</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'App Err'</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
	<span class="token comment">/*每个页面公共css */</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>代码分析：</strong></p>
<ul>
<li>第一次加载页面时会调用<code v-pre>onLaunch</code> ，<code v-pre>onShow</code> 打印<code v-pre>App Launch</code>，<code v-pre>App Show</code></li>
<li>当你在浏览器离开页面，去查看其它页面，或者其它应用会触发<code v-pre>onHide</code>，在回来查看该页面时触发<code v-pre>onShow</code> ，打印<code v-pre>App Hide</code>，<code v-pre>App Show</code></li>
<li>我们手动把<code v-pre>onShow</code>方法里面的<code v-pre>console.log(‘App Show’) </code>改为<code v-pre>consol.log(‘App Show’) </code>去掉一个<code v-pre>e</code>字母，这样会导致报错，这个时候我们<code v-pre>onError</code>方法就可以监听到错误</li>
</ul>
<p><strong>注意</strong></p>
<ul>
<li><strong>应用生命周期仅可在<code v-pre>App.vue</code>中监听，在其它页面监听无效</strong>。</li>
<li>应用启动参数，可以在API <code v-pre>uni.getLaunchOptionsSync</code>获取，<a href="https://uniapp.dcloud.net.cn/api/plugins/getLaunchOptionsSync.html#getlaunchoptionssync" target="_blank" rel="noopener noreferrer">详见(opens new window)<ExternalLinkIcon/></a></li>
<li>onlaunch里进行页面跳转，如遇白屏报错，请参考<a href="https://ask.dcloud.net.cn/article/35942" target="_blank" rel="noopener noreferrer">https://ask.dcloud.net.cn/article/35942(opens new window)<ExternalLinkIcon/></a></li>
<li><code v-pre>App.vue</code> 不能写模板</li>
<li>onPageNotFound 页面实际上已经打开了（比如通过分享卡片、小程序码）且发现页面不存在，才会触发，api 跳转不存在的页面不会触发（如 uni.navigateTo）</li>
</ul>
<h2 id="_2-页面生命周期" tabindex="-1"><a class="header-anchor" href="#_2-页面生命周期" aria-hidden="true">#</a> 2.页面生命周期</h2>
<p><a href="https://uniapp.dcloud.net.cn/tutorial/page.html#lifecycle" target="_blank" rel="noopener noreferrer">页面简介 | uni-app官网 (dcloud.net.cn)<ExternalLinkIcon/></a></p>
<p><code v-pre>uni-app</code> 支持如下页面生命周期函数：</p>
<table>
<thead>
<tr>
<th style="text-align:left">函数名</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">平台差异说明</th>
<th style="text-align:left">最低版本</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">onLoad</td>
<td style="text-align:left">监听页面加载，其参数为上个页面传递的数据，参数类型为 Object（用于页面传参），参考<a href="https://uniapp.dcloud.net.cn/api/router#navigateto" target="_blank" rel="noopener noreferrer">示例<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onShow</td>
<td style="text-align:left">监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onReady</td>
<td style="text-align:left">监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onHide</td>
<td style="text-align:left">监听页面隐藏</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onUnload</td>
<td style="text-align:left">监听页面卸载</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<p><code v-pre>index.vue</code>页面里面定义的页面生命周期函数如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Hello'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'页面加载了'</span><span class="token punctuation">,</span> option<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'页面显示了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">onReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'页面初次渲染完成了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">onHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'页面隐藏了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">onUpload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'页面卸载了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>代码分析：</strong></p>
<ul>
<li>第一次加载首页，触发onLoad，onShow，onReady方法，依次打印页面加载了，页面显示了，页面初次渲染完成了</li>
<li>当你在浏览器离开页面，去查看其它页面，或者其它应用，会触发onHide方法，打印页面隐藏了，在回来查看该页面时触发onShow方法，打印页面显示了。可以发现印页面加载了，页面初次渲染完成了都不在打印，证明onLoad，onReady方法只触发一次，而onShow，onHide方法多次触发</li>
</ul>
<p>当我们取tabbr底部栏从首页切换到其它页面，会触发onHide方法，打印页面隐藏了。再次会到首页，触发onShow方法，打印页面显示了</p>
<p>tabbar的提示：</p>
<div class="language-tex line-numbers-mode" data-ext="tex"><pre v-pre class="language-tex"><code>tabbar 切换第一次加载时可能渲染不及时，可以在每个tabbar页面的onLoad生命周期里先弹出一个等待雪花（hello uni-app使用了此方式）
tabbar 的页面展现过一次后就保留在内存中，再次切换 tabbar 页面，只会触发每个页面的onShow，不会再触发onLoad
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-组件生命周期" tabindex="-1"><a class="header-anchor" href="#_3-组件生命周期" aria-hidden="true">#</a> 3.组件生命周期</h2>
<p><code v-pre>uni-app</code> 组件支持的生命周期，与vue标准组件的生命周期相同。这里没有页面级的onLoad等生命周期：</p>
<table>
<thead>
<tr>
<th style="text-align:left">函数名</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">平台差异说明</th>
<th style="text-align:left">最低版本</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">beforeCreate</td>
<td style="text-align:left">在实例初始化之前被调用。<a href="https://cn.vuejs.org/v2/api/#beforeCreate" target="_blank" rel="noopener noreferrer">详见(opens new window)<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">created</td>
<td style="text-align:left">在实例创建完成后被立即调用。<a href="https://cn.vuejs.org/v2/api/#created" target="_blank" rel="noopener noreferrer">详见(opens new window)<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">beforeMount</td>
<td style="text-align:left">在挂载开始之前被调用。<a href="https://cn.vuejs.org/v2/api/#beforeMount" target="_blank" rel="noopener noreferrer">详见(opens new window)<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">mounted</td>
<td style="text-align:left">挂载到实例上去之后调用。<a href="https://cn.vuejs.org/v2/api/#mounted" target="_blank" rel="noopener noreferrer">详见 (opens new window)<ExternalLinkIcon/></a>注意：此处并不能确定子组件被全部挂载，如果需要子组件完全挂载之后在执行操作可以使用<code v-pre>$nextTick</code><a href="https://cn.vuejs.org/v2/api/#Vue-nextTick" target="_blank" rel="noopener noreferrer">Vue官方文档(opens new window)<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">beforeUpdate</td>
<td style="text-align:left">数据更新时调用，发生在虚拟 DOM 打补丁之前。<a href="https://cn.vuejs.org/v2/api/#beforeUpdate" target="_blank" rel="noopener noreferrer">详见(opens new window)<ExternalLinkIcon/></a></td>
<td style="text-align:left">仅H5平台支持</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">updated</td>
<td style="text-align:left">由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。<a href="https://cn.vuejs.org/v2/api/#updated" target="_blank" rel="noopener noreferrer">详见(opens new window)<ExternalLinkIcon/></a></td>
<td style="text-align:left">仅H5平台支持</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">beforeDestroy</td>
<td style="text-align:left">实例销毁之前调用。在这一步，实例仍然完全可用。<a href="https://cn.vuejs.org/v2/api/#beforeDestroy" target="_blank" rel="noopener noreferrer">详见(opens new window)<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">destroyed</td>
<td style="text-align:left">Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。<a href="https://cn.vuejs.org/v2/api/#destroyed" target="_blank" rel="noopener noreferrer">详见<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
</div></template>


