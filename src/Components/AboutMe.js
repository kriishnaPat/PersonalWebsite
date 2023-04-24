import React from "react";
import Photo from "../images/KrishnaPhoto.jpg"
import {Container, Row, Col} from 'react-bootstrap'

export default function AboutMe({ title, id }) {
  return (
    <div className={"about"}>
      <div className="section-content align-items-center justify-content-center" id={id}>
          <Row>
          <Col className="col-12 p-0">
            <h2 className="numbered-heading d-flex justify-content-center"> <span className="section-number">01.</span> About Me </h2>
          </Col>
          </Row>
          <Row className="mb-3 mt-5 d-flex justify-content-center align-items-center">
          <Col className="col-6 col-md-3">
              <p>Hello! I am Krishna, a first-year computer engineering student at the University of Waterloo. I am exprienced in front-end development but am currently working on furthering my back-end skills.</p>
              <p>Here are a few technologies I've been working with recently:</p>
              <ul>
                <li>Python</li>
                <li>C++</li>
                <li>React.js</li>
                <li>Javascript (ES6+)</li>
                <li>REST APIs</li>
              </ul>
              <p>I am also a huge advocate for mental health, and run my own youth orgnization: Mind Awareness.</p>
          </Col>
          <Col className="col-6 col-md-3 text-center">
            <figure className="figure">
                <img src={Photo} alt="" className="my-photo figure-img img-fluid"/>
            </figure>
          </Col>
          </Row>
      </div>
    </div>
  );
}

