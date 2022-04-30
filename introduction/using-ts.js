var a = document.getElementById('number1');
var b = document.getElementById('number2');
var buttonElement = document.getElementById('add-button');
// Javascript way of making sure, to handle number
function add(num1, num2) {
    return num1 + num2;
}
buttonElement.addEventListener('click', function () {
    // a.value is always a string, no matter what is the type of input box is
    // typescript doesn't know what is the value, as it can be any HTML element
    // Not all HTML element have value property
    // We have to tell typescript the a, b are HTML input element and always be there
    console.log(add(+a.value, +b.value));
});
