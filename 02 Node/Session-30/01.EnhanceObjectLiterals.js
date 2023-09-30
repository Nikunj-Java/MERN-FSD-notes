const name="Alex";
const age= 35;

//01 .sorthand property
const user= {name,age}; 

console.log(user.name);
console.log(user.age);


//02Compted property using  []
const propertyName= 'color';
const car={
    [propertyName]:'blue'
}

console.log("ComputedProperty:",car.color);

//03. Method Defination
const calculator= {
    add(a,b){return a+b;},
    sub(a,b){return a-b;}
}

console.log("Addition",calculator.add(3,2));
console.log("Subtaction",calculator.sub(3,2));


//04

const car1={
    //variable declaration
    carName:"Tata NEXON",
    color:"Dark Edition",
    Model:"Top Model",

    //Function Declaration
    start(){
        console.log(`${this.carName} started`);
    },

    stop(){
        console.log(`${this.carName} stopped`);
    }
}

console.log(car1.carName);
console.log(car1.color);
console.log(car1.Model);
car1.start();
car1.start();


