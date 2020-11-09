import "./App.css";
import Flights from "./Components/Flights";
import Nav from "./Components/Navbar";
import Hotels from "./Components/Hotels";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Home />
        <Switch>
          <Route path="/hotels" exact component={Hotels} />
          <Route path="/flights" exact component={Flights} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
