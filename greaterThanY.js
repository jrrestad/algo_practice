let greaterThanY = (arr, y) => {
    count = 0
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > y) {
            count++
        }
    }
    return count;
}

console.log(greaterThanY([1,2,3,4,5,6,7,8], 5)) // 3
console.log(greaterThanY([1,2,3,4,5,6,7,8], 7)) // 1
console.log(greaterThanY([-5, 0, -1, 100, 12], -2)) // 4