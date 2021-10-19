import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const auth = getAuth();
  // state for name
  const [name, setName] = useState("");
  // state for email
  const [email, setEmail] = useState("");
  // state for password
  const [password, setPassword] = useState("");
  // state for handle password length
  const [error, setError] = useState("");

  // handle name on Change
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  // handle email on Change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // handle password on Change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // for register button
  const handleRegister = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password Must be at least 6 characters long");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Password must contain 2 upper case ");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
    console.log(name, email, password);
  };

  return (
    <div>
      <Container>
        <div className="form-inner">
          <h1>Please Register</h1>

          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                onChange={handleNameChange}
                type="text"
                required
                placeholder="Enter Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                onChange={handleEmailChange}
                type="email"
                required
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                onChange={handlePasswordChange}
                type="password"
                required
                placeholder="Password"
              />
            </Form.Group>
            <div className="text-danger my-1">{error}</div>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <p>
            Already Have an Account? Please{" "}
            <Link className="signUp-link" to="/login">
              Login
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
