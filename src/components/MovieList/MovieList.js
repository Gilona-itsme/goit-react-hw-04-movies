import React from "react";
import { NavLink, withRouter } from "react-router-dom";

import CardMoviePreview from "../CardMoviePreview";
//import routes from "../../routes";

import style from "./MovieList.module.css";

const MovieList = ({ movies, match, location }) => {
  return (
    <ul className={style.CardMovie}>
      {movies.map(({ id, title, name, poster_path, release_date }) => {
        return (
          <li key={id} className={style.CardMovie__item}>
            <NavLink
              className={style.NavLink}
              activeClassName={style.NavLink_active}
              // to={{
              //   pathname: `${match.url}/${id}`,
              //   state: { from: location },
              // }}
              to={{
                pathname: `/movies/${id}`,
                state: { from: location },
              }}
            >
              <CardMoviePreview
                title={title}
                name={name}
                poster_path={poster_path}
                release_date={release_date}
              />
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default withRouter(MovieList);
