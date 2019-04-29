console.log('-- TEST null --')

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