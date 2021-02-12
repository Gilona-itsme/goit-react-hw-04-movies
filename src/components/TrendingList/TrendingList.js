import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import CardMoviePreview from "../CardMoviePreview";

const TrendeingList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(
        ({ id, title, name, popularity, poster_path, release_date }) => (
          <li key={id}>
            <NavLink
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
            {/* <p>{popularity}</p> */}
          </li>
        )
      )}
    </ul>
  );
};

export default withRouter(TrendeingList);
