import React, { useState } from "react";
import styles from "./TopBar.module.css";
import {
  mess,
  notification,
  setting,
  friends,
  groups,
  homeblue,
  pages,
} from "../../Assets/index";
import { useHistory } from "react-router";
import { useAuthContext } from "../../Store/AuthContext";
import Button from "../../UI/Button";
import DropdownMenu from "./DropdownMenu";
import Notification from "./Notification";

const TopBar = () => {
  const { user } = useAuthContext();
  const [showMenu, setShowMenu] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const history = useHistory();
  const navigateMessenger = () => {
    history.push("/messenger");
  };

  return (
    <div className={styles.topBar}>
      <div className={styles.topBarLogo}>
        <button>W</button>
        Winka
      </div>
      <div className={styles.topBarIcon}>
        <div className={`${styles.iconWrapper} ${styles.selected}`}>
          <Button>
            <img src={homeblue} className={styles.icon} alt="home-icon" />
          </Button>
        </div>
        <div className={styles.iconWrapper}>
          <Button>
            <img src={friends} className={styles.icon} alt="friend-icon" />
          </Button>
        </div>
        <div className={styles.iconWrapper}>
          <Button>
            <img src={pages} className={styles.icon} alt="page-icon" />
          </Button>
        </div>
        <div className={styles.iconWrapper}>
          <Button>
            <img src={groups} className={styles.icon} alt="group-icon" />
          </Button>
        </div>
      </div>
      <div className={styles.topBarButton}>
        <button className={styles.userProfile}>
          <img
            src={user.photoURL ? user.photoURL : null}
            className={styles.userAvatar}
            alt="user-avatar"
          />
          <span className={styles.userName}>{user.displayName}</span>
        </button>
        <button onClick={navigateMessenger} className={styles.userButton}>
          <img src={mess} alt="mess" />
          <div className={styles.userNotification}>5</div>
        </button>

        <button
          onClick={() => {
            setShowNotification(true);
          }}
          className={styles.userButton}
        >
          <img src={notification} alt="notification" />
          <div className={styles.userNotification}>5</div>
        </button>
        <Notification show={showNotification} callback={setShowNotification} />

        <div className={styles.dropdownMenu}>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className={styles.userButton}
          >
            <img src={setting} alt="setting" />
          </button>
          {showMenu ? <DropdownMenu /> : ""}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
