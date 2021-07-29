import React from "react";
import "./Home.css";
import HomeTopBar from "./HomeTopBar";
import HomeLeftBar from "./HomeLeftBar";
import HomeFeed from "./HomeFeed";
import HomeRightBar from "./HomeRightBar";

const Home = () => {
  return (
    <div className="home">
      <HomeTopBar />
      <div className="home-wrapper">
        <div className="left-bar">
          <HomeLeftBar />
        </div>
        <div className="feed">
          <HomeFeed />
        </div>
        <div className="right-bar">
          <HomeRightBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
