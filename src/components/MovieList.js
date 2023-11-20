import React from "react";

function MovieList(props) {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m3">
          <img src={movie.Poster} alt="movie" />
          <div
            className="overlay d-flex align-items-center justify-content-center"
            onClick={() => props.handleFavouritesClick(movie)}
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
}

export default MovieList;
