import React, { Component } from "react";

import MovieList from "../components/MovieList";
import Loader from "../components/Loader";
import getQueryParams from "../utils/getQueryString";
import { fetchMoviesWithQuery } from "../services/Movies-Api";
import Search from "../components/SearchBox";

export default class MoviesViews extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);

    if (query) {
      fetchMoviesWithQuery(query).then((data) =>
        this.setState({ movies: data })
      );
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);
    console.log(prevQuery);
    console.log(nextQuery);

    if (prevQuery !== nextQuery) {
      fetchMoviesWithQuery(nextQuery).then((data) =>
        this.setState({ movies: data })
      );
    }
  }

  // fetchMovies = () => {
  //   fetchMoviesWithQuery().then((query) =>
  //     this.setState({
  //       movies: query,
  //       isLoader: false,
  //     })
  //   );
  // };

  handleChangeQuery = (query) => {
    this.props.history.push({
      ...this.props.location,
      //pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };

  handleChangeQuery = (query) => {
    this.props.history.push({
      ...this.props.location,
      //pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, isLoader } = this.state;
    return (
      <>
        <h2>Search movies</h2>
        <Search onSubmit={this.handleChangeQuery} />
        {isLoader && <Loader />}
        {movies.length > 0 && <MovieList movies={movies} />}
      </>
    );
  }
}
