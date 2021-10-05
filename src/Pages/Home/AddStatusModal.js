import styles from "./AddStatusModal.module.css";
import Modal from "../../UI/Modal";
import React, { useState, useRef } from "react";
import { useAuthContext } from "../../Store/AuthContext";
import { v4 as uuidv4 } from "uuid";
import { db, storage } from "../../Firebase/Firebase";
import moment from "moment";
import { CloseOutlined } from "@ant-design/icons";
import Picker from "emoji-picker-react";
import {
  smile,
  photo,
  tagFriend,
  location,
  video as videoIcon,
} from "../../Assets/index";

function AddStatusModal({ isOpen, setIsOpen }) {
  const { user } = useAuthContext();
  const [status, setStatus] = useState("");
  const [image, setImage] = useState({});
  const [video, setVideo] = useState("");
  const [fileVideo, setFileVideo] = useState({});
  const [fileImage, setFileImage] = useState({});
  const [loading, setLoading] = useState(false);
  const videoInputRef = useRef();
  const imageInputRef = useRef();

  const handleChangeInput = (event) => {
    setStatus(event.target.value);
  };

  const handleChangeImage = (event) => {
    setVideo("");
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setImage(url);
    setFileImage(file);
  };

  const handleChangeVideo = (event) => {
    setImage("");
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setVideo(url);
    setFileVideo(file);
  };

  const openInputVideo = () => {
    videoInputRef.current.value = "";
    videoInputRef.current.click();
  };

  const openInputImage = () => {
    imageInputRef.current.value = "";
    imageInputRef.current.click();
  };

  const addNewStatus = () => {
    setLoading(true);
    const dbRef = db.collection("posts");
    const post = {
      name: user.displayName,
      avatar: user.photoURL ? user.photoURL : null,
      post: status,
      time: moment(new Date()).toString(),
      comments: [],
      likes: [],
      uid: user.uid,
    };
    let docId = "";
    dbRef
      .add(post)
      .then((docRef) => {
        docId = docRef.id;
      })
      .then(() => {
        if (image) {
          const fileRef = storage.child(
            `posts/${user.uid}/${docId}/${uuidv4()}.png`
          );
          return fileRef.put(fileImage);
        }
        if (video) {
          const fileRef = storage.child(
            `posts/${user.uid}/${docId}/${uuidv4()}.mp4`
          );
          return fileRef.put(fileVideo);
        }
      })
      .then((snapshot) => {
        if (image || video) {
          return snapshot.ref.getDownloadURL();
        }
        return;
      })
      .then((downloadUrl) => {
        return dbRef.doc(docId).update({
          data: downloadUrl ? downloadUrl : null,
        });
      })
      .then(() => {
        setLoading(false);
        setStatus("");
        setImage("");
        setVideo("");
        setFileVideo({});
        setFileImage({});
        setIsOpen(false);
      });
  };

  const onEmojiClick = (_, emojiObject) => {
    setStatus((prevStatus) => prevStatus + emojiObject.emoji);
  };

  const showEmoji = () => {
    const emoji = document.querySelector(".emoji-picker-react");
    if (emoji.classList.contains("show")) {
      emoji.classList.remove("show");
    } else {
      emoji.classList.add("show");
    }
  };
  return isOpen ? (
    <Modal>
      <div className={styles.header}>
        <span>Create Post</span>
        <button onClick={() => setIsOpen(false)} className={styles.closeButton}>
          <CloseOutlined className={styles.closeIcon} />
        </button>
      </div>
      <div className={styles.body}>
        <div className={styles.user}>
          <img className={styles.avatar} src={user.photoURL} alt="friend" />
          <div className={styles.userWrapper}>
            <div className={styles.userName}>{user.displayName}</div>
            <button>Friends</button>
          </div>
        </div>
        <textarea
          placeholder="What's on your mind ?"
          className={styles.textArea}
          row="3"
          value={status}
          onChange={handleChangeInput}
        ></textarea>
        <div className={styles.emojiWrapper}>
          <button onClick={showEmoji} className={styles.emoji}>
            <img src={smile} alt="emoji" />
          </button>
        </div>
        <Picker disableSearchBar={true} onEmojiClick={onEmojiClick} />
        {image ? (
          <div className={styles.chosenImage}>
            <img src={image} alt="photoUpdate" />
            <button
              onClick={() => {
                setImage("");
                setFileImage({});
              }}
            >
              <CloseOutlined className={styles.closeImage} />
            </button>
          </div>
        ) : (
          ""
        )}
        {video ? (
          <div className={styles.chosenImage}>
            <video className={styles.video} controls src={video} />
            <button
              onClick={() => {
                setVideo("");
                setFileVideo({});
              }}
            >
              <CloseOutlined className={styles.closeImage} />
            </button>
          </div>
        ) : (
          ""
        )}
        <div className={styles.postButton}>
          <span>Add to your post</span>
          <div className={styles.buttons}>
            <button onClick={openInputImage}>
              <img src={photo} alt="photoInput"></img>
              <input
                ref={imageInputRef}
                className={styles.videoInput}
                type="file"
                onChange={handleChangeImage}
                accept="image/png, image/gif, image/jpeg"
              />
            </button>
            <button onClick={openInputVideo}>
              <img src={videoIcon} alt="emoji"></img>
              <input
                ref={videoInputRef}
                className={styles.videoInput}
                type="file"
                onChange={handleChangeVideo}
                accept=".mov,.mp4"
              />
            </button>
            <button>
              <img src={tagFriend} alt="emoji" />
            </button>
            <button>
              <img src={location} alt="emoji" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <button
          onClick={addNewStatus}
          className={`${styles.addButton} ${
            !status && Object.keys(image).length === 0 && !video
              ? styles.disable
              : ""
          } ${loading ? styles.addButtonLoading : ""}`}
        >
          <span>Post</span>
        </button>
      </div>
    </Modal>
  ) : (
    ""
  );
}

export default AddStatusModal;
