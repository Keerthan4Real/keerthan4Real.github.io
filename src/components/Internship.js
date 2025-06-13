import React from "react";
import { internships } from "../data/data";

const Internship = () => {
  return (
    <section id="Internship">
      <h2>INTERNSHIP</h2>
      <div className="divider-line"></div>
      <div>
        <ol className="project-list">
          {internships.map((intern, index) => (
            <li key={index} className="experience-item">
              <div className="experience-container">
                <header className="experience-header">
                  <h4>{intern.period}</h4>
                </header>
                <div className="experience-details">
                  <h3>{intern.company}</h3>
                  <p>
                    <strong>Domain:</strong> {intern.domain}
                  </p>
                  <p>{intern.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Internship;
