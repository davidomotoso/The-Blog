const FileButton = ({ handleImg, handleVideo }) => {
  return (
    <div className="absolute left-2 bottom-2 z-20 w-[97%]">
      <div className="text-2xl text-purple-600  flex items-center gap-x-3 bg-gray-200 rounded-full py-2 px-3 w-[7.5rem]">
        <button
          type="submit"
          className="w-10 rounded-full hover:shadow-lg hover:bg-white "
        >
          <input
            type="file"
            title="Add a video"
            className=" w-full z-10 relative opacity-0 cursor-pointer"
            accept="video/*"
            onChange={(evt) => handleVideo(evt)}
          />
          <i className="bi bi-camera-reels-fill -ml-10 "></i>
        </button>
        <button
          type="submit"
          className="w-10 hover:shadow-lg hover:bg-white rounded-full"
        >
          <input
            type="file"
            title="Add an image"
            className=" w-full z-10 relative opacity-0 cursor-pointer"
            accept="image/*"
            onChange={(evt) => {
              handleImg(evt);
            }}
          />
          <i className="bi bi-file-earmark-image-fill -ml-10 "></i>
        </button>
      </div>
    </div>
  );
};

export default FileButton;
