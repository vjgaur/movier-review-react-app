import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";


//22db5dd8

const API_URL = "http://www.omdbapi.com?apikey=22db5dd8";


const App = () => {
 
  const [movies, setmovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setmovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className='search'>
        <input placeholder='Search for movies'
          value={searchTerm} onChange={(e) => setsearchTerm(e.target.value )} />
        <img
          src={SearchIcon}
          alt="Search" onClick={() => {searchMovies(searchTerm) }} />
      </div>
      {
        movies?.length > 0 ? (
          <div className='container'>
            {movies.map((movie) => (
                  <MovieCard movie={movie} />
              ))
            }
          </div>
        ) :
          (
            <div className='empty'>
              <h2>No movies found</h2>  
            </div>
          )
      }
    </div>
  );
}

export default App;
