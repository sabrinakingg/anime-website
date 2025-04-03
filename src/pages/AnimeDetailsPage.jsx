import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/features/Loader/Loader";
import ErrorMessage from "../components/features/Error/ErrorMessage";

function AnimeDetailsPage() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchAnime() {
      try {
        setIsLoading(true);
        setError("");

        //* fetch the animes id
        const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        if (!res.ok) throw new Error("Failed to fetch anime");

        const data = await res.json();
        setAnime(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAnime();
  }, [id]);

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    anime && (
      <div className="animeDetails container">
        {/* Left side\ */}
        <div className="leftSideDetails">
          {/* Image */}
          <div className="imgContainer">
            <img src={anime.images.jpg.image_url} alt={anime.title} />
          </div>
          {/* Container */}
          <div className="animeRatings">
            <p>⭐ #{anime.rank} Highest Rated All Time</p>
            <p>❤️ #{anime.popularity} Most Popular All Time</p>
          </div>
          {/* Detail Container */}
          <div className="detailsContainer">
            <p>
              <strong>Format:</strong> {anime.type}
            </p>
            <p>
              <strong>Source:</strong> {anime.source}
            </p>
            <p>
              <strong>Episodes:</strong> {anime.episodes}
            </p>
            <p>
              <strong>Episode Duration:</strong> {anime.duration}
            </p>
            <p>
              <strong>Status:</strong> {anime.status}
            </p>
            <p>
              <strong>Rating:</strong> {anime.rating}
            </p>
            <p>
              <strong>Start Date:</strong> {anime.aired.prop.from.year}
            </p>
            <p>
              <strong>End Date:</strong> {anime.aired.prop.to.year}
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="rightSideDetails">
          <div className="descContainer">
            <h2>{anime.title}</h2>
            <p>{anime.synopsis}</p>
          </div>
          {/* Trailer */}
          <div className="trailerContainer">
            <h3>Trailer</h3>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${anime.trailer.youtube_id}`}
              title={`${anime.title} Trailer`}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    )
  );
}

export default AnimeDetailsPage;
