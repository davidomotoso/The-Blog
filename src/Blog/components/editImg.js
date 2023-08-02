import { useParams } from "react-router-dom";
import UseFetchBlog from "../services/useFetchBlog";

const EditImg = () => {
  const { id } = useParams();
  const { blogs } = UseFetchBlog(`http://localhost:4000/blogs/${id}`);
  return (
    <>
      {blogs && blogs.image ? (
        <section className="w-full h-96">
          <img
            src={blogs.image}
            className="blur-sm rounded-lg w-full h-full object-cover"
            alt="editVisual"
          />
        </section>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default EditImg;
