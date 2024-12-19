// Projects.tsx
import React from 'react';
import RepoCard from '../components/projects/RepoCard';
import { projects } from '../utils/projects';
const Projects: React.FC = () => {
  return (
    <>
      <div className="mx-auto px-4 py-12 mt-24 justify-center flex">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          {projects.map((projects, index) => (
            <RepoCard key={index} {...projects} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
