import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-zinc-900 text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <p>
          <span className="font-bold">&copy; </span>
          Arttu Henriksson | {currentYear}
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/arttu-henriksson-a07943261/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <BsLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/arttuhen/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            <BsInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
