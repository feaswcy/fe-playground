// 快速排序速度快，效率高，是处理大数据最快的排序算法之一
var input = [42, 20, 17, 13, 28, 14, 23, 15]

function quickSort(input) {
    if (input.length <= 1) { // 这里需要特别注意一下，数组长度为0和1的都需要直接返回
        return input;
    }
    var pivotIndex = Math.floor(input.length / 2);
    var pivot = input.splice(pivotIndex, 1)[0]; //这里不是input[pivotIndex]
    var left = [];
    var right = [];
    for (var i = 0; i < input.length; i++) {
        if (input[i] < pivot) {
            left.push(input[i]);
        } else {
            right.push(input[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}

console.log('before:', input)
console.log('select after:', quickSort(input))

console.log('一个for循环与一个递归算法，时间复杂度为O(nlogN),空间复杂度为O(1)')