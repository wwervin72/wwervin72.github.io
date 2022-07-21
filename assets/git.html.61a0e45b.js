import{_ as n,o as s,c as a,e}from"./app.659ada95.js";const i={},t=e(`<h4 id="\u4E00\u4E9B\u5E38\u7528\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E9B\u5E38\u7528\u64CD\u4F5C" aria-hidden="true">#</a> \u4E00\u4E9B\u5E38\u7528\u64CD\u4F5C</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u63D0\u4EA4\u672C\u5730\u6240\u6709\u4FEE\u6539\u5185\u5BB9\u5230\u6682\u5B58\u533A</span>
<span class="token function">git</span> <span class="token function">add</span> -A

<span class="token comment"># \u540C\u4E0A</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># \u5C06\u6682\u5B58\u533A\u5185\u5BB9\u6DFB\u52A0\u5230\u672C\u5730\u4ED3\u5E93\u4E2D</span>
<span class="token function">git</span> commit -m <span class="token string">&#39;some msg&#39;</span>

<span class="token comment"># git add -A \u548C git commit -m \u5FEB\u6377\u64CD\u4F5C</span>
<span class="token function">git</span> commit -a -m<span class="token string">&#39;&#39;</span>

<span class="token comment"># \u5C06\u672C\u5730\u4ED3\u5E93\u7684\u63D0\u4EA4\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93\u7684 master \u5206\u652F</span>
 <span class="token function">git</span> push origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u67E5\u770B\u5206\u652F\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5206\u652F\u60C5\u51B5" aria-hidden="true">#</a> \u67E5\u770B\u5206\u652F\u60C5\u51B5</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u672C\u5730\u5206\u652F</span>
<span class="token function">git</span> branch
<span class="token comment"># \u67E5\u770B\u6240\u6709\u5206\u652F\uFF08\u5305\u62EC\u8FDC\u7A0B\u5206\u652F\uFF09</span>
<span class="token function">git</span> branch -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u8FDC\u7A0B\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B\u4ED3\u5E93" aria-hidden="true">#</a> \u8FDC\u7A0B\u4ED3\u5E93</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u672C\u5730\u4ED3\u5E93\u7ED1\u5B9A\u8FDC\u7A0B\u4ED3\u5E93</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin url

<span class="token comment"># \u67E5\u770B\u672C\u5730\u6DFB\u52A0\u7684\u8FDC\u7A0B\u5730\u5740</span>
<span class="token function">git</span> remote -v

<span class="token comment"># \u5220\u9664\u8FDC\u7A0B\u5730\u5740</span>
<span class="token function">git</span> remote remove origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5E38\u89C1\u9519\u8BEF\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u9519\u8BEF\u5904\u7406" aria-hidden="true">#</a> \u5E38\u89C1\u9519\u8BEF\u5904\u7406</h4><h4 id="_1-fatal-refusing-to-merge-unrelated-histories" tabindex="-1"><a class="header-anchor" href="#_1-fatal-refusing-to-merge-unrelated-histories" aria-hidden="true">#</a> 1. fatal: refusing to merge unrelated histories</h4><blockquote><p>github \u65B0\u5EFA\u7684\u521B\u5E93\u4E0E\u672C\u5730\u7684\u4ED3\u5E93\u5408\u5E76\uFF0C\u4E24\u4E2A\u4ED3\u5E93\u4E0D\u540C\uFF0C\u6240\u4EE5\u51FA\u73B0\u8FD9\u79CD\u9519\u8BEF, \u9700\u8981\u8FD9\u4E48\u5199</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> pull origin master --allow-unrelated-histories
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-fatal-the-current-branch-master-has-no-upstream-branch" tabindex="-1"><a class="header-anchor" href="#_2-fatal-the-current-branch-master-has-no-upstream-branch" aria-hidden="true">#</a> 2. fatal: The current branch master has no upstream branch.</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push -u origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="git-clone-\u5E26\u4E0A-\u8D26\u53F7\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#git-clone-\u5E26\u4E0A-\u8D26\u53F7\u5BC6\u7801" aria-hidden="true">#</a> git clone \u5E26\u4E0A \u8D26\u53F7\u5BC6\u7801</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone -b <span class="token variable">\${BRANCH}</span> https://<span class="token variable">\${GIT_USERNAME}</span><span class="token builtin class-name">:</span><span class="token variable">\${GIT_PASSWORD}</span>@<span class="token variable">\${GIT_URL}</span>/<span class="token variable">\${respository}</span>.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5982\u679C GIT_USERNAME \u4E2D\u5305\u542B @ \u7B26\u53F7\uFF0C\u9700\u8981\u5C06 GIT_USERNAME \u4E2D\u5230 @ \u4FEE\u6539\u4E3A %40</p></blockquote><h4 id="git\u5FFD\u7565\u8DDF\u8E2A\u5DF2\u5728\u8FDC\u7A0B\u4ED3\u5E93\u91CC\u7684\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#git\u5FFD\u7565\u8DDF\u8E2A\u5DF2\u5728\u8FDC\u7A0B\u4ED3\u5E93\u91CC\u7684\u6587\u4EF6" aria-hidden="true">#</a> git\u5FFD\u7565\u8DDF\u8E2A\u5DF2\u5728\u8FDC\u7A0B\u4ED3\u5E93\u91CC\u7684\u6587\u4EF6</h4><ol><li>git rm --cached file (\u628A\u6587\u4EF6\u4ECE\u6682\u5B58\u533Aindex\u4E2D\u5220\u9664)</li><li>\u5728 .gitignore \u4E2D\u6DFB\u52A0\u6B64\u6B64\u6587\u4EF6</li><li>git commit -m &#39;msg&#39;</li><li>git push</li></ol><h4 id="\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F" aria-hidden="true">#</a> \u62C9\u53D6\u8FDC\u7A0B\u5206\u652F</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&lt;</span><span class="token operator">!</span>--\u62C9\u53D6\u5206\u652F--<span class="token operator">&gt;</span>
<span class="token function">git</span> fetch origin branchName
<span class="token operator">&lt;</span><span class="token operator">!</span>--\u4F7F\u7528\u62C9\u53D6\u5F97\u5206\u652F\u521B\u5EFA\u65B0\u5206\u652F--<span class="token operator">&gt;</span>
<span class="token function">git</span> checkout -b newBranchName origin/branchName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5220\u9664\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u5206\u652F" aria-hidden="true">#</a> \u5220\u9664\u5206\u652F</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5220\u9664\u672C\u5730\u5206\u652F</span>
<span class="token function">git</span> branch -d <span class="token variable">\${branch}</span>
<span class="token comment"># \u5220\u9664\u8FDC\u7A0B\u5206\u652F</span>
<span class="token function">git</span> push origin --delete <span class="token variable">\${branch}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tag-\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#tag-\u64CD\u4F5C" aria-hidden="true">#</a> Tag \u64CD\u4F5C</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u83B7\u53D6\u8FDC\u7A0Btag</span>
<span class="token function">git</span> fetch origin tag <span class="token punctuation">{</span><span class="token punctuation">{</span>tagName<span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment"># \u5220\u9664\u8FDC\u7A0Btag</span>
<span class="token comment"># \u5220\u9664\u672C\u5730</span>
<span class="token function">git</span> tag -d <span class="token variable">\${tagName}</span>
<span class="token comment"># \u5220\u9664\u8FDC\u7A0B tag</span>
<span class="token function">git</span> push origin :refs/tags/<span class="token variable">\${tagName}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6062\u590D\u8BEF\u5220\u7684\u672C\u5730\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u6062\u590D\u8BEF\u5220\u7684\u672C\u5730\u5206\u652F" aria-hidden="true">#</a> \u6062\u590D\u8BEF\u5220\u7684\u672C\u5730\u5206\u652F</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&lt;</span><span class="token operator">!</span>--\u5DF2\u7ECF\u63A8\u51FA terminal \u7684\uFF0C\u53EF\u4EE5\u67E5\u770B\u4E4B\u524D\u7684 commit SHA1\u503C--<span class="token operator">&gt;</span>
<span class="token function">git</span> reflog 
<span class="token operator">&lt;</span><span class="token operator">!</span>--\u6CA1\u6709\u9000\u51FA\u7684\uFF0C\u5728\u5220\u9664\u7684\u65F6\u5019\u4F1A\u6709\u4E00\u4E2Asha\u503C1\uFF0C\u5229\u7528\u8FD9\u4E2Asha1\u503C\uFF0C\u53BB\u6062\u590D\u5206\u652F--<span class="token operator">&gt;</span>
<span class="token function">git</span> branch -D master2
<span class="token operator">&gt;</span> Deleted branch master2 <span class="token punctuation">(</span>was 130d7ba<span class="token punctuation">)</span>.    <span class="token operator">&lt;</span>-- This is the SHA1 we need to restore it<span class="token operator">!</span>
<span class="token function">git</span> branch master2 130d7ba
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u64A4\u9500\u6587\u4EF6\u6539\u52A8" tabindex="-1"><a class="header-anchor" href="#\u64A4\u9500\u6587\u4EF6\u6539\u52A8" aria-hidden="true">#</a> \u64A4\u9500\u6587\u4EF6\u6539\u52A8</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u64A4\u9500\u6307\u5B9A\u6587\u4EF6\u6539\u52A8</span>
<span class="token function">git</span> checkout -- <span class="token punctuation">{</span><span class="token punctuation">{</span>filename<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token comment"># \u64A4\u9500\u6240\u6709\u6587\u4EF6\u6539\u52A8</span>
<span class="token function">git</span> checkout <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="commit-\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#commit-\u76F8\u5173" aria-hidden="true">#</a> commit \u76F8\u5173</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5207\u6362\u5230\u6307\u5B9A commit</span>
<span class="token function">git</span> checkout <span class="token variable">\${commitId}</span>
<span class="token comment"># \u67E5\u770B commit \u63D0\u4EA4\u7684\u8BE6\u7EC6\u4FE1\u606F</span>
<span class="token function">git</span> show <span class="token variable">\${commitId}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6682\u5B58\u6539\u52A8-git-stash" tabindex="-1"><a class="header-anchor" href="#\u6682\u5B58\u6539\u52A8-git-stash" aria-hidden="true">#</a> \u6682\u5B58\u6539\u52A8 git stash</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4FDD\u5B58\u5F53\u524D\u672Acommit\u7684\u4EE3\u7801</span>
<span class="token function">git</span> stash

<span class="token comment"># \u4FDD\u5B58\u5F53\u524D\u672Acommit\u7684\u4EE3\u7801\u5E76\u6DFB\u52A0\u5907\u6CE8</span>
<span class="token function">git</span> stash save <span class="token string">&quot;msg&quot;</span> 

<span class="token comment"># \u5217\u51FAstash\u7684\u6240\u6709\u8BB0\u5F55</span>
<span class="token function">git</span> stash list

<span class="token comment"># \u5220\u9664stash\u7684\u6240\u6709\u8BB0\u5F55</span>
<span class="token function">git</span> stash <span class="token function">clear</span>

<span class="token comment"># \u5E94\u7528\u6700\u8FD1\u4E00\u6B21\u7684stash</span>
<span class="token function">git</span> stash apply

<span class="token comment"># \u5E94\u7528\u6700\u8FD1\u4E00\u6B21\u7684stash\uFF0C\u968F\u540E\u5220\u9664\u8BE5\u8BB0\u5F55</span>
<span class="token function">git</span> stash pop

<span class="token comment"># \u5220\u9664\u6700\u8FD1\u7684\u4E00\u6B21stash</span>
<span class="token function">git</span> stash drop

<span class="token comment"># \u5E94\u7528\u67D0\u6761\u8BB0\u5F55</span>
<span class="token function">git</span> stash apply stash@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u56DE\u9000\u7248-reset" tabindex="-1"><a class="header-anchor" href="#\u56DE\u9000\u7248-reset" aria-hidden="true">#</a> \u56DE\u9000\u7248 reset</h4><p>\u56DE\u9000\u7248\u672C\u5230\u67D0\u6B21\u63D0\u4EA4\uFF0C\u4F1A\u4E22\u5F03\u6389\u76EE\u6807\u63D0\u4EA4\u5230\u5F53\u524D\u7684\u63D0\u4EA4\uFF0C\u6709\u4E2A\u9009\u9879 --hard \u6216\u8005 --soft\uFF0Chard \u662F\u6307\u76F4\u63A5\u4E22\u5F03\u76EE\u6807\u63D0\u4EA4\u5230\u5F53\u524D\u63D0\u4EA4\u7684\u5185\u5BB9\uFF0C--soft \u867D\u7136\u4F1A\u4E22\u6389\u63D0\u4EA4\uFF0C\u4F46\u662F\u8FD9\u4E9B\u63D0\u4EA4\u6539\u52A8\u7684\u5185\u5BB9\u4F1A\u53D8\u4E3A modified \u72B6\u6001</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u56DE\u9000\u5230\u6307\u5B9A\u7684\u67D0\u6B21\u63D0\u4EA4</span>
<span class="token function">git</span> reset --soft <span class="token punctuation">{</span><span class="token punctuation">{</span>commitID<span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="revert" tabindex="-1"><a class="header-anchor" href="#revert" aria-hidden="true">#</a> revert</h4><p>\u7ED9\u5B9A\u4E00\u4E2A\u6216\u591A\u4E2A\u73B0\u6709\u63D0\u4EA4\uFF0C\u6062\u590D\u76F8\u5173\u63D0\u4EA4\u5F15\u5165\u7684\u66F4\u6539\uFF0C\u5E76\u8BB0\u5F55\u4E00\u4E9B\u8FD9\u4E9B\u66F4\u6539\u7684\u65B0\u63D0\u4EA4\u3002\u8FD9\u5C31\u8981\u6C42\u4F60\u7684\u5DE5\u4F5C\u6811\u662F\u5E72\u51C0\u7684\uFF08\u6CA1\u6709\u6765\u81EA\u5934\u90E8\u7684\u4FEE\u6539\uFF09\uFF0C\u5C06\u73B0\u6709\u7684\u63D0\u4EA4\u8FD8\u539F\uFF0C\u6062\u590D\u63D0\u4EA4\u7684\u5185\u5BB9\uFF0C\u5E76\u751F\u6210\u4E00\u6761\u8FD8\u539F\u8BB0\u5F55\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u64A4\u9500\u67D0\u6B21\u63D0\u4EA4\u4FEE\u6539\u7684\u5185\u5BB9</span>
<span class="token function">git</span> revert commitID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cherry-pick" tabindex="-1"><a class="header-anchor" href="#cherry-pick" aria-hidden="true">#</a> cherry-pick</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5408\u5E76\u67D0\u4E2A commit \u5230\u5206\u652F</span>
<span class="token function">git</span> cherry-pick commitID

<span class="token comment"># \u4E00\u6B21\u8F6C\u79FB\u591A\u4E2A\u63D0\u4EA4</span>
<span class="token function">git</span> cherry-pick commitID1 commitID2

<span class="token comment"># \u591A\u4E2A\u8FDE\u7EED\u7684commit\uFF0C\u533A\u95F4\u590D\u5236</span>
<span class="token function">git</span> cherry-pick commitID1^<span class="token punctuation">..</span>commitID2

<span class="token comment"># \u5982\u679C\u6709\u51B2\u7A81\uFF0C\u81EA\u52A8\u63D0\u4EA4\uFF0C\u5219\u9700\u8981\u89E3\u51B3\u51B2\u7A81\u540E git commit \u624B\u52A8\u8FDB\u884C\u63D0\u4EA4\uFF0C\u6216\u8005 git add . \u540E\u76F4\u63A5\u4F7F\u7528 git cherry-pick --continue \u7EE7\u7EED</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> cherry-pick --continue

<span class="token comment"># \u653E\u5F03 cherry-pick\uFF0C\u56DE\u5230\u64CD\u4F5C\u524D\u7684\u6837\u5B50\uFF0C\u5C31\u50CF\u4EC0\u4E48\u90FD\u6CA1\u505A\u8FC7</span>
gits cherry-pick --abort

<span class="token comment"># \u4E2D\u65AD\u64CD\u4F5C\uFF0C\u5F53\u524D\u5206\u652F\u4E2D\u672A\u51B2\u7A81\u7684\u5185\u5BB9\u72B6\u6001\u5C06\u4E3A modified</span>
<span class="token function">git</span> cherry-pick --quit

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="reflog" tabindex="-1"><a class="header-anchor" href="#reflog" aria-hidden="true">#</a> reflog</h4><p>\u6B64\u547D\u4EE4\u7BA1\u7406\u91CD\u5F55\u4E2D\u8BB0\u5F55\u7684\u4FE1\u606F\uFF0C\u5B83\u8BB0\u5F55\u4E86\u6240\u6709\u7684 commit \u64CD\u4F5C\u8BB0\u5F55\uFF0C\u4FBF\u4E8E\u9519\u8BEF\u64CD\u4F5C\u540E\u627E\u56DE\u8BB0\u5F55\u3002\u4ED6\u548C git log \u7684\u533A\u522B\u662F\uFF0C\u5982\u679C\u6211\u4EEC\u4F7F\u7528\u4E86 git reset --hard commitID\u540E\uFF0Cgit log \u5219\u4F1A\u627E\u4E0D\u5230 commitID \u4E4B\u540E\u7684\u63D0\u4EA4\u3002\u4F46\u662F git reflog \u662F\u4F1A\u8BB0\u5F55\u6240\u6709\u7684\u64CD\u4F5C\u8BB0\u5F55\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5B83\u627E\u5230 commitID \u4E4B\u540E\u7684\u63D0\u4EA4\u4FBF\u4E8E\u9519\u8BEF reset \u540E\u6062\u590D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> reflog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,42),c=[t];function l(d,r){return s(),a("div",null,c)}var p=n(i,[["render",l],["__file","git.html.vue"]]);export{p as default};
