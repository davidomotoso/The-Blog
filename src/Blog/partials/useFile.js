import { useState } from "react";

const useFile = () => {
  const content = document.querySelector("div[name=blogCreation]");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState();
  // useEffect(() => {
  //   if (content) {
  //     var content_child = content.childNodes;
  //     console.log(content_child);
  //     if (content_child) {
  //       content_child.forEach((hey) => {
  //         console.log(hey);
  //       });
  //     }
  //   }
  // });

  const handleImg = (e) => {
    const file = e.target.files[0];
    const img = document.createElement("img");
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setImage(reader.result);
      img.src = reader.result;
    });

    content.appendChild(img);
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleVideo = (e) => {
    const file = e.target.files[0];
    const vid = document.createElement("video");
    vid.setAttribute("controls", "controls");
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setVideo(reader.result);
      vid.src = reader.result;
    });
    content.appendChild(vid);
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return { handleImg, video, image, handleVideo };
};
export default useFile;
