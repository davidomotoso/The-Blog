import { useSearchContext } from "../partials/SearchContext";
import noDefault from "../static/newBlog.jpg";
import { ReadMore } from "./Button";
const BlogList = ({ blogs }) => {
  const { search } = useSearchContext();
  return (
    <section
      className="flex flex-col gap-y-14 items-start justify-center mt-20 mb-10
    "
    >
      {blogs
        .filter((blog) => {
          return search.toLowerCase() === ""
            ? blog
            : blog.title.toLowerCase().includes(search) ||
                blog.author.toLowerCase().includes(search);
        })
        .map((blog) => (
          <section
            className="text-white flex items-center justify-center gap-x-12"
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
            <aside>
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
