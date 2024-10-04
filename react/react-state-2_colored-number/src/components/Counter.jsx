// import { useState } from "react";
import ColoredNumber from "./ColoredNumber";

export default function Counter({ count, onIncrement, onDecrement }) {

  //  // Step 1: Add state to track the count
  //  const [count, setCount] = useState(0);

  // // Step 2: Update the state when buttons are clicked
  // function incrementCount() {
  //   setCount(count + 1);
  // }

  // function decrementCount() {
  //   setCount(count - 1);
  // }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
  {/* Step 3: Pass the count as value prop to ColoredNumber */}
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={onIncrement}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={onDecrement}
        >
          -
        </button>
      </div>
    </div>
  );
}
