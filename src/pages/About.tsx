// About.tsx
import React from 'react';
import TechStack from '../components/about/TechStack';

const About: React.FC = () => {
  return (
    <>
      <div className="h-screen overflow-hidden flex flex-col justify-center items-center">
        <div className="mt-2">
          <TechStack />
        </div>
      </div>
    </>
  );
};

export default About;
