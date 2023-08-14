import { useEffect, useState } from "react";
import { SubmitButton } from "../components/Button";
import { BlogAuthor, BlogTitle } from "../components/input";
import InputDiv from "../components/inputDiv";
import { useNavigate } from "react-router-dom";
import useFile from "../partials/useFile";
import useFunction from "../partials/functions";

const Newblog = () => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const navigate = useNavigate();
  const { handleImg, handleVideo, video, image } = useFile();
  const { time, getDate, handleContentChange, content } = useFunction();
  const name = "Blog";

  useEffect(() => {
    getDate();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) {
      alert("your blog does not contain any content");
    } else {
      const data = { title, author, time, video, image, content };
      fetch("http://localhost:4000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      navigate("/");
    }
  };

  return (
    <form
      className="flex flex-col gap-y-8 items-center justify-center pb-3 mt-20 relative"
      onSubmit={handleSubmit}
    >
      <BlogTitle
        value={(e) => {
          setTitle(e.target.value);
        }}
        name={name}
      />
      <InputDiv
        value={handleContentChange}
        handleImg={handleImg}
        handleVideo={handleVideo}
      />
      <BlogAuthor
        value={(e) => {
          setAuthor(e.target.value);
        }}
        name={name}
      />
      <SubmitButton />
    </form>
  );
};

export default Newblog;
