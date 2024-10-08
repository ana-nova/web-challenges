console.clear();

const actionsElement = document.querySelector("[data-js='actions']");
const userElement = document.querySelector("[data-js='user']");
const errorElement = document.querySelector("[data-js='error']");

async function fetchUserData(url) {
  try {
    // Fetch data
    const response = await fetch(url);
    // Convert the response to JSON 
    return await response.json();
  } catch (error) {
    errorElement.textContent = error.message;
   // return { error: error.message };
    console.log(`API Error: ${error.message}`);

  }
}


const endpoints = [
  { name: "User 1", url: "https://reqres.in/api/users/1" },
  { name: "User 2", url: "https://reqres.in/api/users/2" },
  { name: "User 99", url: "https://reqres.in/api/users/99" },
  { name: "Invalid API link", url: "https://reqres.in" },
];

endpoints.forEach((endpoint) => {
  const button = document.createElement("button");
  button.textContent = endpoint.name;
  actionsElement.append(button);

  button.addEventListener("click", async () => {
    try {
      const result = await fetchUserData(endpoint.url);
      if (result.error) {
        errorElement.textContent = result.error;
        userElement.innerHTML = "No user data available.";
      } else {
        const user = result.data;
        userElement.innerHTML = `
        <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}" class="user__image"/>
        <h2>${user.first_name} ${user.last_name}</h2>
        `;
        errorElement.textContent = "";
      }
    } catch (error) {
      // errorElement.textContent = error.message;
       userElement.innerHTML = "No user data available.";
      console.log(`Button Error: ${error.message}`);
    }
  });
});


/*
    fetchUserData-try...catch: Abfangen von Fehlern, die während des API-Aufrufs auftreten
    Event-Listener-try...catch: Abfangen von Fehlern, die beim Verarbeiten der Antwort oder beim Ausführen von UI-Aktionen auftreten
*/
