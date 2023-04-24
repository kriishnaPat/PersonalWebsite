import React from "react";
import Photo from "../images/KrishnaPhoto.jpg"
import {Row, Col} from 'react-bootstrap'

export default function AboutMe({ title, id }) {
  return (
    <div className={"about"}>
      <div className="section-content" id={id}>
          <Row>
          <Col className="col-12">
            <h2 className="numbered-heading d-flex justify-content-center"> <span className="section-number">02.</span> About Me </h2>
          </Col>
          </Row>
          <Row className="mb-3 mt-5 d-flex justify-content-center align-items-center">
          <Col className="aboutme_text col-10 col-lg-5">
              <p>Hello! I am Krishna, a first-year computer engineering student at the University of Waterloo. I am exprienced in front-end development but am currently working on furthering my back-end skills.</p>
              <p>Here are a few technologies I've worked with or have been exploring with recently:</p>
              <ul>
                <li>C++</li>
                <li>Python</li>
                <li>React.js</li>
                <li>Javascript</li>
                <li>mySQL</li>
              </ul>
              <p>My other interest include mental health, bike riding, watching sunsets and sunrises, video editing, graphic designing, and baking!</p>
          </Col>
          <Col className="col-6 col-lg-3 text-center">
            <figure className="figure">
                <img src={Photo} alt="" className="my-photo figure-img img-fluid"/>
            </figure>
          </Col>
          </Row>
      </div>
    </div>
  );
}
