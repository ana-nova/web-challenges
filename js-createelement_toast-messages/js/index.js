console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Erstelle ein neues <li>-Element für die Toast-Nachricht
  const newToast = document.createElement("li");
  newToast.classList.add("toast-container__message"); // Füge die Klasse hinzu
  newToast.textContent = "This is a new toast message"; // Inhalt der Toast-Nachricht

  // Füge die neue Toast-Nachricht zum Container hinzu
  toastContainer.append(newToast);
});

clearButton.addEventListener("click", () => {
  // Leere den Container für die Toast-Nachrichten
  toastContainer.innerHTML = "";
  //oder: toastContainer.remove("li");
});
