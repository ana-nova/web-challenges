export function getAnimal(animal) {
    if (!animal) {
      // Case when no argument is provided
      return "I do not like animals at all!";
    } else if (animal === "cats") {
      // Case when the argument is "cats"
      return "I totally love cats!";
    } else {
      // Case when the argument is any other animal
      return `I like ${animal}!`;
    }
  }
  



/*
    was wird erwartet?
        1. wenn ich "cats" übergebe, dann erwarte ich "i totally love cats"
        2. bei !cats: "i like dogs" bzw alles andere als cats
        3. wenn kein argument übergeben word, dann "i dont like animals at all"
*/