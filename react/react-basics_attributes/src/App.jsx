import "./styles.css";

export default function App() {
  return <Article></Article>;
  //oder alternativ: return Article();
}

function Article() {
 return (
  <article className="article">
      <h1>Das ist mein Titel</h1>
      <h2 className="article__title">hier ist meine h2 über irgendwas</h2>
      <label htmlFor="input">Such bei Google nach folgenden Artikeln: </label>
      <input id="input" />
      <a href="https://www.google.com" className="article__link">Search on Google</a>
  </article>
 ) 
}