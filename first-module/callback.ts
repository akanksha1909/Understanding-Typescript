function addAndHandle(num1: number, num2: number, cb: (num: number) => string) {
    const result = num1 + num2
    const value = cb(result)
    console.log(value)
}

addAndHandle(2, 3, (result) => {
    return `Result is: ${result}`
})