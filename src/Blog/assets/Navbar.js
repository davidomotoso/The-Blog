import { Link } from "react-router-dom";
import logo from "../static/newBlog.jpg";
import { SearchNav } from "../components/input";
import { AddBlogIcon, HomeIcon, SearchIcon } from "../components/NavIcons";
const Navbar = () => {
  return (
    <header className="pt-5 pb-2 text-lg flex items-center justify-between text-white w-full">
      <div className="flex items-center gap-x-3">
        <img
          src={logo}
          alt="react-logo"
          className="w-14 h-14 rounded-full object-cover"
        />
        <SearchNav />
        <i
          className="bi bi-x-circle-fill text-3xl text-gray-300 hidden cursor-pointer"
          onClick={(e) => {
            const parent = e.target.parentElement;
            const parentSibiling = parent.parentElement.children[1];
            const sibiling = parent.children[3];
            parent.children[1].classList.add("hidden");
            sibiling.classList.remove("hidden");
            parentSibiling.classList.remove("hidden");
            e.target.classList.add("hidden");
          }}
        ></i>
        <SearchIcon />
      </div>

      <nav className="sm:w-52 w-auto">
        <ul className="flex items-center w-full sm:justify-between justify-end sm:gap-x-0 mobile:gap-x-5 text-2xl">
          <li className="relative">
            <Link
              className="before:absolute before:border-b-2 before:border-white before:w-0 before:duration-500 hover:before:w-full before:-bottom-1 sm:block hidden"
              to="/"
            >
              Home
            </Link>
            <HomeIcon />
          </li>
          <li className="relative">
            <Link
              className="before:absolute before:border-b-2 before:border-white before:w-0 before:duration-500 hover:before:w-full before:-bottom-1 sm:block hidden"
              to="/newblog"
            >
              Add blog
            </Link>
            <AddBlogIcon />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
