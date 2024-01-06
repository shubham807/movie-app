import { useEffect, useState } from "react"
import MovieCard from "./MovieCard";
import './App.css';

const API_KEY="http://www.omdbapi.com/?i=tt3896198&apikey=3d49160e"

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const Searchmovies = async (title) => {
     const response = await fetch(`${API_KEY}&s=${title}`)
     const data = await response.json();

     setMovies(data.Search)
  }
   useEffect(() => {
    Searchmovies('dragon ball z')
   }, [])
  return (
    <>
      <div className="app">
        <h1>Movie Land</h1>

        <div className="search">
          <input 
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}
          />
          <img 
          src="/search.png" 
          alt="search" 
          onClick={() => {Searchmovies(searchTerm)}}
          />
        </div>
          
         {
          movies?.length > 0
          ? (
            <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie}/>
            ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No Movies Found</h2>
            </div>
          )
         }


        

      </div>
    </>
  )
}

export default App
