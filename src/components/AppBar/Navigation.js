import React from "react";
import { NavLink } from "react-router-dom";

import routes from "../../routes";

import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={style.Nav}>
      <NavLink
        exact
        to={routes.homePage}
        className={style.NavLink}
        activeClassName={style.NavLink_active}
      >
        Home Page
      </NavLink>

      <NavLink
        to={routes.moviesPage}
        className={style.NavLink}
        activeClassName={style.NavLink_active}
      >
        Movies Page
      </NavLink>
    </nav>
  );
};

export default Navigation;
