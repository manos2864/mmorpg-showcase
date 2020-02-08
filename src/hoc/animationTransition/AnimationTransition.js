import React from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

const AnimationTransition = props => {
  return (
    <CSSTransition
      in={props.in}
      timeout={props.timeout}
      mountOnEnter={props.mountOnEnter}
      unmountOnExit={props.unmountOnExit}
      classNames={{
        appear: props.appear,
        enter: props.enter,
        enterActive: props.enterActive,
        exit: props.exit,
        exitActive: props.exitActive
      }}
    >
      {props.children}
    </CSSTransition>
  );
};

export default AnimationTransition;

AnimationTransition.propTypes = {
  in: PropTypes.bool,
  timeout: PropTypes.object,
  enter: PropTypes.string,
  enterActive: PropTypes.string,
  exit: PropTypes.string,
  exitActive: PropTypes.string
};
