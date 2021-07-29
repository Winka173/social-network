import React from "react";
import styles from "./HomeFeed.module.css";
import HomeFeedStatus from "./HomeFeedStatus";
import HomeFeedNew from "./HomeFeedNew";

const HomeFeed = () => {
  return (
    <div className={styles}>
      <HomeFeedNew />
      <HomeFeedStatus />
    </div>
  );
};

export default HomeFeed;
