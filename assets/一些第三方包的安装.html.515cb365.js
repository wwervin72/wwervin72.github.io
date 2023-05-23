import{_ as e,o as i,c as n,b as t}from"./app.0701a06a.js";const o={},l=t(`<h4 id="win10-\u8BBE\u7F6E-golang-\u955C\u50CF\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#win10-\u8BBE\u7F6E-golang-\u955C\u50CF\u5730\u5740" aria-hidden="true">#</a> win10 \u8BBE\u7F6E golang \u955C\u50CF\u5730\u5740</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go env -w GOPROXY=https://goproxy.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5F88\u591A\u65F6\u5019\u5728\u4F7F\u7528 go get \u4E00\u4E9B\u5305\u7684\u65F6\u5019\uFF0C\u56E0\u4E3A\u7F51\u7EDC\u7684\u539F\u56E0\u65E0\u6CD5\u6B63\u5E38\u4E0B\u8F7D\uFF0C\u6BD4\u5982 go get golang.org/x/tour \u5C31\u4E0D\u80FD\u76F4\u63A5\u4E0B\u8F7D</p><p>\u8FD9\u4E2A\u65F6\u5019\u5C31\u9700\u8981\u76F4\u63A5\u5728 GOPATH/src/golang.org/x/ \u76EE\u5F55\u4E0B clone \u4E0B\u6765\u6240\u6709\u7684\u5305\u4EE3\u7801</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git clone https://github.com/golang/tour.git
git clone https://github.com/golang/net.git
git clone https://github.com/golang/blog.git
git clone https://github.com/golang/sync.git
git clone https://github.com/golang/tools.git
git clone https://github.com/golang/lint.git


git clone https://github.com/golang/benchmarks.git
git clone https://github.com/golang/build.git
git clone https://github.com/golang/crypto.git
git clone https://github.com/golang/debug.git
git clone https://github.com/golang/image.git

git clone https://github.com/golang/mobile.git
git clone https://github.com/golang/perf.git
git clone https://github.com/golang/review.git
git clone https://github.com/golang/sys.git
git clone https://github.com/golang/text.git
git clone https://github.com/golang/time.git
git clone https://github.com/golang/exp.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vscode golang \u5E38\u7528\u7684\u51E0\u4E2A\u5DE5\u5177\u5305</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go get -u -v github.com/nsf/gocode
go get -u -v github.com/rogpeppe/godef
go get -u -v github.com/zmb3/gogetdoc
go get -u -v github.com/golang/lint/golint
go get -u -v github.com/lukehoban/go-outline
go get -u -v sourcegraph.com/sqs/goreturns
go get -u -v golang.org/x/tools/cmd/gorename
go get -u -v github.com/tpng/gopkgs
go get -u -v github.com/newhook/go-symbols
go get -u -v golang.org/x/tools/cmd/guru
go get -u -v github.com/cweill/gotests
go get golang.org/x/tools/cmd/goimports
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vscode \u65AD\u70B9\u8C03\u8BD5 go \u7A0B\u5E8F\u5305</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go get -v -u github.com/peterh/liner github.com/derekparker/delve/cmd/dlv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u6CE8\u610F:\u4FEE\u6539&quot;dlv-cert&quot;\u8BC1\u4E66, \u9009\u62E9&quot;\u663E\u793A\u7B80\u4ECB&quot;-&gt;&quot;\u4FE1\u4EFB&quot;-&gt;&quot;\u4EE3\u7801\u7B7E\u540D&quot; \u4FEE\u6539\u4E3A: \u59CB\u7EC8\u4FE1\u4EFB \u6253\u5F00\u9996\u9009\u9879-\u5DE5\u4F5C\u533A\u8BBE\u7F6E,\u914D\u7F6Elaunch.json:</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;version&quot;: &quot;0.2.0&quot;,
    &quot;configurations&quot;: [
        {
            &quot;name&quot;: &quot;main.go&quot;,
            &quot;type&quot;: &quot;go&quot;,
            &quot;request&quot;: &quot;launch&quot;,
            &quot;mode&quot;: &quot;debug&quot;,
            &quot;remotePath&quot;: &quot;&quot;,
            &quot;port&quot;: 2345,
            &quot;host&quot;: &quot;127.0.0.1&quot;,
            &quot;program&quot;: &quot;\${workspaceRoot}&quot;,//\u5DE5\u4F5C\u7A7A\u95F4\u8DEF\u5F84
            &quot;env&quot;: {},
            &quot;args&quot;: [],
            &quot;showLog&quot;: true
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>dlv.exe go \u8BED\u8A00\u8C03\u8BD5\u5DE5\u5177</li><li>gocode.exe go\u8BED\u8A00\u4EE3\u7801\u68C0\u67E5\uFF0C\u81EA\u52A8\u8865\u5168</li><li>godef.exe go\u8BED\u8A00\u4EE3\u7801\u5B9A\u4E49\u548C\u5F15\u7528\u7684\u8DF3\u8F6C</li><li>golint.exe go\u8BED\u8A00\u4EE3\u7801\u89C4\u8303\u68C0\u67E5</li><li>go-outline.exe</li><li>\u7528\u4E8E\u5728Go\u6E90\u6587\u4EF6\u4E2D\u63D0\u53D6JSON\u5F62\u5F0F\u58F0\u660E\u7684\u7B80\u5355\u5DE5\u5177</li><li>gopkgs.exe \u5FEB\u901F\u5217\u51FA\u53EF\u7528\u5305\u7684\u5DE5\u5177</li><li>gorename.exe \u5728Go\u6E90\u4EE3\u7801\u4E2D\u6267\u884C\u6807\u8BC6\u7B26\u7684\u7CBE\u786E\u7C7B\u578B\u5B89\u5168\u91CD\u547D\u540D</li><li>goreturns.exe \u7C7B\u4F3Cfmt\u548Cimport\u7684\u5DE5\u5177\uFF0C\u4F7F\u7528\u96F6\u503C\u586B\u5145Go\u8FD4\u56DE\u8BED\u53E5\u4EE5\u5339\u914Dfunc\u8FD4\u56DE\u7C7B\u578B</li><li>go-symbols.exe \u4ECEgo\u6E90\u7801\u6811\u4E2D\u63D0\u53D6JSON\u5F62\u5F0F\u7684\u5305\u7B26\u53F7\u7684\u5DE5\u5177</li><li>gotour.exe go\u8BED\u8A00\u6307\u5357\u7F51\u9875\u7248</li><li>guru.exe go\u8BED\u8A00\u6E90\u4EE3\u7801\u6709\u5173\u5DE5\u5177\uFF0C\u5982\u4EE3\u7801\u9AD8\u4EAE\u7B49</li></ol>`,12),g=[l];function s(u,d){return i(),n("div",null,g)}var a=e(o,[["render",s],["__file","\u4E00\u4E9B\u7B2C\u4E09\u65B9\u5305\u7684\u5B89\u88C5.html.vue"]]);export{a as default};
