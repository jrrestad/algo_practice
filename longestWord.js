// Create a function that, given a string of words, returns the longest word.
// Do not use built in methods

let longestWord = (str) => {
    let newStr = ''
    var longest = ''
    for (var i=0;i<str.length;i++) {
        if (str[i] != ' ') {
            newStr += str[i]
            if (longest.length < newStr.length) {
                longest = newStr
            }
        } else {
            newStr = ''
        } 
    }
    return longest
}

var str = "What is the longest word in this sentence?"
// var str2 = "I II III IIII IIIII IIIIII IIII II I"

console.log(longestWord(str))