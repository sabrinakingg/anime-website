function Search({ query, setQuery }) {
  return (
    <input className='search' type='text' placeholder='Search Anime...' value={query} onChange={(e)=> setQuery(e.target.value)} />
  );
}

export default Search