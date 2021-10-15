import React, { useEffect, useState } from "react";
import styles from "./Notification.module.css";
import { CloseOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import reactDom from "react-dom";
import { toggleNotificationActions } from "../../Store/notification-slice";

let init = true;

const NotificationOverlay = () => {
  const [show, setShow] = useState(false);
  const notification = useSelector((state) => state.notification.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (init) {
      init = false;
      return;
    }
    if (Object.keys(notification).length !== 0) {
      setShow(true);
    }
  }, [notification]);

  const onAnimationEnd = (event) => {
    if (event.animationName.includes("fadeout")) {
      closeNotification();
    }
  };

  const closeNotification = () => {
    setShow(false);
    dispatch(toggleNotificationActions.clearNotification());
  };

  if (show) {
    return (
      <div onAnimationEnd={onAnimationEnd} className={styles.notification}>
        <div className={styles.title}>
          <span>New Notification</span>
          <button onClick={closeNotification}>
            <CloseOutlined className={styles.closeIcon} />
          </button>
        </div>
        <div className={styles.body}>
          <img
            className={styles.rightBarItemIcon}
            src={notification.userImg || ""}
            alt="avatar"
          />
          <div>
            <div className={styles.description}>
              <b>{notification.userName || ""}</b>{" "}
              {notification.description || ""}
            </div>
            <div className={styles.time}>a few seconds ago</div>
          </div>
          <span className={styles.dot}></span>
        </div>
      </div>
    );
  }
  return "";
};

const Notification = () => {
  return (
    <React.Fragment>
      {reactDom.createPortal(
        <NotificationOverlay />,
        document.getElementById("notification-root")
      )}
    </React.Fragment>
  );
};

export default Notification;
