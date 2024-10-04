import { useState } from "react";
import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";

export default function FavoriteButton() {
  // this should be a state variable
  //const isFavorite = false;
  const [isFavorite, setFavorite] = useState(false);

  function handleFavourite() {
    setFavorite(!isFavorite);
  }

  return (
    <button
      className="favorite-button"
      onClick={() => {
        console.log("favorite button clicked");
        handleFavourite();
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
