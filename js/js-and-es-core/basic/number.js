console.log('-- TEST number --')

console.log('最大的number', Number.MAX_VALUE)
console.log('最大的安全整数', Number.MAX_SAFE_INTEGER) // 9007199254740991 ,2^53 - 1 

// Number 的静态方法,通过Number.调用
isNaN, parseInt, parseFloat, isFinite

// number的实例方法,通过.调用
var number = 123456
number.toFixed()


/**
 * 数字类型，注意一下js 的按位操作符，&、|、^、~、<<、>>、>>>
 * &:按位与，|:按位非、^按位异或、~按位非、<<按位左移、>>按位右移(有符号右移)、>>>（无符号右移）
 *
 */
// 异或用来判断两个数字是否相等
var a = 1,
  b = 1
console.log(a ^ b) // 相等时，异或值为0

// Number 的方法，静态方法（构造函数方法）: isNaN, parseInt, parseFloat.


// number 示例方法:toFixed(),

