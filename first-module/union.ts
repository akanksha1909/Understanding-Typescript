// Example of union
function combineUnion(input1: number | string, input2: number | string) {
    let result
    if (typeof input1 === 'number' && input2 === 'number') {
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
}

const combinedUnionAges = combineUnion(3, 14)
console.log(combinedUnionAges)

const combinedUnionNames = combineUnion('Ak', 'singh')
console.log(combinedUnionNames)