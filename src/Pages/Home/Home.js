import React from "react";
import styles from "./Home.module.css";
import HomeTopBar from "./HomeTopBar";
import HomeLeftBar from "./HomeLeftBar";
import HomeFeed from "./HomeFeed";
import HomeRightBar from "./HomeRightBar";

const Home = () => {
  return (
    <div className={styles.home}>
      <HomeTopBar />
      <div className={styles.homeWrapper}>
        <div className={styles.leftBar}>
          <HomeLeftBar />
        </div>
        <div className={styles.feed}>
          <HomeFeed />
        </div>
        <div className={styles.rightBar}>
          <HomeRightBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
