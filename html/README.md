## Before Start
HTML作为一种标记性结构化语言，已经成为web中不可缺少的一部分，合理的使用Html标签能够让文档的骨架结构更加清晰和健壮。在一般的开发中，除了了解不同HTML标签本身的含义之外，应该着重理解HTML与DOM API相关的部分，不管是什么js框架，最终要操作dom 无可避免的要使用这些方法。

## HTML与HTML5的发展年限表
+ 1982年，Tim Berners-Lee 建立 HTML
+ 1993年6月，HTML 由 IETF 工作小組发布草案
+ 1994年10月，W3C 成立， 网络应用发展的标准规范交由 W3C 协会制定及推广
+ 1995年11月，HTML 2.0，2000年6月被宣布已经过时
+ 1996年1月 ，HTML 3.2 由 W3C 推荐为标准规范
+ 1997年11月，HTML 4.0
+ 1999年12月，HTML 4.01 以 XML 语法重新构建，较为严格，W3C推荐标准
+ 2000年1月，XHTML 1.0，W3C推荐标准
+ 2001年5月，XHTML 1.1，W3C推荐标准
+ 2004年，WHATWG小组成立，由各大浏览器开发商组成，重拾HTML 4规格，开发 HTML 5规格
+ 2006年，W3C认输，承认 XHTML 2.0不会成功
+ 2007年，W3C重新成立 HTML工作小组，参考 WHATWG 的规格发展期HTML规格
+ 2009年，XHTML 2.0被放弃，全面投入 HTML 5 规格的发展
+ 2011年6月，Google宣布全面采用 HTML 5 技术
+ 2012年， HTML 5被选为候选标准
+ 2014年10月28日，HTML 5.0，W3C正式发布HTML 5.0推荐标准

## HTML5 按含义分类
既可以记忆为两类，结构性标签和多媒体标签
+ 结构性标签： ``<header>, <section>, <aside>, <footer>, <nav>`` 
+ 多媒体标签： ``<audio>, <video>, <canvas>``

## HTML 按结构布局分类
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

**tips**：
1. 块元素通常标识一块区域，与BFC的概念密切相关。块元素决定了布局。宽高设定有效margin有效，参与块格式化上下文，如果处于行内框内，则行内框会被迫打断一分为二成两个新行内框
2. 内联元素通常代表一种元信息，不可以分成更小的部分。如a， input，img，strong，small，textarea

可以使用display属性转换inline和block，另外说的一点是table，也参与块格式化上下文，大体同 block，inline-table同inline-block

完整的definetion见 [Visual formatting model details](https://www.w3.org/TR/CSS21/visudet.html)

## DOM

### Dom api
Dom给javascript提供访问页面文档节点的方式，作为一名基础扎实的前端，下面的api需要熟练掌握：
+ document.getElementById()
+ document.getElementByTagName()
+ document.createElement()
+ document.createTextNode(data) // 创建一个文本节点，文本内容是data，文本节点通过appendChild可以添加到dom中
+ document.appendChild()
+ document.innerHTML
+ document.setAttribute(attr, value)
+ document.getAttribute(attr)
+ window.scrollTo()
  
### DOM节点的增删改查
```js
// 增
parentElement.appendChild(childElement) 

// 删
parentElement.removeChild(childElement) 

// 改
parentElement.replaceChild(newChild, oldChild) 

// 查
Node.parentNode // 查询元素的父节点

Node.children // 查询元素的子节点，只包含下一层

Node.childNodes // 查询元素的所有子节点

Node.nextSibling // 查询元素的下一个兄弟元素

Node.previousSibling // 查询元素的上一个兄弟元素

Node.firstChild // 返回node的第一个子元素


### DOM事件
+ addEventListener
+ removeEventListener
+ creatEvent  // 创建一个事件，之后必须使用init进行初始化
+ dispatchEvent  // 触发一个事件，element.dispatchEvent(event)

### DOM event
DOM event，从顶向下先捕获，在从下到上在冒泡。

event中currentEvent代表的事件监听器的当前元素，target代表点击的鼠标所指向的那个元素。



```


### svg
svg（Scalable Vector Graphics）,是一种描述二维矢量图形的图形格式，svg绘图的原理依靠**矢量**，而不是像素，因此放大缩小不会造成失真。它本质是一种文本文件，包含了对一个图形信息的矢量描述，体积一般较小。
svg的在web中使用方式一般有三种：
+ 通过html 标签 ``<svg></svg>``
+ 通过单个的svg文件，svg文件可以通过``<img>、<object>、<embed>、<iframe>``等标签插入网页，css的background url也可以使用svg文件作为背景
+ 转换成base64，通过dataURI写入网页 ``<img src="data:image/svg+xml;base64,[data]">``

svg是一个画布，在svg标签内部可以使用多种矢量图形标签来定义图形，每个矢量图形标签都有相应的属性值对这种形状就行描述，常见的矢量标签有：
+ ``<circle></circle>``，绘制圆，cx，cy代表圆心横纵坐标，r代表半径
+ ``<line></line>``，绘制直线，x1，y1代表起点的横纵坐标，x2，y2代表终点的横纵坐标
+ ``<polyline></polyline>``，绘制折线，points指定了折线的端点坐标，点和点之间用空格分开
+ ``<rect></rect>``，绘制矩形，x，y属性代表左上角坐标，width和height指定宽度和高度
+ ``<ellipse></ellipse>`` ，绘制椭圆，cx，cy，代表椭圆中心横纵坐标，rx，ry代表横轴和纵轴长度
+ ``<polygon points=”0,0 100,0 100,100 0,100 0,0“></polygon>``，绘制多边形，points指定多边形顶点坐标
+ ``<path></path>``，绘制路径，有一个d属性代表绘制顺序，它的值是一个长字符串，每个字母代表一个绘制顺序，如下示例d="M 18,3 L 46,3 L 46,40 L 61,40 L 32,68 L 3,40 L 18,40 Z"

*svg标签本身可以width和height 以及viewBox来指定宽、高、以及视窗起点*

<svg width="100%" height="180" viewBox="0 0 100 100">
<path d="
  M 18,3
  L 46,3
  L 46,40
  L 61,40
  L 32,68
  L 3,40
  L 18,40
  Z
"></path>
</svg>

### Canvas
canvas 是HTML中定义的一种标准**画布**，canvas的优点在于可以通过javascript操纵绘图的过程，canvas主要包含有以下的几个api。
+ getContext
+ context.fill
+ context.stroke
+ context.toDataUrl




介绍几个api，toDataUrl：https://juejin.im/post/5a17c5e26fb9a04527254689

