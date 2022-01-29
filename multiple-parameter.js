// add two number 
function addTwoNumbers(number1, number2) {
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
}

var fristNumber = 21;
var seconNumber = 59;
var result = addTwoNumbers(fristNumber, seconNumber);
console.log('Result value: ', result);

// Multiply Two Number 
function multiplyTwoNumber(num1, num2) {
    var result = num1 + num2;
    return result;
}
var total = multiplyTwoNumber(40, 10);
console.log('Total after multiplication: ', total);


// subtraction two number 
function subtractionTwoNumber(num1, num2) {
    var subtraction = num1 - num2;
    return subtraction;
}

var subtractionTotal = subtractionTwoNumber(40, 10);
console.log('Total after subtraction: ', subtractionTotal);

// divition two number 
function divitionTwoNumber(num1, num2) {
    var divition = num1 / num2;
    return divition;
}

var divitionTotal = divitionTwoNumber(40, 10);
console.log('Total after divition: ', divitionTotal);