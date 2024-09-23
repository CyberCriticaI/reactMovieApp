import { useState, useEffect } from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import Navbar from "./components/navbar";

function App() {
  const [apiKey, setApiKey] = useState("429af492");
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    const data = await response.json();
    console.log(data);
    setMovie(data);
  };

  useEffect(() => {
    getMovie("Superbad");
  }, []);

  return (
    <>
      <Navbar /> {Navbar}
      <Form movieSearch={getMovie} />
      <MovieDisplay movie={movie} />
    </>
  );
}

export default App;