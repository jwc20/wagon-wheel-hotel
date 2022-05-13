import { useState, useEffect } from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { useHistory } from "react-router-dom";

function Auth() {
  let history = useHistory();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [login, setLogin] = useState("");
  const [errors, setErrors] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      name,
      username,
      password,
      email,
      phone,
    };
    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        // res.json().then(setCurrentUser);
        console.log(res.json());
        history.push("/")
      } else {
        res.json().then((e) => setErrors(Object.entries(e.error).flat()));
      }
    });
  }

  return (
    <div>
      <h1>Register</h1>
      <div className="register">
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name
              <br />
              <input
                type="text"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label>
              Username
              <br />
              <input
                type="text"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label>
              Password
              <br />
              <input
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label>
              Email
              <br />
              <input
                type="text"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label>
              Phone
              <br />
              <input
                type="text"
                value={phone}
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Auth;
