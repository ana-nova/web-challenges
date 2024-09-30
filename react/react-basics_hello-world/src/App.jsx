import React from "react";
import "./styles.css";

//Task 1:
// export default function App() {
//   return <h1>hello world the first</h1>;
// }


//Task 2:
export default function App() {
  return <HelloWorld></HelloWorld>;
  //oder return <HelloWorld />
}

function HelloWorld() {
  return <h1>hello world the second</h1>
}
