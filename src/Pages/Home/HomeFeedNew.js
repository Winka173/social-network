import React, { useState } from "react";
import styles from "./HomeFeedNew.module.css";
import { photo, video, tagFriend } from "../../Assets/index";
import { db, storage } from "../../Firebase/Firebase";
import { useAuthContext } from "../../Store/AuthContext";
import ImageUploading from "react-images-uploading";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

const HomeFeedNew = () => {
  const { user } = useAuthContext();
  const [status, setStatus] = useState("");
  const [image, setImage] = useState({});

  const addNewFeed = (event) => {
    if (event.keyCode === 13) {
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
        });
    }
  };

  const handleChangeInput = (input) => {
    setStatus(input);
  };

  const handleChangeImage = (image) => {
    setImage(image[0]);
  };

  return (
    <div className={styles.feed}>
      <div className={styles.feedWrapper}>
        <img src={user.photoURL ? user.photoURL : null} alt="avatar" />
        <input
          onKeyDown={addNewFeed}
          value={status}
          onChange={(event) => handleChangeInput(event.target.value)}
          placeholder="What's on your mind ?"
        />
      </div>
      <div className={styles.feedAction}>
        <ImageUploading onChange={handleChangeImage}>
          {({ onImageUpload }) => (
            <div onClick={onImageUpload} className={styles.item}>
              <img src={photo} alt="photoUpdate" />
              <span>Add photo</span>
            </div>
          )}
        </ImageUploading>
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
