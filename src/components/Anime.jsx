import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdStar, MdStarBorder } from "react-icons/md"; // For star icons

function Anime({ anime }) {
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if the anime is already in favorites
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favoriteAnimes")) || [];
    if (favorites.some(fav => fav.mal_id === anime.mal_id)) {
      setIsFavorite(true);
    }
  }, [anime.mal_id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favoriteAnimes")) || [];
    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter(fav => fav.mal_id !== anime.mal_id);
      localStorage.setItem("favoriteAnimes", JSON.stringify(updatedFavorites));
    } else {
      // Add to favorites
      favorites.push(anime);
      localStorage.setItem("favoriteAnimes", JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="animeCard">
      <Link to={`/anime/${anime.mal_id}`} className="cardImage">
        <img src={anime.images.jpg.image_url} alt={anime.title} />
      </Link>
      <div className="cardTitle">
        <h3>{anime.title_english || anime.title}</h3>
        {/* Favorite Button */}
        <button
          onClick={toggleFavorite}
          className={`favoriteButton ${isFavorite ? "favorited" : ""}`}
        >
          {isFavorite ? <MdStar className="filledStar" /> : <MdStarBorder className="emptyStar" />}
        </button>
      </div>
    </div>
  );
}

export default Anime;
