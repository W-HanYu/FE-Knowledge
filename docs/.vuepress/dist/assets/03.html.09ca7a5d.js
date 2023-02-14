import{_ as c,r as s,o as t,c as i,a as e,b,d as l,e as a}from"./app.8f1211c8.js";const p={},h=a('<h1 id="_03-【远程库操作】" tabindex="-1"><a class="header-anchor" href="#_03-【远程库操作】" aria-hidden="true">#</a> 03 【远程库操作】</h1><h2 id="_1-推送到远程库" tabindex="-1"><a class="header-anchor" href="#_1-推送到远程库" aria-hidden="true">#</a> 1.推送到远程库</h2><h3 id="_1-1-创建github仓库" tabindex="-1"><a class="header-anchor" href="#_1-1-创建github仓库" aria-hidden="true">#</a> 1.1 创建github仓库</h3>',3),m={href:"https://github.com/new",target:"_blank",rel:"noopener noreferrer"},o=a('<p><img src="https://i0.hdslb.com/bfs/album/b05d10d6b37bb5f9f891ccf27830a317077d0488.png" alt="image-20221006163144237"></p><h3 id="_1-2-创建远程库地址别名" tabindex="-1"><a class="header-anchor" href="#_1-2-创建远程库地址别名" aria-hidden="true">#</a> 1.2 创建远程库地址别名</h3><p><code>git remote -v</code> 查看当前所有远程地址别名</p><p><code>git remote add [别名] [远程地址]</code></p><p><img src="https://i0.hdslb.com/bfs/album/ab53875fc39c30f6ca095d24140d48074e126bde.png" alt="image-20221006163319039"></p><h3 id="_1-3-推送" tabindex="-1"><a class="header-anchor" href="#_1-3-推送" aria-hidden="true">#</a> 1.3 推送</h3><p><code>git push [别名] [分支名]</code></p><p><img src="https://i0.hdslb.com/bfs/album/dbe8022495ec04005cf86c6585d7b0ff9fdfbc7a.png" alt="image-20221006163529176"></p><p><img src="https://i0.hdslb.com/bfs/album/e0cdbb08ab94f92488cea7364aff62c756f46af0.png" alt="image-20221006163609629"></p><h2 id="_2-加入团队并推送" tabindex="-1"><a class="header-anchor" href="#_2-加入团队并推送" aria-hidden="true">#</a> 2.加入团队并推送</h2><h3 id="_2-1-克隆项目到本地" tabindex="-1"><a class="header-anchor" href="#_2-1-克隆项目到本地" aria-hidden="true">#</a> 2.1 克隆项目到本地</h3><p><code>git clone 仓库地址</code></p><p><img src="https://i0.hdslb.com/bfs/album/376b2d6c6b3ce3ec1884846b4612e4baaee887d6.png" alt="image-20221006164655915"></p><p><strong>效果</strong></p><ul><li><p>完整的把远程库下载到本地</p></li><li><p>创建 origin 远程地址别名</p></li><li><p>初始化本地库</p></li></ul><h3 id="_2-2-添加新成员加入团队" tabindex="-1"><a class="header-anchor" href="#_2-2-添加新成员加入团队" aria-hidden="true">#</a> 2.2 添加新成员加入团队</h3><p><img src="https://i0.hdslb.com/bfs/album/160e7bc082c369a8e1be8718e3ecc8641ba4feef.png" alt="image-20221006164837999"></p><p><img src="https://i0.hdslb.com/bfs/album/0dd960325ff5f1a2577527586ff4a7831ea9447c.png" alt="image-20221006164827658"></p><p><img src="https://i0.hdslb.com/bfs/album/48d28340170ded53a39b9dba38f7b59d804a5bef.png" alt="image-20221006165016543"></p><p><img src="https://i0.hdslb.com/bfs/album/20ce4dbc52e106cacf6c718a37cf7e3276349e57.png" alt="image-20221006165030823"></p><h3 id="_2-3-推送更新到远程库" tabindex="-1"><a class="header-anchor" href="#_2-3-推送更新到远程库" aria-hidden="true">#</a> 2.3 推送更新到远程库</h3><p>1.更改用户名</p><p><img src="https://i0.hdslb.com/bfs/album/862b3ffad28ebcc8165429d329755c631d65d921.png" alt="image-20221006184421259"></p><p>2.修改文件并提交到本地库</p><p><img src="https://i0.hdslb.com/bfs/album/2bf77de9ff6cad26fca0e4a7201823d9d5375629.png" alt="image-20221006170100066"></p><p>3.推送到远程库</p><p><img src="https://i0.hdslb.com/bfs/album/af73530bbd73a051ef3385723d9097b22d0f58a2.png" alt="image-20221006184352833"></p><p><img src="https://i0.hdslb.com/bfs/album/b3669e7d7b83667542ab915c56af73ec7b498259.png" alt="image-20221006184333691"></p><p><img src="https://i0.hdslb.com/bfs/album/c26190ec9b82452be5a8183591a00cd667fb72e7.png" alt="image-20221006184344102"></p><h2 id="_3-远程库的-ssh-登录" tabindex="-1"><a class="header-anchor" href="#_3-远程库的-ssh-登录" aria-hidden="true">#</a> 3.远程库的 SSH 登录</h2><p>在 Windows 10 系统中，<code>凭据管理器</code>为我们记录了 GitHub 的 Windows 凭据，再次从终端经过 GitHub 写数据时，可自动保持登录状态。但其他 OS 不一定有这样的功能，因此不便于频繁地提交版本。 为此，可以使用 SSH 登录的方式访问远程库。</p><blockquote><p>不同于 SSH 登录，使用 HTTPS 的方式可以在多个 GitHub 帐号间管理仓库。</p></blockquote><p><img src="https://i0.hdslb.com/bfs/album/0750d34afa912952dffe12e622d3246d79e29190.png" alt="image-20220827231735884"></p><h3 id="_3-1-在本地-home-目录生成-github-公-私钥" tabindex="-1"><a class="header-anchor" href="#_3-1-在本地-home-目录生成-github-公-私钥" aria-hidden="true">#</a> 3.1 在本地 Home 目录生成 GitHub 公/私钥</h3><p><code>cd ~</code>进入当前用户的根目录</p><p><code>rm -rvf .ssh</code> 删除.ssh 目录</p><p>使用命令<code>ssh-keygen -t &lt;KeyType&gt; -C &lt;Annotation|AccountEmailAddress&gt;</code>在本地 Home 目录生成 GitHub 公/私钥。</p><p><code>ssh-keygen -t rsa -C dselgent@qq.com</code></p><p><img src="https://i0.hdslb.com/bfs/album/e3df81a1b0d5107c9ff362d889fddc622a9eec79.png" alt="image-20220827232018116"></p><h3 id="_3-2-查看-ssh-目录下的文件" tabindex="-1"><a class="header-anchor" href="#_3-2-查看-ssh-目录下的文件" aria-hidden="true">#</a> 3.2 查看 .ssh 目录下的文件</h3><p><code>cd .ssh</code></p><p><code>cat id_rsa.pub</code></p><p><img src="https://i0.hdslb.com/bfs/album/4a3cfe46bde89a158e7cbb3e69a94ad524d649f9.png" alt="image-20220827232355616"></p><p>将秘钥全部复制</p><h3 id="_3-3-在-github-配置该-ssh-公钥" tabindex="-1"><a class="header-anchor" href="#_3-3-在-github-配置该-ssh-公钥" aria-hidden="true">#</a> 3.3 在 GitHub 配置该 SSH 公钥</h3><p>登录 GitHub 账户后，进入Settings中的SSH and GPG keys项执行配置：</p><p><img src="https://i0.hdslb.com/bfs/album/a0d69e52601014165960be29aa4f0337c65e19ed.png" alt="image-20220827232156887"></p><p><img src="https://i0.hdslb.com/bfs/album/824f07f439e1b196bb6149982e2a8e1daecbbe88.png" alt="image-20220827232550986"></p><h3 id="_3-4-更改在本地的远程库地址" tabindex="-1"><a class="header-anchor" href="#_3-4-更改在本地的远程库地址" aria-hidden="true">#</a> 3.4 更改在本地的远程库地址</h3><p>使用<code>git remote set-url &lt;Alias4RemoteRepositoryAddress&gt; &lt;RemoteRepositoryAddress&gt;</code>命令，将远程库地址由 HTTPS 方式切换为 SSH 方式：</p><p><img src="https://i0.hdslb.com/bfs/album/47860f6ccebf9bc54d7ab03508c3bfb9691e840d.png" alt="image-20220827233228262"></p><p>也可以直接添加一个新的别名<code>origin_ssh</code></p><p><img src="https://i0.hdslb.com/bfs/album/8b98f488047eeb66f67cb46ed0a37be7a04b6210.png" alt="image-20221006192328180"></p><p>随后，即可使用 SSH 的方式免密读写 GitHub 的内容。</p><p><img src="https://i0.hdslb.com/bfs/album/2b467d5e5a1589e6f173a8e13e0536317f579bea.png" alt="image-20221006192705628"></p><p><img src="https://i0.hdslb.com/bfs/album/1f096bcdf229fcafe39fb35fe599fc304b204b02.png" alt="image-20221006192719254"></p><h2 id="_4-解决冲突" tabindex="-1"><a class="header-anchor" href="#_4-解决冲突" aria-hidden="true">#</a> 4.解决冲突</h2><h3 id="_4-1-冲突的产生" tabindex="-1"><a class="header-anchor" href="#_4-1-冲突的产生" aria-hidden="true">#</a> 4.1 冲突的产生</h3><p>冲突的产生：本地仓库与线上不一致时未git pull就开始编写代码 并且在编写完代码后试图git push</p><p><img src="https://i0.hdslb.com/bfs/album/0795ecfec7107ef45a666b5a85c91cd0014dd448.png" alt="image-20221006193046462"></p><h3 id="_4-2-解决冲突" tabindex="-1"><a class="header-anchor" href="#_4-2-解决冲突" aria-hidden="true">#</a> 4.2 解决冲突</h3><ul><li>要点 <ul><li>如果不是基于 GitHub 远程库的最新版所做的修改，不能推送，必须先拉取。</li><li>拉取下来后如果进入冲突状态，则按照“分支冲突解决”操作解决即可。</li></ul></li></ul><ol><li>首先我要在两个本地库更改<code>test2.txt</code>中的内容</li></ol><p><code>dselegent</code></p><p><img src="https://i0.hdslb.com/bfs/album/d97b6d67b7f1fb3d3438b623ed938e00cda0f894.png" alt="image-20221006194022775"></p><p><code>dselegent-gmail</code></p><p><img src="https://i0.hdslb.com/bfs/album/b208a65e7079d88b836dd82e52c0f6f81893456e.png" alt="image-20221006194132829"></p><ol start="2"><li><code>dselegent</code>推送到远程库</li></ol><p><img src="https://i0.hdslb.com/bfs/album/b85100c12247ffe3ea0d3fad8caf47574f9954ec.png" alt="image-20221006194251330"></p><p><img src="https://i0.hdslb.com/bfs/album/bad1f1f4e88b1e815ce1145fe83f5d708a74355d.png" alt="image-20221006194305353"></p><p><img src="https://i0.hdslb.com/bfs/album/c1501c43f0ebf34414cdc56e00a9fdf6f859470e.png" alt="image-20221006194313397"></p><ol start="3"><li><code>dselegent-gmail</code>推送到远程库</li></ol><p><img src="https://i0.hdslb.com/bfs/album/1a220b056d94b03f7c2a871080a6e1b7b581d277.png" alt="image-20221006194350085"></p><ol start="4"><li>在<code>dselegent-gmail</code>中使用<code>git pull origin master</code>拉取最新的内容</li></ol><blockquote><p>pull=fetch+merge</p><p>git fetch [远程库地址别名]</p><p>git merge [远程库地址别名/远程分支名】</p><p>git pull [远程库地址别名] [远程分支名]</p></blockquote><p><img src="https://i0.hdslb.com/bfs/album/c4de3179c727ab71caec921e724fd5baa65b8f63.png" alt="image-20221006194801202"></p><p><img src="https://i0.hdslb.com/bfs/album/cf371bc2ef278b043c064f40161721dbcc7efbad.png" alt="image-20221006194846829"></p><p><img src="https://i0.hdslb.com/bfs/album/3ff0c93ee2d342482109fa4eb60d1467cf98aa2b.png" alt="image-20221006195232425"></p><ol start="5"><li><code>dselegent-gmail</code>推送到远程库</li></ol><p><img src="https://i0.hdslb.com/bfs/album/bc7b0a1f2e151dc3a0d06c93be2a271958d6aacd.png" alt="image-20221006195309995"></p><p><img src="https://i0.hdslb.com/bfs/album/2147294762cdc4d2786d1632133be9c505427061.png" alt="image-20221006195326732"></p><p><img src="https://i0.hdslb.com/bfs/album/0d3ff32454438a26393341684896e6eb7ffe1d7d.png" alt="image-20221006195334121"></p><h2 id="_5-跨团队协作" tabindex="-1"><a class="header-anchor" href="#_5-跨团队协作" aria-hidden="true">#</a> 5.跨团队协作</h2><blockquote><p>这里先把<code>dselegent-gmail</code>退出团队用来做示例</p></blockquote><ol><li>点击右上角<code>fork</code></li></ol><p><img src="https://i0.hdslb.com/bfs/album/abedd3afcf209e0cd7d0e4afe2eee71801ca595d.png" alt="image-20221006195537205"></p><p><img src="https://i0.hdslb.com/bfs/album/38e62a024e6ae0d7ba7f07f5e3924e5de45595c9.png" alt="image-20221006200645023"></p><ol start="2"><li>克隆到本地</li></ol><p><img src="https://i0.hdslb.com/bfs/album/5bf2a4d9c3d73715a44267cf10a48ecc66cef573.png" alt="image-20221006200507493"></p><ol start="3"><li>修改文件推送到远程库</li></ol><p><img src="https://i0.hdslb.com/bfs/album/97df763778fb3f52f33ed5326a9a5f50e464d833.png" alt="image-20221006200627526"></p><ol start="4"><li><code>Pull Request</code></li></ol><p><img src="https://i0.hdslb.com/bfs/album/5dc9a0f07e66b63c8a4d2924060642ee4bfddc21.png" alt="image-20221006200928505"></p><p><img src="https://i0.hdslb.com/bfs/album/258e00e80ea6b2a20aca8e5432e5ae95ef7beb45.png" alt="image-20221006200916957"></p><ol start="5"><li><p>在<code>dselegent</code>中接收</p><p><img src="https://i0.hdslb.com/bfs/album/b11908ec46cd8a43ad2997ff48da2debbceb833b.png" alt="image-20221006201438135"></p></li></ol><p><img src="https://i0.hdslb.com/bfs/album/201e4901e8105834e2cc0e88fc16cfe2c2c8eef2.png" alt="image-20221006201507387"></p><p><img src="https://i0.hdslb.com/bfs/album/a5dda62ef328780fd512b719bc45bfdc2271caa3.png" alt="image-20221006201542512"></p>',97);function f(r,g){const d=s("ExternalLinkIcon");return t(),i("div",null,[h,e("p",null,[e("a",m,[b("创建新仓库 (github.com)"),l(d)])]),o])}const u=c(p,[["render",f],["__file","03.html.vue"]]);export{u as default};
