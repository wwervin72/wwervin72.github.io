(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{151:function(a,t,s){"use strict";s.r(t);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"查看node已经支持的es6的语法特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看node已经支持的es6的语法特性","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看Node已经支持的ES6的语法特性")]),a._v(" "),s("blockquote",[s("p",[a._v("node --v8-options | grep harmony")])]),a._v(" "),s("h2",{attrs:{id:"使用-babelrc文件来配置转码规则和插件，内容如下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-babelrc文件来配置转码规则和插件，内容如下","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用.babelrc文件来配置转码规则和插件，内容如下")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("    "),s("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{attrs:{class:"token string"}},[a._v('"presets"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),s("span",{attrs:{class:"token string"}},[a._v('"plugins"')]),s("span",{attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("blockquote",[s("p",[a._v("presets字段设置转码规则，官方提供以下规则集，可以根据需要进行安装")])]),a._v(" "),s("ol",[s("li",[a._v("使用最新转码规则")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    cnpm install --save-dev babel-preset-latest\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("react转码规则")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    cnpm install --save-dev babel-preset-react\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("不同阶段语法提案的转码规则(共有四个阶段)")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    cnpm install --save-dev babel-preset-stage-0\n    cnpm install --save-dev babel-preset-stage-1\n    cnpm install --save-dev babel-preset-stage-2\n    cnpm install --save-dev babel-preset-stage-3\n")])])]),s("h1",{attrs:{id:"命令行转码babel-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令行转码babel-cli","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令行转码babel-cli")]),a._v(" "),s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    cnpm install --global babel-cli \n")])])]),s("h3",{attrs:{id:"基本用法如下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本用法如下","aria-hidden":"true"}},[a._v("#")]),a._v(" 基本用法如下")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    /* 转码结果输出到标准输出 */\n    babel expample.js\n    /* 转码结果写入一个文件，--out-file 或者 -o 参数指定输出文件 */\n    babel example.js --out-file compiled.js\n    babel example.js -o compiled.js\n    /* 整个目录转码,--out-dir 或者 -d 参数指定输出目录 */\n    babel src --out-dir dist\n    babel src -d dist\n    /* 参数生成source map文件 */\n    babel src -d dist -s\n")])])])])}],!1,null,null,null);n.options.__file="babelrc.md";t.default=n.exports}}]);