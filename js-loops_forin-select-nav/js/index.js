console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

for (const key in languages) {
  if (languages.hasOwnProperty(key)) {
    // Erstelle ein neues <option> Element
    const option = document.createElement("option");

    // Setze den Wert und den Text des <option> Elements
    option.value = languages[key]; // Wert der Option ist die Sprache
    option.textContent = languages[key]; // Text der Option ist die Sprache
    
    // Füge die Option in das <select> Element ein
    select.append(option);

    console.log("Schlüssel:", key); // Gibt z.B. "DE", "EN", "ES" aus
    console.log("Wert:", languages[key]); // Gibt z.B. "German", "English", "Spanish" aus
  }
}

/*
 for...in-Loop wird verwendet, um über die Eigenschaften eines Objekts zu iterieren

for (const variable in object) {
  // Code, der für jeden Schlüssel (key) des Objekts ausgeführt wird
}


const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
};

// Statt "key" verwende "Kartoffel"
for (const Kartoffel in languages) {
  console.log("Schlüssel:", Kartoffel); // Gibt "DE", "EN", "ES" aus
  console.log("Wert:", languages[Kartoffel]); // Gibt "German", "English", "Spanish" aus
}

 */


// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// Iteriere über das nav-Objekt mit for...in
for (const key in nav) {
  // Erstelle ein <li> Element
  const li = document.createElement("li");
  
  // Erstelle ein <a> Element
  const a = document.createElement("a");

  // Setze das href-Attribut und den Text des <a> Elements
  a.href = nav[key].href; // Zugriff auf den href-Wert
  a.textContent = nav[key].text; // Zugriff auf den text-Wert

  // Füge das <a> Element in das <li> Element ein
  li.append(a);

  // Füge das <li> Element in die <ul> Liste ein
  ul.append(li);
}
