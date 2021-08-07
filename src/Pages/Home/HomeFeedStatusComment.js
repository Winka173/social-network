import React, { useEffect, useState } from "react";
import styles from "./HomeFeedStatusComment.module.css";
import { likeCount } from "../../Assets/index";
import { getTimeDifferenceFromNow } from "../../Helpers/common";
import { useAuthContext } from "../../Store/AuthContext";
import { db } from "../../Firebase/Firebase";

const HomeFeedStatusComment = ({ number, comment, id, comments }) => {
  const { user } = useAuthContext();
  const [isLiked, setIsLiked] = useState(false);

  const setLikeComment = () => {
    const dbRef = db.collection("posts").doc(id);
    let editComment = {};
    if (!isLiked) {
      editComment = { ...comment };
      editComment.likes = [...comment.likes, user.uid];
    } else {
      editComment = { ...comment };
      editComment.likes = comment.likes.filter((like) => like !== user.uid);
    }
    const editComments = [...comments];
    editComments[number] = editComment;

    dbRef.update({
      comments: editComments,
    });
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    comment.likes && comment.likes.some((like) => like === user.uid)
      ? setIsLiked(true)
      : setIsLiked(false);
  }, [comment.likes, user]);

  if (!comment) return;
  return (
    <div className={styles.commentWrapper}>
      <img src={comment.avatar} alt="avatar" />
      <div>
        <div className={styles.commentBox}>
          <div className={styles.commentTitle}>{comment.name}</div>
          <div className={styles.commentDesc}>{comment.comment}</div>
          <div
            className={`${styles.commentEmotion} ${
              comment.likes.length > 0 ? styles.active : ""
            }`}
          >
            <img src={likeCount} alt="like-count" />
            <span>{comment.likes.length}</span>
          </div>
        </div>
        <div className={styles.commentReact}>
          <span onClick={setLikeComment}>Like</span>
          <span> . </span>
          <span>Reply</span>
          <span> . </span>
          <span>{getTimeDifferenceFromNow(comment.time)}</span>
        </div>
      </div>
    </div>
  );
};

export default HomeFeedStatusComment;
