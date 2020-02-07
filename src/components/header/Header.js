import React, { useState, Fragment } from "react";

import css from "./Header.css";

import logo from "../../assets/images/logo.png";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import BackDrop from "../backDrop/BackDrop";

import AnimationTransition from "../../hoc/animationTransition/AnimationTransition";

const Header = props => {
  const [showNavBar, setShowNavBar] = useState(false);

  const navMenuDesktop = (
    <Fragment>
      <div className={css.navLeft}>
        {props.scrollPosition > 1 && (
          <h1 className={css.textLogo}>Dark Fire</h1>
        )}
        <a href="/">Home</a>

        <a href="/">Step into the Covens</a>

        <a href="/">The Heroes</a>

        <a href="/">Eternal Fight</a>
      </div>
      <img
        className={props.scrollPosition > 1 ? css.logoStatic : css.logoRelative}
        src={logo}
        alt="dark fire logo"
        href="/"
      />
      <div className={css.navRight}>
        <a href="/">Join the War</a>

        <a href="/">Trade your Goods</a>

        <a href="/">Hunt or Haunted?</a>

        <a href="/">Pricing</a>
      </div>
    </Fragment>
  );

  const navMenuMobile = (
    <Fragment>
      <AnimationTransition
        in={showNavBar}
        timeout={{ enter: 400, exit: 400 }}
        enter={css.navSlideOpen}
        exit={css.navSlideClose}
      >
        <div className={css.navLeft}>
          <a href="/">Home</a>

          <a href="/">Step into the Covens</a>

          <a href="/">The Heroes</a>

          <a href="/">Eternal Fight</a>
        </div>
      </AnimationTransition>
      <AnimationTransition
        in={showNavBar}
        timeout={{ enter: 400, exit: 400 }}
        enter={css.navSlideOpen}
        exit={css.navSlideClose}
      >
        <div className={css.navRight}>
          <a href="/">Join the War</a>

          <a href="/">Trade your Goods</a>

          <a href="/">Hunt or Haunted?</a>

          <a href="/">Pricing</a>
        </div>
      </AnimationTransition>
    </Fragment>
  );

  const toggleNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  return (
    <header
      className={[
        css.navBar,
        props.scrollPosition > 1 ? css.navPositionStatic : css.navPositionFixed
      ].join(" ")}
    >
      <BackDrop isOpen={showNavBar} onClick={toggleNavBar} />
      <div onClick={toggleNavBar} className={css.toggleBtn}>
        {!showNavBar ? (
          <MenuIcon style={{ fontSize: "2.5rem" }} />
        ) : (
          <CloseIcon style={{ fontSize: "2.5rem" }} />
        )}
        <img
          className={css.logoMobile}
          src={logo}
          alt="dark fire logo"
          href="/"
        />
      </div>
      <div className={css.desktopContainer}>{navMenuDesktop}</div>
      <div className={css.mobileContainer}>{navMenuMobile}</div>
    </header>
  );
};

export default React.memo(Header);
