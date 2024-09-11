console.clear();

let operand1 = 12;
const operand2 = 4;

/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

addButton.addEventListener("click", () => {
    const result = operand1 + operand2;
    console.log("Addition Result:", result);
});

subtractButton.addEventListener("click", () => {
  const result = operand1 - operand2;
  console.log("Substraction Result:", result);
});

multiplyButton.addEventListener("click", () => {
  const result = operand1 * operand2;
  console.log("Multi Result:", result);
});

divideButton.addEventListener("click", () => {
  const result = operand1 / operand2;
  console.log("Division Result:", result);
});

exponentButton.addEventListener("click", () => {
  const result = operand1 ** operand2;
  console.log("Addition Result:", result);
});

moduloButton.addEventListener("click", () => {
  const result = operand1 % operand2;
  console.log("Addition Result:", result);
});

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/
const increaseByOneButton = document.querySelector(
  '[data-js="increase-by-one"]'
);
const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);
const decreaseByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
);
const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);
const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
);
const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');

increaseByOneButton.addEventListener("click", () => {
  operand1 = operand1 + 1;
  const result = operand1 + operand2;
  console.log("Increased Result:", result);
});

increaseByFiveButton.addEventListener("click", () => {
  operand1 = operand1 + 5;
  const result = operand1 + operand2;
  console.log("Increased Result:", result);
});

decreaseByOneButton.addEventListener("click", () => {
  operand1 = operand1 - 1;
  const result = operand1 - operand2;
  console.log("Decreased Result:", result);
});

decreaseByFiveButton.addEventListener("click", () => {
  operand1 = operand1 - 5;
  const result = operand1 - operand2;
  console.log("Decreased Result:", result);
});

multiplyByTwoButton.addEventListener("click", () => {
  operand1 = operand1 * 2;
  const result = operand1 * operand2;
  console.log("Multi Result:", result);
});

divideByTwoButton.addEventListener("click", () => {
  operand1 = operand1 / 2;
  const result = operand1 / operand2;
  console.log("Divided Result:", result);
});
