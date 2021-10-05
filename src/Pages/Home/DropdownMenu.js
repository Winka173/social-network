import styles from "./DropdownMenu.module.css";
import Dropdown from "../../UI/Dropdown";
import { useAuthContext } from "../../Store/AuthContext";
import {
  rightarrow,
  gear,
  question,
  moon,
  logoutpng,
} from "../../Assets/index";
import { auth } from "../../Firebase/Firebase";

const DropdownMenu = () => {
  const { user } = useAuthContext();

  const handleLogOut = async () => {
    await auth.signOut();
  };

  return (
    <Dropdown>
      <button className={styles.user}>
        <img src={user.photoURL ? user.photoURL : null} alt="user-avatar" />
        <div>
          <span>{user.displayName}</span>
          <p>See your profile</p>
        </div>
      </button>
      <div className={styles.border}></div>
      <button className={styles.button}>
        <div className={styles.wrapper}>
          <div>
            <img className={styles.icon} src={gear} alt="gear" />
          </div>
          <span> Setting & Privacy</span>
          <img className={styles.icon} src={rightarrow} alt="mess" />
        </div>
      </button>
      <button className={styles.button}>
        <div className={styles.wrapper}>
          <div>
            <img className={styles.icon} src={question} alt="gear" />
          </div>
          <span> Help & Support</span>
          <img className={styles.icon} src={rightarrow} alt="mess" />
        </div>
      </button>
      <button className={styles.button}>
        <div className={styles.wrapper}>
          <div>
            <img className={styles.icon} src={moon} alt="gear" />
          </div>
          <span> Display & Accessibility</span>
          <img className={styles.icon} src={rightarrow} alt="mess" />
        </div>
      </button>
      <button onClick={handleLogOut} className={styles.button}>
        <div className={styles.wrapper}>
          <div>
            <img className={styles.icon} src={logoutpng} alt="gear" />
          </div>
          <span> Log out</span>
        </div>
      </button>
    </Dropdown>
  );
};

export default DropdownMenu;
