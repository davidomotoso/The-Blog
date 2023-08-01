import UseFetchBlog from "../services/useFetchBlog";

const BlogTitle = ({ value, edit, name }) => {
  return (
    <label htmlFor="title" className="text-white w-[50%]">
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
    <label htmlFor="title" className="text-white w-[50%]">
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
  const { handleSearch } = UseFetchBlog("http://localhost:4000/blogs");
  return (
    <label htmlFor="search">
      <input
        type="text"
        name="search"
        placeholder="Search for blogs"
        id="search"
        onKeyUp={(e) => handleSearch(e)}
        className=" text-gray-600 px-3 py-1 rounded-lg font-semibold"
      />
    </label>
  );
};

export { BlogAuthor, BlogTitle, SearchNav };
