import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import { Home, Login, Messenger } from "./Pages/index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/mess" component={Messenger} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
