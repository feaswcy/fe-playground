## vue的组件式开发

一个组件实际上就是一个module，包含页面视图一部分的**结构、样式与交互**

https://juejin.im/book/5bc844166fb9a05cd676ebca/section/5bc844166fb9a05cf52af65f

## 组件化开发的内涵
+ 借助框架，实现框架的组件
+ 开发原生通用js sdk
+ 小程序等其他框架

### 框架的组件： Vue 和 React 组件开发内涵

vue中组件为一个option对象，其中render函数包含了vue系统中template的一种描述，vue中因为已经提供了全局的install和use方法，可以方便的把一个module安装进vue的声明式template系统中去

react的组件借助于class的继承与生命周期，jsx 本身 是一段 混有html的js 脚本，通过return 语句将一个组件返回给 module系统，在react中，一个js 文件就可以理解成一个组件


### 通用Js sdk


### 三方类库
+ 解决hybrid开发的bridge
+ 移动端不同环境兼容的工具sdk库
  