import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../images/kp.svg";
import Resume from "../images/Krishna_Patel_Resume.pdf"

export default class Navbar1 extends Component {
    scrollToTop = () => {
      scroll.scrollToTop();
};

render() {
  return (
    <Navbar className='nav fixed-top' id='navbar' expand="md">
        <Navbar.Brand 
            href="#"><img
            src={logo}
            className="nav-logo"
            alt="Logo."
            onClick={this.scrollToTop}
        /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link 
                className="nav-item"
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>01. About Me</Link>
            <Link
                className="nav-item"
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>02. Why Me</Link>
            <Link 
                className="nav-item"
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
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
            <Link className="nav-item">
              <Button className="btn float-right" href={Resume} src={Resume}>Resume</Button>
            </Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}
}