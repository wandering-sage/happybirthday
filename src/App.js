import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Countdown from "./pages/countdown";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Countdown />
      <Router>
        <Switch>
          <Route exact path="/">
            <Countdown />
          </Route>
          <Route path="/happybirthday/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
