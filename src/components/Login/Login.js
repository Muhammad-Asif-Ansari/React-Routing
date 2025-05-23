import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import Links from '../Links'
const Login = () => {
  const navigate = useNavigate();

  const loginHandler = () => {
    localStorage.setItem("user", true)
    navigate("/login")
    // navigate("/about", {
    //   state: { userName: "AliBaba", email: "abc@gmail.com" },
    // });
  };

  return (
    <>
    <Links/>
    <div className="color">
      <div class="login-container ">
        <h2>Login</h2>
        <form>
          <div class="input-group">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" onClick={loginHandler}>
            Login
          </button>
          <p class="signup-link">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;