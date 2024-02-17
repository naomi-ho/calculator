let num1 = 0;
let num2 = 0;
let operator;
let result = 0;

const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");

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
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
    }
}

// clicking on a button adds the number value to the display
function populate() {
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        number.addEventListener("click", () => {
            display.textContent.length++;
            console.log(display.textContent, display.textContent.length);
            if (display.textContent.length > 11 && display.textContent.length < 18) {
                display.style.fontSize = "200%";
                display.style.paddingTop = "40px";
            } else if (display.textContent.length >= 18) {
                number.disabled = true;
            }
            return (display.textContent += number.textContent, display.textContent.length);
        });
    }
}

populate();git 