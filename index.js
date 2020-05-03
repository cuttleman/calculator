const result = document.getElementById("jsResult");
const clear = document.getElementById("jsClear");
const operators = document.querySelectorAll(".operator");
const nums = document.querySelectorAll(".num");
const equal = document.getElementById("jsEqual");

let firstVal, secondVal, operator;
let fullValCheck = false, operatorCheck = false, inputVal = true;

const handleNumClick = (e) => {
    const { target: { innerText } } = e;
    if (inputVal) {
        result.innerText = "";
    }
    if (!operatorCheck) {
        result.innerText = result.innerText + innerText;
        firstVal = parseInt(result.innerText, 10);
    } else if (operatorCheck) {
        result.innerText = result.innerText + innerText;
        secondVal = parseInt(result.innerText, 10);
        fullValCheck = true;
    }
    inputVal = false;
}

const calculate = () => {
    switch (operator) {
        case "+":
            result.innerText = firstVal + secondVal
            break;
        case "-":
            result.innerText = firstVal - secondVal
            break;
        case "×":
            result.innerText = firstVal * secondVal
            break;
        case "÷":
            result.innerText = firstVal / secondVal
            break;
    }
    firstVal = parseInt(result.innerText, 10);
    secondVal = null;
    fullValCheck = false;
    operatorCheck = false;
    inputVal = true;
}

const handleOperatorClick = (e) => {
    const { target: { innerText } } = e;
    if (fullValCheck) calculate();
    operator = innerText;
    operatorCheck = true;
    inputVal = true;
}

const handleClear = () => {
    firstVal = null;
    secondVal = null;
    operator = null;
    fullValCheck = false;
    operatorCheck = false;
    inputVal = true;
    result.innerText = 0
}

const handleEqualClick = () => {
    if (fullValCheck) calculate();
}

nums.forEach(num => num.addEventListener("click", handleNumClick));
operators.forEach(operator => operator.addEventListener("click", handleOperatorClick));
clear.addEventListener("click", handleClear);
equal.addEventListener("click", handleEqualClick);