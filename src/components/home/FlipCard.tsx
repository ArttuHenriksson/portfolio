import '../../index.css';
import arttuhImage from '../../images/arttuh.jpg';

function FlipCard() {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="card w-80 h-96 relative perspective">
        <div className="card__content relative w-full h-full text-center transition-transform duration-1000 transform-style-3d group hover:rotate-y-180">
          <div className="card__front absolute w-full h-full backface-hidden rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
            <img
              src={arttuhImage}
              alt="Arttu Henriksson"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="card__back absolute w-full h-full bg-gradient-to-br  text-white p-8 rounded-lg shadow-lg flex items-center justify-center rotate-y-180 backface-hidden">
            <ul>
              <li>23 years old</li>
              <li>Living in Helsinki</li>
              <li>Tech enthusiast</li>
              <li>Sport enthusiast</li>
              <li>Gamer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
