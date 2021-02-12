import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";

import { fetchDetailsMovies } from "../services/Movies-Api";
//import routes from "../routes";
import Loader from "../components/Loader";
import CardMovie from "../components/CardMovie";
import Cast from "../components/Cast";
import Reviews from "../components/Reviews";
import routes from "../routes";

class MovieDetailsView extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    this.setState({
      isLoader: true,
    });

    fetchDetailsMovies(movieId).then((data) =>
      this.setState({ movie: data, isLoader: false })
    );
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    // if (location.state && location.state.from) {
    //   return history.push(location.state.from);
    // }
    // history.push(routes.homePage);

    history.push(location?.state?.from || routes.homePage);
  };

  render() {
    const { isLoader, movie } = this.state;
    const { match, location } = this.props;

    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        {isLoader && <Loader />}
        {movie && <CardMovie {...movie} />}
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/cast`,
                state: { from: location.state.from },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/reviews`,
                state: { from: location.state.from },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>

        <Switch>
          <Route
            path={`${match.path}/cast`}
            render={(props) => <Cast movieId={match.params.movieId} />}
          />
          <Route
            path={`${match.path}/reviews`}
            render={(props) => <Reviews movieId={match.params.movieId} />}
          />
        </Switch>
      </>
    );
  }
}

export default MovieDetailsView;
