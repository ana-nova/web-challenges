import "./styles.css";

export default function App() {
  return (
    <div>
      <Greetings name="golum" greetingText="Hello, "/>
      <Greetings name="gandalf" greetingText="Hey, "/>
      <Greetings name="sam" greetingText="Moin, "/>
    </div>
    );
}

function Greetings({greetingText, name}) {
  return (
    <div>
      {greetingText}  {/* reihenfolge ist wichtig, sonst wird es andersherum angezeigt */}
      {name}
    </div>
  );
}


// export default function App() {
//   return (
//     <div>
//       <Greeting name="Gollum" />
//       <Greeting name="Gandalf" />
//       <Greeting name="Sam" />
//     </div>
//   );
// }

// function Greetings({ name }) {
//   return <div>Hello, {name}!</div>;
// }