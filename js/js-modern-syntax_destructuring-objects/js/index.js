console.clear();

// EXERCISE 1
// Extract only the course name from the company object.
// Make sure to export your variable as in the example below to make the tests work.

const company = {
  name: "neuefische",
  course: "Web Development",
  location: "Hamburg",
};

export const { course } = company;

// EXERCISE 2
// We have an object called 'user'.
// Write the destructuring assignment that reads:
//  2.1: 'name' property into the variable 'name'.
//  2.2: 'years' property into the variable 'age'.
//  2.3: 'isAdmin' property into the variable 'isAdmin' (false, if no such property exists)

const user = { name: "John", years: 30 };

export const { name, years: age, isAdmin = false } = user;
console.log(name, age, isAdmin);

// EXERCISE 3
// Extract the variables from the dog object and
// rename them like "dogName", "dogBreed", and "dogAge", respectively.

const dog = {
  name: "Pluto",
  breed: "husky",
  age: 5,
};

export const { name: dogName, breed: dogBreed, age: dogAge } = dog;
console.log(dogName, dogBreed, dogAge);

// EXERCISE 4
// Extract the 'lastName' property from the person object as "personLastName".
// Store all other properties in an object called "moreInformation".

const person = {
  lastName: "Main",
  age: 24,
  firstName: "Alex",
};

export const { lastName: personLastName, ...moreInformation } = person;
console.log(personLastName, moreInformation);



// ====================
/*
... (Spread/Rest Operator)
Was macht der Spread/Rest Operator?
Spread: Verwendet, um ein Array oder Objekt in seine Einzelteile aufzuspalten.
Rest: Verwendet, um mehrere Elemente in einem einzigen Parameter oder einer Variablen zu bündeln.

const fruits = ["apple", "banana"];
const moreFruits = ["cherry", ...fruits]; // Spread-Syntax
console.log(moreFruits); // ["cherry", "apple", "banana"]


?. (Optional Chaining Operator)
Verhindert, dass ein Fehler auftritt, wenn auf eine tief verschachtelte Eigenschaft zugegriffen wird, die möglicherweise undefined oder null ist.

const user = { profile: { name: "John" } };
console.log(user.profile?.name); // "John"
console.log(user.address?.street); // undefined (statt Fehler)

*/