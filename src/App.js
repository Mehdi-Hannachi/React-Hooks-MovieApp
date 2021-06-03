import React, { useState } from "react";
import "./App.css";

import { MovieDesc } from "./Components/MovieDescription/MovieDesc";

import { Route } from "react-router-dom";
import MovieApp from "./Components/MovieApp/MovieApp";
import { moviesData } from "./Components/Moviesdata";

const App = () => {
  const [moviesList, setMoviesList] = useState(moviesData);

  return (
    <div className="app">
      <Route
        exact
        path="/"
        render={() => (
          <MovieApp moviesList={moviesList} setMoviesList={setMoviesList} />
        )}
      />

      <Route
        exact
        path="/description/:movieId"
        render={(props) => <MovieDesc moviesList={moviesList} {...props} />}
      />
    </div>
  );
};

export default App;
