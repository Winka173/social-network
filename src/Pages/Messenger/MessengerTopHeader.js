import React from "react";
import styles from "./MessengerTopHeader.module.css";
import { auth } from "../../Firebase/Firebase";
import { useHistory } from "react-router";

export default function MessengerTopHeader() {
  const history = useHistory();

  const handleLogOut = async () => {
    await auth.signOut();
  };
  const navigateHome = () => {
    history.push("/");
  };

  return (
    <div className={styles.topHeader}>
      <div onClick={navigateHome} className={styles.topHeaderLogo}>
        Winka
      </div>
      <div className={styles.topHeaderButton}>
        <button onClick={handleLogOut}>Log out</button>
      </div>
    </div>
  );
}
