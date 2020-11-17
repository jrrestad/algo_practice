let linearSearch = (num, arr) => {
    for (let i=0;i<arr.length;i++) {
        if (arr[i] == num) {
            return i;
        }
    }
    // Does not exist
    return -1
}

console.log(linearSearch(5, [1,2,3,4])) // -1
console.log(linearSearch(-5, [1,2,3,4,-5])) // 4