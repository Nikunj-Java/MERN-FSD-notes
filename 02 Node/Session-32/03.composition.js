const carPrint= {
    print(){
        console.log("Printing.......");
    }
}
const canRead={
    read(){
        console.log("Reading.....");
    }
}
const myName={
    name(){
        console.log("My Name is Nikunj Soni");
    }
}
const person= Object.assign(myName,canRead,carPrint);

person.print();
person.read();
person.name();
console.log(person);
// composition means combining small - small objects togather in an one object
