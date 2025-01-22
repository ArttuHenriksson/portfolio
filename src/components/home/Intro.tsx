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

  if (currentHour < 11) {
    greeting = getGoodMorningGreeting();
  } else if (currentHour < 18) {
    greeting = getGoodAfternoonGreeting();
  } else {
    greeting = getGoodEveningGreeting();
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-12 text-white">
      <div className="text-5xl font-semibold mb-4 text-center mt-12">
        {greeting}
      </div>
      <div className="flex flex-col md:flex-row items-center mt-12 max-w-4xl w-full">
        <div className="flex flex-col md:w-2/3 space-y-6 p-6">
          <h1 className="text-5xl font-extrabold text-center md:text-left">
            Hi, It's me Arttu! <span className="wave">👋</span>
          </h1>
          <div className="flex flex-wrap gap-2 text-lg md:text-xl">
            <p>
              I am a third-year Business Information Technology student at {''}
              <span className="font-semibold">
                JAMK University of Applied Sciences
              </span>
              , specializing in{' '}
              <span className="text-yellow-500 font-semibold">
                Fullstack Development
              </span>
              .
            </p>
            <p>
              My skillset spans both{' '}
              <span className="text-yellow-500 font-semibold">frontend</span>{' '}
              and <span className="text-blue-500 font-semibold">backend</span>{' '}
              technologies, giving me a comprehensive understanding of fullstack
              development.
            </p>

            <p>Psst.. try to hover over me!</p>
          </div>
        </div>
        <FlipCard />
      </div>
    </div>
  );
}

export default Intro;
