import React, { useState } from "react";
import styles from "./AddStatus.module.css";
import { photo, video, tagFriend } from "../../Assets/index";
import { useAuthContext } from "../../Store/AuthContext";
import ImageUploading from "react-images-uploading";
import Card from "../../UI/Card";
import AddStatusModal from "./AddStatusModal";

const AddStatus = () => {
  const { user } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Card>
      <AddStatusModal closeModal={closeModal} isOpen={isOpen} />
      <div className={styles.feedWrapper}>
        <img src={user.photoURL ? user.photoURL : null} alt="avatar" />
        <button onClick={openModal}>What's on your mind ?</button>
      </div>
      <div className={styles.feed}>
        <div className={styles.feedAction}>
          <div onClick={openModal} className={styles.item}>
            <img src={photo} alt="photoUpdate" />
            <span>Add Photo</span>
          </div>
          <div onClick={openModal} className={styles.item}>
            <img src={video} alt="photoUpdate" />
            <span>Add Video</span>
          </div>
          <div onClick={openModal} className={styles.item}>
            <img src={tagFriend} alt="photoUpdate" />
            <span>Tag Friend</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AddStatus;
