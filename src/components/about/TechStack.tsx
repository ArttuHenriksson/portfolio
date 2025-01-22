import techStack from '../../utils/techs';
import React from 'react';
import '../../index.css';

const TechStack: React.FC = () => {
  return (
    <div className="text-center p-12 flex flex-col items-center">
      <h3 className="text-white text-2xl mt-8 gap-3">My tech stack!</h3>
      <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto mt-4">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-2 text-white p-3 bg-zinc-600 rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg transition-transform transform hover:scale-110"
          >
            {tech.logo && (
              <img src={tech.logo} alt={tech.name} className="w-6 h-6" />
            )}
            <span className="text-xs font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-400 mt-4">
        I'm not afraid to learn new things! 🫡
      </p>
    </div>
  );
};

export default TechStack;
