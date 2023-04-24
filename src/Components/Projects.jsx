import { Col, Container, Row} from 'react-bootstrap';
import ProjectCard from '../Components/projectscard'
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1200, min: 900 },
    items: 2,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 900, min: 0 },
    items: 1,
    slidesToSlide: 3 // optional, default to 1.
  }
};


export default function AboutMe({ title, id }) {
  return (
    <div className={"about"}>
      <div className="section-content" id={id}>
        <Container>
        <Row className="">
        <Col className="col-12">
        <h2 className="numbered-heading d-flex justify-content-center"><span className="section-number">03. </span>Projects </h2>
        </Col>
        </Row>
        <Row className='d-flex justify-content-center align-items-center'>
        <Carousel
  swipeable={true}
  draggable={true}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
<div>
                      <Col className="col-12 project-card">
                        <ProjectCard
                        techUsed="Python"
                        title='Plasma Physics Calculator'
                        description="This is a Python program that solves over 125+ plasma physics formulas
                        by taking user input, converting it into the correct units, performing the user's
                        calculation and then outputting it with the units of the user's choice. This was
                        done by using object oriented programming, python libraries that stored basic
                        unit conversions, and tagged data to display units EX: (1, 'cm'). Through implementing these three strategies I was able to successfully create a
                        program that is easy to use, manipulate, and further extend as the field of plasma physics further develops."
                        demoLink="https://github.com/kriishnaPat/PlasmaPhysicsCalculator"
                      />
                      </Col>
                </div>
                <div>
                        <Col className="col-12 project-card">
                        <ProjectCard
                        title="TimeDiscard"
                        techUsed="React.JS, TailwindCSS, Chrome API, Node.JS, Framer.Motion"
                        description="This is a chrome extension that allows users to track how much time they spend on 'procrastination' sites and 'producitivity' sites. The user can customize what sites they deem to be in both categories. There is also a pomodoro timer, a to-do list feature that allows the user to set tasks, subtasks, recurring tasks, and set deadlines with it. Lastly, there is a random quote generator feature that allows users to further boost their productivity. This project won third place at the LightHouse Hackathon."
                        demoLink="https://github.com/kriishnaPat/ProcrastinationTracker"/>
                        </Col>
                </div>
                <div>
                        <Col className="col-12 project-card">
                        <ProjectCard
                          techUsed="HTML, CSS, Bootstrap, JavaScript, Figma"
                          title="PD11 Redevelopment"
                          description="As a part of my first co-op term I was able to help in the redvelopment for the Professional Development 11 course at the university of waterloo. I created high-fidelity wireframes for the typography, buttons, carousels, cards, noteblocks, list group, accordion, embbeded videos, flipcard, and grid elements using figma. I then moved onto creating the button, statement block, grid and flip card elements using HTML, CSS, Bootstrap, and Javascript with a focus on creating a accessible and responsive design."
                          demoLink="https://github.com/kriishnaPat/PD11Redevelopment"
                        />
                        </Col>
                </div>
                <div>
                        <Col className="col-12 project-card">
                        <ProjectCard
                          techUsed="Python, React Native, mySQL"
                          title="BookEase"
                          description="This online ride-sharing platform boasts a responsive front-end design, complete with an admin panel built using React and Material-UI. With the integration of Google Maps API, users can easily access directions on the map. The platform allows for full CURD functionality on profiles and posts, and users can confirm or cancel a ride from a post and message each other after confirmation. Additionally, users can easily reset their password. The back-end is powered by a Node Express server and utilizes MongoDB for the database management."
                          demoLink="https://github.com/kriishnaPat/BookEase"
                        />
                      </Col>
                </div>
          </Carousel>
          </Row>
        </Container>
      </div>
    </div>
  );
}