let oddSum = () => {
    let sum = 0
    for (let i=0; i<=255; i++) {
        // for even, i % 2 === 0
        if (i % 2 === 1) {
            sum += i;
            // console.log(i)
        }
    }
    return sum;
}

console.log(oddSum())