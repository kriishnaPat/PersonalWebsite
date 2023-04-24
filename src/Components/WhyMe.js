import React from "react";
import {Container, Row, Col, Button} from 'react-bootstrap'

export default function AboutMe({ title, id }) {
  return (
    <div className={"about"}>
      <div className="section-content" id={id}>
        <Container>
        <Row className="justify-content-start">
        <Col col={8} className="text-center">
        <h2 className="numbered-heading d-flex justify-content-center"><span className="section-number">02. </span>Why Me </h2>
        </Col>
        </Row>

        </Container>
      </div>
    </div>
  );
}