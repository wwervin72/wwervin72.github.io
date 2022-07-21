import{_ as e,o as n,c as t,e as a}from"./app.2cc1671a.js";const o={},i=a(`<p>\u8868\u5355\u3001form-data\u3001x-www-form-urlencoded\u3001raw\u3001binary\u7684\u533A\u522B</p><p>\u8FD9\u91CC\u53EA\u8BF4\u660E\u4E00\u4E0B\u51E0\u79CD\u6570\u636E\u4EA4\u4E92\u65B9\u5F0F\u7684\u533A\u522B\uFF0C\u81F3\u4E8E\u6BCF\u4E00\u79CD\u7684\u65B9\u5F0F\u540E\u7AEF\u7684\u6570\u636E\u5904\u7406\u65B9\u6CD5\u8BE6\u60C5\u8BF7\u89C1\u6587\u7AE0\u300A\u4E00\u4E9B\u5E38\u89C1\u95EE\u9898\u7684\u5904\u7406\u65B9\u6CD5\u300B</p><p>\u901A\u5E38\u6211\u4EEC\u4E0E\u540E\u7AEF\u7684\u4EA4\u4E92\uFF0C\u53EF\u4EE5\u4F7F\u7528 form \u8868\u5355\u7684\u65B9\u5F0F\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 ajax \u7684\u65B9\u5F0F\u53D1\u9001\u6570\u636E\u3002\u8FD9\u4E24\u79CD\u65B9\u5F0F\u901A\u8FC7\u8BBE\u7F6E\u4E0D\u540C\u7684 Content-Type\uFF0C \u540E\u7AEF\u62FF\u5230\u6570\u636E\u540E\u7684\u5904\u7406\u65B9\u5F0F\u4E5F\u662F\u4E0D\u4E00\u6837\u7684</p><p>form \u8868\u5355\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u7684 Content-Type \u4E3A application/x-www-form-urlencoded\uFF0C\u5728\u8FD9\u79CD Content-Type \u4E0B\uFF0C\u4F20\u9012\u7684\u53C2\u6570\u5C06\u4F1A\u88AB\u89E3\u6790\u6210 url?a=1&amp;b=2&amp;c=3 \u7684\u5F62\u5F0F\u3002</p><p>\u5728\u4F7F\u7528 form \u8868\u5355\u4E0A\u4F20\u6587\u4EF6\u7684\u65F6\u5019\uFF0C\u9700\u8981\u8BBE\u7F6E Content-Type \u4E3A multipart/form-data\uFF0C\u8FD9\u79CD Content-Type \u5C31\u548C postMan \u4E2D\u7684 form-data \u4E00\u6837\u3002\u5E76\u4E14\u4F1A\u6709 Content-Type \u6765\u8BF4\u660E\u6587\u4EF6\u7C7B\u578B\uFF1Bcontent-disposition\uFF0C\u7528\u6765\u8BF4\u660E\u5B57\u6BB5\u7684\u4E00\u4E9B\u4FE1\u606F\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u65E2\u53EF\u4EE5\u628A\u666E\u901A\u7684\u6570\u636E\u53D1\u9001\u7ED9\u540E\u7AEF\uFF0C\u4E5F\u53EF\u4EE5\u6279\u91CF\u4E0A\u4F20\u6587\u4EF6\u5230\u670D\u52A1\u5668.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>------WebKitFormBoundaryWdDAe6hxfa4nl2Ig
Content-Disposition: form-data; name=&quot;userName&quot;
ervin
------WebKitFormBoundaryWdDAe6hxfa4nl2Ig
Content-Disposition: form-data; name=&quot;file1&quot;; filename=&quot;out.png&quot;
Content-Type: image/png
binary-data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>raw \u770B\u660E\u77E5\u5176\u4E49\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u4E0A\u4F20\u5404\u79CD\u683C\u5F0F\u7684\u6570\u636E\uFF0C\u6BD4\u5982 text\u3001json\u3001javascript\u3001xml\u3001html \u7B49\uFF0C\u901A\u5E38\u5E38\u7528\u7684\u8FD8\u662F json \u65B9\u5F0F\uFF0C\u5BF9\u5E94\u7684 Content-Type \u4E3A application/json\u3002</p><p>binary \u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u4E0A\u4F20\uFF0C\u4ED6\u7684 Content-Type \u4E3A application/octet-stream\uFF0C\u8BE5\u65B9\u5F0F\u53EA\u80FD\u4E0A\u4F20\u4E8C\u8FDB\u5236\u7684\u6587\u4EF6\uFF0C\u5E76\u4E14\u56E0\u4E3A\u6CA1\u6709 Key\uFF0C \u6240\u4EE5\u4E00\u6B21\u53EA\u80FD\u4E0A\u4F20\u4E00\u4E2A\u6587\u4EF6\u3002</p>`,8),r=[i];function s(d,p){return n(),t("div",null,r)}var m=e(o,[["render",s],["__file","Req\u51E0\u79CD\u8BF7\u6C42\u65B9\u5F0F.html.vue"]]);export{m as default};
