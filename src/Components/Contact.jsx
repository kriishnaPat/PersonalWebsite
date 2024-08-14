import React from "react";
import {Container, Row, Col, Button} from 'react-bootstrap'

export default function AboutMe({ title, id }) {
  return (
    <div className={"about"}>
      <div className="section-content contact" id={id}>
        <Container>
        <Row>
        <Col className="col-12">
        <h2 className="numbered-heading contact d-flex justify-content-center align-items-center"><span className="section-number">05. </span>Contact </h2>
        </Col>
        </Row>
        <Row className="text-justify-center d-flex justify-content-center pt-5">
          <Col className="col-12 col-md-6 text-center">
            <p className="contact-text">Thank you for taking the time to learn about me and my experiences. I love to meet new people so please feel free to reach out just to say hi or if you have any questions! I am also currently seeking co-op oppurtunuties for Winter 2025 in software development or project managment.</p>
          </Col>
        </Row>
        <Row className="text-justify-center d-flex justify-content-center pt-5">
          <Col className="col-12 col-md-6 text-center">
          <Button className="btn_contact" href="mailto:k2patel@uwaterloo.ca">Get In Touch!</Button>
          </Col>
        </Row>
        </Container>
      </div>
    </div>
  );
}