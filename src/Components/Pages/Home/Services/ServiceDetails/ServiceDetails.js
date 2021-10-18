import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { serviceId } = useParams();

  const [serviceData, SetServiceData] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => SetServiceData(data));
  }, []);

  const detailsItems = serviceData.filter((details) => details.id == serviceId);
  console.log(detailsItems);
  return (
    <div>
      <h1>Service Details</h1>
      <img src={detailsItems?.image} alt="" />
      <h3>Name: {detailsItems?.name}</h3>
      <p>{detailsItems?.description}</p>
      <h4>{detailsItems?.price}</h4>
    </div>
  );
};

export default ServiceDetails;
