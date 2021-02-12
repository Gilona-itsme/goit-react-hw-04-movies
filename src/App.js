import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import routes from "./routes";
import Container from "./components/Container";
import AppBar from "./components/AppBar";
import Loader from "./components/Loader";
//import NotFoundView from "./Views/NotFoundView";
//import HomeView from "./Views/HomeView";
//import MoviesView from "./Views/MoviesView";
//import MoviesDetailsPage from "./Views/MovieDetailsView";

const HomeView = lazy(() =>
  import("./Views/HomeView" /* webpackChunkName: "home-view" */)
);
const MoviesView = lazy(() =>
  import("./Views/MoviesView" /* webpackChunkName: "movie-view" */)
);
const MovieDetailsView = lazy(() =>
  import(
    "./Views/MovieDetailsView" /* webpackChunkName: "movie-details-view" */
  )
);
const NotFoundView = lazy(() =>
  import("./Views/NotFoundView" /* webpackChunkName: "not-found-view" */)
);

const App = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={routes.homePage} component={HomeView} />
          <Route path={routes.moviesDetailsPage} component={MovieDetailsView} />
          <Route path={routes.moviesPage} component={MoviesView} />
          {/* <Redirect to={routes.homePage} /> */}
          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;
