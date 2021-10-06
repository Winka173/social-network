import React, { useEffect, useState } from "react";
import styles from "./Notification.module.css";
import { CloseOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useAuthContext } from "../../Store/AuthContext";
import reactDom from "react-dom";

let init = true;

const NotificationOverlay = () => {
  const [show, setShow] = useState(false);
  const notification = useSelector((state) => state.notification.notification);
  const dispatch = useDispatch();
  const { user } = useAuthContext();

  useEffect(() => {
    if (init) {
      init = false;
      return;
    }
    let timer;
    if (notification) {
      setShow(true);

      timer = setTimeout(() => {
        setShow(false);
      }, 4800);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [notification, dispatch, user.uid]);

  if (show) {
    return (
      <div className={styles.notification}>
        <div className={styles.title}>
          <span>New Notification</span>
          <button onClick={() => setShow(false)}>
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
