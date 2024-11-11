import '../../index.css';
import arttuhImage from '../../images/arttuh.jpg';

function FlipCard() {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="card w-80 h-96 relative perspective">
        {/* Card Content with Flip Animation */}
        <div className="card__content relative w-full h-full text-center transition-transform duration-1000 transform-style-3d group hover:rotate-y-180">
          {/* Front Side */}
          <div className="card__front absolute w-full h-full backface-hidden bg-gray-900 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
            <img
              src={arttuhImage}
              alt="Arttu Henriksson"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Back Side */}
          <div className="card__back absolute w-full h-full bg-gray-800 text-white p-8 rounded-lg shadow-lg flex items-center justify-center rotate-y-180 backface-hidden">
            <p>
              I am <span className="font-semibold">23</span> years old.
              Originally from southern Finland, I'm a big sport enthusiast and a
              tech enjoyer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
