import React from "react";
import PropTypes from "prop-types";

import { imgUrl, imgPlaceholder } from "../../services/Movies-Api";
import style from "./CardMovie.module.css";

const CardMovie = ({
  title,
  name,
  genres,
  overview,
  vote_average,
  poster_path,
  release_date,
}) => {
  return (
    <div className={style.card}>
      <img
        src={(poster_path && imgUrl + poster_path) || imgPlaceholder}
        alt={title || name}
        className={style.image}
      />
      <div className={style.about}>
        <h2 className={style.title}>
          {title} {release_date && release_date.slice(0, 4)}
        </h2>

        <p>User Score: {vote_average * 10}%</p>
        {/* <p>User Score: {vote_average}</p> */}
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        {genres && (
          <ul className={style.genres}>
            {genres.map(({ id, name }) => (
              <li key={id} className={style.genres__item}>
                {name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

CardMovie.protoTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
};

export default CardMovie;
