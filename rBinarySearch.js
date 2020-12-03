// If the value is found, return the index of the sorted array
// recursive binary search may require additional parameters to pass in bounds
let rBinarySearch = (arr, val, lower=0, upper=arr.length -1) => {
    // find the midpoint
    let midpoint = Math.floor((lower + upper) / 2)
    // establish base case
    if (lower > upper) {
        return false;
    }
    // if target value is less than the value at the midpoint, set upper to be
    // midpoint -1 and recursively call rBinarySearch
    else if (val < arr[midpoint]) {
        upper = midpoint -1;
        return rBinarySearch(arr, val, lower, upper);
    }
    // if target value is greater than the value at the midpoint, set upper to be
    // midpoint +1 and recursively call rBinarySearch
    else if (val > arr[midpoint]) {
        lower = midpoint +1;
        return rBinarySearch(arr, val, lower, upper);
    }
    // if all conditionals are not met it means the value matches the value at the
    // midpoint. So return the midpoint index
    return midpoint;
}

var arr = [-90,-19,0,2,12,29,33,190,320];
console.log(rBinarySearch(arr, 5)) // false
console.log(rBinarySearch(arr, 12)) // 4
console.log(rBinarySearch(arr, 0)) // 2
console.log(rBinarySearch(arr, 190, 0, arr.length -1)) // 7