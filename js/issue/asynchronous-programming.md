## Before Start 先了解一些概念

## javascript的运行机制
js在设计之初借鉴了其他的GUI语言，将它设计成一门单线程执行的语言，因此在js当中抽离出单独的事件循环的模型来处理异步操作，根据这一机制，在开发者实际写代码的过程中，会面临很多需要选择异步编程模型的地方，本文将会总结js的四种主流异步编程模型，并比较不同编程模型的优缺点。

## 先了解一下规范以及相关概念
event loop & 任务队列
+ microTask：MutationObsever 、Promise.then
+ macroTask：setTimeout、MessageChannel、postMessage、setImmediate

## 异步编程的四种方式
异步编程 (存在的问题，callbackhell + 同步异步混杂带来的数据不一致)

### 回调函数callback
回调函数的优化，函数拆解

### Promise
es6中promise规范，promise 的理解与实现

### 订阅者模式eventEmiter

### generator 和 async / await


## 异步编程的应用现状
nextTick原理,img load

https://cn.vuejs.org/v2/api/#ref
https://juejin.im/post/59b499e86fb9a00a4e677825
https://hijiangtao.github.io/2017/08/03/How-to-Manipulate-DOM-Effectively/
https://www.jianshu.com/p/d3a02ffe94b6

## 总结
