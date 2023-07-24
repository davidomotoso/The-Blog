import BlogList from "../components/blogList";
import UseFetchBlog from "../services/useFetchBlog";

const Home = () => {
  const { blogs, error, loading } = UseFetchBlog("http://localhost:4000/blogs");
  return (
    <>
      {blogs && <BlogList blogs={blogs} />}
      {loading && (
        <div className="text-lg text-center text-white">Loading...</div>
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
