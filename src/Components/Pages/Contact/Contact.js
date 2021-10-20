import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import "./Contact.css";
import contact from "../../../images/contact_page.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <Container>
        <div className="section-heading mt-4">
          <h2 className="fw-bold">Contact Us</h2>
          <p className="w-75 mx-auto">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
        <div className="contact-container mt-5">
          <Row>
            <div className="col-lg-6 mt-4">
              <img className="w-75 rounded" src={contact} alt="" />
            </div>
            <div className="col-lg-6 mt-4">
              <Form className="w-75 mx-auto">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter Your Email" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    placeholder="Enter Your Message"
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
