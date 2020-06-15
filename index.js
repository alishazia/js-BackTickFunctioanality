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
currentResult = currentResult + (10 * 2) + 12 / 2;
let currentDescription = '(10 * 2) + 12/2';
outputResult(currentResult, currentDescription)

//  functions without return statement
function add(num1, num2) {
  const result = num1 + num2;
  alert("result is " + result);
}
add(2, 3);