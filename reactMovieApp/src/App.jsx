import { useState, useEffect } from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
// --------->

function App() {
  // const [apiKey, setApiKey] = useState("f5068e7");
  const [apiKey, setApiKey] = useState("429af492");
  const [movie, setMovie] = useState(null);
  //  > Keep Track of searched Movie

  // const apiKey = "98e3fb1f"
  const getMovie = async (searchTerm) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // 1. Fetch the Data
    const data = await response.json();
    // 2. Convert the data to json
    console.log(data);
    // 3. Save the retrieved data to state
    setMovie(data);
  };
  //  > Function to request movies and save them to state


  useEffect(()=>{
    getMovie("Superbad")
  },[])

  // getMovie("Superbad")

  return (
    <>
      <Form movieSearch={getMovie} />

      <MovieDisplay movie={movie} />
    </>
  );
}

export default App;