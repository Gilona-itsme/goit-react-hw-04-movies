import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import routes from "./routes";
import Container from "./components/Container";
import AppBar from "./components/AppBar";
import HomeView from "./Views/HomeView";
import MoviesView from "./Views/MoviesView";
import MoviesDetailsPage from "./Views/MovieDetailsView";

const App = () => {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path={routes.homePage} component={HomeView} />
        <Route path={routes.moviesDetailsPage} component={MoviesDetailsPage} />
        <Route path={routes.moviesPage} component={MoviesView} />
        <Redirect to={routes.homePage} />
      </Switch>
    </Container>
  );
};

export default App;
