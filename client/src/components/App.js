import NavBar from "./NavBar";
import Router from "./Router";
import Auth from "./Auth";
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

    // fetch("/productions")
    //   .then((res) => res.json())
    //   .then(setProductions);
  }, []);

  // if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;
  if (!isAuthenticated) {
    console.log("please log in")
  }


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
