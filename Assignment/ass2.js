

function changeBackgroundColor() {
    let myBody = document.body;
    let btn = document.querySelector(".btn");

    if(myBody.style.backgroundColor == "black") {
        myBody.style.backgroundColor = "rgb(249, 244, 239)";
    }else{
        myBody.style.backgroundColor = "black";
        btn.style.color = "white";
    }
}

  let updatedCurrentValue = 0;
function calculator() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let operator = document.getElementById("selectOperator").value;
    let result = document.querySelector('.result');
    let currentValue = document.querySelector('.currentValue');
    

    if(operator === "+") {
        let sum = num1 + num2;
         result.innerHTML = `${sum}`;
    }else if(operator == "-"){
         sum = num1 - num2;
         result.innerHTML = `${sum}`
    }else if(operator == "/"){
         sum = num1 / num2;
         result.innerHTML = `${sum}`
    }else if(operator == "x"){
         sum = num1 * num2;
         result.innerHTML = `${sum}`
    }
    else{
        alert('Invalid operation')
    }

     updatedCurrentValue += sum;
     currentValue.innerHTML = ` Current value: ${updatedCurrentValue}`;   

    document.getElementById("num1").value= '';
    document.getElementById("num2").value = '';
}