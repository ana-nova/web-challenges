console.clear();

// `while` loop

let number = 0;
let count = 0;

while (number <= 0.9) {
  // Logge den aktuellen Wert von number
  console.log("Number:", number);
  
  // Erhöhe den Zähler um 1
  count++;

  // Setze number auf eine neue Zufallszahl zwischen 0 und 1
  number = Math.random();
}

console.log(
  `The number that ended the loop was ${number} and it took ${count} rounds to do this!`
);


/*
  while-Loop in JavaScript wird so lange ausgeführt, wie eine angegebene Bedingung wahr ist

  while (bedingung) {
  // Code, der ausgeführt wird, solange die Bedingung wahr ist
}

*/