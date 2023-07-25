import { useNavigate, useParams } from "react-router-dom";
import { BlogAuthor, BlogTitle } from "../components/input";
import { useEffect, useState } from "react";
import UseFetchBlog from "../services/useFetchBlog";
import Textarea from "../components/textarea";

const EditBlog = () => {
  const { id } = useParams();
  const { blogs } = UseFetchBlog(`http://localhost:4000/blogs/${id}`);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // When 'blogs' data is available, set the state with the fetched values
    if (blogs) {
      setTitle(blogs.title);
      setContent(blogs.content);
      setAuthor(blogs.author);
      setTime(blogs.time);
    }
  }, [blogs]);

  const handleSave = () => {
    const data = { title, content, author, time };
    fetch(`http://localhost:4000/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data), // Send the entire data object as the body
    });
    navigate(`/blog/${id}`); //navigate back to the blog page
  };

  const name = "Edit";

  return (
    <div className="flex flex-col gap-y-8 items-center justify-center w-full mb-7">
      {blogs && (
        <>
          {/* Blog Title */}
          <BlogTitle
            value={(e) => {
              setTitle(e.target.value);
            }}
            edit={title}
            name={name}
          />

          {/* Blog Content */}
          <Textarea
            name={name}
            edit={content}
            value={(e) => setContent(e.target.value)}
          />

          {/* Blog Author */}
          <BlogAuthor
            value={(e) => {
              setAuthor(e.target.value);
            }}
            edit={author}
            name={name}
          />
        </>
      )}
      {/* Save Button */}
      <button
        className="py-3 px-8 bg-purple-600 text-lg font-medium text-white rounded-lg active:bg-purple-900"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default EditBlog;
