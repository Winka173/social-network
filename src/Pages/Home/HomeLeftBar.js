import React from "react";
import "./HomeLeftBar.css";
import { bookmark, friend, group, page, messenger } from "../../Assets/index";

const HomeLeftBar = () => {
  const icons = [
    {
      src: "https://chiasetainguyen.com/upload-file/30_5_b5b100aa86022a.jpg",
      name: "Quốc Nguyễn",
    },
    {
      src: friend,
      name: "Friends",
    },
    {
      src: bookmark,
      name: "Saved",
    },
    {
      src: group,
      name: "Groups",
    },
    {
      src: page,
      name: "Pages",
    },
    {
      src: messenger,
      name: "Messenger",
    },
  ];
  return (
    <div className="left-bar">
      <div className="left-bar-list">
        {icons.map((icon, index) => (
          <button key={index} className="left-bar-item">
            <div className="left-bar-item-wrapper">
              <img
                className="left-bar-item-button-icon"
                src={icon.src}
                alt="friend"
              />
              <span className="left-bar-item-button-desc">{icon.name}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeLeftBar;
