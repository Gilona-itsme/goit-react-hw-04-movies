import React, { Component } from "react";
//import { Link } from "react-router-dom";

import TrendingList from "../components/TrendingList";
import MovieList from "../components/MovieList";
import Loader from "../components/Loader";

import { fetchMoviesTrending } from "../services/Movies-Api";

export default class HomeViews extends Component {
  state = {
    movies: [],
    isLoader: false,
    error: null,
  };

  componentDidMount() {
    this.setState({
      isLoader: true,
    });
    fetchMoviesTrending().then((movies) => {
      this.setState({ movies, isLoader: false });
    });
  }

  render() {
    const { movies, isLoader } = this.state;
    return (
      <>
        <h2>Trending today</h2>
        {isLoader && <Loader />}
        {movies.length > 0 && <MovieList movies={movies} />}
        {/* <TrendingList movies={movies} /> */}
      </>
    );
  }
}
