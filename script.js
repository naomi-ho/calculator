let num1 = 0;
let num2 = 0;
let operator;
let result = 0;

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

// test each operator
// operate(1, 2, "+");
// operate(1, 2, "-");
// operate(1, 2, "*");
// operate(1, 2, "/");