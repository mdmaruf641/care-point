import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  // handle email on blur
  const handleEmailChange = (e) => {
    console.log(e.target.value);
  };

  // handle password on blur
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
  };

  // for register button
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("daffdf");
  };

  return (
    <div>
      <Container>
        <div className="form-inner">
          <h1>Please Register</h1>

          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                onBlur={handleEmailChange}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                onBlur={handlePasswordChange}
                type="password"
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
