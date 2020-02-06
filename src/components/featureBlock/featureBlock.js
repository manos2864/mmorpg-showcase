import React, { Fragment, useState } from "react";
import css from "./featureBlock.css";
import Button from "../button/Button";
import { Animated } from "react-animated-css";
import LazyComponent from "../../hoc/lazyComponent/lazyComponent";

const FeatureBlock = props => {
  const [isAction, setisAction] = useState(false);

  const actionHandler = () => {
    setisAction(!isAction);
  };

  const actionBlock = <p>{props.detailText}</p>;

  return (
    <Fragment>
      <div
        className={css.container}
        style={{
          backgroundImage: `url(${props.background})`,
          flexDirection: props.isDirectionReversed ? "row-reverse" : "row"
        }}
      >
        <LazyComponent height={500} offset={1}>
          <img src={props.image} alt={props.title} />
        </LazyComponent>

        <div className={css.textContainer}>
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
          <Button
            Action={actionHandler}
            moveTo={`#${props.idName}`}
            rightResponsive={props.isDirectionReversed ? true : false}
          >
            Learn More
          </Button>
        </div>
      </div>
      {isAction && (
        <div
          className={css.slideBlock}
          onClick={actionHandler}
          id={props.idName}
        >
          <Animated
            animationIn="fadeIn"
            animationInDuration="4000"
            isVisible={isAction}
          >
            {actionBlock}
          </Animated>
        </div>
      )}
    </Fragment>
  );
};

export default FeatureBlock;
