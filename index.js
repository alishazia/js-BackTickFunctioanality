const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById
('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

let currentResult = 0;

currentResult = currentResult + (10 * 2) + 12/2;

// passing a string here in the function
// let currentDescription = '(10 * 2) + 12/2';

// here we are using bactick and display a value as a string 
let calculateValue = `(10 * 2) + 12/2`;

// here we using backtick and rendering the dynamic value there using $ sign
let currentDescription = `(${currentResult} * 2) + 12/2`;

outputResult(currentResult , currentDescription)
