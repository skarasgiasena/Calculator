const ResultDisplay = document.getElementById("ResultDisplay");
const Seven = document.getElementById("Seven");
const Eight = document.getElementById("Eight");
const Nine = document.getElementById("Nine");
const Four = document.getElementById("Four");
const Five = document.getElementById("Five");
const Six = document.getElementById("Six");
const One = document.getElementById("One");
const Two = document.getElementById("Two");
const Three = document.getElementById("Three");
const Clear = document.getElementById("Clear");
const Zero = document.getElementById("Zero");
const Enter = document.getElementById("Enter");
const Mult = document.getElementById("Mult");
const Min = document.getElementById("Min");
const Plus = document.getElementById("Plus");
const Div = document.getElementById("Div");

let total=0;

let currentInput = '';
let operator = '';
let previousInput = '';

Seven.onclick = function() { appendNumber('7'); }
Eight.onclick = function() { appendNumber('8'); }
Nine.onclick = function() { appendNumber('9'); }
Four.onclick = function() { appendNumber('4'); }
Five.onclick = function() { appendNumber('5'); }
Six.onclick = function() { appendNumber('6'); }
One.onclick = function() { appendNumber('1'); }
Two.onclick = function() { appendNumber('2'); }
Three.onclick = function() { appendNumber('3'); }
Zero.onclick = function() { appendNumber('0'); }

Plus.onclick = function() { setOperator('+'); }
Min.onclick = function() { setOperator('-'); }
Mult.onclick = function() { setOperator('*'); }
Div.onclick = function() { setOperator('/'); }

Clear.onclick = function(){
    currentInput ="";
    previousInput = "";
    operator = "";
    ResultDisplay.textContent =`0`;
}

Enter.onclick = function() {
    if (previousInput && operator && currentInput) {
        calculate();
    }
}

function appendNumber(num) {
    if (currentInput === '0' || ResultDisplay.textContent === '0') {
        currentInput = num;
    } else {
        currentInput += num;
    }
    ResultDisplay.textContent = currentInput;
}

function setOperator(op) {
    if (currentInput === '') return;
    
    if (previousInput && operator && currentInput) {
        calculate();
    }
    
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    if (isNaN(prev) || isNaN(current)) return;
    
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current !== 0 ? prev / current : 'Error';
            break;
        default:
            return;
    }

    ResultDisplay.textContent = result;
    currentInput = result.toString();
    previousInput = '';
    operator = '';
}









