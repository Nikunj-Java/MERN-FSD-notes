class Student{

    //constructor
    constructor(id,name,email,password,login){
        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password;
        this.login=login;
    }

    //methods

    display(){
         return `
            <tr> ${this.id}</tr>
            <tr> ${this.name}</tr>
            <tr> ${this.email}</tr>
            <tr> ${this.password}</tr>
            <tr> ${this.login}</tr>
         `
    }

    
}