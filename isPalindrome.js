// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

let isPalindrome = (num) => {
    // If the number is a negative, it does not read the same backwords as forwards and therefore is false
    if (num < 0) {
        return false
    }
    let string = num.toString()
    let newArr = []
    for (let i=0;i<string.length;i++) {
        newArr.push(string[i])
    }
    for (let j=0;j<newArr.length / 2;j++) {
        if (newArr[j] != newArr[newArr.length - 1 -j]) {
            return false
        }
    }
    return true
}

console.log(isPalindrome(-505)) //false
console.log(isPalindrome(05)) //true, does not recognize 0 before an integer as an integer
console.log(isPalindrome(501)) //false
console.log(isPalindrome(505)) //true
console.log(isPalindrome(5005)) //true
console.log(isPalindrome(50105)) // true
console.log(isPalindrome(00000)) // true
console.log(isPalindrome(5)) // true