import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yahya Thani Al Wahaibi</span> from{" "}
            <span className="purple">Muscat, Oman</span>.
            <br />
            I am a passionate software engineer currently pursuing my Bachelor's degree in Software Engineering
            at the University of Technology and Applied Sciences, expected to graduate in July 2025.
            <br />
            <br />
            My interests lie in developing full-stack web and mobile applications,
            as well as exploring smart IoT systems and applying machine learning in real-world projects.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Participating in tech competitions
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring IoT devices and prototypes
            </li>
            <li className="about-activity">
              <ImPointRight /> Collaborating on innovative student projects
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I strive to use technology to solve real-world problems and innovate constantly!"{" "}
          </p>
          <footer className="blockquote-footer">Yahya Al Wahaibi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
