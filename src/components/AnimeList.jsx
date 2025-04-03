import Anime from "./Anime";

function AnimeList({ anime }) {
  return (
    // passing anime from the parent component to the animelist component
    
    <div className="animeList">
      {anime.map((anime) => (<Anime key={anime.mal_id} anime={anime}  />))}
    </div>
  );
}

export default AnimeList;
