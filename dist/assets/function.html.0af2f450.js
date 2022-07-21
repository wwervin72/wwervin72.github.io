import{_ as n,o as s,c as a,e}from"./app.2cc1671a.js";const t={},p=e(`<h1 id="\u51FD\u6570\u7684\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7684\u6269\u5C55" aria-hidden="true">#</a> \u51FD\u6570\u7684\u6269\u5C55</h1><h3 id="_1-\u51FD\u6570\u53C2\u6570\u7684\u9ED8\u8BA4\u503C" tabindex="-1"><a class="header-anchor" href="#_1-\u51FD\u6570\u53C2\u6570\u7684\u9ED8\u8BA4\u503C" aria-hidden="true">#</a> 1. \u51FD\u6570\u53C2\u6570\u7684\u9ED8\u8BA4\u503C</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">fn</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x <span class="token operator">+</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// hello world</span>
    
    <span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token parameter">x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">5</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// error </span>
        <span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// error</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// \u60F0\u6027\u6C42\u503C</span>
    
    <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">p <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 100</span>
    
    x <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 101</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u4E0E\u89E3\u6784\u8D4B\u503C\u9ED8\u8BA4\u503C\u7ED3\u5408\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u4E0E\u89E3\u6784\u8D4B\u503C\u9ED8\u8BA4\u503C\u7ED3\u5408\u4F7F\u7528" aria-hidden="true">#</a> 2. \u4E0E\u89E3\u6784\u8D4B\u503C\u9ED8\u8BA4\u503C\u7ED3\u5408\u4F7F\u7528</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">foo</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>x<span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>
    <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// undefined 5</span>
    <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment">// 1, 2</span>
    <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// cannot read property &#39;x&#39; of undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    function fetch(url, { body = &#39;&#39;, method = &#39;GET&#39;, headers = {} }) {
      console.log(method);
    }
    
    fetch(&#39;http://example.com&#39;, {})
    // &quot;GET&quot;
    
    fetch(&#39;http://example.com&#39;)
    // \u62A5\u9519
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4E0A\u9762\u7684\u5199\u6CD5\u4E0D\u80FD\u7701\u7565\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5982\u679C\u7ED3\u5408\u51FD\u6570\u53C2\u6570\u7684\u9ED8\u8BA4\u503C\uFF0C\u5C31\u53EF\u4EE5\u7701\u7565\u7B2C\u4E8C\u4E2A\u53C2\u6570\u3002\u8FD9\u65F6\uFF0C\u5C31\u51FA\u73B0\u4E86\u53CC\u91CD\u9ED8\u8BA4\u503C\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    function fetch(url, { method = &#39;GET&#39; } = {}) {
      console.log(method);
    }
    
    fetch(&#39;http://example.com&#39;)
    // &quot;GET&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    // \u5199\u6CD5\u4E00
    function m1({x = 0, y = 0} = {}) {
      return [x, y];
    }
    
    // \u5199\u6CD5\u4E8C
    function m2({x, y} = { x: 0, y: 0 }) {
      return [x, y];
    }
    
    // \u51FD\u6570\u6CA1\u6709\u53C2\u6570\u7684\u60C5\u51B5
    m1() // [0, 0]
    m2() // [0, 0]
    
    // x\u548Cy\u90FD\u6709\u503C\u7684\u60C5\u51B5
    m1({x: 3, y: 8}) // [3, 8]
    m2({x: 3, y: 8}) // [3, 8]
    
    // x\u6709\u503C\uFF0Cy\u65E0\u503C\u7684\u60C5\u51B5
    m1({x: 3}) // [3, 0]
    m2({x: 3}) // [3, undefined]
    
    // x\u548Cy\u90FD\u65E0\u503C\u7684\u60C5\u51B5
    m1({}) // [0, 0];
    m2({}) // [undefined, undefined]
    
    m1({z: 3}) // [0, 0]
    m2({z: 3}) // [undefined, undefined]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u53C2\u6570\u9ED8\u8BA4\u503C\u7684\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-\u53C2\u6570\u9ED8\u8BA4\u503C\u7684\u4F4D\u7F6E" aria-hidden="true">#</a> 3. \u53C2\u6570\u9ED8\u8BA4\u503C\u7684\u4F4D\u7F6E</h3><blockquote><p>\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u5B9A\u4E49\u4E86\u9ED8\u8BA4\u503C\u7684\u53C2\u6570\uFF0C\u5E94\u8BE5\u662F\u51FD\u6570\u7684\u5C3E\u53C2\u6570\u3002\u56E0\u4E3A\u8FD9\u6837\u6BD4\u8F83\u5BB9\u6613\u770B\u51FA\u6765\uFF0C\u5230\u5E95\u7701\u7565\u4E86\u54EA\u4E9B\u53C2\u6570\u3002\u5982\u679C\u975E\u5C3E\u90E8\u7684\u53C2\u6570\u8BBE\u7F6E\u9ED8\u8BA4\u503C\uFF0C\u5B9E\u9645\u4E0A\u8FD9\u4E2A\u53C2\u6570\u662F\u6CA1\u6CD5\u7701\u7565\u7684\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token comment">// \u4F8B\u4E00</span>
    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// [1, undefined]</span>
    <span class="token function">f</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// [2, undefined])</span>
    <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// \u62A5\u9519</span>
    <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// [1, 1]</span>
    
    <span class="token comment">// \u4F8B\u4E8C</span>
    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span> z</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// [undefined, 5, undefined]</span>
    <span class="token function">f</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// [1, 5, undefined]</span>
    <span class="token function">f</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// \u62A5\u9519</span>
    <span class="token function">f</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// [1, 5, 2]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5982\u679C\u4F20\u5165undefined\uFF0C\u5C06\u89E6\u53D1\u8BE5\u53C2\u6570\u7B49\u4E8E\u9ED8\u8BA4\u503C\uFF0Cnull\u5219\u6CA1\u6709\u8FD9\u4E2A\u6548\u679C\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    function foo(x = 5, y = 6) {
      console.log(x, y);
    }
    
    foo(undefined, null)
    // 5 null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u51FD\u6570\u7684length\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_4-\u51FD\u6570\u7684length\u5C5E\u6027" aria-hidden="true">#</a> 4. \u51FD\u6570\u7684length\u5C5E\u6027</h3><blockquote><p>\u6307\u5B9A\u4E86\u9ED8\u8BA4\u503C\u4EE5\u540E\uFF0C\u51FD\u6570\u7684length\u5C5E\u6027\uFF0C\u5C06\u8FD4\u56DE\u6CA1\u6709\u6307\u5B9A\u9ED8\u8BA4\u503C\u7684\u53C2\u6570\u4E2A\u6570\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6307\u5B9A\u4E86\u9ED8\u8BA4\u503C\u540E\uFF0Clength\u5C5E\u6027\u5C06\u5931\u771F\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token comment">// 1</span>
    <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a <span class="token operator">=</span> <span class="token number">5</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token comment">// 0</span>
    <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">5</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>rest \u53C2\u6570\u4E5F\u4E0D\u4F1A\u8BA1\u5165length\u5C5E\u6027,\u5982\u679C\u8BBE\u7F6E\u4E86\u9ED8\u8BA4\u503C\u7684\u53C2\u6570\u4E0D\u662F\u5C3E\u53C2\u6570\uFF0C\u90A3\u4E48length\u5C5E\u6027\u4E5F\u4E0D\u518D\u8BA1\u5165\u540E\u9762\u7684\u53C2\u6570\u4E86\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token comment">// 0</span>
    <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token comment">// 0</span>
    <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#_5-\u4F5C\u7528\u57DF" aria-hidden="true">#</a> 5. \u4F5C\u7528\u57DF</h3><blockquote><p>\u4E00\u65E6\u8BBE\u7F6E\u4E86\u53C2\u6570\u7684\u9ED8\u8BA4\u503C\uFF0C\u51FD\u6570\u8FDB\u884C\u58F0\u660E\u521D\u59CB\u5316\u65F6\uFF0C\u53C2\u6570\u4F1A\u5F62\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u4F5C\u7528\u57DF\uFF08context\uFF09\u3002\u7B49\u5230\u521D\u59CB\u5316\u7ED3\u675F\uFF0C\u8FD9\u4E2A\u4F5C\u7528\u57DF\u5C31\u4F1A\u6D88\u5931\u3002\u8FD9\u79CD\u8BED\u6CD5\u884C\u4E3A\uFF0C\u5728\u4E0D\u8BBE\u7F6E\u53C2\u6570\u9ED8\u8BA4\u503C\u65F6\uFF0C\u662F\u4E0D\u4F1A\u51FA\u73B0\u7684\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    var x = 1;

    function f(x, y = x) {
      console.log(y);
    }
    
    f(2) // 2
    \u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u53C2\u6570y\u7684\u9ED8\u8BA4\u503C\u7B49\u4E8E\u53D8\u91CFx\u3002\u8C03\u7528\u51FD\u6570f\u65F6\uFF0C\u53C2\u6570\u5F62\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u4F5C\u7528\u57DF\u3002\u5728\u8FD9\u4E2A\u4F5C\u7528\u57DF\u91CC\u9762\uFF0C\u9ED8\u8BA4\u503C\u53D8\u91CFx\u6307\u5411\u7B2C\u4E00\u4E2A\u53C2\u6570x\uFF0C\u800C\u4E0D\u662F\u5168\u5C40\u53D8\u91CFx\uFF0C\u6240\u4EE5\u8F93\u51FA\u662F2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    var x = 1;
    function foo(x, y = function() { x = 2; }) {
      var x = 3;
      y();
      console.log(x);
    }
    
    foo() // 3
    x // 1
    
    \u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u51FD\u6570foo\u7684\u53C2\u6570\u5F62\u6210\u4E00\u4E2A\u5355\u72EC\u4F5C\u7528\u57DF\u3002\u8FD9\u4E2A\u4F5C\u7528\u57DF\u91CC\u9762\uFF0C\u9996\u5148\u58F0\u660E\u4E86\u53D8\u91CFx\uFF0C\u7136\u540E\u58F0\u660E\u4E86\u53D8\u91CFy\uFF0Cy\u7684\u9ED8\u8BA4\u503C\u662F\u4E00\u4E2A\u533F\u540D\u51FD\u6570\u3002\u8FD9\u4E2A\u533F\u540D\u51FD\u6570\u5185\u90E8\u7684\u53D8\u91CFx\uFF0C\u6307\u5411\u540C\u4E00\u4E2A\u4F5C\u7528\u57DF\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570x\u3002\u51FD\u6570foo\u5185\u90E8\u53C8\u58F0\u660E\u4E86\u4E00\u4E2A\u5185\u90E8\u53D8\u91CFx\uFF0C\u8BE5\u53D8\u91CF\u4E0E\u7B2C\u4E00\u4E2A\u53C2\u6570x\u7531\u4E8E\u4E0D\u662F\u540C\u4E00\u4E2A\u4F5C\u7528\u57DF\uFF0C\u6240\u4EE5\u4E0D\u662F\u540C\u4E00\u4E2A\u53D8\u91CF\uFF0C\u56E0\u6B64\u6267\u884Cy\u540E\uFF0C\u5185\u90E8\u53D8\u91CFx\u548C\u5916\u90E8\u5168\u5C40\u53D8\u91CFx\u7684\u503C\u90FD\u6CA1\u53D8\u3002
    
    \u5982\u679C\u5C06var x = 3\u7684var\u53BB\u9664\uFF0C\u51FD\u6570foo\u7684\u5185\u90E8\u53D8\u91CFx\u5C31\u6307\u5411\u7B2C\u4E00\u4E2A\u53C2\u6570x\uFF0C\u4E0E\u533F\u540D\u51FD\u6570\u5185\u90E8\u7684x\u662F\u4E00\u81F4\u7684\uFF0C\u6240\u4EE5\u6700\u540E\u8F93\u51FA\u7684\u5C31\u662F2\uFF0C\u800C\u5916\u5C42\u7684\u5168\u5C40\u53D8\u91CFx\u4F9D\u7136\u4E0D\u53D7\u5F71\u54CD\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    var x = 1;
    function foo(x, y = function() { x = 2; }) {
      x = 3;
      y();
      console.log(x);
    }
    
    foo() // 2
    x // 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),c=[p];function i(o,l){return s(),a("div",null,c)}var d=n(t,[["render",i],["__file","function.html.vue"]]);export{d as default};
