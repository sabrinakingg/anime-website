import { useEffect } from "react";
import { useState } from "react";

import Main from "../components/Main";
import SearchBox from "../components/SearchBox";
import AnimeList from "../components/AnimeList";
import Loader from "../components/features/Loader/Loader";
import ErrorMessage from "../components/features/Error/ErrorMessage";

import { API_BASE_URL } from "../config";

function SearchPage() {
  const [anime, setAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  // console.log(anime);
  // const query = "naruto";

  // useEffect runs the function only once when the application renders, instead of doing an infinite loop
  useEffect(
    function () {
      async function fetchAnime() {
        try {
          setIsLoading(true);
          setError("");
          // fetch all the animes from api
          const res = await fetch(
            `${API_BASE_URL}/anime?q=${query}&sfw&limit=15`
          );
          // if the response isnt ok
          if (!res.ok) {
            throw new Error("Something went wrong while fetching anime");
          }
          const data = await res.json();
          console.log(data);
          // if there is no anime of whats typed in the search box display the error message
          if (data.data.length === 0) {
            throw new Error("Anime was not found");
          }
          console.log(data.data);
          setAnime(data.data);
          // sets the loader to false so it wont display
          setIsLoading(false);
        } catch (err) {
          // console.error(err.message);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (!query.length) {
        setAnime([]);
        setError("");
        return;
      }

      fetchAnime();
    },
    [query]
  );
  console.log(query);

  return (
      <div className="container searchWrapper">
        <div className="searchContainer">
          <h2>Search Anime</h2>
          <SearchBox query={query} setQuery={setQuery} />
        </div>
        <div className="animeCategory">
          {/* <h2>
          <span>Airing</span> Now
          </h2> */}
          <Main>
            <div className="box">
              {isLoading && <Loader />}
              {!isLoading && !error && <AnimeList anime={anime} />}
              {error && <ErrorMessage message={error} />}
            </div>
          </Main>
        </div>
      </div>
  );
}

export default SearchPage;
