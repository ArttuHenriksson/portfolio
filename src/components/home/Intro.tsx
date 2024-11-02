import '../../index.css';
function Intro() {
  return (
    <>
      <div className="flex justify-start items-start ">
        <h1 className="text-5xl font-bold mt-20 p-3">
          Hello, It's me Arttu! <span className="wave">👋</span>
        </h1>
      </div>
      <div className="mt-12 p-3">
        <p>
          I'am a IT studet at the University of Applied Sciences in Jyväskylä.
        </p>
        <p>
          I have focused my studies on fullstack development, so i have
          knowledge in both <span className="text-yellow-500">frontend</span>{' '}
          and <span className="text-blue-500">backend</span>.
        </p>
      </div>
    </>
  );
}

export default Intro;
