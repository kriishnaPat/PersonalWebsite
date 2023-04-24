import React from "react";
import {Container, Row, Col, Button} from 'react-bootstrap'

export default function AboutMe({ title, id }) {
  return (
    <div className={"about"}>
      <div className="section-content" id={id}>
        <Container>
        <Row className="">
        <Col col={6} className="">
        <h2 className="numbered-heading d-flex justify-content-center align-items-center"><span className="section-number">04. </span>Contact </h2>
        </Col>
        </Row>
        
        </Container>
      </div>
    </div>
  );
}