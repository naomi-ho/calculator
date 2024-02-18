let num1 = 0;
let num2 = 0;
let operator;
let equation = [];
let result = 0;
let num1Stored = false;

const numbers = document.querySelectorAll(".number");
let display = document.querySelector(".display").textContent;
let displayLength = document.querySelector(".display").textContent.length;
const operators = document.querySelectorAll(".operator");
const ac = document.querySelector("#ac");

// clear calculator by reloading page
function clear() {
    ac.addEventListener("click", () => {
    location.reload();
    });
}

// clicking on a button adds the number value to the display
function populate() {
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        number.addEventListener("click", () => {
            displayLength++;
            if (displayLength > 11 && displayLength < 18) {
                display.style.fontSize = "200%";
                display.style.paddingTop = "40px";
            } else if (displayLength >= 18) {
                number.disabled = true;
            }
            display += number.textContent;
            console.log(display, displayLength);
            return (display, displayLength);

        });
    }
}

function store() {
    for (let i = 0; i < operators.length; i++) {
        let operation = operators[i];
        let selectedOperator = false;


        // store first number and operator when user clicks an operator button
        operation.addEventListener("click", () => {
            selectedOperator = true;
            num1Stored = true;
            num1 = display;
            operator = operation.textContent;
            console.log(num1, operator);
            return (num1, operator);
        });

        // clear operator value if this isn't the first time clicking an operator button
        if (selectedOperator === true) {
            operation.addEventListener("click", () => {
                operation = "";
                display.textContent = "";
            });
        }
    }
}

// function execute() {
//     // clear display when clicking first digit of second number
//     for (let i = 0; i < numbers.length; i++) {
//         let number = numbers[i];
//         number.addEventListener("click", () => {
//             di
//         });
//     // run populate() again
//     // run operate() when user clicks the equal button
// }

function add(num1, num2) {
    console.log(`${result}`);
    return result = num1 + num2;
}

function subtract(num1, num2) {
    console.log(result);
    return result = num1 - num2;
}

function multiply(num1, num2) {
    console.log(result);
    return result = num1 * num2;
}

function divide(num1, num2) {
    console.log(result);
    return result = num1 / num2;
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
    store();
    clear();
    // execute();
    // operate(num1, num2, operator);
}

calculate();