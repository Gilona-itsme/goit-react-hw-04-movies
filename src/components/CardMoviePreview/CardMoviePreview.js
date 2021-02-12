import React from "react";

import {
  imgUrlPreview,
  imgPlaceholderPreview,
} from "../../services/Movies-Api";

const CardMoviePreview = ({ id, title, name, releaseDate, poster_path }) => {
  //const date = releaseDate.slice(0, 4);

  return (
    <>
      <h2>
        {title || name}
        {/* {`${releaseDate.slice(0, 4)}`} */}
      </h2>
      <img
        src={
          (poster_path && imgUrlPreview + poster_path) || imgPlaceholderPreview
        }
        alt={title || name}
      />
    </>
  );
};

export default CardMoviePreview;
