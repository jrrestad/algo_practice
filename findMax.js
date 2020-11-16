let findMinMax = (arr) => {
    let max = arr[0]
    let min = arr[0]
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return [min, max]
}

console.log(findMinMax([1,2,3,4,5])) // [1, 5]
console.log(findMinMax([-1,-2,-3,-4,-5])) // [-5, -1]
console.log(findMinMax([-5,-3,0])) // [-5, 0]