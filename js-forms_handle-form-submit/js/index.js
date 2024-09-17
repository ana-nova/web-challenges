console.clear();

const form = document.querySelector('[data-js="form"]');


  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Verhindert das Standard-Submit-Verhalten, wie das Neuladen der Seite
  
    const formData = new FormData(event.target); // Holt die Formulardaten
  
    const data = Object.fromEntries(formData); // Wandelt sie in ein Objekt um
  
    form.reset(); // Setzt das Formular zurück und leert alle Eingabefelder

    document.getElementById("first-name").focus(); // Setzt den Fokus auf das "First Name"-Feld
  
   // event.target.reset(); // Zweites Reset, das ebenfalls alle Eingabefelder leert (etwas redundant)
  
    console.log(data); 
  });
  

  /*
  andere Möglichkeiten auf das Element zuzugreifen:

  THROUGH NAME:
  const firstNameInput = document.querySelector('[name="firstName"]');
firstNameInput.focus(); // Setzt den Fokus auf das First Name-Feld

THROUGH CLASS:
<input type="text" name="firstName" class="input-first-name" placeholder="Your first name" />

const firstNameInput = document.querySelector('.input-first-name');
firstNameInput.focus(); // Setzt den Fokus auf das First Name-Feld

  */