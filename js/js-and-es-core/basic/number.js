console.log('-- TEST number --')
/**
 * 以下测试number的静态属性：
 * EPSILON、MAX_SAFE_INTEGER、MAX_VALUE、MIN_SAFE_INTEGER、MIN_VALUE、NaN、NEGATIVE_INFINITY、POSITIVE_INFINITY
 */
const proplist = 'EPSILON、MAX_SAFE_INTEGER、MAX_VALUE、MIN_SAFE_INTEGER、MIN_VALUE、NaN、NEGATIVE_INFINITY、POSITIVE_INFINITY'
const staticProp = proplist.split('、')

staticProp.forEach(ele => {
  console.log(`%c ${ele}:`, 'background:#42b983;color:#000', `${Number[ele]}`)
})

console.log('描述：\n EPSILON 代表最小的两个数之间的间隔')
console.log('描述：\n NaN 代表not a number，但是typeof NaN 返回的是number，还有NaN !== NaN 返回的是true（可作为检测的一个依据）')
console.log('POSITIVE_INFINITY以及NEGATIVE_INFINITY表示正负无限大，值为Infinity，这个值是全局（global）下的一个属性')

// Number 的静态方法,通过Number.调用
const methodlist = 'isNaN、isInteger、isFinite、isSafeInteger、parseInt、parseFloat'
const staticMethod = methodlist.split('、')
let target = 10
staticMethod.forEach(ele =>{
  console.log(`Number.${ele}(${target}) returns`, Number[ele].call(null, target))
})

// number的实例方法, 主要有toFixed(), valueOf()
var number = 123.4556
number.toFixed(2) // 123.45

var num = new Number(123) // typeof num returns 'Object' 
num.valueOf() // 123



/**
 * 数字类型，注意一下js 的按位操作符，&、|、^、~、<<、>>、>>>
 * &:按位与，|:按位非、^按位异或、~按位非、<<按位左移、>>按位右移(有符号右移)、>>>（无符号右移）
 *
 */
// 异或用来判断两个数字是否相等
var a = 10, b = 10
console.log('判断两个数是否相等时可以用异或运算^，如a ^ b,相等时返回0：\n', a ^ b) // 相等时，异或值为0



