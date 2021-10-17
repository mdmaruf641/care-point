import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <div className="bnr-dtls">
          <h1>We have Best Medicare plan options for you</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
          <button>Read More</button>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
