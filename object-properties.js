var computer = {
    price: 29000,
    Storage: '156gb',
    color: 'silver',
    processor: 'intel i5'
}

// console.log(computer);
// console.log(computer.processor);
var computerPrice = computer.price;
// console.log(computerPrice); 

//different ways to set a Object property value 
var priceProperty = 'price';

computer.price = 22000;
computer["price"] = 23000;
computer[priceProperty] = 19000;

var storageProperty = 'Storage';
computer[storageProperty] = '512gb';
computer['Storage'] = '1tb';
computer.Storage = '2tb';
console.log(computer);
