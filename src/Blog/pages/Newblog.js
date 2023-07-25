import { useEffect, useState } from "react";
import { SubmitButton } from "../components/Button";
import { BlogAuthor, BlogTitle } from "../components/input";
import InputDiv from "../components/inputDiv";
import { useNavigate } from "react-router-dom";
import useFile from "../partials/useFile";

const Newblog = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [author, setAuthor] = useState();
  const [time, setTime] = useState();
  const navigate = useNavigate();
  const { handleImg, handleVideo, video, image } = useFile();
  const name = "Blog";
  useEffect(() => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    setTime({ year, month, day, hour, min });
  }, []);

  const handleSubmit = () => {
    const data = { title, author, time, video, image, content };
    fetch("http://localhost:4000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    navigate("/");
  };
  const handleContentChange = (e) => {
    if (e.target) {
      const content_child = e.target.childNodes;
      const firstContent = content_child[0].textContent;
      const secondContent = content_child[1].textContent;
      const thirdContent = content_child[2].textContent;
      // console.log(firstContent, secondContent, thirdContent);
      if (firstContent) {
        if (secondContent) {
          if (thirdContent) {
            setContent({ firstContent, secondContent, thirdContent });
          }
        }
      }
      // console.log(value.textContent);
    }
  };
  return (
    <section className="flex flex-col gap-y-8 items-center justify-center pb-3 mt-20 relative">
      <BlogTitle
        value={(e) => {
          setTitle(e.target.value);
        }}
        name={name}
      />
      <InputDiv
        value={(e) => {
          handleContentChange(e);
        }}
        handleImg={handleImg}
        handleVideo={handleVideo}
      />
      <BlogAuthor
        value={(e) => {
          setAuthor(e.target.value);
        }}
        name={name}
      />
      <SubmitButton handle={handleSubmit} />
    </section>
  );
};

export default Newblog;
