import React, { Component } from "react";

import MovieList from "../components/MovieList";
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
    const { movies } = this.state;
    return (
      <>
        <Search onSubmit={this.handleChangeQuery} />

        {movies.length > 0 && <MovieList movies={movies} />}
      </>
    );
  }
}
