/**
 * js 中基本的数据类型的属性与方法
 * js的基本数据类型有 undefined， null， boolean， string， number，object
 */
console.log('-- TEST undefined, null, boolean --')

/**
 * undefined是没有给变量赋值时变量的默认值
 * undefined 也是没有return 语句时函数的默认返回值
 * 在非严格模式下以及es6 below的js中，存在变量提升行为，变量提升时，默认值也是undefined
 */
var a
console.log(a) // undefined
typeof a // undefined

console.log(b)
var b

console.log('-- TEST string --')
/**
 * 
 * 
 */


 console.log('-- TEST number --')
 
 /**
  * 
  * 
  */


console.log('-- TEST Object --')

/**
 * 这里测试object的创建以及this等问题，数组和function虽然也是object
 * 但是将在专门的文件中讨论，因为他们有这更多有趣的特性~
 */