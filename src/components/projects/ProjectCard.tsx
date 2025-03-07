import { Project } from '../../utils/project';
import { GrGithub } from 'react-icons/gr';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-zinc-800 rounded-lg shadow-lg p-6 mb-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-white">{project.name}</h3>
        <a
          href={project.github_url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          <GrGithub className="w-8 h-8" />
        </a>
      </div>
      <p className="text-zinc-400 mb-6 text-s">{project.description}</p>
      <div className="flex items-center gap-4 mt-auto">
        {project.techs && (
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            <span className="text-sm text-zinc-400">
              {project.techs.join(' | ')}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
