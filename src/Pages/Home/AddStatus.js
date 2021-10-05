import React, { useState } from "react";
import styles from "./AddStatus.module.css";
import { photo, video, tagFriend } from "../../Assets/index";
import { useAuthContext } from "../../Store/AuthContext";
import Card from "../../UI/Card";
import AddStatusModal from "./AddStatusModal";

const AddStatus = () => {
  const { user } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card>
      <AddStatusModal setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className={styles.feedWrapper}>
        <img src={user.photoURL ? user.photoURL : null} alt="avatar" />
        <button onClick={() => setIsOpen(true)}>What's on your mind ?</button>
      </div>
      <div className={styles.feed}>
        <div className={styles.feedAction}>
          <div onClick={() => setIsOpen(true)} className={styles.item}>
            <img src={photo} alt="photoUpdate" />
            <span>Add Photo</span>
          </div>
          <div onClick={() => setIsOpen(true)} className={styles.item}>
            <img src={video} alt="photoUpdate" />
            <span>Add Video</span>
          </div>
          <div onClick={() => setIsOpen(true)} className={styles.item}>
            <img src={tagFriend} alt="photoUpdate" />
            <span>Tag Friend</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AddStatus;
