import React from "react";
import styles from "./Login.module.css";
import { google, facebook } from "../../Assets/index";
import firebase from "firebase/app";
import "firebase/app";
import { auth } from "../../Firebase/Firebase";

const Login = () => {
  const googleSignIn = () => {
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };

  const facebookSignIn = () => {
    auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.loginLeft}>
          <h3 className={styles.loginLogo}>Winka</h3>
          <span className={styles.loginDesc}>
            Connect with friends and the world around you on Winka
          </span>
        </div>
        <div className={styles.loginRight}>
          <div className={styles.loginBox}>
            <input placeholder="Email" className={styles.loginInput} />
            <input placeholder="Password" className={styles.loginInput} />
            <button className={styles.loginButton}>Log In</button>
            <a href="/" className={styles.loginForgot}>
              Forgot Password?
            </a>
            <div className={styles.loginSlash}></div>
            <div className={styles.loginOther}>
              <div className={styles.loginOtherDesc}>Or login with</div>
              <div className={styles.loginGoogle}>
                <button onClick={googleSignIn}>
                  <img src={google} alt="logo" />
                </button>
              </div>
              <div className={styles.loginFacebook}>
                <button onClick={facebookSignIn}>
                  <img src={facebook} alt="logo" />
                </button>
              </div>
            </div>
            <button className={styles.loginRegisterButton}>
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
