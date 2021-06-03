import React, { useState } from "react";
import "../../App.css";
import { MoviesList } from "../MoviesList/MoviesList";
import { SearchMovie } from "../SearchMovie/SearchMovie";
import { AddMovie } from "../AddMovie/AddMovie";

import Footer from "../Footer/Footer";

const MovieApp = ({ setMoviesList, moviesList }) => {
  const [nameSearch, setNameSearch] = useState("");

  const [ratingSearch, setRatingSearch] = useState(0);

  const addMovie = (newMovie) => {
    setMoviesList([...moviesList, newMovie]);
  };

  return (
    <div className="container-movies">
      <SearchMovie
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />

      <MoviesList
        moviesList={moviesList}
        ratingSearch={ratingSearch}
        nameSearch={nameSearch}
      />

      <div className="addmovie">
        <AddMovie addMovie={addMovie} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default MovieApp;
