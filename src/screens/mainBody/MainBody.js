import React from "react";
import FeatureBlock from "../../components/featureBlock/featureBlock";
import VideoBlock from "../../components/videoBlock/VideoBlock";
import HeroesClasses from "../../components/heroesClasses/HeroesClasses";
import UpdateBlock from "../../components/UpdateBlock/UpdateBlock";

import css from "./MainBody.css";
import { content } from "../../constants/content";

const MainBody = props => {
  return (
    <div className={css.container}>
      <VideoBlock />
      <FeatureBlock
        isDirectionReversed={true}
        idName={"covensSection"}
        blockID={"covenBlock"}
        title={content.featureBlockTitle1}
        desc={content.featureBlockContent1}
        image={content.featureBlockImage1}
        background={content.featureBackgroundContent1}
        containerWidth={"700px"}
        detailComponent={
          <>
            <h1>{content.featureBlockTitleText1}</h1>
            <p>{content.featureBlockDetailText1}</p>
          </>
        }
      />
      <FeatureBlock
        isDirectionReversed={false}
        offset={"25px"}
        idName={"classSection"}
        blockID={"classBlock"}
        title={content.featureBlockTitle2}
        desc={content.featureBlockContent2}
        image={content.featureBlockImage2}
        background={content.featureBackgroundContent2}
        containerWidth={"100%"}
        detailComponent={<HeroesClasses />}
      />
      <UpdateBlock />
    </div>
  );
};

export default React.memo(MainBody);
