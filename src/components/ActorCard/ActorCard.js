import React from "react";
import { imgActor, imgActorPlaceholder } from "../../services/Movies-Api";

const ActorCard = ({ cast }) => {
  return (
    <>
      <ul>
        {cast.map(({ id, name, profile_path, character }) => (
          <li key={id}>
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
