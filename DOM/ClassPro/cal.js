let resultEl = document.getElementById("result");
let number1El = document.getElementById("number1");
let number2El = document.getElementById("number2");
let operatorEl = document.getElementById("operator");

function onShowResult(){
    let firstNum = parseInt(number1El.value);

    let secondNum = parseInt(number2El.value);

    let operatorVal = operatorEl.value;

    let result = 0;
    switch(operatorVal){
        case"+":
        result = firstNum + secondNum;
        resultEl.textContent = `Your result is ${result}`;
        break;
        case"-":
        result = firstNum - secondNum;
        resultEl.textContent = `Your result is ${result}`;
        break;
        case"*":
        result = firstNum * secondNum;
        resultEl.textContent = `Your result is ${result}`;
        break;
        case"/":
        result = firstNum / secondNum;
        resultEl.textContent = `Your result is ${result}`;
        break;
        default :
        result =0;
    }
}
    function onReset(){
    number1El.value = "";

    number2El.value = "";

    operatorEl.value = "";}

 