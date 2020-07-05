import React from "react";
import "./App.scss";
import Login from "./components/Auth/Login/Login";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Login} exact />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
