import React from "react";
import { projects } from "../data/data";

const Projects = () => {
  return (
    <section id="projects">
      <h2>PROJECTS</h2>
      <div className="divider-line"></div>
      <div>
        <ol className="project-list">
          {projects.map((project) => (
            <li key={project.id} className="project-item">
              <div className="project-container">
                <header className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </header>
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Projects;
