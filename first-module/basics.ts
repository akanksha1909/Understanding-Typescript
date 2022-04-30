function add(num1: number, num2: number, showResult: boolean, phrase: string) {
    const result = num1 + num2
    if (showResult) {
        // This will give "Result is: 95", as phrase is string, it converts num1 and num2 to string too.
        // console.log(phrase + num1 + num2)
        console.log(phrase + result)
    } else {
        return num1 + num2
    }
}

const num1 = 9
const num2 = 5
const printResult = true
const resultPhrase = 'Result is: '

add(num1, num2, printResult, resultPhrase)