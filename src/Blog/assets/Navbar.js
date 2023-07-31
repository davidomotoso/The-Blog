import { Link } from "react-router-dom";
import logo from "../static/react.png";
import { SearchNav } from "../components/input";
const Navbar = () => {
  return (
    <header className="pt-2 pb-2 px-4 text-lg flex items-center justify-between bg-black text-white w-full">
      <div className="flex items-center gap-x-3">
        <img src={logo} alt="react-logo" className="w-10" />
        <SearchNav />
      </div>

      <nav className="w-52">
        <ul className="flex items-center w-full justify-between text-2xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/newblog">Add blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
