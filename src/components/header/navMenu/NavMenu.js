import React from "react";
import { NavLink, withRouter } from "react-router-dom";

import css from "./NavMenu.css";

const NavMenu = props => {
  const { pathname } = props.location;

  return !props.anchorTag ? (
    <NavLink to={props.to} className={pathname === props.to ? css.active : ""}>
      {props.children}
    </NavLink>
  ) : pathname !== props.to ? (
    <NavLink to={props.to} className={props.anchorTag ? css.disabled : ""}>
      {props.children}
    </NavLink>
  ) : (
    <a href={props.anchorTag}>{props.children}</a>
  );
};

export default withRouter(NavMenu);
