import React, { Component } from "react";
//import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom";

import { fetchReviews } from "../../services/Movies-Api";
import ReviewCard from "../ReviewCard";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchReviews(movieId).then((review) =>
      this.setState({ reviews: review.results })
    );
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        {reviews.length > 0 ? (
          <ReviewCard reviews={reviews} />
        ) : (
          <p>We don`t have any reviews for this movie</p>
        )}
      </>
    );
  }
}

export default withRouter(Reviews);
