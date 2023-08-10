import { useParams } from "react-router-dom";
import UseFetchBlog from "../services/useFetchBlog";
import { useEffect } from "react";
import { DeleteButton, EditButton } from "../components/Button";
import deleted from "../static/Deleted_illustration.png";
import Content from "../components/content";
import useFunction from "../partials/functions";

const BlogContent = () => {
  const { id } = useParams();
  const { blogs, loading, deletion, handleDelete, handleEdit } = UseFetchBlog(
    `http://localhost:4000/blogs/${id}`
  );
  const { handleModifiedDate, date } = useFunction();
  useEffect(() => {
    handleModifiedDate(blogs);
  }, [handleModifiedDate, blogs]);

  return (
    <div className="text-white flex items-center justify-center my-5 h-full">
      {loading && <div className="text-lg">Loading...</div>}
      {deletion && (
        <div className="w-[32em] h-[88vh] flex flex-col items-center justify-center mb-2">
          <img
            src={deleted}
            className="object-cover w-full h-80"
            alt="deleted illustration"
          />
          <p className="text-center text-2xl font-medium">
            This post has being deleted
          </p>
        </div>
      )}
      {blogs && (
        <div className="md:w-[45rem] w-full mt-6">
          <h1 className="text-4xl font-semibold mb-4">{blogs.title}</h1>
          <div className="text-lg flex flex-wrap gap-x-5 gap-y-1 sm:items-center justify-between">
            <p>Written by {blogs.author}</p>
            <p className="text-gray-300 flex items-center gap-x-5">
              {blogs.edit && <span>{blogs.edit} </span>}
              <span>{date}</span>
            </p>
          </div>
          <Content />
          <section className="h-full w-full ">
            {blogs.image && (
              <img
                src={blogs.image}
                className="w-full h-96 object-cover object-center rounded-lg"
                alt="defaultvisual"
              />
            )}
          </section>
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <DeleteButton click={() => handleDelete(blogs.id)} />
            <EditButton click={() => handleEdit(blogs.id)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogContent;
