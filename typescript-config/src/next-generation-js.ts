console.log('Hello Akanksha!')

const age = 30

let isOld
if (age > 20) {
    isOld = true
}

console.log(isOld)

const add = (num1: number, num2: number) => {
    return num1 + num2
}

const subtract = (num1: number, num2: number = 1) => num1 - num2

console.log(add(4, 5))
console.log(subtract(4))

const hobbies = ['Cooking', 'Singing']
const activeHobbies = ['Dancing', 'Coding']

activeHobbies.push(...hobbies)
console.log(activeHobbies)

let person = {
    firstName: 'Akanksha',
    pAge: 30
}

// Spread operator
const copiedPerson = { ...person }
console.log(copiedPerson)

// Rest parameters. For accepting the unlimited amount of parameters
const addNumbers = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => { return curResult + curValue }, 0)
}

console.log(addNumbers(1, 2, 3, 4, 5))

// Array Destructuring, elements are pulled out in an order
const [hobby1, hobby2, hobby3] = hobbies
console.log(hobby1, hobby2, hobby3)

// Object Destructuring, elements need not to be pulled out in an order
const { firstName: userName, pAge } = person
console.log(userName, pAge)
console.log(person)