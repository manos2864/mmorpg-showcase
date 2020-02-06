import React from "react";
import FeatureBlock from "../../components/featureBlock/featureBlock";
import VideoBlock from "../../components/videoBlock/VideoBlock";

import noVideo from "../../assets/images/noVideo.JPG";
import css from "./MainBody.css";
import { text } from "../../constants/text";

const MainBody = () => {
  return (
    <div className={css.container}>
      <VideoBlock />
      <FeatureBlock
        isDirectionReversed={true}
        idName={"covensSection"}
        title={text.featureBlockTitle1}
        desc={text.featureBlockContent1}
        image={text.featureBlockImage1}
        background={text.featureBackgroundContent1}
        detailText={text.featureBlockDetailText1}
      />
      <FeatureBlock
        isDirectionReversed={false}
        idName={"classSection"}
        title={text.featureBlockTitle2}
        desc={text.featureBlockContent2}
        image={text.featureBlockImage2}
        background={text.featureBackgroundContent2}
      />
      <FeatureBlock
        isDirectionReversed={true}
        idName={"covensSection1"}
        title={text.featureBlockTitle1}
        desc={text.featureBlockContent1}
        image={noVideo}
        background={text.featureBackgroundContent1}
        detailText={text.featureBlockDetailText1}
      />
    </div>
  );
};

export default MainBody;
