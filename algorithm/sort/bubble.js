

/**
 * 
 * @param {array} input 
 * 找出n个元素中最小的那一个，放到数组0的索引上，然后找出n-1个最小的一个，放到数组1的索引
 * 最后找到2个中最小的一个，放到n-2和n-1的索引上
 * 
 * tip: 交换元素位置时用临时变量保存
 */
var input= [42,20,17,13,28,14,23,15]

function bubbleSort(input){
    var len = input.length, temp
    for(var i = 0; i<len; i++){
        for(var j=len-1; j>i; j--){
            if(input[j]<input[j-1]){
                temp = input[j-1]
                input[j-1] = input[j]
                input[j] = temp
            }
        }
    }
    return input
}


console.log('before:', input)
console.log('bubble after:', bubbleSort(input))

console.log('两个for循环嵌套，时间复杂度为O(n^2),空间复杂度为O(1)')


// 优化问题:


