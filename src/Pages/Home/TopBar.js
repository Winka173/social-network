import React from "react";
import styles from "./TopBar.module.css";
import {
  mess,
  notification,
  menu,
  setting,
  friends,
  groups,
  homeblue,
  pages,
} from "../../Assets/index";
import { useHistory } from "react-router";
import { useAuthContext } from "../../Store/AuthContext";
import Button from "../../UI/Button";

const TopBar = () => {
  const { user } = useAuthContext();
  const history = useHistory();
  const navigateMessenger = () => {
    history.push("/messenger");
  };

  const topBarMenu = [
    {
      src: menu,
      event: navigateMessenger,
      notification: 5,
    },
    {
      src: mess,
      event: navigateMessenger,
      notification: 5,
    },
    {
      src: notification,
      event: navigateMessenger,
      notification: 5,
    },
    {
      src: setting,
      event: navigateMessenger,
      notification: 5,
    },
  ];

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

        {topBarMenu.map((item, index) => (
          <button
            key={index}
            onClick={item.event}
            className={styles.userButton}
          >
            <img src={item.src} alt="menu" />
            <div className={styles.userNotification}>{item.notification}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
