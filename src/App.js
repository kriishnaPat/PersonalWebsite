import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home.js";
import AboutMe from "./Components/AboutMe.js";
import WhyMe from "./Components/WhyMe.js";
import Projects from "./Components/Projects.js";
import Contact from "./Components/Contact.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <AboutMe
          title='About Me'
          id="section1"
        />
        <WhyMe
          title="Why Me"
          id="section2"
        />
        <Projects
          title="Projects"
          id="section3"
        />
        <Contact
          title="Contact"
          id="section4"
        />
      </div>
    );
  }
}

export default App;
