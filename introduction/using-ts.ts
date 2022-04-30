const a = document.getElementById('number1')! as HTMLInputElement
const b = document.getElementById('number2')! as HTMLInputElement
const buttonElement = document.getElementById('add-button')

// Javascript way of making sure, to handle number
function add(num1: number, num2: number) {
    return num1 + num2
}

buttonElement.addEventListener('click', () => {
    // a.value is always a string, no matter what is the type of input box is
    // typescript doesn't know what is the value, as it can be any HTML element
    // Not all HTML element have value property
    // We have to tell typescript the a, b are HTML input element and always be there
    console.log(add(+a.value, +b.value))
})