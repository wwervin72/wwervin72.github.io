import{_ as s,o as n,c as a,b as e}from"./app.0701a06a.js";const i={},l=e(`<h1 id="git-submodule-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#git-submodule-\u4F7F\u7528" aria-hidden="true">#</a> git submodule \u4F7F\u7528</h1><h2 id="\u5220\u9664\u5B50\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u5B50\u4ED3\u5E93" aria-hidden="true">#</a> \u5220\u9664\u5B50\u4ED3\u5E93</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5982\u679C\u6DFB\u52A0\u7684\u5B50\u6A21\u5757\u662F\u4E00\u4E2A\u7A7A\u9879\u76EE\uFF0C\u6CA1\u6709\u4EFB\u4F55\u6587\u4EF6\uFF0C\u5219\u4F1A\u5931\u8D25\uFF0C\u7136\u540E\u518D\u6B21\u8FDB\u884C\u6DFB\u52A0\u5B50\u6A21\u5757\u7684\u64CD\u4F5C(\u5DF2\u7ECF\u6709\u6587\u4EF6\uFF0C\u4E0D\u662F\u7A7A\u9879\u76EE)\uFF0C\u4F9D\u7136\u5931\u8D25\uFF0C\u53EF\u4EE5\u6267\u884C\u4EE5\u4E0B\u64CD\u4F5C</span>
<span class="token comment"># \u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u5220\u9664\u6389\u4E4B\u524D\u6267\u884C\u5931\u8D25\u65F6\uFF0C\u9057\u7559\u7684\u7F13\u5B58</span>
<span class="token function">git</span> <span class="token function">rm</span> --cached submodule
<span class="token function">rm</span> -rf submodule
<span class="token function">rm</span> -rf .git/modules/submodule
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6DFB\u52A0\u5B50\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u5B50\u4ED3\u5E93" aria-hidden="true">#</a> \u6DFB\u52A0\u5B50\u4ED3\u5E93</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u518D\u91CD\u65B0\u6DFB\u52A0 submodule</span>
<span class="token function">git</span> submodule <span class="token function">add</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>submoduleGitUrl<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>dirPath<span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53E6\u5916\u8FD8\u6709\u4E00\u79CD\u65B9\u5F0F\u521B\u5EFA\u5B50\u6A21\u5757</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> .gitmodules submodule
<span class="token function">git</span> commit -m <span class="token string">&quot;git submodule&quot;</span>
<span class="token function">git</span> submodule init
<span class="token comment"># \u66F4\u65B0\u5B50\u6A21\u5757\u5185\u5BB9</span>
<span class="token builtin class-name">cd</span> submodule <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> submodule update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528-git-status-\u67E5\u770B\u6DFB\u52A0\u7684\u5B50\u6A21\u5757\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-git-status-\u67E5\u770B\u6DFB\u52A0\u7684\u5B50\u6A21\u5757\u72B6\u6001" aria-hidden="true">#</a> \u4F7F\u7528 git status \u67E5\u770B\u6DFB\u52A0\u7684\u5B50\u6A21\u5757\u72B6\u6001</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> On branch master
    Changes to be committed:
    
        new file:   .gitmodules
        new file:   submodule
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u591A\u4E86\u4E24\u4E2A\u6587\u4EF6\uFF1A.gitmodules, submodule, \u5176\u4E2D .gitmodules \u5185\u5BB9\u5305\u542B submodule \u7684\u4E3B\u8981\u4FE1\u606F\uFF0C\u6307\u5B9A\u5B50\u6A21\u5757 reposirory \u8DEF\u5F84,\u4EE5\u53CA\u672C\u5730\u5B50\u6A21\u5757\u8DEF\u5F84, submodule \u6587\u4EF6\u5939\u5C31\u5305\u542B\u4E86\u5B50\u6A21\u5757\u7684\u6587\u4EF6</p><h2 id="\u66F4\u65B0\u5B50\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u5B50\u6A21\u5757" aria-hidden="true">#</a> \u66F4\u65B0\u5B50\u6A21\u5757</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FDB\u5165\u5230\u5B50\u9879\u76EE\u66F4\u65B0</span>
<span class="token builtin class-name">cd</span> submodule <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> pull
<span class="token comment"># \u4E5F\u53EF\u4EE5\u76F4\u63A5\u5728\u7236\u9879\u76EE\u4E2D\u66F4\u65B0</span>
<span class="token function">git</span> submodule foreach <span class="token function">git</span> pull
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5728 superProject \u8FD0\u884C git pull \u4F1A\u5C06\u5B50\u9879\u76EE\u7684 header \u6307\u5411\u7236\u9879\u76EE\u4E2D\u8BB0\u5F55\u7684 commit id\u3002 \u6240\u4EE5\u5982\u679C\u5148\u5728\u5B50\u9879\u76EE\u4E2D\u8FD0\u884C\u4E86 git pull\uFF0C\u518D\u53BB\u7236\u9879\u76EE\u6267\u884C git pull\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u4EE3\u7801\u7248\u672C\u4E0D\u4E00\u81F4 \u6CE8\u610F\u66F4\u65B0 submodule \u7684\u65F6\u5019\u5982\u679C\u6709\u65B0\u7684 commit id \u4EA7\u751F\uFF0C\u9700\u8981\u5728\u7236\u9879\u76EE\u4EA7\u751F\u4E00\u4E2A\u65B0\u7684\u63D0\u4EA4\uFF0CsuperProject \u6587\u4EF6\u4E2D\u7684 submodule commit\u4F1A\u53D8\u4E3A\u6700\u65B0\u7684commit id\u3002</p></blockquote><h2 id="\u63D0\u4EA4-submodule" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4EA4-submodule" aria-hidden="true">#</a> \u63D0\u4EA4 submodule</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B50\u6A21\u5757\u63D0\u4EA4\u5185\u5BB9\u548C\u666E\u901A\u4ED3\u5E93\u4E00\u81F4</span>
<span class="token function">git</span> <span class="token function">add</span> fileName
<span class="token function">git</span> commit -m<span class="token string">&#39;msg&#39;</span>
<span class="token function">git</span> push
<span class="token comment"># \u63D0\u4EA4\u5B8C\u6BD5\u5B50\u6A21\u5757\u5185\u5BB9\u540E\uFF0C\u5B50\u6A21\u5757 header \u6307\u5411\u7684 commit id \u53D1\u751F\u53D8\u5316\uFF0C\u8FD8\u9700\u8981\u66F4\u65B0 superProject \u7684\u5185\u5BB9</span>
<span class="token comment"># \u8FD9\u65F6\u5019\u5728 superProject \u4E2D\u4F1A\u63D0\u793A submodule \u6709\u4FEE\u6539\uFF0C\u9700\u8981\u63D0\u4EA4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5220\u9664-submodule" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664-submodule" aria-hidden="true">#</a> \u5220\u9664 submodule</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> --cached pod-library
<span class="token function">rm</span> -rf pod-library
<span class="token function">rm</span> .gitmodules
<span class="token comment"># \u66F4\u65B0 .git/config submodule \u76F8\u5173\u5185\u5BB9</span>
<span class="token comment"># \u5220\u9664 .git/modules/submoduleName \u6587\u4EF6</span>
<span class="token comment"># \u63D0\u4EA4\u5230\u8FDC\u7A0B\u670D\u52A1\u5668</span>
<span class="token function">git</span> commit -a -m <span class="token string">&#39;remove submodule&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),d=[l];function t(c,u){return n(),a("div",null,d)}var m=s(i,[["render",t],["__file","gitsubmodule.html.vue"]]);export{m as default};