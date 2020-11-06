import "./App.css";
import Flights from "./Components/Flights";
import Nav from "./Components/Navbar";
import Hotels from "./Components/Hotels";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/hotels" component={Hotels} />
          <Route path="/flights" component={Flights} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
