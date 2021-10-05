import React from "react";
import styles from "./ToggleDarkMode.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleThemeActions } from "../../Store/theme-slice";

const ToggleDarkMode = () => {
  const dispatch = useDispatch();

  // Access theme state in theme reducer
  const theme = useSelector((state) => state.theme.theme);

  const toggleMode = (event) => {
    if (event.target.checked) {
      // old redux dispatch
      // dispatch({ type: "lightTheme" });
      dispatch(toggleThemeActions.lightTheme());
    } else {
      // old redux dispatch
      // dispatch({ type: "darkTheme" });
      dispatch(toggleThemeActions.darkTheme());
    }
  };
  return (
    <React.Fragment>
      <label className={styles.toggle}>
        <input
          checked={theme === "light"}
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
