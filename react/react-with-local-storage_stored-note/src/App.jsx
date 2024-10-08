//import { useState } from "react";
import FontSelector from "./components/FontSelector";
import Note from "./components/Note";
import "./styles.css";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [note, setNote] = useLocalStorageState("");
  const [font, setFont] = useLocalStorageState("system-ui");

  function handleNoteChange(newNote) {
    setNote(newNote);
  }

  function handleFontChange(newFont) {
    setFont(newFont);
  }

  return (
    <div className="app" style={{ "--font": font }}>
      <FontSelector font={font} onFontChange={handleFontChange} />
      <Note note={note} onNoteChange={handleNoteChange} />
    </div>
  );
}


/* 
                What does import useLocalStorageState do?
                
    The `useLocalStorageState` hook in React is a custom hook that allows 
    you to manage state and synchronize it with the browser's local storage. 
    When you import and use it, you can easily save state to local storage 
    and retrieve it later, even after the page is refreshed. 
    It simplifies the process of keeping data persistent across sessions 
    in a React application.

*/