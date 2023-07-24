import { useParams } from "react-router-dom";
import UseFetchBlog from "../services/useFetchBlog";
import { useEffect, useState } from "react";
import { DeleteButton, EditButton } from "../components/Button";
import deleted from "../static/Deleted_img.png";

const BlogContent = () => {
  const { id } = useParams();
  const { blogs, loading, deletion, handleDelete, handleEdit } = UseFetchBlog(
    `http://localhost:4000/blogs/${id}`
  );
  const [date, setDate] = useState(null);

  useEffect(() => {
    function handleBlog() {
      if (blogs) {
        const { year, month, day, hour, min } = blogs.time;
        let date = new Date();
        let modifiedyear = date.getFullYear();
        let modifiedmonth = date.getMonth() + 1;
        let modifiedmin = date.getMinutes();
        let modifiedhour = date.getHours();
        let modifiedday = date.getDate();
        const newMonth = modifiedmonth - month;
        const newDay = modifiedday - day;
        const newMinute = modifiedmin - min;
        const newHour = modifiedhour - hour;

        modifiedyear > year
          ? setDate(`${day}-${month}-${year}`)
          : newMonth === 1
          ? setDate(`${newMonth} month ago`)
          : modifiedmonth > month
          ? setDate(`${newMonth} months ago`)
          : newDay === 1
          ? setDate(`${newDay} day ago`)
          : modifiedday > day
          ? setDate(`${newDay} days ago`)
          : newHour === 1
          ? setDate(`${newHour} hour ago`)
          : modifiedhour > hour
          ? setDate(`${newHour} hours ago`)
          : newMinute === 1
          ? setDate(`${newMinute} minute ago`)
          : modifiedmin > min
          ? setDate(`${newMinute} minutes ago`)
          : modifiedmin === min
          ? setDate("Just now")
          : console.log("none worked");
      }
    }
    handleBlog();
  }, [blogs]);

  return (
    <div className="text-white flex items-center justify-center mt-5">
      {loading && <div className="text-lg">Loading...</div>}
      {deletion && (
        <div className="w-[36em] h-full mb-2">
          <img
            src={deleted}
            className="object-cover w-full"
            alt="deleted illustration"
          />
          <p className="text-center text-2xl font-medium">
            This post has being deleted
          </p>
        </div>
      )}
      {blogs && (
        <div className="w-[45rem]">
          <h1 className="text-3xl font-semibold mb-1">{blogs.title}</h1>
          <div className="text-lg flex items-center justify-between">
            <p>Written by {blogs.author}</p>
            <p className="text-gray-300">{date}</p>
          </div>
          <div className="text-xl mt-6 font-normal ">{blogs.content}</div>
          <div className="flex items-center gap-x-4 mt-4">
            <DeleteButton click={() => handleDelete(blogs.id)} />
            <EditButton click={() => handleEdit(blogs.id)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogContent;
