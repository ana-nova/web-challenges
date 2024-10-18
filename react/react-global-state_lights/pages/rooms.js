import Link from "../components/Link";
import Lights from "../components/Lights";

export default function Rooms({ lights, handleToggle }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>All Rooms</h1>
      <Lights lights={lights} onToggle={handleToggle} />
    </>
  );
}

/*  
trivia: i only pass "handleToggle" as my handle event to the parent component only once
        keeps the code clean and i dont need to redefine it in every child component
*/
