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
            className="flex items-center gap-1 text-white p-2  bg-slate-500 rounded-md shadow-sm transition-transform transform hover:scale-105"
          >
            {tech.logo && (
              <img
                src={tech.logo}
                alt={`${tech.name} logo`}
                className="w-6 h-6"
              />
            )}
            <span className="text-xs font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-400 mt-2">
        I'm not afraid to learn new things! 🫡
      </p>
    </div>
  );
};

export default TechStack;
// import techStack from '../../utils/techs';
// import React from 'react';
// import '../../index.css';
// const TechStack: React.FC = () => {
//   return (
//     <>
//       <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
//         <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
//           {[...techStack, ...techStack].map((tech) => (
//             <li key={tech.name}>
//               <img
//                 src={tech.logo}
//                 alt={tech.name}
//                 className="w-12 h-12 md:w-16 md:h-16"
//               />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default TechStack;
