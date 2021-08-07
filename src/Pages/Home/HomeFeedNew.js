import React, { useState } from "react";
import styles from "./HomeFeedNew.module.css";
import { photo, video, tagFriend } from "../../Assets/index";
import { db, storage } from "../../Firebase/Firebase";
import { useAuthContext } from "../../Store/AuthContext";
import ImageUploading from "react-images-uploading";
import { v4 as uuidv4 } from "uuid";

const HomeFeedNew = () => {
  const { user } = useAuthContext();
  const [status, setStatus] = useState("");
  const [image, setImage] = useState({});

  const addNewFeed = (event) => {
    if (event.keyCode === 13) {
      const dbRef = db.collection("posts");
      const post = {
        name: user.displayName,
        avatar: user.photoURL,
        post: status,
        time: Date().toLocaleString(),
        comments: [],
        likes: 0,
      };
      let docId = "";
      dbRef
        .add(post)
        .then((docRef) => {
          docId = docRef.id;
        })
        .then(() => {
          const fileRef = storage.child(
            `posts/${user.uid}/${docId}/${uuidv4()}`
          );
          return fileRef.put(image.file);
        })
        .then((snapshot) => {
          return snapshot.ref.getDownloadURL();
        })
        .then((downloadUrl) => {
          dbRef.doc(docId).update({
            image: downloadUrl,
          });
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
        <img
          src="https://chiasetainguyen.com/upload-file/30_5_b5b100aa86022a.jpg"
          alt="avatar"
        />
        <input
          onKeyDown={addNewFeed}
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
