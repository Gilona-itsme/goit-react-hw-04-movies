import React from "react";
import PropTypes from "prop-types";
import { imgActor, imgActorPlaceholder } from "../../services/Movies-Api";
import style from "./ActorCard.module.css";

const ActorCard = ({ cast }) => {
  return (
    <>
      <ul className={style.card}>
        {cast.map(({ id, name, profile_path, character }) => (
          <li key={id} className={style.card__item}>
            <img
              src={
                (profile_path && imgActor + profile_path) || imgActorPlaceholder
              }
              alt={name}
            />

            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

ActorCard.protoTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ActorCard;
