import React, { useState } from "react";
import "./styles.css";
import Counter from "./components/Counter";
import ColoredNumber from "./components/ColoredNumber";


//Step 4: Lifting State Up
export default function App() {

    // Step a: Lift state up to the App component again
    const [count, setCount] = useState(0);

    // Step 2: increment and decrement functions need to be here because of the useState + return
    function incrementCount() {
      setCount(count + 1);
    }
  
    function decrementCount() {
      setCount(count - 1);
    }

  // Step 3: Pass count, increment, and decrement as props to Counter 
  return (
    <div>      
  <Counter count={count} onIncrement={incrementCount} onDecrement={decrementCount} />
  <ColoredNumber count={count}/>

  </div>
);}
