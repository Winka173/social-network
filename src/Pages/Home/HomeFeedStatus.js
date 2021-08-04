import React from "react";
import styles from "./HomeFeedStatus.module.css";
import { threeDot, likeCount } from "../../Assets/index";
import {
  WechatOutlined,
  LikeOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const HomeFeedStatus = () => {
  const comments = [
    {
      userAvatar:
        "https://chiasetainguyen.com/upload-file/30_5_b5b100aa86022a.jpg",
      userName: "Quốc Nguyễn",
      userComment:
        "I spent the last few minutes doing stupid dances in front of afks in b1 dressed as luther lol",
    },
    {
      userAvatar:
        "https://allnewplayers.com/wp-content/uploads/2021/01/Genshin-Impact-Ganyu-Talents-Constellations-and-Ascension-Materials.jpg",
      userName: "Ganbu",
      userComment: "I love ganyu",
    },
  ];
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
            <div className={styles.userTime}>2h</div>
          </div>
        </div>
        <div className={styles.userMore}>
          <img src={threeDot} alt="setting" />
        </div>
      </div>
      <div className={styles.feedDescription}>
        Ganyu (Chinese: 甘雨 Gānyǔ, "Sweet Rain") is a playable Cryo character
        in Genshin Impact. She serves as an emissary and secretary for the Liyue
        Qixing.
      </div>
      <div className={styles.feedImage}>
        <img
          src="https://cdn.tgdd.vn/2021/01/campaign/icon-640x360-8.jpg"
          alt="feed"
        />
      </div>
      <div className={styles.feedEmotion}>
        <div className={styles.emotion}>
          <img src={likeCount} alt="like-count" />
          <span>12</span>
        </div>
        <div className={styles.comment}>13 Comments</div>
      </div>
      <div className={styles.feedAction}>
        <div className={styles.feedActionWrapper}>
          <div className={styles.action}>
            <LikeOutlined className={styles.emotionIcon} />
            <span className={styles.emotionTitle}>Like</span>
          </div>
          <div className={styles.action}>
            <WechatOutlined className={styles.emotionIcon} />
            <span className={styles.emotionTitle}>Comment</span>
          </div>
          <div className={styles.action}>
            <UploadOutlined className={styles.emotionIcon} />
            <span className={styles.emotionTitle}>Share</span>
          </div>
        </div>
      </div>
      <div className={styles.feedComment}>
        <div className={styles.addComment}></div>
        {comments.map((item, index) => (
          <div key={index} className={styles.commentWrapper}>
            <img src={item.userAvatar} alt="avatar" />
            <div>
              <div className={styles.commentBox}>
                <div className={styles.commentTitle}>{item.userName}</div>
                <div className={styles.commentDesc}>{item.userComment}</div>
              </div>
              <div className={styles.commentReact}>
                <span>Like</span>
                <span> . </span>
                <span>Reply</span>
                <span> . </span>
                <span>12m</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFeedStatus;
