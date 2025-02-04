// import React from 'react';

import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
     <ProjectCard/>
      <div className="project-card">
        <h3>Project 2</h3>
        <p>A brief description of the project.</p>
      </div>
    </section>
  );
}

export default Projects;
