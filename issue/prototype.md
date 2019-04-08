
## before start
js 原型链的由来

## 总结

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
1. 构造函数继承
通过改变子类的prototype属性指向为父类的一个实例，来让子类具有父类的方法


2. 组合继承（别称：call继承）

在子类中，通过调用父类的构造函数，并使用call改变this指向，来让之类具有this上的属性和方法

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
循环遍历父对象上的方法，添加到子对象上，注意使用for in 会检查原型链上的属性和方法

4. 混合继承
将原型继承和call继承混合使用
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
通过Object方法，创建一个新的对象包含有父类
```js
function inheritPrototype(subType,superType){
	var prototype = Object(superType.prototype);//创建对象
	prototype.constructor = subType;//增强对象
	subType.prototype = prototype;//指定对象
}

```









7. prototype 和 proto

prototype是函数的一个属性，用来存放这个函数作为构造函数时所具有的属性和方法，new 出来的一个对象会和prototype拥有相同的方法

proto是对象用来标明所对应的原型链上的方法



