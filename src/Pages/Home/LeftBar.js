import React from "react";
import styles from "./LeftBar.module.css";
import { bookmark, friend, group, page, messenger } from "../../Assets/index";
import { useAuthContext } from "../../Store/AuthContext";
import Button from "../../UI/Button";

const LeftBar = () => {
  const { user } = useAuthContext();

  // Fixed data, will implement later
  const icons = [
    {
      src: user.photoURL ? user.photoURL : null,
      name: user.displayName,
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
  const shortCuts = [
    {
      src: "https://picsum.photos/46",
      name: "Azur lane",
    },
    {
      src: "https://picsum.photos/12",
      name: "Summoner war",
    },
    {
      src: "https://picsum.photos/22",
      name: "Dragon Blaze",
    },
    {
      src: "https://picsum.photos/33",
      name: "Onmyoji",
    },
    {
      src: "https://picsum.photos/43",
      name: "Genshin impact",
    },
    {
      src: "https://picsum.photos/11",
      name: "Seven deadly sins",
    },
    {
      src: "https://picsum.photos/56",
      name: "Arknight",
    },
    {
      src: "https://picsum.photos/76",
      name: "Epic Seven",
    },
  ];
  return (
    <div className={styles.leftBar}>
      <div className={styles.shortCut}>
        {icons.map((icon, index) => (
          <Button key={index} className={styles.leftBarItem}>
            <div className={styles.leftBarItemWrapper}>
              <img
                className={styles.leftBarItemIcon}
                src={icon.src}
                alt="friend"
              />
              <span className={styles.leftBarItemDesc}>{icon.name}</span>
            </div>
          </Button>
        ))}
      </div>
      <div className={styles.title}>Short cut</div>
      <div className={styles.shortCut}>
        {shortCuts.map((shortCut, index) => (
          <Button key={index} className={styles.leftBarItem}>
            <div className={styles.leftBarItemWrapper}>
              <img
                className={styles.shortCutIcon}
                src={shortCut.src}
                alt="friend"
              />
              <span className={styles.leftBarItemDesc}>{shortCut.name}</span>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default LeftBar;
