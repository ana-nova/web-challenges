const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

const container = document.querySelector('[data-js="color-container"]'); // Container zum Einfügen der Boxen

// Verwende forEach, um durch das Farben-Array zu iterieren und die Boxen zu erstellen
colors.forEach((color) => {
  // Erstelle ein div-Element
  const colorBox = document.createElement("div");

  // Füge eine Klasse hinzu, um die Box zu stylen
  colorBox.classList.add("color-box");

  // Setze die Hintergrundfarbe der Box auf den aktuellen Farbcode
  colorBox.style.backgroundColor = color;

  // Füge die Box in den Container ein
  container.appendChild(colorBox);
});


// Task 2
// Definiere eine Funktion, um eine farbige Box zu rendern + unter Verwendung von anonymer Funktion
function renderColorBox(color) {
  const colorBox = document.createElement("div");
  colorBox.classList.add("color-box");
  colorBox.style.backgroundColor = color;
  container.appendChild(colorBox);
}

// Verwende forEach mit der renderColorBox-Funktion
colors.forEach(renderColorBox);