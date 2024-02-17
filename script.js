let num1 = 0;
let num2 = 0;
let operator;
let result = 0;

const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const operators = document.querySelectorAll(".operator");

// clicking on a button adds the number value to the display
function populate() {
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        number.addEventListener("click", () => {
            display.textContent.length++;
            if (display.textContent.length > 11 && display.textContent.length < 18) {
                display.style.fontSize = "200%";
                display.style.paddingTop = "40px";
            } else if (display.textContent.length >= 18) {
                number.disabled = true;
            }
            display.textContent += number.textContent;
            let displayInput = display.textContent;
            let displayLength = display.textContent.length;
            console.log(displayInput, displayLength);
            return (displayInput, displayLength);
        });
    }
}

function stageOneStore() {
    for (let i = 0; i < operators.length; i++) {
        let operation = operators[i];
        let selectedOperator = false;

        // store first number and operator when user clicks an operator button
        operation.addEventListener("click", () => {
            selectedOperator = true;
            num1 = display.textContent;
            operator = operation.textContent;
            console.log(num1, operator);
            return (num1, operator);
        });

        // clear operator value if this isn't the first time clicking an operator button
        if (selectedOperator === true) {
            operation.addEventListener("click", () => {
                operation = "";
            });
        }
    }
}

function add(num1, num2) {
    result = num1 + num2;
    console.log(`${result}`);
    return result;
}

function subtract(num1, num2) {
    result = num1 - num2;
    console.log(result);
    return result;
}

function multiply(num1, num2) {
    result = num1 * num2;
    console.log(result);
    return result;
}

function divide(num1, num2) {
    result = num1 / num2;
    console.log(result);
    return result;
}

function operate(num1, num2, operator) {
    switch(operator) {
        case "+":
            add(num1, num2);
            break;
        case "−":
            subtract(num1, num2);
            break;
        case "×":
            multiply(num1, num2);
            break;
        case "÷":
            divide(num1, num2);
            break;
    }
}

function calculate() {
    populate();
    stageOneStore();
    // operate(num1, num2, operator);
}

calculate();