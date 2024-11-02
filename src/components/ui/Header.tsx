import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="sticky top-0 w-full bg-gray-900 p-4 z-10">
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-white hover:text-gray-300">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
