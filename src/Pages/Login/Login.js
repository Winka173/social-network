import React from "react";
import "./Login.css";
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
    <div className="login">
      <div className="login-wrapper container">
        <div className="login-left">
          <h3 className="login-logo">Winka</h3>
          <span className="login-desc">
            Connect with friends and the world around you on Winka
          </span>
        </div>
        <div className="login-right">
          <div className="login-box">
            <input placeholder="Email" className="login-input" />
            <input placeholder="Password" className="login-input" />
            <button className="login-button">Log In</button>
            <a href="/" className="login-forgot">
              Forgot Password?
            </a>
            <div className="login-slash"></div>
            <div className="login-other">
              <div className="login-other-desc">Or login with</div>
              <div className="login-google">
                <button onClick={googleSignIn}>
                  <img src={google} alt="logo" />
                </button>
              </div>
              <div className="login-facebook">
                <button onClick={facebookSignIn}>
                  <img src={facebook} alt="logo" />
                </button>
              </div>
            </div>
            <button className="login-register-button">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
