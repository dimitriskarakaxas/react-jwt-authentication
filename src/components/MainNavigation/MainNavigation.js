import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const activeLinkStyles = { borderBottom: "2px solid #fff" };

  return (
    <header className={classes.header}>
      <h1>DK</h1>
      <ul className={classes.navigation}>
        <li>
          <NavLink to="/" style={({ isActive }) => (isActive ? activeLinkStyles : undefined)}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/profile" style={({ isActive }) => (isActive ? activeLinkStyles : undefined)}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" style={({ isActive }) => (isActive ? activeLinkStyles : undefined)}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" style={({ isActive }) => (isActive ? activeLinkStyles : undefined)}>
            Register
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
