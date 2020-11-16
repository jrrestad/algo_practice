// print sum of numbers 1-255
function printSum() {
    let sum = 0
    for (let i=0; i<=255; i++) {
        sum += i
    }
    return sum
}

console.log(printSum())