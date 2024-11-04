import '../../index.css';
import {
  getGoodMorningGreeting,
  getGoodAfternoonGreeting,
  getGoodEveningGreeting,
} from '../../utils/greetings';

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
    <div className="flex flex-col items-center text-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-10 mb-4">
        {greeting}
      </h1>
      <div className="flex flex-col items-center mt-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Hello, It's me Arttu! <span className="wave">👋</span>
        </h1>
      </div>
      <div className="mt-6 md:mt-10 p-4 md:p-6 max-w-2xl text-gray-700">
        <p className="text-xl md:text-2xl mb-4">
          I'm a third year IT student at the JAMK University of Applied Sciences
          in Jyväskylä. I'm 23 years old dude from southern Finland.
        </p>
        <p className="text-lg">
          I have focused my studies on fullstack development, so I have
          knowledge in both{' '}
          <span className="text-yellow-500 font-semibold">frontend</span> and{' '}
          <span className="text-blue-500 font-semibold">backend</span>.
        </p>
      </div>
    </div>
  );
}

export default Intro;
