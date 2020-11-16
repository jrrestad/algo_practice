let noNegatives = (arr) => {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}

console.log(noNegatives([-5,0,1,4,-10])) // [0,0,1,4,0]