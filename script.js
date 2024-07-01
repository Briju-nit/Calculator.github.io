let calculation = '';
let exponent = '';
let isExponent = false;

calculation = localStorage.getItem('calculation') || '';
displaycalculation();

let specialFunctionActive = false;

function calOperation(value) {
    if (value === '**') {
        isExponent = true;
    } else if (isExponent) {
        exponent += value;
        displaycalculation();
    } else {
        calculation += value;
    }
    displaycalculation();
    localStorage.setItem('calculation', calculation);
}

function clearScreen() {
    calculation = '';
    exponent = '';
    isExponent = false;
    displaycalculation();
    localStorage.setItem('calculation', calculation);
}

function deleteLastChar() {
    if (isExponent) {
        exponent = exponent.slice(0, -1);
        if (exponent === '') {
            isExponent = false;
        }
    } else {
        calculation = calculation.slice(0, -1);
    }
    displaycalculation();
    localStorage.setItem('calculation', calculation);
}

function calculateResult() {
    try {
        if (isExponent) {
            calculation += `**${exponent}`;
            isExponent = false;
            exponent = '';
        }
        calculation = eval(calculation);
    } catch (error) {
        alert("Invalid expression");
    }
    displaycalculation();
    localStorage.setItem('calculation', calculation);
}

function displaycalculation() {
    let displayValue = calculation;
    if (isExponent) {
        displayValue += `<sup class="js-exponent">${exponent}</sup>`;
    }
    document.querySelector('.js-calculation').innerHTML = displayValue;
}

function handleSpecialFunction(func) {
    calculation += func;
    specialFunctionActive = true;
    displaycalculation();
}

function openParenthesis() {
    calculation += '(';
    displaycalculation();
}

function closeParenthesis() {
    calculation += ')';
    specialFunctionActive = false;
    displaycalculation();
}

