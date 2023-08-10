import { Link } from "react-router-dom";

export const SearchIcon = () => {
  const handleMobileSearch = (e) => {
    const parent = e.target.parentElement;
    const parentSibiling = parent.parentElement.children[1];
    parentSibiling.classList.add("hidden");
    const sibiling = parent.children[1];
    parent.children[2].classList.remove("hidden");
    sibiling.classList.remove("hidden");
    e.target.classList.add("hidden");
  };
  return (
    <i
      className="bi bi-search px-3 pb-2 pt-1 rounded-lg border-2 border-gray-500 text-white sm:hidden block cursor-pointer"
      onClick={(e) => handleMobileSearch(e)}
      title="search"
    ></i>
  );
};

export const HomeIcon = () => {
  return (
    <Link to="/">
      <i
        className="bi bi-house p-2 pt-1 rounded-lg border-2 border-gray-500 text-white sm:hidden block"
        title="Home"
      ></i>
    </Link>
  );
};

export const AddBlogIcon = () => {
  return (
    <Link to="/newblog">
      <i
        className="bi bi-journal-bookmark p-2 pt-1 rounded-lg border-2 border-gray-500 text-white sm:hidden block"
        title="Add Blog"
      ></i>
    </Link>
  );
};
