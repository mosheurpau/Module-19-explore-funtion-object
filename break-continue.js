// var i = 0
// while (i < 10) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
//     i++;
// }


// for (var i = 0; i < 20; i++) {
//     if (i > 8) {
//         break;
//     }
//     console.log(i);
// }

var array = [33, 45, 62, 89, 98, 122, 32, 54, 23];
// for (var i = 0; i < array.length; i++) {
//     var number = array[i];
//     if (number > 90) {
//         break;
//     }
//     console.log(number);
// }


for (var i = 0; i < array.length; i++) {
    var number = array[i];
    if (number > 90) {
        continue;
    }
    console.log(number);
}