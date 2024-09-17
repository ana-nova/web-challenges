console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get values from the input fields
  const numA = parseFloat(document.querySelector('[name="numberA"]').value);
  const numB = parseFloat(document.querySelector('[name="numberB"]').value);
  
  // :checked is important to only get the selected operation
  const operator = document.querySelector('[name="operator"]:checked').value;

  let result;

  // Perform the appropriate calculation based on the selected operator
  if (operator === "addition") {
    result = add(numA, numB);
  } else if (operator === "subtraction") {
    result = subtract(numA, numB);
  } else if (operator === "multiplication") {
    result = multiply(numA, numB);
  } else if (operator === "division") {
    result = divide(numA, numB);
  } 

  resultOutput.textContent = result;
});
