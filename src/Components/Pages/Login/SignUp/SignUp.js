import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div>
      <h1>This is Sign Up</h1>
      <Link to="/login">Already Have an Account</Link>
    </div>
  );
};

export default SignUp;
