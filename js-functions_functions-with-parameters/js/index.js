console.clear();

console.log("-------------");
console.log("Exercise 1:");

logSeparator(3);
/*
1: The function below is not executed. Can you figure out why? Find the bug and fix it.
*/

function logText() {
  console.log("This text does not appear. Why?");
}
logText();

console.log("-------------");
console.log("Exercise 2:");
/*
2: Look at the functions below. They are almost identical. Can you find a way to generalize them into a new function with an input parameter? Replace the function calls below with your new function.
*/
function greet() {
    console.log("Welcome Bob, good to see you again!");
    console.log("Welcome Alice, good to see you again!");
    console.log("Welcome Mary, good to see you again!");
}
greet();


console.log("-------------");
console.log("Exercise 3:");
/*
3: We log a little separation text for each subtask. This is repetitive code, so lets write a function 'logSeparator' which takes the number of the exercise as a parameter 
and logs the respective separator. Then use this function to replace the existing separator logs in this javascript file.

Note: Separation text means the text that is logged into the console before each exercise. For example: "-------------" and "Exercise 1:" are the separation texts for the first exercise.
*/

// Funktion zum Loggen des Trennungstextes
function logSeparator(exerciseNumber) {
  console.log("-------------");
  console.log(`Exercise ${exerciseNumber}:`);
}

// Beispiel-Aufruf der Funktion
logSeparator(3);
