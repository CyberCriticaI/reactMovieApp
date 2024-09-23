import React, { useState } from 'react';
import './MovieCarousel.css';

const MovieCarousel = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const moviesToShow = 5;

  const nextMovie = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(movies.length / moviesToShow));
  };

  const prevMovie = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(movies.length / moviesToShow)) % Math.ceil(movies.length / moviesToShow));
  };

// If statement to return nothing if no movies are available to display in the app //

  if (!movies.length) return null;

  return (
    <div className="carousel">
      <button className="carousel-button left" onClick={prevMovie}>&lt;</button>
      <div className="carousel-content">
        {movies.slice(currentIndex * moviesToShow, currentIndex * moviesToShow + moviesToShow).map((movie) => (
          <div key={movie.imdbID} className="movie-item">
            <img
              className="movie-poster"
              src={movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"}
              alt={movie.Title}
            />
            <h2 className="movie-title">{movie.Title}</h2>
            <div className="movie-details">
              <p><strong>Year:</strong> {movie.Year}</p>
              <p><strong>Rating:</strong> {movie.imdbRating}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button right" onClick={nextMovie}>&gt;</button>
    </div>
  );
};

export default MovieCarousel;