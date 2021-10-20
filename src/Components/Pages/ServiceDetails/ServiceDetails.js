import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ServiceDetails.css";
import { Container } from "react-bootstrap";

const ServiceDetails = () => {
  const { id } = useParams();
  const [serviceData, setServiceData] = useState({});

  useEffect(() => {
    fetch("/Services.json")
      .then((res) => res.json())
      .then((data) => {
        const detailsItems = data.find((details) => details.id == id);
        setServiceData(detailsItems);
        console.log(detailsItems);
      });
  }, [id]);

  return (
    <div>
      <Container>
        <h1 className="dtls-hdr mt-3">Service Details</h1>
        <div className="service-dtls mt-4">
          <div className="dtls-content">
            <h3>Name: {serviceData?.name}</h3>
            <h4>Doctor: {serviceData?.doctor}</h4>
            <p>Description: {serviceData?.description}</p>
            <h4>Price: {serviceData?.price}</h4>
          </div>
          <img className="w-50 mt-2" src={serviceData?.dtlsImg} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetails;
