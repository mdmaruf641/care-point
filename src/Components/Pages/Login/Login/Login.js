import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <h1>This is login</h1>
      <Link to="/signUp">Need an Account</Link>
    </div>
  );
};

export default Login;
