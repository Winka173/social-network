import React from "react";
import "./HomeTopBar.css";
import { mess, notification, menu } from "../../Assets/index";
import { useHistory } from "react-router";

const HomeTopBar = () => {
  const history = useHistory();
  const navigateMessenger = () => {
    history.push("/messenger");
  };
  return (
    <div className="top-bar">
      <div className="top-bar-logo">
        <button>W</button>
        Winka
      </div>
      <div className="top-bar-search">
        <input placeholder="Search" className="search-input" />
      </div>
      <div className="top-bar-button">
        <button className="user-profile">
          <img
            src="https://chiasetainguyen.com/upload-file/30_5_b5b100aa86022a.jpg"
            className="user-avatar"
            alt="user-avatar"
          />
          <span className="user-name">Quốc Nguyễn</span>
        </button>

        <button className="user-button">
          <img src={menu} alt="menu" />
          <div className="user-notification">2</div>
        </button>
        <button onClick={navigateMessenger} className="user-button">
          <img src={mess} alt="logo" />
          <div className="user-notification">2</div>
        </button>
        <button className="user-button">
          <img src={notification} alt="notification" />
          <div className="user-notification">2</div>
        </button>
      </div>
    </div>
  );
};

export default HomeTopBar;
