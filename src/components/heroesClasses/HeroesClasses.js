import React from "react";
import css from "./HeroesClasses.css";

import fighter from "../../assets/images/classIcons/fighter.png";
import knave from "../../assets/images/classIcons/knave.png";
import apprentice from "../../assets/images/classIcons/apprentice.png";

import Button from "../button/Button";

import { content } from "../../constants/content";

import LazyComponent from "../../hoc/lazyComponent/lazyComponent";

const HeroesClasses = props => {
  const clickHandler = e => {
    e.stopPropagation();
  };

  return (
    <LazyComponent height={500} offset={1}>
      <div className={css.classesContainer}>
        <div className={css.card} id={css.fighter}>
          <img src={fighter} alt={"fighter class"} />
          <h1>{content.classBlockFighterTitle}</h1>
          <p>{content.classBlockFighterDesc}</p>
          <Button Action={clickHandler} Centered={true}>
            Read More
          </Button>
        </div>
        <div className={css.card}>
          <img src={knave} alt={"knave class"} />
          <h1>{content.classBlockKnaveTitle}</h1>
          <p>{content.classBlockKnaveDesc}</p>
          <Button Action={clickHandler} Centered={true}>
            Read More
          </Button>
        </div>
        <div className={css.card} id={css.apprentice}>
          <img src={apprentice} alt={"apprentice class"} />
          <h1>{content.classBlockApprenticeTitle}</h1>
          <p>{content.classBlockApprenticeDesc}</p>
          <Button Action={clickHandler} Centered={true}>
            Read More
          </Button>
        </div>
      </div>
    </LazyComponent>
  );
};

export default HeroesClasses;
