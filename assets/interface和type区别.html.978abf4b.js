import{_ as n,o as s,c as a,b as e}from"./app.634740c6.js";const p={},t=e(`<p>typescript \u4E2D\u6216\u591A\u6216\u5C11\u603B\u4F1A\u7528\u5230 interface \u548C type</p><p>\u8FD9\u4E24\u8005\u6709\u4E00\u4E9B\u76F8\u4F3C\u70B9\uFF0C\u6BD4\u5982\uFF1A</p><ol><li>\u90FD\u80FD\u53BB\u63CF\u8FF0\u4E00\u4E2A\u5BF9\u8C61\u6216\u8005\u51FD\u6570</li><li>\u90FD\u80FD\u4F7F\u7528 extends \u5173\u952E\u5B57\u8FDB\u884C\u6269\u5C55</li></ol><p>\u5199\u6CD5\u5982\u4E0B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//\u63CF\u8FF0\u4E00\u4E2A\u51FD\u6570</span>
<span class="token comment">// \u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0Ctype \u63CF\u8FF0\u65B9\u6CD5\uFF0C\u5B9A\u4E49\u8FD4\u56DE\u503C\u7C7B\u578B\u65F6\uFF0C\u4E0D\u80FD\u4F7F\u7528&quot;:&quot;\uFF0C\u9700\u8981\u4F7F\u7528\u7BAD\u5934\u7B26\u53F7&quot;=&gt;&quot;</span>
<span class="token keyword">type</span> <span class="token class-name">simpleFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>num1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> num2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">interface</span> <span class="token class-name">IAdd</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span>num1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> num2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token comment">// interface extends interface</span>
<span class="token keyword">interface</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">IStudent</span> <span class="token keyword">extends</span> <span class="token class-name">IPerson</span> <span class="token punctuation">{</span>
    grade<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token comment">// type extends type</span>
<span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token comment">// type \u4F7F\u7528 &amp; \u7EE7\u627F</span>
<span class="token keyword">type</span> <span class="token class-name">Student</span> <span class="token operator">=</span> Person <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
    grade<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token comment">// type extends interface</span>
<span class="token keyword">type</span> <span class="token class-name">TIStudent</span> <span class="token operator">=</span> IPerson <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
    grade<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token comment">// interface extends type</span>
<span class="token keyword">interface</span> <span class="token class-name">ITStudent</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    grade<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u51FA\u4E86\u76F8\u540C\u70B9\uFF0C\u4ED6\u4EEC\u4E4B\u95F4\u8FD8\u6709\u4E00\u4E9B\u4E0D\u540C\u4E4B\u5904\uFF0C\u5B98\u65B9\u6587\u6863\u6709\u8FD9\u6837\u4E00\u4E9B\u8BF4\u660E\uFF1A</p><ol><li>An interface can be named in an extends or implements clause, but a type alias for an object type literal cannot.</li><li>An interface can have multiple merged declarations, but a type alias for an object type literal cannot.</li></ol><p>\u5927\u81F4\u610F\u601D\u662F\uFF1A</p><ol><li>interface \u53EF\u4EE5\u7528\u5728 extends \u6216\u8005 implements \u4E2D\uFF0C\u4F46\u662F\u4E0D\u80FD\u4E3A\u5BF9\u8C61\u7C7B\u578B\u63D0\u4F9B\u522B\u540D</li><li>interface \u53EF\u4EE5\u6709\u591A\u4E2A\u5408\u5E76\u58F0\u660E\uFF0C\u4F46\u662F type \u4E0D\u53EF\u4EE5</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// type \u53EF\u4EE5\u4E3A\u57FA\u672C\u7C7B\u578B\u521B\u5EFA\u522B\u540D</span>
<span class="token keyword">type</span> <span class="token class-name">stringAlias</span> <span class="token operator">=</span> <span class="token builtin">string</span>
<span class="token comment">// \u8054\u5408\u7C7B\u578B</span>
<span class="token keyword">type</span> <span class="token class-name">stringNum</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span>
<span class="token comment">// \u6216\u8005\u662F</span>
<span class="token keyword">type</span> <span class="token class-name">enumType</span> <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;b&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;c&#39;</span>
\u8FD9\u65F6\u5019 enumType \u7C7B\u578B\u7684\u503C\u5C31\u53EA\u80FD\u662F a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c \u8FD9\u4E09\u8005\u4E4B\u4E00

<span class="token comment">// interface \u53EF\u4EE5\u5408\u5E76\u591A\u4E2A\u58F0\u660E</span>
<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    sex<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6700\u7EC8 interface Person \u662F\u8FD9\u6837\u7684</span>
<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
    name<span class="token operator">:</span> <span class="token builtin">number</span>
    sex<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[t];function i(c,o){return s(),a("div",null,l)}var u=n(p,[["render",i],["__file","interface\u548Ctype\u533A\u522B.html.vue"]]);export{u as default};
