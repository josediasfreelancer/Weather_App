import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Navbar from "./components/layout/Navbar";
import Weathers from "./components/weather/Weathers";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Weathers} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
