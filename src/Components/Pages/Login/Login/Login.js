import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../../../Hooks/UseFirebase";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useFirebase();
  return (
    <div>
      <h1>This is login</h1>
      <button onClick={signInUsingGoogle}>Sign in With Google</button>
      <Link to="/signUp">Need an Account</Link>
    </div>
  );
};

export default Login;
