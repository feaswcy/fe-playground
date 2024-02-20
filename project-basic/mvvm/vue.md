## vue相关知识点

1. 入口时进行rendermixin，在vue 原型链上定义了reander 方法
2. 调用new Vue（），对生命周期，events，state进行了初始化
3. 在this上 执行相关的钩子函数，
4. 执行vm.$mount，并挂在options上(在mounted之前挂在，但是mergeoption实在init时执行的，这样能拿到吗？)

createElement函数：
通过函数参数化，本身已经能够表达嵌套的结构

步骤如下：
1. 尝试createElement
2. 自定义component并不能写文字？
3. createElement 传入constructor之后进行new 实例化


