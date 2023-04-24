import React from "react";
import Typed from "react-typed";
import {Container, Row, Col} from 'react-bootstrap'

export default function Home({ title, id }) {
    return (
    <div className="nameIntro">
      <Container className="
      justify-content-center align-items-center">
        <Row>
        <Col>
        <h3>Hi, my name is</h3>
        </Col>
        </Row>
        <Row>
        <Col>
        <h1>Krishna Patel!</h1>
        </Col>
        </Row>
        <Row>
        <Col>
        <p className="intro-subtitle">
                <span className="text-slider-item"><strong>I am a </strong></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      " Computer Engineering Student",
                      " Mental Health Advocate",
                      " Schulich Leader"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
        </p>      
        </Col>
        </Row>
        <div className="sidebar contact-icons">
          <a href="https://github.com/kriishnaPat" rel="noopener" ><i class="fa-brands fa-github fa-2x hover"></i></a>
          <a href="https://www.linkedin.com/in/kriishna-p/" rel="noopener" ><i class="fa-brands fa-linkedin fa-2x hover"></i></a>
          <a href="mailto:kriishnapat@gmail.com" rel="noopener" ><i class="fa-solid fa-envelope fa-2x hover"></i></a>
        </div>
        <div className="sidebar email">
          <a className="hover"  href="mailto:kriishnapat@gmail.com" rel="noopener">kriishnapat@gmail.com</a>
        </div>
      </Container>
    </div>
    )
  }

