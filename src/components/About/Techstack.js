import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  DiDart,
} from "react-icons/di";
import {
  SiFirebase,
  SiMongodb,
  SiDjango,
  SiMysql,
  SiFlutter,
} from "react-icons/si";

function Techstack() {
  return (
    <>
      <h2 className="text-center mb-4">Tech Stack</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons"><CgCPlusPlus /></Col>
        <Col xs={4} md={2} className="tech-icons"><DiJava /></Col>
        <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
        <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
        <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
        <Col xs={4} md={2} className="tech-icons"><DiNodejs /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiDjango /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiFirebase /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiFlutter /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiMysql /></Col>
        <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiMongodb /></Col>
        <Col xs={4} md={2} className="tech-icons"><DiDart /></Col>
      </Row>
    </>
  );
}

export default Techstack;
