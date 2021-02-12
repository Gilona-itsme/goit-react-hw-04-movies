import React from "react";

import { imgUrl, imgPlaceholder } from "../../services/Movies-Api";

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
    <div>
      <h2>
        {title} {release_date}
      </h2>
      <img
        src={(poster_path && imgUrl + poster_path) || imgPlaceholder}
        alt={title || name}
      />

      {/* <p>User Score:{vote_average * 10}%</p> */}
      <p>User Score:{vote_average}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      {genres && (
        <ul>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CardMovie;
