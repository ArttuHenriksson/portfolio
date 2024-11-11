import '../../index.css';
import {
  getGoodMorningGreeting,
  getGoodAfternoonGreeting,
  getGoodEveningGreeting,
} from '../../utils/greetings';
import FlipCard from './FlipCard';

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
    <div className="flex flex-col items-center min-h-screen p-12 text-white">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-center mt-12">
        {greeting}
      </h1>
      <div className="flex flex-col md:flex-row items-center mt-12 max-w-4xl w-full">
        {/* Left Section: Text Content */}
        <div className="flex flex-col md:w-2/3 space-y-6 p-6">
          <h1 className="text-5xl font-extrabold text-center md:text-left">
            Hi, It's me Arttu! <span className="wave">👋</span>
          </h1>

          {/* Inline Text Section */}
          <div className="flex flex-wrap gap-2 text-lg md:text-xl">
            <p>
              I'm a third year business information technology student at the
              JAMK University of Applied Sciences.
            </p>
            <p>
              My studies are oriented towards fullstack development, so I have
              knowledge of{' '}
              <span className="text-yellow-500 font-semibold">frontend</span>{' '}
              and <span className="text-blue-500 font-semibold">backend</span>.
            </p>
            <p>
              But if I had to choose between coding the frontend or the backend,
              I would choose the backend.
            </p>
          </div>
        </div>
        <FlipCard />
      </div>
    </div>
  );
}

export default Intro;
