import NavBar from "./NavBar";
import Router from "./Router";
import Auth from "./Auth";
import Home from "../pages/Home";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
    });
  }, []);

  function handleLogin() {
    setUser(user);
    setIsAuthenticated(true);
  }

  function handleLogout() {
    setUser(null);
    setIsAuthenticated(false);
  }


  return (
    <div className="App">
      <NavBar setIsAuthenticated={setIsAuthenticated} user={user} onLogin={handleLogin} onLogout={handleLogout} />
      <Router />
    </div>
  );
}

export default App;
