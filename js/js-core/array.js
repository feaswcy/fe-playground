// 数组作为引用类型，判断变量是否是数组时，可以使用万能的
// Object.prototype.toString.call() 方法
// 也可以使用较新的api Array.isArray方法

function isArray(input) {
    if (Array.isArray) {
        return Array.isArray(input)
    }
    return Object.prototype.toString.call(input) === '[object Array]'
}

/**
 * Array的方法 isArray, from, of
 *  */
Array.isArray() // 判断传入的参数是否是一个数组

Array.isArray([1,2,3]) // true

Array.from() // 从一个arrayLike对象创建一个array

Array.from([1, 2, 3], x => x*2) // expected: [2, 4, 6]

Array.of() // 创建一个由参数作为元素的数组

Array.of(7); // [7]  注意Array(7)，创建的是7个empty元素的数组
Array.of(1, 2, 3); // [1, 2, 3]


// Array的实例方法（原型链方法）

/* 迭代器方法
* every, fliter, forEach, map, reduce, some, find, reduce​Right,
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

// find： 返回第一个满足测试函数的数组项的值，否则返回undefined
let arr = [1, 2, 3, 4, 5]
let firstItemAbove5 = arr.find((item) => {
    return item > 5
})
console.log(firstItemAbove5) // undefined, 换成3， 将返回4

// findIndex: 返回第一个满足测试函数的数组项的index，未找到则返回undefined
let arr = [1, 2, 3, 4, 5]
let firstIndexOfItemAbove5 = arr.find((item) => {
    return item > 5
})
console.log(firstIndexOfItemAbove5) // undefined, 换成3， 将返回2

/**
 * 查询方法,
 * entrier, keys, values, includes, indexOf, lastIndexOf
 */
// entries, keys, values 数组转化为 Iterator对象的操作方法，分别返回数组的Iterator对象，Iterator对象的keys、values
let array1 = ['a', 'b', 'c'];
let iterator1 = array1.entries(); 
let iteratorKeys = array1.keys()
let iteratorValues = array1.values()

console.log(iterator1.next()) // {done : false, value: [0, "a"]}

for (let key of iteratorKeys) {
    console.log(key); // expected output: 0 1 2
}
for (let key of iteratorValues) {
    console.log(key); // expected output: 'a' 'b' 'c'
}

// includes:判断一个数组是否包含一个指定的值 indexOf: 返回数组的指定index的数组值
array1.includes('a') // true
array1.indexOf('a') // 0

/**
 * 转换方法 copyWithin, fill, flat, reverse, concat， join,
 *  */

// copyWithin，浅复制数组的一部分到数组的另一个位置，并返回它，而不修改数组的大小
var array1 = ['a', 'b', 'c', 'd', 'e'];
// 在index 0 copy 数组index 3-4之前的元素，但不改变数组的大小（length）
console.log(array1.copyWithin(0, 3, 4)); // expected output: Array ["d", "b", "c", "d", "e"]

// fill 从指定长度填充数组
var array1 = [1, 2, 3, 4];

// 第一个参数代表需要填充的值，2，4分别代表填充的起始范围和终止范围
console.log(array1.fill(0, 2, 4)); // expected output: [1, 2, 0, 0]

// flat：将一个数组拍平，可传入参数座位数组结构的深度
var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2); // [1, 2, 3, 4, 5, 6]

// reverse : 将数组颠倒，将会改变原来的数组
var array1 = ['one', 'two', 'three'];
var reversed = array1.reverse();
console.log('reversed: ', reversed); // expected output: Array ['three', 'two', 'one']
console.log('array1: ', array1); // expected output: Array ['three', 'two', 'one']


/**
 * 基础方法 map, pop, push, shift, unshift， slice, splice, toString, toLocalString,
 * 对数组元素进行操作的方法， 可以参考数据结构与算法中队列的描述
 */
// 



