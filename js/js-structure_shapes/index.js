//import { getRandomColor } from "./utils/randomColor.js";

console.clear();

//Teil 1: 
// const root = document.getElementById("root");

// const circle = document.createElement("div");
// circle.classList.add("circle");
// circle.addEventListener("click", () => {
//   circle.style.backgroundColor = getRandomColor();
// });

// const square = document.createElement("div");
// square.classList.add("square");
// square.addEventListener("click", () => {
//   square.style.backgroundColor = getRandomColor();
// });

// const pentagon = document.createElement("div");
// pentagon.classList.add("pentagon");
// pentagon.addEventListener("click", () => {
//   pentagon.style.backgroundColor = getRandomColor();
// });

// root.append(circle, square, pentagon);


//wichtig: type="module" in HTML ergänzt
// getRandomColor() eingefügt: () sind wichtig 


// Teil 2: 


// // Funktion zum Erstellen des Kreises und Hinzufügen des Event Listeners
// function Circle() {
//   const circle = document.createElement("div");
//   circle.classList.add("circle");

//   // Event Listener, um die Hintergrundfarbe des Kreises zufällig zu ändern
//   circle.addEventListener("click", () => {
//     circle.style.backgroundColor = getRandomColor();
//   });

//   // Gib das Kreis-Element zurück
//   return circle;
// }

//Teil 3: import export von Circle
import { Circle } from "./components/Circle/Circle.js";
import { Pentagon } from "./components/Pentagon/Pentagon.js";
import { Square } from "./components/Square/Square.js";

// Damit's jetzt auch sichtbar wird:
const root = document.getElementById("root");

// Erstelle das Kreiselement und show it
const circleElement = Circle();
const pentagonElement = Pentagon();
const squareElement = Square();
root.append(circleElement, pentagonElement, squareElement);
