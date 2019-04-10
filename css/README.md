
## 布局的种类
六大布局方式： ``标准文档流，float，定位布局，表格布局，弹性盒子，网格布局``

### 1.标准文档流 （别名：flow 布局， Normal Flow）
1. 基本方式： 元素按照其在html中出现的位置顺序依次排布，主要形式为自上而下，一行接一行，自左至右。
2. 优点：根据标签的HTML的出现顺序和标签的块级或行内特性进行排布，简单并且符合一般的思维习惯
3. 缺点：对于比较复杂的效果，文档流可能无法实现
4. 示例: <section><iframe src=""></iframe></section>

> 文档流中可以通过display:inline-block 实现多列布局，注意，使用inline-block将会以行中最高的元素作为行高，其他元素高度不够，也不会上浮补位，但是可以通过设置垂直对齐基线来解决这个问题，这也是和float不同的地方之一。

### 2.Float布局
1. 基本方式：通过设置元素的display属性，让元素浮动在container的左边或者右边，元素浮动后将会影响这个元素之后的元素布局方式，并‘浮’在后面元素的上方。
2. 优点：多列布局中最简单的方式、兼容性最好的方案。
3. 缺点：存在高度塌陷的问题，即浮动元素不能撑起父容器的高度，而表现为本身其他内联元素的高度，需要通过**清除浮动**来解决
4. 示例: <section><iframe></iframe></section>

### 3.定位布局
1. 基本方式： 通过设置元素的position属性为absolute、fixed、relative等，让元素相对于一个BFC进行定位和绘图
2. 优点：定位布局功能强大，能实现一个元素放置在页面的任意一个位置。
3. 缺点(兼容性问题)：
4. 示例: <section><iframe></iframe></section>


### 4.表格布局
1. 基本方式：通过设置元素display属性为table，让子元素的排列布局特性表现为内置的table-item
2. 优点：兼容性好，可以实现复杂的多列布局
3. 缺点(兼容性问题)：破坏了语义化的原则，已不再被标准所推荐
4. 示例: <section><iframe></iframe></section>


### 5.弹性盒子
1. 基本方式：Css3新增的支持多列布局的属性，通过简单的设置属性实现简单的多列布局
2. 优点：功能简单并且强大，没有带来其他的问题，浏览器实现广泛
3. 缺点(兼容性问题)：部分旧的浏览器可能还未实现支持flex布局
4. 示例:
```html

<section><iframe></iframe></section>
<style>
.container{
    display: flex;
    align-item: flex-start;
    justfy-content: center; // space-between
}

</style>

```


### 6.网格布局
1. 基本方式：多行多列布局的一种未来方案，通过网格样的单元组合页面中的元素。
2. 优点：解决多行多列布局原本复杂的css编写。
3. 缺点(兼容性问题)：浏览器实现不太好，多行布局显得有点鸡肋，一般可以用flex布局替代。
4. 示例: <section><iframe></iframe></section>

**总结**
对于如何选择布局方案：
+ 对于兼容性较好的浏览器环境下，flex布局是实现多列较好的方案
+ 定位布局常用在一些组件或者全局的效果之中，float布局需要掌握[清除浮动]()的方法


## 一些特殊的css最佳实践
### 样式单位: px， em， rem， vh， vw
+ px: 
+ em: 相对于父元素的长度单位。
+ rem: 相对根元素的长度单位，如30rem，相当于根元素的font-size的30倍。
+ vh: view height,当前视口高度的1%，如30vw，相当于当前视口高度的30%。
+ vw: view width,当前视口宽度的1%，如30vh，相当于当前视口宽度的30%。
+ %： 父元素的百分比长度，如30%，相当于长度为父元素的30%


### 响应式布局
随着移动端设备的普及，在不同的设备上保持对一份HTML文档的可访问性越来越重要，响应式设计在这种问题的背景下作为一种方案被提出，主要用于解决一份文档在不同的终端上访问相同或类似的页面效果。

目前主流
1. 什么是响应式布局？
2. 响应式布局的方案有哪些，各种方案有哪些优缺点
3. 

### css位置计算

Client width : https://stackoverflow.com/questions/21064101/understanding-offsetwidth-clientwidth-scrollwidth-and-height-respectively

### 区域滑动问题
scroll

## css3 与 动画（canvas ，svg）
### css3 
+ transform
+ line-granident

### 硬件加速

### requestAnimationFrame API







