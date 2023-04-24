import React from "react";
import {Container, Row, Col} from 'react-bootstrap'

export default function AboutMe({ title, id }) {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitted!')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className={"about"}>
      <div className="section-content contact" id={id}>
        <Container>
        <Row>
        <Col className="col-12">
        <h2 className="numbered-heading d-flex justify-content-center align-items-center"><span className="section-number">04. </span>Contact </h2>
        </Col>
        </Row>
        <Row className="text-justify-center d-flex justify-content-center pt-5">
          <Col className="col-12 col-md-6 text-center">
            <p className="contact-text">Thank you for taking the time to learn about me and my experiences. I love to meet new people so please feel free to reach out just to say hi or if you have any questions! I am also currently seeking co-op oppurtunuties for Fall 2023 in software or hardware development.</p>
          </Col>
        </Row>
        <Row className="contact-form text-justify-center d-flex justify-content-center">
          <Col className="col-12 col-md-6 text-center">
          <div className="container">
            <h4 className="">Get In Touch!</h4>
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input className="form-control" type="text" id="name" required />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input className="form-control" type="email" id="email" required />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea className="form-control" id="message" required />
              </div>
              <button className="btn_contact btn" type="submit">
                {formStatus}
              </button>
            </form>
          </div>
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