
let currentInput='';
let currentOperator='';
let previousInput='';

//methods in javascript is called function
function appendnumber(number){
    currentInput+=number;
    updateDisplay();
}

//methods to appendOperators

//
function appendOperator(operator){
    if(currentInput === '') return;
    if(previousInput !==''){
        calculate();
    }
    currentOperator=operator;
    previousInput=currentInput;
    currentInput= '';
    
}

function calculate(){
     
    if(previousInput === '' || currentInput ==='')  return;
    const num1= parseFloat(previousInput);
    const num2= parseFloat(currentInput);

    let result=0;

    switch(currentOperator){

        case '+':
            result =num1+num2;
            break;
        case '-':
            result =num1-num2;
            break;
        case '*':
                result =num1*num2;
                break;
        case '/':
                result =num1/num2;
                break;
    }

    currentInput=result.toString();
    previousInput= '';
    currentOperator='';
    updateDisplay();

}

//method to clear the result
function clearResult(){
    currentInput='';
    currentOperator='';
    previousInput='';
    updateDisplay();
}

 
//Method to  update Display
function updateDisplay(){
    document.getElementById('result').value =currentInput;
}
