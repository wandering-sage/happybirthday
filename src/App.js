import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Countdown from "./pages/countdown";
import Home from "./pages/home";
import Meme from "./pages/meme";
import Wish from "./pages/wish";
import Letter from "./pages/letter";
import Us from "./pages/us";

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
          <Route exact path="/happybirthday/meme">
            <Meme />
          </Route>
          <Route exact path="/happybirthday/wish">
            <Wish />
          </Route>
          <Route exact path="/happybirthday/letter">
            <Letter />
          </Route>
          <Route exact path="/happybirthday/us">
            <Us />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
