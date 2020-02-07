import React from "react";
import background from "../../assets/video/videoBackground.mp4";
import css from "./VideoBlock.css";
import Button from "../button/Button";

import { content } from "../../constants/content";

const VideoBlock = () => {
  return (
    <div className={css.container}>
      <div className={css.textContainer}>
        <h1>{content.videoBlockTitle}</h1>
        <p>{content.videoBlockContent}</p>
        <Button leftResponsive={true}>Register Now</Button>
      </div>
      <video
        className={css.videoBg}
        loop="loop"
        muted="muted"
        autoPlay="autoplay"
        playsInline="playsinline"
      >
        <source src={background} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default React.memo(VideoBlock);
