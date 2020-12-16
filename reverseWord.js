// Create a function that, given a string of words (with spaces), returns new string with words in
// reverse sequence. Given "This is a test" , return "test a is This" .
// Use proper punctuation and no built in functions for strings except for .toUpperCase() and .toLowerCase()

let reverseWord = (str) => {
    let tempArr = []
    let newStr = ""
    // Get the punctuation mark at end of sentence and store in a variable
    let tempStr = (str[str.length -1])
    // Iterate over the sentence and push to array
    for (let i=0;i<=str.length - 1;i++) {
        if (str[i] == " " || str[i+1] == undefined) {
            tempArr.push(newStr.toLowerCase())
            if (str[i+1] != undefined) {
                tempArr.push(" ")
            }
            newStr = ''
        } else {
            newStr += str[i]
        }
    }
    // [ 'reverse', ' ', 'this', ' ', 'string' ]
    // Add punctuation to FIRST word in array
    tempArr[0] = tempArr[0] + tempStr
    // Get last word in array, to become first
    tempStr = tempArr[tempArr.length -1]
    // Capitalize the first letter of the last word in the array
    let capitalize = tempStr[0].toUpperCase()
    let tempStr2 = ''
    // Iterate over the last word in the array, starting from the 2nd letter
    for (let x=1;x<=tempStr.length -1;x++) {
        tempStr2 += tempStr[x]
    }
    // Add the capitalized letter to the remaining word
    tempStr = capitalize + tempStr2
    // Change the last word in the array to the capitalized word
    tempArr[tempArr.length-1] = tempStr
    // Iterate through the array in reverse order
    for (let j=tempArr.length-1;j>=0;j--) {
        newStr += tempArr[j]
    }
    return newStr
}

let str = "Reverse this string!"

console.log(reverseWord(str))