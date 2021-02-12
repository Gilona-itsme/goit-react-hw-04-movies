import React from "react";
import { Link } from "react-router-dom";
import routes from "../routes";

const styles = {
  container: {
    textAling: "center",
  },
  status: { fontSize: 96, marginBottom: 16 },
};

const NotFoundView = () => (
  <div style={styles.container}>
    <h1 style={styles.status}>404</h1>
    {/* <img /> */}
    <p>
      Oops, it seems, you are lost. There`s{" "}
      <Link to={routes.homePage}>a link</Link> to the Home Page
    </p>
  </div>
);

export default NotFoundView;
