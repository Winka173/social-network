import React from "react";
import styles from "./ToggleDarkMode.module.css";

const ToggleDarkMode = () => {
  return (
    <React.Fragment>
      <label class={styles.toggle} for="myToggle">
        <input
          class={styles["toggle__input"]}
          name=""
          type="checkbox"
          id="myToggle"
        />
        <div class={styles["toggle__fill"]}></div>
      </label>
    </React.Fragment>
  );
};

export default ToggleDarkMode;
