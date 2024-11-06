import techStack from '../../utils/techs';
import React from 'react';
import '../../index.css';
const TechStack: React.FC = () => {
  return (
    // animate-infinite-scroll
    <div className="text-center p-6 flex flex-col items-center mt-24">
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto ">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className=" flex items-center gap-2 bg-gray-200 p-4 rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            {tech.logo && (
              <img
                src={tech.logo}
                alt={`${tech.name} logo`}
                className="w-8 h-8"
              />
            )}
            <span className="text-sm font-medium ">{tech.name}</span>
          </div>
        ))}
      </div>
      <p className="text-base text-gray-500 mt-5 ">
        I'am not afraid to learn new things! 🫡
      </p>
    </div>
  );
};

export default TechStack;
