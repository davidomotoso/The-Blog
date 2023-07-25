import logo from "../static/react.png";
import { ReadMore } from "./Button";
const BlogList = ({ blogs }) => {
  return (
    <section className="flex flex-col gap-y-14 items-start justify-center mt-20">
      {blogs.map((blog) => (
        <section
          className="text-white flex items-center justify-center gap-x-12"
          key={blog.id}
        >
          <figure>
            <img src={logo} alt="" />
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
