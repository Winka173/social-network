import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import React from "react";
import { Home, Login, Messenger } from "./Pages/index";
import { AuthProvider } from "./Store/AuthContext";
import { Provider } from "react-redux";
import store from "./Store/Redux";
import CloudMessage from "./Pages/Home/CloudMessage";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          <CloudMessage />
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
