//ES6

class Student {

    constructor(name,email,country,yob){
        this.name=name;
        this.email=email;
        this.country=country;
        this.yob=yob;

    }

    sayHello(){
        console.log(`Hello Everyone..!! My name is ${this.name}`);
    }
    getEmail(){
        console.log(`Hello Everyone..!! My Email is ${this.email}`);
    }
    calculateAge(){
        console.log(`Hello Everyone..!! My Age is ${2023 - this.yob}`);
    }
}

//create an object of class

let stu1= new Student("Nikunj Soni","nikunj@gmail.com","India",2013);
//let stu2= new Student("Rohit Kumar","rk@gmail.com","India");
console.log(stu1);
stu1.sayHello();
stu1.getEmail();
stu1.calculateAge();
