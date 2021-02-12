import React from "react";
import PropTypes from "prop-types";

import style from "./CardMoviePreview.module.css";

import {
  imgUrlPreview,
  imgPlaceholderPreview,
} from "../../services/Movies-Api";

const CardMoviePreview = ({ title, name, poster_path }) => {
  return (
    <>
      <h2 className={style.Text}>{title || name}</h2>
      <img
        src={
          (poster_path && imgUrlPreview + poster_path) || imgPlaceholderPreview
        }
        alt={title || name}
      />
    </>
  );
};

CardMoviePreview.protoTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
};

export default CardMoviePreview;
