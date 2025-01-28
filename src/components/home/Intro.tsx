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
    <div className="flex flex-col items-center min-h-screen px-6 sm:px-12 py-8 text-white">
      <div className="text-3xl sm:text-5xl font-semibold mb-4 text-center mt-12">
        {greeting}
      </div>

      <div className="flex flex-col md:flex-row items-center mt-12 max-w-4xl w-full">
        <div className="flex flex-col space-y-6 p-4 sm:p-6 md:w-2/3">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-center md:text-left">
            Hi, It's me Arttu! <span className="wave">👋</span>
          </h1>
          <div className="flex flex-col gap-4 text-base sm:text-lg md:text-xl text-center md:text-left">
            <p>
              I am a third-year Business Information Technology student at{' '}
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

        <div className="mt-8 md:mt-0 md:ml-8 w-full md:w-1/3 flex justify-center">
          <FlipCard />
        </div>
      </div>
    </div>
  );
}

export default Intro;
