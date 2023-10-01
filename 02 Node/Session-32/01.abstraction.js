//abstraction is a way of hiding implementation details and showing only functionality

function Vehicle(){
    this.vehicleName="vehicleName";
    throw new Error("You can't create instance of Abstract class");
};

Vehicle.prototype.info= function(){
    return this.vehicleName;
}

//uncomment this line tocheck error
//var veh= new Vehicle();

//create constructor function
function Car(vehicleName){

    this.vehicleName=vehicleName;
}

Car.prototype=Object.create(Vehicle.prototype);

var myCar= new Car("BMW");
var myCar1= new Car("AUDI");
console.log(myCar1 instanceof Car);
console.log(myCar1 instanceof Vehicle); 