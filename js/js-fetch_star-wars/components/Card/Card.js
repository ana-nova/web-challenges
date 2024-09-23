// --^-- your code here --^--
export function Card(characterData) {
  const card = document.createElement("article"); // Create a new article Element
  card.classList.add("card"); // Add the class 'card'

  // Fill the article element with content.
  const heading = document.createElement("h2");
  heading.textContent = characterData.name;

  card.append(heading);

  const eyeColor = document.createElement("p");
  eyeColor.textContent = `Eye color: ${characterData.eye_color}`;

  card.append(eyeColor);

  const birthYear = document.createElement("p");
  birthYear.textContent = `Birth Year: ${characterData.birth_year}`;

  card.append(birthYear);

//   const vehicles = document.createElement("p");
//   vehicles.textContent = `Vehicles: ${characterData.vehicles}`;

//   card.append(vehicles);

//   return card;
// }


// // Helper function to fetch vehicle name
// async function fetchVehicle(vehicleUrl) {
//   const response = await fetch(vehicleUrl);
//   const vehicleData = await response.json();
//   return vehicleData.name; // Return the name of the vehicle
// }

const vehicles = document.createElement("p");
card.append(vehicles);

// Fetch vehicle names if available
Promise.all(characterData.vehicles.map(fetchVehicle))
  .then((vehicleNames) => {
    vehicles.textContent = `Vehicles: ${vehicleNames.join(", ") || "None"}`;
  });

return card;
}

// Helper function to fetch vehicle name
async function fetchVehicle(vehicleUrl) {
const response = await fetch(vehicleUrl);
const vehicleData = await response.json();
return vehicleData.name;
}


/*
`Promise.all()` ist eine Methode, die ein Array von Promises entgegennimmt 
und ein einzelnes Promise zurückgibt, das aufgelöst wird, wenn alle Promises 
im Array aufgelöst sind, oder abgelehnt wird, wenn eines der Promises abgelehnt wird.

.join(", ") für die Lesbarkeit, falls im Array mehrere Elemente sind


*/