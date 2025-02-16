// function ProjectCard() {
//   return (
//     <div className="project-card">
//       <h3>Project 1</h3>
//       <p>A brief description of the project.</p>
//     </div>
//   );
// }
// export default ProjectCard;

import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
