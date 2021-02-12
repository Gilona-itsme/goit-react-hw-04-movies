import React from "react";
import PropTypes from "prop-types";
import { NavLink, withRouter } from "react-router-dom";

import CardMoviePreview from "../CardMoviePreview";

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

MovieList.protoTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
    })
  ).isRequired,
  match: PropTypes.object,
  location: PropTypes.object,
};

export default withRouter(MovieList);
