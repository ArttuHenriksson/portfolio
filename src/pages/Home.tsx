// Home.tsx
import React from 'react';
import Intro from '../components/home/Intro';
const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center  ">
        <Intro />
      </div>
    </>
  );
};

export default Home;
