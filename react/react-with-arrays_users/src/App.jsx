import React from "react";
import "./styles.css";
import Card from "./components/Card.jsx";
import Title from "./components/Title.jsx";
import { USERS } from "./db";

export default function App() {
  return (
    <main className="app">
      <Title text="ClientBoard" />
      <div className="app__card-grid">
        {USERS.map((user) => (
          <Card key={user.id} user={user} />   //um für jeden Nutzer eine Karte zu erstellen mit eindeutigen Key usw
        ))}
      </div>
    </main>
  );
}
 