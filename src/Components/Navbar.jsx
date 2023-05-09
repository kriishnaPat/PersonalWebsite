import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { Component} from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../images/kp.svg";
import resume from "../images/Krishna_Patel_Resume_2023.pdf"


export default class Navbar1 extends Component {
    scrollToTop = () => {
      scroll.scrollToTop();
};

render() {
  
  return (
    <Navbar className='nav fixed-top' id='navbar' expand="lg">
      <Container className="nav_container">
        <Navbar.Brand 
            href="#"><img
            src={logo}
            className="nav-logo"
            alt="Logo."
            onClick={this.scrollToTop}
        /></Navbar.Brand>
        <Navbar.Toggle className="navbar-toggler custom-toggler" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="navbar-collapse">
          <Nav
            className="m-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link 
                className="nav-item"
                activeClass="active"
                onClick={this.scrollToTop}                
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>01. Home</Link>
            <Link
                className="nav-item"
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-125}
                duration={500}>02. About Me</Link>
            <Link 
                className="nav-item"
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>03. Projects
            </Link>
            <Link 
                className="nav-item"
                to="section4"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>04. Contact
            </Link>
            </Nav>
            <Link className="nav-item">
          <Button className='top_btn btn' onClick={() => window.open(resume)}>Resume</Button>
          </Link>
          </Navbar.Collapse>
          </Container>
    </Navbar>
  );
}
}
