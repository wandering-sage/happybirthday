import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Countdown from "./pages/countdown";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/happybirthday">
            <Countdown />
          </Route>
          <Route exact path="/happybirthday/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
