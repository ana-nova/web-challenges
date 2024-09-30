import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle></HelloWorldArticle>;
  //oder alternativ: return <HelloWorldArticle/>;
}


function HelloWorldArticle() {
  return (
    <article>
      <h1>das ist mein h1</h1>
      <p>das ist mein 1. p</p>
      <p>das ist mein 2. p</p>
      <p>das ist mein 3. p</p>
      <p>das ist mein 4. p</p>
    </article>
  )
}