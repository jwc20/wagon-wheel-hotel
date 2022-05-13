import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
    font-size: 2.3rem;
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
  { name: "Rooms", path: "/hotel_rooms" },
  { name: "Reviews", path: "/reviews" },
  { name: "Reservation", path: "/reserve" },
  { name: "Signup", path: "/auth" },
  { name: "Login", path: "/login" },
  { name: "Logout", path: "/logout" },

];

function NavBar({ onLogout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <NavUnlisted>
      {links.map((link, index) => (
        <NavLink key={index} to={link.path} exact activeClassName="current">
          <li>{link.name}</li>
        </NavLink>
      ))}
      <button onClick={handleLogout}>Logout</button>
    </NavUnlisted>
  );
}

export default NavBar;
