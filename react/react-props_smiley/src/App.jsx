import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Smile isHappy={true}/>
      <Smile isHappy={false}/>
      <Smile isHappy={true}/>
      <Smile isHappy={false}/>
    </div>
  );
}


function Smile({isHappy}) {
  return (
    <div>
      {isHappy ? "😊" : "😡"}
    </div>
  )
}