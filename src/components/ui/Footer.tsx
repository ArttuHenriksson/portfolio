import { BsInstagram } from 'react-icons/bs';
import { BsTwitterX } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-900 p-4">
      <div className="container mx-auto text-white">
        <p>
          <span className="font-bold">&copy; </span>
          Arttu Henriksson 2024
        </p>
        <div className="flex space-x-4">
          <BsLinkedin />
          <BsInstagram />
          <BsTwitterX />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
