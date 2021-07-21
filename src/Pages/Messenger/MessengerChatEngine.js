import React from "react";
import "./MessengerChatEngine.css";
import { plus, logout } from "../../Assets/index";
import { auth } from "../../Firebase/Firebase";
import { useHistory } from "react-router";

const MessengerChatEngine = () => {
  const history = useHistory();
  const handleLogOut = async () => {
    await auth.signOut();
    history.push("/login");
  };

  return (
    <div className="chat">
      <div className="chat-left">
        <div className="chat-left-container">
          <div className="chat-left-wrapper">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/768px-Facebook_logo_36x36.svg.png"
              className="chat-user-avatar"
              alt="user-avatar"
            />
            <h1>Chats</h1>
          </div>
          <div className="chat-left-wrapper">
            <div className="chat-icon">
              <button>
                <img src={plus} alt="new conversation" />
              </button>
            </div>
            <div className="chat-icon">
              <button onClick={handleLogOut}>
                <img src={logout} alt="log out" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="chat-right">Chat</div>
    </div>
  );
};

export default MessengerChatEngine;
