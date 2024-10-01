import React from "react";
import "./styles.css";
import Box from "./components/Box";

export default function App() {
  return (
    <main className="flex-container">
      <Boxes></Boxes>
    </main>
  );
}

function Boxes() {
  return (
    <>
      <Box color="#007bff" />
      <Box color="#fc3" />
      <Box color="#ff3333" />
    </>
  );
}



/*
Warum ist Box() weiterhin relevant:
    das wäre die Schreibweise wenn Box() rausgenommen werden müsste + definiert einheitlich für jede weitere Box, wie es aussehen soll
    function Boxes() {
        return (
          <>
            <div className="box" style={{ backgroundColor: "#007bff" }}></div>
            <div className="box" style={{ backgroundColor: "#fc3" }}></div>
            <div className="box" style={{ backgroundColor: "#ff3333" }}></div>
          </>
        );
      }

*/