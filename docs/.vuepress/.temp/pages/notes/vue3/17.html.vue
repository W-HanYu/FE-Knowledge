<template><div><h1 id="_17-【vue3自动导入配置】" tabindex="-1"><a class="header-anchor" href="#_17-【vue3自动导入配置】" aria-hidden="true">#</a> 17 【vue3自动导入配置】</h1>
<h2 id="_1-自动导入组件库组件" tabindex="-1"><a class="header-anchor" href="#_1-自动导入组件库组件" aria-hidden="true">#</a> 1.自动导入组件库组件</h2>
<p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fantfu%2Funplugin-vue-components%23readme" target="_blank" rel="noopener noreferrer">unplugin-vue-components<ExternalLinkIcon/></a></p>
<p><img src="https://i0.hdslb.com/bfs/album/1fdd991c3093cfe8e50851df60a5bfe507d764b7.png" alt="image-20220924104148732"></p>
<p><strong>安装</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span> unplugin-vue-components <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后将下面的代码添加到 <code v-pre>Vite</code>  的配置文件。</p>
<p><strong>Vite配置</strong></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">'unplugin-vue-components/vite'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  ElementPlusResolver<span class="token punctuation">,</span>
  AntDesignVueResolver<span class="token punctuation">,</span>
  VantResolver<span class="token punctuation">,</span>
  HeadlessUiResolver<span class="token punctuation">,</span>
  ElementUiResolver
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'unplugin-vue-components/resolvers'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// ui库解析器，也可以自定义</span>
      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">AntDesignVueResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">VantResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">HeadlessUiResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">ElementUiResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插件会生成一个ui库组件以及指令路径components.d.ts文件，详情看这个vue3的issue <a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Fvue-next%2Fpull%2F3399" target="_blank" rel="noopener noreferrer">types(defineComponent): support for expose component types<ExternalLinkIcon/></a></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// components.d.ts</span>

<span class="token comment">// generated by unplugin-vue-components</span>
<span class="token comment">// We suggest you to commit this file into source control</span>
<span class="token comment">// Read more: https://github.com/vuejs/vue-next/pull/3399</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">'vue'</span> <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">GlobalComponents</span> <span class="token punctuation">{</span>
    ElAside<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'element-plus/es'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'ElAside'</span><span class="token punctuation">]</span>
    ElButton<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'element-plus/es'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'ElButton'</span><span class="token punctuation">]</span>
    ElContainer<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'element-plus/es'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'ElContainer'</span><span class="token punctuation">]</span>
    ElDropdown<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'element-plus/es'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'ElDropdown'</span><span class="token punctuation">]</span>
    ElDropdownItem<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'element-plus/es'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'ElDropdownItem'</span><span class="token punctuation">]</span>
    ElDropdownMenu<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'element-plus/es'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'ElDropdownMenu'</span><span class="token punctuation">]</span>
    ElHeader<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'element-plus/es'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'ElHeader'</span><span class="token punctuation">]</span>
    ElIcon<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'element-plus/es'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'ElIcon'</span><span class="token punctuation">]</span>
    ElMain<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'element-plus/es'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'ElMain'</span><span class="token punctuation">]</span>
    ElMenu<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'element-plus/es'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'ElMenu'</span><span class="token punctuation">]</span>
    ElMenuItem<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'element-plus/es'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'ElMenuItem'</span><span class="token punctuation">]</span>
    ElResult<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'element-plus/es'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'ElResult'</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>想了解其他的打包工具(<a href="https://link.juejin.cn/?target=https%3A%2F%2Frollupjs.org%2F" target="_blank" rel="noopener noreferrer">Rollup<ExternalLinkIcon/></a>, <a href="https://link.juejin.cn/?target=https%3A%2F%2Fcli.vuejs.org%2F" target="_blank" rel="noopener noreferrer">Vue CLI<ExternalLinkIcon/></a>)，请参考 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fantfu%2Funplugin-vue-components%23readme" target="_blank" rel="noopener noreferrer">unplugin-vue-components<ExternalLinkIcon/></a>。</p>
<p><strong>自动导入自己的组件</strong></p>
<p>直接写组件名即可，插件会帮你引入进来 <strong>注意别重名</strong></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">'unplugin-vue-components/vite'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 指定组件位置，默认是src/components</span>
      dirs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'src/components'</span><span class="token punctuation">,</span> <span class="token string">'src/views'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// ui库解析器</span>
      <span class="token comment">// resolvers: [ElementPlusResolver()],</span>
      extensions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'vue'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// 配置文件生成位置</span>
      dts<span class="token operator">:</span> <span class="token string">'src/components.d.ts'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插件会生成一个自己组件路径的components.d.ts文件，详情看这个vue3的issue <a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Fvue-next%2Fpull%2F3399" target="_blank" rel="noopener noreferrer">types(defineComponent): support for expose component types<ExternalLinkIcon/></a></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// components.d.ts</span>

<span class="token comment">// generated by unplugin-vue-components</span>
<span class="token comment">// We suggest you to commit this file into source control</span>
<span class="token comment">// Read more: https://github.com/vuejs/vue-next/pull/3399</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">'vue'</span> <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">GlobalComponents</span> <span class="token punctuation">{</span>
    BaseFilter<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./components/Common/BaseFilter.vue'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'default'</span><span class="token punctuation">]</span>
    BaseHeader<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./components/Common/BaseHeader.vue'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'default'</span><span class="token punctuation">]</span>
    BasePagination<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./components/Common/BasePagination.vue'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'default'</span><span class="token punctuation">]</span>
    BaseSidebar<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./components/Common/BaseSidebar.vue'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'default'</span><span class="token punctuation">]</span>
    BaseTags<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./components/Common/BaseTags.vue'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'default'</span><span class="token punctuation">]</span>
    BaseTitle<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./components/Common/BaseTitle.vue'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'default'</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-自动导入vue-函数和自己的公用函数" tabindex="-1"><a class="header-anchor" href="#_2-自动导入vue-函数和自己的公用函数" aria-hidden="true">#</a> 2.自动导入Vue 函数和自己的公用函数</h2>
<h3 id="_2-1-自动导入vue-函数" tabindex="-1"><a class="header-anchor" href="#_2-1-自动导入vue-函数" aria-hidden="true">#</a> 2.1 自动导入Vue 函数</h3>
<p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fantfu%2Funplugin-auto-import" target="_blank" rel="noopener noreferrer">unplugin-auto-import/vite<ExternalLinkIcon/></a></p>
<p>自动导入vue3的hooks，借助<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fantfu%2Funplugin-auto-import" target="_blank" rel="noopener noreferrer">unplugin-auto-import/vite<ExternalLinkIcon/></a>这个插件</p>
<p><strong>支持<code v-pre>vue</code>, <code v-pre>vue-router</code>, <code v-pre>vue-i18n</code>, <code v-pre>@vueuse/head</code>, <code v-pre>@vueuse/core</code>等自动引入</strong></p>
<p><strong>安装</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> i <span class="token parameter variable">-D</span> unplugin-auto-import
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Vite配置</strong></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span>
<span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">'unplugin-auto-import/vite'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// Auto import functions from Vue, e.g. ref, reactive, toRef...</span>
      <span class="token comment">// 自动导入 Vue 相关函数，如：ref, reactive, toRef 等</span>
      imports<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'vue'</span><span class="token punctuation">,</span> <span class="token string">'vue-router'</span><span class="token punctuation">,</span> <span class="token punctuation">,</span><span class="token string">'vue-i18n'</span><span class="token punctuation">,</span> <span class="token string">'@vueuse/head'</span><span class="token punctuation">,</span> <span class="token string">'@vueuse/core'</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'</span>
       dts<span class="token operator">:</span> <span class="token string">'src/auto-import.d.ts'</span>
        
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>原理:</code> 安装的时候会自动生成auto-imports.d文件(默认是在根目录)</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// Generated by 'unplugin-auto-import'</span>
<span class="token comment">// We suggest you to commit this file into source control</span>
<span class="token keyword">declare</span> global <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ref<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'vue'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'ref'</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> reactive<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'vue'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'reactive'</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> computed<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'vue'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'computed'</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> createApp<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'vue'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'createApp'</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> watch<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'vue'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'watch'</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> customRef<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'vue'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'customRef'</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> defineAsyncComponent<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'vue'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'defineAsyncComponent'</span><span class="token punctuation">]</span>
  <span class="token punctuation">.</span>
  <span class="token punctuation">.</span>
  <span class="token punctuation">.</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>可以选择auto-import.d.ts生成的位置，使用ts建议设置为src/auto-import.d.ts</strong></p>
<p>其他插件 <code v-pre>vue-router</code>, <code v-pre>vue-i18n</code>, <code v-pre>@vueuse/head</code>, <code v-pre>@vueuse/core</code>等自动引入的自动引入请查看文档</p>
<h3 id="_2-2-自动导入自己的公用函数" tabindex="-1"><a class="header-anchor" href="#_2-2-自动导入自己的公用函数" aria-hidden="true">#</a> 2.2 自动导入自己的公用函数</h3>
<p>默人导入<code v-pre>axios</code>，分别导入<code v-pre>pinia</code>的<code v-pre>storeToRefs</code></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// Auto import functions from Vue, e.g. ref, reactive, toRef...</span>
      <span class="token comment">// 自动导入 Vue 相关函数，如：ref, reactive, toRef 等</span>
      imports<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">'vue'</span><span class="token punctuation">,</span>
        <span class="token string">'vue-router'</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          axios<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// default imports</span>
            <span class="token punctuation">[</span><span class="token string">'default'</span><span class="token punctuation">,</span> <span class="token string">'axios'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// import { default as axios } from 'axios',</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
           pinia<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'storeToRefs'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token comment">// import { storeToRefs } from 'pinia'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">'@vueuse/core'</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自动导入自己定义的函数</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>  <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// Auto import for module exports under directories</span>
    <span class="token comment">// by default it only scan one level of modules under the directory</span>
    dirs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'./src/utils'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'</span>
    dts<span class="token operator">:</span> <span class="token string">'src/auto-import.d.ts'</span><span class="token punctuation">,</span>
    <span class="token comment">// 在vue模板中使用</span>
    vueTemplate<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>观察<code v-pre>auto-import.d.ts</code>文件</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">declare</span> global <span class="token punctuation">{</span>
  <span class="token keyword">const</span> axios<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'axios'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'default'</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> bus<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./utils/bus'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'bus'</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> diffDays<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./utils/date'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'diffDays'</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> formatDate<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./utils/date'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'formatDate'</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> http<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./utils/service'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'http'</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> isDark<span class="token operator">:</span> <span class="token keyword">typeof</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./utils/dark'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'isDark'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-自动导入组件库样式" tabindex="-1"><a class="header-anchor" href="#_3-自动导入组件库样式" aria-hidden="true">#</a> 3.自动导入组件库样式</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStyleImportPlugin<span class="token punctuation">,</span> ElementPlusResolve  <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite-plugin-style-import'</span><span class="token punctuation">;</span>

plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token comment">//按需导入element-plus的css样式</span>
     <span class="token function">createStyleImportPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      resolves<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//查看 插件 API 获取 Vite 插件的更多细节 https://www.vitejs.net/guide/api-plugin.html</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-自动导入icon" tabindex="-1"><a class="header-anchor" href="#_4-自动导入icon" aria-hidden="true">#</a> 4.自动导入icon</h2>
<blockquote>
<p><strong><a href="https://link.zhihu.com/?target=https%3A//github.com/unocss/unocss" target="_blank" rel="noopener noreferrer">UnoCSS<ExternalLinkIcon/></a></strong> 是 antfu 开发的一个原子化 CSS 引擎，这里就不详细说了，大家感兴趣可以去读一下他的文章【<strong><a href="https://link.zhihu.com/?target=https%3A//antfu.me/posts/reimagine-atomic-css-zh" target="_blank" rel="noopener noreferrer">重新构想原子化 CSS<ExternalLinkIcon/></a></strong>】。</p>
</blockquote>
<p><strong>安装依赖</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># @iconify-json/ep 是 Element Plus 的图标库</span>
<span class="token function">pnpm</span> i <span class="token parameter variable">-D</span> unocss @iconify-json/ant-design
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>修改 vite.config.ts 配置</strong></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">'@vitejs/plugin-vue'</span>
<span class="token keyword">import</span> Unocss <span class="token keyword">from</span> <span class="token string">'unocss/vite'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  presetAttributify<span class="token punctuation">,</span>
  presetIcons<span class="token punctuation">,</span>
  presetUno<span class="token punctuation">,</span>
  transformerDirectives<span class="token punctuation">,</span>
  transformerVariantGroup<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'unocss'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">// 添加以下配置</span>
    <span class="token function">Unocss</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      presets<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">presetUno</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">presetAttributify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">presetIcons</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          scale<span class="token operator">:</span> <span class="token number">1.2</span><span class="token punctuation">,</span>
          warn<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      transformers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">transformerDirectives</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">transformerVariantGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>修改 main.ts</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 在 main.ts 里添加以下代码</span>
<span class="token keyword">import</span> <span class="token string">'uno.css'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用</strong></p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>// svg图片
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i-ant-design-picture-filled w-330px h-240px<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
// 图标字体
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span>
    <span class="token attr-name">i</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ant-design-picture-filled<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


