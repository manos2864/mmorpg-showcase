import React from "react";
import FeatureBlock from "../../components/featureBlock/featureBlock";
import VideoBlock from "../../components/videoBlock/VideoBlock";

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
        detailText={<p>{text.featureBlockDetailText1}</p>}
      />
      <FeatureBlock
        isDirectionReversed={false}
        offset={"25px"}
        idName={"classSection"}
        title={text.featureBlockTitle2}
        desc={text.featureBlockContent2}
        image={text.featureBlockImage2}
        background={text.featureBackgroundContent2}
      />
    </div>
  );
};

export default MainBody;
