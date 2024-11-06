import techStack from '../../utils/techs';
import React from 'react';
import '../../index.css';
const TechStack: React.FC = () => {
  return (
    // animate-infinite-scroll
    <div className="text-center p-6 flex flex-col items-center ">
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
