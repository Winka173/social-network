import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router";
import { auth, db } from "../Firebase/Firebase";

const AuthContext = React.createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const subscribeStateChanged = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        updateUserData(user);
        history.push("/");
        setLoading(false);
      } else {
        history.push("/login");
        setUser(null);
        setLoading(false);
      }
    });
    return () => subscribeStateChanged();
  }, [user, history]);

  const updateUserData = (user) => {
    const dbRef = db.collection("users").doc(user.uid);
    dbRef.get().then((doc) => {
      if (doc.exists) {
        dbRef.update({
          userName: user.displayName,
          userImage: user.photoURL,
        });
      } else {
        dbRef.set({
          userName: user.displayName,
          userImage: user.photoURL,
        });
      }
    });
  };

  const value = { user };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
