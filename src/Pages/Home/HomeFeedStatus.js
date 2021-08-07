import React, { useEffect, useState } from "react";
import styles from "./HomeFeedStatus.module.css";
import { threeDot, likeCount } from "../../Assets/index";
import {
  WechatOutlined,
  LikeOutlined,
  UploadOutlined,
  LikeFilled,
} from "@ant-design/icons";
import { getTimeDifferenceFromNow } from "../../Helpers/common";
import { useAuthContext } from "../../Store/AuthContext";
import { db } from "../../Firebase/Firebase";

const HomeFeedStatus = ({ post, id }) => {
  const { user } = useAuthContext();
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

  const [isLiked, setIsLiked] = useState(false);

  const setlikeStatus = () => {
    const dbRef = db.collection("posts").doc(id);
    !isLiked
      ? dbRef.update({
          likes: [...post.likes, user.uid],
        })
      : dbRef.update({
          likes: post.likes.filter((like) => like !== user.uid),
        });
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    post.likes && post.likes.some((like) => like === user.uid)
      ? setIsLiked(true)
      : setIsLiked(false);
  }, [post.likes, user]);

  if (!post) return;
  return (
    <div className={styles.feed}>
      <div className={styles.feedUser}>
        <div className={styles.userWrapper}>
          <div className={styles.userAvatar}>
            <img src={post.avatar} alt="avatar" />
          </div>
          <div>
            <div className={styles.userName}>{post.name}</div>
            <div className={styles.userTime}>
              {getTimeDifferenceFromNow(post.time)}
            </div>
          </div>
        </div>
        <div className={styles.userMore}>
          <img src={threeDot} alt="setting" />
        </div>
      </div>
      <div className={styles.feedDescription}>{post.post}</div>
      <div className={styles.feedImage}>
        {post.image ? <img src={post.image} alt="feed" /> : ""}
      </div>
      <div className={styles.feedEmotion}>
        <div className={styles.emotion}>
          <img src={likeCount} alt="like-count" />
          <span>{post.likes.length}</span>
        </div>
        <div className={styles.comment}>{post.comments.length} Comments</div>
      </div>
      <div className={styles.feedAction}>
        <div className={styles.feedActionWrapper}>
          <div
            onClick={setlikeStatus}
            className={`${styles.action} ${isLiked ? styles.active : ""}`}
          >
            {!isLiked ? (
              <LikeOutlined className={styles.emotionIcon} />
            ) : (
              <LikeFilled className={styles.emotionIcon} />
            )}
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
        <div className={styles.addComment}>
          <img src={comments[0].userAvatar} alt="avatar" />
          <input
            placeholder="Write a public comment"
            className={styles.commentInput}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeFeedStatus;
