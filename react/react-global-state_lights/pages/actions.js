import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ handleTurnAllOff, handleTurnAllOn }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        onTurnAllOff={handleTurnAllOff}
        onTurnAllOn={handleTurnAllOn}
      />
    </>
  );
}
