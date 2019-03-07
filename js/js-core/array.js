// 数组作为引用类型，判断变量是否是数组时，可以使用万能的
// Object.prototype.toString.call() 方法
// 也可以使用较新的api Array.isArray方法

function isArray(input) {
    if (Array.isArray) {
        return Array.isArray(input)
    }
    return Object.prototype.toString.call(input) === '[object Array]'
}


