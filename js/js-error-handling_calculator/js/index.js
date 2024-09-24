console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");
const errorOutput = document.querySelector(".error");

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    try {
      if (b === 0) {
        throw new Error("Cannot divide by zero!");
      }
      errorOutput.innerHTML = "";
      return a / b;
      
    } catch (error) {
      console.error("division error:", error.message);
   //   output.innerText = error.message;
      errorOutput.innerText = "Du kannst nicht durch 0 teilen";
      throw error;
    }
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;
  output.innerText = operations[operation](firstNumber, secondNumber);
});
