import React from "react";
import styles from "./HomeFeedNew.module.css";
import { photo, video, tagFriend } from "../../Assets/index";

const HomeFeedNew = () => {
  return (
    <div className={styles.feed}>
      <div className={styles.feedWrapper}>
        <img
          src="https://chiasetainguyen.com/upload-file/30_5_b5b100aa86022a.jpg"
          alt="avatar"
        />
        <input placeholder="What's on your mind ?" />
      </div>
      <div className={styles.feedAction}>
        <div className={styles.item}>
          <img src={photo} alt="photoUpdate" />
          <span>Add photo</span>
        </div>
        <div className={styles.item}>
          <img src={video} alt="photoUpdate" />
          <span>Add Video</span>
        </div>
        <div className={styles.item}>
          <img src={tagFriend} alt="photoUpdate" />
          <span>Tag Friend</span>
        </div>
      </div>
    </div>
  );
};

export default HomeFeedNew;
