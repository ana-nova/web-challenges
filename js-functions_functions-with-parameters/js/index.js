console.clear();

// console.log("-------------");
// console.log("Exercise 1:");

logSeparator(1);
/*
1: The function below is not executed. Can you figure out why? Find the bug and fix it.
*/

function logText() {
  console.log("This text does not appear. Why?");
}
logText();

// console.log("-------------");
// console.log("Exercise 2:");

logSeparator(2);

/*
2: Look at the functions below. They are almost identical. Can you find a way to generalize them into a new function with an input parameter? Replace the function calls below with your new function.
*/
function greet() {
    console.log("Welcome Bob, good to see you again!");
    console.log("Welcome Alice, good to see you again!");
    console.log("Welcome Mary, good to see you again!");
}
greet();


// console.log("-------------");
// console.log("Exercise 3:");
logSeparator(3);

/*
3: We log a little separation text for each subtask. This is repetitive code, so lets write a function 'logSeparator' which takes the number of the exercise as a parameter 
and logs the respective separator. Then use this function to replace the existing separator logs in this javascript file.

Note: Separation text means the text that is logged into the console before each exercise. For example: "-------------" and "Exercise 1:" are the separation texts for the first exercise.
*/

function logSeparator(exerciseNumber) {
  console.log("-------------");
  console.log(`Exercise ${exerciseNumber}:`);
}

logSeparator(4);


/* Hoising 
// Funktionsaufruf vor der Definition funktioniert
myFunction();

function myFunction() {
  console.log("This function is hoisted!");
}

---

// Funktionsaufruf vor der Zuweisung führt zu einem Fehler
myFunction(); // ReferenceError: Cannot access 'myFunction' before initialization

const myFunction = function() {
  console.log("This function is not hoisted!");
};

---

// Funktionsaufruf vor der Zuweisung führt zu einem Fehler
myFunction(); // ReferenceError: Cannot access 'myFunction' before initialization

const myFunction = () => {
  console.log("This arrow function is not hoisted!");
};

---

// Funktionsaufruf vor der Definition führt zu einem Fehler
myObject.myMethod(); // TypeError: Cannot read property 'myMethod' of undefined

const myObject = {
  myMethod: function() {
    console.log("This method is not hoisted!");
  }
};

---

if (true) {
  function myFunction() {
    console.log("This function is hoisted within the block!");
  }
}

myFunction(); // ReferenceError: myFunction is not defined

*/ 