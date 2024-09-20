import { getRandomColor } from "../../utils/randomColor.js";


// Funktion zum Erstellen des Kreises und Hinzufügen des Event Listeners
function Square() {
    const square = document.createElement("div");
    square.classList.add("square");
  
    // Event Listener, um die Hintergrundfarbe des Pentagons zufällig zu ändern
    square.addEventListener("click", () => {
        square.style.backgroundColor = getRandomColor();
    });
  
    // Gib das Kreis-Element zurück
    return square;
  }

  export { Square };