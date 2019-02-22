
/**
 * 思路：第一次遍历n-1个数，找到最小的值与第一个元素交换，然后继续遍历n-2个元素，
 * 与第二个元素交换，以此类推
 */
var input = [42, 20, 17, 13, 28, 14, 23, 15]

function selectSort(input){
    var len = input.length, minIndex
    for (var i = 0; i < len -1 ; i++){
        minIndex = i
        for(var j = i+1 ; j<len; j++ ){
            if(input[j] < input [minIndex]){
                minIndex = j
            }
        }
        if (minIndex !== i){
              // 交换索引为i和索引为 minIndex的值
            temp = input[i]
            input[i] = input[minIndex]
            input[minIndex] = temp
        }
    }
    return input 
}

console.log('before:', input)
console.log('select after:', selectSort(input))

console.log('也是两个for循环嵌套，时间复杂度为O(n^2),空间复杂度为O(1), 选择排序是不稳定排序')
