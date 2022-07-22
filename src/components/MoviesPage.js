import React from "react";
//useRouteMatch hook is used to identify a matched route from React Router
import { Route,useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";
function MoviesPage({ movies }) {
//useRouteMatch returns a special object with information about the
//currently matched route
  const match = useRouteMatch();
  console.log(match)
  return (
    <div>
      <MoviesList movies={movies} />
      {/*Using the current Url from the `match` object
      as a part of the path;
      this will generate a url like "movies/:movieId" */}
      <Route exact path={match.url}>
        <h3>Choose a movie from the list above</h3>
      </Route>
      <Route path={`${match.url}/:movieId`}>
        <MovieShow movies={movies}/>
      </Route>
    </div>
  );
}
export default MoviesPage;

