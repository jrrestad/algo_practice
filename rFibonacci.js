let rFibonacci = (n) => {
    // We know that fib sequence is 0, 1, 1, so we can just return 1
    // if n is a 1 or a 2 (as opposed to returning number if n < 2)
    if (n == 1 || n == 2) {
        return 1
    } else {
        return rFibonacci(n-1) + rFibonacci(n-2)
    }
}

console.log(rFibonacci(5))