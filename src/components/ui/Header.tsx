import { Link } from 'react-router-dom';
import { IoHomeSharp } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa6';
import { IoTelescopeOutline } from 'react-icons/io5';
function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-zinc-900 text-white p-4 z-50">
      <nav className="flex justify-center text-center">
        <ul className="flex gap-12">
          <li>
            <Link
              to="/"
              className="hover:text-gray-300 flex items-center gap-1"
            >
              <IoHomeSharp size={22} />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-gray-300 flex items-center gap-1"
            >
              <FaRegUser size={22} />
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-gray-300 flex items-center gap-1"
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
