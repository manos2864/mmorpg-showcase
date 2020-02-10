import React, { Fragment, useState } from "react";
import css from "./UpdateBlock.css";
import UpdateCard from "./updateCard/UpdateCard";
import Button from "../button/Button";
import LazyComponent from "../../hoc/lazyComponent/lazyComponent";

const UpdateBlock = () => {
  const dummyData = [
    {
      url: "/",
      imgURL: "https://images.mmorpg.com/images/heroes/news/52420.jpg",
      shortDesc: "Patch 10.2 - 10/2/2020",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper pellentesque justo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper pellentesque justo"
    },
    {
      url: "/",
      imgURL:
        "https://www.gamingscan.com/wp-content/uploads/2018/11/world-of-warcraft-list-of-expansions.jpg",
      shortDesc: "Patch 10.16 - 9/2/2020",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper pellentesque justo"
    },
    {
      url: "/",
      imgURL:
        "https://img5.goodfon.com/wallpaper/nbig/5/80/world-of-warcraft-shadowlands-lich-king-bolvar-fordragon-wor.jpg",
      shortDesc: "Patch 10.0 - 8/2/2020",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper pellentesque justo"
    },
    {
      url: "/",
      imgURL:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/control/c/c9/Screen_Shot_2019-08-13_at_3.11.07_PM.png",
      shortDesc: "Patch 10.2 - 10/2/2020",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper pellentesque justo"
    },
    {
      url: "/",
      imgURL:
        "https://cl.goliath.com/image/upload/t_tn,f_auto,q_auto,$h_480,$w_895/go/2015/10/New_Details_Emerge_On_The_Elder_Scrolls_V-_Skyrim_Dragonborn_Expansion.jpg",
      shortDesc: "Patch 10.16 - 9/2/2020",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper pellentesque justo"
    },
    {
      url: "/",
      imgURL: "https://www.game-debate.com/api/img/blog/top/17441/1012",
      shortDesc: "Patch 10.0 - 8/2/2020",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper pellentesque justo"
    },
    {
      url: "/",
      imgURL: "https://i.ytimg.com/vi/c5dq7x6AoUE/maxresdefault.jpg",
      shortDesc: "Patch 10.2 - 10/2/2020",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper pellentesque justo"
    },
    {
      url: "/",
      imgURL: "https://jas9589.files.wordpress.com/2014/09/cydaeav4.jpg",
      shortDesc: "Patch 10.16 - 9/2/2020",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper pellentesque justo"
    },
    {
      url: "/",
      imgURL: "https://www.lineage2.com/images/desktop/about/about-classic.jpg",
      shortDesc: "Patch 10.0 - 8/2/2020",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper pellentesque justo"
    }
  ];

  const [getData, setData] = useState(4);

  const increaseData = () => {
    getData > dummyData.length && setData(dummyData.length);
    setData(getData + 4);
  };

  return (
    <Fragment>
      <div className={css.container}>
        <h1>Our News</h1>
        <div className={css.containerUpdate}>
          {dummyData.slice(0, getData).map((e, index) => (
            <LazyComponent key={index} height={500} offset={1}>
              <UpdateCard
                url={e.url}
                imgURL={e.imgURL}
                shortDesc={e.shortDesc.slice(0, 32)}
                desc={e.desc.slice(0, 92)}
              />
            </LazyComponent>
          ))}
        </div>
        {getData < dummyData.length ? (
          <Button Centered Action={increaseData}>
            Load More
          </Button>
        ) : (
          <div className={css.newsText}>
            <p>No More News</p>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default UpdateBlock;
