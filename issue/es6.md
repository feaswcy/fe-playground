### 变量生命let 和 const

var 声明的变量存在变量提升(变量提升表现为将变量的声明提升到函数顶部，但不赋值)的特性。let 会报 not defined
var 会绑定全局作用域， let 、const不会
const 声明时必须初始化
const ，let 声明需要在block的最顶部（"解决变量提升"）

``` js
let a =1 
// 转换成：
"use strict";

var a = 1;

```

### 解构赋值
```js
[a, b, c] = [1, 2, 3];

//转换成
"use strict";

var a = 1;
var b = 2;
var c = 3;

// 对象解构example
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };

// 转换成
'use strict';

var _foo$bar = { foo: 'aaa', bar: 'bbb' };
var foo = _foo$bar.foo;
var bar = _foo$bar.bar;

```

### set、symbol、proxy、promise

### 箭头函数
没有自己的arguments，this，不能作为构造函数

```js
var anymous = () =>{
  console.log(arguments)
  console.log(this)
}
anymous()

// 转换成
"use strict";
var _arguments = arguments;
var anymous = function anymous() {
  console.log(_arguments);
  console.log(undefined);
};
anymous();

```

## Ecmascript 6
+ babel的原理与配置文件，配合webpack的babel-loader
+ Es6新特性
  - set、map
  - proxy
  - generator 函数
+ import/export
+ class
+ 原始对象的扩展


## Es6 modules
import & export，commonjs的module会在require的时候进行执行，然后在内存中全局维护一个加载的已加载的module信息，module的export会被挂在这个module信息的exports属性上
```js
import a from 'a'

console.log(a)

import {b} from 'b'

console.log(b)

// 转换成：
'use strict';

var _a = require('a');

var _a2 = _interopRequireDefault(_a);

var _b = require('b');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_a2.default);

console.log(_b.b);

```

## es6的 class

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
// 转换成：
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function () {
  function Point(x, y) {
    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }
  _createClass(Point, [{
    key: 'toString',
    value: function toString() {
      return '(' + this.x + ', ' + this.y + ')';
    }
  }]);

  return Point;
}();

```

es6的class 是es5原型形式的语法糖。主要区别有以下几点：
+ class定义的方法实际是原型链对象上的方法，这点和一般经典js继承的写法一致（Person.prototype.xxx）,但是es6 class声明的方法都是**不可枚举的**，即用for in 语句无法枚举出，而es5可以
+ constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法，constructor默认返回示例对象，类的构造函数必须通过new 调用，但是使用一般的构造函数可以直接执行（将会把this绑定到外部）
  

class还有一些其他的特点：
+ 实例属性和方法都需要写在this上，原型链方法声明在class内
+ 子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工





在一些浏览器还未实现es6的情况下，要使用到es6的特性，必须学会使用babel进行转译，因此这里介绍一下babel

## babel的处理过程

**解析，转换，生成**

## babelrc 配置文件规则
先来看两份配置文件
```javascript
// 普通vue项目 .babelrc 文件
{
  "presets": [
    ["env", {
      "modules": false // 不转换es6 的modules，不配置此选项默认转为commonjs
    }],
    "stage-2" // 预加载es7 stage2的 transform 模块
  ]
}
```

``` javascript
// 基础工具库babelrc
{
  "presets": [
    [
      "es2015", // 预加载es2015的模块
      {
        "modules": false
      }
    ]
  ],
  "plugins": [
    "external-helpers",
    "syntax-object-rest-spread",
    "transform-object-rest-spread"
  ]
}

```

关于babel的配置文件，需要知道的是babel是按照插件来transform 新的js 语法的，配置文件中，plugins代表用到的插件，presets代表一系列plugins的集合，另外对于preset和plugin生效的规则，有几点需要注意：

+ plugin会运行在preset之前
+ plugin会从第一个插件顺序执行，但presets是相反，从最后一个开始执行