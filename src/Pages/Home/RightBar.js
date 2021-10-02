import React from "react";
import styles from "./RightBar.module.css";
import { banner } from "../../Assets/index";
import Button from "../../UI/Button";

const RightBar = () => {
  const users = [
    {
      src: "https://chiasetainguyen.com/upload-file/30_5_b5b100aa86022a.jpg",
      name: "Quốc Nguyễn",
      isOnline: true,
    },
    {
      src: "https://picsum.photos/200",
      name: "Đạt Nguyễn",
      isOnline: true,
    },
    {
      src: "https://picsum.photos/12",
      name: "Lê Thành",
      isOnline: true,
    },
    {
      src: "https://picsum.photos/34",
      name: "Hương Lê",
      isOnline: true,
    },
    {
      src: "https://picsum.photos/46",
      name: "Sang Huỳnh",
      isOnline: false,
    },
    {
      src: "https://picsum.photos/78",
      name: "Tòn bú",
      isOnline: false,
    },
    {
      src: "https://picsum.photos/123",
      name: "Bo lùn",
      isOnline: false,
    },
    {
      src: "https://picsum.photos/231",
      name: "Hiển Trần",
      isOnline: false,
    },
    {
      src: "https://picsum.photos/56",
      name: "Ganyu",
      isOnline: false,
    },
    {
      src: "https://picsum.photos/43",
      name: "Xiao",
      isOnline: false,
    },
  ];
  return (
    <div className={styles.rightBar}>
      <img className={styles.banner} src={banner} alt="banner" />
      <div className={styles.title}>Friends</div>
      <div className={styles.friends}>
        {users.map((user, index) => (
          <Button key={index} className={styles.rightBarItem}>
            <div className={styles.rightBarItemWrapper}>
              <img
                className={styles.rightBarItemIcon}
                src={user.src}
                alt="friend"
              />
              <div className={styles.onlineStatus}>
                <div
                  className={`${styles.circle}
                ${user.isOnline ? styles.active : styles.notActive}
              `}
                ></div>
              </div>
              <span className={styles.rightBarItemDesc}>{user.name}</span>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default RightBar;
