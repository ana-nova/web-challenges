console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

for (const language of programmingLanguages) {
  // Erstelle ein neues <li> Element
  const li = document.createElement("li");
  
  // Setze den Text des <li> Elements auf den Namen der Programmiersprache
  li.textContent = language;
  
  // Füge das <li> Element in die <ol> ein
  ol.append(li);
}


/* Erklärung
   for...of-Loop ist perfekt geeignet, um über die Werte einer Array-Struktur zu iterieren.

   for (const element of iterable) {
  // Code, der für jedes Element in "iterable" ausgeführt wird
}

const fruits = ["apple", "banana", "orange"];

for (const fruit of fruits) {
  console.log(fruit);  // Gibt "apple", "banana", "orange" in der Konsole aus
}

*/