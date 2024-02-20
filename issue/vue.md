vue 框架性问题分析
### 为什么写本篇文档
在工作中经常前端框架使用vue比较多，有很多功能特点在开发过程中有一些不清晰地地方，这里记录下来，并尝试从原理上去解答这些问题

### 关于vue有哪些问题需要掌握？
收集到的问题列表：
1. 框架核心类
   + v-model是干什么？vue中的双向绑定的data属性为什么都是函数？ v-bind:class有哪几种用法?
   + 说一下vue的mvvm模型有什么特点？
   + vue的常用修饰符有哪些？
   + vue的directive和fliter是干什么?  mixin呢？ 如何使用？
   + v-on可以绑定多个事件吗？绑定事件时，如何拿到原生的dom对象？
   + 自定义指令是做什么用的？
   + is和slot是做什么的？keep-alive组件是做什么的？
   + vue双向数据绑定的原理是什么？更新data中的数组能检测到吗，对象呢？
   + vue的生命周期是干什么用的，它的大致过程经历了那些阶段, 描述下各个周期一般需要进行什么操作？
   + vue template 如何 转化成vnode？ 对编译过程有了解吗?
   + vnode的dom diff算法有了解吗？这里面有什么优化的地方有了解吗？
   + vue中动画是如何实现的，scoped的作用是什么？

2. vue-router
   + 前端单页原理是什么？
   + 嵌套路由如何定义？
   + 动态路由如何定义，param和query的区别在哪？
   + 有几种导航钩子？
   + 动态路由加载是什么，如何实现的?
   + history路由原理，以及需要注意的问题有哪些？

3. vuex
   + vuex解决了什么问题？
   + vuex和redux的区别有哪些，你如何看待这两者在这两个框架中的作用？
   + 使用vuex应该注意些什么

4. 工程类
   + 编写一个vue组件需要注意哪些问题，组件库知道哪些？编写组件库应该注意些什么？
   + .vue文件是如何实现组件化开发的，父子组件、兄弟组件是如何进行通信的？
   + vue-cli是做什么用的，解决了什么问题？
   + vue的异步组件有使用过吗？ 你觉得它有什么优点或者值得说一说的地方？
   + vue服务端渲染有使用过吗，服务端渲染和客户端渲染如何做首屏优化？
   + 说说Vue和Angular、ReactJS的相同点和不同点
  
针对以上问题，根据个人理解和对一些问题的深入探究，得到下面的回答，如有理解有误的地方，可联系我指正。
#### 分类解答-框架核心类
+ v-model是干什么？ v-bind:class有哪几种用法?

v-model 用来建立以个双向绑定关系：v-model的属性值将和vue组件中的data属性值进行同步，改变一方将会同步到另一方。v-model的原理在源码内部实际上是通过watcher守卫来实现的，在最底层则是通过Object.defineProperty来监听属性的改变，通过emit的方式通知给这个属性的订阅者，在ui层，通过表单、文本域的修改事件，同样触发了watcher的通知机制，改变了data中相应属性的值。
v-bind:class 有三种用法：
``对象式``：``{ active: isActive, 'text-danger': hasError }`` ，value为true是class会加上
``数组式``：``[activeClass, errorClass]`` ，在data中 ``{activeClass：'active', errorClass: 'text-danger'}``

+ vue的mvvm模型特点?

Vue是以数据为驱动的，Vue自身将DOM和数据进行绑定，一旦创建绑定，DOM和数据将保持同步，每当数据发生变化，DOM会跟着变化。

ViewModel是Vue的核心，它是Vue的一个实例。Vue实例是作用在某个HTML元素上的，这个HTML元素可以是body，也可以是某个id所指代的元素。 DOM Listeners和Data Bindings是实现双向绑定的关键。DOM Listeners监听页面所有View层DOM元素的变化，当发生变化，Model层的数据随之变化；Data Bindings监听Model层的数据，当数据发生变化，View层的DOM元素随之变化。

+ vue的常用修饰符有哪些？说一下对浏览器的事件模型的理解

vue中修饰符分为事件修饰符和按键修饰符，分别对应于click或submit事件，以及按键事件。
可以使用“事件修饰符”来处理事件冒泡，如：v-on:click.stop阻止事件冒泡，v-on:click.prevent阻止默认行为
浏览器事件模型分为``捕获阶段、目标阶段、冒泡阶段``，addEventListener的第三个参数为userCapture，代表是否为捕获阶段监听。一般来说，浏览器的事件顺序为捕获、目标、目标、冒泡，从顶到底再从底到顶。

+ vue的directive和fliter是干什么?  mixin呢？ 如何使用？

directive在vue中为自定义指令。在vue中，除了使用框架本身提供的v-if，v-bind:class，v-for等指令外，还可以对template的标签元素添加自定义指令，用于在有些时候需要对普通dom元素进行底层操作（虽然建议来说，应该使用组件化的开发方式来尽量少的使用directive）,使用directive的方式如下
```js
// 注册
Vue.directive('my-directive', {
  bind: function () {}, // 第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
  inserted: function () {}, //当被绑定的元素插入到 DOM 中时
  update: function () {}, // 组件vnode更新时调用，可能发生在子vnode更新之前或之后
  componentUpdated: function () {}, // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
  unbind: function () {} // 只调用一次，指令与元素解绑时调用
})

```

fliter在vue中是一种过滤器，用于对文本进行格式化，一般用于双括号中或者v-bind表达式，v-bind绑定一个vue的对象系统中的数据时，使用fliter可以对这个数据进行javascript计算，使用fliter的方式如下：
```js
// 定义全局的filter，名为capitalize，这个capitalize的具体实现为函数的第二个函数，该函数
// 接受一个原来的值value，且需要返回一个新的值。
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

```

+ v-on可以绑定多个事件吗？绑定事件时，如何拿到原生的dom对象？

v-on可以用对象表达式绑定多个事件，例如：
```html
<a  v-on='{click:DoSomething,mouseleave:MouseLeave'>doSomething</a>
```
v-on 可以传递一个js函数，也可以内联javascript表达式，需要访问原生dom事件时，可以用$event传入事件作为最后一个参数, $event即时原生的dom event



+ is和slot是做什么的？keep-alive组件是做什么的？


+ vue双向数据绑定的原理是什么？更新data中的数组能检测到吗，对象呢？


+ vue的生命周期是干什么用的，它的大致过程经历了那些阶段, 描述下各个周期一般需要进行什么操作？


+ vue template 如何 转化成vnode？ 对编译过程有了解吗?


+ vnode的dom diff算法有了解吗？这里面有什么优化的地方有了解吗？




+ vue中动画是如何实现的，scoped的作用是什么？






