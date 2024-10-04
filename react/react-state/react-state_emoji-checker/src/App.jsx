import "./styles.css";
import React, { useState } from "react";


export default function App() {
  return <Code/>
}


function Code() {
  //let code = "?";

  const validCode = "🐡🐠🐋";
  
  const [code, setCode] = useState("");

  function handleClick(emoji) {
    setCode(code + emoji);
    console.log(code + emoji );
  }
  
  
  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
      </div>

        <button
          type="button"
          onClick={() => {
            setCode("");
            console.log("Reset Code!");
          }}
        >
          Reset
        </button>


      {code === validCode && <p>Valid code! 🎉</p>}
    </div>
  );
}