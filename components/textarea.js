const Textarea = ({ name, edit, value }) => {
  return (
    <label htmlFor="editedContent" className="w-[50%] h-max">
      <h2 className="text-center text-2xl font-semibold mb-2 text-white">
        {name} Content
      </h2>
      <textarea
        id="editedContent"
        name="blogCreation"
        className="w-full h-96 resize-none rounded-2xl text-black font-semibold text-lg px-3 py-2"
        onChange={(e) => value(e)}
        value={edit}
      ></textarea>
    </label>
  );
};

export default Textarea;
