## 关于本模块的组织思路
本模块js包括三个部分:
+ [js-and-es-core]() ： ecmaScript的核心知识，主要包括到目前为止es6所支持的所有数据类型和方法，这里的方法api没有区分是es6之前还是es6中新增的，针对es6的新语法，单独写了一篇[issue]()来介绍, 同时js中的重点概念也会通过issue专题的方式进行总结分析。详见下方[Js-core](#Js-core)
+ [nodejs](js/nodejs/README.md), 包括nodejs的常用方法api等，通过js文件方式给出，专题见下方[nodejs](#nodejs)
+ [typeScript](js/typescript/README.md)，微软推出的javascript的超集,方法api见[js-core/typescript]，基本介绍以及相关专题见[typescript](#typescript)


## ECMAscript 的发展历史

了解一下历史：
+ 1995年，网景浏览器发明了LiveScript，为何蹭java热度，临时改名叫javascript
+ 1996年，网景将 JavaScript 提交给 ECMA International（欧洲计算机制造商协会） 进行标准化，并最终确定出新的语言标准，最后标准化的语言方案为ECMAScript，ECMA 代表的英文单词是 Eroupe Computer Manifauture Association
+ 1999年发布ecmascript 3后，十年内都没有任何改动被成功添加到官方规范里，取而代之的，是各大浏览器厂商们争先进行自己的语言拓展
+ ECMAScript 第四版草案由于太过激进而被抛弃，Adobe 的 ActionScript 3.0 是 ECMAScript edition 4 的唯一实现（ Flash 差点就统一 Web 了）
+ 到了2012年，由于html 5 的兴起，大家开始推动停止对旧版本 IE 浏览器的支持，用 ECMAScript 5 (ES5) 风格来编写代码也变得更加可行，大家开始逐渐习惯以对 ECMAScript 规范的版本支持程度来形容各种 JavaScript 实现
+ 2015 年，负责制定 ECMAScript 规范草案的委员会 TC39 决定将定义新标准的制度改为一年一次，这意味着每个新特性一旦被批准就可以添加，而不像以往一样，规范只有在整个草案完成，所有特性都没问题后才能被定稿。因此，ECMAScript 第 6 版在六月份公布之前，又被重命名为了 ECMAScript 2015（ES2015）

所以，ecmaScript是规范，javascript是浏览器或者各大厂商根据规范进行的实现, 目前es6的实现程度已经成为衡量浏览器成熟度的一项指标，各厂商支持情况可查看：[Compat-tables](https://kangax.github.io/compat-table/es6/)

> 参考阅读：
> [ECMAScript5和ECMAScript6的新增特性](https://www.jianshu.com/p/b6d76160889d)



### Js-core
包含js核心知识，数据类型，执行上下文，作用域链，原型链，闭包，函数柯里化

- 基本数据类型

- 原型链、构造函数以及js的object，专题见(issue0)[]

- 正则表达式, 专题见(issue1)[]

- 执行上下文，专题见(issue2)[]

- 作用域与闭包，专题见(issue3)[]


### 服务端的javascript
可以做什么?

脚手架工具、上传、短链接、服务中间层

如何做一个简单的nodejs 服务？

- 相关工具 pm2中间层服务
- websocket中间层

### typeScript
typeScript是javascript的超集

谁在使用？
钉钉、vscode
