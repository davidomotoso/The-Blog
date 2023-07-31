import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UseFetchBlog = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);
  const [loading, IsLoading] = useState(true);
  const [deletion, IsDeleted] = useState(false);
  const navigate = useNavigate();

  // handle search function
  const handleSearch = (e) => {
    const inputLowerCase = e.target.value.toLowerCase();
    fetch("http://localhost:4000/blogs")
      .then((data) => {
        return data.json();
      })
      .then((blogs) => {
        const getTitle = blogs.filter((blog) =>
          inputLowerCase.contains(blog.title.toLowerCase())
        );
        console.log(getTitle);
      });
  };

  useEffect(() => {
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setBlogs(data);
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
