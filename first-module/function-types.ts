function add(num1, num2) {
    return num1 + num2
}

function printResult(result) {
    console.log('Result is: ', result)
}

// This is not correct, as now combineValue can be any function
// This is where function types comes into play
let combineValue: Function

combineValue = add
console.log(combineValue(8, 8))

combineValue = printResult
console.log(combineValue(4))

// This says, it will accept any function that takes two numbers and returns a number
let combineValuesFunctionType: (a: number, b: number)  => number

// Will get an error for this
// combineValuesFunctionType = printResult
combineValuesFunctionType = add
console.log(combineValuesFunctionType(5, 12))