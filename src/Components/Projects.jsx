import { Col, Container, Row } from 'react-bootstrap';
import ProjectCard from '../Components/projectscard';
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 3,
    slidesToSlide: 3, // Slides to slide when transitioning
  },
  tablet: {
    breakpoint: { max: 1200, min: 900 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 900, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CustomButtonGroup = ({ next, previous }) => {
  return (
    <div className="custom-button-group">
      <button className="carousel-btn left-btn-carousel" onClick={() => previous()}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button className="carousel-btn right-btn-carousel" onClick={() => next()}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default function AboutMe({ title, id }) {
  return (
    <div className="about">
      <div className="section-content" id={id}>
        <Container>
          <Row className="justify-content-center">
            <Col className="col-12 text-center">
              <h2 className="numbered-heading d-flex justify-content-center">
                <span className="section-number">03. </span>Projects
              </h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <div className="carousel-wrapper">
              <Carousel
                swipeable={true}
                arrows={false}
                renderButtonGroupOutside={true}
                customButtonGroup={<CustomButtonGroup />}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // Render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-10-px" // Reduced padding
              >
                <div>
                  <Col className="col-12 project-card" style={{ height: '600px', display: 'flex', flexDirection: 'column' }}>
                    <ProjectCard
                      techUsed="Python"
                      title="Plasma Physics Calculator"
                      description="This is a Python program that solves over 125+ plasma physics formulas
                      by taking user input, converting it into the correct units, performing the user's
                      calculation and then outputting it with the units of the user's choice. This was
                      done by using object-oriented programming, python libraries that stored basic
                      unit conversions, and tagged data to display units EX: (1, 'cm'). Through implementing these strategies I was able to successfully create a
                      program that is easy to use, manipulate, and further extend as the field of plasma physics further develops."
                      demoLink="https://github.com/kriishnaPat/PlasmaPhysicsCalculator"
                    />
                  </Col>
                </div>
                <div>
                  <Col className="col-12 project-card" style={{ height: '600px', display: 'flex', flexDirection: 'column' }}>
                    <ProjectCard
                      title="Remindify"
                      techUsed="Flask, Twilio API, HTML, CSS, SQLite "
                      description="This is a web application that allows users to send reminders for weekly habits. The focus is on cultivating short-term habits over a week. The application automates daily reminders with encouraging messages, aiming for widespread accessibility and an enjoyable user experience. The main purpose is to strive to foster a positive environment through the use of positive messages and user-friendly features. This project won first place in the MecSimCalc category at the HACKedBeta Hackathon."
                      demoLink="https://github.com/kriishnaPat/HackEDBeta2023r"
                    />
                  </Col>
                </div>
                <div>
                  <Col className="col-12 project-card" style={{ height: '600px', display: 'flex', flexDirection: 'column' }}>
                    <ProjectCard
                      title="TimeDiscard"
                      techUsed="React.JS, TailwindCSS, Chrome API, Node.JS, Framer.Motion"
                      description="This is a chrome extension that allows users to track how much time they spend on 'procrastination' sites and 'productivity' sites. The user can customize what sites they deem to be in both categories. There is also a pomodoro timer, a to-do list feature that allows the user to set tasks, subtasks, recurring tasks, and set deadlines with it. Lastly, there is a random quote generator feature that allows users to further boost their productivity. This project won third place at the LightHouse Hackathon."
                      demoLink="https://github.com/kriishnaPat/ProcrastinationTracker"
                    />
                  </Col>
                </div>
                <div>
                  <Col className="col-12 project-card" style={{ height: '600px', display: 'flex', flexDirection: 'column' }}>
                    <ProjectCard
                      techUsed="HTML, CSS, Bootstrap, JavaScript, Figma"
                      title="PD11 Redevelopment"
                      description="As a part of my first co-op term I was able to help in the redevelopment for the Professional Development 11 course at the University of Waterloo. I created high-fidelity wireframes for the typography, buttons, carousels, cards, noteblocks, list group, accordion, embedded videos, flip card, and grid elements using Figma. I then moved on to creating the button, statement block, grid, and flip card elements using HTML, CSS, Bootstrap, and Javascript with a focus on creating an accessible and responsive design."
                      demoLink="https://github.com/kriishnaPat/PD11Redevelopment"
                    />
                  </Col>
                </div>
                <div>
                  <Col className="col-12 project-card" style={{ height: '600px', display: 'flex', flexDirection: 'column' }}>
                    <ProjectCard
                      techUsed="Flask, mySQL, Google Books API, HTML, CSS"
                      title="BookLib"
                      description="BookLib is a web application that I created for personal use. As an avid reader, it is super helpful to have a singular database to store what books I am currently reading, want to read, and my reviews and ratings of books I've read in the past. I made this project using a relational database model with MySQL and implemented RESTful APIs that work with Google Books API and add them to my personal library. It also uses a FLASK login system. In the future, I also plan on using a Machine Learning Model to curate personalized book suggestions."
                      demoLink="https://github.com/kriishnaPat/BookEase"
                    />
                  </Col>
                </div>
              </Carousel>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}
