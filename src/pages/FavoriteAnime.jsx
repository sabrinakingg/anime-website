import { useEffect, useState } from "react";
import Anime from "../components/Anime";

function FavoriteAnime() {
  const [favoriteAnimes, setFavoriteAnimes] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favoriteAnimes")) || [];
    setFavoriteAnimes(favorites);
  }, []);

  return (
    <div className="container favoriteContainer">
      <h2>Your Favorite Anime</h2>
      {favoriteAnimes.length === 0 ? (
        <p>No favorite anime yet.</p>
      ) : (
        <div className="animeList">
          {favoriteAnimes.map(anime => (
            <Anime key={anime.mal_id} anime={anime} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoriteAnime;
