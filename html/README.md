## Before Start
关于HTML，除了对标签的熟悉之外，还应该了解DOM与浏览器布局之前的一些问题

## HTML5 与 标签的分类
既可以记忆为两类，结构性标签和多媒体标签
+ 结构性标签： <header>, <section>, <aside>, <footer>, <nav>, 
+ 多媒体标签： <audio>, <video>, <canvas>

## html与web的语义化
HTML标签按照分类可以分为块级元素和行内元素。
块元素的特点，同时也是定义为：
1. 总是在新行上开始；
2. 高度、行高以及外边距和内边距都可控制；
3. 宽度默认是它容器的100%，除非设定一个宽度（**经测验，table不符合这一条，但它是block level**）
4. 他可以容纳内联元素和其他块元素。

内联元素的特点：
1.和其他元素都在同一行；
2.高，行高及外边距和内边距不可改变；
3.宽度就是它的文字和图片的宽度，不可改变；
4.内联元素只能容纳文本或者其他内联元素。

**tips**：块元素通常标识一块区域，与BFC的概念密切相关。块元素决定了布局。宽高设定有效margin有效，参与块格式化上下文，如果处于行内框内，则行内框会被迫打断一分为二成两个新行内框

内联元素通常代表一种元信息，不可以分成更小的部分。如a， input，img，strong，small，textarea

可以使用display属性转换inline和block，另外说的一点是table，也参与块格式化上下文，大体同 block，inline-table同inline-block

完整的definetion见 [Visual formatting model details](https://www.w3.org/TR/CSS21/visudet.html)


## HTML的解析



## DOM

Dom给javascript提供访问页面文档节点的方式，作为一名基础扎实的前端，下面的api需要熟练掌握：
+ document.getElementById()
+ document.getElementByTagName()
+ document.createElement()
+ document.appendChild()
+ document.innerHTML
+ document.setAttribute(attr, value)
+ document.getAttribute(attr)
+ window.scrollTo()

## 正在推进的标准与类html的语言

