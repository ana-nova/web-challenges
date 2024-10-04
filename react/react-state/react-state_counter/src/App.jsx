import React, { useState } from "react";
import "./styles.css";

export default function App() {
  return <Counter/>
}

function Counter() {
  const [count, setCount] = useState(0);

  function handleCountPlus() {
    console.log("➕");
    setCount(count + 1);
  }

  function handleCountMinus() {
    console.log("➖");
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={handleCountMinus}
        >
          -
        </button>
        <button
          type="button"
          onClick={handleCountPlus}
        >
          +
        </button>
      </div>
    </div>
  );
}
