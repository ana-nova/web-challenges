console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

const title = "My First Post"; 
const text = "This is the content of my first post on this platform."; 
let numberOfLikes = 120;
numberOfLikes += 1;
const user = "Ana"; 
const isReported = false; 

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/
console.log(title);
console.log(text);
console.log(numberOfLikes + " likes to this post");
console.log('%c was created by', 'color: pink; font-weight: bold; backround-color: black;', user);
//console.log('%c Selected first choice 💅', 'color: pink; font-weight: bold; backround-color: black;');
console.log("Is Reported?", isReported);

const post = {
	"Post Title": title,
	"Post Content": text,
	"Number of Likes": numberOfLikes,
	"Created by User": user,
	"Is Reported": isReported
  };
  
  // Gib das Objekt als Tabelle aus
  console.table(post);

