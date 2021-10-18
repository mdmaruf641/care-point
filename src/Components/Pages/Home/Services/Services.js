import React, { useEffect, useState } from "react";
import "./Services.css";
import Service from "./../Service/Service";
import { Container, Row } from "react-bootstrap";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="service" className="my-5">
      <Container>
        <h2 className="service-heading">Our Services</h2>
        <Row className=" mt-4 d-flex justify-content-around">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
