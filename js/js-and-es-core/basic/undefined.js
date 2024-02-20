console.log('-- TEST undefined --')

console.log('undefined和null一样没有任何属性和方法')

console.log('undefined是没有给变量赋值时变量的默认值')
console.log('undefined 也是没有return 语句时函数的默认返回值')

console.log('在非严格模式下以及es6 below的js中，存在变量提升行为，变量提升时，默认值也是undefined')


console.log('在变量提升现象时，变量的值也是undefined：')

console.log('在b还没有声明之前，先计算b，返回为undefined', b)
var b = 'i am real b'


console.warn('在es6中，使用let和const来解决变量提升的现象, 变量生命let 和 const 特性如下')

console.warn('var 会绑定全局作用域, var 声明的变量存在变量提升(变量提升表现为将变量的声明提升到函数顶部， 但不赋值) 的特性。')
console.warn('let、 const不会绑定全局，在暂时性死区计算let声明的变量 会报 ReferenceError')
console.warn(' const，let 声明需要在block的最顶部（ "解决变量提升"） ，const 声明时必须初始化')


