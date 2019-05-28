## 提前一点说明
关于算法，其实是一种通用的计算机能力，是一种对数据进行处理的思考方式，因此，算法题常常出现在各种前端面试中，这里会介绍一些基本的数据结构的js 实现。以及作为一名高级的前端，必须掌握的一些基本算法题
write leecode 每天刷至少两道题，时间控制在30分钟以内

## 数据结构与算法
主要参考自loiane 的 [javascript-datastructures-algorithms](https://github.com/loiane/javascript-datastructures-algorithms) repo 实现

## 如何学习数据算法与结构
1.chunk it up

2.delibrately pratice

3.feedback

切题四件套：
clarification

possible solutions

coding

test

## 排序算法
主要参考自Damonare的 [十大经典排序算法总结（js描述）]（https://juejin.im/post/57dcd394a22b9d00610c5ec8）repo实现

排序问题的意义在于将一些大小不同的数据按照一定的次序进行依次换位,按照是否使用外部存储常见排序算法分类为一下两种：
<div align="center">
    <img src="https://raw.githubusercontent.com/feaswcy/fe-playground/master/doc-assets/img/sort.png">
</div>

## 斐波那契数列
斐波那契数列是这样一个数列：从第三项开始，每一项都是前两项的相加之和，它的每项值是这样的：
[1, 1, 2, 3, 5, 8, 13, 21, 34, ...],转换为算法问题， 它的原始定义就是

```javascript
// n >= 0
function Fibo(n){
    return n < 2 ? 1 : (Fibo(n-1) + Fibo(n-2))
}
```

```javascript
// 使用额外的空间存贮上一步计算的结果
function fabonacci() {
    var cache = [0, 1];
    return function __fabonacci(n) {
        return typeof cache[n] === 'number'
               ? cache[n]
               : cache[n] = __fabonacci(n - 1) + __fabonacci(n - 2);
    };
}
// 采用递归循环叠加计算
function fibonacci(n) {
    let current = 0;
    let next = 1;
    let temp;
    for(let i = 0; i < n; i++){
        temp = current;
        current = next;
        next += temp;
    }
    return current;
}

````

## leecode常见问题
[数组去重方法](https://segmentfault.com/a/1190000016418021)

