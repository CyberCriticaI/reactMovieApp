import React from 'react'

function MovieDisplay({ movie }) {
  const loaded = () => {
    return(
      <>
      <h1>Now Loaded</h1>
      </>
    )
  }

  const loading = () => {
    return(
      <>
      <h1>Now Loading</h1>
      </>
    )
  }
    return movie? loaded() : loading()
}

export default MovieDisplay