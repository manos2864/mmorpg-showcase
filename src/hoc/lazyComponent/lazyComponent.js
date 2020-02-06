import React from "react";
import LazyLoad from "react-lazyload";

const LazyComponent = props => {
  return (
    <LazyLoad height={props.height} offset={props.offset} once>
      {props.children}
    </LazyLoad>
  );
};

export default LazyComponent;
