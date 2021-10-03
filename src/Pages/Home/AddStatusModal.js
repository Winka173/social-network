import styles from "./AddStatusModal.module.css";
import Modal from "../../UI/Modal";
import React, { useState } from "react";
import { useAuthContext } from "../../Store/AuthContext";
import { v4 as uuidv4 } from "uuid";
import { db, storage } from "../../Firebase/Firebase";
import moment from "moment";
import ImageUploading from "react-images-uploading";
import { CloseOutlined } from "@ant-design/icons";
import Picker from "emoji-picker-react";
import { smile, photo, tagFriend, location } from "../../Assets/index";

function AddStatusModal({ isOpen, closeModal }) {
  const { user } = useAuthContext();
  const [status, setStatus] = useState("");
  const [image, setImage] = useState({});

  const handleChangeInput = (event) => {
    setStatus(event.target.value);
  };

  const handleChangeImage = (image) => {
    setImage(image[0]);
    console.log(image[0]);
  };

  const clearImage = () => {
    setImage({});
  };

  const addNewStatus = (event) => {
    const dbRef = db.collection("posts");
    const post = {
      name: user.displayName,
      avatar: user.photoURL ? user.photoURL : null,
      post: status,
      time: moment(new Date()).toString(),
      comments: [],
      likes: [],
    };
    let docId = "";
    dbRef
      .add(post)
      .then((docRef) => {
        docId = docRef.id;
      })
      .then(() => {
        if (Object.keys(image).length !== 0) {
          const fileRef = storage.child(
            `posts/${user.uid}/${docId}/${uuidv4()}`
          );
          return fileRef.put(image.file);
        }
      })
      .then((snapshot) => {
        if (Object.keys(image).length !== 0) {
          return snapshot.ref.getDownloadURL();
        }
        return;
      })
      .then((downloadUrl) => {
        dbRef.doc(docId).update({
          image: downloadUrl ? downloadUrl : null,
        });
      })
      .then(() => {
        setStatus("");
        setImage({});
        closeModal();
      });
  };

  const onEmojiClick = (event, emojiObject) => {
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
        <button onClick={() => closeModal()} className={styles.closeButton}>
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
        {Object.keys(image).length !== 0 ? (
          <div className={styles.chosenImage}>
            <img src={image.dataURL} alt="photoUpdate" />
            <button onClick={() => clearImage()}>
              <CloseOutlined className={styles.closeImage} />
            </button>
          </div>
        ) : (
          ""
        )}
        <div className={styles.postButton}>
          <span>Add to your post</span>
          <div className={styles.buttons}>
            <button>
              <ImageUploading onChange={handleChangeImage}>
                {({ onImageUpload }) => (
                  <div onClick={onImageUpload} className={styles.item}>
                    <img src={photo} alt="photoUpdate" />
                  </div>
                )}
              </ImageUploading>
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
            !status && Object.keys(image).length === 0 ? styles.disable : ""
          }`}
        >
          Post
        </button>
      </div>
    </Modal>
  ) : (
    ""
  );
}

export default AddStatusModal;
