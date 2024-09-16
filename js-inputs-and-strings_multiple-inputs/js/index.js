/* Sub-Challenge 1
Implement the following functionality: The value of the first input field is copied into the second input field on button click */

const firstCopyInput = document.querySelector("[data-js=first-copy-input]");
const secondCopyInput = document.querySelector("[data-js=second-copy-input]");
const copyButton = document.querySelector("[data-js=copy-button]");

copyButton.addEventListener("click", () => {
  secondCopyInput.value = firstCopyInput.value;
});

/* Sub-Challenge 2
Implement the following functionality: The value of the first input field is copied in uppercase into the second input field on button click */

const firstCopyInUppercaseInput = document.querySelector(
  "[data-js=first-copy-uppercase-input]"
);
const secondCopyInUppercaseInput = document.querySelector(
  "[data-js=second-copy-uppercase-input]"
);
const copyInUppercaseButton = document.querySelector(
  "[data-js=copy-uppercase-button]"
);

copyInUppercaseButton.addEventListener("click", () => {
  secondCopyInUppercaseInput.value = firstCopyInUppercaseInput.value.toUpperCase();
});

/* Sub-Challenge 3
Implement the following functionality: The values of the two input fields switch on button click */

const firstSwitchValueInput = document.querySelector(
  "[data-js=first-switch-value-input]"
);
const secondSwitchValueInput = document.querySelector(
  "[data-js=second-switch-value-input]"
);
const switchValueButton = document.querySelector(
  "[data-js=switch-value-button]"
);

switchValueButton.addEventListener("click", () => {
  // Check if both input fields have values
  if (firstSwitchValueInput.value && secondSwitchValueInput.value) {
    const tempValue = firstSwitchValueInput.value; // Temporäre Variable speichert den ursprünglichen Wert
    firstSwitchValueInput.value = secondSwitchValueInput.value; // Erster Wert wird durch zweiten überschrieben
    secondSwitchValueInput.value = tempValue; // Zweiter Wert erhält den ursprünglichen ersten Wert
    
  } else {
    console.log("Both input fields must have a value to swap.");
  }
});

