import React from "react";
import css from "./UnderConstruction.css";
import { Link } from "react-router-dom";

const UnderConstruction = () => {
  return (
    <div className={css.container}>
      <h1>Under Construction...</h1>
      <p>
        Please check our "<u>{<Link to="/">Home</Link>}</u>" page.
      </p>
    </div>
  );
};

export default UnderConstruction;
