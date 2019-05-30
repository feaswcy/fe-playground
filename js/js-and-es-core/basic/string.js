console.log('-- TEST string --')

/**
 * 静态方法： length
 */

 const statProp = ['protoType', 'length']

console.log('String的静态属性只有两个protoType、length')
console.log('String.length永远返回1：String.length', String.length)

/**
 * String的实例方法
 */

const str = new String('i am a good javascript developer')
const arguments = [0]

console.log('测试当前环境支持的所有str实例方法')
for (let key in String.prototype){
  console.log(key)
  typeof String.protoType[key] === 'function' && console.log('str.${key}()', str[key].apply(null, arguments))
}



 
