let iFibonacci = (n) => {
    let arr = [0, 1]
    for (let i=0;i<n;i++) {
        arr.push(arr[arr.length -1] + arr[arr.length -2])
    }
    return arr[n]
}

// 6 is the 6th index in an array, not the 6th number in the sequence
console.log(iFibonacci(6))