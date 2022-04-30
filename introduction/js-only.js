const input1 = document.getElementById('number1')
const input2 = document.getElementById('number2')
const addButtonElement = document.getElementById('add-button')

// Javascript way of making sure, to handle number
function addOne(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    } else {
        return +a + +b
    }
}

addButtonElement.addEventListener('click', () => {
    // a.value is always a string, no matter what is the type of input box is
    document.getElementById('result').value = addOne(input1.value, input2.value)
})