## before start

## 了解一些概念

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