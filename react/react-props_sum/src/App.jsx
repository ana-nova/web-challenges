import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Sum valueA={1} valueB={2}/>
      <Sum valueA={13673} valueB={5342}/>
      <Sum valueA={14565} valueB={45662}/>
      <Sum valueA={1456} valueB={4662}/>
      <Sum valueA={166} valueB={233}/>
      <Sum valueA={4554} valueB={24}/>
    </div>
  );
}

function Sum({valueA, valueB}) {
  const sum = valueA + valueB;
  return (
    <div>
      {valueA} + {valueB} = {sum}
    </div>
  );
}