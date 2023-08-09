import { Link } from "react-router-dom";
import logo from "../static/blog.jpg";
import { SearchNav } from "../components/input";
const Navbar = () => {
  return (
    <header className="pt-2 pb-2 px-4 text-lg flex items-center justify-between text-white w-full">
      <div className="flex items-center gap-x-3">
        <img
          src={logo}
          alt="react-logo"
          className="w-14 h-14 rounded-full object-cover"
        />
        <SearchNav />
      </div>

      <nav className="w-52">
        <ul className="flex items-center w-full justify-between text-2xl">
          <li className="relative">
            <Link
              className="before:absolute before:border-b-2 before:border-white before:w-0 before:duration-500 hover:before:w-full before:-bottom-1"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="relative">
            <Link
              className="before:absolute before:border-b-2 before:border-white before:w-0 before:duration-500 hover:before:w-full before:-bottom-1"
              to="/newblog"
            >
              Add blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
