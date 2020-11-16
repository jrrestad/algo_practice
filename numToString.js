let numToStr = (arr) => {
    for (let i=0;i<arr.length;i++) {
        if (typeof arr[i] === "string") {
            arr[i] = 'imposter'
        } 
    }
    return arr
}

console.log(numToStr([1,2,3,"4",5,"6"])) // [1,2,3,'imposter',5,'imposter']
