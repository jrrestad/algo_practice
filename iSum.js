let iSum = (num) => {
    let sum = 1;
    while (sum <= num) {
        sum++
        sum += sum
    }
    return sum
}

console.log(iSum(4))
