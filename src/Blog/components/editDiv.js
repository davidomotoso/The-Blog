const EditDiv = () => {
  return (
    <div
      className="overflow-y-auto overflow-x-hidden text-black font-semibold text-lg px-3 py-2 h-96 rounded-2xl bg-white grid gap-y-2"
      // contentEditable="true"
      aria-multiline="true"
      role="textbox"
      aria-label="Editable Content"
      onKeyUp={(e) => value(e)}
    >
      {blogs && blogs.content ? (
        blogs.content.map((content, index) => <p key={index}>{content}</p>)
      ) : (
        <p></p>
      )}{" "}
      );
    </div>
  );
};

export default EditDiv;
