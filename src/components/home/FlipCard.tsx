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
          <div className="card__back absolute w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center rotate-y-180 backface-hidden">
            <h3 className="text-xl font-bold mb-4 border-b pb-2 w-full text-center">Job Journey</h3>
            <div className="space-y-4 w-full text-left">
              <div className="border-l-2 border-blue-500 pl-3">
                <div className="font-semibold">May 2024 - Aug 2024</div>
                <div>Application Specialist</div>
                <div className="text-gray-300 text-sm">Telia</div>
              </div>
              
              <div className="border-l-2 border-yellow-500 pl-3">
                <div className="font-semibold">May 2023 - Aug 2023</div>
                <div>IT Support</div>
                <div className="text-gray-300 text-sm">City of Jyväskylä</div>
              </div>
              
              <div className="border-l-2 border-blue-500 pl-3">
                <div className="font-semibold">Dec 2021 - July 2022</div>
                <div>IT Support</div>
                <div className="text-gray-300 text-sm">University of Jyväskylä</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;