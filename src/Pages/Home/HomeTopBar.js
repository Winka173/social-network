import React from "react";
import styles from "./HomeTopBar.module.css";
import { mess, notification, menu, setting } from "../../Assets/index";
import { useHistory } from "react-router";
import { useAuthContext } from "../../Store/AuthContext";

const HomeTopBar = () => {
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
      <div className={styles.topBarSearch}>
        <input placeholder="Search" className={styles.searchInput} />
      </div>
      <div className={styles.topBarButton}>
        <button className={styles.userProfile}>
          <img
            src={user.photoURL}
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

export default HomeTopBar;
