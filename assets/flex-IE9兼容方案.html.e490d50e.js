import{_ as n,o as s,c as a,e as p}from"./app.659ada95.js";const t={},e=p(`<p>\u73B0\u4EE3\u6D4F\u89C8\u5668\u7ED9\u524D\u7AEF coder \u5E26\u6765\u4E86\u5404\u79CD\u4EE4\u4EBA\u60CA\u5947\u7684\u529F\u80FD\uFF0C\u4F8B\u5982\u6837\u5F0F\u65B9\u9762\u7684 css \u53D8\u91CF\uFF0Cflex\uFF0Cgrid\u7B49\u7B49\uFF0C\u4ED6\u4EEC\u6781\u5927\u7684\u65B9\u4FBF\u4E86\u5207\u56FE\u4ED4\u4EEC\u7684\u5DE5\u4F5C\u6548\u7387(\u80FD\u66F4\u5FEB\u4E50\u7684\u5207\u56FE\u4E86)\u3002</p><p>\u4F46\u662F\u4EBA\u751F\u5982\u5E38\uFF0C\u8C01\u53C8\u80FD\u4FDD\u8BC1\u4E0D\u4F1A\u7528\u5230\u90A3\u4E9B\u9648\u65E7\u4FDD\u5B88\u7684\u6D4F\u89C8\u5668\u5462\u3002\u5728\u7ECF\u5386\u4E86\u73B0\u5B9E\u7ED9\u7684\u4E00\u7CFB\u5217\u6BD2\u6253\u4EE5\u540E\uFF0C\u8FD9\u7BC7\u300Aflex IE9\u517C\u5BB9\u65B9\u6848\u300B\u7EC8\u4E8E\u5FEB\u8981\u51FA\u7089\u4E86\u3002</p><blockquote><p>\u7531\u4E8E\u6280\u672F\u6808\u662F vue\uFF0CIE9\u4EE5\u4E0B\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\uFF0C\u6240\u4EE5\u8FD9\u91CC\u5C31\u4E0D\u8003\u8651\u66F4\u4F4E\u7AEF\u7684\u6D4F\u89C8\u5668</p></blockquote><p>\u901A\u5E38\u6211\u4EEC\u4F1A\u7528 flex \u6765\u505A\u5C45\u4E2D\u3001\u5DE6\u53F3\u5E03\u5C40\uFF0C\u5DE6\u4E2D\u53F3\u5E03\u5C40\u7B49\uFF0C\u4ECA\u5929\u6211\u4EEC\u5C31\u4ECE\u8FD9\u51E0\u4E2A\u65B9\u9762\u6765\u8BA8\u8BBA\u8FD9\u4E9B\u9700\u6C42\u7684\u517C\u5BB9\u6027\u5199\u6CD5\u3002</p><h3 id="_1-\u5C45\u4E2D" tabindex="-1"><a class="header-anchor" href="#_1-\u5C45\u4E2D" aria-hidden="true">#</a> 1. \u5C45\u4E2D</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- html --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>span<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.1 \u6700\u7B80\u5355\u7684\u4E00\u79CD\u60C5\u51B5\uFF0C\u77E5\u9053\u5BB9\u5668\u7684\u9AD8\u5EA6</p><p>\u65B9\u6848\uFF1Aline-height + text-align</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* \u8BE5\u65B9\u6848\u9002\u7528\u4E8E\u5185\u5BB9\u4E3A\u884C\u5185\u5143\u7D20\uFF0C\u6216\u8005\u662F\u7EAF\u6587\u672C */</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u5982\u679C\u5185\u5BB9\u4E3A\u56FA\u5B9A\u5BBD\u5EA6\u7684\u5757\u5143\u7D20\uFF0C\u5219\u5C06 text-align \u6539\u4E3A marign */</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.content</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.2 \u4E0D\u77E5\u9053\u5BB9\u5668\u7684\u9AD8\u5EA6</p><p>\u65B9\u6848\u4E00\uFF1Atable-cell</p><p>text-align \u548C margin \u7684\u9009\u62E9\uFF0C\u4E5F\u53EF\u4EE5\u53C2\u7167\u4E0A\u9762\u7684\u60C5\u51B5</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">body, html</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* table-cell */</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u6848\u4E8C\uFF1A\u5B9A\u4F4D</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* \u5185\u5BB9\u5B9A\u5BBD */</span>
<span class="token selector">body, html</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.content</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u5185\u5BB9\u4E0D\u5B9A\u5BBD\uFF0C\u4E0D\u786E\u5B9A\u5BBD\u5EA6 */</span>
<span class="token selector">body, html</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.content</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token comment">/* \u6CE8\u610F\u4F7F\u7528 margin \u7684\u65F6\u5019\u4E0D\u8981\u8F7B\u6613\u4F7F\u7528\u767E\u5206\u6BD4\u7684\u503C\uFF0C\u56E0\u4E3A\u767E\u5206\u6BD4\u7684\u53C2\u7167\u5BF9\u8C61\u9700\u8981\u4EE5\u60C5\u51B5\u800C\u5B9A\uFF0C\u4E0D\u540C\u53C2\u7167\u5BF9\u8C61\u5DEE\u5F02\u5DE8\u5927 */</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> -25px<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> -25px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u6216\u8005\u4F7F\u7528 calc */</span>
<span class="token selector">.content</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>50% - 25px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>50% - 25px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C40" aria-hidden="true">#</a> \u5E03\u5C40</h3><h4 id="_2-\u5DE6\u53F3\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#_2-\u5DE6\u53F3\u5E03\u5C40" aria-hidden="true">#</a> 2. \u5DE6\u53F3\u5E03\u5C40</h4><p>\u8FD9\u79CD\u5E03\u5C40\u901A\u5E38\u662F\u4E00\u5217\u56FA\u5B9A\u5BBD\u5EA6\uFF0C\u53E6\u4E00\u5217\u81EA\u9002\u5E94\u5360\u6EE1\u5BB9\u5668\u5269\u4F59\u5BBD\u5EA6\uFF0C\u6240\u4EE5\u9700\u8981\u9700\u8981\u8003\u8651\u56FA\u5B9A\u5BBD\u5EA6\u7684 dom\uFF0C\u6211\u4EEC\u662F\u5426\u77E5\u9053</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- html --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>left<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>right<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.1 \u4E00\u5217\u81EA\u9002\u5E94\u5BBD\u5EA6 + \u53E6\u4E00\u5217\u77E5\u9053\u56FA\u5B9A\u5BBD\u5EA6</p><p>\u65B9\u6848\u4E00\uFF1Afloat + calc</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">body, html</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left, .right</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u6848\u4E8C\uFF1A\u5B9A\u4F4D + padding</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">body, html</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left, .right</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">padding-right</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right</span> <span class="token punctuation">{</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.2 \u5DE6\u4FA7\u81EA\u9002\u5E94\u5BBD\u5EA6 + \u53F3\u4FA7\u672A\u77E5\u56FA\u5B9A\u5BBD\u5EA6</p><p>\u8FD9\u79CD\u60C5\u51B5\u9002\u7528\u4E8E vue \u7EC4\u4EF6\u4E2D\u7ED9\u4E1A\u52A1\u4FA7\u63D0\u4F9B slot\uFF0C\u8BA9\u4F7F\u7528\u4FA7\u53BB\u6839\u636E\u5185\u5BB9\u81EA\u52A8\u6491\u5BBD\u5BBD\u5EA6</p><p>\u65B9\u6848\uFF1Atable \u5E03\u5C40</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">body, html</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left, .right</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4F7F\u7528 table \u5E03\u5C40\u7684\u65F6\u5019\u4F1A\u6709\u4E00\u4E9B\u5C5E\u6027\u5931\u6548\uFF0C\u4EE5\u53CA\u548C\u4E00\u4E9B\u5C5E\u6027\u6DF7\u5408\u4F7F\u7528\u7684\u65F6\u5019\u5728 IE9 \u7B49\u4F4E\u7AEF\u6D4F\u89C8\u5668\u4E0B\u4F1A\u6709\u610F\u60F3\u4E0D\u5230\u7684\u4E8B\u60C5\u53D1\u751F\uFF0C\u6240\u4EE5\u4F7F\u7528\u9700\u8C28\u614E</p></blockquote><p>2.3 \u5DE6\u4FA7\u672A\u77E5\u56FA\u5B9A\u5BBD\u5EA6 + \u53F3\u4FA7\u81EA\u9002\u5E94\u5BBD\u5EA6</p><p>\u8FD9\u79CD\u60C5\u51B5\u7684\u5E94\u7528\u573A\u666F\u540C\u4E0A</p><p>\u65B9\u6848\uFF1Afloat + BFC</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">body, html</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left, .right</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">padding-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.right</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u672A\u5B8C\u5F85\u7EED" tabindex="-1"><a class="header-anchor" href="#\u672A\u5B8C\u5F85\u7EED" aria-hidden="true">#</a> \u672A\u5B8C\u5F85\u7EED......</h3>`,34),c=[e];function l(i,o){return s(),a("div",null,c)}var r=n(t,[["render",l],["__file","flex-IE9\u517C\u5BB9\u65B9\u6848.html.vue"]]);export{r as default};
