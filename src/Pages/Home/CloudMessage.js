import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { messaging, getToken } from "../../Firebase/Firebase";
import { toggleNotificationActions } from "../../Store/notification-slice";
import { db } from "../../Firebase/Firebase";
import { useAuthContext } from "../../Store/AuthContext";

export const sendCloudMessage = () => {};

function CloudMessage() {
  const dispatch = useDispatch();
  const { user } = useAuthContext();

  const sendToken = useCallback(
    (token) => {
      if (user && user.uid) {
        const dbRef = db.collection("token").doc(user.uid);
        dbRef.set({ token });
      }
    },
    [user]
  );

  useEffect(() => {
    const getTokenMessage = async () => {
      await getToken().then((data) => sendToken(data));
      messaging.onMessage((payload) => {
        dispatch(
          toggleNotificationActions.createNotification({
            userImg: "https://picsum.photos/56",
            userName: payload.notification.title,
            description: payload.notification.body,
          })
        );
      });
    };
    getTokenMessage();
  }, [dispatch, sendToken]);

  return <div></div>;
}

export default CloudMessage;
