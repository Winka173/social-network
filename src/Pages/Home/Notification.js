import React, { useEffect, useState } from "react";
import styles from "./Notification.module.css";
import { CloseOutlined } from "@ant-design/icons";

const Notification = ({ show = true }) => {
  const [showing, setShowing] = useState(false);
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShowing(false);
      }, 5800);
    }
  }, [show]);

  useEffect(() => {
    setShowing(show);
  }, [show]);

  if (showing) {
    return (
      <div className={styles.notification}>
        <div className={styles.title}>
          <span>New Notification</span>
          <button>
            <CloseOutlined className={styles.closeIcon} />
          </button>
        </div>
        <div className={styles.body}>
          <img
            className={styles.rightBarItemIcon}
            src="https://1.bp.blogspot.com/-GFEx6MCOc5U/YQnlwK9rt7I/AAAAAAAAv2Y/5atxGCDP3f04gnoEcPozTfn04478FFFlQCNcBGAsYHQ/s0/avatar-anime.jpg"
            alt="avatar"
          />
          <div>
            <div className={styles.description}>
              <b>Lorem Ipsum</b> s simply dummy text of the printing and type
              setting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
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

export default Notification;
