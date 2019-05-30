console.log('-- TEST boolean --')

/**
 * boolean 可以通过new Boolean创建，该方法如果不指定参数，默认值为布尔值false
 * 布尔值false、true和new Boolean创建的变量的不同点在于，前者是值，后者是一个对象，值是true或者false
 * Boolean类主要用处在于， 调用布尔值的toString方法时，先将其转换为一个布尔对象，在调用这个对象的toString方法
 */
const prop = ['prototype']

const method = ['valueOf']

console.log('Boolean类型只有一个原型链的静态属性, Boolean.prototype', Boolean.prototype)

const boolean = new Boolean(false)
console.log('Boolean类型比较有用的实例方法是valueOf, boolean.valueOf()', boolean.valueOf())
console.log('调用布尔值的toString方法时，内部先将其转换为一个布尔对象，在调用这个对象的toString方法', boolean.toString())

console.warn('当 Boolean 对象直接应用于条件语），任何不是 undefined 和 null 的对象，包括值为 false 的 Boolean 对象，都会被当做 true 来对待。例如，下面 if 语句中的条件为真')
var x = new Boolean(false);
if (x) {
  // 这里的代码会被执行
}
console.log('new Boolean(false) returns a boolean object, which is true in if condition', new Boolean(false))





 