const arr=[1,2,3,4,5];

const iterator=arr[Symbol.iterator]();

//Symbol.iterator is inbuitl property available in all arrays maps,set, objects


console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

//if it reaches the limit of array it will give you undefined