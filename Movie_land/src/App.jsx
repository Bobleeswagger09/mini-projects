import { useState, useEffect } from "react";
import SearchIcon from '/search.svg'
import Movie from "./Movie";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=b1bebc42";

//  b1bebc42

  const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchMovie, setSearchMovie] = useState('');

    useEffect(() =>{
  
      onSearch('Batman');
    }, []);

    async function onSearch(query){
      const response = await fetch(`${API_URL}&s=${query}`)
      const data = await response.json(); //
      setMovies(data.Search);
      // setMovies(movies);
    }


  return ( 
    <>
      <div className="app">
        <h1>Movie Land</h1>
        <div className="search">
          <input 
            type="text"
            value={searchMovie}
            placeholder="Search for Movies"
            onChange={(e) => setSearchMovie(e.target.value)}
          />

          <img 
            src={SearchIcon} 
            alt='search' 
            onClick={() => onSearch(searchMovie)}
          />
        </div>

        <div className="container">
          {
            movies?.length > 0
            ? (
              <div className="container">
                {movies.map((movie) => (
                  <Movie movie={movie} />
                ))}
              </div>
            )
            :
            <div className="empty">
              <h2>No Movie Found</h2>
            </div>
          }
        </div>
      </div>
    </>
   );
}
 
export default App;