console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

/* Hide the error message initially, ONLY if it's not mentioned in HTML
hideTosError();

function hideTosError() {
   tosError.setAttribute("hidden", "");
 } */

   //removes "hidden" and shows my error message
function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Check if the TOS checkbox is checked
  if (!tosCheckbox.checked) {
    showTosError(); // Show error message
    return; // Early return to stop form submission
  }

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
