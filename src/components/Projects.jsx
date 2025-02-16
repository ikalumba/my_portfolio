// import React from 'react';
const projects = [
  {
    title: "The Refactory Learning System",
    description:
      "I collaborated a frontend developer on a remote team of seven developers to build Learning Management System for Refactory academy which enables students to access learning material as intended by the facilitators and administrators",
  },
];

import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      {projects.map((project,i)=><ProjectCard key={i} title={project.title} description={project.description}/>)}
    </section>
  );
}

export default Projects;
