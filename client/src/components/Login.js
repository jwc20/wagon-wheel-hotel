import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

function Login({ onLogin }) {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [openModal, setOpenModal] = useState("none");
  const open = () => setOpenModal(true);
  const close = () => setOpenModal("none");

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
      .then((r) => r.json())
      .then((user) => {
        onLogin(user);
        console.log("Logged in");
        history.push("/");
      });
    // Need error checking
  }

  return (
    <div>
      <Dialog aria-label="Login form" isOpen={true}>
        <button className="close-button" onClick={close}>
          <span aria-hidden>×</span>
        </button>

        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
        <button onClick={() => setOpenModal("none")}>Close</button>
      </Dialog>
    </div>
  );
}

export default Login;
