// 数组作为引用类型，判断变量是否是数组时，可以使用万能的
// Object.prototype.toString.call() 方法
// 也可以使用较新的api Array.isArray方法

function isArray(input) {
    if (Array.isArray) {
        return Array.isArray(input)
    }
    return Object.prototype.toString.call(input) === '[object Array]'
}

// Array的方法
Array.isArray()

Array.from()

Array.of()


// Array的实例方法（原型链方法）

/* 迭代器方法
* every, fliter, forEach, map, reduce, some, reduce​Right
*/
// every : 测试数组的所有元素是不是都通过了测试
let arr = [1, 2, 5, 30]
let isAllBelow30 = arr.every(item => {
    return item < 30
}) 
console.log(isAllBelow30) // expected : false

// fliter : 创建一个新数组，包含有所有通过fliter函数的array元素
let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let newArrWordsLengthAbove6 = arr.filter(item => {
    item.length > 6
})
console.log(newArrWordsLengthAbove6) // ['exuberant', 'destruction', 'present']

// forEach: 循环递归一个 数组，返回值是undefined
// 注意forEach 一般不可种植，除非抛出一个错误，但这种方式是不建议使用的
// 如果需要使用判断，最好的方式是使用every()，some()，find()，findIndex()
// 也可以使用fliter过滤之后在进行处理

let arr = [1, 2, 5, 30]
arr.forEach( (item,index,array) => {
  console.log(item) // 1, 2, 5, 30
  console.log(index) // 0, 1, 2, 3
  console.log(array) // 输出四次 [1, 2, 5, 30] 
})

// map: 创建一个新的数组，这个数组的每个元素由原数组根据自定义函数映射而来
let arr = [1, 2, 5, 30]
let doubleArr = arr.map(item => {
    return item*2
})
console.log(doubleArr) // [2,4,10,60]

// reduce:对数组的每一个元素进行叠加, 注意reduce函数的第一个参数为当前的累计器 Accumulator，表示上次累加的结果
let arr = [1,2,3,4,5]
arr.reduce((acc, item) => {
   return acc + item
})

// some: 测试是否至少有一个函数通过自定义函数测试，和every相反
let arr = [1,2,3,4,5]
let hasEvenNumber = arr.some(item => {
    item % 2 === 0
})
console.log(hasEvenNumber) // true， 因为2是偶数

/**
 * 查询方法,
 * entrier, find, findIndex, includes, indexOf, keys, lastIndexOf, values,
 */
// entrier



// 转换方法 concat,copyWithin,fill,flat,flatMap,join,sort,reverse,unshift




// 基础方法 map, pop, push, shift, slice, splice, toString, toLocalString,



