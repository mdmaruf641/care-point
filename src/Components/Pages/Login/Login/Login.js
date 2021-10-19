import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";
import google from "../../../../images/google.png";
import useAuth from "./../../../../Hooks/UseAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div>
      <Container>
        <div className="login-inner">
          <h1>Please Login</h1>
          <button className="google-btn" onClick={signInUsingGoogle}>
            <span>
              <img src={google} alt="" />
            </span>
            Sign in With Google
          </button>
          <p>
            Need an Account? Please{" "}
            <Link className="signUp-link" to="/signUp">
              Sign Up
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Login;
