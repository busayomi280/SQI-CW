
 let resultDisplay = document.querySelector('.resultDisplay');
 let operationDisplay = document.querySelector('.operationDisplay');
 let operatorBtn =  document.querySelectorAll('.operatorBtn');
 let result;
 let expression =  Number(operationDisplay.innerHTML);     
 let numbers = expression;
 let x = Number(numbers[0]);
 
function calculator(){
    let expression = operationDisplay.innerHTML;
    if(expression.includes('+')){
        numbers = expression.split('+');
        result = Number(numbers[0]) + Number(numbers[1]);
        resultDisplay.innerHTML = result;
    }else if(expression.includes('-')){
        numbers = expression.split('-');
        result = Number(numbers[0]) - Number(numbers[1]);
        resultDisplay.innerHTML = result;
    }else if(expression.includes('x')){
        let numbers = expression.split('x');
        result = Number(numbers[0]) * Number(numbers[1]);
        resultDisplay.innerHTML = result;
    }else if(expression.includes('/')){
        let numbers = expression.split('/');
        result = Number(numbers[0]) / Number(numbers[1]);
        resultDisplay.innerHTML = result;
    }else{
        resultDisplay.innerHTML = 'Invalid Operation';
    }
    
}
// calculator()
function specialOperator1(){
    let x = Number(operationDisplay.innerHTML);
        let result = x ** 2;
        operationDisplay.innerHTML = `${x}²`;
        resultDisplay.innerHTML = result;

}
function specialOperator2(){
    let x = Number(operationDisplay.innerHTML);
        if (x === 0) {
            resultDisplay.innerHTML = 'Error'; 
        } else {
             result = 1 / x;
            operationDisplay.innerHTML = `1/${x}`;
            resultDisplay.innerHTML = result;
        }
}

function specialOperator3(){
    let x = Number(operationDisplay.innerHTML);
    result = Math.sqrt(x);
    operationDisplay.innerHTML = `&radic; ${x}`
    resultDisplay.innerHTML = result;
}

function showOperator(values){
    operationDisplay.innerHTML += values;
}
function clear(){
    operationDisplay.innerHTML.slice(index, 1)
}
function clearAll(){
    operationDisplay.innerHTML = '';
    resultDisplay.innerHTML = '';
}
