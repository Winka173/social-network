import React from "react";
import styles from "./ToggleDarkMode.module.css";
import { useSelector, useDispatch } from "react-redux";

const ToggleDarkMode = () => {
  const darkTheme = useSelector((state) => state.darkTheme);
  const dispatch = useDispatch();

  const toggleMode = () => {
    dispatch({ type: "theme" });
  };
  return (
    <React.Fragment>
      <label className={styles.toggle}>
        <input
          checked={darkTheme}
          onChange={toggleMode}
          className={styles.input}
          type="checkbox"
        />
        <div className={styles.fill}></div>
      </label>
    </React.Fragment>
  );
};

export default ToggleDarkMode;
