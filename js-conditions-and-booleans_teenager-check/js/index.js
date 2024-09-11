const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);
  if (age <= 10) {
      console.log("You are a kid!");
  } else if (age >= 18) {
    console.log("You are just old!");
  } else {
    console.log("You are a Teenager!");
  }

  //console.log(age <= 10 ? "You are a kid!" : age >= 18 ? "You are just old!" : "You are a Teenager!");

});
