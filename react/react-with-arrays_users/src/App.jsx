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
          <Card key={user.id} user={user} />   //user={user} übergibt alles aus dem array ohne es extra zu tippen
        ))}
      </div>
    </main>
  );
}
 

/* 

<div className="app__card-grid">
{USERS.map(( id, name, roles, about) => (
  <Card key={id} name={name} roles={roles} about={about} />   
))}

Wieso es nicht gut ist?
Wir übergeben das gesamte user-Objekt an die Card-Komponente (user={user}), 
anstatt jede einzelne Eigenschaft separat zu übergeben. 
Dadurch wird der Code flexibler, weil die Card-Komponente Zugriff auf alle Daten des Benutzers hat.
Außerdem müssen wir nicht jedes Mal alle Eigenschaften einzeln angeben, 
wenn wir später etwas ändern oder erweitern wollen. So bleibt der Code übersichtlicher.


*/