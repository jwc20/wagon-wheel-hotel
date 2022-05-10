import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Login from "./Login";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
