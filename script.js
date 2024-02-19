let currentDisplay = ''; // Variable to store the current display value
let operator = ''; // Variable to store the current operator
let previousValue = ''; // Variable to store the previous value before applying an operator

const topDisplay = document.querySelector("#top-display");
const bottomDisplay = document.querySelector("#bottom-display");

// Function to update the display with the provided value
function updateDisplay(value) {
    bottomDisplay.textContent = value;
}

// Function to append a number to the current display value
function appendNumber(number) {
    currentDisplay += number;
    updateDisplay(currentDisplay);
}

// Function to append a decimal point to the current display value
function appendDecimal() {
    if (!currentDisplay.includes('.')) {
        currentDisplay += '.';
        updateDisplay(currentDisplay);
    }
}

// Function to set the operator
function setOperator(op) {
    operator = op;
    previousValue = currentDisplay;
    currentDisplay = '';
    topDisplay.textContent = previousValue + ' ' + operator;
}

// Function to perform the calculation
function calculate() {
    let result;
    const currentValue = parseFloat(currentDisplay);

    switch (operator) {
        case '+':
            result = parseFloat(previousValue) + currentValue;
            break;
        case '-':
            result = parseFloat(previousValue) - currentValue;
            break;
        case '*':
            result = parseFloat(previousValue) * currentValue;
            break;
        case '/':
            result = parseFloat(previousValue) / currentValue;
            break;
        default:
            return;
    }

    updateDisplay(result);
    currentDisplay = result;
    topDisplay.textContent = '';
}

// Function to clear the calculator
function clearCalc() {
    currentDisplay = '';
    operator = '';
    previousValue = '';
    updateDisplay('');
    topDisplay.textContent = '';
}

// Function to remove the last character from the current display value
function remove() {
    currentDisplay = currentDisplay.slice(0, -1);
    updateDisplay(currentDisplay);
}

// Function to calculate the percentage of the current display value
function percent() {
    const percentage = parseFloat(currentDisplay) / 100;
    updateDisplay(percentage);
    currentDisplay = percentage;
}