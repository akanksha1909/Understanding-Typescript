type Combinable = number | string

function combine(input1: Combinable, input2: Combinable) {
    let result
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
}

const combinedAges = combine(3, 14)
console.log(combinedAges)

const combinedNames = combine('Ak', 'singh')
console.log(combinedNames)