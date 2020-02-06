import React from "react";
import css from "./BackDrop.css";

const BackDrop = props => {
  return (
    props.isOpen && (
      <div className={css.container} onClick={props.onClick}></div>
    )
  );
};

export default BackDrop;
