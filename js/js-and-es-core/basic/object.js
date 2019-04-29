console.log('-- TEST Object --')

/**
 * 这里测试object的创建以及this等问题，数组和function虽然也是object
 * 但是将在专门的文件中讨论，因为他们有这更多有趣的特性~
 */
// 判断空对象

var obj = {}

Object.keys(obj).length === 0

JSON.stringfy(obj) === '{}'