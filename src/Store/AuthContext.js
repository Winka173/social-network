import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router";
import { auth } from "../Firebase/Firebase";

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

  const value = { user };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
