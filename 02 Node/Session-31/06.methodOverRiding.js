class Parent{
    phone(){
        console.log("Calling from parent phone");
    }
}

class Child extends Parent {
    
    phone(){
        console.log("Calling from Own Phone");
    }
}

let childObje=new Child();

childObje.phone();