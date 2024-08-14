import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import Projects from "./Components/Projects.jsx";
import Contact from "./Components/Contact.jsx"
import Gallery from "./Components/Photos.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home
          title="Home"
          id="section1"
        />
        <AboutMe
          title="About Me"
          id="section2"
        />
        <Projects
          title="Projects"
          id="section3"
        />
        <Gallery
          title="Passions"
          id="section5"
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
