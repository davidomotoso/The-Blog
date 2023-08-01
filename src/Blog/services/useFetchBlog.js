import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UseFetchBlog = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [originalBlogs, setOriginalBlogs] = useState(null);
  const [error, setError] = useState(null);
  const [loading, IsLoading] = useState(true);
  const [deletion, IsDeleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setBlogs(data);
        setOriginalBlogs(data);
        IsLoading(false);
      })
      .catch((err) => {
        setError(err);
        IsLoading(false);
      });
  }, [url]);

  // handle deletion of blogs
  const handleDelete = (id) => {
    fetch(`http://localhost:4000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      setBlogs("");
      IsDeleted(true);
    });
  };

  // handle search function
  const handleSearch = (e) => {
    const inputLowerCase = e.target.value.toLowerCase();
    if (inputLowerCase === "") {
      // If the input field is empty, reset blogs state to the original data
      setBlogs(originalBlogs);
    } else {
      // Filter and update blogs state with matching titles
      const getTitle = originalBlogs.filter((blog) =>
        blog.title.toLowerCase().includes(inputLowerCase)
      );
      console.log(setBlogs(getTitle));
    }
  };

  // navigate to the editPage
  const handleEdit = (id) => {
    navigate(`/editBlog/${id}`);
  };
  return {
    blogs,
    error,
    loading,
    deletion,
    handleDelete,
    handleEdit,
    handleSearch,
  };
};

export default UseFetchBlog;
