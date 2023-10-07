function hof(cb){
    console.log("Executing Higher Order Function");
    cb();
}

function callBackFunction(){
    console.log("CallBack Function");
}

hof(callBackFunction);