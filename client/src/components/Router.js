import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "./Login";

function Router() {
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Router;
