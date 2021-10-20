import React from "react";
import { Container, Row } from "react-bootstrap";
import "./About.css";
import aboutImg from "../../../../images/about-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const star = <FontAwesomeIcon icon={faStar} />;

  return (
    <div className="about" id="about">
      <Container>
        <div className="section-heading">
          <h2 className="fw-bold">Why Choose Us ?</h2>
          <p className="w-75 mx-auto">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>

        <div className="about-items">
          <Row>
            <div className="col-lg-4">
              <Row className="single-items">
                <div className="items-head d-flex justify-content-center align-items-center">
                  <div className="icon-body">
                    <h3 className="icon me-3 fs-4">{star}</h3>
                  </div>
                  <div className="title">
                    <h4 className="fw-bolder">Professional</h4>
                  </div>
                </div>
                <div className="desc">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </Row>
              <Row className="single-items">
                <div className="items-head d-flex justify-content-center align-items-center">
                  <div className="icon-body">
                    <h3 className="icon me-3 fs-4">{star}</h3>
                  </div>
                  <div className="title ">
                    <h4 className="fw-bolder">Professional</h4>
                  </div>
                </div>
                <div className="desc">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </Row>
            </div>
            <div className="col-lg-4">
              <img className="w-75 mx-auto about-img" src={aboutImg} alt="" />
            </div>
            <div className="col-lg-4">
              <Row className="single-items">
                <div className="items-head d-flex justify-content-center align-items-center">
                  <div className="icon-body">
                    <h3 className="icon me-3 fs-4">{star}</h3>
                  </div>
                  <div className="title">
                    <h4 className="fw-bolder">Professional</h4>
                  </div>
                </div>
                <div className="desc">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </Row>
              <Row className="single-items">
                <div className="items-head d-flex justify-content-center align-items-center">
                  <div className="icon-body">
                    <h3 className="icon me-3 fs-4">{star}</h3>
                  </div>
                  <div className="title ">
                    <h4 className="fw-bolder">Professional</h4>
                  </div>
                </div>
                <div className="desc">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </Row>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
