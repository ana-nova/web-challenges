import { getRandomColor } from "../../utils/randomColor.js";


// Funktion zum Erstellen des Kreises und Hinzufügen des Event Listeners
function Circle() {
    const circle = document.createElement("div");
    circle.classList.add("circle");
  
    // Event Listener, um die Hintergrundfarbe des Kreises zufällig zu ändern
    circle.addEventListener("click", () => {
      circle.style.backgroundColor = getRandomColor();
    });
  
    // Gib das Kreis-Element zurück
    return circle;
  }

  export { Circle };

  