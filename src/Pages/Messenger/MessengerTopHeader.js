import React from "react";
import "./MessengerTopHeader.css";
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
    <div className="top-header">
      <div onClick={navigateHome} className="top-header-logo">
        Winka
      </div>
      <div className="top-header-button">
        <button onClick={handleLogOut}>Log out</button>
      </div>
    </div>
  );
}
