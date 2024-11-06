import { Link } from 'react-router-dom';
import { IoHomeSharp } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa6';
import { IoTelescopeOutline } from 'react-icons/io5';
function Header() {
  return (
    <header className="sticky top-0 w-full position-fixed p-4  bg-slate-300">
      <nav className="flex justify-center text-center">
        <ul className="flex gap-12">
          <li>
            <Link
              to="/"
              className="text-black hover:text-gray-300 flex items-center gap-1"
            >
              <IoHomeSharp size={22} />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-black hover:text-gray-300 flex items-center gap-1"
            >
              <FaRegUser size={22} />
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-black hover:text-gray-300 flex items-center gap-1"
            >
              <IoTelescopeOutline size={22} /> Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
