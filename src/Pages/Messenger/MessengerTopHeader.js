import React from "react";
import "./MessengerTopHeader.css";
import { auth } from "../../Firebase/Firebase";

export default function MessengerTopHeader() {
  const handleLogOut = async () => {
    await auth.signOut();
  };

  return (
    <div className="top-header">
      <div className="top-header-logo">Winka</div>
      <div className="top-header-button">
        <button onClick={handleLogOut}>Log out</button>
      </div>
    </div>
  );
}
