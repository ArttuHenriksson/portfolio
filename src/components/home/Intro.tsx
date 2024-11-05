import '../../index.css';
import {
  getGoodMorningGreeting,
  getGoodAfternoonGreeting,
  getGoodEveningGreeting,
} from '../../utils/greetings';
// import arttuhImage from '../../../public/images/arttuh.jpg?url';

function Intro() {
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = getGoodMorningGreeting();
  } else if (currentHour < 18) {
    greeting = getGoodAfternoonGreeting();
  } else {
    greeting = getGoodEveningGreeting();
  }

  return (
    <>
      <div className="flex flex-col p-6 bg-gray-100 min-h-screen">
        {/* <img src={arttuhImage} className="w-40 h-52 rounded-full max-w-full " /> */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800  mb-4 text-center">
          {greeting}
        </h1>
        <div className="flex flex-col items-center mt-12">
          <h1 className="text-5xl font-extrabold text-gray-900 -mt-10 text-center">
            Hi, It's me Arttu! <span className="wave">👋</span>
          </h1>
        </div>
        <div className="flex flex-col items-start mt-40 md:mt-10 p-4 md:p-6 max-w-2xl text-gray-700 ">
          <p className="text-xl md:text-2xl mb-4 text-left">
            I'm a third year business information technology student at the JAMK
            University of Applied Sciences.
          </p>
          <p className="text-lg text-left bg-slate-300 mt-9">
            My studies are oriented towards fullstack development, so i have
            knowledge of{' '}
            <span className="text-yellow-500 font-semibold">frontend</span> and{' '}
            <span className="text-blue-500 font-semibold">backend</span>. But if
            I had to choose between coding the frontend or the backend, I would
            choose the backend
          </p>

          <p className="text-lg mt-9 bg-slate-300">
            I am <span className="font-semibold">23</span> years old ,
            originally from southern Finland. But moved to Jyväskylä for
            studies.I've always had a passion for both sports and IT
          </p>
          <p className="text-lg mt-12 bg-slate-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            voluptatem fuga, id exercitationem provident, obcaecati atque alias
          </p>
        </div>
      </div>
    </>
  );
}

export default Intro;
