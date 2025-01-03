// Projects.tsx
import React from 'react';
import ProjectCard from '../components/projects/ProjectCard';
import projects from '../utils/projects';
const Projects: React.FC = () => {
  return (
    <>
      <div className="container mx-auto px-4 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
