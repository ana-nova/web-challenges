/* MY PLAN FOR TASK 1: Find the maximum

  Step 1: compare two numbers against each other
  Step 2: to compare you need a if else for identifying which one is the max number
  Step 3: return the max number
  Step 4 (optional): get feedback through console.log if it works

*/

function maxOfTwoNumbers(num1, num2) {
  if(num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log("Task 1: " + maxOfTwoNumbers(3, 5));

//==========================================
/* MY PLAN FOR TASK 2: Find the longest word

  Step 1: Declare a variable and name it longestWord // Jaws // Alien // Gravity // Inception
  Step 2: Declare another variable and name it currentLength, inititalize it to = 0  // 4 // 5 // 7 // 9
  Step 3: Use .forEach to visit every single word and get its length using .length
  Step 4: Compare the length of the word I am visiting to the currentLength variable and only if it is larger, 
  than update currentLength to equal the word length and the longestWorld variable to equal that word
  Step 5: return the longest word
  Step 6 (optional): get feedback through console.log if it works

*/

const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho",];

function findLongestWord(words) {
  let longestWord;
  let currentLength = 0;

  words.forEach(word => {
    if (word.length > currentLength) {
      currentLength = word.length;
      longestWord = word;
    }
  });
  console.log("Task 2: " + longestWord);
  return longestWord;
}
findLongestWord(words);



//==========================================
/* MY PLAN FOR TASK 3: Calculate the sum

  Step 1: define a sum variable to store all numbers 
  Step 2: run through the array and add every number there
  Step 3: return it as a sum
  Step 4 (optional): get feedback through console.log if it works

*/

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;

  numbers.forEach(number => {
    sum += number;
  });
  return sum;
}
sumNumbers(numbers);
console.log("Task 3: " + sumNumbers(numbers));


//==========================================
/* MY PLAN FOR TASK 4: Calculate the average length of the words

  Step 1: define an averageLength variable to calculate the avarage length of the words
  Step 2: define a totalLength variable for all the words in that array
  Step 3: do some calculation to give the avarage number back
  Step 4: return the results
  Step 5 (optional): get feedback through console.log if it works
*/

const words2 = [
  "eclipse",
  "harmony",
  "cascade",
  "labyrinth",
  "quartz",
  "serendipity",
  "zenith",
  "ephemeral",
  "vortex",
  "mystique"
];

function averageWordLength() {
  let totalLength = 0;

  words2.forEach(word => {
    totalLength += word.length;
  });

  const averageLength = totalLength / words.length;
  return averageLength;
}

averageWordLength(words2);
console.log("Task 4: " + averageWordLength(words2));

//==========================================
/* MY PLAN FOR TASK 5: Unique arrays - return an array without duplicates

  Step 1: define a uniqueArray variable for for new empty array
  Step 2: go through every entry in that array to compare their uniqueness
  Step 3: if that word is unique to another, then it should be included in the new array
  Step 4: return the result

*/

const words3 = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray() {
  const uniqueArray = [];

  words3.forEach(word => {
    if(!uniqueArray.includes(word)) {
      uniqueArray.push(word);
    }
  });
  console.log("Task 5: " + uniqueArray);
  return uniqueArray;
}
uniquifyArray(words3);



//==========================================
/* MY PLAN FOR TASK 6: Find elements

  Step 1: 

*/
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(haystack, needle) {
  return haystack.includes(needle);
}
console.log(doesWordExist(wordsFind, 'matter')); 


//==========================================
/* MY PLAN FOR TASK 7: Count repetition

  Step 1: 

*/

const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(haystack, needle) {
  // TODO:
}

// Bonus: A generic sum function
// for strings use the length of the string, for booleans use 1 and 0
const mixedArray = [
  "apple",
  "banana",
  "cherry",
  "date",
  42,
  7,
  1995,
  23,
  true,
  false
];

function sum(array) {
  // TODO:
}

// Bonus: Write a function that calculates the greatest product of four
// numbers that is either horizontally or vertically in the array

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(matrix) {
  // TODO:
}


module.exports = {
  maxOfTwoNumbers,
  findLongestWord,
  sumNumbers,
  averageWordLength,
  uniquifyArray,
  doesWordExist,
  howManyTimes,
  sum,
  greatestProduct 
}
