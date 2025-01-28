import techStack from '../../utils/techs';
import React from 'react';
import '../../index.css';

const TechStack: React.FC = () => {
  return (
    <div className="text-center py-8 px-4">
      {/* Heading */}
      <h3 className="text-white text-2xl md:text-3xl font-semibold mt-8">
        My skills!
      </h3>

      {/* Tech Icons */}
      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto mt-6">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-2 text-white p-3 bg-zinc-600 rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg transition-transform transform hover:scale-110"
          >
            {tech.logo && (
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            )}
            <span className="text-xs sm:text-sm font-medium">{tech.name}</span>
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <p className="text-sm md:text-base text-gray-400 mt-6">
        I'm not afraid to learn new things! 🫡
      </p>
    </div>
  );
};

export default TechStack;
