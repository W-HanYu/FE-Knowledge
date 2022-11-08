<template><div><h1 id="_8-饼图" tabindex="-1"><a class="header-anchor" href="#_8-饼图" aria-hidden="true">#</a> 8.饼图</h1>
<h2 id="_8-1常见效果" tabindex="-1"><a class="header-anchor" href="#_8-1常见效果" aria-hidden="true">#</a> 8.1常见效果</h2>
<ul>
<li>显示数值
<ul>
<li>label
<ul>
<li>show</li>
<li>formatter （回调函数）</li>
</ul>
</li>
</ul>
</li>
<li>圆环
<ul>
<li>radius：饼半径，设置两个半径即圆环radius:[‘30%’,‘80%’]</li>
</ul>
</li>
<li>南丁格尔图 （饼图的每一个区域的半径不一样，随着数值变化）
<ul>
<li>roseType:‘radius’</li>
</ul>
</li>
<li>选中效果
<ul>
<li>selectedMode：设置选中效果 single/multiple</li>
<li>selectedOffset：设置选中偏移量</li>
</ul>
</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./node_modules/echarts/dist/echarts.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token function-variable function">onload</span> <span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 初始化echarts实例对象 其中init函数参数为dom元素，决定图标最终展示的位置</span>
            <span class="token keyword">var</span> myECharts <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 准备数据</span>
            <span class="token keyword">var</span> domeData<span class="token operator">=</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'吃喝'</span><span class="token punctuation">,</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">700</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'学习'</span><span class="token punctuation">,</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">9000</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'出行'</span><span class="token punctuation">,</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">2000</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'服饰'</span><span class="token punctuation">,</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">1825</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'玩乐'</span><span class="token punctuation">,</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">654</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'其他'</span><span class="token punctuation">,</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">269</span><span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
            <span class="token comment">// 准备配置项！</span>
            <span class="token keyword">var</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">series</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">'pie'</span><span class="token punctuation">,</span>  <span class="token comment">//饼图</span>
                        <span class="token literal-property property">data</span><span class="token operator">:</span>domeData<span class="token punctuation">,</span>
                        <span class="token literal-property property">label</span><span class="token operator">:</span><span class="token punctuation">{</span>
                            <span class="token literal-property property">show</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
                            <span class="token function">formatter</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                                <span class="token comment">// console.log(arg)</span>
                                <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>arg<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>arg<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>arg<span class="token punctuation">.</span>percent<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%</span><span class="token template-punctuation string">`</span></span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token comment">// radius:100, </span>
                        <span class="token comment">// radius:'50%', //百分比参照的是高度及宽度较小的一个的一半的百分比</span>
                        <span class="token comment">// radius:['30%','80%'], //设置为数组，第0个元素表示内圆半径，第1个表示外圆半径</span>
                        <span class="token literal-property property">roseType</span><span class="token operator">:</span><span class="token string">'radius'</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">selectedMode</span><span class="token operator">:</span><span class="token string">'single'</span><span class="token punctuation">,</span>  <span class="token comment">//设置选中效果 single/multiple</span>
                        <span class="token literal-property property">selectedOffset</span><span class="token operator">:</span><span class="token number">15</span>  <span class="token comment">//设置选中偏移量</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 将配置项设置给echarts实例对象</span>
            myECharts<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 准备一个图表容器盒子 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 700px<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 700px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8.1</p>
<h2 id="_8-2饼形图-1年龄分布模块制作" tabindex="-1"><a class="header-anchor" href="#_8-2饼形图-1年龄分布模块制作" aria-hidden="true">#</a> 8.2饼形图 1年龄分布模块制作</h2>
<ul>
<li>官网找到类似实例， 适当分析，并且引入到HTML页面中</li>
<li>根据需求定制图表</li>
</ul>
<p>定制图表需求1：</p>
<ul>
<li>修改图例组件在底部并且居中显示。</li>
<li>每个小图标的宽度和高度修改为 10px</li>
<li>文字大小为12 颜色  rgba(255,255,255,.5)</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 距离底部为0%</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">"0%"</span><span class="token punctuation">,</span>
      <span class="token comment">// 小图标的宽度和高度</span>
      <span class="token literal-property property">itemWidth</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token literal-property property">itemHeight</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'直接访问'</span><span class="token punctuation">,</span> <span class="token string">'邮件营销'</span><span class="token punctuation">,</span> <span class="token string">'联盟广告'</span><span class="token punctuation">,</span> <span class="token string">'视频广告'</span><span class="token punctuation">,</span> <span class="token string">'搜索引擎'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// 修改图例组件的文字为 12px</span>
      <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"rgba(255,255,255,.5)"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">"12"</span>
      <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定制需求2：</p>
<ul>
<li>修改水平居中 垂直居中</li>
<li>修改内圆半径和外圆半径为    [&quot;40%&quot;, &quot;60%&quot;]   pink老师友情提示，带有直角坐标系的比如折线图柱状图是 grid修改图形大小，而我们饼形图是通过 radius 修改大小</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"年龄分布"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"pie"</span><span class="token punctuation">,</span>
        <span class="token comment">// 设置饼形图在容器中的位置</span>
        <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"50%"</span><span class="token punctuation">,</span> <span class="token string">"50%"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">//  修改内圆半径和外圆半径为  百分比是相对于容器宽度来说的</span>
        <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"40%"</span><span class="token punctuation">,</span> <span class="token string">"60%"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// 不显示标签文字</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 不显示连接线</span>
        <span class="token literal-property property">labelLine</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定制需求3：更换数据</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// legend 中的data  可省略</span>
<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"0岁以下"</span><span class="token punctuation">,</span> <span class="token string">"20-29岁"</span><span class="token punctuation">,</span> <span class="token string">"30-39岁"</span><span class="token punctuation">,</span> <span class="token string">"40-49岁"</span><span class="token punctuation">,</span> <span class="token string">"50岁以上"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">//  series 中的数据</span>
 <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"0岁以下"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"20-29岁"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"30-39岁"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"40-49岁"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"50岁以上"</span> <span class="token punctuation">}</span>
 <span class="token punctuation">]</span> <span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定制需求4： 更换颜色</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">"#065aab"</span><span class="token punctuation">,</span>
          <span class="token string">"#066eab"</span><span class="token punctuation">,</span>
          <span class="token string">"#0682ab"</span><span class="token punctuation">,</span>
          <span class="token string">"#0696ab"</span><span class="token punctuation">,</span>
          <span class="token string">"#06a0ab"</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token comment">// 4. 让图表跟随屏幕自动的去适应</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"resize"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    myChart<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>完整代码</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 饼形图1</span>
<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. 实例化对象</span>
  <span class="token keyword">var</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".pie .chart"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 2.指定配置</span>
  <span class="token keyword">var</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"#065aab"</span><span class="token punctuation">,</span> <span class="token string">"#066eab"</span><span class="token punctuation">,</span> <span class="token string">"#0682ab"</span><span class="token punctuation">,</span> <span class="token string">"#0696ab"</span><span class="token punctuation">,</span> <span class="token string">"#06a0ab"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">"item"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">"{a} &lt;br/>{b}: {c} ({d}%)"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">"0%"</span><span class="token punctuation">,</span>
      <span class="token comment">// 修改小图标的大小</span>
      <span class="token literal-property property">itemWidth</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token literal-property property">itemHeight</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token comment">// 修改图例组件的文字为 12px</span>
      <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"rgba(255,255,255,.5)"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">"12"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"年龄分布"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"pie"</span><span class="token punctuation">,</span>
        <span class="token comment">// 这个radius可以修改饼形图的大小</span>
        <span class="token comment">// radius 第一个值是内圆的半径 第二个值是外圆的半径</span>
        <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"40%"</span><span class="token punctuation">,</span> <span class="token string">"60%"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// 饼图的位置</span>
        <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"50%"</span><span class="token punctuation">,</span> <span class="token string">"45%"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">avoidLabelOverlap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">// 图形边上的文字</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">"center"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 链接文字和图形的线是否显示</span>
        <span class="token literal-property property">labelLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"0岁以下"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"20-29岁"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"30-39岁"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"40-49岁"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"50岁以上"</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 3. 把配置给实例对象</span>
  myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 4. 让图表跟随屏幕自动的去适应</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"resize"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    myChart<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://i0.hdslb.com/bfs/album/ea0b97d8dce547f1be7fcf0e5a66dc3be3cc04d3.png" alt="屏幕截图 2022-07-30 183259"></p>
<h2 id="_8-3饼形图2-地区分布模块制作-南丁格尔玫瑰图" tabindex="-1"><a class="header-anchor" href="#_8-3饼形图2-地区分布模块制作-南丁格尔玫瑰图" aria-hidden="true">#</a> 8.3饼形图2 地区分布模块制作（南丁格尔玫瑰图）</h2>
<ul>
<li>官网找到类似实例， 适当分析，并且引入到HTML页面中</li>
<li>根据需求定制图表</li>
</ul>
<p>第二步：按照需求定制</p>
<ul>
<li>需求1：颜色设置</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'#006cff'</span><span class="token punctuation">,</span> <span class="token string">'#60cda0'</span><span class="token punctuation">,</span> <span class="token string">'#ed8884'</span><span class="token punctuation">,</span> <span class="token string">'#ff9f7f'</span><span class="token punctuation">,</span> <span class="token string">'#0096ff'</span><span class="token punctuation">,</span> <span class="token string">'#9fe6b8'</span><span class="token punctuation">,</span> <span class="token string">'#32c5e9'</span><span class="token punctuation">,</span> <span class="token string">'#1d9dff'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>需求2：修改饼形图大小 ( series对象)</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'10%'</span><span class="token punctuation">,</span> <span class="token string">'70%'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>需求3： 把饼形图的显示模式改为 半径模式</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token literal-property property">roseType</span><span class="token operator">:</span> <span class="token string">"radius"</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>需求4：数据使用更换（series对象 里面 data对象）</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'云南'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">26</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'北京'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'山东'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'河北'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'江苏'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'浙江'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'四川'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'湖北'</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>需求5：字体略小些  10 px ( series对象里面设置 )</p>
<p>饼图图形上的文本标签可以控制饼形图的文字的一些样式。   label 对象设置</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"面积模式"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"pie"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"50%"</span><span class="token punctuation">,</span> <span class="token string">"50%"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">roseType</span><span class="token operator">:</span> <span class="token string">"radius"</span><span class="token punctuation">,</span>
        <span class="token comment">// 文本标签控制饼形图文字的相关样式， 注意它是一个对象</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">10</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>需求6：防止缩放的时候，引导线过长。引导线略短些   (series对象里面的  labelLine  对象设置  )
<ul>
<li>连接图表 6 px</li>
<li>连接文字 8 px</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>        <span class="token comment">// 文字调整</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">10</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 引导线调整</span>
        <span class="token literal-property property">labelLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 连接扇形图线长</span>
          <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
          <span class="token comment">// 连接文字线长</span>
          <span class="token literal-property property">length2</span><span class="token operator">:</span> <span class="token number">8</span>
        <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>需求6：浏览器缩放的时候，图表跟着自动适配。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 监听浏览器缩放，图表对象调用缩放resize函数</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"resize"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    myChart<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>完整代码</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 饼形图2 地区分布模块</span>
<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> myChart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".pie2 .chart"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"#006cff"</span><span class="token punctuation">,</span>
      <span class="token string">"#60cda0"</span><span class="token punctuation">,</span>
      <span class="token string">"#ed8884"</span><span class="token punctuation">,</span>
      <span class="token string">"#ff9f7f"</span><span class="token punctuation">,</span>
      <span class="token string">"#0096ff"</span><span class="token punctuation">,</span>
      <span class="token string">"#9fe6b8"</span><span class="token punctuation">,</span>
      <span class="token string">"#32c5e9"</span><span class="token punctuation">,</span>
      <span class="token string">"#1d9dff"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">"item"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">"{a} &lt;br/>{b} : {c} ({d}%)"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">legend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">"0%"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">itemWidth</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token literal-property property">itemHeight</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token literal-property property">textStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"rgba(255,255,255,.5)"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">"12"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"地区分布"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"pie"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"10%"</span><span class="token punctuation">,</span> <span class="token string">"70%"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"50%"</span><span class="token punctuation">,</span> <span class="token string">"50%"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">roseType</span><span class="token operator">:</span> <span class="token string">"radius"</span><span class="token punctuation">,</span>
        <span class="token comment">// 图形的文字标签</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">10</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 链接图形和文字的线条</span>
        <span class="token literal-property property">labelLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// length 链接图形的线条</span>
          <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
          <span class="token comment">// length2 链接文字的线条</span>
          <span class="token literal-property property">length2</span><span class="token operator">:</span> <span class="token number">8</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"云南"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">26</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"北京"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"山东"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"河北"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"江苏"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"浙江"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"四川"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"湖北"</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  myChart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 监听浏览器缩放，图表对象调用缩放resize函数</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"resize"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    myChart<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://i0.hdslb.com/bfs/album/ad471d6c5ffb3a68f7cc33f43336bae3c28fe199.png" alt="屏幕截图 2022-07-30 183313"></p>
</div></template>


