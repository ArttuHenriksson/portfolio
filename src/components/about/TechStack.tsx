import techStack from '../../utils/techs';
import React from 'react';

const TechStack: React.FC = () => {
  return (
    <div className="text-center p-6">
      <h2 className="text-2xl font-semibold mb-6">My Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-2 bg-gray-100 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            {tech.logo && (
              <img
                src={tech.logo}
                alt={`${tech.name} logo`}
                className="w-6 h-6"
              />
            )}
            <span className="text-sm font-medium ">{tech.name}</span>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-500 mt-6">
        I'am not afraid to learn new things!
      </p>
    </div>
  );
};

export default TechStack;
