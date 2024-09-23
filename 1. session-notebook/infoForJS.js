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
