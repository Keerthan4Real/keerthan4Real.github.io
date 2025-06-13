import React from "react";
import { aboutContent } from "../data/data";

const About = () => {
  return (
    <section id="about" className="section">
      {aboutContent.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </section>
  );
};

export default About;
