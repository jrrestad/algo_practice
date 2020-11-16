// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
let twoSum1 = (arr, target) => {
    for (let i=0; i<arr.length; i++) {
        for (let j=i+1; j<arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                return [i, j];
            }
        }
    }
    return null
}
// Big O notation: O(n^2)

// console.log(twoSum1([2,5,5,10], 10)) // [1, 2]
// console.log(twoSum1([2,7,11,15], 9)) // [0, 1]

// Solve using hash table es6
let twoSum2 = (arr, target) => {
    // instantiate a new Map
    let newMap = new Map;
    for (let i=0;i<arr.length;i++) {
        // Declare someMap as the remainder of the target minus the index value
        let someMap = target - arr[i]
        // If the map has the remainder...
        if (newMap.has(someMap)) {
            // Then we know the remainder, plus the current index value are differentand equal the target
            return [newMap.get(someMap), i]
        } else {
            // If the map has no value matching someMap (target minus index value), set the current value and its index
            newMap.set(arr[i], i)
        }
    }
    // Target does not exist in array
    return null
}
// Big O notation: O(n)

console.log(twoSum2([2,7,10,11], 9))
console.log(twoSum2([2,7,10,11], 21))
