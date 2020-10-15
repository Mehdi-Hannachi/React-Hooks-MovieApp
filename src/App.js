import React, { useState } from "react";
import "./App.css";
import { MoviesList } from "./Components/MoviesList/MoviesList";
import { SearchMovie } from "./Components/SearchMovie/SearchMovie";
import { moviesData } from "./Components/Moviesdata";
import { AddMovie } from "./Components/AddMovie/AddMovie";

import Footer from "./Components/Footer/Footer";

const App = () => {
  const [moviesList, setMoviesList] = useState(moviesData);
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

export default App;
