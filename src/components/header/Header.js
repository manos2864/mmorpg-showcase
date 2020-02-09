import React, { useState, Fragment } from "react";

import css from "./Header.css";

import logo from "../../assets/images/logo.png";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import BackDrop from "../backDrop/BackDrop";

import NavMenu from "./navMenu/NavMenu";

import AnimationTransition from "../../hoc/animationTransition/AnimationTransition";

const Header = props => {
  const [showNavBar, setShowNavBar] = useState(false);

  const navLeft = [
    <NavMenu key="1" to="/">
      Home
    </NavMenu>,
    <NavMenu key="2" to="/" anchorTag="#covenBlock">
      Step into the Covens
    </NavMenu>,
    <NavMenu key="3" to="/" anchorTag="#classBlock">
      The Heroes
    </NavMenu>,
    <NavMenu key="4" to="/eternal-fight">
      Eternal Fight
    </NavMenu>
  ];

  const navRight = [
    <NavMenu key="5" to="/join-the-war">
      Join the War
    </NavMenu>,
    <NavMenu key="6" to="/trade-your-goods">
      Trade your Goods
    </NavMenu>,
    <NavMenu key="7" to="/hunt-or-haunted">
      Hunt or Haunted?
    </NavMenu>,
    <NavMenu key="8" to="/pricing">
      Pricing
    </NavMenu>
  ];

  const navMenuDesktop = (
    <Fragment>
      <div className={css.navLeft}>
        {props.scrollPosition > 1 && (
          <h1 className={css.textLogo}>Dark Fire</h1>
        )}
        {navLeft}
      </div>
      <img
        className={props.scrollPosition > 1 ? css.logoStatic : css.logoRelative}
        src={logo}
        alt="dark fire logo"
      />
      <div className={css.navRight}>{navRight}</div>
    </Fragment>
  );

  const navMenuMobile = (
    <Fragment>
      <AnimationTransition
        in={showNavBar}
        timeout={{ enter: 400, exit: 400 }}
        enter={css.navSlideOpen}
        exit={css.navSlideClose}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <div className={css.navLeft}>{navLeft}</div>
      </AnimationTransition>
      <AnimationTransition
        in={showNavBar}
        timeout={{ enter: 400, exit: 400 }}
        enter={css.navSlideOpen}
        exit={css.navSlideClose}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <div className={css.navRight}>{navRight}</div>
      </AnimationTransition>
    </Fragment>
  );

  const toggleNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  return (
    <AnimationTransition
      in={props.scrollPosition > 1}
      timeout={{ appear: 700, enter: 700, exit: 700 }}
      enter={css.navGotoTop}
      exit={css.navGotoNormal}
    >
      <header
        className={[
          css.navBar,
          props.scrollPosition > 1
            ? css.navPositionStatic
            : css.navPositionFixed
        ].join(" ")}
      >
        <BackDrop isOpen={showNavBar} onClick={toggleNavBar} />
        <div onClick={toggleNavBar} className={css.toggleBtn}>
          {!showNavBar ? (
            <MenuIcon style={{ fontSize: "2.5rem" }} />
          ) : (
            <CloseIcon style={{ fontSize: "2.5rem" }} />
          )}
          <img className={css.logoMobile} src={logo} alt="dark fire logo" />
        </div>
        <div className={css.desktopContainer}>{navMenuDesktop}</div>
        <div className={css.mobileContainer}>{navMenuMobile}</div>
      </header>
    </AnimationTransition>
  );
};

export default React.memo(Header);
