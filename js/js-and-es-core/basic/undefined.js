/**
 * undefined是没有给变量赋值时变量的默认值
 * undefined 也是没有return 语句时函数的默认返回值
 * 在非严格模式下以及es6 below的js中，存在变量提升行为，变量提升时，默认值也是undefined
 */

 // ### 变量生命let 和 const
//  var 声明的变量存在变量提升(变量提升表现为将变量的声明提升到函数顶部， 但不赋值) 的特性。
//  let 会报 not defined
//  var 会绑定全局作用域，
//  let、 const不会
//  const 声明时必须初始化
//  const，
//  let 声明需要在block的最顶部（ "解决变量提升"）
var a
console.log(a) // undefined
typeof a // undefined

console.log(b)
var b

