const box = document.querySelector("[data-js=box]");
const redButton = document.querySelector("[data-js=js-red-button]");
const greenButton = document.querySelector("[data-js=js-green-button]");
const blueButton = document.querySelector("[data-js=js-blue-button]");
const grayButton = document.querySelector("[data-js=js-gray-button]");

/*
We want to add some functionality to the buttons on this page. When pressing a button, the corresponding color should be applied to the box.
  1: Create a function removeAllColors which removes all color classes from the box.
  2: Create a function addColor which takes a class name as a parameter and adds the class to the box.
  3: Use the two functions in the event listeners of the buttons to color in the box when the button is clicked.
*/

redButton.addEventListener("click", () => {
    removeAllColors(); // Entferne alle Farbklassen
    addColor("red");   // Füge die rote Klasse hinzu
});

blueButton.addEventListener("click", () => {
  removeAllColors(); // Entferne alle Farbklassen
  addColor("blue");   // Füge die rote Klasse hinzu
});

greenButton.addEventListener("click", () => {
  removeAllColors(); // Entferne alle Farbklassen
  addColor("green");   // Füge die rote Klasse hinzu
});

grayButton.addEventListener("click", () => {
  removeAllColors(); // Entferne alle Farbklassen
  addColor("gray");   // Füge die rote Klasse hinzu
});

// Write your two functions below:
// Funktion, um alle Farbklassen von der Box zu entfernen
function removeAllColors() {
  box.classList.remove("red", "green", "blue", "gray"); // Entferne alle möglichen Farbklassen
}

// Funktion, um eine spezifische Farbe zur Box hinzuzufügen
function addColor(color) {
  box.classList.add(color); // Füge die Farbklasse zur Box hinzu
}
