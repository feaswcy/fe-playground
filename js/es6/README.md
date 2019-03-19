## before start
要使用到es6的特性，必须学会使用babel进行转译，因此这里介绍一下babel
## babel的处理过程

**解析，转换，生成**

### babelrc 配置文件规则
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

## es6的新增语法


### 变量生命let 和 const

var 声明的变量存在变量提升(变量提升表现为将变量的声明提升到函数顶部，但不赋值)的特性。let 会报 not defined
var 会绑定全局作用域， let 、const不会
const 声明时必须初始化
const ，let 声明需要在block的最顶部（"解决变量提升"）

### 箭头函数
没有自己的arguments，this，不能作为构造函数

### Es6 modules
import & export，commonjs的module会在require的时候进行执行，然后在内存中全局维护一个加载的已加载的module信息，module的export会被挂在这个module信息的exports属性上

### 原始数据类型新增的方法
- 字符串的扩展
- 数组的扩展
- object的扩展。Object.xxx相关方法
- 字符串的扩展。解构赋值，模板字符串的写法












