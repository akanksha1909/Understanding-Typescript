function add(num1, num2, showResult, phrase) {
    var result = num1 + num2;
    if (showResult) {
        // This will give "Result is: 95", as phrase is string, it converts num1 and num2 to string too.
        // console.log(phrase + num1 + num2)
        console.log(phrase + result);
    }
    else {
        return num1 + num2;
    }
}
var num1 = 9;
var num2 = 5;
var printResult = true;
var resultPhrase = 'Result is: ';
add(num1, num2, printResult, resultPhrase);
