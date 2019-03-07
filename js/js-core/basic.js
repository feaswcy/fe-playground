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

/**
 * null 是js 对象系统原型链的顶端
 * null标识空对象指针，实际上undefined派生自null，因此双等号时 两者相等 即 null == undefined为 true
 * typeof null 将会返回object
 * Object.prototype.toString.call(null)  // 将返回[object Null]
 */
null == undefined // true
null === undefined //false
typeof null // object
Object.prototype.toString.call(null) // [object Null]

/**
 * boolean 可以通过new Boolean创建，该方法如果不指定参数，默认值为布尔值false
 * 布尔值false、true和new Boolean创建的变量的不同点在于，前者是值，后者是一个对象，值是true或者false
 * Boolean类主要用处在于， 调用布尔值的toString方法时，先将其转换为一个布尔对象，在调用这个对象的toString方法
 */


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
 // 判断空对象

var obj = {}

Object.keys(obj).length === 0

JSON.stringfy(obj) === '{}'