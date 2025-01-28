import React from 'react';
import TechStack from '../components/about/TechStack';
import Terminal from '../components/about/Terminal';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-6 md:py-12">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-12 w-full max-w-6xl">
        {/* Terminal Section */}
        <div className="w-full md:w-1/2">
          <Terminal />
        </div>

        {/* TechStack Section */}
        <div className="w-full md:w-1/2">
          <TechStack />
        </div>
      </div>
    </div>
  );
};

export default About;
