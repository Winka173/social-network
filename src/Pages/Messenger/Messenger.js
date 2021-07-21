import React, { useEffect, useState, useCallback } from "react";
import "./Messenger.css";
import { ChatEngine } from "react-chat-engine";
import { useAuthContext } from "../../Store/AuthContext";
import axios from "axios";
import MessengerTopHeader from "./MessengerTopHeader";

const Messenger = () => {
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(true);

  const getFile = useCallback(
    () => async (url) => {
      const response = await fetch(url);
      const data = await response.blob();

      return new File([data], `${user.email}.jpg`, { type: "image/jpeg" });
    },
    [user]
  );

  useEffect(() => {
    if (!user) {
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
  }, [user, getFile]);

  if (!user || loading) return "Loading...";
  return (
    <div className="messenger">
      <MessengerTopHeader />
      <ChatEngine
        offset={7}
        height="calc(100vh - 100px)"
        projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Messenger;
