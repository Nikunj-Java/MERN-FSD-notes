function Counter(){

    //private variable
    let count=0;

    //private function
    function increment(){
        count++;
    }

    //public method
    this.getCount = function(){
        return count; //inner count
    }

    this.incrementCount =function(){
        increment(); //calling inner function
    }
    
}


const counterObj= new Counter();
 
console.log(counterObj.getCount());
counterObj.incrementCount();
console.log(counterObj.getCount());