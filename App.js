import React, { Component } from "react";
import "./App.css";
import Navbar from "./src/Components/Navbar";
import Home from "./src/Components/Home.jsx";
import AboutMe from "./src/Components/AboutMe.jsx";
import Projects from "./src/Components/Projects.jsx";
import Contact from "./src/Components/Contact.jsx"

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
        <Contact
          title="Contact"
          id="section4"
        />
      </div>
    );
  }
}

export default App;
