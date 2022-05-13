import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

const NavUnlisted = styled.ul`
  display: flex;
  background-color: rgb(37, 150, 190);
  a {
    text-decoration: none;
    padding-left: 50px;
  }
  li {
    color: white;
    margin: 0 0.8rem;
    position: relative;
    list-style: none;
  }
  .current {
    li {
      border-bottom: 2px solid black;
    }
  }
`;

const links = [
  { name: "Home", path: "/" },
  { name: "Rooms", path: "/rooms" },
  { name: "Reviews", path: "/reviews" },
  { name: "Reservations", path: "/reservations" },
  { name: "Signup", path: "/auth" },
  // { name: "Login", path: "/login" },
  // { name: "Logout", path: "/logout" },
];

function NavBar({ onLogin, onLogout, setIsAuthenticated }) {
  let history = useHistory();
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [openModal, setOpenModal] = useState("none");
  const open = () => setOpenModal(true);
  const close = () => setOpenModal("none");

  const [error, setError] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      username: username,
      password,
    };
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((user) => {
            setUser(user);
            setIsAuthenticated(true);
            console.log("Logged in");
          });
        } else {
          res.json().then((json) => setError(json.error));
          console.log(error);
        }
      })
      .then(close);
  }

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      setUser(null);
      setIsAuthenticated(false);
    });
  }

  return (
    <div>
      <NavUnlisted>
        {links.map((link, index) => (
          <NavLink key={index} to={link.path} exact activeClassName="current">
            <li>{link.name}</li>
          </NavLink>
        ))}
        {username ? (
          <div>
            {username} <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <button onClick={() => setOpenModal("login")}>Login</button>
        )}
        {/*
        <button onClick={() => setOpenModal("login")}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        */}

        {user && user.admin ? (
          <h1>
            <NavLink to="/">
              <li>Admin Page</li>
            </NavLink>
          </h1>
        ) : null}
      </NavUnlisted>

      {/* Dialog */}
      <Dialog aria-label="Login form" isOpen={openModal === "login"}>
        <button className="close-button" onClick={close}>
          <span aria-hidden>×</span>
        </button>

        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              onSubmit={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
        <button onClick={() => setOpenModal("none")}>Close</button>
        {error ? <div>{error}</div> : null}
      </Dialog>
    </div>
  );
}

export default NavBar;
