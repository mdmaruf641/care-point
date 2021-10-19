import React from "react";

import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";
import google from "../../../../images/google.png";
import useAuth from "./../../../../Hooks/UseAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div>
      <Container>
        <div className="form-inner">
          <h1>Please Login</h1>

          {/* email login items */}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          {/* Google Sign in item */}
          <button className="google-btn mt-3" onClick={signInUsingGoogle}>
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
