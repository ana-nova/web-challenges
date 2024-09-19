console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
    console.log("PART 1: Welcome! You are logged in as Brunhilde1984.");
} else {
    console.log("PART 1: Access denied!");
};

// Part 2: Even / Odd
const number = 123;

if (number % 2 === 0) {
    console.log('PART 2: even number'); 
  } else {
    console.log('PART 2: odd number'); 
  }

//   const partTwo = number % 2 === 0 ? 'even number' : 'odd number';
//   console.log("PART 2: " + partTwo);

// Part 3: Hotdogs
const numberOfHotdogs = 1;

if (numberOfHotdogs < 5) {
  console.log("PART 3: 2 euro for hotdog");
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log("PART 3: 1.50 euro for hotdog");
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log("PART 3: 1 euro for hotdog");
} else {
  console.log("PART 3: 10 cents for hotdog");
}

// Part 4: Daytime
const currentHour = 24;
const statement = currentHour < 17 ? 'PART 4: Still need to learn ... 😭' : 'PART 4: Party time 🚀';
console.log(statement);

// Part 5: Greeting
const userName = "Archibald";
const falseCoach = "Coach";
const greeting = "PART 5: Hello " + (userName === "Esraa" ? "Esraa" : userName) + "! 🖖";
console.log(greeting);
