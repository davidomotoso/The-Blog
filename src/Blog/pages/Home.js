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
      {blogs && blogs.length > 0 ? (
        <BlogList blogs={blogs} />
      ) : (
        <div className="h-[80vh] w-full flex items-center justify-center">
          <p className="text-3xl text-white">
            You should{" "}
            <Link to={"/newblog"} className="hover:underline">
              create a new blog
            </Link>
          </p>
        </div>
      )}
      {error && (
        <h1 className="text-2xl font-semibold text-center text-white">
          Couldn't get data
        </h1>
      )}
    </>
  );
};

export default Home;
