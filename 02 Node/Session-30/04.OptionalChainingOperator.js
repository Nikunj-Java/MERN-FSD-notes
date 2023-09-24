const person={
    name:"alex",
    address:{
        city:"new york",
        street:"xyz Main st."
    },
    phonebook:{
        personal:"1234567890",
        home:"9876543210"
    }
}

console.log(person?.address?.city);
console.log(person?.phonebook?.personal);

const person1={
    name:"Jhon",
    address:{
        city:"Mumbai",
        street:"ABC Main st."
    }
    
}

console.log(person1?.address?.city);
console.log(person1?.phonebook?.personal);
