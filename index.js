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


// about functions
function displayMessage(a, b) {
  return a + b;
}
displayMessage(10, 20);

// function defined as expression and stored in a variable
var x = function displayMessage(a, b) { return a + b };
// variable used as function
var y = x(4, 3);

//  anonymus functions
var x = function (a, b) { return a * b };
var z = x(2, 3);   //invoking the anonymous function using variabble name


//  self invoking anonymous functions
(function () {
  let a = 10, b = 10;
  return a + b;
})();


//  self invoking anonymous functions
(function myFunction() {
  let a = 10, b = 10;
  return a + b;
})();

// arrow functions
// ES5 syntax
var x = function (a, b) {
  return a * b;
}

// ES6  syntax
// using const here because function expression is always const,also omit function, return keyword, and curly braces there
const x = (a, b) => a * b;