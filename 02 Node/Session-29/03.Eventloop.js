//04 process --last
function process(num1,num2){
    return num1+num2;
}


// 03 addition
function addition(num){
    console.log("New Values:",num+","+num+", +5");
    return process(num,num+5);
}

// 02 printresult
function printResult(num){
    var add= addition(num);
    console.log(add);
}

// 01 main function---goes in  stack first (FILO)
printResult(10);