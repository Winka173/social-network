import React from "react";
import styles from "./HomeLeftBar.module.css";
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
    <div className={styles.leftBar}>
      {icons.map((icon, index) => (
        <button key={index} className={styles.leftBarItem}>
          <div className={styles.leftBarItemWrapper}>
            <img
              className={styles.leftBarItemIcon}
              src={icon.src}
              alt="friend"
            />
            <span className={styles.leftBarItemDesc}>{icon.name}</span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default HomeLeftBar;
