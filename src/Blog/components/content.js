import { useParams } from "react-router-dom";
import UseFetchBlog from "../services/useFetchBlog";

const Content = () => {
  const { id } = useParams();
  const { blogs } = UseFetchBlog(`http://localhost:4000/blogs/${id}`);
  return (
    <div className="text-xl my-6 font-normal grid gap-y-4 mt-12">
      {blogs && blogs.content ? (
        blogs.content.map((content, index) => <p key={index}>{content}</p>)
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Content;
