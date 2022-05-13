import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../pages/Home";
import Login from "./Login";
import Auth from "./Auth"; 
import Rooms from "../pages/Rooms"; 
import { useHistory  } from "react-router-dom";


function Router() {
  const [user, setUser] = useState(null);
  let history = useHistory();

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json()
          .then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin() {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
    history.push("/")
  }

  return (
    <Switch>
      <Route exact path="/hotel_rooms">
        <Rooms />
      </Route>
      <Route exact path="/auth">
        <Auth />
      </Route>
      <Route exact path="/login">
        <Login onLogin={handleLogin} />
      </Route>
      <Route exact path="/logout" onLogout={handleLogout}>
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Router;
