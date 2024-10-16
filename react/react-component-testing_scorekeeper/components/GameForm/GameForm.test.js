import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  // #1: rendern der komponente
  render(<GameForm />);

  // #2: überprüfen, ob der "name of game" gerendert wird
  const nameInput = screen.getByLabelText(/name of game/i);
  expect(nameInput).toBeInTheDocument();

  const playerInput = screen.getByLabelText(/player names/i);
  expect(playerInput).toBeInTheDocument();

  // #3: überprüfen, ob die buttons vorhanden sind
  const button = screen.getByRole("button", { name: /create game/i });
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm />);

  const formHeader = screen.getByRole("heading", {
    name: /create a new game/i,
  });
  expect(formHeader).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  const mockOnCreateGame = jest.fn(); // mock funktion für die onCreateGame funktion
  const user = userEvent.setup(); // userEvent initialisieren für die Benutzerinteraktionen

  // rendern der GameForm component und übergabe der mock funktion
  render(<GameForm onCreateGame={mockOnCreateGame} />);

  const nameInput = screen.getByLabelText(/name of game/i);
  const playerInput = screen.getByLabelText(/player names/i);
  const submitButton = screen.getByRole("button", { name: /create game/i });

  // hier simulieren der benutzereingaben in die Felder
  await user.type(nameInput, "Dodelido");
  await user.type(playerInput, "John Doe, Jane Doe");

  await user.click(submitButton);

  // überprüfen ob die mock funktion mit den richtigen daten aufgerufen wurde
  expect(mockOnCreateGame).toHaveBeenCalledWith({
    nameOfGame: "Dodelido",
    playerNames: ["John Doe", "Jane Doe"],
  });
});

test("does not submit form if one input field is left empty", async () => {
  const mockOnCreateGame = jest.fn();
  const user = userEvent.setup();

  render(<GameForm onCreateGame={mockOnCreateGame} />);

  const nameInput = screen.getByLabelText(/name of game/i);
  const submitButton = screen.getByRole("button", { name: /create game/i });

  await user.type(nameInput, "Dodelido");

  await user.click(submitButton);

  expect(mockOnCreateGame).not.toHaveBeenCalled();
});
