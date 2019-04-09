问题在于：**UI与状态同步非常困难**
采用非mvvm的lib或者原生js去实现ui的变化，通常非常脆弱和复杂，尽管一些第三方lib（like jquery）已经简化的dom方法调用，但是这种命令式的写法一般都是点对点的，一旦需求变更，基本相当于需要重新开发~
mvvm的优点主要在于： 复杂、高效、易于维护
比较目前流行的框架在解决UI与状态同步这一问题的解决方案

- vue （通过观察者检测变化，应用中状态的属性会发生变化，依赖方会重新渲染）
- react （重新渲染整个组件）
- angular （通过观察者检测变化，应用中状态的属性会发生变化，依赖方会重新渲染）

> 相关参考 [https://juejin.im/post/593021272f301e0058273468](https://juejin.im/post/593021272f301e0058273468)

GUI编程的框架经历过MVC -》 MVP -》 MVVM的 发展过程，了解mvc和mvp的问题会更加有助于理解为何现有的vue和react等mvvm的框架会如此流行
由于GUI编程中存在 ui和状态的同步困难的问题，将ui（View）和状态（Model）分开进行管理是一个非常自然的思路，当出现视图的更新时，需要一个中间层进行连接，于是出现了C（controller），p（presenter），VM（view-model）

### MVC
出现历史最悠久，但是随着应用越来越复杂，controller中包含的逻辑越来越多，由于mvc中，v的部分由c来控制，并且可以直接观察model（采用），导致c中出现了很多的业务代码，view绑定model也无法让view成为单独的ui组件而得到复用，**复用性和可维护性**变的越来越差，由此出现了mvp

### MVP
mvp将model 和view 分解开，model与presenter通信，presenter再将变化同步到view，虽然拆解开了model和view，但当model中数据变化很多时，需要大量的代码手动同步model中的数据到view中，程序显得十分臃肿

### MVVM
mvvm把presenter需要手动同步model的变化到view层的过程自动化，交给viewModel来进行控制，因此是目前主流框架所选用的架构设计，整体来看，view和model 完全进行解耦开，自动化的过程让业务开发人员只需要关注操作数据，而无需手动的去进行ui界面的更新