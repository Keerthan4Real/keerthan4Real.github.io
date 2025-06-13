import React from "react";
import { education } from "../data/data";

const Education = () => {
  return (
    <section id="experience">
      <h2>EDUCATION</h2>
      <div className="divider-line"></div>
      <div>
        <ol className="experience-list">
          {education.map((edu, index) => (
            <li key={index} className="experience-item">
              <div className="experience-container">
                <div className="experience-details">
                  <h3>{edu.degree}</h3>
                  <p>{edu.institution}</p>
                  <p>
                    <strong>CGPA:</strong> {edu.cgpa}
                  </p>
                  <p>
                    <strong>Year:</strong> {edu.year}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Education;
