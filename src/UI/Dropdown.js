import styles from "./Dropdown.module.css";

const Dropdown = ({ children }) => {
  return <div className={styles.dropdown}>{children}</div>;
};

export default Dropdown;
