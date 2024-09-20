import { getRandomColor } from "../../utils/randomColor.js";


// Funktion zum Erstellen des Kreises und Hinzufügen des Event Listeners
function Pentagon() {
    const pentagon = document.createElement("div");
    pentagon.classList.add("pentagon");
  
    // Event Listener, um die Hintergrundfarbe des Pentagons zufällig zu ändern
    pentagon.addEventListener("click", () => {
        pentagon.style.backgroundColor = getRandomColor();
    });
  
    // Gib das Kreis-Element zurück
    return pentagon;
  }

  export { Pentagon };