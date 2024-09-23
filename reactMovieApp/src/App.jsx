import { useState, useEffect } from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import Navbar from "./components/navbar";
import MovieCarousel from "./components/MovieCarousel";

function App() {
  const [apiKey, setApiKey] = useState("429af492");
  const [movie, setMovie] = useState(null);
  const [movies, setMovies] = useState([]);

  // Movies array //

  const movieTitles = [
    "Superbad",
    "Inception",
    "The Matrix",
    "Interstellar",
    "The Dark Knight",
    "The Shawshank Redemption",
    "Pulp Fiction",
    "Fight Club",
    "Forrest Gump",
    "The Godfather",
  ];

  const getRandomMovie = () => {
    const randomIndex = Math.floor(Math.random() * movieTitles.length);
    return movieTitles[randomIndex];
  };

  const getMovie = async (searchTerm) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    const data = await response.json();
    console.log(data);
    setMovie(data);
    setMovies((prevMovies) => [...prevMovies, data]); // Add to the movies array
  };

// trying to get random movies to show up in the carousel //

  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      const randomMovie = getRandomMovie();
      getMovie(randomMovie);
    }
  }, []);

  return (
    <>
      <Navbar />
      <MovieCarousel movies={movies} /> {/* Carousel at the top */}
      <Form movieSearch={getMovie} />
      <MovieDisplay movie={movie} />
    </>
  );
}

export default App;