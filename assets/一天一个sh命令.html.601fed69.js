import{_ as n,o as s,c as a,e}from"./app.7690f8b0.js";const t={},l=e(`<h1 id="shell" tabindex="-1"><a class="header-anchor" href="#shell" aria-hidden="true">#</a> shell</h1><h2 id="\u6587\u4EF6\u63CF\u8FF0\u7B26-0-1-2" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u63CF\u8FF0\u7B26-0-1-2" aria-hidden="true">#</a> \u6587\u4EF6\u63CF\u8FF0\u7B26 0,1,2</h2><p>\u5BF9\u5E94\u5173\u7CFB\uFF1A</p><p>0: stdin\uFF0C\u6807\u51C6\u8F93\u5165 1: stdout\uFF0C\u6807\u51C6\u8F93\u51FA 2: stderr\uFF0C\u6807\u51C6\u9519\u8BEF</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6807\u51C6\u8F93\u51FA\uFF0C\u6B63\u786E\u6267\u884C\u547D\u4EE4\u7684\u8F93\u51FA\u4FE1\u606F</span>
<span class="token function">ls</span>
<span class="token comment"># \u6807\u51C6\u9519\u8BEF</span>
<span class="token comment"># \u4E0B\u9762\u76EE\u5F55\u4E0D\u5B58\u5728\uFF0C\u4F1A\u62A5\u9519 ls: {\u4E0D\u5B58\u5728\u76EE\u5F55}: No such file or directory\uFF0C</span>
<span class="token comment"># \u5176\u4E2D\u8FD9\u4E2A{\u4E0D\u5B58\u5728\u76EE\u5F55} \u5C31\u662F\u6807\u51C6\u8F93\u5165</span>
<span class="token function">ls</span> <span class="token punctuation">{</span>\u4E0D\u5B58\u5728\u76EE\u5F55<span class="token punctuation">}</span>

<span class="token comment"># \u91CD\u5B9A\u5411\uFF0C\u5C06ls\u547D\u4EE4\u8F93\u51FA\u7684\u5185\u5BB9\u5199\u5165\u5230\u6307\u5B9A\u6587\u4EF6</span>
<span class="token function">ls</span> <span class="token operator">&gt;</span> <span class="token punctuation">{</span>\u6587\u4EF6\u8DEF\u5F84<span class="token punctuation">}</span>
<span class="token comment"># \u4E22\u5F03 ls \u8F93\u51FA\u5185\u5BB9</span>
<span class="token function">ls</span> <span class="token operator">&gt;</span> /dev/null
<span class="token comment"># \u5C06\u547D\u4EE4ls\u62A5\u7684\u9519\u8BEF\uFF0C\u5199\u5165\u5230\u6587\u4EF6\uFF0C2\u662F\u6807\u51C6\u9519\u8BEF</span>
<span class="token function">ls</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token punctuation">{</span>\u6587\u4EF6\u8DEF\u5F84<span class="token punctuation">}</span>
<span class="token comment"># \u4E0A\u9762\u7684\u5199\u5165\u547D\u4EE4\u5982\u679C\u662F\u5199\u5165\u5230\u6587\u4EF6\uFF0C\u65B0\u5185\u5BB9\u4F1A\u8986\u76D6\u65E7\u5185\u5BB9</span>
<span class="token comment"># \u8FFD\u52A0\u5F0F\u7684\u5199\u5165\u6587\u4EF6\u9700\u8981\u5C06 &gt; \u66FF\u6362\u4E3A &gt;&gt;</span>
<span class="token function">ls</span> <span class="token operator">&gt;&gt;</span><span class="token punctuation">{</span>\u6587\u4EF6\u8DEF\u5F84<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[l];function i(o,p){return s(),a("div",null,c)}var r=n(t,[["render",i],["__file","\u4E00\u5929\u4E00\u4E2Ash\u547D\u4EE4.html.vue"]]);export{r as default};
