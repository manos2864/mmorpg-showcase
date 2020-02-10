import React from "react";
import css from "./UpdateCard.css";
import { Link } from "react-router-dom";

const UpdateCard = props => {
  return (
    <Link to={props.url}>
      <div
        className={css.container}
        style={{
          backgroundImage: `url(${props.imgURL})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className={css.insideContainer}>
          <p className={css.shortDesc}>{props.shortDesc}</p>
          <p className={css.desc}>{props.desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default UpdateCard;
