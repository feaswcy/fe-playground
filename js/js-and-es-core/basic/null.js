console.log('-- TEST null --')
console.log('值 null不来自任何一个constructor，本身也没有任何属性和方法，只代表一个空的指针，指示变量未指向任何对象')
console.log('null 常在返回类型是对象，但没关联值的地方使用')

/**
 * null 是js 对象系统原型链的顶端
 * null标识空对象指针，实际上undefined派生自null，因此双等号时 两者相等 即 null == undefined为 true
 * typeof null 将会返回object
 * Object.prototype.toString.call(null)  // 将返回[object Null]
 */

console.log('null标识空对象指针，实际上undefined派生自null，因此双等号时 两者相等 即 null == undefined为 true\n')
console.log('null == undefined :', null == undefined)
console.log('null === undefined :', null === undefined)

console.log('typeof(null)', typeof null)

console.log('检测null的方式：Object.prototype.toString.call(null)：', Object.prototype.toString.call(null))
