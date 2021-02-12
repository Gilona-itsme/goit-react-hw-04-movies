import React from "react";
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

export default ActorCard;
