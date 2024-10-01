import React from "react";
import "./styles.css";


export default function App() {

  function handleClick() {
    console.log("You clicked me!");
  }

  return (
    <div>
      <Button color="white" backgroundColor="#28a745" isDisabled={false}  text="save" onClick={handleClick}/>
      <Button color="#6c757d" backgroundColor="#d3d3d3"  isDisabled={true}  text="cancel" onClick={handleClick}/>
    </div>
  );
}


function Button({ color, backgroundColor, isDisabled, text, onClick }) {
  return (
    <button onClick={onClick} style={{ color: color, backgroundColor: backgroundColor, height: "100px", width: "100px"}} disabled={isDisabled}>
      {text}
    </button>
  );
}

