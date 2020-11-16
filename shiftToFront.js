let shiftToFront = (arr, x) => {
    for (let i=0;i<x; i++) {
        let temp = arr.shift()
        arr.push(temp)
    }
    return arr
}

console.log(shiftToFront([1,2,3,4,5], 4)) // [5,1,2,3,4]