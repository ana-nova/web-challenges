import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);


  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
        );
        const data = await response.json();
        setPokemon(data.results);
        setCount(data.count);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offset]);

  function handlePrevPage() {
    setOffset(offset - 20);
  }

  function handleNextPage() {
    setOffset(offset + 20);
  }

  return (
    <main>
      <button type="button" onClick={handlePrevPage} disabled={offset - 20 < 0}>Previous Page</button>
      <button type="button" onClick={handleNextPage} disabled={offset + 20 >= count}>Next Page</button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
