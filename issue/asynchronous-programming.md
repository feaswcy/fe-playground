## Before Start 先了解一些概念

## javascript的运行机制
js在设计之初借鉴了其他的GUI语言，将它设计成一门单线程执行的语言，因此在js当中抽离出单独的事件循环的模型来处理异步操作，根据这一机制，在开发者实际写代码的过程中，会面临很多需要选择异步编程模型的地方，本文将会总结js的四种主流异步编程模型，并比较不同编程模型的优缺点。

## 先了解一下规范以及相关概念
Event loop & 任务队列
+ microTask：MutationObsever 、Promise.then
+ macroTask：setTimeout、MessageChannel、postMessage、setImmediate

## 异步编程的四种方式
在长期的编程实践中，js开发者以及社区总结出js 异步编程的四种模式：``回调函数、Promise、EventEmitter、generator与async、await``, 下面分别比较一下四种方式的写法以及优缺点
（异步编程 (存在的问题，callbackhell + 同步异步混杂带来的数据不一致)）
### 回调函数callback
js中函数可以作为函数，这是使用回调函数异步编程的基础：
```javascript
step1(function (value1) {
    step2(function(value2) {
        step3(function(value3) {
            step4(function(value4) {
                // Do something with value4
            });
        });
    });
});
```

为了让代码缩进风格不这么诡异，我们把异步函数封装一下，可以写成这样：
```js
function step1 (params) {
  // doSth in step1
  asyncFunction(step2);
}

function step2 (params) {
  // doSth in step2
  asyncFunction(step3)
}

function step3 (params) {
  // doSth in step3
  asyncFunction(step4)
}

function step4 (params) {
  // doSth in step4
}
```
通过把回调函数拆解，代码结构扁平化了一些，但是复杂度却提升了很多，并且假如某处抛出了一个错误，由于都埋在异步的回调里，执行顺序是无法跟踪到的，报错信息只能抛出最后同步执行出现的位置，这个程序的可维护性造成了很难解决的问题。
在此背景下，社区提出了一些解决方案，如error-first的风格，这种风格在nodejs中被广泛使用
```js
foo(function(error, value){
	if(error){
        // todo
        return
	}
	// todo
});
```
这种方式在一些较低版本的js代码中很常见。

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
