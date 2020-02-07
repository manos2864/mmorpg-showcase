import React from "react";
import css from "./Button.css";
import PropTypes from "prop-types";

const Button = props => {
  return (
    <div
      className={[
        css.containerButton,
        props.Centered && css.centered,
        props.Right && css.right,
        props.rightResponsive && css.rightResponsive,
        props.leftResponsive && css.leftResponsive
      ].join(" ")}
      onClick={props.Action}
    >
      <a href={props.moveTo}>{props.children}</a>
    </div>
  );
};

export default React.memo(Button);

Button.propTypes = {
  Centered: PropTypes.bool,
  Right: PropTypes.bool,
  rightResponsive: PropTypes.bool,
  leftResponsive: PropTypes.bool,
  Action: PropTypes.func,
  moveTo: PropTypes.string
};
