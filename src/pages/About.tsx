// About.tsx
import React from 'react';
import TechStack from '../components/about/TechStack';
import Hero from '../components/about/Hero';

const About: React.FC = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col justify-center items-center">
      <div className="justify-center text-center mt-20">
        <Hero />
      </div>
      <div>
        <TechStack />
      </div>
    </div>
  );
};

export default About;
