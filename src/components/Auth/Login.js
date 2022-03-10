import React from "react";

import classes from "./Auth.module.css";

const Login = () => {
  return (
    <form className={classes.form}>
      <header>
        <h2>Login</h2>
      </header>
      <div className={classes.control}>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default Login;
