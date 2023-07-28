import { useParams } from "react-router-dom";
import UseFetchBlog from "../services/useFetchBlog";

const Textarea = ({ name, value }) => {
  const { id } = useParams();
  const { blogs } = UseFetchBlog(`http://localhost:4000/blogs/${id}`);
  return (
    <label htmlFor="editedContent" className="w-[50%] h-max">
      <h2 className="text-center text-2xl font-semibold mb-2 text-white">
        {name} Content
      </h2>
      <div
        className="overflow-y-auto overflow-x-hidden text-black font-semibold text-lg px-3 py-2 h-96 rounded-2xl bg-white"
        contentEditable="true"
        aria-multiline="true"
        role="textbox"
        aria-label="Editable Content"
        onKeyUp={(e) => value(e)}
      >
        {blogs && blogs.content ? (
          blogs.content.map((content, index) => <p key={index}>{content}</p>)
        ) : (
          <p></p>
        )}
      </div>
    </label>
  );
};

export default Textarea;
