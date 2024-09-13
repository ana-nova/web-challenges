console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// erste Version
function createBookData(title, author, rating, sales) {
  const book = {
    bookTitle: title,
    bookAuthor: author,
    bookRating: rating,
    bookSales: sales
  };
  
    return book;
}

const myBook = createBookData("The Great Gatsby", "F. Scott Fitzgerald", 4.7, 1500);
console.log(myBook);


// zweite Version
const createBookData2 = (title, author, rating, sales) => ({
  bookTitle: title,
  bookAuthor: author,
  bookRating: rating,
  bookSales: sales
});

// Beispielaufruf der Funktion:
const myBook2 = createBookData("1984", "George Orwell", 4.9, 2000);
console.log(myBook2);


/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// Funktion zum Loggen der Buchdaten
function logBookData(book) {
  //` wenn ich ${} Daten ausgeben will
  console.log(`Title: ${book.bookTitle}`);
  console.log(`Author: ${book.bookAuthor}`);
  console.log(`Rating: ${book.bookRating}`);
  console.log(`Sales: ${book.bookSales}`);
}

// Buch erstellen
let myBook3 = createBookData("The Hobbit", "J.R.R. Tolkien", 4.8, 1500);

// Daten des Buches loggen
logBookData(myBook3);

// Verkäufe erhöhen und nach jeder Erhöhung die Daten loggen
myBook3.bookSales += 500;
logBookData(myBook3);

