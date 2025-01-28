import { IoHomeSharp } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa6';
import { IoTelescopeOutline } from 'react-icons/io5';
import HeaderLink from './HeaderLink';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-zinc-900 text-white p-4 z-50">
      <nav className="flex justify-center text-center">
        <ul className="flex gap-12">
          <li>
            <HeaderLink to="/">
              <IoHomeSharp size={22} />
              Home
            </HeaderLink>
          </li>
          <li>
            <HeaderLink to="/about">
              <FaRegUser size={22} />
              About
            </HeaderLink>
          </li>
          <li>
            <HeaderLink to="/projects">
              <IoTelescopeOutline size={22} />
              Projects
            </HeaderLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
