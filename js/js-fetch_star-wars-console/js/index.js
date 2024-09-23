console.clear();

// const url = "https://swapi.py4e.com/api/people";

// async function fetchData() {
//   // Abrufen der Daten von der API
//   const response = await fetch(url);
  
//   // Umwandeln der Antwort in ein JSON-Objekt
//   const data = await response.json();
  
//   // Rückgabe der Daten - 1. Teil
//   //return data;

//     // 2. Teil - different values + brauchen map um ein neues Array zu erstellen, um die Daten besser extrahieren zu können
//     const names = data.results.map(character => character.name);
//     return names;
// }

// // Aufrufen der Funktion und Ausgeben der Daten in der Konsole + then für die Erfüllung eines "Promises" (warten auf Daten um mit denen zu arbeiten)
// fetchData().then(function(names) {
//     console.log(names);
//   });
  

  /* Wenn ich mehrere Daten gleichzeitig angezeigt haben will: */

  const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();

  // Erstelle ein neues Array, das sowohl den Namen als auch die Höhe jedes Charakters enthält
  const characters = data.results.map(character => {
    return {
      name: character.name,
      height: character.height,
      eye_color: character.eye_color
    };
  });

  return characters;
}

// Aufrufen und Namen und Höhe in der Konsole ausgeben
fetchData().then(characters => {
  characters.forEach(character => {
    console.log(`Name: ${character.name}, Height: ${character.height}, Eye Color: ${character.eye_color}`);
  });
});
