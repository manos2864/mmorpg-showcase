import React, { useState, Fragment } from "react";
import css from "./Header.css";

import logo from "../../assets/images/logo.png";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import { Animated } from "react-animated-css";

const Header = props => {
  const [showNavBar, setShowNavBar] = useState(false);

  const navMenu = (
    <Fragment>
      <div
        className={[css.navLeft, showNavBar ? css.show : css.hide].join(" ")}
      >
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
      <div
        className={[css.navRight, showNavBar ? css.show : css.hide].join(" ")}
      >
        <a href="/">Join the War</a>

        <a href="/">Trade your Goods</a>

        <a href="/">Hunt or Haunted?</a>

        <a href="/">Pricing</a>
      </div>
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
      {!showNavBar ? (
        navMenu
      ) : (
        <div className={css.mobileContainer}>
          <Animated animationIn="fadeInLeft" isVisible={showNavBar}>
            {navMenu}
          </Animated>
        </div>
      )}
    </header>
  );
};

export default Header;
