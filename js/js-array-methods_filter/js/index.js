console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

// 1. Only the card with id '2'
const onlyCardWithIdTwo = cards.filter((card) => card.id === "2");
console.log(onlyCardWithIdTwo); 

// 2. All cards with exactly 3 tags
const allCardsWith3Tags = cards.filter((card) => card.tags.length === 3);
console.log(allCardsWith3Tags); 

// 3. All cards that are not bookmarked
const allCardsThatAreNotBookmarked = cards.filter(
  (card) => !card.isBookmarked
);
console.log(allCardsThatAreNotBookmarked); 

// 4. All cards with tags that include "html" or "js" and are bookmarked
const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter(
  (card) =>
    card.isBookmarked &&
    (card.tags.includes("html") || card.tags.includes("js"))
);
console.log(allCardsWithTagsHTMLOrJSThatAreBookmarked); 


export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
