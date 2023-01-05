import{_ as n,o as s,c as a,e}from"./app.ebc5d037.js";const t={},o=e(`<h3 id="vscode-plugins" tabindex="-1"><a class="header-anchor" href="#vscode-plugins" aria-hidden="true">#</a> vscode plugins</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. material theme\uFF1A\u7F16\u8F91\u5668\u4E3B\u9898
2. material icon theme\uFF1A\u56FE\u6807\u4E3B\u9898
3. beautify\uFF1A\u683C\u5F0F\u5316\u4EE3\u7801
4. Prettier
5. auto close tag\uFF1A\u81EA\u52A8\u6DFB\u52A0\u95ED\u5408\u6807\u7B7E
6. auto rename tag\uFF1A\u81EA\u52A8\u4FEE\u6539\u95ED\u5408\u6807\u7B7E\u540D
7. Path Intellisense: \u8DEF\u5F84\u63D0\u793A
8. Bracket Pair Colorizer \uFF1A\u8BA9\u4EE3\u7801\u7684\u5404\u79CD\u62EC\u53F7\u5448\u73B0\u4E0D\u540C\u7684\u989C\u8272\u3002
9. code runner\uFF1A\u5728\u7F16\u8F91\u5668\u91CC\u76F4\u63A5\u8FD0\u884C\u4EE3\u7801 \u67E5\u770B\u7ED3\u679C
10. Color Picker \uFF1A\u53EF\u4EE5\u76F4\u63A5\u5728\u7F16\u8F91\u5668\u91CC\u6253\u5F00\u8272\u677F\uFF0C\u9009\u62E9\u5404\u79CD\u6A21\u5F0F\u7684\u989C\u8272
11. Document This \uFF1A\u53EF\u4EE5\u7ED9\u51FD\u6570\u3001\u7C7B\u7B49\u81EA\u52A8\u7684\u52A0\u4E0A\u8BE6\u7EC6\u7684\u6CE8\u91CA
12. Git History \uFF1A\u65B9\u4FBF\u7684\u67E5\u770Bgit\u7248\u672C\u7BA1\u7406\u7684\u8BE6\u7EC6\u4FE1\u606F
13. Live Server \uFF1A\u53EF\u4EE5\u4E00\u952E\u5728\u672C\u5730\u542F\u52A8\u670D\u52A1\u5668
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="style-config" tabindex="-1"><a class="header-anchor" href="#style-config" aria-hidden="true">#</a> style config</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;editor.multiCursorModifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrlCmd&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.formatOnPaste&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;workbench.activityBar.visible&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;workbench.iconTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq-material-theme-icons-darker&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;workbench.colorCustomizations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;materialTheme.cache.workbench.settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;themeColours&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Darker&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;accentPrevious&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Acid Lime&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;workbench.colorTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Material Theme Darker&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;material-icon-theme.angular.iconsEnabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;material-icon-theme.folders.icons&quot;</span><span class="token operator">:</span> <span class="token string">&quot;specific&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.fontLigatures&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.fontFamily&quot;</span><span class="token operator">:</span> <span class="token string">&quot;FiraCode-Medium&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u63DB\u884C</span>
    <span class="token property">&quot;editor.wordWrap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4EE3\u7801\u7F29\u8FDB\u4FEE\u6539\u62102\u4E2A\u7A7A\u683C</span>
    <span class="token property">&quot;editor.tabSize&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4E0D\u6AA2\u67E5\u7E2E\u9032\uFF0C\u4FDD\u5B58\u540E\u7D71\u4E00\u6309\u8A2D\u7F6E\u9805\u4F86\u8A2D\u7F6E</span>
    <span class="token property">&quot;editor.detectIndentation&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">//\u4FDD\u5B58\u7684\u65F6\u5019\u81EA\u52A8\u683C\u5F0F\u5316</span>
    <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5B57\u9AD4\u5927\u5C0F</span>
    <span class="token property">&quot;editor.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8A2D\u7F6E\u884C\u9AD8</span>
    <span class="token property">&quot;editor.lineHeight&quot;</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5DE6\u5074\u5DE5\u5177\u6B04\u662F\u5426\u53EF\u898B</span>
    <span class="token property">&quot;workbench.activityBar.visible&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">// \u63A7\u5236\u4F55\u65F6\u81EA\u52A8\u4FDD\u5B58\u5DF2\u66F4\u65B0\u6587\u4EF6\u3002\u63A5\u53D7\u7684\u503C: &quot;off&quot;\u3001&quot;afterDelay&quot;\u3001&quot;onFocusChange&quot; (\u7F16\u8F91\u5668\u5931\u53BB\u7126\u70B9)\u3001&quot;onWindowChange&quot; (\u7A97\u53E3\u5931\u53BB\u7126\u70B9)\u3002\u5982\u679C\u8BBE\u7F6E\u4E3A &quot;afterDelay&quot;\uFF0C\u53EF\u5728 &quot;files.autoSaveDelay&quot; \u4E2D\u914D\u7F6E\u5EF6\u8FDF\u65F6\u95F4\u3002</span>
    <span class="token property">&quot;files.autoSave&quot;</span><span class="token operator">:</span> <span class="token string">&quot;onWindowChange&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// &quot;files.autoSaveDelay&quot;: 3000,</span>

    <span class="token comment">// \u8BA9prettier\u4F7F\u7528eslint\u7684\u4EE3\u7801\u683C\u5F0F\u8FDB\u884C\u6821\u9A8C</span>
    <span class="token property">&quot;prettier.eslintIntegration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u53BB\u6389\u4EE3\u7801\u7ED3\u5C3E\u7684\u5206\u53F7</span>
    <span class="token property">&quot;prettier.semi&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4F7F\u7528\u5E26\u5F15\u53F7\u66FF\u4EE3\u53CC\u5F15\u53F7</span>
    <span class="token property">&quot;prettier.singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">// \u542F\u7528\u540E\uFF0C\u6309\u4E0B TAB \u952E\uFF0C\u5C06\u5C55\u5F00 Emmet \u7F29\u5199\u3002</span>
    <span class="token property">&quot;emmet.triggerExpansionOnTab&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">// js\u8A2D\u7F6E\u55AE\u5F15\u865F</span>
    <span class="token property">&quot;javascript.preferences.quoteStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;single&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8BA9\u51FD\u6570(\u540D)\u548C\u540E\u9762\u7684\u62EC\u53F7\u4E4B\u95F4\u52A0\u4E2A\u7A7A\u683C</span>
    <span class="token property">&quot;javascript.format.insertSpaceBeforeFunctionParenthesis&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// html\u683C\u5F0F\u5316</span>
    <span class="token property">&quot;vetur.format.defaultFormatter.html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;js-beautify-html&quot;</span><span class="token punctuation">,</span>

    <span class="token comment">// \u4F7F\u7528eslint \u98A8\u683C\u4F7F\u7528standard \u9032\u884C\u4EE3\u78BC\u898F\u5247\u9650\u5236</span>
    <span class="token property">&quot;eslint.autoFixOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;autoFix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;vue&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// \u81EA\u52A8\u4FDD\u5B58\u4FE1\u606F</span>
    <span class="token comment">// By default, create file  username</span>
    <span class="token property">&quot;fileheader.Author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;you name&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// By default, update file  username.</span>
    <span class="token property">&quot;fileheader.LastModifiedBy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;you name&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// By default, common template. Do not modify it!!!!!</span>
    <span class="token property">&quot;fileheader.tpl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/*\\r\\n * @Author: {author}\\n * @Date: {createTime}\\n * @Last Modified by: {lastModifiedBy}\\n * @Last Modified time: {updateTime}\\n */\\n&quot;</span><span class="token punctuation">,</span>

    <span class="token comment">// vue\u7EC4\u4EF6\u4E2Dhtml\u4EE3\u7801\u683C\u5F0F\u5316\u6837\u5F0F</span>
    <span class="token property">&quot;vetur.format.defaultFormatterOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;js-beautify-html&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;wrap_attributes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;force-aligned&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),p=[o];function i(l,c){return s(),a("div",null,p)}var u=n(t,[["render",i],["__file","plugins.html.vue"]]);export{u as default};
