import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "../src/Screens/Admin/Admin";
import AskResetPassword from "../src/Screens/Admin/AskResetPassword";
import ResetPassword from "../src/Screens/Admin/ResetPassword";
import CardContainer from "./containers/CardContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/resetpassword/:token/:email"
            component={ResetPassword}
          />
          <Route exact path="/resetpassword" component={AskResetPassword} />
          <Route exact path="/" component={Admin} />
          <Route exact path="/:id" component={CardContainer} />
        </Switch>
      </Router>
    );
  }
}

export default App;
