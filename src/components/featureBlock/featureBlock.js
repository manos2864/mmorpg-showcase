import React, { Fragment, useState } from "react";
import css from "./featureBlock.css";
import Button from "../button/Button";
import LazyComponent from "../../hoc/lazyComponent/lazyComponent";

import AnimationTransition from "../../hoc/animationTransition/AnimationTransition";

const FeatureBlock = props => {
  const [isAction, setisAction] = useState(false);

  const actionHandler = () => {
    setisAction(!isAction);
  };

  const actionBlock = (
    <div className={css.actionInsideBlock}>{props.detailText}</div>
  );

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
          <img
            style={{ top: props.offset }}
            src={props.image}
            alt={props.title}
          />
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

      <AnimationTransition
        in={isAction}
        timeout={{ enter: 700, exit: 700 }}
        enter={css.actionBlockOpen}
        exit={css.actionBlockClose}
      >
        <div
          className={css.actionBlock}
          onClick={actionHandler}
          id={props.idName}
        >
          {actionBlock}
        </div>
      </AnimationTransition>
    </Fragment>
  );
};

export default FeatureBlock;
