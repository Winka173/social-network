import React, { useEffect, useState, useRef } from "react";
import "./Messenger.css";

import { auth } from "../../Firebase/Firebase";
import { useHistory } from "react-router";
import { ChatEngine } from "react-chat-engine";
import { useAuthContext } from "../../Store/AuthContext";
import axios from "axios";

const Messenger = () => {
  const history = useHistory();
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(true);

  // const handleLogOut = async () => {
  //   await auth.signOut();
  //   history.push("/login");
  // };

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  useEffect(() => {
    if (!user) {
      history.push("/login");
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID,
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formData = new FormData();
        formData.append("email", user.email);
        formData.append("username", user.email);
        formData.append("secret", user.uid);

        getFile(user.photoURL).then((avatar) => {
          formData.append("avatar", avatar, avatar.name);

          axios
            .post("https://api.chatengine.io/users", formData, {
              headers: {
                "private-key": process.env.REACT_APP_CHAT_ENGINE_PRIVATE_KEY,
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, history]);

  if (!user || loading) return "Loading...";
  return (
    <div className="chat">
      <div className="chat-right">
        <ChatEngine
          height="100vh"
          projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
          userName={user.email}
          userSecret={user.uid}
        />
      </div>
    </div>
  );
};

export default Messenger;
