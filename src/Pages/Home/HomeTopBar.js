import React from "react";
import "./HomeTopBar.css";
import { mess, notification, menu, setting } from "../../Assets/index";
import { useHistory } from "react-router";

const HomeTopBar = () => {
  const history = useHistory();
  const navigateMessenger = () => {
    history.push("/messenger");
  };

  const topBarMenu = [
    {
      src: menu,
      event: navigateMessenger,
      notification: 5,
    },
    {
      src: mess,
      event: navigateMessenger,
      notification: 5,
    },
    {
      src: notification,
      event: navigateMessenger,
      notification: 5,
    },
    {
      src: setting,
      event: navigateMessenger,
      notification: 5,
    },
  ];

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

        {topBarMenu.map((item, index) => (
          <button key={index} onClick={item.event} className="user-button">
            <img src={item.src} alt="menu" />
            <div className="user-notification">{item.notification}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeTopBar;
