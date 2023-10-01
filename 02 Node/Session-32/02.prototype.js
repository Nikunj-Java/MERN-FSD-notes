//functional constructor
var Student= function(name,email,country,yob){
    this.name=name;
    this.email=email;
    this.country=country;
    this.yob=yob;
}

//prototype
Student.prototype.sayHello= function(){
    console.log(`Hello Everyone....! My name is ${this.name}`);
}

//prototype
Student.prototype.calculateAge= function(){
    console.log(`${this.name}'s Age is ${2023-this.yob}`);
}

//prototype
Student.prototype.display= function(){
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Country: ${this.country}`);
    console.log(`Yob: ${this.yob}`);
}

Student.prototype.getEmail=function(){
    console.log(`My Email  is: ${this.email}`);
}

//Creating objects

let student1= new Student("Gaurav Gaikwad","gg@gmail.com","India",2000);
console.log(student1);
student1.sayHello();
student1.calculateAge();

student1.getEmail();
student1.display();