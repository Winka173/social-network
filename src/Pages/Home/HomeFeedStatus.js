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
import moment from "moment";
import HomeFeedStatusComment from "./HomeFeedStatusComment";

const HomeFeedStatus = ({ post, id }) => {
  const { user } = useAuthContext();
  const [comment, setComment] = useState("");
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

  const addComment = (event) => {
    if (event.keyCode === 13) {
      const dbRef = db.collection("posts").doc(id);
      dbRef
        .update({
          comments: [
            ...post.comments,
            {
              name: user.displayName,
              avatar: user.photoURL,
              comment: comment,
              time: moment(new Date()).toString(),
              likes: [],
              replys: [],
            },
          ],
        })
        .then(() => {
          setComment("");
        });
    }
  };

  const handleCommentChange = (input) => {
    setComment(input);
  };

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
        {post.comments.map((comment, index) => (
          <HomeFeedStatusComment
            comments={post.comments}
            number={index}
            key={index}
            comment={comment}
            id={id}
          />
        ))}
        <div className={styles.addComment}>
          <img src={user.photoURL} alt="avatar" />
          <input
            onChange={(event) => handleCommentChange(event.target.value)}
            onKeyDown={addComment}
            placeholder="Write a public comment"
            className={styles.commentInput}
            value={comment}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeFeedStatus;
