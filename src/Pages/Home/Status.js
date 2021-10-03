import React, { useEffect, useState, useRef } from "react";
import styles from "./Status.module.css";
import { threeDot, likeCount } from "../../Assets/index";
import {
  WechatOutlined,
  LikeOutlined,
  UploadOutlined,
  LikeFilled,
} from "@ant-design/icons";
import Card from "../../UI/Card";
import { getTimeDifferenceFromNow } from "../../Helpers/common";
import { useAuthContext } from "../../Store/AuthContext";
import { db } from "../../Firebase/Firebase";
import moment from "moment";
import Comment from "./Comment";

const Status = ({ post, id }) => {
  const { user } = useAuthContext();
  const [comment, setComment] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const commentInputRef = useRef();

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
    // Enter key
    if (event.keyCode === 13) {
      const dbRef = db.collection("posts").doc(id);
      dbRef
        .update({
          comments: [
            ...post.comments,
            {
              name: user.displayName,
              avatar: user.photoURL ? user.photoURL : null,
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
    <Card>
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
        {post.data ? (
          post.data.includes("mp4") ? (
            <video src={post.data} controls />
          ) : (
            <img src={post.data} alt="feed" />
          )
        ) : (
          ""
        )}
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
          <div
            onClick={() => commentInputRef.current.focus()}
            className={styles.action}
          >
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
          <Comment
            comments={post.comments}
            number={index}
            key={index}
            comment={comment}
            id={id}
          />
        ))}
        <div className={styles.addComment}>
          <img src={user.photoURL ? user.photoURL : null} alt="avatar" />
          <input
            ref={commentInputRef}
            onChange={(event) => handleCommentChange(event.target.value)}
            onKeyDown={addComment}
            placeholder="Write a public comment"
            className={styles.commentInput}
            value={comment}
          />
        </div>
      </div>
    </Card>
  );
};

export default Status;
