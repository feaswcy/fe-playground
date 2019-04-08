
## before start
js 原型链的由来

## 辨别一些概念
1. prototype 和 proto、__proto__

prototype是函数的一个属性，用来存放这个函数作为构造函数时所具有的属性和方法，new 出来的一个对象会和prototype拥有相同的方法

proto是对象用来标明所对应的原型链上的方法

__proto__ 是一种非标准实现，用来指向创建此对象依据的原型对象


## javascript 的原型链与继承

1. 构造函数的最佳实践
属性由this创建，方法单独写在函数的原型链上，function.prototype.doSth,不将方法写在构造函数中的好处是，如果进行大量的实例化，那么将会创建多个实例方法（实例方法在内存中占用资源比属性多的多）
```js
function Parent() {
	this.x = 100;
	this.y = 199;
}
Parent.prototype.fn = function() {} 
```

## 继承的几种方式
1. 原型继承
通过改变子类的prototype属性指向为父类的一个实例，来让子类具有父类的方法
注意这种方法需要修正constructor的指向
```js
function Parent(){
	this.x = 199;
	this.y = 299;
}
Parent.prototype.say = function(){
	console.log('say')
}
function Child(){
	this.g = 90;
}
Child.prototype = new Parent();
Child.prototype.constructor= Child
// 方法需要在 Child.prototype = new Parent() 之后加
Child.prototype.Bs = function(){
	console.log('Bs')
}
var p = new Parent();
var c = new Child();
console.dir(c)
c.Bs()  //Bs
p.say()

```


2. 组合继承（别称：call继承）

在子类中，通过调用父类的构造函数，并使用call改变this指向，来让之类具有this上的属性和方法
这种继承中，只能继承父类的私有属性，父类的公有方法无法继承到。

```js
function Parent() {
	this.x = 100;
	this.y = 199;
}
Parent.prototype.fn = function() {}
 
function Child() {
	this.d = 100;
	Parent.call(this); //构造函数中的this就是当前实例
}
```

3. 冒充对象继承
循环遍历父对象上的方法，添加到子类的原型链对象上
注意使用for in 会检查原型链上的属性和方法，如果不需要继承父类原型链上的方法，需要用hasOwnProperty来进行检测，因为for in 会检测原型链上的属性和方法


4. 混合继承
将原型继承和call继承混合使用，call继承用于继承私有的属性，原型继承用于继承父类上的公有方法
注意也需要修改constructor的指向
```js
function Parent(){
	this.x=100;
}
Parent.prototype.getX = function(){}
function Child(){
	Parent.call(this);
}
Child.prototype =  new Parent();
Child.prototype.constructor = Child;
```

5. 中间件继承
通过__proto__属性，将prototype指向父类的原型
注意__proto__ 的实现是一个非标准的，只是一部分浏览器实现了此属性
```js
function Parent(){
	this.x = 100;
}
Parent.prototype.getX = function(){}
function Child(){
	
}
Child.prototype.__proto__ = Parent.prototype;
var p = new Parent();
var c = new Child()
console.log(c)
```

6. 寄生组合式继承
通过Object方法，根据父类创建一个新的对象，并将原型链指向为新对象
```js
function inheritPrototype(subType,superType){
	var prototype = Object(superType.prototype);//创建对象
	prototype.constructor = subType;//增强对象
	subType.prototype = prototype;//指定对象
}

```

7. 经典继承（道格拉斯继承）
已知一个对象o，需要创建一个新的对象，这个新的对象继承自对象o。
```js
//功能封装
function create(o) {
    function F(){}
    F.prototype=o;
    return new F(); 
}

var o={name:"张三",age:18}；
var o2=create(o);//这样o2就继承自o了

```







