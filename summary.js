var skyColor = 'white';

var phones = ['iphone', 'xaimoi', 'samsung', 'htc'];
phones[3] = 'walton';

// check oppo not exists in an array
if (phones.indexOf('oppo') == -1) {
    console.log('opps! amir khan oppo is missing');
}

// if lg is available
if (phones.indexOf('lg') != -1) {
    console.log('Lg is available now');
}

// loop
var num = 0;
while (num <= 10) {
    num++;
}

for (var i = 0; i < phones.length; i++) {

}

// function
function addThreeNumbers(number1, number2, number3) {
    var total = number1 + number2 + number3;
    return total;
}

addThreeNumbers(87, 42, 53);

// Object
var microphone = {
    brand: 'blue yeti',
    price: 120,
    color: black
}