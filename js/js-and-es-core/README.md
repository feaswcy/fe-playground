
## js-core：Javscript语言的基本数据类型与核心对象方法
本篇从js汇总内置对象的构造函数与实例方法，包括js中所有数据类型分类。注意，这里的数据类型的属性和方法都以ES6为标准，有些方法可能在ES5上并未实现。

基本数据类型方法全部在js-core/basic目录下, 主要包括以下三种分类：
+ `基本数据类型`, 所有基本数据类型的特性和方法放在了basic目录下，查看[基础数据类型](https://github.com/feaswcy/fe-playground/tree/master/js/js-and-es-core)： null， undefined，boolean，string，object，number，
+ `复合类型`, 包含function、array，复合类型较为复杂，直接放到了js-core目录下的, 查看[function](https://github.com/feaswcy/fe-playground/tree/master/js/js-and-es-core), [array](https://github.com/feaswcy/fe-playground/tree/master/js/js-and-es-core)
+ `特殊类型`, 包含RegExp， Date，一般用在特殊的场景，也直接放在了js-core目录下，查看[RegExp](https://github.com/feaswcy/fe-playground/tree/master/js/js-and-es-core), [Date](https://github.com/feaswcy/fe-playground/tree/master/js/js-and-es-core)

## 重要方法概览
在es6中对Object 和 Array的方法做了较多的扩展，这些方法平时相对使用较少，在这里单独列举出来，方便查看和使用

### Object（属于基础数据类型)

ES 6新增单独列出：
+ Object.is、assign、getOwnPropertyDescriptors，setPrototypeOf，getPrototypeOf
+ Object.keys()，Object.values()，Object.entries()，Object.fromEntries()
+ \__proto\__属性

```js
Object.preventExtensions(obj)  让一个对象变的不可扩展，也就是永远不能再添加新的属性。
Object.isExtensible(obj) 判断一个对象是否是可扩展的
Object.seal(obj)让一个对象密封(只能读写 不能新增)
Object.isSealed(obj)判断一个对象是否密封
Object.isFrozen(arr)  让一个对象被冻结(只能读)
Object.isFrozen(obj)：判断一个对象是否被冻结
Object.keys(obj) 返回一个由给定对象的所有可枚举自身属性的属性名组成的数组
Object.getOwnPropertyNames(obj)：返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性）组成的数组
Object.is(value1, value2)：判断两个值是否是同一个值。
Object.create(proto [, propertiesObject ]) 是E5中提出的一种新的对象创建方式，第一个参数是要继承的原型，如果不是一个子函数，可以传一个null，第二个参数是对象的属性描述符，这个参数是可选的。
Object.assign() 把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。
Object.defineProperty() 定义单个对象属性或方法(可以设置读写可枚举)
Object.defineProperties() 定义多个对象属性或方法(可以设置读写可枚举)
```


### 复合数据类型一：Array
数组的方法分类:
+ 构造函数方法（公有方法、静态方法）：
+ 实例方法（原型链方法）：
  - 迭代器方法 *every, fliter, forEach, map, reduce, some, find，reduce​Right*
  - 查询方法, entrier, keys, values, includes, indexOf, lastIndexOf
  - 转换方法 copyWithin, fill, flat, reverse, concat， join
  - 基础方法 map, pop, push, shift, unshift， slice, splice, toString, toLocalString

## 复合数据类型二：Function
javscript中函数是一等公民，可以有多种方式进行使用，和其他语言相比，js的function主要有以下特点：
+ 可做为构造函数
js 中本身无class 关键字（在es 6中实现的只是语法糖）


### 参考阅读
[js数据类型](https://juejin.im/post/5b2b0a6051882574de4f3d96)


