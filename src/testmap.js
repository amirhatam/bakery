const myArray = ["one", "two","three"]

const result = myArray.map((elem) => {
    return `<li>${elem}</li>`
})

console.log(result);