import React from "react";
import { experiences } from "../data/data";
import resumePDF from "../data/resume.pdf";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
const Experience = () => {
  return (
    <section id="experience">
      <h2>EXPERIENCE</h2>

      <div className="divider-line"></div>
      <div>
        <ol className="experience-list">
          {experiences.map((exp, index) => (
            <li key={index} className="experience-item">
              <div className="experience-container">
                <header className="experience-header">
                  <h4>{exp.period}</h4>
                </header>
                <div className="experience-details">
                  <h3>{exp.company}</h3>
                  <p>{exp.description}</p>
                  <ul className="skills-list">
                    {exp.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>
                        <div className="skill-tag">{skill}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="resumepdf">
        <a href={resumePDF} target="_blank" rel="noopener noreferrer">
          View Full Resume{" "}
          <span>
            <OpenInNewIcon fontSize="small" />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Experience;
