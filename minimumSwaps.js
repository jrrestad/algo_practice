//You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] 
//without any duplicates. You are allowed to swap any two elements. You need to find the 
//minimum number of swaps required to sort the array in ascending order.

const minSwap = (arr) => {
    let numOfSwaps = 0;
    for (let i=0;i<arr.length;i++){
        if (arr[i] != (i+1)) {
            let j=i;
            while (arr[j] != (i+1)) {
                j++
            }
            // let temp = arr[j]
            // arr[j] = arr[i]
            // arr[i] = temp;
            [arr[j], arr[i]] = [arr[i], arr[j]]
            numOfSwaps++;
        }
    }
    return arr + "\nSwaps: " + numOfSwaps
}

// let arr = [4,3,1,2]
let arr = [7,1,3,2,4,5,6]
// [1,7,3,2,4,5,6]
// [1,2,3,7,4,5,6]
// [1,2,3,4,7,5,6]
// [1,2,3,4,5,7,6]
// [1,2,3,4,5,6,7]

console.log(minSwap(arr))