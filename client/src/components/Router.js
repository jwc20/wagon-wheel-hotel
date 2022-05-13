import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../pages/Home";
// import Login from "./Login";
import Auth from "./Auth";
import Rooms from "../pages/Rooms";
import Reservations from "../pages/Reservations";

function Router() {
  return (
    <Switch>
      <Route exact path="/reservations">
        <Reservations />
      </Route>
      <Route exact path="/rooms">
        <Rooms />
      </Route>
      <Route exact path="/auth">
        <Auth />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Router;
