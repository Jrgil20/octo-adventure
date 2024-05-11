// script.js
let operand1 = '';
let operand2 = '';
let operator = '';

const display = document.querySelector('.display__result');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operator) {
            operand2 += button.value;
        } else {
            operand1 += button.value;
        }
        display.value = operator ? operand2 : operand1;
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key >= '0' && event.key <= '9') {
        if (operator) {
            operand2 += event.key;
        } else {
            operand1 += event.key;
        }
        display.value = operator ? operand2 : operand1;
    }
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (operand1 && operator && operand2) {
            operand1 = calculate(operand1, operator, operand2);
            operand2 = '';
            display.value = operand1;
            operator = button.value;
        } else if (operand1) {
            operator = button.value;
        }
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        if (operand1 && operator && operand2) {
            operand1 = calculate(operand1, operator, operand2);
            operand2 = '';
            display.value = operand1;
            operator = event.key;
        } else if (operand1) {
            operator = event.key;
        }
    }
});

equalButton.addEventListener('click', () => {
    if (operand1 && operator && operand2) {
        operand1 = calculate(operand1, operator, operand2);
        operand2 = '';
        operator = '';
        display.value = operand1;
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if (operand1 && operator && operand2) {
            operand1 = calculate(operand1, operator, operand2);
            operand2 = '';
            operator = '';
            display.value = operand1;
        }
    }
});

function calculate(operand1, operator, operand2) {
    operand1 = parseFloat(operand1);
    operand2 = parseFloat(operand2);
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            return operand1 / operand2;
        default:
            return operand2;
    }
}