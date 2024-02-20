# 执行上下文
> 执行上下文被定义成javascript引擎在处理理解js代码时，所创建的一个动态的环境。理解执行上下文对理解javascript的运行机制至关重要。this指向问题、原型链、作用域和垃圾回收都与这个环境密切相关。

## 了解一些javascript代码在执行时的相关概念
> EC (Execution Context)，执行上下文
> ECS (Execution Context Stack)，执行环境栈，栈在计算机内存中是一种后入先出的数据结构
> VO（Variable Object），变量对象。在js运行之前先确定，这一阶段根据函数形参、函数声明、变量声明进行创建，其中在创建函数声明时，如果名字存在，则会被重写，在创建变量时，如果变量名存在，则忽略不会进行任何操作。
> AO（Active Obejct），活动对象，实际运行时，就是代码在执行时变量的赋值和计算。可以理解成，AO = function（VO）

在运行js代码之前，js引擎会创建好当前代码的执行环境（EC），执行环境在js中可以分为三种：
+ 全局代码，代码首次被执行的默认环境，可以理解成一个js 文件或者js片段默认所在的环境
+ 函数代码，每次进入一个函数体，函数体执行之前
+ eval代码，eval是一个可以执行string类型的javascript方法

## 执行上下文与执行上下文堆栈
当浏览器首次载入脚本，根据代码创建全局执行环境，创建的要点可以抽象成确认三个要点：**变量、作用域链、this指向**，确认了这三点之后，开始进入激活/执行代码阶段，这时程序从上到下执行，遇到异步代码会压入任务队列，如果在全局代码中调用一个函数，程序引擎将会进入被调用的函数，并创建一个新的上下文，同时将创建的上下文压入执行栈ECS顶部。执行栈是一个后入先出的结构，最后一个被压入的函数将会最先执行。执行完成之后依次从栈中出栈，执行栈陆续被清空，最后回到全局环境，一直到最后一行代码执行完毕，激活/执行代码阶段结束。为了解释执行上下文栈的运行特点，我们看一下一面一组简单的代码：

```javascript
function foo(i) {  
    if(i === 3) { 
        return
    }  
    foo(i+1);  
    console.log(i);  
}  
foo(0);
```
上面是一个自执行函数，我们来模仿一下javascript引擎在看到这段代码时处理的思路：
首先看到这段代码，默认创建的全局执行环境可以抽象成一个object:
```javascript
globalExecutionContextObj = {
    scopeChain: { },  /* 变量对象（variableObject）+ 所有父执行上下文的变量对象*/ 
    variableObject: {  
        foo: [function] //
    }, /*函数 arguments/参数，内部变量和函数声明 */
    this: window  // 严格模式下为undefined，node中为global，浏览器为window，这里理解可以理解为全局对象
}

```
创建完此环境后，开始进入全局激活\执行阶段，也就是执行foo(0), 在执行foo(0)之前，根据当前的函数体创建一个新的函数执行上下文，函数执行上下文可以抽象为下面的object:

```javascript
fooExecutionContextObj1 = {
    scopeChain: { 
        i : 0 /* 变量对象（variableObject）+ 所有父执行上下文的变量对象*/ 
    },  
    variableObject: {  
        foo: [function] //
    }, /*函数 arguments/参数，内部变量和函数声明 */
    this: window  // 在函数体内this指向调用父函数的对象，这里this代表为window
}
```
函数执行上下文fooExecutionContextObj1创建完成后，进行激活/执行阶段，在一次进入foo函数体内部，不过此时创建的执行上下文fooExecutionContextObj2中，scopeChain.i 变成了2，js引擎重复上面的过程，到第三次激活执行阶段，return 语句结束，压在栈顶的第三次的foo函数被推出，接着第二次压入的foo函数推出，最终执行栈回退到全局执行上下文，一直到代码结束，因此上面的代码最终打印出来的分别是 2，1，0

## 解释变量提升现象
在进入激活执行阶段之前，引擎会先创建执行环境，因此，并不是按照代码的书写顺序来理解执行，如下栗子中：
```javascript
    console.log(foo); // 函数指针
    console.log(bar); // undefined

    var foo = 'hello';
    var bar = function() {
        return 'world';
    };

    function foo() {
        return 'hello';
    }
```
使用function 关键字生命的foo，覆盖了前面声明的foo便令，会被先添加到执行环境中的variableObject，但bar变量只会进行声明，它的值只有在运行后才会被解析，因此foo可以打印出foo的函数体，bar打印出为undefined


## 执行上下文中this的四种含义
this在执行上下文中才会被明确，因此js代码是动态的，不能以一般静态语言的逻辑对它进行推测分析，在《javascript语言精粹》中列举的this指针可能的四种传值方式。
+ 在普通函数中调用
+ 作为对象的方法
+ 在构造函数中调用
+ 使用Function.prototype.bind、Function.prototype.call、Function.prototype.apply方法改变this指向

## 执行上的下文与代码应用

## 作用域

## 闭包

## 函数柯里化
柯里化通常也被称为部分求值，它的含义是给函数分步传递参数，每次传递参数后，部分应用参数，并返回一个更具体的函数接受剩下的参数，中间可以嵌套多个这样的过程，逐步缩小适用范围，逐步求解，直至返回最终结果

js 中Function.prototype.bind方法实现了柯里化，看如下代码：

```
Function.prototype.bind = function(ctx) {
    var fn = this;
    return function() {  // 返回的是一个function，先把参数存起来，实际并没有调用
        fn.apply(ctx, arguments);
    };
};
```

## 总结
1. 执行上下文： 在函数执行前被创建，可以用一个object进行抽象描述，分别包含，作用域链，当前环境变量，this指针
2. 执行上下文解释了变量提升的现象
3. this指针在创建时根据不同情形，它的具体值可能有四种情况：
  + 作为对象的方法调用，指向这个对象。
  + 在普通函数体中直接调用，此时指向全局（原书中说道，这里应该被设计成指向上一级执行环境，是设计的糟粕）。
  + 在构造函数中调用，指向新构造出来的对象示例。
  + 使用apply, call, bind时，指向被绑定的对象。
  
