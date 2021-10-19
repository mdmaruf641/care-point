import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  // state for name
  const [name, setName] = useState("");
  // state for email
  const [email, setEmail] = useState("");
  // state for password
  const [password, setPassword] = useState("");

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
