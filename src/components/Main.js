import React from "react";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Internship from "./Internship";

const Main = () => {
  return (
    <main className="main-content">
      <div>
        <About />
        <Education />
        <Internship />
        <Experience />
        <Projects />
      </div>
    </main>
  );
};

export default Main;
