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
  