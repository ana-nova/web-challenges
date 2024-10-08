export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => `${person.firstName} ${person.lastName}`);
}

export function getNameAndAge(people) {
  return people.map((person) => `${person.firstName} ${person.lastName}, Age: ${person.age}`);
}

export function getPeopleByAge(people, age) {
  return people
  .filter((person) => person.age === age)
  .map((person) => `${person.firstName}` + " " + `${person.lastName}`);
}

/* full version:
    .filter(function(person) {
  return person.age === age;
}); */

export function getPeopleNamesOlderThan(people, age) {
  return people
    .filter((person) => person.age >= age) 
    .map((person) => `${person.firstName} ${person.lastName}`); 
}


export function getPeopleByLastName(people, lastName) {
  return people
    .filter((person) => person.lastName === lastName) 
    .map((person) => `${person.firstName} ${person.lastName}`); 
}

export function findPersonById(people, id) {
  return people.find(person => person.id === id);
}

export function isAnyoneOlderThan(people, age) {
  return people.some(person => person.age > age);
}

                /* What is some? */
// This method tests whether at least one element in the array 
// passes the provided condition. It returns true if any person 
// is older than the specified age; otherwise, it returns false.

export function getFullNamesSortedByAge(people) {
  return people
 .sort((a, b) => a.age - b.age)
  .map((person) => `${person.lastName} (${person.age})`);
}
