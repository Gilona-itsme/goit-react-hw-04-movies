import React from "react";

import { imgUrl, imgPlaceholder } from "../../services/Movies-Api";
import style from "./CardMovie.module.css";

const CardMovie = ({
  id,
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

export default CardMovie;
