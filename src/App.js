import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import { Home, Login, Messenger } from "./Pages/index";
import { AuthProvider } from "./Store/AuthContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/messenger" component={Messenger} />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
