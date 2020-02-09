import React from "react";
import css from "./Footer.css";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import RedditIcon from "@material-ui/icons/Reddit";

const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <div className={css.container}>
      <div className={css.top}>
        <h2>Follow us:</h2>
        <FacebookIcon />
        <TwitterIcon />
        <YouTubeIcon />
        <RedditIcon />
      </div>
      <div className={css.left}>
        <ul>
          <li>Lore</li>
          <li>Fighting</li>
          <li>Forums</li>
          <li>World</li>
          <li>Economy</li>
        </ul>
      </div>
      <div className={css.right}>
        <ul>
          <li>Jobs</li>
          <li>Contact Us</li>
          <li>Privacy Policies</li>
          <li>Terms & Conditions</li>
          <li>Consumer Information</li>
        </ul>
      </div>

      <div className={css.bottom}>
        <p>
          ©{Year} Dark Fire, Inc. All rights reserved. All trademarks referenced
          herein are the properties of their respective owners.
        </p>
      </div>
    </div>
  );
};

export default React.memo(Footer);
