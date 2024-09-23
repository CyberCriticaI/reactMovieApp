import React from 'react';

function MovieDisplay({ movie }) {
  const loaded = () => {
    return (
      <div className="movie-card">
        <img
          className="movie-poster"
          src={movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"}
          alt={movie.Title}
          // className="movie-poster"
        />
        <h2 className="movie-title">{movie.Title}</h2>
        <div className="movie-details">
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Rating:</strong> {movie.imdbRating}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
        </div>
      </div>
    );
  };

  const loading = () => {
    return (
      <div className="loading">
        <h1>Now Loading...</h1>
      </div>
    );
  };

  return movie ? loaded() : loading();
}

export default MovieDisplay;