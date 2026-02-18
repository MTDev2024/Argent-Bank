import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center py-1 px-5">
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Logo Argent Bank" className="w-50 max-w-full" />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>

        <NavLink
          to="/sign-in"
          className="flex items-center gap-2 font-bold text-[#2c3e50] no-underline hover:underline"
        >
          <FaUserCircle />
          Sign In
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
