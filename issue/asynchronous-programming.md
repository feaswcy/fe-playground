## 为什么写这篇issue？
js中异步的概念*非常重要*，但是对于底层的逻辑似乎总是理解的不清楚，因此本篇issue将会比较全面的分析一下异步编程的几种方式，并力图通过优缺点的比较，让读者理解清楚底层的原理。

## javascript的运行机制
js在设计之初借鉴了其他的GUI语言，将它设计成一门单线程执行的语言，因此在js当中抽离出单独的事件循环的模型来处理异步操作，根据这一机制，在开发者实际写代码的过程中，会面临很多需要选择异步编程模型的地方，本文将会总结js的四种主流异步编程模型，并比较不同编程模型的优缺点。


## 先了解一下规范以及相关概念

> 深度好文推荐： https://github.com/aooy/blog/issues/5，讲清楚了浏览器的执行机制

### 浏览器的单线程和js语言的单线程是什么关系？
**浏览器并非单线程，而是多进程**，浏览器本身有一个browser主进程，每打开一个tab页将会开启一个子进程，输入网址后，主进程进行dns，tcp/ip等底层协议的实现和通信，下载完成后把html、css等静态资源提供给tab页的子进程。
每个tab页的浏览器子进程又包含**js引擎线程、UI渲染线程、事件管理线程、计时器线程、网络请求线程**
+ UI线程，用来处理和UI渲染相关的计算和处理
+ js引擎线程，用来执行html中的js脚本，并和事件管理线程配合实现事件驱动
+ 事件管理线程，用来管理浏览器中的异步事件，包括Task（又称macroTask）和microTask
+ 计时器线程，用来处理和计时相关的api，如setTimeout，setInterval
+ 网络请求线程，用来发起和处理xmlHttpRequest

### event loop是浏览器的机制还是js引擎的机制？ 浏览器如何设计异步任务的处理与js主线程的执行？
event loop是浏览器处理异步事件的一种机制，js代码中出现异步事件调用时，浏览器将会把异步事件放置到事件队列中去，并根据异步事件的类型划分成macroTask和microTask存储到事件管理线程的事件队列中，然后继续向下执行同步代码，直到同步代码执行完毕。
同步代码执行完毕后，浏览器将会调度事件队列中的事件给js引擎处理，浏览器调度事件队列的机制为：

**一个event loop只要存在，就会不断执行下边的步骤：**

1. 在tasks队列中选择最老的一个task,用户代理可以选择任何task队列，如果没有可选的任务，则跳到下边的microtasks步骤。
2. 将上边选择的task设置为正在运行的task。
3. Run: 运行被选择的task。
4. 将event loop的currently running task变为null。
5. 从task队列里移除前边运行的task。
6. Microtasks: 执行microtasks任务检查点。（也就是执行microtasks队列里的任务）
7. 更新渲染（Update the rendering）...
8. 如果这是一个worker event loop，但是没有任务在task队列中，并且
WorkerGlobalScope对象的closing标识为true，则销毁event loop，中止这些步骤，然后进行定义在Web workers章节的run a worker。
9. 返回到第一步。

**第七部microTask任务检查点**
当用户代理去执行一个microtask checkpoint，如果microtask checkpoint的flag（标识）为false，用户代理必须运行下面的步骤：
1. 将microtask checkpoint的flag设为true。
2. Microtask queue handling: 如果event loop的microtask队列为空，直接跳到第八步（Done）。
3. 在microtask队列中选择最老的一个任务。
4. 将上一步选择的任务设为event loop的currently running task。
5. 运行选择的任务。
6. 将event loop的currently running task变为null。
7. 将前面运行的microtask从microtask队列中删除，然后返回到第二步（Microtask queue handling）。
8. Done: 每一个environment settings object它们的 responsible event loop就是当前的event loop，会给environment settings object发一个 rejected promises 的通知。
9. 清理IndexedDB的事务。
10. 将microtask checkpoint的flag设为flase。


### macroTask和microTask是如何定义的
macroTask： 在[Generic task sources](https://html.spec.whatwg.org/multipage/webappapis.html#generic-task-sources)中提及了可以被视为macroTask的异步任务：
+ DOM操作任务源：
此任务源被用来相应dom操作，例如一个元素以非阻塞的方式插入文档。

+ 用户交互任务源：
此任务源用于对用户交互作出反应，例如键盘或鼠标输入。响应用户操作的事件（例如click）必须使用task队列。

+ 网络任务源：
网络任务源被用来响应网络活动。

+ history traversal任务源：
当调用history.back()等类似的api时，将任务插进task队列。

总结来说，包括setTimeout、setInterval、setImmediate、I/O、UI rendering等api

microTask：
HTML Standard没有具体指明哪些是microtask任务源，通常认为是microtask任务源有，
+ process.nextTick
+ promises
+ Object.observe
+ MutationObserver
由于没有统一的规范，所以不同的浏览器划分可能会有所不同，这也是为什么有的浏览器当中promise在setTimeout之后运行的原因


### event-loop & 任务队列综述
浏览器对microTask和macroTask进行了分类：
+ microTask：MutationObsever 、Promise.then、process.nextTick（nodejs）
+ macroTask：setTimeout、MessageChannel、postMessage、setImmediate

> 看完本文仍有疑惑，可参考实例进行操作，https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


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
