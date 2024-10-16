import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  // #1: rendern der komponente
  render(<Player name="Player 1" score={5} />);

  // #2: überprüfen, ob der spielername gerendert wird
  const playerName = screen.getByText("Player 1");
  expect(playerName).toBeInTheDocument();

  // #3: überprüfen, ob die buttons vorhanden sind
  const decreaseButton = screen.getByRole("button", {
    name: /decrease score/i,
  });
  expect(decreaseButton).toBeInTheDocument();

  const increaseButton = screen.getByRole("button", {
    name: /increase score/i,
  });
  expect(increaseButton).toBeInTheDocument();
});

test("calls callbacks when increasing or decreasing score", async () => {
  const user = userEvent.setup();

  render(<Player name="Player 1" score={5} />);

  const playerName = screen.getByText("Player 1");
  expect(playerName).toBeInTheDocument();

  const decreaseButton = screen.getByRole("button", {
    name: /decrease score/i,
  });
  expect(decreaseButton).toBeInTheDocument();

  const increaseButton = screen.getByRole("button", {
    name: /increase score/i,
  });
  expect(increaseButton).toBeInTheDocument();

  // simuliert das klicken auf die Buttons
  //await user.type(input, "5");
  await user.click(decreaseButton);
  await user.click(increaseButton);
});

/*

/decrease score/: Dies ist ein regulärer Ausdruck, der nach dem Text "decrease score" sucht.

i: Der i-Schalter steht für "ignore case", was bedeutet, dass Groß- und Kleinschreibung ignoriert wird.

*/
