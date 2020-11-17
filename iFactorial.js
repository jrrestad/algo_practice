let iFactorial = (num) => {
    let fact = 1;
    for (let i=1;i<=num;i++) {
        fact *= i
    }
    return fact
}

console.log(iFactorial(100)) // 24