import React from "react";
import { useHistory } from "react-router";
import "./Service.css";

const Service = (props) => {
  const { name, image, description, id } = props.service;

  // handle service details button
  const history = useHistory();
  const handleDetailsBtn = () => {
    history.push(`/serviceDetail/${id}`);
  };

  return (
    <div className="service">
      <img className="w-50" src={image} alt="" />
      <h4 className="mt-3">{name}</h4>
      <p>{description}</p>
      <button onClick={handleDetailsBtn}>Service Details</button>
    </div>
  );
};

export default Service;
