import React from "react";
import Photo from "../images/KrishnaPhoto.jpg";
import { Row, Col } from "react-bootstrap";

export default function AboutMe({ title, id }) {
  return (
    <div className="about">
      <div className="section-content" id={id}>
        <Row>
          <Col className="col-12">
            <h2 className="numbered-heading d-flex justify-content-center">
              <span className="section-number">02.</span> About Me
            </h2>
          </Col>
        </Row>
        <Row className="mb-3 mt-5 d-flex justify-content-center align-items-center">
          <Col className="aboutme_text col-10 col-lg-5">
          <p>Hello! I’m Krishna, a computer engineering student at the University of Waterloo. I have experience in building and maintaining web applications, as well as developing RESTful APIs. In the past, I’ve worked extensively with AWS and Azure to maintain CI/CD pipelines, and I have a solid understanding of MVC architecture, SQL, and C#.</p>
          <p>Currently, I’m working with:</p>
          <div className="d-flex justify-content-center">
            <ul>
              <li>C++</li>
              <li>Python</li>
              <li>React.js</li>
              <li>C#</li>
              <li>MySQL</li>
            </ul>
          </div>
          <p>Outside of work, I’m passionate about mental health, bike riding, watching sunsets and sunrises, graphic design, and baking. Take a look at my interest gallery for more on these!</p>
          </Col>
          <Col className="col-6 col-lg-3 text-center">
            <figure className="figure">
              <img src={Photo} alt="Krishna" className="my-photo figure-img img-fluid" />
            </figure>
          </Col>
        </Row>
      </div>
    </div>
  );
}
