import React from "react";
import styles from "./HomeFeedStatus.module.css";
import { threeDot } from "../../Assets/index";

const HomeFeedStatus = () => {
  return (
    <div className={styles.feed}>
      <div className={styles.feedUser}>
        <div className={styles.userWrapper}>
          <div className={styles.userAvatar}>
            <img
              src="https://chiasetainguyen.com/upload-file/30_5_b5b100aa86022a.jpg"
              alt="avatar"
            />
          </div>
          <div>
            <div className={styles.userName}>Quốc Nguyễn</div>
            <div className={styles.userTime}>2s</div>
          </div>
        </div>
        <div className={styles.userMore}>
          <img src={threeDot} alt="setting" />
        </div>
      </div>
      <div className={styles.feedDescription}></div>
      <div className={styles.feedImage}></div>
      <div className={styles.feedEmotion}></div>
      <div className={styles.feedAction}></div>
    </div>
  );
};

export default HomeFeedStatus;
