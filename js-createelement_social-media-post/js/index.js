// console.clear();

// function handleLikeButtonClick(event) {
//   const buttonElement = event.target;
//   buttonElement.classList.toggle("post__button--liked");
// }

// const likeButton = document.querySelector('[data-js="like-button"]');
// likeButton.addEventListener("click", handleLikeButtonClick);

// // Exercise:
// // Use document.createElement() and append another social media post to the body.


console.clear();

// Funktion, um das Like-Button-Verhalten zu steuern
function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

// Erstelle das zweite Social Media Post-Element
const post = document.createElement("article");
post.classList.add("post");

// Erstelle das Paragraph-Element für den Post-Inhalt
const postContent = document.createElement("p");
postContent.classList.add("post__content");
postContent.textContent = "This is a new social media post created with JavaScript.";

// Erstelle den Footer des Posts
const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");

// Erstelle das Username-Span-Element
const postUsername = document.createElement("span");
postUsername.classList.add("post__username");
postUsername.textContent = "@newuser";

// Erstelle den Like-Button
const likeButton = document.createElement("button");
likeButton.classList.add("post__button");
likeButton.setAttribute("data-js", "like-button");
likeButton.textContent = "♥ Like";

// Füge den Event Listener für den Like-Button hinzu
likeButton.addEventListener("click", () => {
  console.log("thats a click");
});

// Füge den Username und den Like-Button zum Footer hinzu
postFooter.appendChild(postUsername);
postFooter.appendChild(likeButton);

// Füge den Inhalt und den Footer zum Post hinzu
post.appendChild(postContent);
post.appendChild(postFooter);

// Füge das neue Post-Element zum Body hinzu
document.body.appendChild(post);

