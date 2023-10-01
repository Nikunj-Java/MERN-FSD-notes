
let rateOfInterest=5.5;

function calaulateInterest(principle,rateOfInterest,noOfYears){

    return (principle*rateOfInterest*noOfYears)/100;
}

const result= calaulateInterest(1000,4.5,3);

console.log("Interest: "+ result);