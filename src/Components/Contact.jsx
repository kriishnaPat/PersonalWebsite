import React from "react";
import {Container, Row, Col, Button} from 'react-bootstrap'

export default function AboutMe({ title, id }) {
  return (
    <div className={"about"}>
      <div className="section-content contact" id={id}>
        <Container>
        <Row>
        <Col className="col-12">
        <h2 className="numbered-heading contact d-flex justify-content-center align-items-center"><span className="section-number">04. </span>Contact </h2>
        </Col>
        </Row>
        <Row className="text-justify-center d-flex justify-content-center pt-5">
          <Col className="col-12 col-md-6 text-center">
            <p className="contact-text">Thank you for taking the time to learn about me and my experiences. I love to meet new people so please feel free to reach out just to say hi or if you have any questions! I am also currently seeking co-op oppurtunuties for Fall 2023 in software or hardware development.</p>
          </Col>
        </Row>
        <Row className="text-justify-center d-flex justify-content-center pt-5">
          <Col className="col-12 col-md-6 text-center">
          <Button className="btn_contact" href="mailto:k2patel@uwaterloo.ca">Get In Touch!</Button>
          </Col>
        </Row>
 
        <Row className="d-flex justify-content-center text-center">
        <div className="footer_icons ">
          <a href="https://github.com/kriishnaPat" rel="noopener" ><i class="fa-brands fa-github fa-3x hover"></i></a>
          <a href="https://www.linkedin.com/in/kriishna-p/" rel="noopener" ><i class="fa-brands fa-linkedin fa-3x hover"></i></a>
          <a href="mailto:kriishnapat@gmail.com" rel="noopener" ><i class="fa-solid fa-envelope fa-3x hover"></i></a>
          <div className="footer">
          {`Copyright © Krishna Patel 2023`}  
          </div>
        </div>

        </Row>
        </Container>
      </div>
    </div>
  );
}