import React, { Component } from "react";
import PrimeryButton from "../Button/Button";
import { toast } from "react-toastify";

import style from "./SearchBox.module.css";

export default class Search extends Component {
  state = {
    query: "",
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    if (this.state.query.trim() === "") {
      toast.dark("Enter text, please");
      return;
    }
    this.setState({ query: "" });
  };

  render() {
    const { query } = this.state;
    return (
      <>
        <h2 className={style.Text}>Search movies</h2>
        <form className={style.Form} onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={this.handleChange}
            className={style.Input}
          />
          <PrimeryButton>Search</PrimeryButton>

          {/* <button type="submit" className={style.Button}>
            Search
          </button> */}
        </form>
      </>
    );
  }
}
