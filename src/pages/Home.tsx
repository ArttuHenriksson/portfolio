import React from 'react';
import Intro from '../components/home/Intro';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4 md:p-8 lg:p-16">
      <div className="w-full max-w-screen-lg">
        <Intro />
      </div>
    </div>
  );
};

export default Home;
