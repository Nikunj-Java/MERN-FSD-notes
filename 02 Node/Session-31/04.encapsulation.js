class Counter{

    //# used to create private varibale / function declaration 
    //private variable
    #count=0;
    //private function
    #increament(){
        this.#count++;
    }

    getCount(){
        return this.#count;
    }

    incrementCount(){
        this.#increament();
    }
}

const counterObj=new Counter();
counterObj.count;

console.log(counterObj.getCount());
counterObj.incrementCount();
console.log(counterObj.getCount());