
/**
 * 插入排序思路：从第二个元素起，找到这个元素和已排序的所有数据相比较，把它放入合适它的位置上
 * 类似打扑克牌，新拿到一张牌，小的放后面，大的放前面，直到所有的排抓完
 */
var input = [42, 20, 17, 13, 28, 14, 23, 15]

function insertSort(input){
    // i = 4是 key=28，input = [13,17,20,42, 28,14,23,15]

    var len = input.length
    for (var i = 1; i < len; i++) {
        var key = input[i];
        var j = i - 1;
        while (j >= 0 && key < input[j] ) {
             // 暂时改变j+1和j相等，继续像已排序的元素中查找，
             // 直到key的值大于查找的已排序的某一个元素，退出while循环，此时这个元素的下表为j
            input[j + 1] = input[j];
            debugger
            j--;
        }
        // j=2 input = [13,17,20,28,42, ...]
        input[j + 1] = key;
    }
    return input;
}

console.log('before:', input)
console.log('select after:', insertSort(input))

console.log('两个for循环嵌套，时间复杂度为O(n^2),空间复杂度为O(1)')


// 二分法改进