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
    tags: ["js", "next", "advanced"],
  },
];

// 1. Lowercase all answers
const lowerCaseAnswers = cards.map((card) => card.answer.toLowerCase()); //implicit return
console.log(lowerCaseAnswers); 

//const cardAnswer = cards.map((card) => { return card.toLowerCase();}) 

// 2. Combine questions and answers into one string
const questionsAndAnswersTogether = cards.map(
  (card) => `${card.question} - ${card.answer}`
);
console.log(questionsAndAnswersTogether); 

// 3. Create an array of objects with only question and answer
const questionAndAnswer = cards.map((card) => ({
  question: card.question,
  answer: card.answer,
}));
console.log(questionAndAnswer); 


export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };
