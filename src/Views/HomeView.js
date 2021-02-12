import React, { Component } from "react";
//import { Link } from "react-router-dom";

//import TrendingList from "../components/TrendingList";
import MovieList from "../components/MovieList";
import { fetchMoviesTrending } from "../services/Movies-Api";

export default class HomeViews extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetchMoviesTrending().then((movies) => {
      this.setState({ movies });
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <h2>Trending today</h2>

        {movies.length > 0 && <MovieList movies={movies} />}
        {/* <TrendingList movies={movies} /> */}
      </>
    );
  }
}
