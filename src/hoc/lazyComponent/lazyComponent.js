import React from "react";
import LazyLoad from "react-lazyload";
import PropTypes from "prop-types";

const LazyComponent = props => {
  return (
    <LazyLoad height={props.height} offset={props.offset} once>
      {props.children}
    </LazyLoad>
  );
};

export default LazyComponent;

LazyComponent.propTypes = {
  LazyComponent: PropTypes.number,
  offset: PropTypes.number
};
