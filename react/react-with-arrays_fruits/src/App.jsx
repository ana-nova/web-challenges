import Card from "./components/Card";

export default function App() {

  const fruits = [
    {id: 0, fruitName: "banana 🍌",     color: "yellow"},
    {id: 1, fruitName: "apple 🍎",      color: "red"},
    {id: 2, fruitName: "orange 🍊",     color: "orange"},
    {id: 3, fruitName: "mango 🥭",      color: "yellow-orange"},
    {id: 4, fruitName: "pineapple 🍍",  color: "yellow"},
    {id: 5, fruitName: "watermelon 🍉", color: "pink-red"},
    {id: 6, fruitName: "kiwi 🥝",       color: "green"}
  ];

  return (
    <div className="app">
      {fruits.map(({ id, fruitName }) => (
        <Card key={id} name={fruitName} />
      ))} 
    </div>
  );
}
