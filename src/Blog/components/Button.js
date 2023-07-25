import { Link } from "react-router-dom";
import trash from "../static/trash.gif";
const SubmitButton = ({ handle }) => {
  return (
    <>
      <button
        type="submit"
        className="rounded-lg p-3 w-36 text-center text-lg font-semibold bg-purple-600 text-white my-7"
        onClick={handle}
      >
        Submit
      </button>
    </>
  );
};
const ReadMore = ({ link }) => {
  return (
    <button
      type="submit"
      className="mt-3 hover:bg-green-900 rounded-lg py-2 px-4 bg-green-600 text-lg font-semibold"
    >
      <Link to={`/blog/${link}`}>Read more..</Link>
    </button>
  );
};

const DeleteButton = ({ click }) => {
  return (
    <button
      type="button"
      onClick={click}
      className="bg-red-600 py-3 px-6 rounded-xl text-lg font-medium active:bg-red-800 group flex items-center text-black
      "
    >
      <div className="w-max mr-2">
        <img
          className="mix-blend-color-burn hidden group-hover:block"
          src={trash}
          alt="trash icon"
        />
        <i className="bi text-[1.15em] bi-trash3  group-hover:hidden"></i>
      </div>
      Delete
    </button>
  );
};
const EditButton = ({ click }) => {
  return (
    <button
      type="button"
      className="bg-green-600 py-3 px-6 rounded-xl text-lg font-medium active:bg-green-800"
      onClick={click}
    >
      <i className="bi bi-pen-fill mr-2"></i> Edit
    </button>
  );
};

export { SubmitButton, ReadMore, DeleteButton, EditButton };
