import React from "react";
import PropTypes from "prop-types";

const ReviewCard = ({ reviews }) => {
  return (
    <>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p> "{content}"</p>
          </li>
        ))}
      </ul>
    </>
  );
};

ReviewCard.protoTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ReviewCard;
