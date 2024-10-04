import { useState } from "react";
import "./styles.css";

export default function App() {
  //let isActive = false;
  const [isActive, setActive] = useState(false);

  function handleClick() {
    setActive(!isActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>{isActive ? "Activated" : "Deactivated"}</button>
    </main>
  );
}

/**
  
  Bonus:
  The value of `isActive` doesn't update right away because React updates state asynchronously. 
  When you call `setActive`, it schedules the update, but the `console.log` runs before the update happens, 
  so it shows the old value.

 */

//    useState is the React hook that manages the state.
//    isActive is the current state.
//    setActive is the function used to update the state.
//    false is the initial state, set at the beginning.