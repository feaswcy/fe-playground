ES6之前的javascript
1) es5 and below

- 基本数据类型

[js数据类型](https://juejin.im/post/5b2b0a6051882574de4f3d96 )
null， undefined，boolean，string，object，number，复合类型function array,特殊类型RegExp， Date（日期)

- obj的创建与this 作用域

最佳实践：属性由this创建，方法单独写在函数的原型链上，function.prototype.doSth

this的四种使用方式：1.作为普通函数中 2. 对象的方法 3 new 中指向新的对象 4apply和call改变this的指向

- prototype 和 proto

prototype是函数的一个属性，用来存放这个函数作为构造函数时所具有的属性和方法，new 出来的一个对象会和prototype拥有相同的方法

proto是对象用来标明所对应的原型链上的方法


- 正则表达式





2）ES6之后的javascript
- 相比es5多了哪些特性

const ，let 声明需要在block的最顶部（"解决变量提升"）

解构赋值，模板字符串的写法

箭头函数，没有arguments并且不能作为构造函数

- import & export

commonjs的module会在require的时候进行执行，然后在内存中全局维护一个加载的已加载的module信息，module的export会被挂在这个module信息的exports属性上

- Object.xxx相关方法

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

macroTask ：setTimeout、MessageChannel、postMessage、setImmediate

- callback、promise、async/await、eventEmiter
- 手动实现一个eventEmiter？

_ 模块化


