console.clear();

const form = document.querySelector('[data-js="form"]');


  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Verhindert das Standard-Submit-Verhalten, wie das Neuladen der Seite
  
    const formData = new FormData(event.target); // Holt die Formulardaten
  
    const data = Object.fromEntries(formData); // Wandelt sie in ein Objekt um
  
    form.reset(); // Setzt das Formular zurück und leert alle Eingabefelder

    document.getElementById("first-name").focus(); // Setzt den Fokus auf das "First Name"-Feld
  
   // event.target.reset(); // Zweites Reset, das ebenfalls alle Eingabefelder leert (etwas redundant)
  
    console.log(data); 
  });
  

  /*
  andere Möglichkeiten auf das Element zuzugreifen:

  THROUGH NAME:
  const firstNameInput = document.querySelector('[name="firstName"]');
firstNameInput.focus(); // Setzt den Fokus auf das First Name-Feld

THROUGH CLASS:
<input type="text" name="firstName" class="input-first-name" placeholder="Your first name" />

const firstNameInput = document.querySelector('.input-first-name');
firstNameInput.focus(); // Setzt den Fokus auf das First Name-Feld

  */

/*  ANDERE EVENTLISTENER ZUSAMMENGEFASST */

// Event: 'click' - triggered when the button is clicked
const clickButton = document.getElementById('clickButton');
clickButton.addEventListener('click', () => {
  console.log('Button clicked!');
});

// Event: 'mouseover' - triggered when the mouse enters the element
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseover', () => {
  console.log('Mouse is over the box!');
});

// Event: 'mouseout' - triggered when the mouse leaves the element
hoverBox.addEventListener('mouseout', () => {
  console.log('Mouse left the box!');
});

// Event: 'input' - triggered when text is typed into the input field
const inputField = document.getElementById('inputField');
inputField.addEventListener('input', (event) => {
  console.log(`Current input: ${event.target.value}`);
});

// Event: 'change' - triggered when the selected option in the select menu changes
const selectMenu = document.getElementById('selectMenu');
selectMenu.addEventListener('change', (event) => {
  console.log(`Selected option: ${event.target.value}`);
});

// Event: 'submit' - triggered when the form is submitted
const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevents the form from submitting and reloading the page
  console.log('Form submitted!');
});

// Event: 'keydown' - triggered when any key is pressed
document.addEventListener('keydown', (event) => {
  console.log(`Key pressed: ${event.key}`);
});

// Event: 'keyup' - triggered when any key is released
document.addEventListener('keyup', (event) => {
  console.log(`Key released: ${event.key}`);
});

// Event: 'focus' - triggered when the input field gets focus
inputField.addEventListener('focus', () => {
  console.log('Input field is focused');
});

// Event: 'blur' - triggered when the input field loses focus
inputField.addEventListener('blur', () => {
  console.log('Input field lost focus');
});

// Event: 'resize' - triggered when the window is resized
window.addEventListener('resize', () => {
  console.log('Window resized');
});

// Event: 'scroll' - triggered when an element is scrolled
const scrollBox = document.querySelector('.scroll-box');
scrollBox.addEventListener('scroll', () => {
  console.log('Scrolling inside the scroll box');
});

// Event: 'contextmenu' - triggered when right-click (context menu) is opened
document.addEventListener('contextmenu', (event) => {
  event.preventDefault(); // Prevents the default context menu from appearing
  console.log('Custom context menu triggered');
});
