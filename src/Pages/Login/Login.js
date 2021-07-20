import React from "react";
import "./Login.css";
import google from "../../Assets/google.svg";
import facebook from "../../Assets/facebook.svg";

const Login = () => {
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
                <img src={google} className="App-logo" alt="logo" />
              </div>
              <div className="login-facebook">
                <img src={facebook} className="App-logo" alt="logo" />
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
