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
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        history.push("/messenger");
      } else {
        history.push("/login");
      }
    });
  }, [user, history]);

  const userValue = { user };

  return (
    <AuthContext.Provider value={userValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
