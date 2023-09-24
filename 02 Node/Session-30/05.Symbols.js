const symbol=Symbol();
const obj={};

obj[symbol]="This is My Symbol Property";

console.log(obj[symbol]);

//create in another way

const symbol1= Symbol('Symbol with its description');
const symbol2= Symbol('Symbol with its description');

console.log(symbol1.toString());
console.log(symbol1==symbol2); //unique symbol