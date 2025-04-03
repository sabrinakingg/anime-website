import { useEffect } from "react";
import { useState } from "react";
import Main from "../components/Main";
import AnimeList from "../components/AnimeList";
import Loader from "../components/features/Loader/Loader";
import ErrorMessage from "../components/features/Error/ErrorMessage";

// AnimePage component fetches and displays the top trending and currently airing anime. It manages loading and error states and displays relevant data accordingly. The component fetches data from the Jikan API to retrieve the anime information.

function AnimePage() {
  // State to store the list of top anime
  const [topAnime, setTopAnime] = useState([]);
  // State to store the list of airing anime
  const [airingAnime, setAiringAnime] = useState([]);
  // State to manage loading state
  const [isLoading, setIsLoading] = useState(false);
  // State to store any error messages
  const [error, setError] = useState("");

  // useEffect hook runs the once the component mounts and fetches anime data from the API. It handles fetching of top anime and airing anime, manages loading state, and error handling.
  useEffect(function () {
    // Function that fetches anime data from API
    async function fetchAnime() {
      try {
        // Set loading state to true and reset any previous error
        setIsLoading(true);
        setError("");

        // Fetch top anime
        const topRes = await fetch(`https://api.jikan.moe/v4/top/anime`);
        if (!topRes.ok) {
          // If the response isn't OK, throw an error
          throw new Error("Something went wrong while fetching anime");
        }
        const topData = await topRes.json();
        // If no top anime is found, throw an error
        if (topData.data.length === 0) {
          throw new Error("No anime found");
        }
        // Only shows the top 5 anime
        setTopAnime(topData.data.slice(0, 5));

        // Fetch airing anime
        const airingRes = await fetch(`https://api.jikan.moe/v4/seasons/now`);
        if (!airingRes.ok) {
          // If the response isn't OK, throw an error
          throw new Error("Something went wrong while fetching anime");
        }
        const airingData = await airingRes.json();
        // If no airing anime is found, throw an error
        if (airingData.data.length === 0) {
          throw new Error("No anime found");
        }
        // Only shows the top 5 airing anime
        setAiringAnime(airingData.data.slice(0, 5));

        // Sets the loader to false after data is successfully fetched
        setIsLoading(false);
      } catch (err) {
        // If an error occurs, set the error state with the error message
        // console.error(err.message);
        setError(err.message);
      } finally {
        // Set loading state to false regardless of whether the fetch succeeded or failed
        setIsLoading(false);
      }
    }

    // Call fetchAnime function to load data
    fetchAnime();
  }, []); // Empty dependency array ensures this effect runs only once, and doesn't do an infinite loop

  return (
    <div className="container">
      <div className="browseAnimeContainer">
        <h2>Browse Anime</h2>
      </div>
      <div className="animeCategory">
        <h2>
          <span>Trending</span> Now
        </h2>
        <Main>
          <div className="box">
            {isLoading && <Loader />}
            {!isLoading && !error && <AnimeList anime={topAnime} />}
            {error && <ErrorMessage message={error} />}
          </div>
        </Main>
      </div>
      <div className="animeCategory">
        <h2>
          <span>Airing</span> Now
        </h2>
        <Main>
          <div className="box">
            {isLoading && <Loader />}
            {!isLoading && !error && <AnimeList anime={airingAnime} />}
            {error && <ErrorMessage message={error} />}
          </div>
        </Main>
      </div>
    </div>
  );
}

export default AnimePage;
