import React from "react";
import {Container, Row, Col, Button} from 'react-bootstrap'

export default function AboutMe({ title, id }) {
  return (
    <div className={"about"}>
      <div className="section-content" id={id}>
        <Container>
        <Row className="justify-content-start">
        <Col className="col-12 p-0">
        <h2 className="numbered-heading d-flex justify-content-center"><span className="section-number">03. </span>Projects </h2>
        </Col>
        </Row>
        
        </Container>
      </div>
    </div>
  );
}