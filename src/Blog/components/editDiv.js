import { useParams } from "react-router-dom";
import UseFetchBlog from "../services/useFetchBlog";
import EditImg from "./editImg";
import "./index.css";

const EditDiv = ({ name, value }) => {
  const { id } = useParams();
  const { blogs } = UseFetchBlog(`http://localhost:4000/blogs/${id}`);
  return (
    <label htmlFor="editedContent" className="sm:w-[50%] w-full h-max">
      <h2 className="text-center text-2xl font-semibold mb-2 text-white">
        {name} Content
      </h2>
      <div
        className="overflow-y-auto overflow-x-hidden text-black font-semibold text-lg px-3 py-2 h-96 rounded-2xl bg-white grid gap-y-6 cursor-text"
        contentEditable="true"
        aria-multiline="true"
        role="textbox"
        aria-label="Editable Content"
        onKeyUp={(e) => value(e)}
      >
        <div>
          {blogs && blogs.content ? (
            blogs.content.map((content, index) => <p key={index}>{content}</p>)
          ) : (
            <p></p>
          )}
        </div>
        <EditImg />
      </div>
    </label>
  );
};

export default EditDiv;
