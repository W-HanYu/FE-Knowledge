<template><div><h1 id="_04-【忽略某些文件】" tabindex="-1"><a class="header-anchor" href="#_04-【忽略某些文件】" aria-hidden="true">#</a> 04 【忽略某些文件】</h1>
<p>在push给远程仓库时需要忽略某些文件时，需要在本地仓库新建<code v-pre>.gitignore</code>的文件，注意在windows下无法直接创建该文件，只能通过<code v-pre>Git Bash</code>来<code v-pre>touch .gitignore </code>来生<code v-pre>gitignore</code>文件</p>
<p>然后在<code v-pre>.gitignore</code>中书写规则如下：</p>
<p>常见规则写法</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code>/mtk/   过滤整个文件夹

*.zip    过滤所有.zip文件

/mtk/do.java 过滤某个具体文件

!do.java 不过滤某个文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


