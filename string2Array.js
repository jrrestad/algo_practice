// Given "Life is not a drill!" return ["Life", "is" "not", "a", "drill!"]

let str2Arr = (str) => {
    var arr = [];
    var newStr = '';
    for (var i=0;i<str.length;i++) {
        console.log(str[i])
        if (str[i] == ' ') {
            arr.push(newStr)
            newStr = ''
        } else if (str[i+1] === undefined) {
            newStr += str[i]
            arr.push(newStr)
        } 
        else {
            newStr += str[i]
        }
    }
    return arr
}

var str = "Life is not a drill!"

console.log(str2Arr(str))
