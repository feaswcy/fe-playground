## before start 先了解一些概念

- 异步编程 (存在的问题，callbackhell + 同步异步混杂带来的数据不一致)
- event loop & 任务队列
microTask：MutationObsever 、Promise.then

macroTask：setTimeout、MessageChannel、postMessage、setImmediate


- callback、promise、async/await、eventEmiter
- 手动实现一个eventEmiter？

##  nextTick原理,img load

https://juejin.im/post/5a17c5e26fb9a04527254689
https://cn.vuejs.org/v2/api/#ref
https://juejin.im/post/59b499e86fb9a00a4e677825
https://hijiangtao.github.io/2017/08/03/How-to-Manipulate-DOM-Effectively/
https://www.jianshu.com/p/d3a02ffe94b6
https://segmentfault.com/q/1010000010025425