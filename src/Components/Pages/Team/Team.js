import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Team.css";
import teamA from "../../../images/team1.png";
import teamB from "../../../images/team2.png";
import teamC from "../../../images/team3.png";
import teamD from "../../../images/team4.png";

const Team = () => {
  // font awesome

  return (
    <div id="team ">
      <Container>
        <div className="section-heading mt-4">
          <h2 className="fw-bold">Our Team</h2>
          <p className="w-75 mx-auto">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
        <div className="team-data mt-4">
          <Row>
            <div className="col-lg-3 col-md-6">
              <div className="team-img">
                <img className="w-100" src={teamA} alt="" />
              </div>
              <div className="team-name mt-2">
                <h3>Dr Ricky Doe</h3>
                <p>Assistant Surgeon</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-img">
                <img className="w-100" src={teamB} alt="" />
              </div>
              <div className="team-name mt-2">
                <h3>Dr Ricky Doe</h3>
                <p>Assistant Surgeon</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-img">
                <img className="w-100" src={teamC} alt="" />
              </div>
              <div className="team-name mt-2">
                <h3>Dr Ricky Doe</h3>
                <p>Assistant Surgeon</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-img">
                <img className="w-100" src={teamD} alt="" />
              </div>
              <div className="team-name mt-2">
                <h3>Dr Ricky Doe</h3>
                <p>Assistant Surgeon</p>
              </div>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Team;
