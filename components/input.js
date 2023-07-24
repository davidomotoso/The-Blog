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
      />
    </label>
  );
};

export { BlogAuthor, BlogTitle };
