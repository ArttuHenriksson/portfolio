import '../../index.css';
import {
  getGoodMorningGreeting,
  getGoodAfternoonGreeting,
  getGoodEveningGreeting,
} from '../../utils/greetings';
import arttuhImage from '../../images/arttuh.jpg';

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
      <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4 text-center">
          {greeting}
        </h1>

        {/* Main container with flex row layout */}
        <div className="flex flex-col md:flex-row items-center mt-12 max-w-4xl w-full">
          {/* Left column for text content */}
          <div className="flex flex-col items-start md:items-start md:w-2/3 text-gray-700 space-y-4 p-6">
            <h1 className="text-5xl font-extrabold text-gray-900 text-center md:text-left">
              Hi, It's me Arttu! <span className="wave">👋</span>
            </h1>
            <p className="text-xl md:text-2xl">
              I'm a third year business information technology student at the
              JAMK University of Applied Sciences.
            </p>
            <p className="text-lg bg-slate-300 p-4 rounded-lg">
              My studies are oriented towards fullstack development, so I have
              knowledge of{' '}
              <span className="text-yellow-500 font-semibold">frontend</span>{' '}
              and <span className="text-blue-500 font-semibold">backend</span>.
              But if I had to choose between coding the frontend or the backend,
              I would choose the backend.
            </p>
            <p className="text-lg bg-slate-300 p-4 rounded-lg">
              I am <span className="font-semibold">23</span> years old,
              originally from southern Finland. But moved to Jyväskylä for
              studies. I've always had a passion for both sports and IT.
            </p>
          </div>

          <div className="flex justify-center md:justify-start md:w-1/3 mt-6 md:mt-0">
            <img
              src={arttuhImage}
              alt="Arttu's Profile"
              className="w-96 h-96 rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
