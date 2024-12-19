import { ProjectProps } from './types';
import { BsGithub } from 'react-icons/bs';

const RepoCard: React.FC<ProjectProps> = ({
  title,
  description,
  techStack,
  githubUrl,
}) => {
  return (
    <div className="relative group">
      {/* Gradient border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

      {/* Main card */}
      <div
        className="relative bg-black text-white p-6 rounded-lg w-full font-mono 
                      border border-gray-800 hover:border-opacity-0
                      transform transition duration-500 hover:-translate-y-1"
      >
        {/* Terminal header */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500 transition duration-300 group-hover:animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 transition duration-300 group-hover:animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 transition duration-300 group-hover:animate-pulse"></div>
          </div>
          <p className="text-sm text-gray-500">{title.split(' ')[0]}</p>
        </div>

        {/* Content */}
        <div className="mt-4 space-y-3">
          {/* Project title */}
          <div className="flex items-center space-x-2">
            <span className="text-green-400">$</span>
            <p className="text-green-400 font-bold">{title}</p>
          </div>

          {/* Description */}
          <p className="text-gray-300 pl-4 border-l border-gray-700">
            {description}
          </p>

          {/* Tech stack */}
          <div className="pl-4">
            <span className="text-gray-500">Tech stack: </span>
            {techStack.map((tech, index) => (
              <span key={index} className="text-blue-400">
                {tech}
                {index < techStack.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>

          {/* GitHub link */}
          <div className="flex items-center space-x-2">
            <a
              href={githubUrl}
              className="text-blue-400 hover:text-blue-300 transition-colors p-2 
                         hover:bg-blue-500/10 rounded-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="w-5 h-5" />
            </a>
          </div>

          {/* Terminal prompt */}
          <div className="flex items-center space-x-2">
            <span className="text-green-400">$</span>
            <span className="animate-pulse">_</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
