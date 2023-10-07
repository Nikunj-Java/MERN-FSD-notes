function myTimeOut(cb){
    console.log("Executing MyTimer Higher Order Function");
    setTimeout(cb,3000);
}

function callBackFunction(){
    console.log("Executing CallBack")
}

myTimeOut(callBackFunction);