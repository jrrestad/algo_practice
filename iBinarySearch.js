// If the value is found, return the index of the sorted array
let iBinarySearch = (arr, val) => {
    // set upper and lower bounds for the array
    let lower = 0;
    let upper = arr.length -1;
    // loop through array until lower is greater than or equal to upper
    while (lower <= upper) {
        // find the midpoint of the array
        let midpoint = Math.floor((lower + upper) / 2)
        // if val equals the array at the midpoint index, return the midpoint index
        if (val === arr[midpoint]) {
            return midpoint
        // if val is LESS than midpoint, the upper bound becomes the midpoint -1
        } if (val < arr[midpoint]) {
            upper = midpoint -1
        // if val is MORE than midpoint, the lower bound becomes the midpoint +1
        } if (val > arr[midpoint]) {
            lower = midpoint +1
        }
    }
    // else, return false, -1, null, etc
    return false
}

var arr = [-90,-19,0,2,12,29,33,190,320];

console.log(iBinarySearch(arr, 12)) // expected 4
console.log(iBinarySearch(arr, 5)) // false
console.log(iBinarySearch(arr, 0)) // 2
console.log(iBinarySearch(arr, 190)) // 7