import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import faireDeals from "../../Assets/Projects/faire-deals.png";
import auctionApp from "../../Assets/Projects/auction-app.png";
import EZONE from "../../Assets/Projects/EZONE.png"; 
import progreas from "../../Assets/Projects/progreas.jpeg";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={faireDeals}
              isBlog={false}
              title="Faire Deals"
              description="A mobile app built using Flutter and Firebase that analyzes and presents deal quality based on price and user location."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={auctionApp}
              isBlog={false}
              title="Auction App"
              description="A live web auction platform using React and Node.js, enabling real-time bidding and user management."
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
               imgPath={progreas}
              isBlog={false}
              title="Sandstorm & Soil Creep Prediction"
              description="An IoT and ML-based system for environmental hazard prediction using sensor data for early alerts."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EZONE}
              isBlog={false}
              title="Smart Water Heater"
              description="An IoT-powered system to monitor and control water heaters remotely for smart energy usage and safety."
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
