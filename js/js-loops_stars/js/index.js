console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Star-Container leeren, bevor neue Sterne hinzugefügt werden
  starContainer.innerHTML = "";

  // Schleife, um 5 Sterne zu rendern
  for (let i = 1; i <= 5; i++) {
    // Erstelle ein <img> Element
    const star = document.createElement("img");

    // Überprüfen, ob der Stern ausgefüllt sein soll oder nicht
    if (i <= filledStars) {
      // Setze das Bild für einen ausgefüllten Stern
      star.src = "assets/star-filled.svg";
    } else {
      // Setze das Bild für einen leeren Stern
      star.src = "assets/star-empty.svg";
    }

        // Füge ein Klick-Event zu jedem Stern hinzu
        star.addEventListener("click", () => {
          // Rufe renderStars erneut auf und übergebe die neue Anzahl ausgefüllter Sterne
          renderStars(i);
        });

    // Füge das Bild in den starContainer ein
    starContainer.append(star);
  }
}

// default anzeige
renderStars(0);
