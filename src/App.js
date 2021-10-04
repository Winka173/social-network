import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import React, { useEffect } from "react";
import { Home, Login, Messenger } from "./Pages/index";
import { AuthProvider } from "./Store/AuthContext";
import { Provider } from "react-redux";
import store from "./Store/Redux";
import { getToken } from "./Firebase/Firebase";

function App() {
  useEffect(() => {
    getToken().then((data) => console.log(data));
  }, []);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/messenger" component={Messenger} />
          </Switch>
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
