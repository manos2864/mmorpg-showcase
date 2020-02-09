import React from "react";
import css from "./Loading.css";

const Loading = () => {
  return (
    <div className={css.container}>
      <div className={css.loader}>
        <div className={css.face}>
          <div className={css.circle}></div>
        </div>
        <div className={css.face}>
          <div className={css.circle}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
