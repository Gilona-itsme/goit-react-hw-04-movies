import React, { Component } from "react";
import { withRouter } from "react-router-dom";
//import PropTypes from 'prop-types'

import { fetchDetailsCast } from "../../services/Movies-Api";
import ActorCard from "../ActorCard/ActorCard";

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchDetailsCast(movieId).then((actor) =>
      this.setState(
        { cast: actor.cast }
        //() => {
        //   window.scrollTo({
        //     top: document.documentElement.scrollHeight,
        //     behavior: "smooth",
        //   });
        // }
      )
    );
  }

  render() {
    const { cast } = this.state;
    return (
      <>{cast.length > 0 ? <ActorCard cast={cast} /> : <p>Not found</p>}</>
    );
  }
}

export default withRouter(Cast);
