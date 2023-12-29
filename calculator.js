let calculation = '';
calculation = localStorage.getItem('calculation') || '';
displaycalculation();
function calOperation(value) {
    calculation += value;
    displaycalculation();
    localStorage.setItem('calculation', calculation);
}
function saveCalculation() {
    localStorage.setItem('calculation', calculation);
}
function displaycalculation() {
    document.querySelector('.js-calculation')
        .innerHTML = calculation;
}    