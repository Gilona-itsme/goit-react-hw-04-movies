import React, { Component, lazy, Suspense } from "react";
import { NavLink, Route, Switch } from "react-router-dom";

import { fetchDetailsMovies } from "../services/Movies-Api";
import Loader from "../components/Loader";
//import CardMovie from "../components/CardMovie";
import Cast from "../components/Cast";
import Reviews from "../components/Reviews";
import routes from "../routes";
import PrimeryButton from "../components/Button/Button";

const CardMovie = lazy(() =>
  import("../components/CardMovie" /* webpackChunkName: "card-movie" */)
);

class MovieDetailsView extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchDetailsMovies(movieId).then((data) => this.setState({ movie: data }));
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
    const { movie } = this.state;
    const { match, location } = this.props;

    return (
      <>
        <PrimeryButton type="button" onClick={this.handleGoBack}>
          Go back
        </PrimeryButton>
        {/* <button type="button" onClick={this.handleGoBack}>
          Go back
        </button> */}
        <Suspense fallback={<Loader />}>
          {movie && <CardMovie {...movie} />}
        </Suspense>

        <h3>Additional information</h3>
        <ul style={{ display: "flex" }}>
          <li style={{ marginLeft: "30px" }}>
            <NavLink
              to={{
                pathname: `${match.url}/cast`,
                state: { from: location?.state?.from || routes.homePage },
              }}
              activeStyle={{
                color: "ButtonShadow",
                borderBottom: "1px solid #000",
              }}
            >
              Cast
            </NavLink>
          </li>
          <li style={{ marginLeft: "30px" }}>
            <NavLink
              to={{
                pathname: `${match.url}/reviews`,
                state: { from: location?.state?.from || routes.homePage },
              }}
              activeStyle={{
                color: "ButtonShadow",
                borderBottom: "1px solid #000",
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
