import{_ as n,o as s,c as a,e as t}from"./app.2cc1671a.js";const p={},e=t(`<h5 id="_1-\u5B57\u7B26\u4E32\u9A7C\u5CF0\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_1-\u5B57\u7B26\u4E32\u9A7C\u5CF0\u8F6C\u6362" aria-hidden="true">#</a> 1. \u5B57\u7B26\u4E32\u9A7C\u5CF0\u8F6C\u6362</h5><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">str</span> string \u8981\u64CD\u4F5C\u7684\u5B57\u7B26\u4E32
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">sep</span> string \u5B57\u7B26\u4E32\u5206\u9694\u7B26\uFF0C\u9ED8\u8BA4\u4E2D\u5212\u7EBF
 */</span>
<span class="token keyword">function</span> <span class="token function">camelCase</span> <span class="token punctuation">(</span>str<span class="token punctuation">,</span> sep <span class="token operator">=</span> <span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
        str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>sep<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">(\\\\w)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token string">&quot;g&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">m<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> n<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-\u4E8C\u8FDB\u5236\u6570\u636E\u8F6C-base64" tabindex="-1"><a class="header-anchor" href="#_2-\u4E8C\u8FDB\u5236\u6570\u636E\u8F6C-base64" aria-hidden="true">#</a> 2. \u4E8C\u8FDB\u5236\u6570\u636E\u8F6C base64</h5><blockquote><p>\u540E\u53F0\u8FD4\u56DE\u7684\u6570\u636E\u7C7B\u578B\u662F\u4E8C\u8FDB\u5236\u6D41\uFF0C\u5BF9\u5E94\u7684\u54CD\u5E94\u7C7B\u578B\u662F\uFF1A arrayBuffer\u3002ArrayBuffer\u672C\u8D28\u4E0A\u662F\u7C7B\u578B\u5316\u6570\u7EC4\uFF0C\u5B83\u4F5C\u4E3A\u5185\u5B58\u533A\u57DF\uFF0C\u53EF\u4EE5\u5B58\u653E\u591A\u79CD\u7C7B\u578B\u7684\u6570\u636E\u3002\u4F46ArrayBuffer\u4E0D\u80FD\u76F4\u63A5\u64CD\u4F5C\uFF0C\u800C\u662F\u8981\u901A\u8FC7\u7C7B\u578B\u6570\u7EC4\u5BF9\u8C61\u6216 DataView \u5BF9\u8C61\u6765\u64CD\u4F5C\uFF0C\u5B83\u4EEC\u4F1A\u5C06\u7F13\u51B2\u533A\u4E2D\u7684\u6570\u636E\u8868\u793A\u4E3A\u7279\u5B9A\u7684\u683C\u5F0F\uFF0C\u5E76\u901A\u8FC7\u8FD9\u4E9B\u683C\u5F0F\u6765\u8BFB\u5199\u7F13\u51B2\u533A\u7684\u5185\u5BB9\u3002\u8FD9\u4E9B\u7C7B\u578B\u6570\u7EC4\u5BF9\u8C61\u6211\u4EEC\u79F0\u4E3A\u201C\u89C6\u56FE\u201D\u3002\u6709\u4EE5\u4E0B\u7C7B\u578B\uFF1A</p></blockquote><ol><li>Int8Array\uFF1A8\u4F4D\u6709\u7B26\u53F7\u6574\u6570\uFF0C\u957F\u5EA61\u4E2A\u5B57\u8282\u3002</li><li>Uint8Array\uFF1A8\u4F4D\u65E0\u7B26\u53F7\u6574\u6570\uFF0C\u957F\u5EA61\u4E2A\u5B57\u8282\u3002</li><li>Int16Array\uFF1A16\u4F4D\u6709\u7B26\u53F7\u6574\u6570\uFF0C\u957F\u5EA62\u4E2A\u5B57\u8282\u3002</li><li>Uint16Array\uFF1A16\u4F4D\u65E0\u7B26\u53F7\u6574\u6570\uFF0C\u957F\u5EA62\u4E2A\u5B57\u8282\u3002</li><li>Int32Array\uFF1A32\u4F4D\u6709\u7B26\u53F7\u6574\u6570\uFF0C\u957F\u5EA64\u4E2A\u5B57\u8282\u3002</li><li>Uint32Array\uFF1A32\u4F4D\u65E0\u7B26\u53F7\u6574\u6570\uFF0C\u957F\u5EA64\u4E2A\u5B57\u8282\u3002</li><li>Float32Array\uFF1A32\u4F4D\u6D6E\u70B9\u6570\uFF0C\u957F\u5EA64\u4E2A\u5B57\u8282\u3002</li><li>Float64Array\uFF1A64\u4F4D\u6D6E\u70B9\u6570\uFF0C\u957F\u5EA68\u4E2A\u5B57\u8282\u3002</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// new Uint8Array \u521B\u5EFA\u4E00\u4E2A\u6307\u5411\u540E\u53F0\u8FD4\u56DE\u7684\u4E8C\u8FDB\u5236\u6D41\u7684Uint8\u89C6\u56FE</span>
<span class="token comment">// fromCharCode()\u53EF\u63A5\u53D7\u591A\u4E2A\u6307\u5B9A\u7684 Unicode \u503C\uFF0C\u7136\u540E\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\u3002</span>
String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// \u6700\u7EC8\u4F7F\u7528 window.btoa \u65B9\u6CD5\u5C06\u5B57\u7B26\u4E32\u8F6C\u5316\u4E3A base64 \u7F16\u7801\u7684\u5B57\u7B26\u4E32\u518D\u62FC\u63A5\u5728 **data:image/jpeg;base64** \u540E\u9762,</span>
<span class="token keyword">let</span> imgUrl <span class="token operator">=</span> <span class="token string">&#39;data:image/jpeg;base64,&#39;</span> <span class="token operator">+</span> <span class="token function">btoa</span><span class="token punctuation">(</span>String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-\u4E8C\u8FDB\u5236\u6570\u636E\u56FE\u7247\u8F6C-base64" tabindex="-1"><a class="header-anchor" href="#_2-\u4E8C\u8FDB\u5236\u6570\u636E\u56FE\u7247\u8F6C-base64" aria-hidden="true">#</a> 2. \u4E8C\u8FDB\u5236\u6570\u636E\u56FE\u7247\u8F6C base64</h5><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Array&lt;byte&gt; \u662F\u4E00\u4E2A\u7531 ArrayBuffer, ArrayBufferView, Blob, DOMString \u7B49\u5BF9\u8C61\u6784\u6210\u7684 Array\uFF0C\u6216\u8005\u5176\u4ED6\u7C7B\u4F3C\u5BF9\u8C61\u7684\u6DF7\u5408\u4F53\uFF0C\u5B83\u5C06\u4F1A\u88AB\u653E\u8FDB Blob</span>
<span class="token comment">// options \u63D0\u4F9B\u4E86\u4E00\u4E2A type \u5C5E\u6027\uFF0C\u4EE3\u8868\u4E86\u5C06\u4F1A\u88AB\u653E\u5165\u5230 blob \u4E2D\u7684\u6570\u7EC4\u5185\u5BB9\u7684 MIME \u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E3A&quot;&quot;</span>
<span class="token keyword">var</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span>ArrayBuffer<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;image/jpeg&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> imUrl <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>blob<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[e];function c(l,i){return s(),a("div",null,o)}var u=n(p,[["render",c],["__file","utils-js.html.vue"]]);export{u as default};
