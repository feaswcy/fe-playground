js部分按目前社区的主流语言的版本分类为
+ js核心，(js-core)[]
+ EcmaScript 6， es6相关 
+ nodejs，服务端javascript相关
+ typeScript，微软推出的javascript的超集

### js-core
包含js核心知识，数据类型，原型、原型链，执行上下文，作用域，作用域链，闭包

- 基本数据类型

[js数据类型](https://juejin.im/post/5b2b0a6051882574de4f3d96 )
null， undefined，boolean，string，object，number，复合类型function array,特殊类型RegExp， Date（日期)

- 原型链、构造函数以及js的object，专题见(issue0)[]

- 正则表达式, 专题见(issue1)[]

- 执行上下文，专题见(issue2)[]

- 作用域与闭包，专题见(issue3)[]

## Ecmascript 6
+ babel的原理与配置文件，配合webpack的babel-loader
+ Es6新特性

2）ES6之后的javascript
- 相比es5多了哪些特性



函数式编程

Object.keys  for(var key in Obj)

Object.defineProperty()


服务端的javascript
- 可以做什么

脚手架工具、上传、短链接、服务中间层

- 相关工具 pm2中间层服务

- websocket中间层


语言特点
- 异步编程 (存在的问题，callbackhell + 同步异步混杂带来的数据不一致)
- event loop & 任务队列

microTask：MutationObsever 、Promise.then

macroTask：setTimeout、MessageChannel、postMessage、setImmediate

- callback、promise、async/await、eventEmiter
- 手动实现一个eventEmiter？

_ 模块化


Object 的 this



## typeScript