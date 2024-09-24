/* ========================
       JS ARRAY METHODS
   ======================== */

   // Higher-Order Functions sind Funktionen, die eine andere Funktion als Argument nehmen oder eine Funktion zurückgeben können. 
   // Alle in diesem Beispiel verwendeten Methoden (forEach, map, filter, find) sind Higher-Order Functions, da sie eine Callback-Funktion als Argument verwenden.


   const movies = [
    { title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8 },
    { title: "Interstellar", year: 2014, genre: "Sci-Fi", rating: 8.6 },
    { title: "The Dark Knight", year: 2008, genre: "Action", rating: 9.0 },
    { title: "Parasite", year: 2019, genre: "Thriller", rating: 8.6 },
    { title: "Titanic", year: 1997, genre: "Drama", rating: 7.8 },
  ];
  
  // 1. forEach
  // Description: Iterates over each element in the array and executes a provided function.
  // Higher-Order Function: Yes, but it doesn't return a new array.
  // Blueprint: array.forEach((element, index, array) => { /* code */ });
  movies.forEach((movie) => {
    console.log(`Title: ${movie.title}, Year: ${movie.year}`);
  });
  // Output: Logs each movie's title and year
  // Return value: undefined (forEach doesn't return a new array)
  
  // 2. map
  // Description: Creates a new array by applying a function to every element in the original array.
  // Higher-Order Function: Yes, and it returns a **new array** with transformed elements.
  // Blueprint: array.map((element, index, array) => { return newElement });
  const movieTitles = movies.map((movie) => movie.title);
  console.log(movieTitles);
  // Output: ["Inception", "Interstellar", "The Dark Knight", "Parasite", "Titanic"]
  // Return value: A new array of movie titles
  
  // 3. filter
  // Description: Creates a new array with elements that pass the test in the provided function.
  // Higher-Order Function: Yes, and it returns a **new array** with filtered elements.
  // Blueprint: array.filter((element, index, array) => condition);
  const sciFiMovies = movies.filter((movie) => movie.genre === "Sci-Fi");
  console.log(sciFiMovies);
  // Output: [{ title: "Inception", ...}, { title: "Interstellar", ... }]
  // Return value: A new array of movies that are Sci-Fi
  
  // 4. find
  // Description: Returns the first element in the array that satisfies the provided condition.
  // Higher-Order Function: Yes, but it returns **only one element**, not an array.
  // Blueprint: array.find((element, index, array) => condition);
  const topRatedMovie = movies.find((movie) => movie.rating > 8.8);
  console.log(topRatedMovie);
  // Output: { title: "The Dark Knight", year: 2008, genre: "Action", rating: 9.0 }
  // Return value: The first movie object with a rating greater than 8.8
  

  /* ========================
         ERROR HANDLING
   ======================== */

// 1. Basic try...catch Usage
// Erklärung: Verwende try...catch, um Fehler zu erkennen und abzufangen, die während der Ausführung auftreten.
function basicErrorHandling() {
  try {
    // Code, der einen Fehler verursachen könnte
    let result = 10 / 0; // Intentionaler Fehler: Division durch Null
    console.log(result);
  } catch (error) {
    // Fehler abfangen und behandeln
    console.error("Error:", error.message); // Ausgabe des Fehlers in der Konsole
  }
}

basicErrorHandling(); // Funktion aufrufen, um das Error Handling zu demonstrieren

// 2. Throwing Custom Errors
// Erklärung: Manchmal möchtest du spezielle Fehler werfen, um bestimmte Probleme abzufangen. Dazu kannst du throw verwenden, um selbst definierte Fehler auszulösen.
function divide(a, b) {
  if (b === 0) {
    // Eigener Fehler, wenn durch Null geteilt wird
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

function customErrorHandling() {
  try {
    const result = divide(4, 0); // Intentionaler Fehler
    console.log(result);
  } catch (error) {
    console.error("Division Error:", error.message); // Fange den Fehler ab
  }
}

customErrorHandling();

// 3. Displaying Error Messages in the DOM
// Erklärung: Fehler können direkt auf der Webseite angezeigt werden, indem sie in den DOM eingefügt werden.
function displayError(message) {
  const errorMessageElement = document.getElementById("error-message");
  errorMessageElement.textContent = message;
  errorMessageElement.style.color = "red"; // Optional: Fehlertext rot einfärben
}

// Beispiel für die Anzeige eines Fehlers im DOM
try {
  let data = JSON.parse("INVALID_JSON"); // Intentionaler JSON-Fehler
} catch (error) {
  displayError("Invalid JSON format: " + error.message); // Fehler im DOM anzeigen
}

// 4. Asynchronous Error Handling with async/await
// Erklärung: Async-Funktionen benötigen ebenfalls Error Handling, um Netzwerk- oder andere asynchrone Fehler zu behandeln.
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      // Fehler werfen, wenn der HTTP-Status nicht OK ist
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error.message); // Asynchrone Fehler abfangen
    return null; // Null zurückgeben, wenn ein Fehler auftritt
  }
}

async function useFetchData() {
  const data = await fetchData("https://reqres.in/api/users/1");
  if (data) {
    console.log("User Data:", data); // Erfolgreich abgerufene Daten
  } else {
    displayError("Failed to fetch user data."); // Fehler beim Abrufen anzeigen
  }
}

useFetchData();

// 5. Handling Multiple Promises with Promise.all
// Erklärung: Promise.all wird verwendet, um mehrere Promises gleichzeitig zu verarbeiten. Dabei wird ein einziger Fehler abgefangen, wenn eines der Promises fehlschlägt.
async function fetchMultipleResources() {
  const urls = [
    "https://reqres.in/api/users/1",
    "https://reqres.in/api/users/2",
    "https://reqres.in/api/users/invalid"
  ];

  try {
    const results = await Promise.all(urls.map((url) => fetch(url)));
    const data = await Promise.all(results.map((res) => res.json()));
    console.log("All data:", data); // Verarbeite alle abgerufenen Daten
  } catch (error) {
    console.error("One or more fetches failed:", error.message); // Einen oder mehrere Fehler abfangen
  }
}

fetchMultipleResources();

// HTML Setup for Error Display (include this in your HTML file)
// <p id="error-message" class="error"></p>



/* ========================
          JS SYNTAX
   ======================== */


// 1. let und const
// Vor ES6 wurde var verwendet, was zu Problemen mit dem Gültigkeitsbereich führen konnte.
// let und const bieten eine bessere Kontrolle. let für änderbare Variablen, const für konstante Werte.
let age = 30; // Wert kann später geändert werden
const name = 'John'; // Wert kann nicht geändert werden

// 2. Arrow Functions (=>)
// Arrow Functions bieten eine kürzere und klarere Syntax und übernehmen den this-Kontext
// aus der umgebenden Funktion oder dem Objekt.
const add = (a, b) => a + b; // Verkürzte Funktionsschreibweise
console.log(add(5, 3)); // Gibt 8 aus

// 3. Template Literals (Backticks ``)
// Mit Template Literals können Strings mit Variablen und mehrzeiligen Texten einfach erstellt werden,
// ohne String-Konkatenation zu verwenden.
const greeting = `Hello, ${name}!`;
console.log(greeting); // "Hello, John!"

// 4. Destructuring Assignment
// Destructuring erlaubt es, Werte aus Arrays oder Objekten zu extrahieren und sie direkt Variablen zuzuweisen.
// Es ist eine sehr prägnante Art, Daten zuzugreifen.
const [x, y] = [10, 20]; // Array Destructuring
console.log(x, y); // 10 20

const user = { name: 'Bob', age: 25 }; // Objekt Destructuring
const { name: userName, age: userAge } = user;
console.log(userName, userAge); // "Bob" 25

// 5. Default Parameters
// Mit Default-Parametern kannst du Standardwerte für Funktionsparameter festlegen,
// falls keine Argumente übergeben werden.
function greet(person = 'Guest') {
  return `Hello, ${person}!`;
}

console.log(greet()); // "Hello, Guest!"
console.log(greet('Alice')); // "Hello, Alice!"

// 6. Rest und Spread Operator
// Rest Operator sammelt alle übergebenen Argumente in einem Array,
// während der Spread Operator Array- oder Objektwerte "entpackt".
function sum(...numbers) { // Rest Operator für unbestimmte Anzahl an Argumenten
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Spread Operator, entpackt arr1 in arr2
console.log(arr2); // [1, 2, 3, 4, 5]

// 7. Object Literal Enhancements
// Wenn der Schlüsselname einer Eigenschaft mit dem Variablennamen übereinstimmt,
// kannst du die Zuweisung kürzer schreiben.
const city = 'Berlin';
const country = 'Germany';
const location = { city, country }; // Kurzschreibweise
console.log(location); // { city: 'Berlin', country: 'Germany' }

// 8. Promises und async/await
// Promises bieten eine Möglichkeit, asynchrone Operationen zu handhaben, ohne in tiefe Callback-Nesting-Fallen zu geraten.
// async/await bietet eine noch sauberere Syntax für den Umgang mit asynchronem Code.
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Data received'), 1000);
  });
};

// Mit Promises
fetchData().then(data => console.log(data)); // "Data received" nach 1 Sekunde

// Mit async/await
async function getData() {
  const result = await fetchData();
  console.log(result); // "Data received"
}
getData();

// 9. Modules (Import/Export)
// Mit der modernen Syntax können Module in Dateien aufgeteilt und exportiert/importiert werden.
// Beispiel (in einer Datei):
 export const name = 'Charlie';

// Import in einer anderen Datei (ausgeführt in einem Modul-fähigen Umgebung):
 import { name } from './file.js';

// 10. Klassen (Classes)
// Klassen bieten eine einfachere Syntax für die Arbeit mit Konstruktoren und Vererbung.
// Unter der Haube basiert alles immer noch auf Prototypen.
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

const person = new Person('John');
console.log(person.greet()); // "Hello, my name is John"
