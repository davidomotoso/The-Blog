import { useSearchContext } from "../partials/SearchContext";

const BlogTitle = ({ value, edit, name }) => {
  return (
    <label htmlFor="title" className="text-white sm:w-[50%] mobile:w-full">
      <h2 className="text-center text-2xl font-semibold mb-2"> {name} Title</h2>
      <input
        type="text"
        id="title"
        placeholder="Give your blog a title"
        className="text-black font-semibold text-lg px-3 py-2 rounded-lg w-full "
        onChange={(e) => value(e)}
        value={edit}
        required
      />
    </label>
  );
};

const BlogAuthor = ({ value, edit, name }) => {
  return (
    <label htmlFor="title" className="text-white sm:w-[50%] mobile:w-full">
      <h2 className="text-center text-2xl font-semibold mb-2">{name} author</h2>
      <input
        type="text"
        id="author"
        placeholder="e.g jhon doe"
        className="text-black font-semibold text-lg px-3 py-2 rounded-lg w-full "
        onChange={(e) => {
          value(e);
        }}
        value={edit}
        required
      />
    </label>
  );
};

const SearchNav = () => {
  const { search, setSearch } = useSearchContext();
  return (
    <label htmlFor="search" className="sm:block hidden sm:w-auto">
      <input
        type="search"
        name="search"
        placeholder="Search for blogs"
        id="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="text-gray-600 px-3 py-2 rounded-lg font-semibold sm:w-auto w-full"
      />
    </label>
  );
};

export { BlogAuthor, BlogTitle, SearchNav };
