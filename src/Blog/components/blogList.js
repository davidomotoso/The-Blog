import { useSearchContext } from "../partials/SearchContext";
import noDefault from "../static/blog.jpg";
import { ReadMore } from "./Button";
const BlogList = ({ blogs }) => {
  const { search } = useSearchContext();
  return (
    <section
      className="flex flex-col gap-y-32 sm:items-start items-center justify-center mt-20 mb-10
    "
    >
      {blogs
        .filter((blog) => {
          return search.trim() === ""
            ? true
            : blog.title.toLowerCase().includes(search.toLowerCase()) ||
                blog.author.toLowerCase().includes(search.toLowerCase());
        })
        .map((blog) => (
          <section
            className="text-white flex sm:flex-row flex-col items-center justify-center gap-x-12 gap-y-8"
            key={blog.id}
          >
            <figure className="w-64 h-64 rounded-full overflow-hidden ">
              {blog && blog.image ? (
                <img
                  src={blog.image}
                  alt="blogvisual"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={noDefault}
                  alt="defaultvisual"
                  className="w-full h-full object-cover"
                />
              )}
            </figure>
            <aside className="sm:w-auto w-full sm:text-start text-center">
              <h1 className="text-3xl font-semibold">{blog.title}</h1>
              <p className="mt-2">
                <span>Written by {blog.author} </span>
              </p>
              <ReadMore link={blog.id} />
            </aside>
          </section>
        ))}
    </section>
  );
};

export default BlogList;
