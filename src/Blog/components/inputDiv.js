import FileButton from "./fileButton";
import "./index.css";
const InputDiv = ({ value, handleImg, handleVideo }) => {
  return (
    <section className="sm:w-[50%] mobile:w-full h-fit relative">
      <h2 className="text-center text-2xl font-semibold mb-2 text-white">
        Blog Content
      </h2>
      <div className="w-full h-[25rem] rounded-2xl bg-white">
        <div
          className="overflow-y-auto overflow-x-hidden text-black font-semibold text-lg px-3 py-2 h-80 rounded-t-2xl cursor-text"
          name="blogCreation"
          contentEditable="true"
          aria-multiline="true"
          role="textbox"
          aria-label="Editable Content"
          data-placeholder="Type your content here..."
          onKeyUp={(e) => value(e)}
        ></div>
      </div>
      <FileButton handleImg={handleImg} handleVideo={handleVideo} />
    </section>
  );
};

export default InputDiv;
