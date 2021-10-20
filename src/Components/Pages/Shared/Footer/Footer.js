import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const mail = <FontAwesomeIcon icon={faEnvelope} />;
  const phone = <FontAwesomeIcon icon={faPhone} />;
  const location = <FontAwesomeIcon icon={faLocationArrow} />;
  return (
    <div>
      <div className="footer  py-5 mt-4">
        <Container>
          <Row>
            <div className="col-lg-3">
              <div className="footer-heading text-start text-white mb-3">
                <h3>Get in Touch</h3>
              </div>
              <div className="footer-info ps-2">
                <div className="d-flex ms-4 align-items-center">
                  <div className=" mr-4  fs-3">{mail}</div>
                  <div className=" text-start contact-info">
                    <p>maruf.moni.mm@gmail.com</p>
                    <p>maruf.moni.mm@gmail.com</p>
                  </div>
                </div>
                <div className="d-flex ms-4 align-items-center my-3">
                  <div className=" mr-4 fs-3">{phone}</div>
                  <div className=" text-start contact-info">
                    <p>+880 1641656113</p>
                    <p>+880 1788368262</p>
                  </div>
                </div>
                <div className="d-flex ms-4 align-items-center">
                  <div className=" mr-4 fs-3">{location}</div>
                  <div className=" text-start contact-info">
                    <p>Khulshi, Chittagong,</p>
                    <p>Bangladesh.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="footer-heading text-start text-white ps-2 mb-3">
                <h3>Quick Links</h3>
              </div>
              <div className="footer-links ps-2 text-start">
                <ul>
                  <li>About Us</li>
                  <li>Blogs</li>
                  <li>Contact Us</li>
                  <li>FAQ</li>
                  <li>Team</li>
                  <li>Insurance</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="footer-heading text-start text-white ps-2 mb-3">
                <h3>Our Services</h3>
              </div>
              <div className="footer-links ps-2 text-start">
                <ul>
                  <li>Work Injuries</li>
                  <li>Sport Injuries</li>
                  <li>Cold Laser Therapy</li>
                  <li>Massage Therapy</li>
                  <li>Physiotherapy</li>
                  <li>Chiropratic Therapy</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="footer-heading text-start text-white ps-2 mb-3">
                <h3>Our Services</h3>
              </div>

              <div className="footer-form">
                <form>
                  <input
                    type="text"
                    placeholder="Name"
                    className="footer-input"
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Name"
                    className=" my-2 footer-input"
                  />
                  <br />
                  <textarea
                    cols="23"
                    rows="2"
                    className="footer-input"
                  ></textarea>{" "}
                  <br />
                  <input type="Submit" value="Submit" className="footer-btn" />
                  <br />
                </form>
              </div>
            </div>
          </Row>
        </Container>
      </div>
      <div className="mini-footer">
        <Container>
          <p className="py-4 m-0">
            Copyright © 2021 | All Rights Reserved by Md. Maruf
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
