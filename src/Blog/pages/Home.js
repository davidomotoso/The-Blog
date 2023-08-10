import { Link } from "react-router-dom";
import BlogList from "../components/blogList";
import UseFetchBlog from "../services/useFetchBlog";

const Home = () => {
  const { blogs, error, loading } = UseFetchBlog("http://localhost:4000/blogs");
  return (
    <>
      {loading && (
        <div className="text-lg text-center text-white">Loading...</div>
      )}
      {error && (
        <h1 className="text-3xl font-semibold text-center text-red-500 pt-4">
          Couldn't get data
        </h1>
      )}
      {blogs && blogs.length > 0 ? (
        <BlogList blogs={blogs} />
      ) : (
        <div className="h-[79vh] w-full flex justify-center items-center">
          <p className="text-white text-3xl">
            You need to add a blog.{" "}
            <Link className="hover:underline" to={"/newblog"}>
              Create a new blog
            </Link>
            .
          </p>
        </div>
      )}
    </>
  );
};

export default Home;
