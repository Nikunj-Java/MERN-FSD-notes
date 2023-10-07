function multiple(a){
    
    return function (b){

            return function (c){

                    return a*b*c;
            }
    }
}

//multiple  is also one function which return by multiple function

const multiplication=multiple(2);
const result=multiplication(4);


console.log("Result: "+result(2));

console.log("Another Way Result: "+multiple(4)(6)(2));


//arrow function
const mul=(a)=>(b)=>(c)=>a*b*c;

console.log("Arrow Function Result:"+mul(5)(10)(2));