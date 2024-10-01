import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>button one</Button>
      <Button>button two</Button>
      <Button>button three</Button>
      <Button>button four</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
