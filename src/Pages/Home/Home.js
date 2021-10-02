import React from "react";
import styles from "./Home.module.css";
import TopBar from "./TopBar";
import LeftBar from "./LeftBar";
import NewFeed from "./NewFeed";
import RightBar from "./RightBar";

const Home = () => {
  return (
    <div className={styles.home}>
      <TopBar />
      <div className={styles.homeWrapper}>
        <div className={styles.leftBar}>
          <LeftBar />
        </div>
        <div className={styles.feed}>
          <NewFeed />
        </div>
        <div className={styles.rightBar}>
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
